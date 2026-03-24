import { state, THEME_KEY } from './state.js';
import { t, I18N, currentLang, setLang } from './i18n.js';
import { esc, now, uid, toHex6, formatSeconds, fixStaleObjectURLs } from './utils.js';
import { save, uploadFile, moveToTrash } from './api.js';
import { getEditorHtml } from './ui_editor.js';

export function notify(msg, type = '') {
  const el = document.getElementById('notify');
  if (!el) return;
  el.textContent = msg;
  el.className = 'notify show ' + type;
  setTimeout(() => el.classList.remove('show'), 2500);
}

export function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

export function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

export function updateWsBadge(connected) {
  const b = document.getElementById('ws-badge');
  if (b) {
    b.textContent = connected ? t('connected') : t('status_standby');
    b.style.color = connected ? 'var(--grn)' : 'var(--txt3)';
  }
}

export function updatePonBtn() {
  const btn = document.getElementById('pon-btn');
  if (!btn) return;
  const isPlaying = (state.playingId && state.playingId === state.selectedId) || (state.telopId && state.telopId === state.selectedId);
  btn.disabled = !state.selectedId;
  if (isPlaying) {
    btn.textContent = '■ STOP';
    btn.style.background = 'var(--red)';
    btn.style.color = '#fff';
  } else {
    btn.textContent = '▶ PLAY';
    btn.style.background = '';
    btn.style.color = '';
  }
}

