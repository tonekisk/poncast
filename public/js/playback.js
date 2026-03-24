import { state, THEME_KEY } from './state.js';
import { send, save } from './api.js';
import { t } from './i18n.js';
import { esc } from './utils.js';

// We'll import these from ui.js later, or use callbacks to avoid circularity if possible.
// For now, let's assume we can import them.
// import { notify, renderList, updatePonBtn } from './ui.js';

let uiHandlers = {
  notify: () => {},
  renderList: () => {},
  updatePonBtn: () => {}
};

export function setUiHandlers(handlers) {
  uiHandlers = { ...uiHandlers, ...handlers };
}

export function drawCompositePreview() {
  const pi = document.getElementById('p-img');
  const pv = document.getElementById('p-vid');
  const mini = document.getElementById('p-mini');
  if (!pi || !pv || !mini) return;

  const item = state.previewMediaItem;
  const text = state.previewTextItem;

  if (item) {
    const d = item.data || {};
    if (item.type === 'media') {
      const url = d._objectURL || d.src;
      if (url) {
        if (d.kind === 'video') {
          if (pv.src !== url) pv.src = url;
          pv.style.display = 'block';
          pi.style.display = 'none';
          if (d.startTime) pv.currentTime = d.startTime;
          pv.pause();
        } else {
          pi.src = url;
          pi.style.display = 'block';
          pv.style.display = 'none';
        }
      }
    } else if (item.type === 'slide' && d.slides?.length) {
      pi.src = d.slides[0].src;
      pi.style.display = 'block';
      pv.style.display = 'none';
    }
  } else {
    pi.style.display = 'none';
    pv.style.display = 'none';
  }

  if (text) {
    mini.style.display = 'block';
    // (Rendering logic for mini overlay...)
  } else {
    mini.style.display = 'none';
  }
}

export function renderPreview(c) {
  if (!c) return;
  if (['media', 'slide', 'comp'].includes(c.type)) {
    state.previewMediaItem = c;
    localStorage.setItem('poncast_prevMediaId', c.id);
  } else {
    state.previewTextItem = c;
    localStorage.setItem('poncast_prevTextId', c.id);
  }
  drawCompositePreview();
}

export function stopCountdown() {
  if (state.cdRaf) cancelAnimationFrame(state.cdRaf);
  state.cdRaf = null;
  state.cdIsVideo = false;
  document.getElementById('countdown-bar')?.classList.remove('active');
  document.querySelectorAll('.c-remaining').forEach(el => el.textContent = '');
}

export function tickCountdown() {
  const timeEl = document.getElementById('cd-time');
  const fillEl = document.getElementById('cd-fill');
  if (!timeEl || !fillEl) return;

  if (state.cdIsVideo && state.cdTotal <= 0) {
    const vid = document.getElementById('p-vid');
    if (vid && isFinite(vid.duration) && vid.duration > 0) {
      state.cdTotal = state.cdPlayDur > 0 ? state.cdPlayDur : Math.max(1, vid.duration - state.cdStartTime);
      state.cdStart = Date.now();
    } else {
      state.cdRaf = requestAnimationFrame(tickCountdown);
      return;
    }
  }

  const elapsed = (Date.now() - state.cdStart) / 1000;
  const remaining = Math.max(0, state.cdTotal - elapsed);
  const pct = state.cdTotal > 0 ? (remaining / state.cdTotal) * 100 : 0;
  const m = Math.floor(remaining / 60);
  const s = Math.floor(remaining % 60);
  const timeStr = `${m}:${String(s).padStart(2, '0')}`;

  timeEl.textContent = timeStr;
  
  [state.playingId, state.telopId].forEach(id => {
    if (!id) return;
    const el = document.getElementById(`rem-${id}`);
    if (el) { el.textContent = timeStr; el.style.color = 'var(--grn)'; }
  });

  fillEl.style.width = pct + '%';
  fillEl.classList.toggle('warning', pct < 20);

  if (remaining <= 0) {
    timeEl.textContent = '0:00';
    fillEl.style.width = '0%';
    return;
  }
  state.cdRaf = requestAnimationFrame(tickCountdown);
}

