# Day 1 Osaka Optimization

Last researched: 2026-09-02 21:02 JST  
Status: RESEARCHED  
Confidence: HIGH for current fixed itinerary / official airport-bus, venue hours and access / MEDIUM for exact same-day rail connection, queues, weather and fatigue

## 結論

現行 `trip-data.js` の大枠、**伊丹空港 → 新大阪でMと合流 → 弁天町で荷物預け → 551蓬莱本店 → 道頓堀・なんば → 心斎橋PARCO → 弁天町** は維持してよい。

ただし、実運用では次の4点を修正すると安定する。

1. **伊丹08:45着後の新大阪行は「09:25発」を標準便として考える。** 現行公式では空港発が08:55、09:25、10:05…で、標準約25分。08:55は降機・預け荷物・Hとの合流が極めて順調な場合だけのボーナス便とする。
2. 新大阪10:15発なら、**JR新大阪→大阪→弁天町**を基本にする。現行経路情報では約18〜20分・200円・1回乗換で、ポルタイン弁天町はJR弁天町駅中央南口からすぐ。大阪駅の乗換混雑はあるが、時間・料金・ホテル側の出口を総合すると本線。
3. ホテルの「10:15〜11:20荷物預け枠」は使い切らない。**10:40〜10:50頃に荷物処理、10:50〜11:00ホテル出発**を目標にする。551は11:20〜11:30到着が理想。
4. **道頓堀→心斎橋PARCOは地下鉄に乗らず歩く。** 551本店から戎橋・グリコ・道頓堀を見て、そのまま心斎橋筋を北上する一方向ルート自体が観光になる。14:00頃に道頓堀コアを終え、14:15〜14:30にPARCOへ入る。

### 推奨ベースタイムライン

| 時刻 | 行動 | 運用判断 |
|---|---|---|
| 08:45 | 伊丹空港着・H合流 | 降機、荷物受取、トイレを急ぎすぎない |
| 08:55 | 新大阪行バス | **乗れればボーナス**。間に合わなくても走らない |
| **09:25** | **新大阪行リムジンバス** | **標準便**。新大阪09:50頃着 |
| 09:50〜10:15 | 新大阪でMと合流 | Mが先着なら改札/バス降車側に集合点を固定 |
| **10:15頃** | 新大阪発 | JR京都線→大阪→大阪環状線で弁天町 |
| 10:35〜10:45 | 弁天町着 | JR中央南口側からホテルへ |
| 10:40〜10:55 | ポルタイン弁天町で荷物預け | 3人分を預けるだけ。部屋待ち・長い休憩はしない |
| **10:50〜11:00** | ホテル発 | Osaka Metro弁天町へ |
| 11:10〜11:20目安 | なんば着 | 中央線→本町→御堂筋線。551は11番出口から徒歩約1分 |
| **11:20〜11:30** | 551蓬莱本店 | レストラン列を即確認 |
| **11:45** | 551 decision gate | この時点で早く着席できそうにないなら1Fテイクアウトへ |
| **12:10〜12:20** | 551離脱 | 12:20を絶対上限 |
| 12:20〜14:00 | 道頓堀・なんば | 法善寺→道頓堀→戎橋/Glico→短いRiverwalk→心斎橋筋北上 |
| **14:00頃** | 道頓堀コア終了 | 以後は心斎橋筋を北上。移動そのものを観光化 |
| 14:15〜14:30 | 心斎橋PARCO | 5F→6F→9F中心 |
| **16:20** | PARCO regroup | 買物を終了、3人集合 |
| **16:30** | PARCO離脱 | Day 1本線終了 |
| 16:30以降 | 早め夕食 / ホテル / 元気なら梅田 | 05:00起床日なので回復余白を優先 |

## 区間別最適化

### 1. 伊丹空港 → 新大阪

**本線: 阪急観光バスの空港リムジン。**

現行公式:
- 大阪（伊丹）空港→新大阪: 標準約25分
- 大人600円
- 予約制ではなく先着順
- 空港発: 08:10 / 08:35 / **08:55** / **09:25** / 10:05…
- 平日・土日祝共通ダイヤ
- ICカード、2026-03-01以降は車内タッチ決済対応

今回08:45着のため、08:55は接続時間10分しかない。飛行機の到着時刻は駐機・ドアオープン・荷物受取完了時刻ではないので、**08:55を旅程成立条件にしない**。

**RECOMMENDATION:** 08:55に自然に間に合えば乗る。少しでも走る必要があるなら09:25へ。09:25→09:50なら現行のM合流09:35〜10:15に収まる。

