# Day 3 Fushimi Inari → Nintendo Museum Optimization

Last researched: 2026-09-02 21:44 JST  
Status: RESEARCHED  
Confidence: HIGH for current itinerary, Nintendo official entry/access rules, Fushimi Inari access and current JR Nara Line timetable / MEDIUM for 9/9 same-day crowd, weather, lunch queue and museum exhibit waits

## 結論

Current authority `trip-data.js` の Day 3 は、

**京都第一ホテル → 伏見稲荷（余力） → 小倉 → Nintendo Museum 12:30固定 → 京都方面**

である。この構造は維持してよい。ただし、現在の `10:50〜11:30 小倉方面へ移動` は、交通手段を具体化するともっと安定する。

**最重要改善は、伏見稲荷からNintendo Museum方面へJR奈良線をそのまま南下すること。** 伏見稲荷大社はJR稲荷駅のすぐ前、Nintendo MuseumはJR小倉駅北出口から徒歩約8分で、JR奈良線は稲荷→JR小倉を乗換なしで結ぶ。京都駅へ戻ったり、京阪→近鉄へ乗り換えたりする必要はない。

2026年9月現行JR時刻表では、平日日中に稲荷発が概ね10〜12分間隔であり、特に次の2本を午前のアンカーとして使える。

- **10:39 稲荷発 みやこ路快速 → 10:54 JR小倉着**
- **10:50 稲荷発 普通 → 11:10 JR小倉発時刻表上の対応列車（到着は11:09頃）**

したがって伏見稲荷は、**10:30までにJR稲荷駅へ戻れる範囲だけを観光する**のが最も安全。10:39快速を取れれば昼食とMuseum到着に大きな余裕が生まれ、逃しても10:50普通がある。

Nintendo Museum 12:30は絶対優先。公式は予約時間より前の入館を認めていないため、11時台前半に現地へ着きすぎても入館できない。一方で昼食を館内カフェへ依存すると、公式が混雑を予想する12:00〜15:00にぶつかる。**JR小倉 / 近鉄小倉周辺で11:05〜11:45頃に昼食を終え、12:05〜12:15にMuseumへ着く**のが最も安定する。

### 推奨ベースタイムライン

| 時刻 | 行動 | 運用判断 |
|---|---|---|
| 08:00〜08:40 | 起床・準備 | QR、3人分の本人確認書類、モバイルバッテリー、現金/IC確認 |
| 08:40〜08:55 | ホテル出発準備 | 朝食を長引かせない。大荷物はホテルに残す |
| **08:55前後** | 京都第一ホテル発 | 京都駅へ。遅れているならこの時点で伏見稲荷短縮判断 |
| **09:15目安** | JR京都発 | 奈良線を使用。京都市も伏見稲荷へはJRを推奨 |
| **09:20頃** | JR稲荷着 | 駅前が表参道なので追加バス不要 |
| **09:20〜10:25** | 伏見稲荷大社 | 本殿→千本鳥居→奥社奉拝所。山頂・四ツ辻は狙わない |
| **10:25〜10:35** | JR稲荷へ戻る | 10:39快速を狙う。写真・授与品で延長しない |
| **10:39 → 10:54** | 稲荷→JR小倉 | みやこ路快速。乗換なし |
| 10:50 → 11:09頃 | fallback | 10:39を逃した場合の普通列車 |
| **11:05〜11:45** | 小倉周辺で早昼食 | 行列10分超は原則CUT。館内昼食を本線にしない |
| **11:50〜12:05** | Museum方面へ | JR小倉北出口から公式徒歩約8分。近鉄小倉なら東口から約5分 |
| **12:05〜12:20** | 現地到着・入口写真・QR/ID準備 | 早入り不可。焦らずセキュリティ前準備 |
| **12:30** | Nintendo Museum入館 | 固定事項。QR＋本人確認書類必須 |
| **12:30〜16:45/17:00** | Museum | 4時間15分〜4時間30分を本命。3時間で切らない |
| **16:45〜17:00** | 退館 | 夕方は固定観光を追加しない |
| 17:00〜18:00前後 | 京都方面へ | 近鉄小倉またはJR小倉。実際の列車と疲労で選択 |
| 夜 | 京都駅周辺 / ホテル / 夕食 | Day 4は最終日なので回復優先 |

