(() => {
  const data = window.TRIP_DATA;
  if (!data) return;
  const $ = (s) => document.querySelector(s);
  const yen = (n) => new Intl.NumberFormat('ja-JP', { style:'currency', currency:'JPY', maximumFractionDigits:0 }).format(n);
  const maps = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const esc = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const jpDate = (dateStr) => new Intl.DateTimeFormat('ja-JP', {month:'numeric',day:'numeric',weekday:'short',timeZone:'Asia/Tokyo'}).format(new Date(`${dateStr}T00:00:00+09:00`));
  const todayJst = () => new Intl.DateTimeFormat('en-CA', {timeZone:data.meta.timezone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());

  function actionButtons(item) {
    const a = [];
    if (item.mapQuery) a.push(`<a class="action primary" target="_blank" rel="noopener" href="${maps(item.mapQuery)}">地図</a>`);
    if (item.official) a.push(`<a class="action" target="_blank" rel="noopener" href="${esc(item.official)}">公式 ↗</a>`);
    return a.length ? `<div class="actions">${a.join('')}</div>` : '';
  }

  function eventHtml(e) {
    return `<div class="event type-${esc(e.type || 'spot')}"><div class="event-time">${esc(e.time)}</div><div class="event-dot"></div><div class="event-card"><div class="event-title-row"><h4>${esc(e.title)}</h4>${e.type === 'fixed' ? '<span class="badge 確定">FIXED</span>' : ''}</div><p>${esc(e.detail)}</p>${actionButtons(e)}</div></div>`;
  }

  function dayHtml(d, block=true) {
    const route = `<div class="route">${d.route.map(x => `<span class="route-step"><b>${esc(x)}</b></span>`).join('')}</div>`;
    return `<div class="${block ? 'day-block' : ''}"><div class="day-hero"><div><div class="date">DAY ${d.dayNo} · ${esc(d.city)} · ${esc(jpDate(d.date))}</div><h3>${esc(d.title)}</h3><p>${esc(d.lead)}</p></div><div class="day-number">${d.dayNo}</div></div>${route}<div class="timeline">${d.events.map(eventHtml).join('')}</div></div>`;
  }

  const currentDay = data.days.find(d => d.date === todayJst());
  let selectedDay = Number(sessionStorage.getItem('selectedDay')) || currentDay?.dayNo || 1;
  let filter = 'すべて';

  function renderStatus() {
    const now = new Date();
    const start = new Date(`${data.meta.startDate}T00:00:00+09:00`);
    const end = new Date(`${data.meta.endDate}T23:59:59+09:00`);
    let lead;
    if (now < start) lead = `<span class="status-chip"><strong>出発まで ${Math.ceil((start-now)/86400000)}日</strong></span>`;
    else if (now <= end) lead = `<span class="status-chip"><strong>${currentDay ? `DAY ${currentDay.dayNo} 旅行中` : '旅行中'}</strong></span>`;
    else lead = '<span class="status-chip"><strong>TRIP COMPLETE</strong></span>';
    $('#tripStatus').innerHTML = lead + data.fixed.map(x => `<span class="status-chip">${esc(x)}</span>`).join('');
  }

  function renderTabs() {
    $('#dayTabs').innerHTML = data.days.map(d => `<button class="day-tab ${d.dayNo===selectedDay?'active':''}" data-day="${d.dayNo}" type="button">DAY ${d.dayNo}<strong>${esc(jpDate(d.date))}</strong></button>`).join('');
    document.querySelectorAll('.day-tab').forEach(b => b.onclick = () => {
      selectedDay = Number(b.dataset.day);
      sessionStorage.setItem('selectedDay', String(selectedDay));
      renderTabs(); renderToday();
      $('#todaySection').scrollIntoView({behavior:'smooth',block:'start'});
    });
  }

  function renderToday() {
    const d = data.days.find(x => x.dayNo === selectedDay);
    $('#todayHeading').textContent = `DAY ${d.dayNo}｜${d.title}`;
    $('#todayContent').innerHTML = dayHtml(d, false);
  }

  function renderCards() {
    $('#allDays').innerHTML = data.days.map(d => dayHtml(d, true)).join('');
    $('#stayCards').innerHTML = data.stays.map(s => `<div class="mini-card"><div class="topline"><h3>${esc(s.name)}</h3><span class="meta">${esc(s.dates)}</span></div><p>${esc(s.note)}<br><b>${yen(s.price)} / 人</b></p>${actionButtons(s)}</div>`).join('');
    $('#foodCards').innerHTML = data.food.map(f => `<div class="mini-card"><div class="topline"><h3>${esc(f.name)}</h3><span class="meta">${esc(f.day)}</span></div><p>${esc(f.tip)}</p>${actionButtons(f)}</div>`).join('');
  }

  function renderFilters() {
    const fs = ['すべて', ...new Set(data.spots.map(s => s.category))];
    $('#spotFilters').innerHTML = fs.map(f => `<button class="filter ${f===filter?'active':''}" data-filter="${esc(f)}" type="button">${esc(f)}</button>`).join('');
    document.querySelectorAll('.filter').forEach(b => b.onclick = () => { filter=b.dataset.filter; renderFilters(); renderSpots(); });
  }

  function renderSpots() {
    const list = data.spots.filter(s => filter==='すべて' || s.category===filter);
    $('#spotGrid').innerHTML = list.map(s => `<article class="spot-card"><div class="spot-top"><span class="badge ${esc(s.status)}">${esc(s.status)}</span><span class="badge">${esc(s.category)}</span></div><h3>${esc(s.name)}</h3><p>${esc(s.note)}</p><div class="spot-meta"><span>${esc(s.area)}</span><strong>${esc(s.price)}</strong></div>${actionButtons(s)}</article>`).join('') || '<div class="empty">該当する候補はありません。</div>';
  }

  function renderBudget() {
    const total = data.budget.reduce((n,x)=>n+x.amount,0);
    const fixed = data.budget.filter(x=>x.fixed).reduce((n,x)=>n+x.amount,0);
    const pct = Math.min(100, Math.round(total/data.meta.budgetTarget*100));
    $('#budgetContent').innerHTML = `<div><div class="budget-line"><div><div class="budget-big">${yen(total)}</div><div class="budget-sub">現在の標準見積り</div></div><div class="budget-sub">目標 ${yen(data.meta.budgetTarget)}</div></div><div class="meter"><div style="width:${pct}%"></div></div><div class="budget-sub" style="margin-top:7px">固定済み ${yen(fixed)} ／ 節約目標 ${yen(data.meta.budgetSoftTarget)} ／ 上限 ${yen(data.meta.budgetCeiling)}</div></div>${data.budget.map(i => `<div class="budget-row"><span>${esc(i.label)}${i.fixed?' <span class="badge">FIXED</span>':''}</span><strong>${yen(i.amount)}</strong></div>`).join('')}`;
  }

  function renderLinks() {
    $('#officialLinks').innerHTML = data.links.map(l => `<a class="official-link" target="_blank" rel="noopener" href="${esc(l.url)}">${esc(l.name)}</a>`).join('');
  }

  $('#shareButton').onclick = async () => {
    const payload = {title:data.meta.title,text:'京都・大阪旅行 2026 の共有用トリップボード',url:location.href};
    if (navigator.share) { try { await navigator.share(payload); return; } catch(e) { if(e.name==='AbortError') return; } }
    try { await navigator.clipboard.writeText(location.href); $('#shareButton').textContent='URLコピー済'; setTimeout(()=>$('#shareButton').textContent='共有',1500); }
    catch { prompt('このURLをコピーしてください', location.href); }
  };

  renderStatus(); renderTabs(); renderToday(); renderCards(); renderFilters(); renderSpots(); renderBudget(); renderLinks();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();
