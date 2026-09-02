# Research Log

## Cycle 1 — 2026-09-02 17:03 JST

Target: Nintendo Museum  
Research depth: Deep venue research / Tier A official-first with Tier C visit reports for duration and crowd calibration  
Sources checked: 22 source entries recorded in `docs/research/venue-guides/nintendo-museum.md`, including Nintendo Museum official site, Nintendo Support FAQs, official route guide, current 2026 travel article, and visitor reports.  

Key findings:
- `trip-data.js` current authority still fixes Nintendo Museum for 2026-09-09 at 12:30.
- Current official hours are 10:00–20:00; adult admission is 3,300 yen.
- Same-day ticket sales are not available. The trip already has the 12:30 reservation confirmed.
- Official FAQ gives about 3 hours as the basic visit-time guideline, while Nintendo's own family/friends model route runs 13:00–17:30 (4.5 hours).
- For this party of three, recommended museum allocation is 4h15m–4h30m, targeting 12:30 entry and 16:45–17:00 exit.
- Each visitor receives 10 interactive-exhibit coins and extra coins cannot be purchased.
- The 4-coin Zapper & Scope SP materially changes the rest of the coin plan; two-player experiences should be rotated rather than keeping all three travelers in every queue.
- Craft & Play workshops are same-day, after-entry, first-come reservations. Play is about 30 min / 500 yen per person / pair format; Craft is about 60 min / 2,000 yen.
- Official café guidance expects crowding around 12:00–15:00, supporting the existing plan to eat before entering and use the café only as a later break if needed.
- QR ticket and identification are required. Large luggage cannot be brought into the museum; free coin lockers are available before the security gate.
- Kiyotravel's 2026 duration article is useful for time-allocation comparison but contains operating-hours information inconsistent with the current official 10:00–20:00 schedule, so its operational details are marked HISTORICAL / MAY BE OUTDATED.

Files updated:
- `docs/research/venue-guides/INDEX.md` — initialized research index; Nintendo Museum set to RESEARCHED.
- `docs/research/venue-guides/nintendo-museum.md` — created complete venue guide.
- `docs/research/RESEARCH_LOG.md` — created this log.

Open questions:
- Recheck official notices and transport status on 2026-09-08 evening / 2026-09-09 morning.
- Actual same-day waits for specific interactive exhibits cannot be known in advance.
- Workshop availability is only known after entry.
- Shop inventory and item-specific purchase limits are day-dependent.

Next target: 清水寺（current main-line facility; next highest priority after the fixed Nintendo Museum event）

## Cycle 2 — 2026-09-02 17:11 JST

Target: 清水寺  
Research depth: Deep venue research / Tier A official-first with current 2026 Kyoto City transport and crowd-management information plus recent duration reports  
Sources checked: 13 source entries recorded in `docs/research/venue-guides/kiyomizu-dera.md`.

Key findings:
- Current `trip-data.js` keeps 清水寺 on 2026-09-08 from 11:00 to 12:20, followed by 二年坂・三年坂 / lunch and then 14:10 伏見稲荷.
- Kiyomizu-dera's official 2026 calendar sets 2026-09-08 opening hours at 06:00–18:00; Kyoto City tourism information lists the temple as open daily.
- Current adult admission is 500 yen. Some older/third-party pages still show 400 yen, so those values are outdated.
- Recent 2026 visit guides converge around 60–90 min for a normal circuit, 30–45 min for a compressed Main Hall/Stage visit, and up to about 2 hours for a slow visit. Therefore the existing 80-minute slot is reasonable.
- The essential route for this trip is Niomon / pagoda → Main Hall and stage → Okunoin viewpoint → Otowa Waterfall. Okunoin is important because it gives the classic outside view of the Kiyomizu stage.
- Otowa Waterfall is the main variable queue; if the party is behind schedule, preserving the 12:20 departure matters more than waiting through a long queue.
- Zuigudo officially offers the Tainai-meguri experience. A current 2026 visitor guide reports 4–5 min when quiet, about 10 min when crowded, and 100 yen extra, but those operational details were not independently stated on the official page and must be checked on-site.
- Jishu Shrine was still officially described by Kyoto City as closed to the public for restoration in July 2026, so it is not included in the base duration until reopening is confirmed.
- 2026-09-08 is a Tuesday. Kyoto City's EX100/EX101 sightseeing express buses are weekend/holiday services, while the new Keihan Bus Okoshi Bus Kiyomizu-dera Line runs on weekdays from Kyoto Station / Shichijo Keihan to Gojo-zaka. It is a useful option but should be compared with normal transit based on actual hotel-departure timing.
- Kyoto City provides a Gion/Kiyomizu comfort map with time-of-day crowd forecasts and live information; this should be checked on the morning of 9/8.
- The temple prohibits eating while walking inside the precincts except closed-container drinks, supporting the existing plan to eat after descending through Sannenzaka/Ninenzaka.

Files updated:
- `docs/research/venue-guides/kiyomizu-dera.md` — created complete venue guide including 5-level durations, route, crowd strategy, party-of-three notes, CUT RULE, prep and sources.
- `docs/research/venue-guides/INDEX.md` — 清水寺 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 2.

Open questions:
- Recheck 9/8 Kiyomizu-dera official notices, opening hours and any temporary closures before departure.
- Confirm same-day Tainai-meguri fee / reception hours at Zuigudo.
- Confirm whether Jishu Shrine has reopened; current research treats it as closed.
- Compare Okoshi Bus Kiyomizu-dera Line vs normal transit after the exact Kyoto First Hotel luggage-drop time is known.
- Use the Kyoto Tourism Comfort Map on 9/8 morning for real-time crowd conditions.