## なぜこの順番がよいか

### 1. 伏見稲荷→JR小倉が直通

伏見稲荷公式はJR奈良線「稲荷駅下車 徒歩すぐ」と案内。Nintendo Museum公式はJR奈良線「JR小倉駅」北出口から徒歩約8分と案内している。

JR西日本の2026年9月現行奈良線時刻表では、稲荷からJR小倉へ直通列車が頻発する。10:39発のみやこ路快速はJR小倉10:54着。**この直通性を使わない理由がない。**

RECOMMENDATION: 現行 `trip-data.js` の「小倉方面へ移動」は、サイト統合時には「JR稲荷→JR小倉を直通利用」に具体化する価値がある。ただし本Research段階ではproduction fileは変更しない。

### 2. 伏見稲荷は「午前のボーナス」以上に格上げしない

Nintendo Museumは日時指定で12:30が確定している一方、伏見稲荷は閉門がなく別日に回すことも理論上可能。優先順位はMuseumが圧倒的に上。

今回の65分前後では、

**本殿 → 千本鳥居 → 奥社奉拝所 → 戻る**

までで十分。おもかる石は列が短い場合のみ。四ツ辻・山頂はCUTする。

京都市は伏見稲荷付近の観光快適度予測とライブ情報を提供している。9/9朝に混雑予測が高い、雨が強い、暑さが厳しい、3人の準備が遅い、のどれかなら30〜45分へ短縮する。

### 3. 昼食は入館前に終える

Nintendo Museum公式カフェ HATENA BURGER は12:00〜15:00頃の混雑を予想している。今回の12:30入館直後はまさにピーク。

館内への一般的な食べ物持ち込みも公式利用案内で断られているため、**11時台に小倉で食べる**のが基本。特定の人気店を固定し、行列のため12:15到着を危険にするのは避ける。

### 4. 12:05〜12:15到着がちょうどよい

Nintendo Supportは「原則チケット記載時間に入館」「予約時間より前には入場不可」と明記する。したがって11:30にMuseumへ到着するために伏見稲荷や昼食を過剰に削る必要はない。

一方、QR確認・本人確認・セキュリティを考えると12:29到着は不必要に危険。**12:05〜12:15到着**を実務上の狙いとする。

### 5. Museumは16:15で切らず16:45〜17:00まで使う

既存venue guideの結論どおり、公式FAQの見学目安は約3時間だが、公式友人・家族モデルは13:00から体験→14:30展示→15:00カフェ→16:00展示再開→17:00ショップという構成で、3時間を超える使い方を示している。また営業時間内は原則滞在時間制限がない。

12:30入館なら**16:45〜17:00退館**を本線にする。現在の `trip-data.js` の12:30〜15:30見学＋15:30〜16:15ショップは「成立はするが短め」で、17時まで使えるならMuseum体験価値を優先する方が今回の旅行方針に合う。

## Nintendo Museum内の時間配分

### Base: ワークショップなし

| 時刻 | 内容 | 判断 |
|---|---|---|
| 12:30〜12:40 | 入館・入館証・必要ならWorkshop確認 | Workshop希望なら最優先で空き枠確認 |
| 12:40〜14:10 | 体験展示 | 10コイン配分を最初に決める。長い列は後回し |
| 14:10〜15:20 | 2F製品展示 / Art Gallery | 撮影ではなく展示そのものを見る |
| 15:20〜15:40 | 休憩 | カフェの公式混雑帯12〜15時を外す |
| 15:40〜16:15 | 残コイン / 見逃し回収 | 1コイン系等で調整 |
| 16:15〜16:50 | BONUS STAGE / Art Gallery買物 | 予算上限を決める |
| 16:50〜17:00 | 退館 | 3人集合を確認 |

