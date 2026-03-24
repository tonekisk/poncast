// ===== ユーティリティ関数 =====
// v0.3から完全移植

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
export const now = () => new Date().toISOString();
export const esc = (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function formatSeconds(sec) {
  if (sec == null || isNaN(sec)) return '--:--';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function revokeObjectURL(url) {
  if (url && String(url).startsWith('blob:')) { try { URL.revokeObjectURL(url); } catch (e) { } }
}

export function fixStaleObjectURLs(contents) {
  contents.forEach(c => {
    const d = c.data;
    if (!d) return;
    if (d._objectURL && String(d._objectURL).startsWith('blob:')) {
      revokeObjectURL(d._objectURL);
      delete d._objectURL;
    }
    if (Array.isArray(d.slides)) {
      d.slides.forEach(s => {
        if (s._objectURL && String(s._objectURL).startsWith('blob:')) {
          revokeObjectURL(s._objectURL);
          delete s._objectURL;
        }
      });
    }
  });
}
