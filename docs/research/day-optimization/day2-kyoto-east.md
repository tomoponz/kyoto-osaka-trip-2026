# Day 2 Kyoto East → Northwest Optimization

Last researched: 2026-09-02 21:25 JST  
Status: RESEARCHED  
Confidence: HIGH for current itinerary, current 2026-09 transport timetables and official venue/access facts / MEDIUM for taxi travel time, queues, weather and same-day crowd conditions

## 結論

Current authority `trip-data.js` の Day 2 は、

**弁天町 → 京都第一ホテル → 三十三間堂 → 清水寺 → 二年坂・三年坂 → 金閣寺 → 龍安寺 → 京都駅 → 本家 第一旭**

という順序である。この**順番自体は維持してよい**。東山を南から北へ処理した後、午後に京都市北西部へ一度だけ横断し、金閣寺→龍安寺を連続処理する構造だからである。

ただし、この日は施設滞在時間より**施設間接続がボトルネック**。特に次の3区間を固定ルール化する必要がある。

1. **京都第一ホテル → 三十三間堂:** 10:18 九条車庫前発208系統を第一候補。現行2026-03-20ダイヤでは、同便は博物館三十三間堂前に10:29頃着となる組合せ。10:18を逃したら次の10:48を待たず、タクシー等へ切り替える。
2. **三十三間堂 → 清水寺:** 市バス86/106/206で直結するが、現行旅程の20〜25分接続は待ち時間＋五条坂/清水道からの上り徒歩を考えると脆い。**3人なら短距離タクシーを本線**にする価値が高い。
3. **清水寺エリア → 金閣寺:** Day 2最大の横断。公共交通だけで節約すると1時間級になりやすい。**タクシーを本線候補**とし、3人で割って30分前後を買う。ここで30分程度短縮できれば、午後の金閣寺・龍安寺を落ち着いて回せる。

さらに、現在の**西日本JRバス高雄京北線 2026-04-01改正時刻表**では、平日の龍安寺前から京都駅へ **16:35発 → 17:11着** の直通便がある。これを Day 2後半の重要な時刻アンカーとする。龍安寺は16:25頃退出を目標にする。

### 推奨ベースタイムライン

| 時刻 | 行動 | 運用判断 |
|---|---|---|
| 06:30〜07:00 | ポルタイン弁天町 朝食 | 前日疲労を見て無理に長居しない |
| 08:00〜08:30 | チェックアウト | 8:30を上限とする |
| **08:50前後** | 弁天町発 | JR大阪経由で京都へ。現行経路例は08:50→09:38、48分・840円・1回乗換 |
| **09:38頃** | 京都駅着 | 大荷物を持ってホテルへ |
| 09:45〜10:05 | 京都第一ホテル | 荷物預けは5〜15分を基本。部屋待ちはしない |
| 10:05〜10:12 | 九条車庫前へ | ホテル至近のバス停へ移動 |
| **10:18** | 九条車庫前 208発 | 東福寺・東山七条経由 |
| **10:29頃** | 博物館三十三間堂前 | 現行時刻表の対応時刻 |
| **10:30〜11:05** | 三十三間堂 | 本堂最優先。11:05退出目標、11:10絶対上限 |
| **11:05〜11:25** | 清水寺方面へ | タクシー優先。降車後の坂徒歩も含める |
| **11:25〜12:40** | 清水寺 | 舞台・奥の院を確保。音羽の瀧の長い列は切る |
| 12:40〜12:45 | 三年坂側へ離脱 | 寺内追加滞在をしない |
| **12:45〜13:25** | 三年坂・二年坂 / 昼食 | 40分圧縮。待ち10分超の店は切る |
| **13:25〜13:35** | タクシー乗車地点へ | 車両進入不可の清水坂に配車ピンを置かない |
| **13:30前後** | 金閣寺へ出発 | タクシー本線。アプリ表示ETA/料金を確認 |
| 14:00〜14:10目安 | 金閣寺着 | 道路状況で変動。14:20までなら旅程は維持可能 |
| **14:05〜15:05目安** | 金閣寺 | 55〜60分。正面写真→順路→不動堂まで |
| **15:18候補** | 金閣寺道 59発 | 龍安寺方面。余裕を持って停留所へ |
| 15:25前後 | 龍安寺着 | 59を逃した場合は18分徒歩を比較 |
| **15:25〜16:25** | 龍安寺 | 石庭で15〜20分座る時間を死守 |
| **16:35** | 龍安寺前 JRバス発 | 2026-04-01改正の平日時刻表。京都駅直通 |
| **17:11** | 京都駅着 | First Asahiへ直接移動し、ホテル往復を挟まない |
| 17:20〜17:40 | 本家 第一旭 到着 | 列を確認。30〜45分待ちなら基本継続 |
| 18:00前後〜 | 夕食 | 60分超待ち＋強い疲労なら代替検討 |
| 食後 | 京都第一ホテル | チェックイン・休息。翌日12:30 Nintendo Museum固定を守る |