### 2. 新大阪 → 弁天町

#### Plan A — JR

- 新大阪→大阪→弁天町
- 現行経路例: 約18〜20分
- 200円
- 乗換1回
- ポルタイン弁天町はJR中央南口からすぐ

**採用理由:** 最安・速い・ホテル出口との相性がよい。

#### Plan B — Osaka Metro

- 新大阪→本町→弁天町
- 現行経路例: 約23〜28分
- 290円
- 乗換1回
- ホテルはMetro弁天町4番出口から徒歩約2分

**使う条件:** JR京都線/大阪環状線に運行障害がある、または大阪駅の大混雑を避けたい場合。

### 3. 弁天町で荷物預け

既存Portainn researchでは、**チェックイン当日は何時からでも無料で荷物預かり可**。

したがって、10:40頃着なら必要なのは:

フロントで予約名確認  
↓  
3人分の大荷物を預ける  
↓  
貴重品・スマホ・財布・モバイルバッテリーだけ持つ  
↓  
トイレが必要なら済ませる  
↓  
出発

**5〜15分で処理する。** 11:20までホテルに滞在する必要はない。

### 4. 弁天町 → 551蓬莱 本店

**本線: Osaka Metro中央線 → 本町 → 御堂筋線 → なんば。**

現行経路情報では弁天町→なんばが概ね15〜17分・240円・1回乗換。551本店は公式で地下鉄なんば駅11番出口から徒歩約1分。

JRでJR難波まで行く案は料金面で有利な場合があるが、**551本店はOsaka Metroなんば側に近く、JR難波/OCATからの地上歩行が増える**。荷物を置いた後の時間効率ではMetroを優先する。

### 5. 551蓬莱 本店

既存venue researchのルールをDay全体へ昇格する。

- 到着目標: 11:20〜11:30
- レストラン標準: 45〜60分
- **11:45 seating gate**
- 12:10〜12:15離脱推奨
- **12:20絶対上限**
- 11:45時点で着席見込みが悪ければ、1Fテイクアウトへ切替

9/7は月曜日で、551公式の2026年9月休業日は9/1・9/15。現行情報では9/7は営業予定。

### 6. 551 → 道頓堀 → 心斎橋PARCO

ここは**電車を使わない**。

推奨一方向ルート:

551蓬莱 本店  
↓  
法善寺横丁（時間があれば）  
↓  
道頓堀通  
↓  
戎橋・Glicoサイン  
↓  
とんぼりRiverwalkを短く  
↓  
心斎橋筋を北上  
↓  
心斎橋PARCO

戎橋筋商店街は公式で南北約370mのアーケード型商店街。道頓堀/なんば研究でも「南から北へ一方向」が効率的と結論済み。

**重要:** `trip-data.js` の「12:15〜14:00 道頓堀」と「14:30 PARCO」の間の30分は、別の交通時間として消費する必要はない。14:00頃から北へ歩けば、**心斎橋筋そのものが観光＋移動**になる。

### 7. 心斎橋PARCO

- 物販・サービス: 10:00〜20:00
- 現行本線: 14:30〜16:30
- 既存venue research推奨: 90〜120分
- 5F→6F→9Fが基本
- 9/7は呪術廻戦5周年POP UP、HELLO! PUPPET SUNSUN、Urumia等が開催期間内

**16:20 regroup / 16:30 exit**を固定する。

### 8. 16:30以降

Day 1は05:00起床。翌9/8は京都へ移動して寺社を長時間歩く。

#### Base — 疲れている

心斎橋  
↓ Osaka Metro  
本町乗換  
↓  
弁天町  
↓  
ホテルチェックイン / 早め夕食 / 入浴 / 睡眠

心斎橋→弁天町は現行経路で約18〜22分・240円程度の例がある。

#### Optional — 3人とも元気

心斎橋→梅田へ短時間移動し、**梅田は1〜1.5時間だけ**。その後JR大阪→弁天町（現行経路では約7〜9分・180円程度）で戻る。

梅田を「必須観光」へ昇格させない。買物延長より翌日の体力価値を優先する。

## 交通費の考え方

Base routeの代表値:

| 区間 | 目安 |
|---|---:|
| 伊丹→新大阪バス | 600円 |
| 新大阪→弁天町 JR | 200円 |
| 弁天町→なんば Metro | 240円 |
| なんば→PARCO | 徒歩0円 |
| 心斎橋→弁天町 Metro | 240円 |
| **合計** | **約1,280円/人** |