Next target: 二年坂・三年坂（same Day 2 main-line sequence immediately after 清水寺）

## Cycle 3 — 2026-09-02 17:54 JST

Target: 二年坂・三年坂（産寧坂）  
Research depth: Deep area research / Kyoto City official history-preservation-crowd-manners data plus current transit and visitor-duration evidence  
Sources checked: 16 source entries recorded in `docs/research/venue-guides/ninenzaka-sannenzaka.md`.

Key findings:
- Current `trip-data.js` keeps the area on 2026-09-08 from 12:20 to 13:20 as `二年坂・三年坂 / 昼食`, immediately after 清水寺 and before 14:10 伏見稲荷.
- This is not an enclosed facility. Kyoto official pages list no single area-wide opening hours or closure day; shops and restaurants operate individually.
- The streets are part of the Sanneizaka Important Preservation District for Groups of Traditional Buildings, where stone steps, stone paving, late-Edo to Taisho machiya, Yasaka Pagoda and surrounding temples form one historic landscape.
- For this trip, 45–60 min is a reasonable walking/browsing allocation. A seated lunch plus relaxed browsing is better treated as 75–90 min, so the existing 60-minute combined slot must be run as a compressed plan.
- Recommended sequence is Kiyomizu-dera → Sannenzaka → quick lunch → Ninenzaka → optional short Yasaka Pagoda photo → leave toward Kiyomizu-Gojo Station.
- Lunch should be decided quickly: use a 10-minute queue cap. Waiting for a famous café/restaurant can consume the entire transfer margin.
- Kyoto City's manners guidance asks visitors not to spread across narrow roads, not to stop in groups, not to eat while walking in public places, and to photograph without obstructing others.
- Current Kyoto City comfort-map coverage includes `清水坂〜ねねの道`; this should be checked on 9/8 morning because the 12:20 slot overlaps the busiest daytime period.
- A 2025 ANA Research Institute field report described Ninenzaka/Sannenzaka/Kiyomizu-dera as so crowded with foreign visitors and school groups that passing through was difficult, supporting a conservative walking-time margin.
- MapFan gives one Ninenzaka-area-to-Kiyomizu-Gojo walking example of about 1.5 km / 23 min. Current transit searches show Kiyomizu-Gojo→Fushimi-Inari at about 7–8 min, direct, 240 yen. Therefore **13:10 departure is recommended and 13:20 is an absolute upper limit** if 14:10 Fushimi Inari is to remain comfortable.
- Shopping is the largest open-ended time sink. The guide caps shopping at one store per traveler and treats Yasaka Pagoda as optional if time remains.
- Rain materially increases the risk on stone steps and paving; footwear and avoiding rushed photography matter more than squeezing in one extra shop.
- One search result (`sannenzakakyoto.com`) presented itself like a preservation-group site but showed outdated Kiyomizu-dera admission and questionable contact details; it was excluded from authoritative evidence.

Files updated:
- `docs/research/venue-guides/ninenzaka-sannenzaka.md` — created full area guide with 5-level durations, compressed lunch plan, crowd strategy, three-person rules, CUT RULE, transit connection and source evidence.
- `docs/research/venue-guides/INDEX.md` — 二年坂・三年坂 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 3.

Open questions:
- Recheck Kyoto Tourism Comfort Map for `清水坂〜ねねの道` on 2026-09-08 morning.
- Recheck actual rain / heat conditions because stone steps and walking time are weather-sensitive.
- Recheck 9/8 weekday Keihan timetable and operations before leaving Kiyomizu.
- Lunch is intentionally not fixed; actual restaurant availability and queue length remain same-day decisions.
- Exact walking time from the chosen lunch location to Kiyomizu-Gojo varies; 23 min is a representative map-route estimate, not a guaranteed value.

Next target: 伏見稲荷大社（same Day 2 main-line facility immediately after 二年坂・三年坂）

## Cycle 4 — 2026-09-02 18:30 JST

Target: 伏見稲荷大社  
Research depth: Deep venue research / Fushimi Inari official-first, Kyoto City current crowd-access data, current railway evidence and recent 2026 visitor calibration  
Sources checked: 23 source entries recorded in `docs/research/venue-guides/fushimi-inari-taisha.md`.

Key findings:
- Current `trip-data.js` keeps 伏見稲荷大社 on 2026-09-08 from 14:10 to 15:40, with a note that summit access depends on stamina.
- Kyoto City currently lists the shrine as open without a closing gate, year-round, with the amulet/talisman counter 8:00–18:00 and prayer handling 8:30–16:30.
- Normal shrine visitation is free. Special exhibitions can have separate fees and must not be confused with ordinary admission.
- Kyoto City states the full `お山めぐり` is about 4 km / 2 hours. Current practical guides place summit-inclusive visits at roughly 2–3 hours. Therefore **the summit should be cut from this trip's 90-minute slot**.
- Recommended trip allocation is 75–90 min: Main Hall → Senbon Torii → Okusha Hohaisho → Omokaru Stone only if the queue is short → optionally continue a little farther uphill → turn back.
- Yotsutsuji is valuable for the view but is conditional, not a must. A current guide estimates Main Hall-to-Yotsutsuji round trip at about 1–1.5 hours, leaving no safe margin for this itinerary once crowds, worship and photos are included.
- The operational rule is to check the time at 14:50 and again at 15:05; 15:05 is the hard turn-back benchmark.
- Omokaru Stone is cut if the wait looks longer than 10 minutes. Senbon Torii and reliable exit timing have higher priority.
- Afternoon crowding must be assumed. Kyoto City includes Fushimi Inari in the official comfort-map/live-information system, and several 2026 visitor reports describe heavy daytime crowding even on weekdays. Multiple reports agree that crowds usually thin as visitors climb higher.
- The most efficient transport pairing for this itinerary is **Keihan on arrival / JR on departure**: Kiyomizu-Gojo→Fushimi-Inari is direct and 240 yen; JR Inari is immediately in front of the shrine and connects efficiently toward Kyoto Station.
- Fushimi Inari's official rules prohibit food outside designated free rest areas and prohibit photography that blocks narrow approaches; this materially affects a three-person photo strategy.
- Official lockers exist at the shrine's south-side bicycle-parking area (large 500 / medium 300 / small 200 yen), and both JR Inari and Keihan Fushimi-Inari also have lockers. The trip should still leave luggage at the hotel.
- As of the current official news search, no announcement closing normal visitation on 2026-09-08 was found. Previous 2026 typhoon-related access restrictions demonstrate why an official recheck is still required the day before/day of travel.

