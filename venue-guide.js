(() => {
  const MANIFEST_URL = './data/research/venues/index.json';
  const READY = new Set(['RESEARCHED', 'VERIFIED']);
  let manifest = null;
  let overlay = null;

  const esc = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const normalize = (v='') => String(v).toLowerCase().replace(/\s+/g,'').replace(/[・･→()（）/／\-–—「」『』:：]/g,'');
  const maps = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  function ensureOverlay() {
    if (overlay) return overlay;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="venue-guide-overlay" id="venueGuideOverlay" aria-hidden="true">
        <section class="venue-guide-sheet" role="dialog" aria-modal="true" aria-labelledby="venueGuideTitle">
          <header class="venue-guide-head">
            <button class="venue-guide-back" id="venueGuideBack" type="button">← 戻る</button>
            <span class="venue-guide-status" id="venueGuideStatus"></span>
          </header>
          <div class="venue-guide-body" id="venueGuideBody"></div>
        </section>
      </div>`);
    overlay = document.getElementById('venueGuideOverlay');
    document.getElementById('venueGuideBack').addEventListener('click', closeGuide);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeGuide(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeGuide(); });
    return overlay;
  }

  function statusLabel(status) {
    return ({NOT_STARTED:'調査待ち',IN_PROGRESS:'調査中',RESEARCHED:'調査済み',NEEDS_UPDATE:'再確認が必要',VERIFIED:'直前確認済み'})[status] || status || 'UNKNOWN';
  }

  function findEntry(name) {
    if (!manifest || !name) return null;
    const n = normalize(name);
    if (!n) return null;
    const exact = manifest.venues.find(v => [v.name, ...(v.aliases || [])].some(a => normalize(a) === n));
    if (exact) return exact;

    const hits = [];
    manifest.venues.forEach(v => {
      [v.name, ...(v.aliases || [])].forEach(a => {
        const x = normalize(a);
        if (x.length >= 2 && (n.includes(x) || x.includes(n))) hits.push({entry:v, score:x.length});
      });
    });
    hits.sort((a,b) => b.score - a.score);
    return hits[0]?.entry || null;
  }

  function ensureActions(card) {
    let actions = card.querySelector('.actions');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'actions';
      card.appendChild(actions);
    }
    return actions;
  }

  function makeTitleInteractive(node, entry) {
    if (!node || node.dataset.guideTitleDecorated === '1') return;
    const label = node.textContent.trim();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `venue-title-link ${READY.has(entry.status) ? 'is-ready' : 'is-pending'}`;
    button.textContent = label;
    button.setAttribute('aria-label', `${entry.name}の施設情報を見る`);
    button.title = READY.has(entry.status) ? '施設情報・攻略ガイドを見る' : '調査状況を見る';
    button.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      openGuide(entry);
    });
    node.textContent = '';
    node.appendChild(button);
    node.dataset.guideTitleDecorated = '1';
  }

  function decorateFacilityNames() {
    if (!manifest) return;
    document.querySelectorAll('.spot-card h3, .mini-card h3, .event-card h4, .route-step b').forEach(node => {
      if (node.dataset.guideTitleDecorated === '1') return;
      const entry = findEntry(node.textContent.trim());
      if (entry) makeTitleInteractive(node, entry);
    });
  }

  function decorateCards() {
    if (!manifest) return;
    document.querySelectorAll('.spot-card, .mini-card').forEach(card => {
      if (card.dataset.guideDecorated === '1') return;
      const title = card.querySelector('h3')?.textContent?.trim();
      if (!title) return;
      const entry = findEntry(title);
      if (!entry) return;
      const actions = ensureActions(card);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `action guide-action ${READY.has(entry.status) ? 'is-ready' : 'is-pending'}`;
      button.textContent = READY.has(entry.status) ? '施設情報・攻略' : '施設情報・調査待ち';
      button.addEventListener('click', () => openGuide(entry));
      actions.appendChild(button);
      card.dataset.guideDecorated = '1';
    });
    decorateFacilityNames();
  }

  function renderPending(entry, message='この施設はResearch Workerによる調査待ちです。') {
    document.getElementById('venueGuideStatus').textContent = statusLabel(entry.status);
    document.getElementById('venueGuideBody').innerHTML = `
      <div class="guide-pending">
        <span class="guide-pending-badge">${esc(statusLabel(entry.status))}</span>
        <h2 id="venueGuideTitle">${esc(entry.name)}</h2>
        <p>${esc(message)} 調査が完了すると、所要時間・効率的な回り方・混雑攻略・注意点・CUT RULE・情報源をここで確認できます。</p>
      </div>`;
  }

  function renderBasic(info={}) {
    const rows = [
      ['住所', info.address], ['営業時間', info.hours], ['最終入場', info.lastEntry], ['休館・定休', info.closure],
      ['料金', info.price], ['予約', info.reservation], ['当日券', info.sameDayTicket], ['支払い', info.payment],
      ['最寄駅', info.nearestStation], ['駅から', info.stationWalk]
    ].filter(([,v]) => v);
    if (!rows.length) return '';
    return `<section class="guide-section"><h3>基本情報</h3><dl class="guide-basic-grid">${rows.map(([k,v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></section>`;
  }

  function renderDurations(items=[]) {
    if (!items.length) return '';
    return `<section class="guide-section"><h3>所要時間</h3><div class="guide-table-wrap"><table class="guide-table"><thead><tr><th>回り方</th><th>目安</th><th>できること</th><th>根拠</th></tr></thead><tbody>${items.map(x => `<tr><td><strong>${esc(x.label)}</strong></td><td>${esc(x.duration)}</td><td>${esc(x.canDo)}</td><td>${esc(x.basis)}</td></tr>`).join('')}</tbody></table></div></section>`;
  }

  function renderTips(items=[]) {
    if (!items.length) return '';
    return `<section class="guide-section"><h3>効率的に回る${items.length}つのコツ</h3><div class="guide-tips">${items.map(x => `<div class="guide-tip"><div><strong>${esc(x.title)}</strong><p>${esc(x.detail)}</p></div></div>`).join('')}</div></section>`;
  }

  function renderRoute(items=[]) {
    if (!items.length) return '';
    return `<section class="guide-section"><h3>おすすめの回り方</h3><div class="guide-route">${items.map(x => `<div class="guide-route-step"><span class="guide-route-no">${esc(String(x.step).padStart(2,'0'))}</span><div><strong>${esc(x.label)}</strong>${x.detail ? `<p>${esc(x.detail)}</p>` : ''}</div></div>`).join('')}</div></section>`;
  }

  function renderList(title, items=[]) {
    if (!items.length) return '';
    return `<section class="guide-section"><h3>${esc(title)}</h3><ul class="guide-list">${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>`;
  }

  function renderCrowd(crowd) {
    if (!crowd || (!crowd.summary && !crowd.periods?.length)) return '';
    const periods = crowd.periods?.length ? `<div class="guide-table-wrap" style="margin-top:10px"><table class="guide-table"><thead><tr><th>時間帯</th><th>混雑</th><th>メモ</th></tr></thead><tbody>${crowd.periods.map(x => `<tr><td>${esc(x.period)}</td><td>${esc(x.level)}</td><td>${esc(x.note)}</td></tr>`).join('')}</tbody></table></div>` : '';
    return `<section class="guide-section"><h3>混雑攻略</h3>${crowd.summary ? `<p>${esc(crowd.summary)}</p>` : ''}${periods}</section>`;
  }

  function renderCuts(items=[]) {
    if (!items.length) return '';
    return `<section class="guide-section"><h3>CUT RULE</h3><div class="guide-cut-grid">${items.map(x => `<div class="guide-cut"><strong>${esc(x.delay)}</strong><p>${esc(x.action)}</p></div>`).join('')}</div></section>`;
  }

  function renderSources(items=[]) {
    if (!items.length) return '';
    return `<section class="guide-section"><h3>情報源</h3><div class="guide-sources">${items.map(x => `<a class="guide-source" target="_blank" rel="noopener" href="${esc(x.url)}"><strong>${esc(x.title)}</strong><span>${esc(x.type)} · accessed ${esc(x.accessed || '')}${x.updated ? ` · updated ${esc(x.updated)}` : ''}</span></a>`).join('')}</div></section>`;
  }

  function renderGuide(data, entry) {
    const r = data.tripRecommendation || {};
    const info = data.basicInfo || {};
    const actionLinks = [
      info.mapQuery ? `<a target="_blank" rel="noopener" href="${maps(info.mapQuery)}">地図</a>` : '',
      info.officialUrl ? `<a target="_blank" rel="noopener" href="${esc(info.officialUrl)}">公式サイト ↗</a>` : ''
    ].filter(Boolean).join('');
    document.getElementById('venueGuideStatus').textContent = `${statusLabel(data.status)}${data.lastResearched ? ` · ${data.lastResearched}` : ''}`;
    document.getElementById('venueGuideBody').innerHTML = `
      <section class="guide-hero">
        <p class="guide-kicker">VENUE GUIDE · ${esc(data.confidence || 'UNKNOWN')} CONFIDENCE</p>
        <h2 id="venueGuideTitle">${esc(data.name || entry.name)}</h2>
        <p>${esc(data.summary || '')}</p>
        <div class="guide-stat-grid">
          <div class="guide-stat"><small>推奨滞在</small><strong>${esc(r.recommendedDuration || '未設定')}</strong></div>
          <div class="guide-stat"><small>到着目標</small><strong>${esc(r.recommendedArrival || '未設定')}</strong></div>
          <div class="guide-stat"><small>退出期限</small><strong>${esc(r.latestDeparture || '未設定')}</strong></div>
          <div class="guide-stat"><small>1人予算</small><strong>${esc(r.budgetPerPerson || '未設定')}</strong></div>
        </div>
        ${actionLinks ? `<div class="guide-actions">${actionLinks}</div>` : ''}
      </section>
      ${renderBasic(info)}
      ${renderDurations(data.durationProfiles)}
      ${renderRoute(data.recommendedRoute)}
      ${renderTips(data.tips)}
      ${renderCrowd(data.crowd)}
      ${renderList('3人旅行での注意', data.partyOfThree)}
      ${renderCuts(data.cutRules)}
      ${renderList('行く前に準備するもの', data.prep)}
      ${renderList('当日直前に確認するもの', data.dayOfChecks)}
      ${renderSources(data.sources)}
    `;
  }

  function safeHref(url='') {
    try {
      const u = new URL(url, location.href);
      return ['http:','https:'].includes(u.protocol) ? u.href : '#';
    } catch { return '#'; }
  }

  function inlineMd(input='') {
    const links = [];
    let source = String(input).replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_, label, url) => {
      const key = `@@LINK${links.length}@@`;
      links.push({key,label,url});
      return key;
    });
    let out = esc(source);
    out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    links.forEach(({key,label,url}) => {
      out = out.replace(key, `<a target="_blank" rel="noopener" href="${esc(safeHref(url))}">${esc(label)}</a>`);
    });
    return out;
  }

  function splitTableRow(line='') {
    return line.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(x => x.trim());
  }

  function isTableDivider(line='') {
    const cells = splitTableRow(line);
    return cells.length > 0 && cells.every(x => /^:?-{3,}:?$/.test(x));
  }

  function extractMdMeta(md, entry) {
    const lines = md.split(/\r?\n/);
    const title = lines.find(l => /^#\s+/.test(l))?.replace(/^#\s+/,'').trim() || entry.name;
    const last = md.match(/^Last researched:\s*(.+)$/mi)?.[1]?.trim() || '';
    const status = md.match(/^Status:\s*(.+)$/mi)?.[1]?.trim() || entry.status;
    const confidence = md.match(/^Confidence:\s*(.+)$/mi)?.[1]?.trim() || '';
    return {title,last,status,confidence};
  }

  function markdownToHtml(md) {
    let lines = md.replace(/\r/g,'').split('\n');
    const firstSection = lines.findIndex(l => /^##\s+/.test(l));
    if (firstSection >= 0) lines = lines.slice(firstSection);

    let html = '';
    let i = 0;
    let sectionOpen = false;
    const closeSection = () => {
      if (sectionOpen) { html += '</section>'; sectionOpen = false; }
    };

    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }

      const h2 = line.match(/^##\s+(.+)/);
      if (h2) {
        closeSection();
        html += `<section class="guide-section guide-md-section"><h3>${inlineMd(h2[1])}</h3>`;
        sectionOpen = true;
        i++;
        continue;
      }
      const h3 = line.match(/^###\s+(.+)/);
      if (h3) { html += `<h4>${inlineMd(h3[1])}</h4>`; i++; continue; }
      const h4 = line.match(/^####\s+(.+)/);
      if (h4) { html += `<h5>${inlineMd(h4[1])}</h5>`; i++; continue; }

      if (/^```/.test(line)) {
        const code = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
        if (i < lines.length) i++;
        html += `<pre class="guide-md-code"><code>${esc(code.join('\n'))}</code></pre>`;
        continue;
      }

      if (line.includes('|') && i + 1 < lines.length && isTableDivider(lines[i+1])) {
        const head = splitTableRow(line);
        i += 2;
        const rows = [];
        while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
          rows.push(splitTableRow(lines[i]));
          i++;
        }
        html += `<div class="guide-table-wrap"><table class="guide-table guide-md-table"><thead><tr>${head.map(c => `<th>${inlineMd(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${inlineMd(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
        continue;
      }

      if (/^[-*]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^[-*]\s+/,''));
          i++;
        }
        html += `<ul class="guide-list guide-md-list">${items.map(x => `<li>${inlineMd(x)}</li>`).join('')}</ul>`;
        continue;
      }

      if (/^\d+[.)]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+[.)]\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+[.)]\s+/,''));
          i++;
        }
        html += `<ol class="guide-list guide-md-list">${items.map(x => `<li>${inlineMd(x)}</li>`).join('')}</ol>`;
        continue;
      }

      if (/^>\s?/.test(line)) {
        const parts = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          parts.push(lines[i].replace(/^>\s?/,''));
          i++;
        }
        html += `<blockquote class="guide-md-quote">${inlineMd(parts.join(' '))}</blockquote>`;
        continue;
      }

      if (/^(---|___|\*\*\*)\s*$/.test(line)) { html += '<hr class="guide-md-rule">'; i++; continue; }

      const paragraph = [line.trim()];
      i++;
      while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s+|```|[-*]\s+|\d+[.)]\s+|>\s?|---\s*$)/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && isTableDivider(lines[i+1]))) {
        paragraph.push(lines[i].trim());
        i++;
      }
      html += `<p class="guide-md-p">${inlineMd(paragraph.join(' '))}</p>`;
    }
    closeSection();
    return html;
  }

  function renderMarkdownGuide(md, entry) {
    const meta = extractMdMeta(md, entry);
    document.getElementById('venueGuideStatus').textContent = `${statusLabel(meta.status)}${meta.last ? ` · ${meta.last}` : ''}`;
    document.getElementById('venueGuideBody').innerHTML = `
      <section class="guide-hero guide-hero-research">
        <p class="guide-kicker">RESEARCHED VENUE GUIDE</p>
        <h2 id="venueGuideTitle">${esc(meta.title)}</h2>
        <p>繰り返しResearchで蓄積した実用情報。所要時間、効率的な回り方、混雑、3人旅行向けの注意、遅延時のCUT RULE、情報源まで確認できます。</p>
        ${meta.confidence ? `<div class="guide-research-confidence"><small>CONFIDENCE</small><span>${esc(meta.confidence)}</span></div>` : ''}
      </section>
      <div class="guide-markdown">${markdownToHtml(md)}</div>`;
  }

  async function openGuide(entry) {
    ensureOverlay();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('venue-guide-open');
    document.getElementById('venueGuideStatus').textContent = statusLabel(entry.status);
    document.getElementById('venueGuideBody').innerHTML = '<div class="guide-loading">施設情報を読み込み中…</div>';
    history.replaceState(null, '', `${location.pathname}${location.search}#guide=${encodeURIComponent(entry.slug)}`);

    if (!READY.has(entry.status)) {
      renderPending(entry, entry.status === 'IN_PROGRESS' ? '現在調査中です。' : entry.status === 'NEEDS_UPDATE' ? '既存情報の再確認が必要です。' : undefined);
      return;
    }

    try {
      if (entry.mdPath) {
        const response = await fetch(`./${entry.mdPath}?v=${encodeURIComponent(manifest.updatedAt || '')}`, {cache:'no-store'});
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        renderMarkdownGuide(await response.text(), entry);
        return;
      }
      const response = await fetch(`./${entry.path}?v=${encodeURIComponent(manifest.updatedAt || '')}`, {cache:'no-store'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      renderGuide(await response.json(), entry);
    } catch (e) {
      document.getElementById('venueGuideBody').innerHTML = `<div class="guide-error">施設情報を読み込めませんでした。Researchファイルの配置とmanifestを確認してください。<br><small>${esc(e.message)}</small></div>`;
    }
  }

  function closeGuide() {
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('venue-guide-open');
    if (location.hash.startsWith('#guide=')) history.replaceState(null, '', `${location.pathname}${location.search}`);
  }

  function openFromHash() {
    if (!manifest || !location.hash.startsWith('#guide=')) return;
    const slug = decodeURIComponent(location.hash.slice('#guide='.length));
    const entry = manifest.venues.find(v => v.slug === slug);
    if (entry) openGuide(entry);
  }

  async function init() {
    try {
      const response = await fetch(`${MANIFEST_URL}?v=${Date.now()}`, {cache:'no-store'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      manifest = await response.json();
      decorateCards();
      new MutationObserver(decorateCards).observe(document.body, {subtree:true, childList:true});
      openFromHash();
      window.openVenueGuideByName = name => {
        const entry = findEntry(name);
        if (entry) openGuide(entry);
        return Boolean(entry);
      };
    } catch (e) {
      console.warn('Venue research manifest could not be loaded:', e);
    }
  }

  init();
})();
