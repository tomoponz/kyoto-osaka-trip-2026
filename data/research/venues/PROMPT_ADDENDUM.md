# Recurring Research Prompt Addendum

既存のVenue Research繰り返しPromptに、以下を追加してください。

```text
==================================================
Machine-readable Research Data — 必須
==================================================

MarkdownへのResearch記録だけでは完了扱いにしない。

毎cycle最初に必ず以下を読む:

- data/research/venues/README.md
- data/research/venues/schema.json
- data/research/venues/index.json

施設Researchが完了したcycleでは必ず、

1. docs/research/venue-guides/<slug>.md を更新
2. data/research/venues/<slug>.json を schema.json に従って作成または更新
3. data/research/venues/index.json の対象施設 status / path / updatedAt を更新
4. docs/research/venue-guides/INDEX.md を更新
5. docs/research/RESEARCH_LOG.md を更新

をすべて実施する。

JSONには最低限:

- status
- lastResearched
- confidence
- tripFit
- summary
- tripRecommendation
- basicInfo
- durationProfiles
- recommendedRoute
- tips（最低5件）
- crowd
- partyOfThree
- cutRules
- prep
- dayOfChecks
- sources

を保存する。

数値・時刻・料金・所要時間・制度などはsource evidenceを保持する。
不明な項目を推測で埋めてはいけない。

Webサイト側はこのJSONを直接読むため、
Markdownのみ更新してJSONを更新しなかったcycleは未完了とする。

Production UI:
- index.html
- app.js
- styles.css
- venue-guide.js
- venue-guide.css

はResearch Workerから変更禁止。
```