Files updated:
- `docs/research/venue-guides/fushimi-inari-taisha.md` — created full venue guide with 5-level durations, 90-minute route, summit decision, crowd strategy, transport pairing, party-of-three rules, CUT RULE, prep and source evidence.
- `docs/research/venue-guides/INDEX.md` — 伏見稲荷大社 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 4.

Open questions:
- Recheck the Kyoto Tourism Comfort Map for 伏見稲荷大社付近 on 2026-09-08 morning and immediately before leaving the Higashiyama area.
- Recheck Fushimi Inari official notices for weather-related access restrictions or temporary events.
- Recheck 9/8 weekday Keihan Kiyomizu-Gojo→Fushimi-Inari and JR Inari→Kyoto timetables.
- Same-day Omokaru Stone queue length cannot be predicted reliably.
- Whether Yotsutsuji is practical depends on actual arrival time, crowd flow, heat/rain and the slowest traveler's condition.

Next target: 金閣寺（next unreearched current main-line facility, scheduled for Day 4）

## Cycle 5 — 2026-09-02 18:36 JST

Target: 金閣寺（鹿苑寺）  
Research depth: Deep venue research / Kinkakuji official-first with Kyoto City access guidance, current 2026 crowd-duration reports and Day 4 Ryoanji connection analysis  
Sources checked: 16 source entries recorded in `docs/research/venue-guides/kinkakuji.md`.

Key findings:
- Current `trip-data.js` keeps 金閣寺 on 2026-09-10 from 09:30 to 10:40, followed by 龍安寺 at 11:10.
- Current official hours are 09:00–17:00, year-round; adult admission is 500 yen and ordinary visitation does not require advance reservation.
- Kyoto City and the official site both support the current early-morning placement. A 2026-05-02 visitor arriving at 09:30 reported only moderate crowding and a stay under one hour.
- Recent 2026 practical sources converge around 40–60 min for a standard circuit and 60–90 min when adding photography, goshuin, tea or shopping. Therefore the existing 70-minute slot is well sized.
- The essential sequence is reception → Kinkaku / Kyokochi front view → Rikushu-no-matsu → garden route → Ryumon-taki → Anmintaku → Sekkatei → Fudodo → optional goshuin/shop/tea.
- Kinkakuji's official FAQ states there is **no luggage storage or locker facility**. Large luggage must be left at Kyoto First Hotel or another external locker before the visit.
- Official photography rules are unusually strict: small-camera snapshots for personal enjoyment are allowed, but shooting intended for publication to third parties, including SNS, is prohibited. This needs to be rechecked and shared among the three travelers.
- The official site does not clearly state the admission-fee payment method. A 2026 visitor report says cash only, while 2026 cashless-payment rollout information indicates Kinkakuji may be added later. Until the temple itself confirms implementation, carry at least 500–1,000 yen in cash.
- Kyoto City's transport guidance recommends subway + bus rather than taking route 205 directly from Kyoto Station because the direct bus has many stops and can be heavily delayed by congestion. From the Kujo/Kyoto First Hotel area, subway toward Kitaoji then bus is the base strategy.
- For the next leg, 2026-09-10 is Thursday. Current city-bus timetable shows route 59 from Kinkakuji-michi toward Ryoanji at 10:08, 10:23, 10:38 and 10:53. If the party exits around 10:40, waiting for 10:53 is not clearly faster than walking.
- The Kinukake-no-michi guide gives Kinkakuji→Ryoanji as about 18 minutes on foot. Therefore **walking is the default after Kinkakuji when weather and stamina are acceptable; route 59 is the rain/heat/fatigue fallback**.
- At 15 min delay, keep the 10:40 exit and cut shop/tea. At 30 min delay, use a 40-minute minimum circuit. At 60+ min delay, preserve Kinkakuji with a compressed visit and cut later optional time rather than compromising the 20:05 flight constraint.

Files updated:
- `docs/research/venue-guides/kinkakuji.md` — created complete venue guide with 5-level durations, 70-minute route, crowd strategy, photo/luggage/payment rules, Kinkakuji→Ryoanji connection, three-person notes, CUT RULE and source evidence.
- `docs/research/venue-guides/INDEX.md` — 金閣寺 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 5.

Open questions:
- Recheck Kinkakuji official notices and event page on 2026-09-09 evening / 09-10 morning.
- Confirm whether cashless payment has actually been enabled at Kinkakuji's ordinary admission desk; current official Kinkakuji pages do not say.
- Recheck the temple's SNS/publication photography rule immediately before travel in case wording changes.
- Recheck 9/10 weather and choose walking vs route 59 from Kinkakuji to Ryoanji accordingly.
- Recheck route 59 real-time operation; traffic delays can change the walk-vs-bus decision.