このタイムラインは**旅程確定変更ではなく、Phase 2 RECOMMENDATION**。Production `trip-data.js` は変更しない。

## Current authority note — 既存Venue Guideの日付差異

金閣寺・龍安寺の個別Venue Guideには、作成時点の旧旅程に基づく**9/10・Day 4**の文脈が残る。

現在のauthorityは `trip-data.js` であり、両施設は**9/8（火）Day 2午後**に移動済み。

したがって、

- 施設の料金・営業時間・見どころ・所要時間 → 個別Venue Guideを利用
- 曜日別交通・前後接続・CUT RULE → **本Day 2 optimizationを優先**

とする。

特に金閣寺道59系統は、現在の2026-03-20ダイヤの**火曜＝平日**欄を使用する。

## 1. 弁天町 → 京都

### 推奨: JR 弁天町 → 大阪 → 京都

2026年9月時刻表を反映する現在の経路検索では、代表例として:

- 08:50 弁天町
- 大阪駅で1回乗換
- 09:38 京都
- **48分**
- **840円**

が確認できる。

別時間帯でも43〜48分程度・840円・大阪駅1回乗換の例が継続している。

**運用:** current `trip-data.js` の08:30〜09:45移動枠は成立するが、08:30ちょうど発を成立条件にしない。**08:45〜08:50頃の弁天町駅発を現実的な基準**に置けば、09:38頃京都着→09:45頃ホテル到着が狙える。

### 朝の重要ルール

- ポルタインの朝食・荷造りで8:30を越えてだらだらしない。
- 大阪駅で3人が離れないよう、乗換前に「同じ車両・同じホーム」を確認。
- 京都着後はホテルまで全員の大荷物を持って移動し、その後は終日手ぶらに近い状態にする。

## 2. 京都第一ホテル → 三十三間堂

京都第一ホテル公式は、

- 京都駅八条西口から徒歩約6分
- 地下鉄九条駅2番出口から徒歩約2分
- **九条車庫前バス停が近い**

という立地。

ホテルはチェックイン前の荷物預かりに対応するため、09:45〜10:15の枠を「30分休憩」にせず、**5〜15分で荷物を渡す**。

### 10:18の208を使う

2026-03-20実施の京都市バス現行平日時刻表:

**九条車庫前 208系統**
- 09:48
- **10:18**
- 10:48

経路は:

九条車庫前  
↓  
地下鉄九条駅前  
↓  
東福寺  
↓  
東山七条  
↓  
**博物館三十三間堂前**

同じ208系統の博物館三十三間堂前の現行平日時刻表では**10:29**がある。よって10:18九条車庫前発→10:29頃三十三間堂前は、今回に非常に合う。

### Decision gate

- **10:12までにホテル側を離脱できる:** 10:18 208を狙う。
- **10:18を逃した:** 10:48を待たない。
- 次便待ち30分は、三十三間堂40分枠そのものに近い。
- 遅れた場合はタクシーまたは即時の代替交通へ切り替える。

## 3. 三十三間堂 10:30〜11:05

既存Venue Guideの推奨をそのまま使う。

### KEEP

1. 千体千手観音
2. 中尊
3. 二十八部衆
4. 風神・雷神
5. 長大な本堂のスケール確認

### CUT FIRST

- 庭園をゆっくり歩く
- 南大門・太閤塀の詳細
- 長い授与品選び
- タッチパネルを長時間使う

**11:05退出目標、11:10絶対上限。**

Day 2で三十三間堂を入れる価値は高いが、ここを60分化して清水寺以降を遅らせる価値は低い。