export function renderList() {
  const list = document.getElementById('content-list');
  if (!list) return;

  const q = document.getElementById('search-input')?.value.toLowerCase() || '';
  const filtered = state.contents.filter(c => {
    if (state.filterCatVal !== 'all' && c.type !== state.filterCatVal) return false;
    if (q && !c.name.toLowerCase().includes(q) && !(c.tags || []).some(t => t.toLowerCase().includes(q))) return false;
    return true;
  });

  const countBadge = document.getElementById('count-badge');
  if (countBadge) countBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;color:var(--txt3);font-size:12px;padding:16px">${t('msg_no_content')}</div>`;
    return;
  }

  const allSel = filtered.length > 0 && filtered.every(c => state.selectedIds.has(c.id));
  const headerHtml = `
    <div class="content-list-header">
      <input type="checkbox" class="header-cb" ${allSel ? 'checked' : ''}>
      <span style="flex:1">${t('cat_all')}</span>
    </div>`;

  list.innerHTML = headerHtml + filtered.map(c => {
    const isPlaying = (c.id === state.playingId || c.id === state.telopId);
    const cls = [
      'c-item',
      c.id === state.selectedId ? 'selected' : '',
      state.selectedIds.has(c.id) ? 'multi' : '',
      isPlaying ? 'playing' : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="${cls}" draggable="true" data-id="${c.id}">
        <div class="c-item-row">
          <input type="checkbox" class="c-item-cb" ${state.selectedIds.has(c.id) ? 'checked' : ''}>
          <span class="c-drag-handle">⠿</span>
          <span class="c-type-badge type-${c.type}">${t('type_label_' + c.type) || c.type}</span>
          <span class="c-name" title="クリックで再生">${esc(c.name)}</span>
          <span class="c-remaining" id="rem-${c.id}"></span>
          <span class="c-play-ind">${isPlaying ? '▶' : ''}</span>
          <div class="c-actions">
            <button class="c-act-btn duplicate-btn">複製</button>
            <button class="c-act-btn delete-btn">削除</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

export function updateInOutBar(c) {
  const d = c.data || {};
  const theme = JSON.parse(localStorage.getItem(THEME_KEY) || '{}');
  const globalIn = theme[`--def-${c.type}-in`] ?? 0;
  const globalOut = theme[`--def-${c.type}-out`] ?? 0.5;

  const enterDur = d.useCustomIn ? (d.enterDuration ?? 0) : globalIn;
  const exitDur = d.useCustomOut ? (d.exitDuration ?? 0.5) : globalOut;
  const sigDur = d.sigDuration ?? 5;

  const elIn = document.getElementById('d-enterDuration');
  const elOut = document.getElementById('d-exitDuration');
  const elSig = document.getElementById('d-sigDuration');
  const chkIn = document.getElementById('d-useCustomIn');
  const chkOut = document.getElementById('d-useCustomOut');
  const sigFld = document.getElementById('sig-dur-field');

  if (elIn) { elIn.value = enterDur; elIn.style.opacity = d.useCustomIn ? '1' : '0.5'; }
  if (elOut) { elOut.value = exitDur; elOut.style.opacity = d.useCustomOut ? '1' : '0.5'; }
  if (chkIn) chkIn.checked = !!d.useCustomIn;
  if (chkOut) chkOut.checked = !!d.useCustomOut;
  if (elSig) elSig.value = sigDur;

  if (sigFld) {
    const isTelop = ['telop', 'scroll', 'break'].includes(c.type);
    const isVideo = c.type === 'media' && d.kind === 'video';
    sigFld.style.display = (!isTelop && !isVideo) ? '' : 'none';
  }
}

export function renderEditor(c) {
  const toolbar = document.getElementById('editor-toolbar');
  if (toolbar) {
    toolbar.innerHTML = `
      <span id="editor-title-name" title="ダブルクリックで名前変更"
        style="color:var(--acc);font-weight:700;font-size:14px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:text"
        >${esc(c.name)}</span>
      <button class="tb-btn duplicate-editor-btn">${t('btn_duplicate')}</button>
    `;
  }

  const body = document.getElementById('editor-body');
  if (!body) return;

  const d = c.data || {};
  let html = `<input type="hidden" id="e-name" value="${esc(c.name)}">`;
  html += getEditorHtml(c, currentLang);
  
  body.innerHTML = html;
  updateInOutBar(c);
  
  // Render JSON view if active
  const jsonPre = document.getElementById('json-pre');
  if (jsonPre) jsonPre.textContent = JSON.stringify(c, null, 2);
}

export function updateBulkBar() {
  const bar = document.getElementById('bulk-bar');
  const cnt = document.getElementById('bulk-cnt');
  if (!bar || !cnt) return;
  if (state.selectedIds.size > 1) {
    bar.classList.add('show');
    cnt.textContent = t('bulk_selected', state.selectedIds.size);
  } else {
    bar.classList.remove('show');
  }
}

export function renderSceneTabs() {
  const bar = document.getElementById('scene-tab-bar');
  if (!bar) return;
  bar.innerHTML = state.scenes.map(s => `
    <div class="scene-tab${s.id === state.activeSceneId ? ' active' : ''}" data-sid="${s.id}">
      <span class="scene-tab-name">${esc(s.name)}</span>
      ${state.scenes.length > 1 ? `<button class="scene-tab-x" data-sid="${s.id}">×</button>` : ''}
    </div>`).join('') +
    `<button class="scene-tab-add">＋</button>`;
}

export function createNew(type) {
  const name = t('new_content_' + type) || (type.toUpperCase() + ' ' + (state.contents.length + 1));
  const newItem = {
    id: uid(),
    type: type,
    name: name,
    data: {
      useCustomIn: false,
      useCustomOut: false,
      enterDuration: 0.5,
      exitDuration: 1.0
    },
    tags: []
  };

  if (type === 'telop') {
    newItem.data.text = 'New Telop';
    newItem.data.subText = 'Sub title';
  } else if (type === 'media') {
    newItem.data.kind = 'image';
  }

  state.contents.unshift(newItem);
  state.selectedId = newItem.id;
  save();
  renderList();
  renderEditor(newItem);
  closeModal('new-modal');
  notify(t('notify_created'), 'success');
}

export function deleteSelectedItem() {
  if (!state.selectedId) return;
  state.contents = state.contents.filter(x => x.id !== state.selectedId);
  state.selectedId = null;
  save();
  renderList();
  const body = document.getElementById('editor-body');
  if (body) {
    body.innerHTML = `
      <div class="empty-editor">
        <div class="big-icon">✦</div>
        <p data-i18n-html="editor_empty_msg">${t('editor_empty_msg')}</p>
      </div>`;
  }
  closeModal('del-modal');
  notify(t('notify_deleted'), 'success');
}

export function renderPreview(c) {
  const pImg = document.getElementById('p-img');
  const pVid = document.getElementById('p-vid');
  const pMini = document.getElementById('p-mini');
  if (!pImg || !pVid || !pMini) return;

  pImg.style.display = 'none';
  pVid.style.display = 'none';
  pMini.style.display = 'none';

  if (!c) return;

  if (c.type === 'media') {
    if (c.data.kind === 'video') {
      pVid.src = c.data.url || '';
      pVid.style.display = 'block';
    } else {
      pImg.src = c.data.url || '';
      pImg.style.display = 'block';
    }
  } else if (c.type === 'telop') {
    pMini.style.display = 'block';
    pMini.innerHTML = `<div style="color:${c.data.color || '#fff'}">${esc(c.data.text)}</div>`;
  }
}

export function renderJSON(c) {
  const pre = document.getElementById('json-pre');
  if (pre) pre.textContent = JSON.stringify(c, null, 2);
}

export function openColorPanel() {
  const el = document.getElementById('color-panel-overlay');
  if (el) el.classList.add('open');
}

export function closeColorPanel() {
  const el = document.getElementById('color-panel-overlay');
  if (el) el.classList.remove('open');
}