Next target: 龍安寺（next unreearched current main-line facility, immediately after 金閣寺 on Day 4）

## Cycle 6 — 2026-09-02 18:43 JST

Target: 龍安寺  
Research depth: Deep venue research / Ryoanji official-first with Kyoto City/Prefecture culture-access data, current 2026 visitor calibration, and Day 4 Arashiyama connection analysis  
Sources checked: 17 source entries recorded in `docs/research/venue-guides/ryoanji.md`.

Key findings:
- Current `trip-data.js` keeps 龍安寺 on 2026-09-10 from 11:10 to 12:20, immediately after 金閣寺 and before the 12:20–13:20 lunch/Arashiyama transfer block.
- Current official hours for September are 08:00–17:00, year-round closure is not listed, and adult admission is 600 yen. Official goshuin reception is 09:00–16:00.
- The current 70-minute slot is well sized. Recommended allocation is 55–70 min; a compressed stone-garden-focused visit can be 25–30 min, while relaxed viewing can extend to 80–100 min.
- The key experiential recommendation is to reserve **15–20 minutes actually seated at the rock garden**, not use the whole visit for walking and photos.
- Ryoanji's official site highlights four mysteries of the rock garden. The perspective trick in the right-hand wall—lowering toward the far end—is a concrete observation target that makes the visit more interactive for this group.
- Essential route: entrance / Kyoyochi → Hojo → rock garden → Chisoku-no-tsukubai → Ryoanji-gaki / garden details → Kyoyochi → exit.
- 2026-09-10 is Thursday. Kyoto Prefecture's current listing for the temple restaurant Seigenin says Wednesday/Thursday closed. **Do not plan lunch inside Ryoanji on this trip.**
- The 2026 special evening viewing of all 92 Hosokawa Morihiro `Unryuzu` panels begins on 09-26, so the trip date 09-10 is before that special program. Do not inflate the visit time expecting that event.
- For the next leg, Randen is the predictable base option: Ryoanji Station → Katabiranotsuji → Arashiyama. Randen's official material gives a 250-yen flat adult fare and basic daytime 10-minute intervals; current route searches show the rail portion at roughly 20–23 min.
- Including the official 7–8 min temple-to-station walk and transfer/waiting, allow about 30–40 min from Ryoanji exit to Arashiyama. Therefore the existing 12:20–13:20 `lunch / Arashiyama` block leaves only a short lunch window and should not absorb a late temple exit.
- Ordinary admission payment methods are not clearly stated by the temple's official pages. Carry cash rather than assuming card/QR support.
- Current official and Kyoto tourism sources agree on 600-yen adult admission; some recently updated third-party pages still show 500 yen, so those values are treated as stale.

Files updated:
- `docs/research/venue-guides/ryoanji.md` — created full venue guide with five-level durations, 70-minute route, rock-garden viewing strategy, Seigenin Thursday closure, Randen connection, three-person notes, CUT RULE, preparation and 17-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 龍安寺 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 6.

Open questions:
- Recheck Ryoanji official notices on 2026-09-09 evening / 09-10 morning for temporary restrictions or events.
- Confirm the ordinary admission desk payment method; current official pages do not specify it.
- Recheck 09-10 weather before choosing the Kinkakuji→Ryoanji walk vs route 59.
- Recheck Seigenin same-day status even though the current official tourism listing says Thursday closed.
- Recheck Randen operation and exact Ryoanji→Arashiyama departure times before leaving the temple.

Next target: 嵐山・竹林の小径（next unresearched current main-line facility, immediately after 龍安寺 on Day 4）

## Cycle 7 — 2026-09-02 18:56 JST

Target: 嵐山・竹林の小径  
Research depth: Deep area research / Kyoto City official crowd-access-conservation data, Randen current transport/refreshment options, 2026 itinerary and visitor-duration calibration  
Sources checked: 16 source entries recorded in `docs/research/venue-guides/arashiyama-bamboo-grove.md`.

Key findings:
- Current `trip-data.js` keeps 嵐山 on 2026-09-10 from 13:20 to 15:00, with 竹林の小径 as the main line and a note that adding the Sagano Romantic Train requires itinerary redesign.
- Kyoto City defines the Bamboo Grove as an approximately 400 m public-route attraction from Nonomiya Shrine past Tenryuji's north gate toward Okochi Sanso; it is free and no facility-wide hours/closure are listed.
- Kyoto City lists Randen Arashiyama Station as about 10 min on foot and JR Saga-Arashiyama as about 13 min. For this itinerary, Randen is the arrival side from Ryoanji and JR is the preferred Kyoto-return side.
- The bamboo path itself does **not** justify the full 100-minute slot. Current 2026 itinerary guidance gives about 30 min for the grove, and visitor reports include roughly 20-minute iconic-section visits. Recommended allocation is 75–100 min for an Arashiyama mini-loop, with 20–30 min in the bamboo itself.
- The 13:20 arrival is a daytime crowd slot. Kyoto City places both the Bamboo Grove and Togetsukyo in its official Tourism Comfort Map / live-camera system. Same-day live conditions should be treated as the operational authority.
- The route should be one-directional: Randen Arashiyama → Nonomiya side → bamboo → choose **one** add-on (Kameyama Park, Togetsukyo, or the station footbath) → JR Saga-Arashiyama / return. Do not reverse the bamboo route for extra photos.
- If the entrance is crowded, do not wait for an empty frame. Keep walking and take photos farther in when flow permits. The grove is a public road, so blocking traffic is especially poor practice.
- Kyoto City has current 2026 conservation activity after repeated damage to bamboo and bamboo fences. Do not carve/touch bamboo, cross fences, or use the path in ways that obstruct visitors.
- Ryoanji→Arashiyama already requires about 30–40 min including station walking/waiting. Therefore the 12:20–13:20 transfer/lunch block only leaves a short meal window; a 10-minute restaurant queue cap is recommended.
- Randen current fare is 250 yen with cash or national transport IC cards. Transfer at Katabiranotsuji between the Kitano and Arashiyama lines does not require an intermediate payment.
- Randen Arashiyama Station's footbath is currently 250 yen including a towel and is a useful fatigue option, but it replaces rather than supplements Kameyama Park/Togetsukyo in the 100-minute schedule.
- Hard sightseeing exit is 15:00–15:15. The current 15:00–16:00 `余力枠` should be preserved as delay/return/baggage buffer on the 20:05 flight day, not treated as guaranteed extra tourism.

