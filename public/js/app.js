
    // ===== i18n Translation Dictionary =====
    const I18N = {
      ja: { "connected": "● 接続中", "status_standby": "● 待機中", "screen_this_window": "🖥 このウィンドウで開く", "screen_secondary": "⎇ セカンドモニターで全画面", "screen_primary_540": "☐ プライマリ 960×540", "screen_primary_720": "☐ プライマリ 1280×720", "screen_primary_1080": "☐ プライマリ 1920×1080", "btn_reset": "リセット", "btn_apply_close": "適用して閉じる", "btn_setting": "設定", "btn_setting_html": "🎨 設定", "btn_copy": "コピー", "btn_refresh": "更新", "btn_apply": "適用", "btn_export": "エクスポート", "label_none": "選択なし", "label_remaining": "残り時間", "label_in": "IN（秒 / 0=カット）", "label_out": "OUT（秒 / 0=カット）", "label_sig_duration": "サイネージ時間（秒）", "editor_empty_title": "コンテンツを選択または新規作成", "drag_hint_main": "ここにドロップで一括登録", "drag_hint_sub": "画像・動画ファイルに対応", "bulk_zero_selected": "0件選択中", "btn_clear_select": "✕ 解除", "btn_bulk_delete": "🗑 一括削除", "cat_all": "すべて", "cat_media": "メディア", "cat_telop": "テロップ", "cat_break": "お知らせ", "cat_scroll": "スクロール", "modal_new_title": "コンテンツタイプを選択", "type_telop_name": "テロップ", "type_telop_desc": "名前・肩書きの下部帯", "type_scroll_name": "スクロール", "type_scroll_desc": "横スクロールテキスト", "type_break_name": "お知らせ", "type_break_desc": "中央大型お知らせテロップ", "type_media_name": "メディア", "type_media_desc": "画像・動画ポン出し", "type_slide_name": "スライド", "type_slide_desc": "複数メディアを順再生", "type_comp_name": "複合シーン", "type_comp_desc": "複数要素を同時表示", "label_content_name": "コンテンツ名", "btn_cancel": "キャンセル", "btn_create": "作成", "modal_del_title": "コンテンツを削除しますか?", "modal_del_msg": "この操作は元に戻せません。", "btn_delete": "削除", "editor_empty_msg": "右のリストからコンテンツを選択するか、<br>動画・画像を右側のエリアにドラッグして登録してください", "placeholder_content_name": "例: 開幕テロップ", "scene_default": "シーン1", "scene_prefix": "シーン", "msg_select_content": "コンテンツを選択してください", "msg_scene_switch": "シーンを切り替えました: ", "msg_last_scene": "最後のシーンは削除できません", "notify_slides_uploading": "{0}個のファイルを追加中...", "notify_slides_added": "{0}個のファイルをスライドに追加しました", "notify_drop_files": "対応するファイルがありません", "notify_drop_n": "{0}件のファイルを一括登録中...", "notify_uploading": "アップロード中...", "notify_upload_done": "アップロード完了", "notify_url_fail": "ファイルURLの取得に失敗", "notify_upload_fail": "アップロードに失敗しました", "notify_json_applied": "JSONからコンテンツ一覧を適用しました", "notify_json_error": "JSONパースエラー: ", "notify_copy": "JSONをクリップボードにコピーしました", "notify_exported": "コンテンツ一覧をエクスポートしました", "notify_load_n": "ファイルから {0} 件のコンテンツを読み込みました", "notify_load_error": "ファイルの読み込みに失敗: ", "notify_duplicated": "コンテンツを複製しました", "notify_deleted": "コンテンツを削除しました", "notify_deleted_n": "{0}件のコンテンツを一度に削除しました", "notify_created": "作成しました", "notify_moved_to_trash": "{0} をゴミ箱へ移動しました", "notify_trash_failed": "{0} のゴミ箱移動に失敗しました", "notify_trash_error": "ゴミ箱移動中にエラーが発生しました", "btn_duplicate": "複製", "type_label_telop": "テロップ", "type_label_media": "メディア", "type_label_break": "お知らせ", "type_label_scroll": "スクロール", "type_label_slide": "スライド", "type_label_comp": "複合", "summary_no_file": "ファイル未設定", "summary_slides": "スライド ({0}枚)", "summary_comp": "複合要素 ({0}個)", "bulk_selected": "{0}件選択中", "modal_del_title_n": "{0}件のコンテンツを削除しますか?", "unit_sec": "{0}秒", "unit_slides": "{0}枚", "pos_left": "左", "pos_center": "中央", "pos_right": "右", "lbl_name": "名前", "lbl_name_color": "名前色", "lbl_name_font": "名前フォント", "lbl_name_size": "名前サイズ", "lbl_title": "肩書き", "lbl_title_bg": "肩書き背景", "lbl_title_color": "肩書き色", "lbl_title_font": "肩書きフォント", "lbl_title_size": "肩書きサイズ", "lbl_bottom_px": "下端からの位置", "lbl_position": "左右位置", "lbl_accent": "アクセント色", "lbl_text": "テキスト", "lbl_text_color": "テキスト色", "lbl_text_font": "テキストフォント", "lbl_font_size": "フォントサイズ", "lbl_label_bg": "ラベル背景色", "lbl_label_color": "ラベル文字色", "lbl_size": "サイズ", "lbl_speed": "速度", "lbl_label": "ラベル", "lbl_body_text": "本文テキスト", "lbl_image": "画像", "lbl_video": "動画", "lbl_start_time": "開始時間（秒）", "lbl_play_dur": "再生時間（0=最後まで）", "lbl_video_length": "動画の長さ", "lbl_width": "幅", "lbl_height": "高さ", "btn_select_file": "ファイルを選択", "lbl_interval": "切替間隔（秒）", "lbl_transition": "トランジション", "opt_fade": "フェード", "opt_slide": "スライド", "opt_cut": "カット", "lbl_slide_list": "スライド一覧", "btn_add_slide": "スライドを追加", "lbl_display_dur": "表示継続時間（秒、0=手動）", "lbl_comp_elements": "同時表示要素", "placeholder_content_id": "コンテンツID", "btn_add_element": "要素を追加", "msg_no_content": "コンテンツなし", "alert_enter_name": "コンテンツ名を入力してください", "unit_sec_short": "秒", "btn_new_prefix": "新規", "msg_copy_suffix": " (コピー)", "tg_bg": "背景", "tg_accent": "アクセント", "tg_status": "ステータス", "tg_text": "テキスト", "tg_type": "タイプバッジ", "tv_workspace": "ワークスペース", "tv_card_panel": "カード / パネル", "tv_section": "セクション", "tv_hover": "ホバー", "tv_border": "ボーダー・区切", "tv_accent": "アクセント", "tv_accent_bright": "アクセント(明)", "tv_play_success": "再生 / 成功", "tv_error_delete": "エラー / 削除", "tv_main_text": "メインテキスト", "tv_sub_text": "サブテキスト", "tv_muted": "ミュート", "meta_enter": "IN:", "enter_cut": "カット", "enter_fade": "フェード", "meta_exit": "OUT:", "exit_cut": "カット", "exit_fade": "フェード", "meta_updated": "更新日時:", "meta_name": "名前:", "meta_title": "肩書き:", "meta_label": "ラベル:", "meta_speed": "速度:", "meta_kind": "種類:", "kind_video": "動画", "kind_image": "画像", "meta_slides_count": "枚数:", "meta_interval": "間隔:", "meta_elements": "要素数:", "tg_duration": "デフォルト時間", "lbl_default_in": "デフォルトIN", "lbl_default_out": "デフォルトOUT", "lbl_enable": "有効", "editor_global_title": "GLOBAL SETTINGS", "lbl_drag_instruction": "動画・画像をここにドラッグ", "lbl_blink": "点滅", "msg_select_media": "登録する画像または動画ファイルを選択してください", "msg_select_slide": "スライドに追加する画像または動画を選択してください", "msg_select_json": "インポートするJSONファイルを選択してください" },
      en: { "connected": "● Connected", "status_standby": "● Standby", "screen_this_window": "🖥 Open in this window", "screen_secondary": "⎇ Fullscreen on 2nd monitor", "screen_primary_540": "☐ Primary 960×540", "screen_primary_720": "☐ Primary 1280×720", "screen_primary_1080": "☐ Primary 1920×1080", "btn_reset": "Reset", "btn_apply_close": "Apply & Close", "btn_setting": "Setting", "btn_setting_html": "🎨 Setting", "btn_copy": "Copy", "btn_refresh": "Refresh", "btn_apply": "Apply", "btn_export": "Export", "label_none": "None selected", "label_remaining": "Remaining", "label_in": "IN (sec / 0=Cut)", "label_out": "OUT (sec / 0=Cut)", "label_sig_duration": "Signage Duration (sec)", "editor_empty_title": "Select or Create Content", "drag_hint_main": "Drop here to register", "drag_hint_sub": "Supports images & videos", "bulk_zero_selected": "0 selected", "btn_clear_select": "✕ Clear", "btn_bulk_delete": "🗑 Delete Selected", "cat_all": "All", "cat_media": "Media", "cat_telop": "Telop", "cat_break": "Info", "cat_scroll": "Scroll", "modal_new_title": "Select Content Type", "type_telop_name": "Telop", "type_telop_desc": "Lower third for names/titles", "type_scroll_name": "Scroll text", "type_scroll_desc": "Horizontal scrolling text", "type_break_name": "Info", "type_break_desc": "Large central info telop", "type_media_name": "Media", "type_media_desc": "Image/Video playback", "type_slide_name": "Slideshow", "type_slide_desc": "Sequential playback", "type_comp_name": "Composite", "type_comp_desc": "Multiple elements together", "label_content_name": "Content Name", "btn_cancel": "Cancel", "btn_create": "Create", "modal_del_title": "Delete Content?", "modal_del_msg": "This action cannot be undone.", "btn_delete": "Delete", "editor_empty_msg": "Select content from the right list,<br>or drag and drop videos/images into the right area", "placeholder_content_name": "e.g. Opening Telop", "scene_default": "Scene 1", "scene_prefix": "Scene ", "msg_select_content": "Please select content", "msg_scene_switch": "Switched scene to: ", "msg_last_scene": "Cannot delete the last scene", "notify_slides_uploading": "Adding {0} files...", "notify_slides_added": "Added {0} files to slide", "notify_drop_files": "No compatible files found", "notify_drop_n": "Bulk registering {0} files...", "notify_uploading": "Uploading...", "notify_upload_done": "Upload complete", "notify_url_fail": "Failed to get file URL", "notify_upload_fail": "Upload failed", "notify_json_applied": "Applied content list from JSON", "notify_json_error": "JSON Parse Error: ", "notify_copy": "Copied JSON to clipboard", "notify_exported": "Exported content list", "notify_load_n": "Loaded {0} contents from file", "notify_load_error": "Failed to load file: ", "notify_duplicated": "Duplicated content", "notify_deleted": "Deleted content", "notify_deleted_n": "Deleted {0} contents at once", "notify_created": "Created new content", "notify_moved_to_trash": "Moved {0} to trash", "notify_trash_failed": "Failed to move {0} to trash", "notify_trash_error": "Trash operation error", "btn_duplicate": "Duplicate", "type_label_telop": "Telop", "type_label_media": "Media", "type_label_break": "Info", "type_label_scroll": "Scroll", "type_label_slide": "Slide", "type_label_comp": "Composite", "summary_no_file": "No file set", "summary_slides": "Slides ({0})", "summary_comp": "Composite elements ({0})", "bulk_selected": "{0} selected", "modal_del_title_n": "Delete {0} contents?", "unit_sec": "{0} sec", "unit_slides": "{0}", "pos_left": "Left", "pos_center": "Center", "pos_right": "Right", "lbl_name": "Name", "lbl_name_color": "Name Color", "lbl_name_font": "Name Font", "lbl_name_size": "Name Size", "lbl_title": "Title", "lbl_title_bg": "Title BG", "lbl_title_color": "Title Color", "lbl_title_font": "Title Font", "lbl_title_size": "Title Size", "lbl_bottom_px": "Bottom Position", "lbl_position": "Horiz. Position", "lbl_accent": "Accent Color", "lbl_text": "Text", "lbl_text_color": "Text Color", "lbl_text_font": "Text Font", "lbl_font_size": "Font Size", "lbl_label_bg": "Label BG", "lbl_label_color": "Label Text Color", "lbl_size": "Size", "lbl_speed": "Speed", "lbl_label": "Label", "lbl_body_text": "Body Text", "lbl_image": "Image", "lbl_video": "Video", "lbl_start_time": "Start Time (s)", "lbl_play_dur": "Play Dur (0=End)", "lbl_video_length": "Video Length", "lbl_width": "Width", "lbl_height": "Height", "btn_select_file": "Select File", "lbl_interval": "Interval (s)", "lbl_transition": "Transition", "opt_fade": "Fade", "opt_slide": "Slide", "opt_cut": "Cut", "lbl_slide_list": "Slide List", "btn_add_slide": "Add Slide", "lbl_display_dur": "Display Dur (0=Manual)", "lbl_comp_elements": "Composite Elements", "placeholder_content_id": "Content ID", "btn_add_element": "Add Element", "msg_no_content": "No content", "alert_enter_name": "Please enter a content name", "unit_sec_short": "s", "btn_new_prefix": "New ", "msg_copy_suffix": " (Copy)", "tg_bg": "Background", "tg_accent": "Accent", "tg_status": "Status", "tg_text": "Text", "tg_type": "Type Badge", "tv_workspace": "Workspace", "tv_card_panel": "Card / Panel", "tv_section": "Section", "tv_hover": "Hover", "tv_border": "Border & Divider", "tv_accent": "Accent", "tv_accent_bright": "Accent (Bright)", "tv_play_success": "Play / Success", "tv_error_delete": "Error / Delete", "tv_main_text": "Main Text", "tv_sub_text": "Sub Text", "tv_muted": "Muted", "meta_enter": "IN:", "enter_cut": "Cut", "enter_fade": "Fade", "meta_exit": "OUT:", "exit_cut": "Cut", "exit_fade": "Fade", "meta_updated": "Updated:", "meta_name": "Name:", "meta_title": "Title:", "meta_label": "Label:", "meta_speed": "Speed:", "meta_kind": "Kind:", "kind_video": "Video", "kind_image": "Image", "meta_slides_count": "Slides:", "meta_interval": "Interval:", "meta_elements": "Elements:", "tg_duration": "Default Durations", "lbl_default_in": "Default IN", "lbl_default_out": "Default OUT", "lbl_enable": "Enable", "editor_global_title": "GLOBAL SETTINGS", "lbl_drag_instruction": "Drag video/image here", "lbl_blink": "Blink", "msg_select_media": "Please select an image or video file to register", "msg_select_slide": "Please select an image or video to add to the slide", "msg_select_json": "Please select a JSON file to import" }
    };

    let currentLang = localStorage.getItem('poncast_lang') || 'en';
    const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const now = () => new Date().toISOString();
    const esc = (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    function t(key, ...args) {
      const dict = I18N[currentLang] || I18N['ja'];
      let str = dict[key] || I18N['ja'][key] || key;
      args.forEach((arg, i) => {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), arg);
      });
      return str;
    }

    function setLang(lang) {
      currentLang = lang;
      localStorage.setItem('poncast_lang', lang);

      // Update buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });

      // Update DOM elements (Skip status badge to avoid overwriting connection state)
      document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.id === 'ws-badge') return;
        el.textContent = t(el.dataset.i18n);
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = t(el.dataset.i18nHtml);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
      });

      // Re-render UI
      if (typeof renderList === 'function') renderList();
      if (typeof renderSceneTabs === 'function') renderSceneTabs();
      if (typeof selectedId !== 'undefined' && selectedId && typeof renderEditor === 'function' && typeof contents !== 'undefined') {
        const c = contents.find(x => x.id === selectedId);
        if (c) {
          renderEditor(c);
          if (typeof renderPreview === 'function') renderPreview(c);
          if (typeof renderJSON === 'function') renderJSON(c);
        }
      }
      // update the empty state message if no selection
      if (typeof selectedId !== 'undefined' && !selectedId && typeof renderEditor === 'function') {
        const eb = document.getElementById('editor-body');
        if (eb) {
          eb.innerHTML = `<div class="empty-editor"><div class="big-icon">✦</div><p data-i18n-html="editor_empty_msg">${t('editor_empty_msg')}</p></div>`;
        }
        const et = document.getElementById('editor-title');
        if (et) et.textContent = t('editor_empty_title');
      }
      // Sync WebSocket badge
      updateWsBadge(ws && ws.readyState === 1);
    }

    // Ensure the UI is translated correctly on load
    window.addEventListener('DOMContentLoaded', () => {
      setLang(currentLang);
    });

    // ===== シーン管理 & グローバル状態 =====
    const SCENES_KEY = 'poncast_scenes';
    const STORE_KEY_OLD = 'obs_contents_v1'; // 旧データ移行用
    let scenes = [];
    let contents = [];
    let activeSceneId = null;
    let g_initialized = false; // 初期化完了フラグ

    function getSceneContentsKey(id) { return 'poncast_scene_' + id; }

    function saveSceneConfig() {
      localStorage.setItem(SCENES_KEY, JSON.stringify({ activeSceneId, scenes }));
    }

    function initScenes() {
      const raw = localStorage.getItem(SCENES_KEY);
      let loaded = false;
      if (raw) {
        try {
          const d = JSON.parse(raw);
          if (d && d.scenes && d.scenes.length > 0) {
            scenes = d.scenes;
            activeSceneId = d.activeSceneId || scenes[0].id;
            loaded = true;
          }
        } catch (e) {
          console.error('Failed to parse SCENES_KEY:', e);
          notify('シーン設定の読み込みに失敗しました。以前のデータが破損している可能性があります。', 'error');
        }
      }
      
      if (!loaded) {
        const firstId = uid();
        scenes = [{ id: firstId, name: t('scene_default') }];
        activeSceneId = firstId;
        // 旧データ移行
        const old = localStorage.getItem(STORE_KEY_OLD);
        if (old) {
          localStorage.setItem(getSceneContentsKey(firstId), old);
        }
        saveSceneConfig();
      }
      
      if (!scenes.find(s => s.id === activeSceneId)) {
        activeSceneId = scenes[0].id;
        saveSceneConfig();
      }
    }

    function switchScene(id) {
      if (id === activeSceneId) return;
      save(); // 現シーンを保存
      activeSceneId = id; 
      contents = [];
      const raw = localStorage.getItem(getSceneContentsKey(id));
      if (raw) { try { contents = JSON.parse(raw); } catch (e) { } }
      fixStaleObjectURLs();
      saveSceneConfig();
      save(); // 新シーン確定として保存
      selectedId = null; selectedIds.clear(); playingId = null; telopId = null;
      stopSignage();
      renderSceneTabs();
      renderList();
      document.getElementById('editor-body').innerHTML =
        `<div style="color:var(--txt3);padding:40px 20px;text-align:center;font-size:13px;">${t('msg_select_content')}</div>`;
      notify(t('msg_scene_switch') + (scenes.find(s => s.id === id)?.name || ''), 'success');
    }

    function addScene() {
      const id = uid();
      scenes.push({ id, name: t('scene_prefix') + (scenes.length + 1) });
      saveSceneConfig();
      switchScene(id);
    }

    function deleteScene(id) {
      if (scenes.length <= 1) { notify(t('msg_last_scene'), 'error'); return; }
      const name = scenes.find(s => s.id === id)?.name || '';
      deleteTargetId = id;
      deleteMode = 'scene';
      document.getElementById('del-modal-title').textContent = `"${name}" を削除しますか？`;
      if (document.activeElement) document.activeElement.blur();
      document.getElementById('del-modal').classList.add('open');
    }

    function actualDeleteScene(id) {
      localStorage.removeItem(getSceneContentsKey(id));
      scenes = scenes.filter(s => s.id !== id);
      saveSceneConfig();
      if (activeSceneId === id) {
        activeSceneId = scenes[0].id;
        contents = [];
        const raw = localStorage.getItem(getSceneContentsKey(activeSceneId));
        if (raw) { try { contents = JSON.parse(raw); } catch (e) { } }
        fixStaleObjectURLs();
        selectedId = null;
        renderList();
      }
      renderSceneTabs();
      notify('シーンを削除しました');
    }

    function startRenameScene(id) {
      const nameEl = document.querySelector(`.scene-tab[data-sid="${id}"] .scene-tab-name`);
      if (!nameEl) return;
      const s = scenes.find(x => x.id === id); if (!s) return;
      nameEl.innerHTML = `<input class="scene-tab-rename" value="${esc(s.name)}"
    onclick="event.stopPropagation()"
    onkeydown="if(event.key==='Enter')this.blur();if(event.key==='Escape'){this.dataset.cancel='1';this.blur();}"
    onblur="finishRenameScene('${id}', this)">`;
      const inp = nameEl.querySelector('input');
      inp.focus(); inp.select();
    }

    function finishRenameScene(id, inp) {
      if (!inp.dataset.cancel && inp.value.trim()) {
        const s = scenes.find(x => x.id === id);
        if (s) s.name = inp.value.trim();
        saveSceneConfig();
      }
      renderSceneTabs();
    }

    function renderSceneTabs() {
      const bar = document.getElementById('scene-tab-bar');
      if (!bar) return;
      bar.innerHTML = scenes.map(s => `
    <div class="scene-tab${s.id === activeSceneId ? ' active' : ''}" data-sid="${s.id}" onclick="switchScene('${s.id}')">
      <span class="scene-tab-name" ondblclick="event.stopPropagation();startRenameScene('${s.id}')">${esc(s.name)}</span>
      ${scenes.length > 1 ? `<button class="scene-tab-x" title="削除" onclick="event.stopPropagation();deleteScene('${s.id}')">×</button>` : ''}
    </div>`).join('') +
        `<button class="scene-tab-add" title="シーンを追加" onclick="addScene()">＋</button>`;
    }

    let _mediaMode = 'add';
    let deleteSceneTargetId = null;
    let deleteItemTargetId = null;

    // ===== データストア (状態管理) =====
    const STORE_KEY = 'obs_contents_v1'; // 後方互換のため残す
    let selectedId = null;
    let selectedIds = new Set();   // 複数選択中のIDセット
    let anchorId = null;        // Shift範囲選択の起点
    let playingId = null;  // メディア系 (media/slide/comp)
    let telopId = null;  // テロップ系 (telop/scroll/break) ← メディアと独立して重ねられる
    let signageMode = false;
    let signageIndex = 0;
    let signageTimer = null;
    let filterCatVal = 'all';
    // カウントダウンタイマー
    let cdRaf = null;
    let cdTotal = 0;
    let cdStart = 0;
    let cdIsVideo = false;
    let cdStartTime = 0;
    let deleteTargetId = null;
    let deleteMode = 'item'; // 'item' or 'scene'
    let newTypeVal = 'telop';

    // blobURL など無効な_objectURLをクリアしてsrcにフォールバック
    function revokeObjectURL(url) {
      if (url && String(url).startsWith('blob:')) { try { URL.revokeObjectURL(url); } catch (e) { } }
    }
    function fixStaleObjectURLs() {
      contents.forEach(c => {
        const d = c.data;
        if (!d) return;
        if (d._objectURL && String(d._objectURL).startsWith('blob:')) {
          revokeObjectURL(d._objectURL);
          delete d._objectURL;
        }
        // スライドの各コマも同様
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

    // ===== モバイルタブ切替（タブ切替削除 — プレビューは常にエディター内に表示） =====
    function switchMobileTab(tab) {
      // tab switching removed — preview always visible in editor
    }

    // ===== テーマカラー管理 =====
    const THEME_KEY = 'poncast_theme';

    const THEME_DEFS = [
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

    function hexFromVar(key) {
      return getComputedStyle(document.documentElement).getPropertyValue(key).trim();
    }

    function applyThemeVar(key, val) {
      if (key.startsWith('--def-')) {
        // Duration config - not for CSS props
        return;
      }
      if (!/^#[0-9a-fA-F]{6}$/.test(val)) return;
      document.documentElement.style.setProperty(key, val);
      // --acc 変更時は --bdr / --bdr2 も連動
      if (key === '--acc') {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        document.documentElement.style.setProperty('--bdr', `rgba(${r},${g},${b},0.1)`);
        document.documentElement.style.setProperty('--bdr2', `rgba(${r},${g},${b},0.22)`);
        document.documentElement.style.setProperty('--acc3', `rgba(${r},${g},${b},0.1)`);
      }
    }

    function saveTheme() {
      const theme = {};
      THEME_DEFS.forEach(g => g.vars.forEach(v => {
        const el = document.getElementById('tc_' + v.key.replace('--', ''));
        if (el) theme[v.key] = el.value;
      }));
      localStorage.setItem(THEME_KEY, JSON.stringify(theme));
    }

    function loadTheme() {
      const raw = localStorage.getItem(THEME_KEY);
      if (!raw) {
        // 保存テーマなし → THEME_DEFSのデフォルト色を適用
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

    function resetTheme() {
      localStorage.removeItem(THEME_KEY);
      THEME_DEFS.forEach(g => g.vars.forEach(v => {
        applyThemeVar(v.key, v.default);
        const sw = document.getElementById('tc_' + v.key.replace('--', ''));
        const hex = document.getElementById('tc_' + v.key.replace('--', '') + '_hex');
        if (sw) sw.value = v.default;
        if (hex) hex.value = v.default;
      }));
    }

    function openColorPanel() {
      // パネルを描画（現在の値を反映）
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
                  <input type="number" class="cp-num" id="${idIn}"
                    min="0" max="10" step="0.1" value="${valIn}"
                    oninput="saveTheme()">
                  <input type="number" class="cp-num" id="${idOut}"
                    min="0" max="10" step="0.1" value="${valOut}"
                    oninput="saveTheme()">
                </div>
              `;
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
          <input type="color" class="cp-swatch" id="${id}"
            value="${hex6}"
            oninput="onCpSwatch('${v.key}',this.value)">
          <input type="text" class="cp-hex" id="${id}_hex"
            value="${hex6}" maxlength="7" spellcheck="false"
            oninput="onCpHex('${v.key}',this.value)"
            onblur="onCpHexBlur('${v.key}',this.value)">
          <span class="cp-name">${t(v.label)}</span>
        </div>`;
        }).join('')}
    </div>`;
      }).join('');
      document.getElementById('color-panel-overlay').classList.add('open');
    }

    function toHex6(str) {
      str = str.trim();
      if (/^#[0-9a-fA-F]{6}$/.test(str)) return str;
      // rgba(r,g,b,...) → #rrggbb
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) return '#' + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('');
      return null;
    }

    function onCpSwatch(key, hex) {
      applyThemeVar(key, hex);
      const id = 'tc_' + key.replace('--', '');
      const hexEl = document.getElementById(id + '_hex');
      const prev = document.getElementById(id + '_prev');
      if (hexEl) hexEl.value = hex;
      if (prev) prev.style.background = hex;
      saveTheme();
    }

    function onCpHex(key, val) {
      if (!/^#[0-9a-fA-F]{6}$/.test(val)) return;
      applyThemeVar(key, val);
      const id = 'tc_' + key.replace('--', '');
      const sw = document.getElementById(id);
      const prev = document.getElementById(id + '_prev');
      if (sw) sw.value = val;
      if (prev) prev.style.background = val;
      saveTheme();
    }

    function onCpHexBlur(key, val) {
      const id = 'tc_' + key.replace('--', '');
      const hexEl = document.getElementById(id + '_hex');
      // 不正値なら現在のカラーに戻す
      if (!/^#[0-9a-fA-F]{6}$/.test(val)) {
        const cur = hexFromVar(key) || THEME_DEFS.flatMap(g => g.vars).find(v => v.key === key)?.default || '#000000';
        if (hexEl) hexEl.value = toHex6(cur) || cur;
      }
    }

    function closeColorPanel() {
      document.getElementById('color-panel-overlay').classList.remove('open');
    }

    // 初期ロード
    function init() {
      window.resizeTo(960, 660);
      loadTheme(); // テーマカラー復元


      // エディター オートセーブ（入力のたびに自動保存）
      let _saveTimer = null;
      const editorBody = document.getElementById('editor-body');
      editorBody.addEventListener('input', () => {
        clearTimeout(_saveTimer);
        _saveTimer = setTimeout(saveEditor, 400);
      });
      editorBody.addEventListener('change', saveEditor);

      // ダブルクリック検知（キャプチャフェーズ: onclick より先に発火）
      // _dblWasSel: 1回目クリック時点でそのアイテムが既に選択済みだったか
      let _dblId = null, _dblTime = 0, _dblWasSel = false;
      document.getElementById('content-list').addEventListener('click', e => {
        if (e.target.closest('.c-actions') || e.target.closest('.c-drag-handle')) return;
        const item = e.target.closest('.c-item');
        if (!item) return;
        const id = item.dataset.id;
        const now = Date.now();
        if (id === _dblId && now - _dblTime < 400) {
          _dblId = null;
          // ダブルクリック（タブ切替は削除済み）
        } else {
          _dblWasSel = (id === selectedId); // onclick前なので選択前の状態を取得できる
          _dblId = id; _dblTime = now;
        }
      }, true); // capture:true = onclick より先に実行

      // 全画面 overlay への直接 keydown リスナー（Mac Chrome の動画キー横取り対策）
      document.getElementById('fs-overlay').addEventListener('keydown', e => {
        e.stopPropagation();
        e.preventDefault(); // 全キーのデフォルト動作を最初にまとめて禁止

        if (e.key === 'Escape' || e.key === 'f' || e.key === 'F') {
          closeFullscreen();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          const delta = e.key === 'ArrowRight' ? 5 : -5;
          // fs-vid（プレビュー動画）を直接シーク
          const vid = document.getElementById('fs-vid');
          if (vid && vid.style.display !== 'none') {
            const max = isFinite(vid.duration) ? vid.duration : 999999;
            vid.currentTime = Math.max(0, Math.min(max, (vid.currentTime || 0) + delta));
          }
          // OBS display 側も同期
          send('MEDIA_SEEK', { delta });
        } else if (!signageMode && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
          const filtered = getFilteredContents();
          if (!filtered.length) return;
          const curIdx = filtered.findIndex(c => c.id === selectedId);
          const ni = e.key === 'ArrowDown'
            ? (curIdx < filtered.length - 1 ? curIdx + 1 : 0)
            : (curIdx > 0 ? curIdx - 1 : filtered.length - 1);
          selectItem(filtered[ni].id); openFullscreen(); scrollToSelected();
        } else if (!signageMode && e.key === ' ') {
          if (selectedId) ponDashi();
        }
      });
    }

    // ===== コンテンツ一覧 再読み込み =====
    function reloadContents() {
      const raw = localStorage.getItem(getSceneContentsKey(activeSceneId));
      if (raw) { try { contents = JSON.parse(raw); } catch (e) { notify('読み込みエラー', 'error'); return; } }
      fixStaleObjectURLs();
      renderList();
      // 選択中アイテムのプレビュー・エディタも更新
      if (selectedId) {
        const c = contents.find(x => x.id === selectedId);
        if (c) { renderEditor(c); renderPreview(c); renderJSON(c); }
        else { selectedId = null; }
      }
      notify('再読み込みしました', 'success');
    }

    // ===== サイネージモード (MIX) =====
    function getSignageContents() {
      const filtered = getFilteredContents();
      if (selectedIds.size > 1) {
        return filtered.filter(c => selectedIds.has(c.id));
      }
      return filtered;
    }

    function updateSignageBtn() {
      const sts = document.getElementById('signage-status');
      const btn = document.getElementById('signage-btn');
      if (btn) {
        if (signageMode) {
          btn.textContent = '■ STOP MIX';
          btn.classList.add('active');
          btn.style.background = 'var(--red)';
          btn.style.color = '#fff';
        } else {
          btn.textContent = '▶▶ MIX';
          btn.classList.remove('active');
          btn.style.background = '';
          btn.style.color = '';
          updateBulkBar();
        }
      }
      if (sts) {
        if (signageMode) sts.classList.add('visible');
        else sts.classList.remove('visible');
      }
    }

    function playSignageItem() {
      clearTimeout(signageTimer);
      const list = getSignageContents();
      if (!list.length) { stopSignage(); return; }
      if (signageIndex >= list.length) signageIndex = 0;
      const c = list[signageIndex];

      // 再生実行 (演出のためエディターの選択状態も同期)
      selectItem(c.id, false, 'preview');
      ponDashi();

      const d = c.data || {};
      const isVideo = c.type === 'media' && d.kind === 'video';

      if (isVideo) {
        // 動画は VIDEO_ENDED 通知を待つが、安全のため動画長+3秒で物理的にも次へ進むようにする
        const dur = d.videoDuration
          ? Math.max(1, (d.videoDuration - (d.startTime || 0))) * 1000 + 3000
          : 60000; // 不明なら最大60秒
        signageTimer = setTimeout(signageNext, dur);
      } else {
        // 静止画などは sigDuration タイマー
        const dur = (d.sigDuration || 5) * 1000;
        signageTimer = setTimeout(signageNext, dur);
      }
    }

    function startSignage() {
      const list = getSignageContents();
      if (!list.length) { notify('再生できるコンテンツがありません', 'error'); return; }
      signageMode = true;
      const curIdx = list.findIndex(c => c.id === selectedId);
      signageIndex = curIdx >= 0 ? curIdx : 0;
      updateSignageBtn();
      playSignageItem();
    }

    function stopSignage() {
      signageMode = false;
      clearTimeout(signageTimer);
      signageTimer = null;
      updateSignageBtn();
      stopCountdown();
    }

    function toggleSignage() {
      signageMode ? stopSignage() : startSignage();
    }

    function signageNext() {
      if (!signageMode) return;
      clearTimeout(signageTimer);
      const list = getSignageContents();
      signageIndex = (signageIndex + 1) % list.length;
      playSignageItem();
    }

    function signagePrev() {
      if (!signageMode) return;
      clearTimeout(signageTimer);
      const list = getSignageContents();
      signageIndex = (signageIndex - 1 + list.length) % list.length;
      playSignageItem();
    }

    // ===== SCREEN（外部モニター表示）=====
    let _screenDetailsCache = null;
    let _screenMenuCloseHandler = null;
    function toggleScreenMenu() {
      const menu = document.getElementById('screen-menu');
      const isOpen = menu.classList.toggle('open');
      if (_screenMenuCloseHandler) {
        document.removeEventListener('click', _screenMenuCloseHandler);
        _screenMenuCloseHandler = null;
      }
      if (isOpen) {
        _screenMenuCloseHandler = (e) => {
          if (!e.target.closest('#screen-dropdown')) {
            menu.classList.remove('open');
            document.removeEventListener('click', _screenMenuCloseHandler);
            _screenMenuCloseHandler = null;
          }
        };
        document.addEventListener('click', _screenMenuCloseHandler);
      }
    }
    async function openDisplayOnScreen(index) {
      document.getElementById('screen-menu').classList.remove('open');
      const displayUrl = location.origin + '/obs_display.html';
      try {
        if ('getScreenDetails' in window) {
          const sd = await window.getScreenDetails();
          const screen = sd.screens[index] || sd.screens[0];
          const w = window.open(displayUrl, 'poncast_display',
            `left=${screen.left},top=${screen.top},width=${screen.width},height=${screen.height}`);
          if (w) {
            w.addEventListener('load', () => {
              try { w.document.documentElement.requestFullscreen(); } catch (e) { }
            });
            return;
          }
        }
      } catch (e) { }
      // フォールバック: セカンドモニター想定で右に開く
      const sw = window.screen.width;
      const sh = window.screen.height;
      const left = index === 0 ? 0 : sw;
      const w = window.open(displayUrl, 'poncast_display',
        `left=${left},top=0,width=${sw},height=${sh}`);
      if (w) setTimeout(() => { try { w.document.documentElement.requestFullscreen(); } catch (e) { } }, 500);
    }
    function openDisplay() {
      document.getElementById('screen-menu').classList.remove('open');
      window.open('/obs_display.html', 'poncast_display');
    }
    function openDisplayPrimary(w, h) {
      document.getElementById('screen-menu').classList.remove('open');
      const displayUrl = location.origin + '/obs_display.html';
      const left = Math.round((window.screen.width - w) / 2);
      const top = Math.round((window.screen.height - h) / 2);
      const win = window.open(displayUrl, 'poncast_display',
        `left=${left},top=${top},width=${w},height=${h},resizable=no`);
      if (win) win.focus();
    }

    // ===== 種別別クイック追加 =====
    // ===== コンテンツ名インライン編集 =====
    function startRenameContent(id) {
      const el = document.getElementById('editor-title-name');
      if (!el) return;
      const c = contents.find(x => x.id === id);
      if (!c) return;
      el.innerHTML = `<input id="content-rename-input" value="${esc(c.name)}"
    style="background:transparent;border:none;border-bottom:1px solid var(--acc);
           color:var(--acc);font-weight:700;font-size:14px;outline:none;
           min-width:80px;max-width:220px;padding:0;font-family:inherit;"
    onblur="finishRenameContent('${id}', this)"
    onkeydown="if(event.key==='Enter')this.blur();if(event.key==='Escape'){this.dataset.cancel='1';this.blur();}">`;
      const inp = document.getElementById('content-rename-input');
      if (inp) { inp.focus(); inp.select(); }
    }

    function finishRenameContent(id, inp) {
      const c = contents.find(x => x.id === id);
      if (c && !inp.dataset.cancel && inp.value.trim()) {
        c.name = inp.value.trim();
        c.updated = now();
        save();
        renderList();
      }
      if (c) renderEditor(c);
    }

    function quickAdd(type) {
      if (type === 'media') {
        _mediaMode = 'add';
      triggerFilePicker('media-file-input', 'msg_select_media');
      // document.getElementById('media-file-input').click();
        return;
      }
      const num = contents.filter(x => x.type === type).length + 1;
      const c = {
        id: uid(), type,
        name: typeLabel(type) + ' ' + num,
        tags: [], created: now(), updated: now(),
        data: defaultData(type)
      };
      contents.unshift(c);
      save();
      selectItem(c.id);
    }

    function save() {
      if (!g_initialized) return;
      if (activeSceneId) {
        const key = getSceneContentsKey(activeSceneId);
        localStorage.setItem(key, JSON.stringify(contents, null, 2));
      }
      localStorage.setItem('poncast_selectedId', selectedId || '');
      localStorage.setItem('poncast_filterCat', filterCatVal || 'all');
      
      // scenesリストも同期
      localStorage.setItem(SCENES_KEY, JSON.stringify({ activeSceneId, scenes }));
      
      refreshAllJSON();
    }
    
    function saveAll() {
      save();
      exportJSON();
    }

    // ===== ユーティリティ =====
    // ===== ユーティリティ =====
    function formatSeconds(sec) {
      if (!sec && sec !== 0) return '—';
      const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
      return `${m}:${String(s).padStart(2, '0')} (${Math.round(sec)}${currentLang === 'en' ? 's' : '秒'})`;
    }
    // 動画の長さを自動取得してコンテンツに保存
    function detectVideoDuration(url, contentId) {
      const v = document.createElement('video');
      v.preload = 'metadata';
      v.src = url;
      v.onloadedmetadata = () => {
        const c = contents.find(x => x.id === contentId);
        if (c) { c.data.videoDuration = v.duration; save(); renderEditor(c); }
      };
    }

    function triggerFilePicker(id, msgKey, mode = null) {
      if (mode) _mediaMode = mode;
      notify(t(msgKey), 'info');
      const el = document.getElementById(id);
      if (el) el.click();
    }

    function notify(msg, type = '') {
      const el = document.getElementById('notify');
      el.textContent = msg; el.className = 'notify show ' + type;
      setTimeout(() => el.classList.remove('show'), 2500);
    }

    // ===== フィルター・レンダリング =====
    function filterCat(cat) {
      filterCatVal = cat;
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === cat);
      });
      renderList();
    }

    function getFilteredContents() {
      const q = document.getElementById('search-input').value.toLowerCase();
      return contents.filter(c => {
        if (filterCatVal !== 'all' && c.type !== filterCatVal) return false;
        if (q && !c.name.toLowerCase().includes(q) && !(c.tags || []).some(t => t.includes(q))) return false;
        return true;
      });
    }

    function renderList() {
      const list = document.getElementById('content-list');
      const filtered = getFilteredContents();
      document.getElementById('count-badge').textContent = filtered.length;

      let newTypeLabel = '';
      let targetType = filterCatVal;
      if (filterCatVal === 'media' || filterCatVal === 'all') {
        newTypeLabel = (currentLang === 'en' ? 'Media' : 'メディア');
        targetType = 'media';
      } else if (filterCatVal === 'telop') {
        newTypeLabel = (currentLang === 'en' ? 'Telop' : 'テロップ');
      } else if (filterCatVal === 'break') {
        newTypeLabel = (currentLang === 'en' ? 'Info' : 'お知らせ');
      } else if (filterCatVal === 'scroll') {
        newTypeLabel = (currentLang === 'en' ? 'Scroll' : 'スクロール');
      }

      const newBtnHtml = newTypeLabel
        ? `<div class="list-new-btn" onclick="quickAdd('${targetType}')">＋ ${t('btn_new_prefix')}${newTypeLabel}</div>`
        : '';
      // console.log('renderList:', filterCatVal, newTypeLabel, newBtnHtml);

      if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align:center;color:var(--txt3);font-size:12px;padding:16px">${currentLang === 'en' ? 'No content' : 'コンテンツなし'}</div>` + newBtnHtml;
        return;
      }
      const anySel = filtered.some(c => selectedIds.has(c.id));
      const allSel = filtered.length > 0 && filtered.every(c => selectedIds.has(c.id));

      const headerHtml = `
      <div class="content-list-header">
        <input type="checkbox" class="header-cb" ${allSel ? 'checked' : ''} onclick="toggleSelectAll(event)">
        <span style="flex:1">${currentLang === 'en' ? 'Select All' : 'すべて選択'}</span>
      </div>`;

      list.innerHTML = headerHtml + filtered.map(c => {
        const cls = [
          'c-item',
          c.id === selectedId ? 'selected' : '',
          selectedIds.has(c.id) ? 'multi' : '',
          (c.id === playingId || c.id === telopId) ? 'playing' : ''
        ].filter(Boolean).join(' ');
        const isChecked = selectedIds.has(c.id);
        
        return `<div class="${cls}" draggable="true"
        data-id="${c.id}"
        onclick="selectItem('${c.id}', event.shiftKey, 'preview')"
        ondragstart="onItemDragStart(event,'${c.id}')"
        ondragover="onItemDragOver(event,'${c.id}')"
        ondragleave="onItemDragLeave(event)"
        ondrop="onItemDrop(event,'${c.id}')"
        ondragend="onItemDragEnd()">
      <div class="c-item-row">
        <input type="checkbox" class="c-item-cb" ${isChecked ? 'checked' : ''} onclick="onCheckboxClick(event, '${c.id}')">
        <span class="c-drag-handle" onmousedown="event.stopPropagation()">⠿</span>
        <span class="c-type-badge type-${c.type}">${typeLabel(c.type)}</span>
        <span class="c-name" title="クリックで再生" style="cursor:pointer" onclick="clickPlayItem('${c.id}',event)">${esc(c.name)}</span>
        <span class="c-remaining" id="rem-${c.id}"></span>
        <span class="c-play-ind">${(c.id === playingId || c.id === telopId) ? '▶' : ''}</span>
        <div class="c-actions">
          <button class="c-act-btn" style="background:rgba(200,168,75,0.15);color:var(--acc)" onclick="duplicateItem(event,'${c.id}')">複製</button>
          <button class="c-act-btn" style="background:rgba(232,64,64,0.15);color:var(--red)" onclick="askDelete(event,'${c.id}')">削除</button>
        </div>
      </div>
    </div>`;
      }).join('') + newBtnHtml;
    }

    function scrollToSelected() {
      const el = document.querySelector('.c-item.selected');
      if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    function typeLabel(typ) {
      return t('type_label_' + typ) || typ;
    }
    function summaryOf(c) {
      const d = c.data || {};
      switch (c.type) {
        case 'telop': return [d.name, d.title].filter(Boolean).join(' / ');
        case 'scroll': return d.text || '';
        case 'break': return d.body || '';
        case 'media': return d.src ? '📎 ' + d.src : t('summary_no_file');
        case 'slide': return t('summary_slides', (d.slides || []).length);
        case 'comp': return t('summary_comp', (d.items || []).length);
        default: return '';
      }
    }

    // ===== アイテムドラッグ並び替え =====
    let dragSrcId = null;

    function onItemDragStart(e, id) {
      dragSrcId = id;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', id);
      // 次フレームでクラス付与（ドラッグ画像生成後）
      requestAnimationFrame(() => {
        const el = document.querySelector(`.c-item[data-id="${id}"]`);
        if (el) el.classList.add('drag-src');
      });
    }

    function onItemDragOver(e, id) {
      if (!dragSrcId || dragSrcId === id) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'move';
      // ドロップ位置インジケーター
      document.querySelectorAll('.drop-above,.drop-below').forEach(el => {
        el.classList.remove('drop-above', 'drop-below');
      });
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      el.classList.add(e.clientY < mid ? 'drop-above' : 'drop-below');
    }

    function onItemDragLeave(e) {
      if (!e.currentTarget.contains(e.relatedTarget))
        e.currentTarget.classList.remove('drop-above', 'drop-below');
    }

    function onItemDrop(e, targetId) {
      if (!dragSrcId || dragSrcId === targetId) return;
      e.preventDefault();
      e.stopPropagation();

      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const insertBefore = e.clientY < rect.top + rect.height / 2;

      // contents 配列内で並び替え
      const srcIdx = contents.findIndex(c => c.id === dragSrcId);
      let tgtIdx = contents.findIndex(c => c.id === targetId);
      if (srcIdx < 0 || tgtIdx < 0) return;

      const [item] = contents.splice(srcIdx, 1);
      tgtIdx = contents.findIndex(c => c.id === targetId); // splice後に再取得
      contents.splice(insertBefore ? tgtIdx : tgtIdx + 1, 0, item);

      save();
      renderList();
      scrollToSelected();
    }

    function onItemDragEnd() {
      dragSrcId = null;
      document.querySelectorAll('.drag-src,.drop-above,.drop-below').forEach(el =>
        el.classList.remove('drag-src', 'drop-above', 'drop-below')
      );
    }

    // ===== キーボード操作 =====
    document.addEventListener('keydown', e => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      if (e.target.isContentEditable) return;

      // 削除モーダルが開いているとき Enter/NumpadEnter で確定、Escape でキャンセル
      if (document.getElementById('del-modal').classList.contains('open')) {
        if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') {
          e.preventDefault();
          e.stopPropagation();
          confirmDelete();
          return;
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          closeModal('del-modal');
          return;
        }
        // モーダル表示中は他の操作を禁止
        return;
      }

      // Delete/Backspace: 削除
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedIds.size > 0 || selectedId) {
          e.preventDefault();
          if (selectedIds.size > 0) {
            askBulkDelete();
          } else {
            askDelete(null, selectedId);
          }
        }
        return;
      }

      // 全画面プレーヤーが開いているとき
      if (document.getElementById('fs-overlay').classList.contains('open')) {
        if (e.key === 'Escape' || e.key === 'f' || e.key === 'F') {
          e.preventDefault(); closeFullscreen(); return;
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault(); send('MEDIA_SEEK', { delta: e.key === 'ArrowRight' ? 5 : -5 }); return;
        }
        if (!signageMode) {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const filtered = getFilteredContents();
            if (!filtered.length) return;
            const curIdx = filtered.findIndex(c => c.id === selectedId);
            const ni = e.key === 'ArrowDown'
              ? (curIdx < filtered.length - 1 ? curIdx + 1 : 0)
              : (curIdx > 0 ? curIdx - 1 : filtered.length - 1);
            selectItem(filtered[ni].id, false, 'focus'); 
            openFullscreen(); scrollToSelected(); return;
          }
          if (e.key === ' ') { e.preventDefault(); if (selectedId) ponDashi(); return; }
        }
        return;
      }

      // Escape でサイネージ停止
      if (e.key === 'Escape' && signageMode) { e.preventDefault(); stopSignage(); return; }

      // 上下矢印: フォーカスのみ移動（チェックなし、プレビューなし）
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (signageMode) {
          e.key === 'ArrowDown' ? signageNext() : signagePrev();
        } else {
          const filtered = getFilteredContents();
          if (!filtered.length) return;
          const curIdx = filtered.findIndex(c => c.id === selectedId);
          const ni = e.key === 'ArrowDown'
            ? (curIdx < filtered.length - 1 ? curIdx + 1 : 0)
            : (curIdx > 0 ? curIdx - 1 : filtered.length - 1);
          const newId = filtered[ni].id;
          
          if (e.shiftKey) {
            selectItem(newId, true, 'full'); // Shift+矢印: 範囲選択
          } else {
            selectItem(newId, false, 'preview'); // 通常矢印: プレビュー表示
          }
          scrollToSelected();
        }
        return;
      }

      // Space: プレビュー更新 + 放送（チェックは入れない）
      if (e.key === ' ') {
        e.preventDefault();
        if (selectedId) {
          selectItem(selectedId, false, 'preview'); // プレビュー更新
          ponDashi();
        }
        return;
      }

      // J/L: シーク
      if (e.key === 'j' || e.key === 'J' || e.key === 'l' || e.key === 'L') {
        if (signageMode) {
          e.preventDefault();
          send('MEDIA_SEEK', { delta: (e.key === 'l' || e.key === 'L') ? 5 : -5 });
        }
        return;
      }

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault(); if (selectedId) openFullscreen(); return;
      }
    });

    // ===== タイトル名クリックでダイレクト再生 =====
    let _cpLastId = null, _cpLastTime = 0;
    function clickPlayItem(id, event) {
      event.stopPropagation(); // c-item の onclick を抑止
      selectItem(id);
      // ダブルクリック2発目は無視（PLAY→STOP の即トグルを防ぐ）
      const now = Date.now();
      if (id === _cpLastId && now - _cpLastTime < 400) return;
      _cpLastId = id; _cpLastTime = now;
      ponDashi();
    }

    function toggleSelectAll(e) {
      e.stopPropagation();
      const filtered = getFilteredContents();
      const allSel = filtered.length > 0 && filtered.every(c => selectedIds.has(c.id));
      if (allSel) {
        filtered.forEach(c => selectedIds.delete(c.id));
      } else {
        filtered.forEach(c => selectedIds.add(c.id));
      }
      updateBulkBar();
      renderList();
    }

    function onCheckboxClick(e, id) {
      e.stopPropagation();
      if (selectedIds.has(id)) {
        selectedIds.delete(id);
      } else {
        selectedIds.add(id);
      }
      updateBulkBar();
      renderList();
    }

    // ===== 選択 =====
    function selectItem(id, extend = false, mode = 'full') {
      if (selectedId && mode !== 'focus') saveEditor(); 
      // mode: 'full' (focus+preview+check), 'focus' (blue border only), 'preview' (focus+preview, no check)
      if (extend && anchorId) {
        // Shift: 範囲選択 (チェックを入れる)
        const filtered = getFilteredContents();
        const ai = filtered.findIndex(c => c.id === anchorId);
        const ci = filtered.findIndex(c => c.id === id);
        const [from, to] = ai <= ci ? [ai, ci] : [ci, ai];
        selectedIds.clear();
        for (let i = from; i <= to; i++) selectedIds.add(filtered[i].id);
      } else {
        if (mode === 'full' || mode === 'preview') {
          selectedIds.clear();
          if (mode === 'full') selectedIds.add(id);
        }
        anchorId = id;
      }
      selectedId = id;
      renderList();
      updateBulkBar();
      
      if (mode === 'focus') return;

      const c = contents.find(x => x.id === id);
      if (!c) return;
      renderEditor(c);
      renderPreview(c);
      renderJSON(c);
      updatePonBtn();
      showStaticCountdown(c); // 選択時にタイマーを静的表示
    }

    // 上下キー用: リストのフォーカス（ハイライト）のみ。プレビュー・エディターは更新しない
    function focusItem(id) {
      selectedIds.clear();
      selectedIds.add(id);
      selectedId = id;
      anchorId = id;
      renderList();
      updateBulkBar();
      updatePonBtn();
      scrollToSelected();
    }

    function updateBulkBar() {
      const bar = document.getElementById('bulk-bar');
      if (!bar) return;
      if (selectedIds.size > 1) {
        bar.classList.add('show');
        document.getElementById('bulk-cnt').textContent = t('bulk_selected', selectedIds.size);
        
        // MIXボタンの文字を変える例（要望にあれば）
        const vidCount = contents.filter(c => selectedIds.has(c.id) && c.type === 'media' && c.data?.kind === 'video').length;
        const signageBtn = document.getElementById('signage-btn');
        if (signageBtn && !signageMode) {
          if (vidCount > 0) {
            signageBtn.innerHTML = `▶▶ MIX (${vidCount} ${currentLang === 'en' ? 'Videos' : '動画'})`;
          } else {
            signageBtn.textContent = '▶▶ MIX';
          }
        }
      } else {
        bar.classList.remove('show');
        const signageBtn = document.getElementById('signage-btn');
        if (signageBtn && !signageMode) signageBtn.textContent = '▶▶ MIX';
      }
    }

    function clearMultiSelect() {
      selectedIds.clear();
      if (selectedId) { selectedIds.add(selectedId); anchorId = selectedId; }
      renderList();
      updateBulkBar();
    }

    function askBulkDelete() {
      if (selectedIds.size === 0) return;
      if (selectedIds.size === 1) {
        // チェックが1件のみの場合はそのアイテムを対象に単一削除モードを呼ぶ
        askDelete(null, Array.from(selectedIds)[0]);
        return;
      }
      deleteTargetId = null; // null = 複数削除モード
      document.getElementById('del-modal-title').textContent =
        t('modal_del_title_n', selectedIds.size);
      if (document.activeElement) document.activeElement.blur();
      document.getElementById('del-modal').classList.add('open');
    }

    // ===== 新規作成 =====
    function openNewModal() {
      document.getElementById('new-name').value = '';
      document.getElementById('new-modal').classList.add('open');
      selectType('telop');
    }
    function selectType(t) {
      newTypeVal = t;
      document.querySelectorAll('.type-card').forEach(c => {
        c.classList.toggle('selected', c.dataset.type === t);
      });
    }
    function createNew() {
      const name = document.getElementById('new-name').value.trim();
      if (!name) { alert(currentLang === 'en' ? 'Please enter a content name' : 'コンテンツ名を入力してください'); return; }
      const c = {
        id: uid(), type: newTypeVal, name,
        tags: [], created: now(), updated: now(),
        data: defaultData(newTypeVal)
      };
      contents.unshift(c);
      save(); renderList();
      closeModal('new-modal');
      selectItem(c.id);
      notify(t('notify_created'), 'success');
    }
    function defaultData(type) {
      const isEn = currentLang === 'en';
      switch (type) {
        case 'telop': return { enterDuration: 0, exitDuration: 0.5, name: isEn ? 'John Doe' : '山田 太郎', title: isEn ? 'CEO' : '代表取締役社長', accent: '#00d4ff', nameColor: '#ffffff', nameFont: 'Hiragino Sans', nameSize: 36, titleBg: '#00d4ff', titleColor: '#000000', titleFont: 'Hiragino Sans', titleSize: 22, position: 2, bottomPx: 80 };
        case 'scroll': return { enterDuration: 0, exitDuration: 0.5, label: isEn ? 'NEWS' : 'ニュース', text: isEn ? 'Scrolling text goes here' : 'スクロールテキストがここに入ります', speedPct: 100, fontSize: 24, textColor: '#ffffff', scrollFont: 'Hiragino Sans', labelFont: 'Hiragino Sans', labelColor: '#000000', labelBg: '#00d4ff' };
        case 'break': return { enterDuration: 0, exitDuration: 0.5, label: isEn ? 'Info' : 'お知らせ', body: isEn ? 'Info text goes here.' : 'お知らせテキストがここに入ります。', labelColor: '#ff2233', blink: false };
        case 'media': return { enterDuration: 0, exitDuration: 0.5, src: '', kind: 'image', fullscreen: true, loop: false, mute: true, x: 0, y: 0, w: 960, h: 540, sigDuration: 5, startTime: 0, playDuration: 0, videoDuration: null };
        case 'slide': return { enterDuration: 0, exitDuration: 0.5, slides: [], interval: 4, transition: 'fade', sigDuration: 10 };
        case 'comp': return { enterDuration: 0, exitDuration: 0.5, items: [], duration: 0, sigDuration: 5 };
        default: return {};
      }
    }

    // ===== エディター描画 =====
    function renderEditor(c) {
      const toolbar = document.getElementById('editor-toolbar');
      toolbar.innerHTML = `
    <span id="editor-title-name" title="ダブルクリックで名前変更"
      style="color:var(--acc);font-weight:700;font-size:14px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:text"
      ondblclick="startRenameContent('${c.id}')">${esc(c.name)}</span>
    <button class="tb-btn" onclick="duplicateItem(null,'${c.id}')">${t('btn_duplicate')}</button>
  `;
      const body = document.getElementById('editor-body');
      const d = c.data || {};

      let html = `
  <input type="hidden" id="e-name" value="${esc(c.name)}">`;

      switch (c.type) {
        case 'telop':
          html += (() => {
            const fonts = currentLang === 'en' ? [
              ['Helvetica', 'Helvetica'],
              ['Arial', 'Arial'],
              ['Times New Roman', 'Times New Roman'],
              ['Impact', 'Impact'],
              ['Futura', 'Futura'],
              ['sans-serif', 'Sans-serif'],
              ['serif', 'Serif'],
              ['Hiragino Sans', 'Hiragino Sans'],
              ['Yu Gothic', 'Yu Gothic'],
              ['Meiryo', 'Meiryo'],
            ] : [
              ['Hiragino Sans', 'ヒラギノ角ゴ'],
              ['Hiragino Mincho ProN', 'ヒラギノ明朝'],
              ['Yu Gothic', '游ゴシック'],
              ['Yu Mincho', '游明朝'],
              ['Meiryo', 'メイリオ'],
              ['MS Gothic', 'MSゴシック'],
              ['MS Mincho', 'MS明朝'],
              ['sans-serif', 'サンセリフ'],
              ['serif', 'セリフ'],
            ];
            const opts = (sel) => fonts.map(([v, n]) => `<option value="${v}" ${sel === v ? 'selected' : ''}>${n}</option>`).join('');
            return `
      <div class="e-section">
        <div class="e-section-body">
          <div class="e-field"><label class="e-label">${t('lbl_name')}</label><input class="e-input" id="d-name" value="${esc(d.name || '')}"></div>
          <div class="e-row3" style="align-items:flex-start">
            <div class="e-field"><label class="e-label">${t('lbl_name_font')}</label><select class="e-select" id="d-nameFont">${opts(d.nameFont || 'Hiragino Sans')}</select></div>
            <div class="e-field">
              <label class="e-label">${t('lbl_name_size')}</label>
              <input class="e-input" type="number" id="d-nameSize" min="12" max="96" step="2" value="${d.nameSize || 36}" style="width:75px !important">
            </div>
            <div class="e-field"><label class="e-label">${t('lbl_name_color')}</label><div class="color-row"><input type="color" id="d-nameColor" value="${d.nameColor || '#ffffff'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.nameColor || '#ffffff'}" oninput="this.previousElementSibling.value=this.value"></div></div>
          </div>
          <hr style="border:none; border-top:2px solid var(--bdr2); margin:16px 0;">
          <div class="e-field" style="margin-top:8px"><label class="e-label">${t('lbl_title')}</label><input class="e-input" id="d-title" value="${esc(d.title || '')}"></div>
          <div class="e-row3" style="align-items:flex-start">
            <div class="e-field"><label class="e-label">${t('lbl_title_font')}</label><select class="e-select" id="d-titleFont">${opts(d.titleFont || 'Hiragino Sans')}</select></div>
            <div class="e-field">
              <label class="e-label">${t('lbl_title_size')}</label>
              <input class="e-input" type="number" id="d-titleSize" min="12" max="72" step="2" value="${d.titleSize || 22}" style="width:75px !important">
            </div>
            <div class="e-field"></div>
          </div>
          <div class="e-row3" style="align-items:flex-start;margin-top:8px">
            <div class="e-field"><label class="e-label">${t('lbl_title_bg')}</label><div class="color-row"><input type="color" id="d-titleBg" value="${d.titleBg || '#00d4ff'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.titleBg || '#00d4ff'}" oninput="this.previousElementSibling.value=this.value"></div></div>
            <div class="e-field"><label class="e-label">${t('lbl_title_color')}</label><div class="color-row"><input type="color" id="d-titleColor" value="${d.titleColor || '#000000'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.titleColor || '#000000'}" oninput="this.previousElementSibling.value=this.value"></div></div>
            <div class="e-field"><label class="e-label">${t('lbl_accent')}</label><div class="color-row"><input type="color" id="d-accent" value="${d.accent || '#00d4ff'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.accent || '#00d4ff'}" oninput="this.previousElementSibling.value=this.value"></div></div>
          </div>
          <div class="e-row2" style="align-items:flex-start;margin-top:8px">
          <div class="e-field">
            <label class="e-label">${t('lbl_bottom_px')} <span style="font-size:11px;color:var(--fg2)">px</span></label>
            <input class="e-input" type="number" id="d-bottomPx" min="0" max="1080" step="1" value="${d.bottomPx ?? 80}">
          </div>
          <div class="e-field">
            <label class="e-label">${t('lbl_position')} &nbsp;<span id="d-position-label" style="color:var(--acc);font-size:12px">${typeof d.position === 'number' ? d.position : { left: 0, center: 10, right: 20 }[d.position] ?? 2}</span></label>
            <input type="range" min="0" max="20" step="1"
              value="${typeof d.position === 'number' ? d.position : { left: 0, center: 10, right: 20 }[d.position] ?? 2}"
              style="width:100%"
              oninput="document.getElementById('d-position').value=this.value;document.getElementById('d-position-label').textContent=this.value;">
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--fg2);margin-top:2px"><span>${t('pos_left')}</span><span>${t('pos_center')}</span><span>${t('pos_right')}</span></div>
            <input type="hidden" id="d-position" value="${typeof d.position === 'number' ? d.position : { left: 0, center: 10, right: 20 }[d.position] ?? 2}">
          </div>
          </div><!-- /e-row2 -->
        </div>
      </div>`;
          })();
          break;
        case 'scroll':
          html += (() => {
            const fonts = currentLang === 'en' ? [
              ['Helvetica', 'Helvetica'],
              ['Arial', 'Arial'],
              ['Times New Roman', 'Times New Roman'],
              ['Impact', 'Impact'],
              ['Futura', 'Futura'],
              ['sans-serif', 'Sans-serif'],
              ['serif', 'Serif'],
              ['Hiragino Sans', 'Hiragino Sans'],
              ['Yu Gothic', 'Yu Gothic'],
              ['Meiryo', 'Meiryo'],
            ] : [
              ['Hiragino Sans', 'ヒラギノ角ゴ'],
              ['Hiragino Mincho ProN', 'ヒラギノ明朝'],
              ['Yu Gothic', '游ゴシック'],
              ['Yu Mincho', '游明朝'],
              ['Meiryo', 'メイリオ'],
              ['MS Gothic', 'MSゴシック'],
              ['MS Mincho', 'MS明朝'],
              ['sans-serif', 'サンセリフ'],
              ['serif', 'セリフ'],
            ];
            const opts = (sel) => fonts.map(([v, n]) => `<option value="${v}" ${sel === v ? 'selected' : ''}>${n}</option>`).join('');
            return `
      <div class="e-section">
        <div class="e-section-body">

          <!-- テキスト -->
          <div class="e-field"><label class="e-label">${t('lbl_text')}</label><textarea class="e-textarea" id="d-text" style="min-height:80px">${esc(d.text || '')}</textarea></div>
          <div class="e-row3" style="align-items:flex-start">
            <div class="e-field"><label class="e-label">${t('lbl_text_font')}</label><select class="e-select" id="d-scrollFont" style="width:150px !important">${opts(d.scrollFont || 'Hiragino Sans')}</select></div>
            <div class="e-field">
              <label class="e-label" style="white-space:nowrap">${t('lbl_size')}</label>
              <div style="display:flex;align-items:center;gap:6px">
                <input class="e-input" type="number" id="d-fontSize" min="16" max="72" step="2" value="${d.fontSize || 24}" style="width:75px !important">
                <span style="color:var(--fg2);font-size:12px;line-height:1">px</span>
              </div>
            </div>
            <div class="e-field"><label class="e-label">${t('lbl_text_color')}</label><div class="color-row"><input type="color" id="d-textColor" value="${d.textColor || '#ffffff'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.textColor || '#ffffff'}" oninput="this.previousElementSibling.value=this.value"></div></div>
          </div>
          <div class="e-field" style="margin-top:8px">
            <label class="e-label" style="white-space:nowrap">${t('lbl_speed')} <span style="font-size:11px;color:var(--fg2)">(50〜400%)</span></label>
            <div style="display:flex;align-items:center;gap:6px">
              <input class="e-input" type="number" id="d-speedPct" min="50" max="400" step="5" value="${d.speedPct || 100}">
              <span style="color:var(--fg2);font-size:12px;line-height:1">%</span>
            </div>
          </div>

          <!-- ラベル -->
          <hr style="border:none; border-top:2px solid var(--bdr2); margin:16px 0;">
          <div class="e-field" style="margin-top:8px"><label class="e-label">${t('lbl_label')}</label><input class="e-input" id="d-label" value="${esc(d.label || 'ニュース')}"></div>
          <div class="e-row3" style="align-items:flex-start;margin-top:8px">
            <div class="e-field"><label class="e-label">ラベルフォント</label><select class="e-select" id="d-labelFont" style="width:150px !important">${opts(d.labelFont || 'Hiragino Sans')}</select></div>
            <div class="e-field"><label class="e-label">${t('lbl_label_bg')}</label><div class="color-row"><input type="color" id="d-labelBg" value="${d.labelBg || '#00d4ff'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.labelBg || '#00d4ff'}" oninput="this.previousElementSibling.value=this.value"></div></div>
            <div class="e-field"><label class="e-label">${t('lbl_label_color')}</label><div class="color-row"><input type="color" id="d-labelColor" value="${d.labelColor || '#000000'}" oninput="this.nextElementSibling.value=this.value"><input type="text" style="width:75px;font-family:'Courier New',monospace;font-size:11px;padding:3px 2px;border:1px solid var(--bdr2);border-radius:3px;background:var(--bg2);color:var(--txt);margin-left:6px" value="${d.labelColor || '#000000'}" oninput="this.previousElementSibling.value=this.value"></div></div>
          </div>

        </div>
      </div>`;
          })();
          break;
        case 'break':
          html += `
      <div class="e-section">
        <div class="e-section-body">
          <div class="e-field" style="margin-bottom:8px">
            <label class="e-label">${t('lbl_label')}</label>
            <input class="e-input" id="d-label" value="${esc(d.label || (currentLang === 'en' ? 'Info' : 'お知らせ'))}">
          </div>
          <div class="e-field"><label class="e-label">${t('lbl_body_text')}</label><textarea class="e-textarea" id="d-body">${esc(d.body || '')}</textarea></div>
          <div class="e-field" style="margin-top:12px">
            <label class="e-toggle-label"><input type="checkbox" id="d-blink" ${d.blink ? 'checked' : ''}><span>${t('lbl_blink')}</span></label>
          </div>
        </div>
      </div>`;
          break;
        case 'media':
          html += `
      <div class="e-section">
        <div class="e-section-body">
          <input type="hidden" id="d-src" value="${esc(d.src || '')}">
          <select id="d-kind" style="display:none">
            <option value="image" ${d.kind === 'image' ? 'selected' : ''}>${t('lbl_image')}</option>
            <option value="video" ${d.kind === 'video' ? 'selected' : ''}>${t('lbl_video')}</option>
          </select>
          <div class="e-toggle-3row">
            <label class="e-toggle-label"><input type="checkbox" id="d-fullscreen" ${d.fullscreen ? 'checked' : ''}><span>FULL SCREEN</span></label>
            <label class="e-toggle-label"><input type="checkbox" id="d-loop" ${d.loop ? 'checked' : ''}><span>LOOP</span></label>
            <label class="e-toggle-label"><input type="checkbox" id="d-mute" ${d.mute ? 'checked' : ''}><span>MUTE</span></label>
          </div>
          ${d.kind === 'video' ? `
          <div class="e-row4">
            <div class="e-field">
              <label class="e-label">${t('lbl_start_time')}</label>
              <input class="e-input" type="number" id="d-startTime" min="0" step="0.5" value="${d.startTime || 0}">
            </div>
            <div class="e-field" style="grid-column: span 2">
              <label class="e-label">${t('lbl_play_dur')}</label>
              <input class="e-input" type="number" id="d-playDuration" min="0" step="0.5" value="${d.playDuration || 0}">
            </div>
            <div class="e-field">
              <label class="e-label">${t('lbl_video_length')}</label>
              <div style="padding:6px 0;color:var(--txt2);font-size:12px">${d.videoDuration ? formatSeconds(d.videoDuration) : '—'}</div>
            </div>
          </div>` : ''}
          <div class="e-row4">
            <div class="e-field"><label class="e-label">X</label><input class="e-input" type="number" id="d-x" value="${d.x || 0}"></div>
            <div class="e-field"><label class="e-label">Y</label><input class="e-input" type="number" id="d-y" value="${d.y || 0}"></div>
            <div class="e-field"><label class="e-label">${t('lbl_width')}</label><input class="e-input" type="number" id="d-w" value="${d.w || 960}"></div>
            <div class="e-field"><label class="e-label">${t('lbl_height')}</label><input class="e-input" type="number" id="d-h" value="${d.h || 540}"></div>
          </div>
          <div class="e-field" style="margin-top:8px">
            <button class="tb-btn" style="width:100%;padding:10px" onclick="triggerFilePicker('media-file-input', 'msg_select_media', 'replace')">📁 ${t('btn_select_file')}</button>
          </div>
        </div>
      </div>`;
          break;
        case 'slide':
          html += `
      <div class="e-section">
        <div class="e-section-body">
          <div class="e-row2">
            <div class="e-field"><label class="e-label">${t('lbl_interval')}</label><input class="e-input" type="number" id="d-interval" value="${d.interval || 4}" min="1"></div>
            <div class="e-field">
              <label class="e-label">${t('lbl_transition')}</label>
              <select class="e-select" id="d-transition">
                <option value="fade" ${d.transition === 'fade' ? 'selected' : ''}>${t('opt_fade')}</option>
                <option value="slide" ${d.transition === 'slide' ? 'selected' : ''}>${t('opt_slide')}</option>
                <option value="cut" ${d.transition === 'cut' ? 'selected' : ''}>${t('opt_cut')}</option>
              </select>
            </div>
          </div>
          <div class="e-field">
            <label class="e-label">${t('lbl_slide_list')}</label>
            <div class="slide-list" id="slide-list">
              ${(d.slides || []).map((s, i) => `
                <div class="slide-row">
                  <div class="slide-num">${i + 1}</div>
                  <div class="slide-info"><div class="slide-name">${esc(s.src)}</div><div class="slide-dur">${s.kind || 'image'} · ${s.duration || 4}秒</div></div>
                  <button class="slide-del" onclick="removeSlide(${i})">×</button>
                </div>`).join('')}
            </div>
            <button class="add-slide-btn" style="margin-top:6px" onclick="addSlide()">＋ ${t('btn_add_slide')}</button>
          </div>
        </div>
      </div>`;
          break;
        case 'comp':
          html += `
      <div class="e-section">
        <div class="e-section-body">
          <div class="e-field"><label class="e-label">${t('lbl_display_dur')}</label><input class="e-input" type="number" id="d-duration" value="${d.duration || 0}" min="0"></div>
          <div class="e-field">
            <label class="e-label">${t('lbl_comp_elements')}</label>
            <div id="comp-items">
              ${(d.items || []).map((item, i) => `
                <div style="display:flex;gap:6px;margin-bottom:6px;align-items:center">
                  <select class="e-select" style="flex:1" onchange="updateCompItem(${i},'type',this.value)">
                    ${['telop', 'scroll', 'break', 'media'].map(t => `<option value="${t}" ${item.type === t ? 'selected' : ''}>${typeLabel(t)}</option>`).join('')}
                  </select>
                  <input class="e-input" style="flex:2" type="text" placeholder="${t('placeholder_content_id')}" value="${esc(item.contentId || '')}" onchange="updateCompItem(${i},'contentId',this.value)">
                  <button class="slide-del" onclick="removeCompItem(${i})">×</button>
                </div>`).join('')}
            </div>
            <button class="add-slide-btn" onclick="addCompItem()">＋ ${t('btn_add_element')}</button>
          </div>
        </div>
      </div>`;
          break;
      }
      body.innerHTML = html;
      updateInOutBar(c);
    }

    // ===== IN/OUT バー更新 =====
    function updateInOutBar(c) {
      if (!c) return;
      const d = c.data || {};

      // グローバルデフォルト
      const globalIn = (JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[`--def-${c.type}-in`] ?? 0);
      const globalOut = (JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[`--def-${c.type}-out`] ?? 0.5);

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
        const showSig = c && !isTelopType(c) && !(c.type === 'media' && (d.kind || 'image') === 'video');
        sigFld.style.display = showSig ? '' : 'none';
      }
    }

    // ===== 保存 =====
    function saveEditor() {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      c.name = document.getElementById('e-name')?.value || c.name;
      const enterDurEl = document.getElementById('d-enterDuration');
      const exitDurEl = document.getElementById('d-exitDuration');
      const chkIn = document.getElementById('d-useCustomIn');
      const chkOut = document.getElementById('d-useCustomOut');

      c.data.useCustomIn = chkIn ? chkIn.checked : false;
      c.data.useCustomOut = chkOut ? chkOut.checked : false;

      if (enterDurEl && c.data.useCustomIn) c.data.enterDuration = Math.max(0, Number(enterDurEl.value) || 0);
      if (exitDurEl && c.data.useCustomOut) c.data.exitDuration = Math.max(0, Number(exitDurEl.value) || 0);

      const sigDurEl = document.getElementById('d-sigDuration');
      if (sigDurEl) c.data.sigDuration = Math.max(1, Number(sigDurEl.value) || 5);
      c.updated = now();

      // タイプ別データ収集
      const d = c.data;
      const g = id => { const el = document.getElementById(id); return el ? el.value : null; };
      const gb = id => { const el = document.getElementById(id); return el ? el.checked : null; };
      const gn = id => { const v = g(id); return v !== null ? Number(v) : null; };

      switch (c.type) {
        case 'telop':
          d.name = g('d-name') ?? d.name;
          d.nameColor = g('d-nameColor') ?? d.nameColor;
          d.nameFont = g('d-nameFont') ?? d.nameFont;
          d.nameSize = gn('d-nameSize') ?? d.nameSize;
          d.title = g('d-title') ?? d.title;
          d.titleBg = g('d-titleBg') ?? d.titleBg;
          d.titleColor = g('d-titleColor') ?? d.titleColor;
          d.titleFont = g('d-titleFont') ?? d.titleFont;
          d.titleSize = gn('d-titleSize') ?? d.titleSize;
          d.position = gn('d-position') ?? d.position;
          d.bottomPx = gn('d-bottomPx') ?? d.bottomPx;
          d.accent = g('d-accent') ?? d.accent;
          break;
        case 'scroll':
          d.label = g('d-label') ?? d.label;
          d.text = g('d-text') ?? d.text;
          d.speedPct = gn('d-speedPct') ?? d.speedPct;
          d.fontSize = gn('d-fontSize') ?? d.fontSize;
          d.textColor = g('d-textColor') ?? d.textColor;
          d.scrollFont = g('d-scrollFont') ?? d.scrollFont;
          d.labelFont = g('d-labelFont') ?? d.labelFont;
          d.labelBg = g('d-labelBg') ?? d.labelBg;
          d.labelColor = g('d-labelColor') ?? d.labelColor;
          break;
        case 'break':
          d.label = g('d-label') ?? d.label;
          d.body = g('d-body') ?? d.body;
          d.labelColor = g('d-labelColor') ?? d.labelColor;
          d.blink = gb('d-blink') ?? d.blink ?? false;
          break;
        case 'media':
          d.src = g('d-src') ?? d.src;
          d.kind = g('d-kind') ?? d.kind;
          d.fullscreen = gb('d-fullscreen') ?? d.fullscreen;
          d.loop = gb('d-loop') ?? d.loop;
          d.mute = gb('d-mute') ?? d.mute;
          d.x = gn('d-x') ?? d.x;
          d.y = gn('d-y') ?? d.y;
          d.w = gn('d-w') ?? d.w;
          d.h = gn('d-h') ?? d.h;
          d.startTime = gn('d-startTime') ?? d.startTime ?? 0;
          d.playDuration = gn('d-playDuration') ?? d.playDuration ?? 0;
          break;
        case 'slide':
          d.interval = gn('d-interval') ?? d.interval;
          d.transition = g('d-transition') ?? d.transition;
          break;
        case 'comp':
          d.duration = gn('d-duration') ?? d.duration;
          break;
      }

      save();
      renderList();
      renderJSON(c);
      renderPreview(c);
    }

    // ===== 消え方セレクター =====
    function setExitMode(label, val) {
      document.querySelectorAll('input[name="exit-mode"]').forEach(r => r.closest('.exit-opt').classList.remove('active'));
      label.classList.add('active');
      saveEditor();
    }
    function setEnterMode(label, val) {
      document.querySelectorAll('input[name="enter-mode"]').forEach(r => r.closest('.exit-opt').classList.remove('active'));
      label.classList.add('active');
      saveEditor();
    }

    // ===== タグ =====
    function addTag(e) {
      if (e.key !== 'Enter') return;
      const val = e.target.value.trim();
      if (!val) return;
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      if (!c.tags.includes(val)) c.tags.push(val);
      e.target.value = '';
      save();
      renderEditor(c);
      selectItem(c.id);
    }
    function removeTag(tag) {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      c.tags = c.tags.filter(t => t !== tag);
      save();
      renderEditor(c);
    }

    // ===== スライド管理 =====
    function addSlide() {
      triggerFilePicker('slide-file-input', 'msg_select_slide');
    }
    // function addSlide() {
    //   document.getElementById('slide-file-input').click();
    // }
    function onSlideFile(input) {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      const files = [...input.files];
      if (!files.length) return;
      notify(t('notify_slides_uploading', files.length), '');
      let done = 0;
      files.forEach(file => {
        const kind = file.type.startsWith('video') ? 'video' : 'image';
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload');
        xhr.setRequestHeader('X-Filename', encodeURIComponent(file.name));
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4) return;
          if (xhr.status === 200) {
            try {
              const serverPath = JSON.parse(xhr.responseText).url;
              const fullUrl = `http://${location.hostname}:5500${serverPath}`;
              c.data.slides.push({ src: fullUrl, kind, duration: c.data.interval || 4 });
            } catch (e) { }
          }
          done++;
          if (done === files.length) { save(); renderEditor(c); notify(t('notify_slides_added', done), 'success'); }
        };
        xhr.send(file);
      });
      input.value = '';
    }
    function removeSlide(i) {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      c.data.slides.splice(i, 1);
      save(); renderEditor(c);
    }

    // ===== 複合シーン =====
    function addCompItem() {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      c.data.items.push({ type: 'telop', contentId: '' });
      save(); renderEditor(c);
    }
    function removeCompItem(i) {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      c.data.items.splice(i, 1);
      save(); renderEditor(c);
    }
    function updateCompItem(i, key, val) {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      c.data.items[i][key] = val;
    }

    // ===== コンテンツ一覧ドラッグ&ドロップ =====
    function onListDragOver(e) {
      if (dragSrcId) return; // アイテム並び替え中は無視
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      e.currentTarget.classList.add('drag-over');
    }
    function onListDragLeave(e) {
      if (!e.currentTarget.contains(e.relatedTarget))
        e.currentTarget.classList.remove('drag-over');
    }
    function onListDrop(e) {
      if (dragSrcId) return; // アイテム並び替え中は無視
      e.preventDefault();
      e.currentTarget.classList.remove('drag-over');
      const files = [...e.dataTransfer.files].filter(f =>
        f.type.startsWith('image/') || f.type.startsWith('video/')
      );
      if (!files.length) { notify(t('notify_drop_files'), 'error'); return; }

      files.forEach(file => {
        const stem = file.name.replace(/\.[^.]+$/, '');
        const kind = file.type.startsWith('video') ? 'video' : 'image';
        const c = {
          id: uid(), type: 'media', name: stem,
          tags: [], created: now(), updated: now(),
          data: { ...defaultData('media'), kind }
        };
        c.data._objectURL = URL.createObjectURL(file);
        if (kind === 'video') detectVideoDuration(c.data._objectURL, c.id);
        contents.unshift(c);
        uploadForContent(file, c);
      });
      save();
      renderList();
      if (files.length === 1) selectItem(contents[0].id);
      notify(t('notify_drop_n', files.length), '');
    }

    function uploadForContent(file, c) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/upload');
      xhr.setRequestHeader('X-Filename', encodeURIComponent(file.name));
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
          try {
            const serverPath = JSON.parse(xhr.responseText).url;
            c.data.src = `http://${location.hostname}:5500${serverPath}`;
            save();
            renderList();
            if (selectedId === c.id) renderPreview(c);
          } catch (e) { }
        }
      };
      xhr.send(file);
    }

    // ===== メディアファイル選択 =====
    function onMediaFile(input) {
      const files = [...input.files];
      if (!files.length) return;

      if (_mediaMode === 'replace' && files.length === 1 && selectedId) {
        const c = contents.find(x => x.id === selectedId);
        if (c && c.type === 'media') {
          const file = files[0];
          const kind = file.type.startsWith('video') ? 'video' : 'image';
          const objectUrl = URL.createObjectURL(file);
          c.data.kind = kind;
          c.data._objectURL = objectUrl;
          if (kind === 'video') detectVideoDuration(objectUrl, c.id);
          notify(t('notify_uploading'), '');
          uploadForContent(file, c);
          input.value = '';
          return;
        }
      }

      // 新規一括登録
      files.forEach(file => {
        const stem = file.name.replace(/\.[^.]+$/, '');
        const kind = file.type.startsWith('video') ? 'video' : 'image';
        const c = {
          id: uid(), type: 'media', name: stem,
          tags: [], created: now(), updated: now(),
          data: { ...defaultData('media'), kind }
        };
        c.data._objectURL = URL.createObjectURL(file);
        if (kind === 'video') detectVideoDuration(c.data._objectURL, c.id);
        contents.unshift(c);
        uploadForContent(file, c);
      });
      save();
      renderList();
      if (files.length === 1) selectItem(contents[0].id);
      notify(t('notify_drop_n', files.length), '');
      input.value = '';
    }

    // ===== プレビュー =====
    let previewMediaItem = null;
    let previewTextItem = null;

    function renderPreview(c) {
      if (!c) return;
      if (c.type === 'media' || c.type === 'slide') {
        previewMediaItem = c;
      } else if (c.type === 'comp') {
        // 複合シーンは特殊（個別対応または無視）
        previewMediaItem = c;
      } else {
        previewTextItem = c;
      }
      drawCompositePreview();
      
      localStorage.setItem('poncast_prevMediaId', previewMediaItem?.id || '');
      localStorage.setItem('poncast_prevTextId', previewTextItem?.id || '');
    }

    function drawCompositePreview() {
      const pi = document.getElementById('p-img');
      const pv = document.getElementById('p-vid');
      const mini = document.getElementById('p-mini');
      if (!pi || !pv || !mini) return;

      // --- Media Layer ---
      if (previewMediaItem) {
        const d = previewMediaItem.data || {};
        if (previewMediaItem.type === 'media') {
          const url = d._objectURL || d.src;
          if (url) {
            if (d.kind === 'video') {
              pv.src = url; pv.style.display = 'block';
              pi.style.display = 'none';
              // 動画の場合はポーズ状態で表示（要望: 静止画として表示）
              if (d.startTime) pv.currentTime = d.startTime;
              pv.pause();
            } else {
              pi.src = url; pi.style.display = 'block';
              pv.style.display = 'none';
            }
          } else {
            pi.style.display = 'none'; pv.style.display = 'none';
          }
        } else if (previewMediaItem.type === 'slide' && (d.slides || []).length) {
          pi.src = d.slides[0].src; pi.style.display = 'block';
          pv.style.display = 'none';
        } else if (previewMediaItem.type === 'comp') {
          // 複合シーンの場合は専用の描画ロジックがあれば使う（一旦プレースホルダ）
          pi.style.display = 'none'; pv.style.display = 'none';
        }
      } else {
        pi.style.display = 'none'; pv.style.display = 'none';
      }

      // --- Text Overlay Layer ---
      if (previewTextItem) {
        const d = previewTextItem.data || {};
        mini.innerHTML = '';
        mini.style.display = 'block';
        
        switch (previewTextItem.type) {
          case 'telop': {
            const prevEl = document.getElementById('prev-screen');
            const sc = (prevEl ? prevEl.offsetWidth : 320) / 1280;
            const posNum = typeof d.position === 'number' ? d.position : ({ left: 0, center: 10, right: 20 }[d.position] ?? 0);
            const leftPct = (posNum / 20 * 80).toFixed(1) + '%';
            const bottomPx = Math.round((d.bottomPx ?? 80) * sc);
            const nameSize = Math.max(6, Math.round((d.nameSize || 36) * sc));
            const titleSize = Math.max(5, Math.round((d.titleSize || 22) * sc));
            const accent = d.accent || '#00d4ff';
            const hasTitle = d.title && d.title.trim();
            const bLeft = Math.round(6 * sc);
            const clipN = Math.round(16 * sc);
            const clipT = Math.round(10 * sc);
            const padV = Math.round(7 * sc), padH = Math.round(22 * sc), padR = Math.round(28 * sc);

            const titleHtml = hasTitle ? `
              <div style="background:${d.titleBg || accent};color:${d.titleColor || '#000'};font-size:${titleSize}px;font-weight:600;padding:${Math.round(3 * sc)}px ${Math.round(24 * sc)}px ${Math.round(3 * sc)}px ${Math.round(22 * sc)}px;clip-path:polygon(0 0,calc(100% - ${clipT}px) 0,100% 100%,0 100%);white-space:nowrap;">
                ${esc(d.title)}
              </div>` : '';

            mini.innerHTML = `
              <div style="position:absolute;bottom:${bottomPx}px;left:0;right:0;padding-left:${leftPct};">
                <div style="display:inline-flex;flex-direction:column;align-items:flex-start;">
                  <div style="background:rgba(10,10,20,0.85);color:${d.nameColor || '#fff'};font-size:${nameSize}px;font-weight:700;padding:${padV}px ${padR}px ${padV}px ${padH}px;border-left:${bLeft}px solid ${accent};clip-path:polygon(0 0,calc(100% - ${clipN}px) 0,100% 100%,0 100%);white-space:nowrap;">
                    ${esc(d.name || '')}
                  </div>
                  ${titleHtml}
                </div>
              </div>`;
            break;
          }
          case 'scroll': {
            const sc = (document.getElementById('prev-screen')?.offsetWidth || 320) / 1280;
            const fs = Math.max(8, Math.round((d.fontSize || 24) * sc));
            mini.innerHTML = `
              <div style="position:absolute;bottom:0;left:0;right:0;height:${fs * 2}px;background:rgba(0,0,0,0.6);border-top:2px solid ${d.labelBg || '#00d4ff'};display:flex;align-items:center;padding:0 10px;">
                <div style="background:${d.labelBg || '#00d4ff'};color:${d.labelColor || '#000'};padding:2px 8px;font-weight:bold;font-size:${fs * 0.8}px;margin-right:10px;">${esc(d.label || '')}</div>
                <div style="color:${d.textColor || '#fff'};font-size:${fs}px;white-space:nowrap;overflow:hidden;">${esc(d.text || '')}</div>
              </div>`;
            break;
          }
          case 'break': {
            const sc = (document.getElementById('prev-screen')?.offsetWidth || 320) / 1280;
            const fs = Math.max(10, Math.round((d.fontSize || 48) * sc));
            mini.innerHTML = `
              <div style="height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;text-align:center;">
                <div style="background:${d.labelColor || '#00d4ff'};color:#000;padding:2px 12px;font-weight:bold;margin-bottom:10px;font-size:${fs * 0.5}px;">${esc(d.label || '')}</div>
                <div style="color:${d.textColor || '#fff'};font-size:${fs}px;font-weight:bold;line-height:1.2;">${esc(d.body || '').replace(/\n/g, '<br>')}</div>
              </div>`;
            break;
          }
        }
      } else {
        mini.style.display = 'none';
      }
    }

    // ===== ポン出し / クロスフェード切り替え =====
    function sendHide(c) {
      const d = c.data || {};
      const globalOut = (JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[`--def-${c.type}-out`] ?? 0.5);
      const exitDuration = signageMode ? 0 : (d.useCustomOut ? (d.exitDuration ?? 0.5) : globalOut);
      switch (c.type) {
        case 'telop': send('LT_HIDE', { exitDuration }); break;
        case 'scroll': send('SCROLL_HIDE', { exitDuration }); break;
        case 'break': send('BREAKING_HIDE', { exitDuration }); break;
        case 'media':
        case 'slide':
        case 'comp': send('MEDIA_HIDE', { exitDuration }); break;
      }
    }

    // テロップ系かどうか
    function isTelopType(c) {
      return ['telop', 'scroll', 'break'].includes(c.type);
    }

    // コンテンツ種別ごとのWSチャンネルを返す
    function wsChannel(c) {
      switch (c.type) {
        case 'telop': return 'LT';
        case 'scroll': return 'SCROLL';
        case 'break': return 'BREAKING';
        default: return 'MEDIA';
      }
    }

    // そのコンテンツが使うスロット上の現在再生中ID
    function getSlotId(c) {
      return isTelopType(c) ? telopId : playingId;
    }
    function setSlotId(c, id) {
      if (isTelopType(c)) telopId = id;
      else playingId = id;
    }

    function switchContent(c) {
      if (!c) return;
      const currentId = getSlotId(c);
      if (currentId === c.id) {
        // 同じコンテンツ → 完全消去
        hideContent(c);
        return;
      }
      const prev = currentId ? contents.find(x => x.id === currentId) : null;
      // 先に新コンテンツを表示
      playContent(c);
      // 同一スロット内の異チャンネル切り替え時のみ旧コンテンツをフェード
      // 同チャンネルはSHOWで上書き済みのためHIDEを送ると消えてしまう
      if (prev && wsChannel(prev) !== wsChannel(c)) {
        const nextId = c.id;
        setTimeout(() => {
          if (getSlotId(c) === nextId) sendHide(prev);
        }, 500);
      }
    }

    function ponDashi() {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      switchContent(c);
    }

    function playContent(c) {
      const d = c.data || {};
      const globalIn = (JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[`--def-${c.type}-in`] ?? 0);
      const enterDur = signageMode ? 0 : (d.useCustomIn ? (d.enterDuration ?? 0) : globalIn);
      switch (c.type) {
        case 'telop': send('LT_SHOW', { name: d.name, title: d.title, nameColor: d.nameColor || '#ffffff', nameFont: d.nameFont || 'Hiragino Sans', nameSize: d.nameSize || 36, titleBg: d.titleBg || '#00d4ff', titleColor: d.titleColor || '#000000', titleFont: d.titleFont || 'Hiragino Sans', titleSize: d.titleSize || 22, position: d.position ?? 2, bottomPx: d.bottomPx ?? 80, accent: d.accent || '#00d4ff', enterDuration: enterDur }); break;
        case 'scroll': send('SCROLL_SHOW', { label: d.label, text: d.text, speedPct: d.speedPct || 100, fontSize: d.fontSize || 24, textColor: d.textColor || '#ffffff', scrollFont: d.scrollFont || 'Hiragino Sans', labelFont: d.labelFont || 'Hiragino Sans', labelBg: d.labelBg || '#00d4ff', labelColor: d.labelColor || '#000000', enterDuration: enterDur }); break;
        case 'break': send('BREAKING_SHOW', { label: d.label, body: d.body, enterDuration: enterDur }); break;
        case 'media': {
          // Windowsのバックスラッシュを正規化し、srcが空の場合は警告
          const mediaSrc = (d.src || '').replace(/\\/g, '/');
          if (!mediaSrc) {
            notify('ファイルのアップロード完了前です。もう一度お試しください。', 'error');
            return;
          }
          send('MEDIA_SHOW', { src: mediaSrc, kind: d.kind, fullscreen: d.fullscreen, loop: d.loop, mute: d.mute, x: d.x, y: d.y, w: d.w, h: d.h, enterDuration: enterDur, startTime: d.startTime || 0, playDuration: d.playDuration || 0 });
          break;
        }
        case 'slide': playSlide(d); break;
        case 'comp': playComp(d); break;
      }
      setSlotId(c, c.id);
      renderList();
      updatePonBtn();
      notify('▶ ' + c.name, 'success');
      // カウントダウンタイマー
      document.getElementById('cd-label').textContent = c.name;
      const defOut = (JSON.parse(localStorage.getItem(THEME_KEY) || '{}')[`--def-${c.type}-out`] ?? 1.0);
      const outDur = d.useCustomOut ? (d.exitDuration ?? 0) : defOut;

      if (!isTelopType(c)) {
        if (c.type === 'media' && (d.kind || 'image') === 'video') {
          startCountdownVideo(d.startTime || 0, d.videoDuration || 0, d.playDuration || 0);
        } else if (signageMode) {
          startCountdownTimer(d.sigDuration ?? 5);
        } else {
          stopCountdown();
        }
      } else {
        // Telops: Countdown if OUT duration is > 0
        if (outDur > 0) {
          startCountdownTimer(outDur);
        } else {
          stopCountdown();
        }
      }
    }

    function hideContent(c) {
      sendHide(c);
      setSlotId(c, null);
      renderList();
      updatePonBtn();
      if (!isTelopType(c)) stopCountdown();
    }

    // ===== カウントダウンタイマー =====
    // cdTotal: カウントダウン総秒数（0のとき動画のduration待ち）
    // cdStart: Date.now() 基点
    // cdIsVideo: true のとき動画モード（prev-vidからduration取得を試みる）

    // 選択時の静的タイマー表示（カウントは開始しない）
    function showStaticCountdown(c) {
      if (!c || isTelopType(c)) { stopCountdown(); return; }
      // 再生中はライブカウントダウンを継続
      if (c.id === playingId || c.id === telopId) return;

      const d = c.data || {};
      const isVideo = c.type === 'media' && (d.kind || 'image') === 'video';

      let totalSec = 0;
      if (isVideo) {
        const dur = d.videoDuration || 0;
        totalSec = d.playDuration || (dur ? Math.max(0, dur - (d.startTime || 0)) : 0);
      } else {
        totalSec = d.sigDuration ?? 5;
      }

      const bar = document.getElementById('countdown-bar');
      const timeEl = document.getElementById('cd-time');
      const fillEl = document.getElementById('cd-fill');
      const label = document.getElementById('cd-label');
      if (!bar || !timeEl || !fillEl) return;

      stopCountdown(); // 走行中のRafを止めてリセット
      if (label) label.textContent = c.name;

      if (totalSec > 0) {
        const m = Math.floor(totalSec / 60);
        const s = Math.floor(totalSec % 60);
        timeEl.textContent = `${m}:${String(s).padStart(2, '0')}`;
        fillEl.style.width = '100%';
        fillEl.classList.remove('warning');
        bar.classList.add('active');
      } else if (isVideo) {
        // 動画でduration未取得の場合は prev-vid から取得を試みる
        const pv = document.getElementById('p-vid');
        if (pv && isFinite(pv.duration) && pv.duration > 0) {
          const t = Math.max(0, pv.duration - (d.startTime || 0));
          const m = Math.floor(t / 60), s = Math.floor(t % 60);
          timeEl.textContent = `${m}:${String(s).padStart(2, '0')}`;
          fillEl.style.width = '100%'; fillEl.classList.remove('warning');
          bar.classList.add('active');
        } else {
          timeEl.textContent = '--:--';
          fillEl.style.width = '100%';
          bar.classList.add('active');
        }
      } else {
        bar.classList.remove('active');
      }
    }

    function startCountdownTimer(totalSec) {
      stopCountdown();
      if (!totalSec || totalSec <= 0) return;
      cdIsVideo = false;
      cdTotal = totalSec;
      cdStart = Date.now();
      document.getElementById('countdown-bar').classList.add('active');
      tickCountdown();
    }

    let cdPlayDur = 0;
    function startCountdownVideo(startTimeSec, knownDuration, playDur) {
      stopCountdown();
      cdIsVideo = true;
      cdPlayDur = playDur || 0;
      cdStartTime = startTimeSec || 0;
      if (cdPlayDur > 0) cdTotal = cdPlayDur;
      else cdTotal = knownDuration ? Math.max(1, knownDuration - cdStartTime) : 0;
      cdStart = Date.now();
      document.getElementById('countdown-bar').classList.add('active');
      tickCountdown();
    }

    function stopCountdown() {
      if (cdRaf) cancelAnimationFrame(cdRaf);
      cdRaf = null;
      cdIsVideo = false;
      document.getElementById('countdown-bar')?.classList.remove('active');
      // Clear all list timers
      document.querySelectorAll('.c-remaining').forEach(el => el.textContent = '');
    }

    function tickCountdown() {
      const timeEl = document.getElementById('cd-time');
      const fillEl = document.getElementById('cd-fill');
      if (!timeEl || !fillEl) return;

      // 動画でduration未取得の場合 → prev-vidから取得を試みる
      if (cdIsVideo && cdTotal <= 0) {
        const vid = document.getElementById('p-vid');
        if (vid && isFinite(vid.duration) && vid.duration > 0) {
          cdTotal = cdPlayDur > 0 ? cdPlayDur : Math.max(1, vid.duration - cdStartTime);
          cdStart = Date.now(); // 取得できた時点でリセット
        } else {
          cdRaf = requestAnimationFrame(tickCountdown);
          return;
        }
      }

      const elapsed = (Date.now() - cdStart) / 1000;
      const total = cdTotal;
      const remaining = Math.max(0, total - elapsed);
      const pct = total > 0 ? (remaining / total) * 100 : 0;
      const m = Math.floor(remaining / 60);
      const s = Math.floor(remaining % 60);

      const timeStr = `${m}:${String(s).padStart(2, '0')}`;
      timeEl.textContent = timeStr;
      
      // Update list timers (both slots if active)
      [playingId, telopId].forEach(id => {
        if (!id) return;
        const listRem = document.getElementById(`rem-${id}`);
        if (listRem) {
          listRem.textContent = timeStr;
          listRem.style.color = 'var(--grn)';
        }
      });

      fillEl.style.width = pct + '%';
      fillEl.classList.toggle('warning', pct < 20);

      if (remaining <= 0) {
        timeEl.textContent = '0:00';
        [playingId, telopId].forEach(id => {
          const el = id ? document.getElementById(`rem-${id}`) : null;
          if (el) el.textContent = '';
        });
        fillEl.style.width = '0%';
        return; // RAFループ終了
      }
      cdRaf = requestAnimationFrame(tickCountdown);
    }

    function updatePonBtn() {
      const btn = document.getElementById('pon-btn');
      if (!btn) return;
      const isPlaying = (playingId && playingId === selectedId) || (telopId && telopId === selectedId);
      btn.disabled = !selectedId;
      if (isPlaying) {
        btn.textContent = '■ STOP';
        btn.style.background = 'var(--red)';
        btn.style.color = '#fff';
      } else {
        btn.textContent = '▶ PLAY';
        btn.style.background = '';
        btn.style.color = '';
      }
      updateFsPonBtn();
    }

    // ===== 全画面プレーヤー =====
    function openFullscreen() {
      const c = selectedId ? contents.find(x => x.id === selectedId) : null;
      if (!c) return;
      const d = c.data || {};
      const img = document.getElementById('fs-img');
      const vid = document.getElementById('fs-vid');
      const ph = document.getElementById('fs-placeholder');
      img.style.display = 'none';
      vid.pause(); vid.src = ''; vid.style.display = 'none';
      ph.style.display = 'none';

      if (c.type === 'media') {
        const url = d._objectURL || d.src || '';
        if (d.kind === 'video' && url) {
          vid.src = url;
          vid.style.display = 'block';
          if (d.startTime) {
            vid.currentTime = d.startTime;
            vid.onseeked = () => { vid.onseeked = null; vid.play().catch(() => { }); };
          } else {
            vid.play().catch(() => { });
          }
        } else if (url) {
          img.src = url;
          img.style.display = 'block';
        } else {
          ph.textContent = '(画像なし)';
          ph.style.display = 'block';
        }
      } else {
        ph.textContent = c.name;
        ph.style.display = 'block';
      }
      const fso = document.getElementById('fs-overlay');
      fso.classList.add('open');
      requestAnimationFrame(() => fso.focus()); // フォーカスを overlay に移してキー入力を確保
      document.body.classList.add('fs-open');
      document.getElementById('p-vid')?.pause();
      startFsClock();
    }

    function closeFullscreen() {
      const vid = document.getElementById('fs-vid');
      vid.pause(); vid.src = '';
      document.getElementById('fs-overlay').classList.remove('open');
      document.body.classList.remove('fs-open');
      stopFsClock();
    }

    // ===== コンテンツ一覧 時間表示（RAF ループ） =====
    let _listRemRaf = null;
    let _listRemPrev = { activeId: null, selId: null }; // 前回状態キャッシュ

    function fmtSec(sec) {
      const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
      return `${m}:${String(s).padStart(2, '0')}`;
    }

    function startListRemaining() {
      if (_listRemRaf) return;
      function tick() {
        const activeId = playingId || telopId;
        const selId = selectedId;
        const prev = _listRemPrev;

        // アクティブが変わったら前の表示をクリア
        if (prev.activeId && prev.activeId !== activeId) {
          const old = document.getElementById('rem-' + prev.activeId);
          if (old) { old.textContent = ''; old.style.color = ''; }
        }
        // 選択が変わったら前の選択表示をクリア
        if (prev.selId && prev.selId !== selId && prev.selId !== activeId) {
          const old = document.getElementById('rem-' + prev.selId);
          if (old) { old.textContent = ''; old.style.color = ''; }
        }
        _listRemPrev = { activeId, selId };

        // ① 再生中アイテム
        if (activeId) {
          const el = document.getElementById('rem-' + activeId);
          if (el && cdTotal > 0 && cdStart > 0) {
            const rawElapsed = (Date.now() - cdStart) / 1000;
            const remaining = Math.max(0, cdTotal - rawElapsed);
            // 残り時間 / 全体 で表示
            el.textContent = `${fmtSec(remaining)} / ${fmtSec(cdTotal)}`;
            el.style.color = '#fff';
          } else if (el) {
            el.textContent = ''; el.style.color = '';
          }
        }

        // ② フォーカス中（未再生）アイテム
        if (selId && selId !== activeId) {
          const el = document.getElementById('rem-' + selId);
          const c = contents.find(x => x.id === selId);
          if (el && c && !isTelopType(c)) {
            const d = c.data || {};
            const isVid = c.type === 'media' && (d.kind || 'image') === 'video';
            let dur = 0;
            if (isVid) {
              const pv = document.getElementById('p-vid');
              if (d.playDuration > 0) dur = d.playDuration;
              else dur = d.videoDuration
                ? Math.max(0, d.videoDuration - (d.startTime || 0))
                : (pv && isFinite(pv.duration) ? Math.max(0, pv.duration - (d.startTime || 0)) : 0);
            } else {
              dur = d.sigDuration ?? 5;
            }
            if (dur > 0) {
              el.textContent = fmtSec(dur);
              el.style.color = '#fff';
            } else {
              el.textContent = ''; el.style.color = '';
            }
          } else if (el) {
            el.textContent = ''; el.style.color = '';
          }
        }

        _listRemRaf = requestAnimationFrame(tick);
      }
      tick();
    }

    // ===== 全画面 動画時間表示 =====
    let _fsClockRaf = null;
    function fmtTime(sec) {
      if (!isFinite(sec) || sec < 0) return '--:--';
      const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
      return `${m}:${String(s).padStart(2, '0')}`;
    }
    function startFsClock() {
      stopFsClock();
      function tick() {
        const el = document.getElementById('fs-clock');
        const vid = document.getElementById('fs-vid');
        if (!el) return;
        if (vid && vid.style.display !== 'none' && vid.readyState >= 1) {
          const cur = vid.currentTime || 0;
          const tot = isFinite(vid.duration) ? vid.duration : 0;
          if (tot > 0) {
            el.textContent = `${fmtTime(cur)} / ${fmtTime(tot)}`;
            el.classList.add('visible');
          } else {
            el.classList.remove('visible');
          }
        } else {
          el.classList.remove('visible');
        }
        _fsClockRaf = requestAnimationFrame(tick);
      }
      tick();
    }
    function stopFsClock() {
      if (_fsClockRaf) cancelAnimationFrame(_fsClockRaf);
      _fsClockRaf = null;
      const el = document.getElementById('fs-clock');
      if (el) el.classList.remove('visible');
    }

    function updateFsPonBtn() {
      const btn = document.getElementById('fs-pon-btn');
      if (!btn) return;
      btn.disabled = !selectedId;
      const isPlaying = (playingId && playingId === selectedId) || (telopId && telopId === selectedId);
      if (isPlaying) {
        btn.textContent = '■ STOP'; btn.style.background = 'var(--red)'; btn.style.color = '#fff';
      } else {
        btn.textContent = '▶ PLAY'; btn.style.background = 'var(--acc)'; btn.style.color = '#000';
      }
    }

    function send(type, payload) {
      if (ws && ws.readyState === 1) ws.send(JSON.stringify({ type, payload }));
    }

    function playSlide(d) {
      if (!d.slides || d.slides.length === 0) return;
      let i = 0;
      const next = () => {
        const s = d.slides[i];
        send('MEDIA_SHOW', { src: s.src, kind: s.kind || 'image', fullscreen: true, loop: false, mute: true });
        i++;
        if (i < d.slides.length) setTimeout(next, (s.duration || d.interval || 4) * 1000);
        else setTimeout(() => send('MEDIA_HIDE', {}), (s.duration || d.interval || 4) * 1000);
      };
      next();
    }

    function playComp(d) {
      (d.items || []).forEach(item => {
        const ref = contents.find(x => x.id === item.contentId || x.type === item.type);
        if (ref) {
          const tmp = contents.find(x => x.id === selectedId);
          const prevId = selectedId;
          selectedId = ref.id;
          ponDashi();
          selectedId = prevId;
        }
      });
    }

    // ===== JSON表示 =====
    function renderJSON(c) {
      document.getElementById('json-pre').textContent = JSON.stringify(c, null, 2);
    }
    function refreshAllJSON() {
      document.getElementById('all-json-text').value = JSON.stringify(contents, null, 2);
    }
    function applyAllJSON() {
      try {
        const parsed = JSON.parse(document.getElementById('all-json-text').value);
        contents = parsed;
        save();
        renderList();
        notify(t('notify_json_applied'), 'success');
      } catch (e) {
        notify(t('notify_json_error') + e.message, 'error');
      }
    }
    function copyJSON() {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      navigator.clipboard.writeText(JSON.stringify(c, null, 2)).then(() => notify(t('notify_copy'), 'success'));
    }
    function downloadOneJSON() {
      const c = contents.find(x => x.id === selectedId);
      if (!c) return;
      dl(JSON.stringify(c, null, 2), c.name.replace(/\s/g, '_') + '.json');
    }

    // ===== インポート / エクスポート =====
    function exportJSON() {
      const name = (scenes.find(s => s.id === activeSceneId)?.name || 'scene').replace(/\s/g, '_');
      dl(JSON.stringify(contents, null, 2), 'PonCast_' + name + '_' + Date.now() + '.json');
      notify(t('notify_exported'), 'success');
    }
    function importJSON() { triggerFilePicker('json-file-input', 'msg_select_json'); }
    function loadJSONFile(input) {
      const file = input.files[0]; if (!file) return;
      const r = new FileReader();
      r.onload = e => {
        try {
          const parsed = JSON.parse(e.target.result);
          const arr = Array.isArray(parsed) ? parsed : [parsed];
          contents = [...arr, ...contents];
          save();
          fixStaleObjectURLs();
          renderList();
          if (selectedId) {
            const c = contents.find(x => x.id === selectedId);
            if (c) { renderEditor(c); renderPreview(c); renderJSON(c); }
          }
          notify(t('notify_load_n', arr.length), 'success');
        } catch (err) {
          notify(t('notify_load_error') + err.message, 'error');
        }
      };
      r.readAsText(file);
      input.value = '';
    }

    function dl(text, filename) {
      const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
      const a = document.createElement('a');
      a.href = url; a.download = filename; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // ===== 複製・削除 =====
    function duplicateItem(e, id) {
      if (e) e.stopPropagation();
      const c = contents.find(x => x.id === id);
      if (!c) return;
      const dup = JSON.parse(JSON.stringify(c));
      dup.id = uid(); dup.name += t('msg_copy_suffix'); dup.created = dup.updated = now();
      contents.unshift(dup);
      save(); renderList();
      selectItem(dup.id);
      notify(t('notify_duplicated'), 'success');
    }
    function askDelete(e, id) {
      if (e) e.stopPropagation();
      deleteTargetId = id;
      deleteMode = 'item';
      document.getElementById('del-modal-title').textContent = t('modal_del_title');
      if (document.activeElement) document.activeElement.blur();
      document.getElementById('del-modal').classList.add('open');
    }

    function confirmDelete() {
      try {
        if (deleteMode === 'scene') {
          actualDeleteScene(deleteTargetId);
          return;
        }

        const resetEditor = () => {
          // プレビューのクリア
          const pi = document.getElementById('p-img');
          if (pi) { pi.src = ''; pi.style.display = 'none'; }
          const pv = document.getElementById('p-vid');
          if (pv) { pv.src = ''; pv.style.display = 'none'; pv.pause(); }
          
          const pmini = document.getElementById('p-mini');
          if (pmini) pmini.style.display = 'none';
          
          previewMediaItem = null;
          previewTextItem = null;
          drawCompositePreview();
          closeFullscreen();

          selectedId = null;
          selectedIds.clear();
          anchorId = null;
          const eb = document.getElementById('editor-body');
          if (eb) eb.innerHTML = `<div class="empty-editor"><div class="big-icon">✦</div><p data-i18n-html="msg_select_content">${t('msg_select_content')}</p></div>`;
          const pb = document.getElementById('pon-btn');
          if (pb) pb.disabled = true;

          if (playingId && deleteTargetId === null) playingId = null;
          if (telopId && deleteTargetId === null) telopId = null;
        };

        const target = deleteTargetId ? contents.find(x => x.id === deleteTargetId) : null;
        if (target) {
          // 単件削除
          if (playingId === deleteTargetId || telopId === deleteTargetId) {
            sendHide(target);
            if (playingId === deleteTargetId) playingId = null;
            if (telopId === deleteTargetId) telopId = null;
          }
          addToPendingDeletion(target);
          revokeObjectURL(target.data?._objectURL);
          (target.data?.slides || []).forEach(s => revokeObjectURL(s._objectURL));
          contents = contents.filter(x => x.id !== deleteTargetId);
          if (selectedId === deleteTargetId) resetEditor();
          selectedIds.delete(deleteTargetId);
          notify(t('notify_deleted'));
        } else if (!deleteTargetId && selectedIds.size > 0) {
          // 複数削除
          const toDelete = new Set(selectedIds);
          const count = toDelete.size;
          contents.forEach(c => {
            if (toDelete.has(c.id)) {
              if (c.id === playingId || c.id === telopId) {
                sendHide(c);
                if (c.id === playingId) playingId = null;
                if (c.id === telopId) telopId = null;
              }
              addToPendingDeletion(c);
              revokeObjectURL(c.data?._objectURL);
              (c.data?.slides || []).forEach(s => revokeObjectURL(s._objectURL));
            }
          });
          contents = contents.filter(x => !toDelete.has(x.id));
          if (toDelete.has(selectedId)) resetEditor();
          notify(t('notify_deleted_n', count));
        }
      } catch (e) {
        console.error('Error in confirmDelete:', e);
        notify('削除中にエラーが発生しました', 'error');
      } finally {
        deleteTargetId = null;
        deleteMode = 'item';
        save(); renderList(); updateBulkBar(); closeModal('del-modal');
      }
    }

    const addToPendingDeletion = (c) => {
      if (c.type === 'media' && c.data?.src) {
        try {
          const pending = JSON.parse(localStorage.getItem('poncast_pending_deletion') || '[]');
          pending.push({ id: c.id, name: c.name, src: c.data.src, deletedAt: Date.now() });
          localStorage.setItem('poncast_pending_deletion', JSON.stringify(pending));

          const filename = c.data.src.split('/').pop();
          if (filename) {
            fetch('/trash', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ filename })
            }).then(res => {
              if (res.ok) {
                console.log('Moved to trash:', filename);
                notify(t('notify_moved_to_trash', filename), 'success');
              } else {
                notify(t('notify_trash_failed', filename), 'error');
              }
            }).catch(e => {
              console.error('Trash error:', e);
              notify(t('notify_trash_error'), 'error');
            });
          }
        } catch (e) { console.error('addToPendingDeletion fail:', e); }
      }
    };

    // ===== モーダル =====
    function closeModal(id) { document.getElementById(id).classList.remove('open'); }

    // ===== タブ =====
    function switchRTab(tab) {
      document.querySelectorAll('.r-tab').forEach((t, i) => {
        t.classList.toggle('active', ['preview', 'json', 'all'][i] === tab);
      });
      document.querySelectorAll('.r-pane').forEach(p => p.classList.remove('active'));
      document.getElementById('pane-' + tab).classList.add('active');
      if (tab === 'all') refreshAllJSON();
    }

    // ===== WebSocket (ポン出し用) =====
    let ws;
    let _wsReconnectTimer = null;
    function connectWS() {
      const targetHost = location.hostname || 'localhost';
      const wsUrl = `ws://${targetHost}:5501`;
      console.log(`[WS] Attempting connection to: ${wsUrl} (hostname: "${location.hostname}", proto: "${location.protocol}")`);
      
      ws = new WebSocket(wsUrl);
      ws.onmessage = (e) => {
        try {
          const { type, payload } = JSON.parse(e.data);
          if (type === 'CLIENT_COUNT') {
            const el = document.getElementById('ws-count');
            if (el) {
              el.textContent = payload.count > 1 ? `(${payload.count} terminals)` : '';
            }
          } else if (type === 'VIDEO_ENDED') {
            // MIX モード中なら次へ進む
            if (signageMode) signageNext();
          }
        } catch (err) { }
      };
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
        console.error(`[WS] Error connecting to ${wsUrl}:`, err);
        // If localhost failed, try 127.0.0.1 as a last resort
        if (targetHost === 'localhost') {
           console.log('[WS] localhost failed, retrying with 127.0.0.1...');
           setTimeout(() => {
             ws = new WebSocket('ws://127.0.0.1:5501');
             ws.onopen = () => { console.log('[WS] Connected to 127.0.0.1'); updateWsBadge(true); };
           }, 1000);
        }
        ws.close();
      };
    }

    function updateWsBadge(connected) {
      const b = document.getElementById('ws-badge');
      if (b) {
        b.textContent = connected ? t('connected') : t('status_standby');
        b.style.color = connected ? 'var(--grn)' : 'var(--txt3)';
      }
    }

    function send(type, payload) {
      if (ws && ws.readyState === 1) ws.send(JSON.stringify({ type, payload }));
    }

    function init() {
      console.log('[INIT] Starting initialization...');
      connectWS();
      initScenes();
      loadTheme();

      const rawFilterCat = localStorage.getItem('poncast_filterCat') || 'all';
      filterCatVal = rawFilterCat;

      // 1. まずコンテンツをロード
      const key = getSceneContentsKey(activeSceneId);
      const raw = localStorage.getItem(key);
      if (raw) {
        try { contents = JSON.parse(raw); } catch (e) { contents = []; }
      } else {
        contents = [];
      }
      
      // 2. その後でUIを描画・選択
      const editorBody = document.getElementById('editor-body');
      if (editorBody) {
        // オートセーブ: エディター内の値が変更されたら保存
        editorBody.addEventListener('change', (e) => {
          if (e.target.closest('.e-section')) saveEditor();
        });
      }

      fixStaleObjectURLs();
      renderSceneTabs();
      filterCat(filterCatVal);
      refreshAllJSON();
      
      const rawSelectedId = localStorage.getItem('poncast_selectedId');
      if (rawSelectedId) {
        selectItem(rawSelectedId);
        setTimeout(scrollToSelected, 150);
      }

      // プレビュー状態の復元
      const prevMediaId = localStorage.getItem('poncast_prevMediaId');
      const prevTextId = localStorage.getItem('poncast_prevTextId');
      if (prevMediaId) previewMediaItem = contents.find(c => c.id === prevMediaId);
      if (prevTextId) previewTextItem = contents.find(c => c.id === prevTextId);
      if (previewMediaItem || previewTextItem) drawCompositePreview();

      // ゴミ箱（保留中の削除）のチェック
      const pendingStr = localStorage.getItem('poncast_pending_deletion');
      if (pendingStr) {
        try {
          const pending = JSON.parse(pendingStr);
          if (pending.length > 0) {
            notify(`${pending.length}件のファイルが削除待ちです。ゴミ箱へ移動してください。`, 'info');
          }
        } catch(e) {}
      }

      // startListRemaining(); // Disable conflicting legacy timer
      // Start clock
      setInterval(() => {
        const el = document.getElementById('fs-clock');
        if (el) el.textContent = new Date().toLocaleTimeString('ja-JP');
      }, 1000);

      g_initialized = true;
    }

    init();
