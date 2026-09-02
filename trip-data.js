window.TRIP_DATA = {
  meta: {
    title: 'KYOTO / OSAKA TRIP 2026',
    startDate: '2026-09-07',
    endDate: '2026-09-10',
    timezone: 'Asia/Tokyo',
    updatedAt: '2026-09-02',
    budgetTarget: 80000,
    budgetSoftTarget: 70000,
    budgetCeiling: 90000
  },
  fixed: [
    '9/7 伊丹空港でHと合流',
    '9/7 新大阪駅でMと合流',
    '9/9 Nintendo Museum 12:30〜',
    '9/10 伊丹空港 20:05発'
  ],
  stays: [
    { dates:'9/7 → 9/8', name:'ポルタイン弁天町', note:'1泊目｜朝食 6:30〜9:00。チェックイン前の荷物預かりを活用。', price:4845, official:'https://portainn.jp/', mapQuery:'ポルタイン弁天町' },
    { dates:'9/8 → 9/10', name:'京都第一ホテル', note:'2・3泊目｜京都駅八条西口から徒歩約6分、地下鉄九条駅から徒歩約2分。', price:6806, official:'https://www.kyoto-1-hotel.jp/', mapQuery:'京都第一ホテル' }
  ],
  days: [
    {
      date:'2026-09-07', dayNo:1, city:'OSAKA', title:'大阪・ミナミをゆるく回る',
      lead:'移動日。荷物を置いて、551・道頓堀・心斎橋PARCOに絞る。梅田は余力枠。',
      route:['鹿児島空港','伊丹空港','新大阪','弁天町','なんば','道頓堀','心斎橋PARCO','弁天町'],
      events:[
        {time:'05:00',title:'起床',detail:'05:30自宅出発。親の送迎で鹿児島空港へ。',type:'move'},
        {time:'06:30',title:'鹿児島空港',detail:'保安検査・搭乗準備。',mapQuery:'鹿児島空港',type:'move'},
        {time:'07:35',title:'鹿児島空港 発',detail:'伊丹空港へ。',type:'fixed'},
        {time:'08:45',title:'伊丹空港 着 / Hと合流',detail:'合流後は新大阪へ。',mapQuery:'大阪国際空港 伊丹空港',type:'fixed'},
        {time:'09:00〜',title:'伊丹空港 → 新大阪',detail:'空港リムジンバスを本線。時刻は当日再確認。',mapQuery:'新大阪駅',type:'move'},
        {time:'09:35〜10:15',title:'新大阪でMと合流',detail:'Mの到着時刻に合わせて調整。',mapQuery:'新大阪駅',type:'fixed'},
        {time:'10:15〜11:20',title:'弁天町へ / 荷物預け',detail:'ポルタイン弁天町に荷物を預ける。',mapQuery:'ポルタイン弁天町',type:'move'},
        {time:'11:30前後',title:'551蓬莱 本店',detail:'昼食。混雑時は売店テイクアウトに切替。',mapQuery:'551蓬莱 本店',official:'https://www.551horai.co.jp/shop/list/13/',type:'food'},
        {time:'12:15〜14:00',title:'道頓堀・なんば',detail:'戎橋、グリコ看板、商店街。詰め込みすぎない。',mapQuery:'道頓堀 戎橋',type:'spot'},
        {time:'14:30〜16:30',title:'心斎橋PARCO',detail:'物販・サービスは10:00〜20:00。旅行期間中のPOPUPも確認。',mapQuery:'心斎橋PARCO',official:'https://shinsaibashi.parco.jp/',type:'spot'},
        {time:'16:30〜18:30',title:'自由時間 / 早め夕食',detail:'疲れていたらそのまま弁天町へ。梅田は元気な場合のみ。',type:'option'},
        {time:'夜',title:'ポルタイン弁天町 泊',detail:'翌朝は無料の軽朝食を利用。',mapQuery:'ポルタイン弁天町',official:'https://portainn.jp/',type:'hotel'}
      ]
    },
    {
      date:'2026-09-08', dayNo:2, city:'KYOTO', title:'寺社をまとめて回収',
      lead:'大阪から京都へ。三十三間堂 → 清水寺 → 金閣寺 → 龍安寺。東山から北西へ横断する日なので、清水寺→金閣寺は時間次第でタクシーも検討。',
      route:['弁天町','京都第一ホテル','三十三間堂','清水寺','二年坂・三年坂','金閣寺','龍安寺','京都駅','京都第一ホテル'],
      events:[
        {time:'07:00前後',title:'ポルタインで朝食',detail:'朝食提供 6:30〜9:00。',official:'https://portainn.jp/facilities/',type:'food'},
        {time:'08:00〜08:30',title:'チェックアウト',detail:'荷物を持って京都へ。',type:'move'},
        {time:'08:30〜09:45',title:'弁天町 → 京都',detail:'乗換回数と混雑を見てJR/地下鉄を選択。',mapQuery:'京都第一ホテル',type:'move'},
        {time:'09:45〜10:15',title:'京都第一ホテルに荷物預け',detail:'チェックイン前に預ける。',mapQuery:'京都第一ホテル',official:'https://www.kyoto-1-hotel.jp/',type:'hotel'},
        {time:'10:30〜11:10目安',title:'三十三間堂',detail:'短めに見学して清水寺へ。各拝観時刻は旅行直前に再確認。',mapQuery:'三十三間堂',official:'https://www.sanjusangendo.jp/',type:'spot'},
        {time:'11:30〜12:45目安',title:'清水寺',detail:'境内を見学。二年坂・三年坂まで一続きで回る。',mapQuery:'清水寺',official:'https://www.kiyomizudera.or.jp/',type:'spot'},
        {time:'12:45〜13:30目安',title:'二年坂・三年坂 / 昼食',detail:'長居しすぎず、午後の金閣寺・龍安寺を優先。',mapQuery:'二年坂 京都',type:'food'},
        {time:'13:30〜14:20目安',title:'清水寺エリア → 金閣寺',detail:'この日の最大の移動区間。遅れている場合はタクシーも比較する。',mapQuery:'鹿苑寺 金閣寺',type:'move'},
        {time:'14:20〜15:20目安',title:'金閣寺',detail:'9/8に戻した本線。時間超過しないよう見学。',mapQuery:'鹿苑寺 金閣寺',official:'https://www.shokoku-ji.jp/kinkakuji/',type:'spot'},
        {time:'15:20〜15:40目安',title:'金閣寺 → 龍安寺',detail:'近距離移動。',mapQuery:'龍安寺',type:'move'},
        {time:'15:40〜16:40目安',title:'龍安寺',detail:'石庭を見学。寺社日の最後の本線。',mapQuery:'龍安寺',official:'https://www.ryoanji.jp/',type:'spot'},
        {time:'16:40〜17:40目安',title:'京都駅方面へ戻る',detail:'ホテル休憩またはそのまま夕食へ。',mapQuery:'京都駅',type:'move'},
        {time:'18:00前後',title:'本家 第一旭 本店',detail:'寺社の進行に合わせて前後。混雑時は待ち時間を見て判断。',mapQuery:'本家 第一旭 本店 京都',official:'https://www.honke-daiichiasahi.com/shop.html',type:'food'},
        {time:'夜',title:'京都第一ホテル / 自由',detail:'翌日はNintendo Museum 12:30固定。無理をしない。',mapQuery:'京都第一ホテル',type:'hotel'}
      ]
    },
    {
      date:'2026-09-09', dayNo:3, city:'FUSHIMI / UJI', title:'伏見稲荷は余力枠 → Nintendo Museum',
      lead:'12:30入館が絶対優先。午前に余裕がある場合だけ伏見稲荷を約60分で回り、少しでも遅れたら伏見稲荷を切る。',
      route:['京都第一ホテル','伏見稲荷（余力）','近鉄小倉','Nintendo Museum','京都駅方面','京都第一ホテル'],
      events:[
        {time:'08:00〜09:00',title:'起床・準備',detail:'QRチケット、全員の本人確認書類、モバイルバッテリー確認。',type:'prep'},
        {time:'09:00〜09:40目安',title:'伏見稲荷へ移動',detail:'朝の進行が遅ければ、この時点で伏見稲荷をカットしてNintendo Museum優先に切替。',mapQuery:'伏見稲荷大社',type:'option'},
        {time:'09:50〜10:50目安',title:'伏見稲荷大社',detail:'約60分の短縮コース。山頂は狙わない。Nintendo Museumに影響しそうなら即切り上げる。',mapQuery:'伏見稲荷大社',official:'https://inari.jp/',type:'option'},
        {time:'10:50〜11:30目安',title:'小倉方面へ移動',detail:'遅延余白を残してNintendo Museum方面へ先に寄せる。',mapQuery:'近鉄小倉駅 京都',type:'move'},
        {time:'11:35〜12:00目安',title:'早めの昼食',detail:'小倉周辺を本線。長時間待つ店は避ける。',mapQuery:'近鉄小倉駅 京都',type:'food'},
        {time:'12:00〜12:15目安',title:'Nintendo Museumへ',detail:'12:15頃の現地到着を目標。',mapQuery:'ニンテンドーミュージアム',type:'move'},
        {time:'12:15〜12:30',title:'入館準備',detail:'手荷物検査・QR・本人確認を想定。',mapQuery:'ニンテンドーミュージアム',type:'prep'},
        {time:'12:30',title:'Nintendo Museum 入館',detail:'日時指定で確定。大人3,300円。本人確認書類必須。公共交通で来館。',mapQuery:'ニンテンドーミュージアム',official:'https://museum.nintendo.com/ja/',type:'fixed'},
        {time:'12:30〜15:30',title:'Museum見学',detail:'体験展示はコイン制で、全展示を1回で体験できるとは限らない。',official:'https://museum-tickets.nintendo.com/?lang=ja',type:'spot'},
        {time:'15:30〜16:15',title:'ショップ / 休憩',detail:'買い物上限を決めておく。',type:'shop'},
        {time:'16:15〜17:15',title:'京都方面へ戻る',detail:'夕方以降は当日の体力で決める。',type:'move'},
        {time:'17:15〜',title:'予備枠',detail:'京都駅・河原町・祇園・ホテル休憩など。当日選択。',type:'option'}
      ]
    },
    {
      date:'2026-09-10', dayNo:4, city:'ARASHIYAMA / UZUMASA → ITAMI', title:'嵐山 → 東映太秦映画村 → 伊丹',
      lead:'午前は嵐山を短時間。13:00頃から映画村を本線にして、16:50撤収を上限に伊丹20:05発を守る。',
      route:['京都第一ホテル','嵐山','東映太秦映画村','京都駅方面','伊丹空港'],
      events:[
        {time:'07:00〜08:00',title:'起床・荷造り',detail:'帰路に備える。',type:'prep'},
        {time:'08:00〜08:30',title:'チェックアウト / 荷物預け',detail:'大きな荷物は京都第一ホテルまたは京都駅周辺に預け、嵐山・映画村へ持ち込まない。',mapQuery:'京都第一ホテル',type:'hotel'},
        {time:'08:30〜09:30目安',title:'朝食・移動準備',detail:'午前の時間調整。嵐山への移動を遅らせない。',type:'prep'},
        {time:'09:30〜10:30目安',title:'嵐山へ移動',detail:'当日の交通状況を見てJR等を選択。',mapQuery:'嵐山 竹林の小径',type:'move'},
        {time:'10:50〜11:50目安',title:'嵐山',detail:'竹林の小径を中心に約1時間。映画村の時間を守るため延長しすぎない。',mapQuery:'嵐山 竹林の小径',type:'spot'},
        {time:'11:50〜12:30目安',title:'昼食',detail:'嵐山周辺で時間優先。待ち時間が長い店は避ける。',mapQuery:'嵐山',type:'food'},
        {time:'12:30〜12:50目安',title:'嵐山 → 東映太秦映画村',detail:'13:00頃の入村を目標。',mapQuery:'東映太秦映画村',type:'move'},
        {time:'13:00〜16:50',title:'東映太秦映画村',detail:'9/10午後の本線。16:50を撤収上限として、帰りの飛行機を優先する。',mapQuery:'東映太秦映画村',official:'https://www.eigamura.com/',type:'spot'},
        {time:'16:50〜17:40目安',title:'映画村 → 荷物回収',detail:'京都駅・ホテル方面へ戻り、預けた荷物を回収。',mapQuery:'京都第一ホテル',type:'move'},
        {time:'17:40〜18:40目安',title:'京都 → 伊丹空港',detail:'実際の交通手段・発車時刻は前日に再確認。遅延時は映画村を早めに退出する。',mapQuery:'大阪国際空港 伊丹空港',type:'move'},
        {time:'18:40前後目標',title:'伊丹空港',detail:'搭乗手続き・保安検査へ。',mapQuery:'大阪国際空港 伊丹空港',type:'prep'},
        {time:'20:05',title:'伊丹空港 発',detail:'帰鹿。',type:'fixed'}
      ]
    }
  ],
  spots: [
    {name:'Nintendo Museum',area:'宇治・小倉',category:'遊ぶ',status:'確定',price:'3,300円',note:'9/9 12:30〜。今回の固定イベント。',official:'https://museum.nintendo.com/ja/',mapQuery:'ニンテンドーミュージアム'},
    {name:'三十三間堂',area:'東山・七条',category:'観光',status:'本線',price:'拝観料あり',note:'9/8午前。清水寺の前に短めに回る。',official:'https://www.sanjusangendo.jp/',mapQuery:'三十三間堂'},
    {name:'清水寺',area:'東山',category:'観光',status:'本線',price:'拝観料あり',note:'9/8。二年坂・三年坂とセット。',official:'https://www.kiyomizudera.or.jp/',mapQuery:'清水寺'},
    {name:'伏見稲荷大社',area:'伏見',category:'観光',status:'候補',price:'無料',note:'9/9午前の余力枠。Nintendo Museum優先で、遅れたらカット。',official:'https://inari.jp/',mapQuery:'伏見稲荷大社'},
    {name:'金閣寺',area:'北西京都',category:'観光',status:'本線',price:'拝観料あり',note:'9/8午後。清水寺からの移動時間に注意。',official:'https://www.shokoku-ji.jp/kinkakuji/',mapQuery:'鹿苑寺 金閣寺'},
    {name:'龍安寺',area:'北西京都',category:'観光',status:'本線',price:'拝観料あり',note:'9/8午後。金閣寺から続けて回る。',official:'https://www.ryoanji.jp/',mapQuery:'龍安寺'},
    {name:'嵐山・竹林の小径',area:'嵐山',category:'観光',status:'本線',price:'無料',note:'9/10午前。映画村優先のため約1時間を目安。',mapQuery:'嵐山 竹林の小径'},
    {name:'嵯峨野トロッコ列車',area:'嵐山',category:'遊ぶ',status:'候補',price:'880円目安',note:'9/10へ入れる場合は映画村13:00目標との両立を再設計。',official:'https://www.sagano-kanko.co.jp/',mapQuery:'トロッコ嵯峨駅'},
    {name:'東映太秦映画村',area:'太秦',category:'遊ぶ',status:'本線',price:'入村料あり',note:'9/10 13:00頃〜16:50を本線。伊丹20:05発を優先して撤収。',official:'https://www.eigamura.com/',mapQuery:'東映太秦映画村'},
    {name:'teamLab Biovortex Kyoto',area:'京都駅東南部',category:'遊ぶ',status:'保留',price:'高め',note:'なし寄りのアリ。価格に見合うかで判断。',official:'https://www.teamlab.art/e/kyoto/',mapQuery:'teamLab Biovortex Kyoto'},
    {name:'鞍馬 → 貴船 山越え',area:'洛北',category:'遊ぶ',status:'候補',price:'交通費＋愛山費',note:'半日使うが、京都らしさと冒険感は高い。入れるなら旅程を大きく組み替える。',official:'https://www.kuramadera.or.jp/',mapQuery:'鞍馬寺'}
  ],
  food: [
    {name:'551蓬莱 本店',day:'9/7 昼',status:'本線',tip:'11:30前後。混んでいたら売店へ切替。',official:'https://www.551horai.co.jp/shop/list/13/',mapQuery:'551蓬莱 本店'},
    {name:'本家 第一旭 本店',day:'9/8 夜',status:'本線',tip:'寺社終了後、18:00前後を目安。進行と混雑で前後。',official:'https://www.honke-daiichiasahi.com/shop.html',mapQuery:'本家 第一旭 本店 京都'}
  ],
  budget: [
    {label:'航空券 往復',amount:19908,fixed:true},
    {label:'ポルタイン弁天町',amount:4845,fixed:true},
    {label:'京都第一ホテル 2泊',amount:6806,fixed:true},
    {label:'主要拝観・入館',amount:4900,fixed:false},
    {label:'現地交通',amount:9000,fixed:false},
    {label:'食費',amount:16000,fixed:false},
    {label:'買い物・土産',amount:8000,fixed:false},
    {label:'予備費',amount:6000,fixed:false}
  ],
  links: [
    {name:'Nintendo Museum',url:'https://museum.nintendo.com/ja/'},
    {name:'Nintendo Museum チケット',url:'https://museum-tickets.nintendo.com/?lang=ja'},
    {name:'三十三間堂',url:'https://www.sanjusangendo.jp/'},
    {name:'清水寺',url:'https://www.kiyomizudera.or.jp/'},
    {name:'伏見稲荷大社',url:'https://inari.jp/'},
    {name:'金閣寺',url:'https://www.shokoku-ji.jp/kinkakuji/'},
    {name:'龍安寺',url:'https://www.ryoanji.jp/'},
    {name:'ポルタイン弁天町',url:'https://portainn.jp/'},
    {name:'京都第一ホテル',url:'https://www.kyoto-1-hotel.jp/'},
    {name:'551蓬莱 本店',url:'https://www.551horai.co.jp/shop/list/13/'},
    {name:'本家 第一旭 本店',url:'https://www.honke-daiichiasahi.com/shop.html'},
    {name:'心斎橋PARCO',url:'https://shinsaibashi.parco.jp/'},
    {name:'東映太秦映画村',url:'https://www.eigamura.com/'},
    {name:'嵯峨野トロッコ列車',url:'https://www.sagano-kanko.co.jp/'}
  ]
};