Files updated:
- `docs/research/venue-guides/arashiyama-bamboo-grove.md` — created full guide with five-level durations, 100-minute mini-loop, crowd/live-camera strategy, one-add-on rule, Randen/JR connection, three-person notes, CUT RULE and 16-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 嵐山・竹林の小径 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 7.

Open questions:
- Recheck Kyoto City's Bamboo Grove live camera and comfort forecast on 2026-09-10 immediately before leaving Ryoanji.
- Recheck exact 9/10 Randen and JR Saga-Arashiyama→Kyoto departures.
- Recheck station footbath/current-shop hours only if the party intends to use them.
- Final lunch choice remains same-day because the transfer block is short and queue conditions matter more than a fixed restaurant.
- The Sagano Romantic Train remains a separate unresearched candidate and must not be inserted without its own schedule/reservation analysis.

Next target: 道頓堀・なんば（next unresearched current main-line attraction; Day 1）

## Cycle 8 — 2026-09-02 19:03 JST

Target: 道頓堀・なんば  
Research depth: Deep area research / Osaka Convention & Tourism Bureau, Osaka City, Osaka Metro, Nankai, Ebisu-bashi shopping street and Glico official-first, with current 2026 crowd-duration calibration  
Sources checked: 16 source entries recorded in `docs/research/venue-guides/dotonbori-namba.md`.

Key findings:
- Current `trip-data.js` keeps 道頓堀・なんば on 2026-09-07 from 12:15 to 14:00, immediately after 551蓬莱本店 and before 心斎橋PARCO at 14:30.
- The area is not an enclosed facility: Dotonbori streets, Ebisu Bridge and the riverwalk have no single opening hours, closure day or admission fee. Individual stores operate separately.
- Osaka City gives Ebisu Bridge as about 200 m / 3 min from Namba Station Exit 14. The official Ebisubashi-suji shopping street is about 370 m from the Namba/Takashimaya side to Ebisu Bridge.
- Glico's official sign page confirms the current sign is the sixth generation; illumination is sunset to 24:00. Therefore the 12:15–14:00 visit gets the landmark photo but not the neon-night effect.
- Recommended allocation is 75–105 min. The current 105-minute slot is best used as a one-way walking route rather than broad Namba wandering.
- Recommended sequence: 551 Honten → Hozenji Yokocho → Dotonbori street/large signs → Ebisu Bridge & Glico → short Tombori Riverwalk segment → north through Shinsaibashi-suji toward PARCO.
- Hozenji Yokocho is about 80 m long and is a high-value 10–15 min contrast to Dotonbori, but it is the first cut when delayed.
- The official OSAKA-INFO B&S model allocates about 150 min to a Dotonbori route including river cruise and Shinsaibashi-suji. This supports excluding a cruise from the current 105-minute slot.
- Shinsaibashi-suji is about 580 m and OSAKA-INFO reports roughly 60,000 weekday visitors; transit speed should not be treated like an empty sidewalk.
- 2026 visitor evidence indicates afternoon is generally less crowded than after 18:00, while current practical guidance still treats 12:00–14:30 as a restaurant lunch-queue period. Since the party has just eaten at 551, extra food is capped at one item / a 10-minute queue.
- The hard operating rule is to finish the Dotonbori core by 14:00 and keep moving north so the 14:30 Shinsaibashi PARCO block is not compromised.
- At 15 min delay, compress Hozenji and cut extra food. At 30 min, cut Hozenji and long riverwalk. At 60 min, keep only Dotonbori street + Ebisu Bridge/Glico. At 90+ min, take a 10–15 min Glico/Ebisu Bridge stop and proceed to PARCO.

Files updated:
- `docs/research/venue-guides/dotonbori-namba.md` — created full guide with five-level durations, 105-minute route, crowd strategy, one-way PARCO connection, three-person notes, rain plan, CUT RULE and 16-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 道頓堀・なんば set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 8.

Open questions:
- Recheck 9/7 weather and any Dotonbori event/traffic restrictions that could affect pedestrian flow.
- Recheck 551 Honten same-day queue and actual meal-end time; 551 will receive its own venue research cycle.
- Recheck Shinsaibashi PARCO 9/7 event schedule and whether any timed activity changes the 14:30 connection requirement.
- Exact crowd density at Ebisu Bridge cannot be known in advance; use actual flow rather than waiting for empty photos.

Next target: 心斎橋PARCO（next unresearched current main-line attraction; Day 1）

## Cycle 9 — 2026-09-02 19:03 JST