## 4. 三十三間堂 → 清水寺

### 公共交通

博物館三十三間堂前からは、京都市バス停留所公式で

- 86
- 106
- 206

が**清水寺・祇園方面**へ向かう。

ただし、バスを降りても清水寺までは五条坂/清水道から上り徒歩が必要。京都市公式も、京都のバスは道路事情で時間がかかる可能性を明記している。

### 今回はタクシー優先

第三者のNAVITIME現行検索例では、三十三間堂→清水寺が

- 約2.5km
- 約8分
- 約1,000円/台

の概算例。料金・時間は渋滞で変わるため**推定**だが、3人なら約333円/人の規模。

**RECOMMENDATION:** 11:05退出ならタクシーを優先。バスが目の前に来ていて空いている場合だけ86/106/206を選ぶ。

この短距離タクシーは「贅沢」ではなく、**20分しかない脆い接続を安定させる保険**として費用対効果が高い。

## 5. 清水寺 11:25〜12:40

清水寺公式は9/8時点の通常期に6:00〜18:00の範囲。既存Venue Guideでは標準75〜90分を推奨。

今回の75分前後では:

仁王門・三重塔  
↓  
本堂 / 清水の舞台  
↓  
奥の院から舞台を見る  
↓  
音羽の瀧は列を確認  
↓  
三年坂方面へ退出

### 12:10 decision gate

12:10時点で音羽の瀧が長蛇なら**切る**。

清水寺で「あと15分」を使うと、その15分は:

- 二年坂ランチ
- タクシー乗車
- 金閣寺
- 龍安寺16:35 JRバス

まで連鎖する。

**12:40〜12:45離脱を優先。**

### 当日朝の混雑チェック

京都市公式「観光快適度マップ」は2026-08-17更新で、**清水坂〜ねねの道**、**金閣寺道付近**等の予測/ライブ情報を提供している。

9/8朝に確認し、清水エリアが非常に混んでいる場合は写真待ち・飲食待ちの上限をさらに短くする。

## 6. 二年坂・三年坂 / 昼食 12:45〜13:25

今回、ここは**観光地＋昼食＋西側移動へのアプローチ**として扱う。

### 40分運用

- 三年坂・二年坂の町並みを見る
- 写真は2〜3地点
- 昼食は速く決める
- 買物は原則1店まで
- **行列10分超の店は切る**

既存Venue Guideでも、60分で「散策＋着席昼食」はかなり圧縮と評価している。今回さらに午後の安定を優先し、**長い着席ランチではなく短時間ランチ**を選ぶ。

### 9/8火曜に注意

周辺の個別店舗は火曜休業がある。例えば二年坂の「釜座 KAMANZA」は公式に火曜定休。特定店を当日まで本線に固定せず、営業中かつ待ちの短い店を選ぶ。

## 7. 東山 → 金閣寺 — Day 2最大の判断

京都市公式は、市内観光で**鉄道・地下鉄を主軸にし、バスは最後の区間へ組み合わせる**ことを推奨している。バスだけで長距離を横断すると、混雑や道路状況で予想以上に時間がかかる可能性がある。

清水エリア→金閣寺はまさにその典型。

### Plan A — タクシー（今回推奨）

2026年8月更新のDiDi京都ガイドでは、清水寺→金閣寺の概算を:

- **約4,390円/台**
- **約30分**

としている。

京都府タクシー協会の現行運賃目安でも、京都駅→金閣寺3,500円、河原町→金閣寺3,200円など、北西部への移動が3,000円台規模になることを確認できる。ただし実料金は渋滞・低速走行・迎車等で増える。

3人なら4,390円を単純割りして**約1,463円/人**。

### Plan B — 公共交通

第三者の現在経路比較では、清水寺→金閣寺は公共交通でおよそ1時間〜1時間半の例がある。京都市も長距離バス移動より鉄道＋バスを推奨している。

### Taxi decision rule

13:20〜13:25にアプリ/現地で確認し:

- **予想料金 ≤ 約5,000円/台**
- **ETA ≤ 約35分**
- 公共交通より**15〜20分以上短い**

ならタクシーを選ぶ。

これは公式ルールではなく、今回の旅行専用RECOMMENDATION。

**理由:** 1人あたり追加約1,000円前後の支出で30分規模を買える可能性があり、その30分を金閣寺と龍安寺の両方へ変換できるため。