Osaka Metroの1日乗車券エンジョイエコカードは2026年現行で**平日大人820円**。9/7（月）のBaseではMetro利用額が約480円なので、**1日券は買わずIC/都度払い**が合理的。

梅田を追加しても、JRを組み合わせる今回ルートではMetro1日券の元を取ることを目的に動線を歪める必要はない。

## 荷物

- 大型荷物: **ポルタイン弁天町へ全て預ける**
- Shin-Osaka lockerをBaseにしない。夜に新大阪へ荷物回収する余計な往復が発生する
- なんば・道頓堀へキャリーケースを持ち込まない
- 各自携帯するもの: 財布、スマホ、モバイルバッテリー、水、必要なら折り畳み傘

3人なので、フロントで荷物を預けた後に「誰の何個を預けたか」を10秒確認する。最終日のような複雑な荷物移送は不要。

## 食事

### 昼
551をDay 1唯一の固定食事イベントとして扱う。

- レストランが順調: そのまま昼食
- 11:45 gateで厳しい: テイクアウトへ
- 道頓堀で第2の人気店行列へ並ばない
- 追加フードは待ち10分以内・1品程度

### 夕
16:30以降に当日の疲労と空腹で決める。

**RECOMMENDATION:** 有名店をもう1軒固定するより、PARCO退出時点の体力で「心斎橋/梅田で食べる」または「弁天町へ戻って食べる」を決める方が今回の旅行には合う。

## 混雑

### 伊丹→新大阪
- バスは予約制ではなく先着順。
- 09:25便に乗れない場合、次は10:05で40分ずれるため、バス停到着時点で列を確認する。

### 新大阪・大阪駅
- 3人＋旅行初日の荷物なので、1本の列車を逃すことを許容する。
- 大阪駅で走らない。

### 551
- Day 1最大の可変待ち時間。
- 店そのものを完全CUTするより、レストラン→テイクアウトへ切替える。

### 道頓堀
- 12〜14時は飲食店の昼ピークを想定。
- 既に551で食べるので「食べるための行列」を回避する。

### PARCO
- 9/7開催POPUPは入場規制・整理券が同日発生する可能性がある。
- 1イベントの待ちが長ければ常設5F/6Fを優先する。

## 雨天運用

雨ならDay 1はむしろ組み替えやすい。

1. 551は維持。
2. 法善寺横丁・Riverwalkを短縮。
3. 戎橋で必要な写真だけ撮る。
4. 戎橋筋・心斎橋筋の商店街導線を使って北上。
5. PARCOを120分しっかり使う。
6. 16:30以降は梅田を切ってホテルへ。

屋外観光を完全中止して別施設を追加する必要はない。

## 疲労対策

Day 1の失敗パターンは、夕方の「まだ大阪にいるから何かしなければ」で予定を追加しすぎること。

- 05:00起床
- フライト
- 空港/新大阪合流
- 荷物移動
- なんば徒歩
- PARCO2時間

までで十分に1日分の負荷がある。

**16:30時点で1人でも疲労が強ければ梅田CUT。** 3人全員が「まだ行ける」場合だけ追加する。

## 3人旅行の運用

- 空港・新大阪の集合場所はメッセージで具体的な改札/バス停まで固定する。
- 列車乗換では最速者に合わせず、最も遅い人が乗れる電車にする。
- 551で席が分かれる提案が出ても、3人の合意があれば回転率を優先して受ける。
- 道頓堀では写真担当を交代し、同じ場所で3人が別々に長時間撮影しない。
- PARCOでは自由行動するなら**16:20集合地点**を入館時に決める。

## Decision Gates

### Gate A — 伊丹空港
- **08:55に自然に間に合う:** 乗る
- 間に合わない: 09:25を待つ
- 09:25を逃す: 10:05。以後Day 1は約30〜40分遅延モード

### Gate B — 新大阪
- **10:15までに3人集合:** 通常運用
- 10:15を越える: ホテル休憩を完全CUT

### Gate C — ポルタイン
- **11:00までに出る:** 通常運用
- 11:10を越える: 551レストラン成功率低下。到着時点で即列判断

### Gate D — 551
- **11:45までに着席見込み良好:** レストラン
- 悪い: 1Fテイクアウト
- **12:20:** 何があっても離脱

### Gate E — 道頓堀
- **14:00:** 道頓堀コア終了。PARCO方向へ北上