Target: 心斎橋PARCO  
Research depth: Deep venue research / Shinsaibashi PARCO official floors, access, payment, 2026 new shops and 2026-09-07 event schedule, with Osaka Metro access verification  
Sources checked: 17 source entries recorded in `docs/research/venue-guides/shinsaibashi-parco.md`.

Key findings:
- Current `trip-data.js` keeps 心斎橋PARCO on 2026-09-07 from 14:30 to 16:30, immediately after 道頓堀・なんば and before the flexible evening block.
- Current official general merchandise/service hours are 10:00–20:00; the facility is directly connected to Osaka Metro Shinsaibashi Station South Gate.
- The current 120-minute slot is well sized if the party does **not** try to browse every floor. Recommended allocation is 90–120 min.
- For this party, the highest-value structure is 5F → 6F → 9F. 6F is the core, containing CAPCOM STORE OSAKA, Godzilla Store Osaka, POP MART, Ghibli, Chiikawa and other permanent pop-culture shops.
- 5F adds Bandai Namco Cross Store and RADIO EVA STORE OSAKA; a Disney Store opened on 2026-08-26. The official reservation requirement applied to 08-26 through 08-30 only, so 09-07 is not currently listed as reservation-required, though crowd restrictions should be rechecked.
- On 09-07, the official event calendar includes the Jujutsu Kaisen 5th Anniversary POP UP on 9F (free admission, 08-29 through 09-13), HELLO! PUPPET SUNSUN on 9F, Urumia on 6F and httl on B1F.
- The paid `ザ・森東 -心斎橋支社-` exhibition is also active on 09-07 at 14F PARCO HALL. Admission is 1,400 yen with audio guide / admission benefit, and the official page warns that entry restrictions may be used when crowded. It is optional, not part of the base 120-minute route.
- Operational route: go straight to 5F, then 6F for 40–50 min, then choose one 9F event. Do not start at 1F and browse upward sequentially.
- Because 14F's official venue guidance warns that PARCO elevators can be heavily crowded, the 14F paid event adds nontrivial vertical-movement uncertainty.
- Shinsaibashi PARCO supports major QR payments, electronic money and transit IC cards at facility level, but individual-shop exceptions exist.
- This is a strong rain/fatigue buffer venue: the party can reduce outdoor Dotonbori time and use the indoor 5F/6F/9F route without changing the fixed later schedule.
- Hard operational rule remains 16:20 regroup / 16:30 exit. The facility stays open later, but extending the visit is discouraged because Day 1 started at 05:00 and the evening block is recovery margin.

Files updated:
- `docs/research/venue-guides/shinsaibashi-parco.md` — created full guide with five-level durations, 120-minute route, 5F/6F/9F priorities, 09-07 event schedule, payment/access data, three-person strategy, CUT RULE and 17-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 心斎橋PARCO set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 9.

Open questions:
- Recheck 09-07 same-day entry/queue/numbered-ticket rules for the 9F Jujutsu Kaisen and PUPPET SUNSUN events.
- Recheck whether Disney Store applies any renewed crowd-control entry restriction after its opening period.
- The official `ザ・森東` page does not state a standard visit duration; do not insert it into the base itinerary without same-day interest/time confirmation.
- Recheck temporary hours or added events on 09-06 evening / 09-07 morning.
- Shop-specific stock and limited items can change daily.

Next target: 551蓬莱 本店（next unresearched scheduled food stop on the current main line）

## Cycle 10 — 2026-09-02 19:25 JST

Target: 551蓬莱 本店  
Research depth: Deep food-stop research / 551 official current store page, 2026-09-01 menu and price revision, official product pages, Ebisubashi shopping-street data, and recent 2025–2026 queue reports  
Sources checked: 14 source entries recorded in `docs/research/venue-guides/551-horai-honten.md`.

Key findings:
- Current `trip-data.js` schedules 551蓬莱 本店 at about 11:30 on 2026-09-07, immediately before the 12:15–14:00 Dotonbori/Namba block.
- Official current hours are 10:00–21:30 for the 1F shop and 11:00–21:30 last order for the 2F/3F restaurant. The official 2026 closure list has 09-01 and 09-15 closed; 09-07 Monday is not on the closure list.
- The restaurant slot is time-sensitive. Current 2026 visitor evidence shows queues can already exist shortly after 11:00, and an August holiday report describes the first seating filling before opening with second seating around 11:30.
- Recommended allocation is 45–60 min, with 70 min as the maximum safe use. Operational rule: check the restaurant queue immediately; if seating by about 11:45 looks unlikely, switch to the 1F takeout option rather than letting the queue consume Dotonbori time.
- 2026-09-01 price revision is already effective for the trip. Current official restaurant prices include pork bun 330 yen, seafood yakisoba 1,300 yen, seafood yakisoba set 1,800 yen, and 551 dim-sum set 1,980 yen. Current official takeout pork-bun price is 500 yen for 2.
- The best three-person strategy is one pork bun each plus different noodle/rice/set choices rather than all ordering the same dish, allowing more of the flagship restaurant menu to be sampled within one meal.
- The flagship has 1F takeout and 2F/3F restaurant functions. Limited anman starts at 10:00 and limited char-siu buns at 11:00, but these are optional and must not delay the main meal or Dotonbori departure.
- Official store information confirms credit cards are accepted. Official pages do not clearly confirm electronic-money/QR support, so card plus cash backup is recommended.
- Hard departure is 12:20, ideally 12:10–12:15. If the schedule is 30 min late, use takeout by default; at 60+ min late, preserve only a quick pork-bun purchase if the line is short.

Files updated:
- `docs/research/venue-guides/551-horai-honten.md` — created full guide with five-level duration estimates, 11:45 seating gate, 2026-09 menu/prices, three-person ordering strategy, queue analysis, payment, CUT RULE and 14-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 551蓬莱 本店 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 10.