### Workshopをする場合

公式は入館後の当日先着予約。希望するなら12:30入館直後に確認する。

- 「ちょっと、花札であそぼう」: 約30分、500円/人、2人1組。チケット記載入館時間から3時間以内開始の枠のみ予約可。
- 「ちょっと、花札をつくろう」: 約60分、2,000円。

3人旅ではPlayが2人1組なので、全員同時の一体感は弱い。3人ともMuseumのゲーム体験を優先するならWorkshopは無理に入れない。

## 9/9固有の鮮度情報

### スーパーマリオブラザーズ40周年企画は前々日で終了

Nintendo Museum公式の2026-06-19更新告知では、以下は**2026-09-07（月）で終了**する。

- 40周年特別デザインの入館証
- 40周年ロゴの設置
- 40周年特別デザインTシャツ販売
- 40周年ヒストリーボード

旅行日は9/9なので、これらを探す時間を見込まない。**Miiデザインの入館証は9/8以降も継続**と公式が明記している。

この情報は9/9訪問に直接影響するため、既存venue guide作成時より重要度が高い。

## 3人旅行での運用

1. **代表者1人だけでなく3人とも自分の身分証明書を持つ。** QRチケットと本人確認書類が当日必要。
2. **10コインの使い方を完全統一しない。** 2人用体験と1人用体験を分け、待ち時間に応じて組み替える。
3. 伏見稲荷では3人の集合写真を入口側で何度も狙わない。千本鳥居の人流を塞がず、奥へ進む。
4. 昼食は「3人全員が同じ有名店で食べる」より、12:05現地到着を守ることを優先。
5. Museumショップでは**各自の買物終了時刻を16:50に固定**。1人の買物で全員の退館が延びないよう集合位置を決める。

## 荷物

Day 3は京都第一ホテル連泊中なので、**大荷物を持ち出さない**。Nintendo Museumはキャリーケース等の大型荷物を館内へ持ち込めず、入口付近に無料コインロッカーを設けているが、ホテルに置けるものをわざわざ運ぶ意味はない。

Museumのロッカーは非常用と考える。

## 雨・暑さ・疲労

### 雨

Museumは屋内中心なので固定。削るのは伏見稲荷側。

- 小雨: 伏見稲荷45〜60分
- 強い雨: 伏見稲荷30〜40分またはCUT
- 雷・鉄道影響: 伏見稲荷CUT、Museumへ早めに寄せる

### 暑さ

9月上旬の京都は暑さが残る可能性がある。伏見稲荷の坂・石段で疲労を作り、Museumの4時間超で集中力を落とすのは費用対効果が悪い。

**10:00時点で誰か1人でも明確に消耗しているなら、奥社より先へ進まない。**

### 前日疲労

Day 2は寺社を横断する歩行量の多い日。9/9朝に全員の疲労が残っていれば、伏見稲荷を切る判断は「失敗」ではなくMuseumを守るための予定どおりのCUT。

## CUT RULE

### 15分遅れ

- 伏見稲荷を55分前後へ圧縮。
- おもかる石、授与品、門前町寄り道をCUT。
- 10:39快速に固執せず、10:50普通を使う。
- Museum 12:05〜12:15到着は維持。

### 30分遅れ

- 伏見稲荷は**35〜45分の本殿＋千本鳥居＋奥社短縮コース**。
- 10:00までに伏見稲荷の参拝を開始できていなければ、混雑・体調を見て全CUTを強く検討。
- 昼食は待ち時間ゼロ〜10分以内の店だけ。

### 60分遅れ

- **伏見稲荷を全CUT。**
- 京都駅→JR小倉または近鉄小倉へ直行。
- 11時台に昼食を済ませ、Museumへ12:05〜12:15着。
- Museum内の時間は削らない。

