# Venue Research Data Contract

このディレクトリは、`docs/research/**` の人間向け調査記録とは別に、Webサイトが直接読む機械可読データを保存する領域です。

## Research Worker の必須動作

施設調査を完了したcycleでは、Markdown記録に加えて必ず以下も更新してください。

1. `data/research/venues/<slug>.json` を `schema.json` に従って作成または更新する。
2. `data/research/venues/index.json` の該当施設について `status` / `path` / `updatedAt` を更新する。
3. JSONに書いた数値・時刻・料金・制度には `sources[].id` を用意し、必要な項目から `sourceIds` で参照できるようにする。
4. 不明な情報を推測で埋めない。調査不足なら空文字や `UNKNOWN` を使うのではなく、説明文で未確認と明記する。
5. 公式情報と訪問記を混同しない。料金・営業時間・休館・予約条件などは一次情報を優先する。

## Status

- `NOT_STARTED`: 未調査
- `IN_PROGRESS`: 調査中。サイト掲載には注意が必要
- `RESEARCHED`: 一通り調査済み
- `NEEDS_UPDATE`: 情報の鮮度や矛盾に問題あり
- `VERIFIED`: 旅行直前確認まで完了

Web UIは `RESEARCHED` / `VERIFIED` を完成ガイドとして表示し、それ以外は調査状態を明示します。

## ファイル名

slugは英小文字 + ハイフンを基本とします。

例:

- `nintendo-museum.json`
- `kiyomizu-dera.json`
- `551-horai-honten.json`

## 重要

`index.json` はWeb UIのmanifestです。施設JSONを作っても、ここを更新しなければサイトから発見できません。

Research WorkerはProduction UI (`index.html`, `app.js`, `styles.css`, `venue-guide.js`, `venue-guide.css`) を変更しないでください。
