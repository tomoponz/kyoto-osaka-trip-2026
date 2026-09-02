(() => {
  const MANIFEST_URL = './data/research/venues/index.json';
  const READY = new Set(['RESEARCHED', 'VERIFIED']);
  let manifest = null;
  let overlay = null;

  const esc = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const normalize = (v='') => String(v).toLowerCase().replace(/\s+/g,'').replace(/[・･→→()（）/／\-–—]/g,'');
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
    if (!manifest) return null;
    const n = normalize(name);
    return manifest.venues.find(v => [v.name, ...(v.aliases || [])].some(a => {
      const x = normalize(a);
      return x === n || (x.length >= 4 && (n.includes(x) || x.includes(n)));
    })) || null;
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
      button.textContent = READY.has(entry.status) ? '攻略ガイド' : '攻略ガイド・調査待ち';
      button.addEventListener('click', () => openGuide(entry));
      actions.appendChild(button);
      card.dataset.guideDecorated = '1';
    });
  }

  function renderPending(entry, message='この施設はResearch Workerによる調査待ちです。') {
    document.getElementById('venueGuideStatus').textContent = statusLabel(entry.status);
    document.getElementById('venueGuideBody').innerHTML = `
      <div class="guide-pending">
        <span class="guide-pending-badge">${esc(statusLabel(entry.status))}</span>
        <h2 id="venueGuideTitle">${esc(entry.name)}</h2>
        <p>${esc(message)} 調査が完了すると、推奨所要時間・効率的に回るコツ・混雑攻略・CUT RULE・情報源がこの画面に自動表示されます。</p>
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

  async function openGuide(entry) {
    ensureOverlay();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('venue-guide-open');
    document.getElementById('venueGuideStatus').textContent = statusLabel(entry.status);
    document.getElementById('venueGuideBody').innerHTML = '<div class="guide-loading">ガイドを読み込み中…</div>';
    history.replaceState(null, '', `${location.pathname}${location.search}#guide=${encodeURIComponent(entry.slug)}`);

    if (!READY.has(entry.status)) {
      renderPending(entry, entry.status === 'IN_PROGRESS' ? '現在調査中です。' : entry.status === 'NEEDS_UPDATE' ? '既存情報の再確認が必要です。' : undefined);
      return;
    }

    try {
      const response = await fetch(`./${entry.path}?v=${encodeURIComponent(manifest.updatedAt || '')}`, {cache:'no-store'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      renderGuide(data, entry);
    } catch (e) {
      document.getElementById('venueGuideBody').innerHTML = `<div class="guide-error">調査データを読み込めませんでした。manifestのstatusとJSONファイルの配置を確認してください。<br><small>${esc(e.message)}</small></div>`;
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
    } catch (e) {
      console.warn('Venue research manifest could not be loaded:', e);
    }
  }

  init();
})();