### 90分以上遅れ

- 伏見稲荷全CUT。
- 昼食を即入店できる店・軽食へ圧縮。
- Museum 12:30を唯一の午前ミッションとして行動。
- 公式には公共交通機関の乱れ等やむを得ない事情による遅刻時の救済があるが、**計画上はそれを当てにしない**。

## 時刻ゲート

Day 3では次の時刻だけ覚えればよい。

- **09:20** 伏見稲荷開始目標
- **10:25** 境内から駅へ戻り始める
- **10:39** 稲荷→JR小倉 快速の第一候補
- **10:50** fallback普通
- **11:45** 昼食終了目標
- **12:05〜12:15** Museum現地着
- **12:30** 固定入館
- **16:50** ショップ終了・集合
- **17:00** 退館目標

## 交通モード判断

### 京都第一ホテル → 伏見稲荷

**JR奈良線を本線。** 京都市公式も京都駅→伏見稲荷はJRを推奨し、約9分としている。バスは所要時間変動が大きいとして回避推奨。

### 伏見稲荷 → Museum

**JR稲荷 → JR小倉 直通が本線。**

- 乗換なし
- JR稲荷は大社前
- JR小倉からMuseum徒歩約8分

この区間で京阪→近鉄への乗換を増やさない。

### Museumへタクシーは使わない

Nintendo Museum公式は、公共交通機関のうち**タクシーを除外**し、タクシー・自家用車・バイク・自転車での来館を明確に断っている。

遅延したからといって「最後だけタクシーでMuseum入口へ」という回復策は使えない。遅れを吸収する場所は伏見稲荷と昼食。

### Museum → 京都方面

退館時は近鉄小倉が徒歩約5分、JR小倉が徒歩約8分。17時時点の列車案内を比較し、**待ち時間が短い方**を選ぶ。帰路に固定予約はないので無理に一方へ統一しない。

## 食事

### 昼

**小倉で11時台に食べる。** 店は固定しない。

条件:
- Museumへの徒歩を含め11:50頃には店を離れられる
- 10分以上の行列は切る
- 食べ放題・コース・カフェ巡りはしない
- 入館後のHATENA BURGERを「昼食本線」にしない

### Museumカフェ

使うなら15:00以降の休憩。公式自身が12〜15時の混雑回避を勧めている。

## 費用・パス判断

この日は主にJR奈良線の数回乗車＋Museum 3,300円＋昼食＋任意の買物。地下鉄・市バスを何度も乗り継ぐ日ではないため、**観光系1日乗車券をこの日のためだけに買う必要は薄い。交通系ICの都度払いを基本**とする。

MuseumショップとWorkshopが予算変動の中心。3人とも買物上限を入館前に決める。

## 当日直前チェックリスト

### 9/8 14:00以降

- [ ] 3人分のQRチケットを発券・表示確認
- [ ] 紙バックアップを用意するならQR部分を折らない
- [ ] 各人の本人確認書類を確認
- [ ] 公式NEWS / ticket pageで9/9の臨時休館・変更がないか確認
- [ ] Workshopをやるか3人で仮決定
- [ ] 10コインで絶対やりたい体験を1〜2個ずつ決める

### 9/9 朝

- [ ] JR奈良線運行情報
- [ ] 京都観光快適度マップ「伏見稲荷大社付近」
- [ ] 雨・暑さ・雷
- [ ] 3人の疲労
- [ ] 9:00前後にホテルを出られるか

### JR稲荷へ戻る前

- [ ] 10:39快速に間に合うか
- [ ] 無理なら10:50普通へ切替
- [ ] 伏見稲荷で追加寄り道しない

### 小倉到着後

- [ ] 昼食列10分以内か
- [ ] 11:45までに食べ終えられるか
- [ ] 12:05〜12:15現地着を守れるか

### Museum入館後