### 乗車地点

2026年DiDiガイドは、清水寺からのタクシー乗車地点として**五条坂**を推奨し、清水坂は車両進入不可と注意している。

二年坂側へ下った後の現在地によっては東山安井側等も候補になるが、**車両が合法的に停車できる大通り側へ出てから配車**する。寺境内や清水坂へ配車ピンを置かない。

## 8. 金閣寺 14:05〜15:05目安

公式参拝時間は9:00〜17:00。現行料金は大人500円。

既存Venue Guideでは55〜70分を推奨しているため、**60分で十分成立**する。

### 60分ルート

受付  
↓  
鏡湖池越しの金閣で3人の写真をまとめて確保  
↓  
順路を一方向に進む  
↓  
龍門滝・安民沢  
↓  
夕佳亭  
↓  
不動堂  
↓  
退出

### CUT

- 写経
- 長い茶所休憩
- 大量の土産比較
- 同じ正面位置へ写真の撮り直しで戻る

**15:05前後の退出を狙う。**

## 9. 金閣寺 → 龍安寺

### Current 9/8 Tuesday timetable

金閣寺道59系統・龍安寺方面の2026-03-20平日時刻表:

- 14:18
- 14:38
- 14:58
- **15:18**
- **15:38**
- 15:53
- 16:08…

### Walk vs bus rule

きぬかけの路公式は:

- 金閣寺→龍安寺 **徒歩約18分**

と案内。

したがって:

- 15:05頃に金閣寺を出られ、15:18に余裕をもって乗れそう → **59系統**
- バスが5〜7分以内に来ない / 乗り場混雑 → **徒歩18分**
- 雨・猛暑・強い疲労 → 待ちが多少あってもバス

**15:18を逃して15:38まで20分待つくらいなら、天候良好時は歩いた方が時間を読みやすい。**

## 10. 龍安寺 15:25〜16:25

既存Venue Guideの推奨55〜70分に合う。

### 優先順位

1. 方丈石庭
2. **縁側で15〜20分座る**
3. 知足のつくばい
4. 方丈周辺
5. 鏡容池

龍安寺は「歩数を稼ぐ寺」ではなく、石庭前に座る時間が価値。ここを30分の写真スポットにしない。

### 16:20 time call

16:20になったら:

- 御朱印追加
- 売店
- 池周辺の追加写真

を終了し、**16:25退出**を狙う。

## 11. 龍安寺 → 京都駅 — 16:35 JRバスを時刻アンカーにする

### 重要な鮮度更新

西日本JRバスは**2026-04-01に高雄京北線をダイヤ改正**し、系統番号47/47S/48/48S/49を付与、運行本数も見直している。

したがって、**2026年2〜3月以前の時刻表を使わない。**

2026-04-01改正の現行平日時刻表では、京都駅方面:

| 龍安寺前 | 京都駅前 |
|---:|---:|
| 15:35 | 16:11 |
| 15:55 | 16:31 |
| **16:35** | **17:11** |
| 17:35 | 18:11 |

今回に最も合うのは**16:35→17:11**。

### Miss rule

**16:35を逃したら17:35を1時間待たない。**

Fallback:

龍安寺  
↓ 徒歩約7〜8分  
嵐電 龍安寺駅  
↓  
撮影所前  
↓ 徒歩  
JR太秦  
↓  
京都駅

現在の経路検索例では龍安寺駅→京都駅が**約38分・450円・乗換1回**。嵐電公式も龍安寺→撮影所前の北野線移動を約9分相当、昼間は概ね10分間隔としている。

よって16:35直通を逃しても、**鉄道へ即切替**すれば17時台前半〜半ばの京都駅到着を狙える。

雨・強い疲労・複数の交通障害時は、京都府タクシー協会の京都駅↔龍安寺目安が3,700円/台なのでタクシーも最終Fallback。ただし実料金は変動。

## 12. 京都駅 → 本家 第一旭

JRバス16:35→17:11が成立した場合、**ホテルへ戻らず第一旭へ直接行く。**

本家第一旭公式:

- 京都駅徒歩4分
- 6:00〜25:00
- 木曜定休
- 9/8は火曜
- ラーメン980円
- 31席

