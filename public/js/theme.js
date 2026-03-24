// ===== テーマカラー管理 =====
// v0.3から完全移植
import { t } from './i18n.js';

export const THEME_KEY = 'poncast_theme';

export const THEME_DEFS = [
  {
    group: 'tg_duration', vars: [
      { key: '--def-telop-in', label: 'type_label_telop', subtype: 'in', default: 0 },
      { key: '--def-telop-out', label: 'type_label_telop', subtype: 'out', default: 1.0 },
      { key: '--def-media-in', label: 'type_label_media', subtype: 'in', default: 0 },
      { key: '--def-media-out', label: 'type_label_media', subtype: 'out', default: 1.0 },
      { key: '--def-break-in', label: 'type_label_break', subtype: 'in', default: 0 },
      { key: '--def-break-out', label: 'type_label_break', subtype: 'out', default: 1.0 },
      { key: '--def-scroll-in', label: 'type_label_scroll', subtype: 'in', default: 0 },
      { key: '--def-scroll-out', label: 'type_label_scroll', subtype: 'out', default: 1.0 },
      { key: '--def-slide-in', label: 'type_label_slide', subtype: 'in', default: 0 },
      { key: '--def-slide-out', label: 'type_label_slide', subtype: 'out', default: 1.0 },
      { key: '--def-comp-in', label: 'type_label_comp', subtype: 'in', default: 0 },
      { key: '--def-comp-out', label: 'type_label_comp', subtype: 'out', default: 1.0 },
    ]
  },
  {
    group: 'tg_bg', vars: [
      { key: '--bg0', label: 'tv_workspace', default: '#08090f' },
      { key: '--bg1', label: 'tv_card_panel', default: '#383838' },
      { key: '--bg2', label: 'tv_section', default: '#141927' },
      { key: '--bg3', label: 'tv_hover', default: '#1c2438' },
      { key: '--bg4', label: 'tv_border', default: '#232d44' },
    ]
  },
  {
    group: 'tg_accent', vars: [
      { key: '--acc', label: 'tv_accent', default: '#c8a84b' },
      { key: '--acc2', label: 'tv_accent_bright', default: '#e8c96a' },
    ]
  },
  {
    group: 'tg_status', vars: [
      { key: '--grn', label: 'tv_play_success', default: '#33ff92' },
      { key: '--red', label: 'tv_error_delete', default: '#e84040' },
    ]
  },
  {
    group: 'tg_text', vars: [
      { key: '--txt', label: 'tv_main_text', default: '#dde2ee' },
      { key: '--txt2', label: 'tv_sub_text', default: '#dddfe4' },
      { key: '--txt3', label: 'tv_muted', default: '#a3a3a3' },
    ]
  },
  {
    group: 'tg_type', vars: [
      { key: '--type-telop-color', label: 'cat_telop', default: '#0bdcf4' },
      { key: '--type-media-color', label: 'cat_media', default: '#acc5fb' },
      { key: '--type-break-color', label: 'cat_break', default: '#ff7070' },
      { key: '--type-scroll-color', label: 'cat_scroll', default: '#6bffa1' },
    ]
  },
];

export function hexFromVar(key) {
  return getComputedStyle(document.documentElement).getPropertyValue(key).trim();
}

export function toHex6(str) {
  str = str.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(str)) return str;
  const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (m) return '#' + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('');
  return null;
}