- [ ] Workshop希望なら最初に空き枠確認
- [ ] 3人の10コイン配分確認
- [ ] 40周年企画を探さない（9/7終了）
- [ ] 16:50ショップ集合

## 直前に再確認すべき事項

1. Nintendo Museum公式の9/9営業・臨時休館情報。
2. JR奈良線の運行、稲荷10:39/10:50前後の実時刻。
3. 伏見稲荷の快適度予測・ライブ情報。
4. 天候と前日からの疲労。
5. 小倉周辺の昼食待ち。
6. Workshop当日枠。
7. 体験展示待ち時間・ショップ在庫。

## Research judgement

### KEEP

- 12:30 Nintendo Museum固定。
- 伏見稲荷を午前のoptionalとして置く考え方。
- 小倉で入館前に昼食を済ませる考え方。
- 夕方を予備枠にする考え方。

### RECOMMENDATION

Production統合工程で検討する価値がある変更候補:

1. ホテル出発を9:00より少し早め、伏見稲荷9:20頃開始へ寄せる。
2. 伏見稲荷→小倉を**JR稲荷→JR小倉直通**と明記する。
3. Museum到着目標を12:15だけでなく**12:05〜12:15**にする。
4. Museum退館を16:15ではなく**16:45〜17:00**へ延ばす。
5. 40周年企画は9/7終了であることをサイト側に鮮度情報として反映する。

Research段階では `trip-data.js` は変更しない。

## Sources

### 1. Repository current authority — `trip-data.js`
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/trip-data.js
- Source type: Internal current authority
- Accessed date: 2026-09-02
- 確認内容: Day 3 current sequence, 12:30 fixed entry, Fushimi Inari optional, lunch/Museum/return blocks.

### 2. Nintendo Museum official top / access
- URL: https://museum.nintendo.com/index.html
- Source type: Tier A / Nintendo official
- Published / updated: page does not state a single update date
- Accessed date: 2026-09-02
- 確認内容: 10:00〜20:00, Tuesday closure rule, Kintetsu Ogura 5 min, JR Ogura 8 min, taxi/car/bike/bicycle prohibition.

### 3. Nintendo Museum User Guide
- URL: https://museum.nintendo.com/guide/index.html
- Source type: Tier A / Nintendo official
- Accessed date: 2026-09-02
- 確認内容: 3,300 yen adult admission, hours, large baggage, food carry-in restrictions.

### 4. Nintendo Support — 入館時間
- URL: https://support-jp.nintendo.com/app/answers/detail/a_id/38341
- Source type: Tier A / Nintendo official FAQ
- Accessed date: 2026-09-02
- 確認内容: reserved time entry principle, no early admission, exceptional late-entry rule for unavoidable transport disruption.

### 5. Nintendo Support — QR ticket
- URL: https://support-jp.nintendo.com/app/answers/detail/a_id/38316
- Source type: Tier A / Nintendo official FAQ
- Accessed date: 2026-09-02
- 確認内容: QR available from 14:00 previous day, smartphone display or paper.

### 6. Nintendo Support — 当日必要物
- URL: https://support-jp.nintendo.com/app/answers/detail/a_id/38340
- Source type: Tier A / Nintendo official FAQ
- Accessed date: 2026-09-02
- 確認内容: QR ticket and identification required.

### 7. Nintendo Support — 見学時間
- URL: https://support-jp.nintendo.com/app/answers/detail/a_id/38336
- Source type: Tier A / Nintendo official FAQ
- Accessed date: 2026-09-02
- 確認内容: about 3 hours as an official visit-time guideline.

### 8. Nintendo Support — 滞在時間制限
- URL: https://support-jp.nintendo.com/app/answers/detail/a_id/38335
- Source type: Tier A / Nintendo official FAQ
- Accessed date: 2026-09-02
- 確認内容: no normal time limit within opening hours, possible crowd restrictions.