### Gate F — PARCO
- **16:20:** 3人再集合
- **16:30:** 退出

## CUT RULE

### 15分遅れ

**KEEP:** 551レストラン（着席見込みがよければ）、戎橋/Glico、道頓堀、PARCO 90〜120分。  
**CUT:** ホテルでの休憩、法善寺/riverwalkの長居、追加フード。

### 30分遅れ

**KEEP:** 551そのもの、戎橋/Glico、PARCO。  
**CHANGE:** 551は11:45 gateを厳格化。レストラン待ちが長ければテイクアウト。  
**CUT:** 法善寺またはriverwalk、道頓堀の追加店舗。

### 60分遅れ

**KEEP:** 551は10〜20分以内で買える場合のみ、道頓堀コア20〜40分、PARCO 90分程度。  
**CUT:** 法善寺、riverwalk、追加フード、梅田。  
**RULE:** 夕方の自由枠を使って本線を回復し、夜に観光を追加しない。

### 90分以上遅れ

優先順位:

1. 3人合流
2. 荷物をホテルへ
3. 551は列が短ければ豚まん等を短時間購入
4. 戎橋/Glico・道頓堀を20〜30分
5. 心斎橋PARCOを60〜90分
6. ホテルへ戻る

**梅田は完全CUT。** 551のレストラン待ちもCUT。旅行初日に翌日以降の体力を破壊しない。

## 直前確認

### 9/6夜
- 伊丹→新大阪バスの運休/ダイヤ変更
- 9/7のフライト運航
- JR京都線・大阪環状線の工事/計画運休
- Osaka Metro中央線・御堂筋線の工事/出口閉鎖
- 551本店の臨時休業
- 心斎橋PARCO 9/7 POPUP入場ルール
- 9/7天気・最高気温・降水確率

### 9/7朝 / 到着後
- フライト実績時刻
- バス09:25便の列
- Mの新大阪到着実績
- JR/Metroリアルタイム運行
- 551店頭の列
- PARCOイベントの当日整理券

## RECOMMENDATION — Production integration前の提案

`trip-data.js` はResearch中なので変更しないが、後工程で統合するなら以下の表現に更新する価値がある。

- `09:00〜 伊丹→新大阪` → **08:55 bonus / 09:25 base**を表示
- `10:15〜11:20 弁天町へ / 荷物預け` → **10:15出発、10:40前後到着、11:00ホテル発目標**へ具体化
- `11:30前後 551` → **11:45 seating gate / 12:20 hard exit**を表示
- 道頓堀→PARCOは「徒歩一方向ルート」と明記
- 16:30以降は「梅田は3人全員元気な場合のみ」と明記

これは**RECOMMENDATIONのみ**であり、このcycleではproduction filesを変更しない。

## Sources

### 1. Current `trip-data.js`
- Source title: `trip-data.js`
- URL: Repository current main
- Source type: Internal current authority
- Updated: 2026-09-02
- Accessed: 2026-09-02
- 確認内容: Day 1固定事項、各時刻、宿泊先、551・道頓堀・PARCO本線。

### 2. 阪急観光バス — 新大阪駅 / 大阪（伊丹）空港線
- URL: https://www.hankyu-kankobus.co.jp/limousine/timetable/S/
- Source type: Tier A / official transport
- Published / updated: Current page, accessed 2026-09-02
- Accessed: 2026-09-02
- 確認内容: 空港発08:55/09:25/10:05、標準25分、600円、先着順、平日土日共通、IC/タッチ決済。

### 3. Osaka Itami Airport — 空港から目的地へ
- URL: https://www.osaka-airport.co.jp/access/from-airport/bus
- Source type: Tier A / airport official
- Published / updated: Current page
- Accessed: 2026-09-02
- 確認内容: 新大阪行のりば、約25分。

### 4. JR route calibration — 新大阪→弁天町
- URL: https://transit.yahoo.co.jp/search/result/%E6%96%B0%E5%A4%A7%E9%98%AA-%E5%BC%81%E5%A4%A9%E7%94%BA
- Source type: Tier B / current route engine
- Published / updated: 2026-09-01 search data
- Accessed: 2026-09-02
- 確認内容: JR新大阪→大阪→弁天町 約18分・200円・1回乗換の現行例。

### 5. Osaka Metro — 弁天町駅
- URL: https://subway.osakametro.co.jp/station_guide/C/c13/joukouichi.php
- Source type: Tier A / railway official
- Published / updated: Current page
- Accessed: 2026-09-02
- 確認内容: 中央線C13、JR接続。

