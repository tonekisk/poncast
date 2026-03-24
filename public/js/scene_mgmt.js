// ===== シーン管理 =====
// v0.3から完全移植
import { t } from './i18n.js';
import { uid } from './utils.js';
import { esc } from './utils.js';
import { fixStaleObjectURLs } from './utils.js';
import * as State from './state.js';

export function getSceneContentsKey(id) { return 'poncast_scene_' + id; }

export function saveSceneConfig() {
  localStorage.setItem(State.SCENES_KEY, JSON.stringify({ activeSceneId: State.activeSceneId, scenes: State.scenes }));
}

export function initScenes() {
  const raw = localStorage.getItem(State.SCENES_KEY);
  let loaded = false;
  if (raw) {
    try {
      const d = JSON.parse(raw);
      if (d && d.scenes && d.scenes.length > 0) {
        State.setState({ scenes: d.scenes, activeSceneId: d.activeSceneId || d.scenes[0].id });
        loaded = true;
      }
    } catch (e) {
      console.error('Failed to parse SCENES_KEY:', e);
    }
  }

  if (!loaded) {
    const firstId = uid();
    State.setState({ scenes: [{ id: firstId, name: t('scene_default') }], activeSceneId: firstId });
    const old = localStorage.getItem(State.STORE_KEY_OLD);
    if (old) {
      localStorage.setItem(getSceneContentsKey(firstId), old);
    }
    saveSceneConfig();
  }

  if (!State.scenes.find(s => s.id === State.activeSceneId)) {
    State.setState({ activeSceneId: State.scenes[0].id });
    saveSceneConfig();
  }

  // Load contents for active scene
  const key = getSceneContentsKey(State.activeSceneId);
  const raw2 = localStorage.getItem(key);
  if (raw2) {
    try {
      State.setState({ contents: JSON.parse(raw2) });
      fixStaleObjectURLs(State.contents);
    } catch (e) { }
  }
}

export function switchScene(id) {
  if (id === State.activeSceneId) return;
  State.save();
  State.setState({ activeSceneId: id, contents: [] });
  const raw = localStorage.getItem(getSceneContentsKey(id));
  if (raw) { try { State.setState({ contents: JSON.parse(raw) }); } catch (e) { } }
  fixStaleObjectURLs(State.contents);
  saveSceneConfig();
  State.setState({ selectedId: null, playingId: null, telopId: null });
  State.selectedIds.clear();
  if (typeof stopSignage === 'function') stopSignage();
  if (typeof renderSceneTabs === 'function') renderSceneTabs();
  if (typeof renderList === 'function') renderList();
  const eb = document.getElementById('editor-body');
  if (eb) eb.innerHTML = `<div style="color:var(--txt3);padding:40px 20px;text-align:center;font-size:13px;">${t('msg_select_content')}</div>`;
  if (typeof notify === 'function') notify(t('msg_scene_switch') + (State.scenes.find(s => s.id === id)?.name || ''), 'success');
}

export function addScene() {
  const id = uid();
  State.scenes.push({ id, name: t('scene_prefix') + (State.scenes.length + 1) });
  saveSceneConfig();
  switchScene(id);
}

export function deleteScene(id) {
  if (State.scenes.length <= 1) { if (typeof notify === 'function') notify(t('msg_last_scene'), 'error'); return; }
  const name = State.scenes.find(s => s.id === id)?.name || '';
  State.setState({ deleteTargetId: id, deleteMode: 'scene' });
  const title = document.getElementById('del-modal-title');
  if (title) title.textContent = `"${name}" を削除しますか？`;
  if (document.activeElement) document.activeElement.blur();
  document.getElementById('del-modal').classList.add('open');
}

export function actualDeleteScene(id) {
  localStorage.removeItem(getSceneContentsKey(id));
  State.setState({ scenes: State.scenes.filter(s => s.id !== id) });
  saveSceneConfig();
  if (State.activeSceneId === id) {
    State.setState({ activeSceneId: State.scenes[0].id, contents: [] });
    const raw = localStorage.getItem(getSceneContentsKey(State.activeSceneId));
    if (raw) { try { State.setState({ contents: JSON.parse(raw) }); } catch (e) { } }
    fixStaleObjectURLs(State.contents);
    State.setState({ selectedId: null });
    if (typeof renderList === 'function') renderList();
  }
  if (typeof renderSceneTabs === 'function') renderSceneTabs();
  if (typeof notify === 'function') notify('シーンを削除しました');
}

export function startRenameScene(id) {
  const nameEl = document.querySelector(`.scene-tab[data-sid="${id}"] .scene-tab-name`);
  if (!nameEl) return;
  const s = State.scenes.find(x => x.id === id); if (!s) return;
  nameEl.innerHTML = `<input class="scene-tab-rename" value="${esc(s.name)}"
    onclick="event.stopPropagation()"
    onkeydown="if(event.key==='Enter')this.blur();if(event.key==='Escape'){this.dataset.cancel='1';this.blur();}"
    onblur="finishRenameScene('${id}', this)">`;
  const inp = nameEl.querySelector('input');
  inp.focus(); inp.select();
}

export function finishRenameScene(id, inp) {
  if (!inp.dataset.cancel && inp.value.trim()) {
    const s = State.scenes.find(x => x.id === id);
    if (s) s.name = inp.value.trim();
    saveSceneConfig();
  }
  if (typeof renderSceneTabs === 'function') renderSceneTabs();
}

export function renderSceneTabs() {
  const bar = document.getElementById('scene-tab-bar');
  if (!bar) return;
  bar.innerHTML = State.scenes.map(s => `
    <div class="scene-tab${s.id === State.activeSceneId ? ' active' : ''}" data-sid="${s.id}" onclick="switchScene('${s.id}')">
      <span class="scene-tab-name" ondblclick="event.stopPropagation();startRenameScene('${s.id}')">${esc(s.name)}</span>
      ${State.scenes.length > 1 ? `<button class="scene-tab-x" title="削除" onclick="event.stopPropagation();deleteScene('${s.id}')">×</button>` : ''}
    </div>`).join('') +
    `<button class="scene-tab-add" title="シーンを追加" onclick="addScene()">＋</button>`;
}