export function startCountdownTimer(totalSec) {
  stopCountdown();
  if (!totalSec || totalSec <= 0) return;
  state.cdIsVideo = false;
  state.cdTotal = totalSec;
  state.cdStart = Date.now();
  document.getElementById('countdown-bar')?.classList.add('active');
  tickCountdown();
}

export function startCountdownVideo(startTimeSec, knownDuration, playDur) {
  stopCountdown();
  state.cdIsVideo = true;
  state.cdPlayDur = playDur || 0;
  state.cdStartTime = startTimeSec || 0;
  if (state.cdPlayDur > 0) state.cdTotal = state.cdPlayDur;
  else state.cdTotal = knownDuration ? Math.max(1, knownDuration - state.cdStartTime) : 0;
  state.cdStart = Date.now();
  document.getElementById('countdown-bar')?.classList.add('active');
  tickCountdown();
}

export function playContent(c) {
  if (!c) return;
  const d = c.data || {};
  const theme = JSON.parse(localStorage.getItem(THEME_KEY) || '{}');
  const globalIn = theme[`--def-${c.type}-in`] ?? 0;
  const enterDur = state.signageMode ? 0 : (d.useCustomIn ? (d.enterDuration ?? 0) : globalIn);

  switch (c.type) {
    case 'telop': send('LT_SHOW', { ...d, enterDuration: enterDur }); break;
    case 'scroll': send('SCROLL_SHOW', { ...d, enterDuration: enterDur }); break;
    case 'break': send('BREAKING_SHOW', { ...d, enterDuration: enterDur }); break;
    case 'media': send('MEDIA_SHOW', { ...d, enterDuration: enterDur }); break;
    // ... slide and comp handled in full version
  }

  const isTelop = ['telop', 'scroll', 'break'].includes(c.type);
  if (isTelop) state.telopId = c.id;
  else state.playingId = c.id;

  uiHandlers.renderList();
  uiHandlers.updatePonBtn();
  uiHandlers.notify('▶ ' + c.name, 'success');

  const outDur = d.useCustomOut ? (d.exitDuration ?? 0) : (theme[`--def-${c.type}-out`] ?? 1.0);

  if (!isTelop) {
    if (c.type === 'media' && d.kind === 'video') {
      startCountdownVideo(d.startTime || 0, d.videoDuration || 0, d.playDuration || 0);
    } else if (state.signageMode) {
      startCountdownTimer(d.sigDuration ?? 5);
    } else {
      stopCountdown();
    }
  } else if (outDur > 0) {
    startCountdownTimer(outDur);
  }
}

export function hideContent(c) {
  if (!c) return;
  const theme = JSON.parse(localStorage.getItem(THEME_KEY) || '{}');
  const globalOut = theme[`--def-${c.type}-out`] ?? 0.5;
  const exitDuration = state.signageMode ? 0 : (c.data?.useCustomOut ? (c.data.exitDuration ?? 0.5) : globalOut);

  switch (c.type) {
    case 'telop': send('LT_HIDE', { exitDuration }); break;
    case 'scroll': send('SCROLL_HIDE', { exitDuration }); break;
    case 'break': send('BREAKING_HIDE', { exitDuration }); break;
    default: send('MEDIA_HIDE', { exitDuration }); break;
  }

  const isTelop = ['telop', 'scroll', 'break'].includes(c.type);
  if (isTelop) state.telopId = null;
  else state.playingId = null;

  uiHandlers.renderList();
  uiHandlers.updatePonBtn();
  if (!isTelop) stopCountdown();
}

export function switchContent(c) {
  if (!c) return;
  const isTelop = ['telop', 'scroll', 'break'].includes(c.type);
  const currentId = isTelop ? state.telopId : state.playingId;

  if (currentId === c.id) {
    hideContent(c);
  } else {
    playContent(c);
  }
}

export function ponDashi() {
  if (!state.selectedId) return;
  const c = state.contents.find(x => x.id === state.selectedId);
  switchContent(c);
}