既存Researchでは平日17〜18時にも約30分待ちの訪問例がある。

### Queue rule

- 0〜30分見込み → 入る
- 30〜45分 → 基本入る
- 45〜60分 → 3人の疲労で判断
- **60分超が明白＋全員疲労 → 代替夕食を検討**

翌9/9はNintendo Museum 12:30固定。第一旭のために夜の回復時間を大幅に削らない。

## 13. 地下鉄・バス1日券は買うべきか

現行価格:

- 地下鉄・バス1日券: **大人1,100円**
- 市バス均一区間: **1乗車230円**

1日券は市バス・地下鉄のほか、一部京都バス・京阪バス・西日本JRバスにも使える。

ただし今回の**推奨タクシー混用ルート**では、公共交通の主な利用は:

- 九条車庫→三十三間堂 208
- 金閣寺→龍安寺 59（歩く場合は不要）
- 龍安寺→京都 JRバス

程度。

したがって、**Base planでは1日券を先に買わず、ICOCA等で都度払いを推奨。**

逆に当日、タクシーを使わず「すべて公共交通」に切り替えるなら、地下鉄・バス利用回数を再計算して1日券を検討する。

## 14. 予算

### 固定観光費 / 1人

- 三十三間堂: 600円
- 清水寺: 500円
- 金閣寺: 500円
- 龍安寺: 600円

**計2,200円**

### 主な移動

- 弁天町→京都: 840円/人（現行代表経路）
- 市バス: 1乗車230円の区間が中心
- 三十三間堂→清水寺タクシー: 約1,000円/台の第三者概算例 → 3人なら約333円/人
- 清水寺→金閣寺タクシー: 約4,390円/台の2026年DiDi概算 → 3人なら約1,463円/人
- タクシーは交通・迎車で上振れあり

### 食事

- 昼: 1,000〜2,000円程度を上限目安に、時間優先
- 第一旭: ラーメン980円〜。餃子等追加で1,500円前後も想定

**RECOMMENDATION:** この日は「100円単位の交通節約」より、**3人でタクシーを割って30分を買う区間を限定する**方が旅行全体の費用対効果が高い。

## 15. 3人旅行の運用ルール

### 1. タクシー料金は3分割前提で判断

1台4,500円は高く見えるが、1人1,500円。30分以上と寺1か所分の余裕を生むなら価値がある。

### 2. 全員同じ写真を3回撮り直さない

金閣寺・清水寺の代表ポイントは、1人が連続で撮って3人分を処理する。

### 3. 昼食の店選びは多数決を長引かせない

13時台の金閣寺横断を優先。候補を2店までに絞り、10分待ち上限。

### 4. ICカードと現金を両方

寺社では現金を安全策とし、交通はIC中心。

### 5. 遅れを隠さない

一人のトイレ・買物・疲労で10分遅れたら、その場で共有して次のCUT RULEを発動する。

## 16. 荷物

- 大荷物は京都第一ホテルへ預ける。
- 寺社をキャリーケースで回らない。
- 手元は財布・スマホ・モバイルバッテリー・飲料・折畳傘程度。
- 寺社拝観料用に**最低3,000円程度の現金**を別に確保すると安全。

## 17. 雨天・暑さ

### 雨

- 清水寺・三年坂・二年坂の石段は急がない。
- 金閣寺→龍安寺は徒歩18分をやめ、59系統を優先。
- 濡れた状態で「16:35バスのために走る」は禁止。龍安寺を5分早く切る。

### 暑さ

9月上旬の京都は高温が残る可能性がある。

- 清水寺上り坂
- 金閣寺→龍安寺徒歩

が疲労ポイント。

「移動を節約するための徒歩」が午後の観光品質を下げるなら、230円のバスや3人割タクシーへ切り替える。

## 18. CUT RULE

### 15分遅れ

**KEEP:** 全施設。  
**CUT:** 三十三間堂庭園、清水寺音羽の瀧長待ち、坂の買物、金閣寺茶所/土産、龍安寺売店。

タクシー利用を予定どおり行い、遅れを次区間へ渡さない。

### 30分遅れ

**朝に遅れた場合:**
- 三十三間堂を30〜35分へ
- 三十三間堂→清水寺はタクシー固定
- 昼食を20〜25分へ