Open questions:
- Recheck 09-07 same-day restaurant and 1F shop queue on arrival; no advance research can determine actual waiting time.
- Recheck any temporary closure or hours change on the official store page on 09-06 evening / 09-07 morning.
- General lunch reservation rules are not clearly documented on the official store page; do not rely on reservation unless directly confirmed with the store.
- Recheck electronic-money/QR payment support if the group plans to avoid cash entirely.
- Limited char-siu bun/anman availability is same-day and secondary to the main itinerary.

Next target: 本家 第一旭 本店（next unresearched scheduled food stop on the current main line）

## Cycle 11 — 2026-09-02 19:31 JST

Target: 本家 第一旭 本店  
Research depth: Deep food-stop research / official current hours, menu, payment and ingredient information, Kyoto First Hotel connection, plus 2026 queue reports across morning/lunch/evening  
Sources checked: 14 source entries recorded in `docs/research/venue-guides/honke-daiichiasahi-honten.md`.

Key findings:
- Current `trip-data.js` schedules 本家 第一旭 本店 at about 17:40 on 2026-09-08, after the 16:30–17:20 hotel rest and before a free Kyoto Station evening block.
- Current official hours are **06:00–25:00**, Thursday closed. 09-08 is Tuesday and therefore a normal operating day unless a temporary notice appears.
- Official current menu prices include ramen 980 yen, student ramen 830 yen, chashu ramen 1,180 yen, special ramen 1,230 yen and gyoza 350 yen. The store has 31 seats.
- Official payment support is broad: cash, credit cards, electronic money and QR payments.
- The official site gives JR Kyoto Station as a 4-minute walk. Kyoto First Hotel gives its own location as about 6 minutes from Kyoto Station Hachijo West Exit, so the existing hotel-rest-to-dinner connection is geographically reasonable; exact door-to-door time still depends on station crossing.
- Recent 2026 evidence shows **weekday 17–18h is not queue-free**. Reports include around 10–25 people and roughly 30-minute waits at 17:00–18:00.
- Recommended allocation is 60–80 min including queue and meal. The current 17:40 target is reasonable, but the operational plan should budget about 30 minutes of waiting rather than assuming immediate seating.
- 2026 queue evidence also shows 40–60 min at weekday lunch, about 40 min on a Monday at 10:30, and 60–70+ min in some weekend afternoon/evening cases. Queue risk persists throughout the day.
- Recent visitor reports describe a ticket-purchase flow controlled by staff while customers are in line. The party should follow same-day instructions rather than having one traveler independently leave the queue to buy tickets.
- For three travelers, do not insist on three contiguous seats if staff offers split or shared seating; seating preference is lower priority than reducing the standing wait after a walking-heavy day.
- Official pages list an 830-yen student ramen but do not explain qualification/document rules. Carry student IDs and confirm on site rather than assuming eligibility.
- Third-party reservation information is inconsistent: one current listing says reservations unavailable while another offers a two-person seat-only booking page. The official site does not clarify general reservations, so this three-person trip should **not rely on a reservation**.
- If the estimated wait is 60+ minutes and the group is already fatigued, cutting the restaurant is reasonable because the next day contains the fixed Nintendo Museum visit. The line is the main cost, not the food price.

Files updated:
- `docs/research/venue-guides/honke-daiichiasahi-honten.md` — created full guide with five-level duration estimates, 17:40 queue strategy, current official menu/payment data, three-person seating/order rules, CUT RULE, stale-hours warning and 14-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 本家 第一旭 本店 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 11.

Open questions:
- Recheck the official news/store page on 2026-09-08 for any temporary closure or hours change.
- Actual 17:20–17:40 queue length is unknowable in advance; same-day line is operational authority.
- Confirm the student-ramen eligibility/student-ID requirement on site.
- Confirm the current ticket-purchase sequence from staff before leaving the queue.
- Reservation status remains contradictory in third-party data and should not be treated as available without direct confirmation.

Next target: ポルタイン弁天町（next unresearched scheduled hotel / main-line stay）

## Cycle 12 — 2026-09-02 19:46 JST

Target: ポルタイン弁天町  
Research depth: Deep hotel operations research / hotel official access, breakfast, luggage and facilities data, current 2026 booking-platform operational details, current rail connections and 2026 guest reports  
Sources checked: 17 source entries recorded in `docs/research/venue-guides/portainn-bentencho.md`.

Key findings:
- Current `trip-data.js` keeps ポルタイン弁天町 as the 09-07→09-08 stay, with 10:15–11:20 allocated to travel from Shin-Osaka / baggage drop and free light breakfast at about 07:00 the next morning.
- Hotel official guidance states **check-in-day luggage can be stored free of charge from any time that day**. This makes the hotel a strong Day 1 luggage hub and removes any reason to wait for room-ready time before going to Namba.
- Current official breakfast hours are **06:30–09:00** and include several breads, rice balls, yogurt and drinks. Official guidance allows breakfast items to be taken back to the room.
- 2026 guest reports show rice balls can run out relatively early: examples include rice balls available around 07:00 but gone by about 08:00, and a 2026-08 report saying they were gone about 30 minutes after opening. Therefore **06:30–06:50 breakfast is recommended** if the group wants rice balls; the current 07:00 plan is still workable.
- Current official hotel access is JR Bentencho central south gate immediately nearby / Osaka Metro Chuo Line Exit 4 about 2 minutes. The hotel also has a 1F Seven-Eleven, coin laundry and fitness facility.
- Current booking platforms updated in 2026 list standard check-in 15:00 and checkout 10:00. The actual booked plan remains authority because the official pages retrieved did not expose a general check-in/out table.
- Official 2025 notice sets **post-checkout luggage storage at 1,000 yen per room, cash only**. This trip should not use it because all luggage moves to Kyoto on 09-08.
- Current route examples place Shin-Osaka→Bentencho at about **18–23 min / 200 yen / one transfer**. Therefore luggage drop can usually finish around 10:40–10:55 if the group leaves Shin-Osaka near 10:15.
- Current route examples place Bentencho→Namba at about **15–18 min / 240 yen / one Osaka Metro transfer**. To preserve the 11:30-ish 551 target, **leaving the hotel around 11:00 is better than treating 11:20 as the target hotel departure**.
- Current route examples place Bentencho→Kyoto at about **44–50 min / 840 yen / one transfer**. The current 08:30–09:45 Day 2 transfer block is therefore reasonable with buffer.
- Amenities are distributed via an amenity buffet behind the front desk rather than assuming every item is already in the room.