export function applyThemeVar(key, val) {
  if (key.startsWith('--def-')) return;
  if (!/^#[0-9a-fA-F]{6}$/.test(val)) return;
  document.documentElement.style.setProperty(key, val);
  if (key === '--acc') {
    const r = parseInt(val.slice(1, 3), 16);
    const g = parseInt(val.slice(3, 5), 16);
    const b = parseInt(val.slice(5, 7), 16);
    document.documentElement.style.setProperty('--bdr', `rgba(${r},${g},${b},0.1)`);
    document.documentElement.style.setProperty('--bdr2', `rgba(${r},${g},${b},0.22)`);
    document.documentElement.style.setProperty('--acc3', `rgba(${r},${g},${b},0.12)`);
  }
}

export function saveTheme() {
  const theme = {};
  THEME_DEFS.forEach(g => g.vars.forEach(v => {
    const el = document.getElementById('tc_' + v.key.replace('--', ''));
    if (el) theme[v.key] = el.value;
  }));
  localStorage.setItem(THEME_KEY, JSON.stringify(theme));
}

export function loadTheme() {
  const raw = localStorage.getItem(THEME_KEY);
  if (!raw) {
    THEME_DEFS.forEach(g => g.vars.forEach(v => applyThemeVar(v.key, v.default)));
    return;
  }
  try {
    const theme = JSON.parse(raw);
    Object.entries(theme).forEach(([k, v]) => applyThemeVar(k, v));
  } catch (e) {
    THEME_DEFS.forEach(g => g.vars.forEach(v => applyThemeVar(v.key, v.default)));
  }
}

export function resetTheme() {
  localStorage.removeItem(THEME_KEY);
  THEME_DEFS.forEach(g => g.vars.forEach(v => {
    applyThemeVar(v.key, v.default);
    const sw = document.getElementById('tc_' + v.key.replace('--', ''));
    const hex = document.getElementById('tc_' + v.key.replace('--', '') + '_hex');
    if (sw) sw.value = v.default;
    if (hex) hex.value = v.default;
  }));
}

export function openColorPanel() {
  const body = document.getElementById('cp-body');
  body.innerHTML = THEME_DEFS.map(g => {
    if (g.group === 'tg_duration') {
      const types = ['media', 'telop', 'break', 'scroll'];
      return `
      <div class="cp-group">
        <div class="cp-group-label">${t(g.group)}</div>
        <div class="cp-dur-grid">
          <div class="cp-dur-head">
            <span></span>
            <span style="text-align:center">IN</span>
            <span style="text-align:center">OUT</span>
          </div>
          ${types.map(type => {
            const vIn = g.vars.find(v => v.key === `--def-${type}-in`);
            const vOut = g.vars.find(v => v.key === `--def-${type}-out`);
            const idIn = 'tc_' + vIn.key.replace('--', '');
            const idOut = 'tc_' + vOut.key.replace('--', '');
            const valIn = JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[vIn.key] ?? vIn.default;
            const valOut = JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[vOut.key] ?? vOut.default;
            return `
            <div class="cp-dur-row">
              <span class="cp-dur-type">${t('type_label_' + type)}</span>
              <input type="number" class="cp-num" id="${idIn}" min="0" max="10" step="0.1" value="${valIn}" oninput="saveTheme()">
              <input type="number" class="cp-num" id="${idOut}" min="0" max="10" step="0.1" value="${valOut}" oninput="saveTheme()">
            </div>`;
          }).join('')}
        </div>
      </div>`;
    }

    return `
    <div class="cp-group">
      <div class="cp-group-label">${t(g.group)}</div>
      ${g.vars.map(v => {
        const id = 'tc_' + v.key.replace('--', '');
        const cur = hexFromVar(v.key) || v.default;
        const hex6 = toHex6(cur) || v.default;
        return `
        <div class="cp-row">
          <div class="cp-preview" id="${id}_prev" style="background:${hex6}"></div>
          <input type="color" class="cp-swatch" id="${id}" value="${hex6}" oninput="onCpSwatch('${v.key}',this.value)">
          <input type="text" class="cp-hex" id="${id}_hex" value="${hex6}" maxlength="7" spellcheck="false"
            oninput="onCpHex('${v.key}',this.value)" onblur="onCpHexBlur('${v.key}',this.value)">
          <span class="cp-name">${t(v.label)}</span>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
  document.getElementById('color-panel-overlay').classList.add('open');
}

export function closeColorPanel() {
  document.getElementById('color-panel-overlay').classList.remove('open');
}

export function onCpSwatch(key, hex) {
  applyThemeVar(key, hex);
  const id = 'tc_' + key.replace('--', '');
  const hexEl = document.getElementById(id + '_hex');
  const prev = document.getElementById(id + '_prev');
  if (hexEl) hexEl.value = hex;
  if (prev) prev.style.background = hex;
  saveTheme();
}

export function onCpHex(key, val) {
  if (!/^#[0-9a-fA-F]{6}$/.test(val)) return;
  applyThemeVar(key, val);
  const id = 'tc_' + key.replace('--', '');
  const sw = document.getElementById(id);
  const prev = document.getElementById(id + '_prev');
  if (sw) sw.value = val;
  if (prev) prev.style.background = val;
  saveTheme();
}

export function onCpHexBlur(key, val) {
  const id = 'tc_' + key.replace('--', '');
  const hexEl = document.getElementById(id + '_hex');
  if (!/^#[0-9a-fA-F]{6}$/.test(val)) {
    const cur = hexFromVar(key) || THEME_DEFS.flatMap(g => g.vars).find(v => v.key === key)?.default || '#000000';
    if (hexEl) hexEl.value = toHex6(cur) || cur;
  }
}
