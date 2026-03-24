// ===== データストア (状態管理) =====
// v0.3から完全移植

export const SCENES_KEY = 'poncast_scenes';
export const STORE_KEY = 'obs_contents_v1'; // 後方互換
export const STORE_KEY_OLD = 'obs_contents_v1'; // 旧データ移行用

export let scenes = [];
export let contents = [];
export let activeSceneId = null;

export let selectedId = null;
export let selectedIds = new Set();   // 複数選択中のIDセット
export let anchorId = null;           // Shift範囲選択の起点
export let playingId = null;          // メディア系 (media/slide/comp)
export let telopId = null;            // テロップ系 (telop/scroll/break)
export let signageMode = false;
export let signageIndex = 0;
export let signageTimer = null;
export let filterCatVal = 'all';
// カウントダウンタイマー
export let cdRaf = null;
export let cdTotal = 0;
export let cdStart = 0;
export let cdIsVideo = false;
export let cdStartTime = 0;
export let deleteTargetId = null;
export let deleteMode = 'item'; // 'item' or 'scene'
export let newTypeVal = 'telop';
export let _mediaMode = 'add';

// Setters (modules need to mutate these)
export function setState(updates) {
  if ('scenes' in updates) scenes = updates.scenes;
  if ('contents' in updates) contents = updates.contents;
  if ('activeSceneId' in updates) activeSceneId = updates.activeSceneId;
  if ('selectedId' in updates) selectedId = updates.selectedId;
  if ('selectedIds' in updates) selectedIds = updates.selectedIds;
  if ('anchorId' in updates) anchorId = updates.anchorId;
  if ('playingId' in updates) playingId = updates.playingId;
  if ('telopId' in updates) telopId = updates.telopId;
  if ('signageMode' in updates) signageMode = updates.signageMode;
  if ('signageIndex' in updates) signageIndex = updates.signageIndex;
  if ('signageTimer' in updates) signageTimer = updates.signageTimer;
  if ('filterCatVal' in updates) filterCatVal = updates.filterCatVal;
  if ('cdRaf' in updates) cdRaf = updates.cdRaf;
  if ('cdTotal' in updates) cdTotal = updates.cdTotal;
  if ('cdStart' in updates) cdStart = updates.cdStart;
  if ('cdIsVideo' in updates) cdIsVideo = updates.cdIsVideo;
  if ('cdStartTime' in updates) cdStartTime = updates.cdStartTime;
  if ('deleteTargetId' in updates) deleteTargetId = updates.deleteTargetId;
  if ('deleteMode' in updates) deleteMode = updates.deleteMode;
  if ('newTypeVal' in updates) newTypeVal = updates.newTypeVal;
  if ('_mediaMode' in updates) _mediaMode = updates._mediaMode;
}

export function getSceneContentsKey(id) { return 'poncast_scene_' + id; }

export function save() {
  if (!activeSceneId) return;
  localStorage.setItem(getSceneContentsKey(activeSceneId), JSON.stringify(contents));
}

export function saveSceneConfig() {
  localStorage.setItem(SCENES_KEY, JSON.stringify({ activeSceneId, scenes }));
}
