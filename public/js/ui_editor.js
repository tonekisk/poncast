import { t, I18N } from './i18n.js';
import { esc, formatSeconds } from './utils.js';

export function getEditorHtml(c, currentLang) {
  const d = c.data || {};
  let html = '';
  
  const typeLabel = (typ) => t('type_label_' + typ) || typ;

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
          </div>
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
              <div style="padding:6px 0;color:var(--txt2);font-size:12px">${d.videoDuration ? formatSeconds(d.videoDuration, currentLang) : '—'}</div>
            </div>
          </div>` : ''}
          <div class="e-row4">
            <div class="e-field"><label class="e-label">X</label><input class="e-input" type="number" id="d-x" value="${d.x || 0}"></div>
            <div class="e-field"><label class="e-label">Y</label><input class="e-input" type="number" id="d-y" value="${d.y || 0}"></div>
            <div class="e-field"><label class="e-label">${t('lbl_width')}</label><input class="e-input" type="number" id="d-w" value="${d.w || 960}"></div>
            <div class="e-field"><label class="e-label">${t('lbl_height')}</label><input class="e-input" type="number" id="d-h" value="${d.h || 540}"></div>
          </div>
          <div class="e-field" style="margin-top:8px">
            <button class="tb-btn media-replace-btn" style="width:100%;padding:10px">📁 ${t('btn_select_file')}</button>
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
                  <button class="slide-del" data-index="${i}">×</button>
                </div>`).join('')}
            </div>
            <button class="add-slide-btn" style="margin-top:6px">＋ ${t('btn_add_slide')}</button>
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
                  <select class="e-select comp-item-type" style="flex:1" data-index="${i}">
                    ${['telop', 'scroll', 'break', 'media'].map(t => `<option value="${t}" ${item.type === t ? 'selected' : ''}>${typeLabel(t)}</option>`).join('')}
                  </select>
                  <input class="e-input comp-item-id" style="flex:2" type="text" placeholder="${t('placeholder_content_id')}" value="${esc(item.contentId || '')}" data-index="${i}">
                  <button class="slide-del comp-item-del" data-index="${i}">×</button>
                </div>`).join('')}
            </div>
            <button class="add-slide-btn comp-item-add">＋ ${t('btn_add_element')}</button>
          </div>
        </div>
      </div>`;
      break;
  }
  return html;
}