### 6. Current route calibration — 弁天町→なんば
- URL: https://transit.yahoo.co.jp/search/result/%E5%BC%81%E5%A4%A9%E7%94%BA-%E3%81%AA%E3%82%93%E3%81%B0%28%E5%9C%B0%E4%B8%8B%E9%89%84%29
- Source type: Tier B / current route engine
- Published / updated: 2026-08-31 current timetable data
- Accessed: 2026-09-02
- 確認内容: 約15分・240円・1回乗換の例。

### 7. 551HORAI 本店 official
- URL: https://www.551horai.co.jp/shop/list/13/
- Source type: Tier A / venue official
- Published / updated: Current 2026 store schedule
- Accessed: 2026-09-02
- 確認内容: 1F10:00〜21:30、restaurant11:00〜21:30 L.O.、9/7営業予定、なんば11番出口徒歩1分。

### 8. Internal venue guide — 551蓬莱 本店
- URL: `docs/research/venue-guides/551-horai-honten.md`
- Source type: Internal synthesized research
- Last researched: 2026-09-02
- Accessed: 2026-09-02
- 確認内容: 11:45 seating gate、12:20 hard exit、45〜60分標準。

### 9. 戎橋筋商店街 official access
- URL: https://www.dotonbori.or.jp/shoppingstreet_access.html
- Source type: Tier A / shopping-street official
- Published / updated: Current page
- Accessed: 2026-09-02
- 確認内容: 高島屋〜戎橋の南北約370m、アーケード、なんばからの接続。

### 10. Internal venue guide — 道頓堀・なんば
- URL: `docs/research/venue-guides/dotonbori-namba.md`
- Source type: Internal synthesized research
- Last researched: 2026-09-02
- Accessed: 2026-09-02
- 確認内容: 75〜105分、一方向徒歩ルート、14:00終了、追加フード10分上限。

### 11. 心斎橋PARCO official info
- URL: https://shinsaibashi.parco.jp/info/
- Source type: Tier A / venue official
- Published / updated: Current page
- Accessed: 2026-09-02
- 確認内容: 物販10:00〜20:00、住所、アクセス。

### 12. 心斎橋PARCO official event list
- URL: https://shinsaibashi.parco.jp/event/
- Source type: Tier A / venue official
- Published / updated: Current 2026 event schedule
- Accessed: 2026-09-02
- 確認内容: 9/7開催中のPUPPET SUNSUN、Urumia、呪術廻戦5周年POP UP、ザ・森東等。

### 13. Internal venue guide — 心斎橋PARCO
- URL: `docs/research/venue-guides/shinsaibashi-parco.md`
- Source type: Internal synthesized research
- Last researched: 2026-09-02
- Accessed: 2026-09-02
- 確認内容: 90〜120分、5F→6F→9F、16:20 regroup / 16:30 exit。

### 14. ポルタイン弁天町 official / internal guide
- URL: https://portainn.jp/
- Source type: Tier A / hotel official + internal synthesized research
- Last researched: 2026-09-02
- Accessed: 2026-09-02
- 確認内容: JR中央南口至近、Metro4番出口約2分、check-in-day luggage storage、Day1荷物ハブ運用。

### 15. Osaka Metro — Enjoy Eco Card
- URL: https://subway.osakametro.co.jp/guide/page/enjoy-eco.php
- Source type: Tier A / railway official
- Published / updated: Current 2026 fare
- Accessed: 2026-09-02
- 確認内容: 平日大人820円。Base routeのMetro約480円に対し割高。

### 16. 心斎橋筋商店街 official
- URL: https://www.shinsaibashi.or.jp/
- Source type: Tier A / shopping-street official
- Published / updated: 2026 current site
- Accessed: 2026-09-02
- 確認内容: 心斎橋筋を歩いて楽しむ商店街導線、PARCOとの連続性。

## Open questions

- 9/7当日の鹿児島→伊丹便に預け荷物があるか。08:55バス実現可能性はこれで大きく変わる。
- Mの新大阪到着実績時刻。10:15を越えれば551のレストラン比率を下げる。
- 9/7当日のJR大阪駅乗換混雑と運行状況。
- 551の実待ち時間。
- PARCOの期間限定イベントで当日整理券/入場規制が出るか。
- 梅田追加は同日16:30の3人の体力でのみ判断する。

Next target: PHASE 2 — Day 2 Kyoto East optimization (`docs/research/day-optimization/day2-kyoto-east.md`)