**午後に遅れた場合:**
- 金閣寺45〜50分
- 金閣寺→龍安寺は待ち時間次第で即徒歩/即バス
- 龍安寺45〜50分。ただし石庭10〜15分着座は残す

### 60分遅れ

#### 10:30以前に60分遅れ

**三十三間堂をCUT候補の最優先**にする。

理由:
- 三十三間堂だけを無理に残すと、清水寺→金閣寺→龍安寺すべてへ遅れが波及する。
- 清水寺はDay 2東山の中心。
- 金閣寺＋龍安寺は地理的にセット化でき、午後の移動効率が高い。

ホテル→清水寺へ直接寄せる。

#### 清水寺後に60分遅れ

- 二年坂・三年坂は通過＋最短昼食
- 東山→金閣寺はタクシー
- 金閣寺40〜45分
- 龍安寺35〜45分
- 16:35 JRバスが厳しければ鉄道Fallbackへ

### 90分以上遅れ

#### 午前から90分以上

**三十三間堂を切る。**

清水寺  
→ 短い二年坂/三年坂  
→ タクシーで金閣寺  
→ 龍安寺

の3エリアへ絞る。

#### 13:30時点で90分以上遅れ

金閣寺到着見込みが**15:30以降**になるなら、4施設完遂へ固執しない。

優先:
1. 清水寺
2. 金閣寺
3. 龍安寺
4. 三十三間堂（朝の段階で切れるなら切る）

ただし、すでに三十三間堂を見終えている場合は「見た場所をなかったこと」にせず、**龍安寺を35〜40分へ短縮**して夕方へ接続する。

### 重要

この日は9/9 Nintendo Museumのような午後固定予約はないため、First Asahiを多少後ろへずらすことは可能。

しかし「固定がない＝無制限に遅れてよい」ではない。翌日の体力を守るため、**19時台には夕食へ入り、夜を回復時間として残す**。

## 19. Same-day decision sheet

9/8朝、以下だけ確認すればよい。

- [ ] JR 弁天町→京都の運行状況
- [ ] 京都第一ホテル荷物預け受付
- [ ] 10:18 九条車庫前208の接近情報
- [ ] 京都観光快適度マップ「清水坂〜ねねの道」
- [ ] 京都観光快適度マップ「金閣寺道付近」
- [ ] 雨・気温
- [ ] 三十三間堂・清水寺・金閣寺・龍安寺の当日公式告知
- [ ] 13:20頃の清水エリア→金閣寺 タクシーETA/概算
- [ ] 15時台の金閣寺道59接近情報
- [ ] 西日本JRバス16:35 龍安寺前→京都駅の運行状況
- [ ] 第一旭の店頭列

## Site-ready summary

**Day 2は「寺を4つ並べる日」ではなく、3つの脆い接続を管理する日。** 10:18九条車庫前208で三十三間堂へ、三十三間堂→清水寺は短距離タクシー、東山→金閣寺は3人割タクシーを基本候補にする。金閣寺後は15:18の59系統か徒歩18分で龍安寺へ。龍安寺を16:25に出て16:35西日本JRバス→17:11京都駅を狙えば、第一旭まできれいにつながる。

### BEST 8 TIPS

1. ホテル荷物預けは10:05頃までに終え、10:18の208を狙う。
2. 10:18を逃して10:48を待たない。
3. 三十三間堂→清水寺は3人割タクシーで時間を買う。
4. 清水寺は12:10時点で音羽の瀧の列を判定。
5. 二年坂・三年坂の昼食は待ち10分上限。
6. 東山→金閣寺は約4,000〜5,000円/台のタクシーを費用対効果で判断。
7. 金閣寺→龍安寺は15:18バスが合えば乗り、合わなければ徒歩18分。
8. 龍安寺16:25退出→16:35 JRバス→17:11京都駅を後半の時刻アンカーにする。

## Sources

### 1. Repository current `trip-data.js`
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/trip-data.js
- Source type: Internal current authority
- Accessed: 2026-09-02
- Confirmed: Day 2 current order, time blocks, hotels, current Kinkakuji/Ryoanji placement.

### 2. Existing venue research — 三十三間堂
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/docs/research/venue-guides/sanjusangendo.md
- Source type: Repository evidence synthesis
- Accessed: 2026-09-02
- Confirmed: 35–45 min compressed visit, 11:05 target exit, must/cut items.