Files updated:
- `docs/research/venue-guides/portainn-bentencho.md` — created complete hotel guide with five-level hotel-operation timing, luggage/breakfast strategy, Day 1/Day 2 connections, three-person rules, CUT RULE and 17-source evidence table.
- `docs/research/venue-guides/INDEX.md` — ポルタイン弁天町 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 12.

Open questions:
- Recheck the hotel's current luggage policy and official NEWS on 2026-09-07 before arriving.
- Verify the actual reserved room type, payment status and what `price: 4845` represents from the reservation confirmation; `trip-data.js` does not define the price-unit semantics.
- Recheck same-day breakfast offering; exact items and rice-ball stock are variable.
- Recheck JR Osaka Loop Line / Osaka Metro operation on 09-07 and JR Bentencho→Kyoto operation on 09-08.
- Check-in/check-out time should be verified against the actual booked plan even though current 2026 booking platforms list 15:00/10:00.

Next target: 京都第一ホテル（next unresearched scheduled hotel / main-line stay）

## Cycle 13 — 2026-09-02 20:03 JST

Target: 三十三間堂（蓮華王院）  
Research depth: Deep venue research / temple official 2026 hours-fees-statues-rules, Kyoto City access and bus data, current 2026 duration/crowd evidence, and Day 2 connection analysis  
Sources checked: 20 source entries recorded in `docs/research/venue-guides/sanjusangendo.md`.

Key findings:
- Current `trip-data.js` schedules 三十三間堂 on 2026-09-08 from 10:30 to 11:10, between the 09:45–10:15 Kyoto First Hotel baggage-drop block and the 11:30 Kiyomizu-dera block.
- Current official September hours are **08:30–17:00**, reception ending 16:30; ordinary adult admission is **600 yen** and the temple is year-round.
- The hall is shoes-off. The core is 1000 standing Senju Kannon plus the central seated Kannon, with the 28 deities and Wind/Thunder gods; the temple provides a touch-panel statue search system.
- The official Wind/Thunder page gives a venue-specific viewing trick: bend the knees slightly and look up so the rafters add a lightning-like visual effect.
- The current 40-minute slot is viable as a compressed visit, but the practical standard is about 45–60 minutes. Recommended allocation for this itinerary is **35–45 minutes**, with 11:05 target departure and 11:10 absolute upper limit.
- Official pages retrieved do not clearly state current admission payment methods. A 2026-04 visitor reported cashless payment unavailable, so carry cash while keeping the payment claim explicitly unverified.
- The **front connection is fragile**: if baggage drop at Kyoto First Hotel consumes the full slot until 10:15, the 10:30 temple start is difficult without a taxi. Kyoto City gives Kyoto Station→Sanjusangendo walking as about 18 minutes; Kyoto Taxi Association gives Kyoto Station→temple as roughly 1.7 km / 800 yen as a reference estimate.
- The **next connection is also fragile**: route 206 runs toward Gojozaka/Kiyomizu-michi, but Kiyomizu-dera itself is still about a 10-minute walk from those stops. Therefore leave Sanjusangendo around 11:00–11:05 and compare taxi when delayed rather than assuming an 11:10→11:30 transit connection is reliable.
- In a 40-minute visit, prioritize the hall. Garden, South Gate/Taiko Wall, souvenirs, and the touch-panel system are the first cuts.
- If Day 2 is already about 60 minutes late, **cut Sanjusangendo** instead of allowing delay to cascade through Kiyomizu-dera, lunch, Kinkakuji and Ryoanji.

Files updated:
- `docs/research/venue-guides/sanjusangendo.md` — created full guide with five-level duration estimates, 40-minute route, venue-specific viewing tips, crowd/payment/access analysis, three-person rules, CUT RULE and 20-source evidence table.
- `docs/research/venue-guides/INDEX.md` — 三十三間堂 set to RESEARCHED.
- `docs/research/RESEARCH_LOG.md` — appended Cycle 13.

Open questions:
- Recheck Sanjusangendo official NEWS on 2026-09-07 evening / 09-08 morning for any temporary restriction or culture-event impact.
- Confirm current admission payment methods; official pages do not state card/QR support.
- Confirm ordinary-day goshuin reception hours and prices if any traveler wants one.
- Tourist locker availability was not confirmed from official pages; keep large luggage at Kyoto First Hotel.
- Recheck actual Kyoto First Hotel→Sanjusangendo and Sanjusangendo→Kiyomizu road/bus conditions on the morning of 09-08.

Next target: 東映太秦映画村（next unresearched current main-line venue; Day 4）