### 9. Nintendo Museum Guide CASE02
- URL: https://museum.nintendo.com/guide/route/02/index.html
- Source type: Tier A / Nintendo official
- Accessed date: 2026-09-02
- 確認内容: friend/family flow around 13:00 visit, 14:30 product exhibits, 15:00 cafe, 16:00 return to exhibits, 17:00 shop; congestion-based flexible order.

### 10. HATENA BURGER official
- URL: https://museum.nintendo.com/cafe/index.html
- Source type: Tier A / Nintendo official
- Accessed date: 2026-09-02
- 確認内容: 10:00〜20:00 / LO 19:15; 12:00〜15:00 expected crowd and recommendation to avoid it.

### 11. Nintendo Support — Craft & Play
- URL: https://support-jp.nintendo.com/app/answers/detail/a_id/38360
- Source type: Tier A / Nintendo official FAQ
- Accessed date: 2026-09-02
- 確認内容: day-of first-come reservation after entry; Play 30 min / 500 yen / pair, Craft 60 min / 2,000 yen.

### 12. Nintendo Museum — Super Mario Bros. 40th Anniversary
- URL: https://museum.nintendo.com/news/detail/250912.html
- Source type: Tier A / Nintendo official news
- Published / updated: 2025-09-12 / 2026-06-19 update
- Accessed date: 2026-09-02
- 確認内容: 40th play-ticket design, logo, special T-shirt and history board end 2026-09-07; Mii design continues from 9/8.

### 13. 伏見稲荷大社 — 交通アクセス
- URL: https://inari.jp/access/
- Source type: Tier A / shrine official
- Accessed date: 2026-09-02
- 確認内容: JR Inari immediately by shrine, Kyoto→Inari reference, Keihan alternative.

### 14. Kyoto City Official Tourism — Fushimi Inari access
- URL: https://ja.kyoto.travel/feature/traffic/access.php?id=8
- Source type: Tier A / Kyoto City official tourism
- Accessed date: 2026-09-02
- 確認内容: Kyoto→Fushimi Inari recommends JR Nara Line, about 9 min; bus time variability means rail recommended.

### 15. Kyoto Tourism Comfort Map — Fushimi
- URL: https://ja.kyoto.travel/comfort/fushimi/
- Source type: Tier A / Kyoto City official tourism
- Accessed date: 2026-09-02
- 確認内容: time/weather-based congestion prediction and live information for Fushimi Inari area.

### 16. JR West — Nara Line current timetable
- URL: https://timetable.jr-odekake.net/line-timetable/2300
- Source type: Tier A / railway official
- Data: current September 2026 timetable
- Accessed date: 2026-09-02
- 確認内容: Kyoto→Inari departures and dense Inari→JR Ogura direct service; Inari 10:39 / 10:50 around target period.

### 17. JR West — Miyakoji Rapid 607 timetable
- URL: https://timetable.jr-odekake.net/train-timetable/25501
- Source type: Tier A / railway official
- Data basis: JR page states September 2026 timetable data
- Accessed date: 2026-09-02
- 確認内容: Inari 10:39 → JR Ogura 10:54.

### 18. Existing venue guides
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/tree/main/docs/research/venue-guides
- Source type: Repository research evidence
- Accessed date: 2026-09-02
- 確認内容: Nintendo Museum 4h15m–4h30m trip recommendation; Fushimi Inari short-course structure and venue-specific CUT priorities.

## Evidence notes

- JR timetable is current September 2026 official data, but same-day disruption remains possible. Recheck on 9/9 morning.
- The 10:50 local arrival at JR Ogura is derived from the official current line timetable's corresponding train column; final same-day train should be checked in JR West navigation before departure.
- 40th-anniversary content ending on 9/7 is explicitly stated by Nintendo and therefore should be treated as current authority for the 9/9 visit.
- No current official page reviewed in this cycle indicated a planned normal closure on 9/9; nevertheless the official site must be rechecked on 9/8 evening / 9/9 morning because temporary closure can occur for weather or other reasons.
