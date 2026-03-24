import { t, setLang } from './i18n.js';
import { state, save } from './state.js';
import { connectWS } from './api.js';
import { 
  notify, openModal, closeModal, renderList, renderSceneTabs, updateWsBadge, 
  updatePonBtn, createNew, deleteSelectedItem, openColorPanel, closeColorPanel, 
  renderPreview, renderJSON 
} from './ui.js';
import { renderEditor } from './ui_editor.js';
import { setUiHandlers, ponDashi } from './playback.js';
import { 
  initScenes, getSceneContentsKey, openDisplay, openDisplayOnScreen 
} from './scene_mgmt.js';

function init() {
  console.log('[v0.4] [DEBUG] init() started');

  // --- Header ---
  document.getElementById('btn-settings')?.addEventListener('click', () => {
    console.log('[v0.4] [DEBUG] Settings Clicked');
    openColorPanel();
  });
  document.getElementById('btn-load')?.addEventListener('click', () => notify(t('Coming soon...'), 'info'));
  document.getElementById('btn-save')?.addEventListener('click', () => { save(); notify(t('notify_json_applied'), 'success'); });
  document.getElementById('btn-screen')?.addEventListener('click', () => {
    const el = document.getElementById('screen-menu');
    if (el) el.style.display = (el.style.display === 'block' ? 'none' : 'block');
  });
  document.getElementById('btn-screen-this')?.addEventListener('click', openDisplay);
  document.getElementById('btn-screen-sec')?.addEventListener('click', () => openDisplayOnScreen(1));
  
  document.getElementById('btn-lang-ja')?.addEventListener('click', () => { setLang('ja'); location.reload(); });
  document.getElementById('btn-lang-en')?.addEventListener('click', () => { setLang('en'); location.reload(); });

  // --- Right Tabs (JSON/Preview) ---
  document.querySelectorAll('.r-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const type = tab.dataset.tab;
      document.querySelectorAll('.r-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.r-pane').forEach(p => p.classList.toggle('active', p.id === 'pane-' + type));
    });
  });

  // --- Color Panel ---
  document.getElementById('cp-backdrop')?.addEventListener('click', closeColorPanel);
  document.getElementById('btn-cp-close')?.addEventListener('click', closeColorPanel);
  document.getElementById('btn-cp-apply')?.addEventListener('click', closeColorPanel);
  document.getElementById('btn-theme-reset')?.addEventListener('click', () => notify('Resetting theme...', 'info'));

  // --- Pon Button ---
  document.getElementById('pon-btn')?.addEventListener('click', ponDashi);

  // --- Cat Tabs ---
  document.querySelectorAll('.cat-tab').forEach(targetTab => {
    targetTab.addEventListener('click', () => {
      state.filterCat = targetTab.dataset.cat;
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t === targetTab));
      renderList();
    });
  });

  // --- Add Content ---
  document.getElementById('btn-add-content')?.addEventListener('click', () => {
    console.log('[v0.4] [DEBUG] Add Content Button Clicked');
    openModal('modal-new');
  });
  document.getElementById('btn-new-cancel')?.addEventListener('click', () => closeModal('modal-new'));
  document.getElementById('btn-new-create')?.addEventListener('click', () => {
    const type = document.querySelector('.type-card.selected')?.dataset.type || 'telop';
    createNew(type);
    closeModal('modal-new');
  });

  document.querySelectorAll('.type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.type-card').forEach(c => c.classList.toggle('selected', c === card));
    });
  });

  // --- Delete Modal ---
  document.getElementById('btn-del-cancel')?.addEventListener('click', () => closeModal('modal-del'));
  document.getElementById('btn-del-confirm')?.addEventListener('click', () => {
    deleteSelectedItem();
    closeModal('modal-del');
  });

  // --- Preview & Editor ---
  document.getElementById('prev-screen')?.addEventListener('click', () => notify('Fullscreen dev...', 'info'));
  
  // --- Global Initializations ---
  setUiHandlers({ notify, renderList, updatePonBtn });
  connectWS();
  initScenes();
  renderSceneTabs();
  renderList();

  // Automatic Translation
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  console.log('[v0.4] [DEBUG] init() complete');
}

window.addEventListener('DOMContentLoaded', init);
console.log('[v0.4] [DEBUG] main.js loaded');
