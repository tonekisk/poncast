// ===== WebSocket (ポン出し用) =====
// v0.3から完全移植
import { t } from './i18n.js';

export let ws = null;
let _wsReconnectTimer = null;

export function connectWS() {
  const targetHost = location.hostname || 'localhost';
  const wsUrl = `ws://${targetHost}:5501`;
  console.log(`[WS] Attempting connection to: ${wsUrl}`);

  ws = new WebSocket(wsUrl);
  ws.onopen = () => {
    console.log(`[WS] Connected successfully to ${wsUrl}`);
    updateWsBadge(true);
  };
  ws.onclose = (e) => {
    console.log(`[WS] Closed: ${e.code} ${e.reason}`);
    updateWsBadge(false);
    clearTimeout(_wsReconnectTimer);
    _wsReconnectTimer = setTimeout(connectWS, 2000);
  };
  ws.onerror = (err) => {
    console.error(`[WS] Error:`, err);
    if (targetHost === 'localhost') {
      setTimeout(() => {
        ws = new WebSocket('ws://127.0.0.1:5501');
        ws.onopen = () => { console.log('[WS] Connected to 127.0.0.1'); updateWsBadge(true); };
      }, 1000);
    }
    ws.close();
  };
}

export function updateWsBadge(connected) {
  const b = document.getElementById('ws-badge');
  if (b) {
    b.textContent = connected ? t('connected') : t('status_standby');
    b.style.color = connected ? 'var(--grn)' : 'var(--txt3)';
  }
}

export function send(type, payload) {
  if (ws && ws.readyState === 1) ws.send(JSON.stringify({ type, payload }));
}

// ===== ファイルアップロード（サーバー経由）=====
export async function uploadFile(file) {
  const fd = new FormData();
  fd.append('file', file);
  try {
    const r = await fetch('/upload', { method: 'POST', body: fd });
    if (!r.ok) throw new Error(r.statusText);
    const j = await r.json();
    return j.url;
  } catch (e) {
    console.error('[Upload] Failed:', e);
    return null;
  }
}

// ===== ゴミ箱移動 =====
export async function moveToTrash(path) {
  try {
    const r = await fetch('/trash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path })
    });
    return r.ok;
  } catch (e) {
    return false;
  }
}