### 3. Existing venue research — 清水寺
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/docs/research/venue-guides/kiyomizu-dera.md
- Source type: Repository evidence synthesis
- Accessed: 2026-09-02
- Confirmed: 75–90 min standard, must sights, Otowa queue cut rule.

### 4. Existing venue research — 二年坂・三年坂
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/docs/research/venue-guides/ninenzaka-sannenzaka.md
- Source type: Repository evidence synthesis
- Accessed: 2026-09-02
- Confirmed: duration, 10-min lunch queue cap, crowd/rain handling.

### 5. Existing venue research — 金閣寺
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/docs/research/venue-guides/kinkakuji.md
- Source type: Repository evidence synthesis
- Accessed: 2026-09-02
- Confirmed: 55–70 min, 500 yen, must/cut route. Date-specific Day 4 routing is superseded by current trip-data and this file.

### 6. Existing venue research — 龍安寺
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/docs/research/venue-guides/ryoanji.md
- Source type: Repository evidence synthesis
- Accessed: 2026-09-02
- Confirmed: 55–70 min, stone-garden sit time, core sights. Date-specific Day 4 routing is superseded by current trip-data and this file.

### 7. Existing venue research — 本家第一旭
- URL: https://github.com/tomoponz/kyoto-osaka-trip-2026/blob/main/docs/research/venue-guides/honke-daiichiasahi-honten.md
- Source type: Repository evidence synthesis
- Accessed: 2026-09-02
- Confirmed: 60–80 min including queue, weekday evening queue behavior, fatigue cut rule.

### 8. Yahoo!路線情報 — 弁天町→京都
- URL: https://transit.yahoo.co.jp/search/result?all=1&from=%E5%BC%81%E5%A4%A9%E7%94%BA&stype=&to=%E4%BA%AC%E9%83%BD
- Source type: Tier B/current route data
- Current data note: JR timetable shown as 2026年9月 current
- Accessed: 2026-09-02
- Confirmed: 43–48 min-class routes, 840 yen, Osaka transfer.

### 9. 京都市バス — 九条車庫前 208
- URL: https://www2.city.kyoto.lg.jp/kotsu/busdia/hyperdia/11710006.htm
- Source type: Tier A / 京都市交通局
- Effective: 2026-03-20
- Accessed: 2026-09-02
- Confirmed: weekday 09:48 / 10:18 / 10:48, route via Sanjusangendo.

### 10. 京都市バス — 博物館三十三間堂前 208
- URL: https://www2.city.kyoto.lg.jp/kotsu/busdia/hyperdia/91020005.htm
- Source type: Tier A / 京都市交通局
- Effective: 2026-03-20
- Accessed: 2026-09-02
- Confirmed: weekday 10:29 at Sanjusangendo stop and route to Kyoto station.

### 11. 京都市バス — 博物館三十三間堂前 stop menu
- URL: https://www2.city.kyoto.lg.jp/kotsu/busdia/hyperdia/menu910.htm
- Source type: Tier A / 京都市交通局
- Accessed: 2026-09-02
- Confirmed: 86/106/206 direct toward Kiyomizu/Gion.

### 12. 京都観光Navi — 交通案内 京都を巡る
- URL: https://ja.kyoto.travel/feature/traffic.php
- Source type: Tier A / 京都市観光協会・京都市公式観光情報
- Accessed: 2026-09-02
- Confirmed: use rail/subway plus bus; buses can take unexpectedly long; leave large luggage.

### 13. 京都観光Navi — 観光快適度マップ
- URL: https://ja.kyoto.travel/comfort/
- Source type: Tier A / 京都市公式観光情報
- Updated: 2026-08-17
- Accessed: 2026-09-02
- Confirmed: current crowd forecast/live information for 清水坂〜ねねの道 and 金閣寺道付近.

### 14. 清水寺 official
- URL: https://www.kiyomizudera.or.jp/
- Source type: Tier A / facility official
- Accessed: 2026-09-02
- Confirmed: current official notices/access information and current operation reference.

### 15. DiDi 2026 Kyoto taxi guide
- URL: https://didimobility.co.jp/column/app-osusume-kyoto/
- Source type: Tier B / taxi operator practical guide
- Published: 2026-08
- Accessed: 2026-09-02
- Confirmed: Kiyomizu→Kinkaku approx 4,390 yen / 30 min; use Gojozaka vehicle-accessible pickup and do not pin Kiyomizuzaka.

