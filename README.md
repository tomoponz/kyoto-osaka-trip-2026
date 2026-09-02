# Kyoto & Osaka Trip 2026

2026年9月7日〜10日の京都・大阪旅行を、**友人と共有しやすく、旅行中にスマホで使いやすい形**にまとめる専用サイトです。

## 目的

- 日程・集合・ホテル・食事・予算を1か所に集約
- 各スポットの公式サイトを毎回検索しなくて済むようにする
- 各予定からGoogle Mapsをすぐ開けるようにする
- 旅行中は選択した日の予定を最優先で表示する
- しおり版とWeb版で同じ旅行データを使える構成にする
- HTTPS公開時は主要ファイルをService Workerでキャッシュする

## 現在の確定事項

- 9/7 伊丹空港でHと合流
- 9/7 新大阪駅でMと合流
- 9/7 ポルタイン弁天町泊
- 9/8・9/9 京都第一ホテル泊
- 9/9 ニンテンドーミュージアム 12:30〜
- 9/10 伊丹空港 20:05発

## 構成

- `trip-data.js` — 日程・候補・ホテル・食事・公式サイト・予算のSingle Source of Truth
- `index.html` — Web UI
- `styles.css` — モバイルファーストの旅行雑誌風デザイン
- `app.js` — 日程切替・候補フィルタ・共有・Google Mapsリンク・予算表示
- `sw.js` — HTTPS公開時の簡易オフラインキャッシュ
- `.nojekyll` — GitHub Pages用

旅行計画を変更するときは、基本的に `trip-data.js` を編集します。

## 公開

ビルド不要の静的サイトです。GitHub Pages / Vercel / Cloudflare Pages等でそのまま公開できます。

GitHub Pagesを使う場合は Repository Settings → Pages → Deploy from a branch → `main` / `/ (root)` を選択してください。

> RepositoryがPrivateの場合、プランによってGitHub Pagesの公開条件が異なります。

## プライバシー

公開する可能性があるため、自宅住所・本名・電話番号・予約番号・QRコード・認証情報はGitに入れない方針です。同行者は `H` / `M` のような表記にしています。