### 16. 京都府タクシー協会 — 主要観光地へのタクシー運賃目安
- URL: https://kyoto-taxi.or.jp/farelist/
- Source type: Tier A / industry association
- Accessed: 2026-09-02
- Confirmed: current fare scale; Kyoto station→Sanjusangendo 800, Kiyomizu 1,400, Kinkakuji 3,500, Ryoanji 3,700 yen; actual meter can vary.

### 17. 金閣寺 official
- URL: https://www.shokoku-ji.jp/kinkakuji/
- Source type: Tier A / facility official
- Accessed: 2026-09-02
- Confirmed: 9:00–17:00, Kinkakuji-michi access.

### 18. 京都市バス — 金閣寺道 59 龍安寺方面
- URL: https://www2.city.kyoto.lg.jp/kotsu/busdia/hyperdia/22132002.htm
- Source type: Tier A / 京都市交通局
- Effective: 2026-03-20
- Accessed: 2026-09-02
- Confirmed: weekday 14:18/14:38/14:58/15:18/15:38 etc; stops include Ryoanji-mae.

### 19. きぬかけの路 official regional portal
- URL: https://kinukake.com/
- Source type: Tier A/B local official tourism portal
- Accessed: 2026-09-02
- Confirmed: Kinkakuji→Ryoanji walk about 18 min.

### 20. 西日本JRバス — 2026-04-01 timetable revision notice
- URL: https://www.nishinihonjrbus.co.jp/news/detail/2043
- Source type: Tier A / operator official
- Published: 2026-03-05
- Accessed: 2026-09-02
- Confirmed: 2026-04-01 revision, new route numbers, old timetable must not be used.

### 21. 西日本JRバス — 高雄京北線 2026-04-01 current timetable
- URL: https://www.nishinihonjrbus.co.jp/trans/route/kyoto/pdf/takaokeihoku_20260401.pdf
- Source type: Tier A / operator official
- Effective: 2026-04-01
- Accessed: 2026-09-02
- Confirmed: weekday Ryoanji-mae 16:35 → Kyoto Sta 17:11; next direct 17:35 → 18:11.

### 22. 嵐電 official timetable/route page
- URL: https://www.keifuku.co.jp/randen_timetable.php
- Source type: Tier A / operator official
- Accessed: 2026-09-02
- Confirmed: Ryoanji→Satsueisho-mae direction/time scale and approximately 10-minute daytime frequency.

### 23. 本家第一旭 official shop page
- URL: https://www.honke-daiichiasahi.com/shop.html
- Source type: Tier A / restaurant official
- Accessed: 2026-09-02
- Confirmed: 6:00–25:00, Thursday closed, Kyoto station walk 4 min, 31 seats, current menu/payment.

### 24. 京都市交通局 — 地下鉄・バス1日券
- URL: https://oneday-pass.kyoto/overview/
- Source type: Tier A / 京都市交通局
- Accessed: 2026-09-02
- Confirmed: adult 1,100 yen, one calendar day, current covered operators.

### 25. 京都市交通局 — 市バス運賃
- URL: https://www.city.kyoto.lg.jp/kotsu/page/0000204850.html
- Source type: Tier A / 京都市交通局
- Accessed: 2026-09-02
- Confirmed: uniform-zone city-bus adult fare 230 yen.

## Open questions / 直前確認

- 09-08朝のJR大阪環状線・京都線運行状況。
- 京都第一ホテル荷物預けに実際何分かかるか。
- 10:18九条車庫前208のリアルタイム接近状況。
- 三十三間堂→清水寺でタクシーが即時捕まるか。
- 清水寺周辺の当日歩行混雑。
- 清水寺→金閣寺の13:20時点のタクシー実料金・ETA。4,390円/30分は概算で保証値ではない。
- 15:18金閣寺道59の接近・混雑。
- 16:35龍安寺前→京都駅の西日本JRバス運行状況。
- 第一旭の17時台実待ち時間。
- 雨・暑さによる徒歩速度低下。

Next target: PHASE 2 — Day 3 Nintendo Museum optimization (`docs/research/day-optimization/day3-nintendo.md`)
