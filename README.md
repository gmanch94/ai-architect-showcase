# AI Architect Showcase

Executive-grade AI strategy artifacts. Built for non-technical leaders making AI decisions.

---

## What this is

A small, opinionated set of decision tools, briefings, and reference cards for executives, board members, and senior operators who need to **make AI bets without being data scientists**. Each artifact is self-contained — open in a browser, share by link, print to PDF.

These are the public-facing executive companions to the architect-grade operational reference at [`gmanch94/ai-enablement-ws`](https://github.com/gmanch94/ai-enablement-ws) (cookbooks, governance frameworks, audit templates, ADRs).

---

## Audience

| You are... | Start with |
|---|---|
| A CEO / board member orienting to AI | [`executive-briefing.html`](artifacts/executive-briefing.html) → [`mindmap.html`](artifacts/mindmap.html) |
| A CIO / CDO sizing organizational readiness | [`readiness-scorecard.html`](artifacts/readiness-scorecard.html) → [`ai-strategy-framework.md`](artifacts/ai-strategy-framework.md) |
| A strategy lead building an AI portfolio | [`portfolio-worksheet.html`](artifacts/portfolio-worksheet.html) → [`case-study-library.html`](artifacts/case-study-library.html) |
| A CHRO / people analytics lead | [`hr-maturity-checklist.html`](artifacts/hr-maturity-checklist.html) → [`readiness-scorecard.html`](artifacts/readiness-scorecard.html) |
| Anyone learning the AI vocabulary | [`glossary.html`](artifacts/glossary.html) |

---

## Artifacts

| Artifact | Type | What it does |
|---|---|---|
| [`executive-briefing.html`](artifacts/executive-briefing.html) | 10-slide deck | Full-screen deck for leadership: AI as GPT, ML toolbox, data > models doctrine, GenAI stack, productivity stats, risk mitigation, 90-day plan. Arrow-key navigation, print to PDF. |
| [`readiness-scorecard.html`](artifacts/readiness-scorecard.html) | Self-assessment | 5 organizational dimensions × 4 questions. Live radar chart + gap analysis with recommended actions per dimension. |
| [`portfolio-worksheet.html`](artifacts/portfolio-worksheet.html) | Decision tool | Add use cases → auto-classify by horizon (H1/H2/H3) → score on Business Value × Data Readiness × Feasibility → ranked portfolio + bubble chart. 14 sample use cases pre-loaded. |
| [`ai-strategy-framework.md`](artifacts/ai-strategy-framework.md) | Framework | 8-section strategy doc covering portfolio approach, economics inputs, competitive strategy, organizational design, innovation, implementation roadmap, common failure modes, and the GenAI/agentic shift. |
| [`mindmap.html`](artifacts/mindmap.html) | Visual | Interactive D3 radial mindmap. 4 topic clusters; nodes collapse/expand; hover for pros/cons/details. Use as a teaching aid or onboarding artifact. |
| [`case-study-library.html`](artifacts/case-study-library.html) | Reference | 14 case study cards (Zillow, Netflix, Klarna, Air Canada, GitHub Copilot, Bloomberg GPT, etc.) with topic filter + full-text search. Each card: situation, lesson, tags. |
| [`glossary.html`](artifacts/glossary.html) | Reference | 50+ AI terms in plain English, grouped by topic, filterable + searchable. "Use when…" guidance on every term. |
| [`hr-maturity-checklist.html`](artifacts/hr-maturity-checklist.html) | Self-assessment | HR-specific maturity model. 5 dimensions (data foundation, algorithmic literacy, bias controls, explainability/compliance, change management) × 5 questions each. Live radar + gap analysis. EEOC 4/5ths, GDPR Art. 22, NYC LL 144, EU AI Act anchored. |

---

## How to view

Live at **https://gmanch94.github.io/ai-architect-showcase/** — direct in-browser preview, JS executes, print-to-PDF works.

Direct artifact links:

- [Executive briefing (deck)](https://gmanch94.github.io/ai-architect-showcase/artifacts/executive-briefing.html)
- [Readiness scorecard](https://gmanch94.github.io/ai-architect-showcase/artifacts/readiness-scorecard.html)
- [HR maturity checklist](https://gmanch94.github.io/ai-architect-showcase/artifacts/hr-maturity-checklist.html)
- [Portfolio worksheet](https://gmanch94.github.io/ai-architect-showcase/artifacts/portfolio-worksheet.html)
- [Mindmap](https://gmanch94.github.io/ai-architect-showcase/artifacts/mindmap.html)
- [Case study library](https://gmanch94.github.io/ai-architect-showcase/artifacts/case-study-library.html)
- [Glossary](https://gmanch94.github.io/ai-architect-showcase/artifacts/glossary.html)
- [Strategy framework](https://github.com/gmanch94/ai-architect-showcase/blob/main/artifacts/ai-strategy-framework.md) (Markdown — renders on GitHub)

Or **fork** the repo, customize for your org, host wherever you want.

---

## Reframe / sourcing

Every artifact has been re-anchored to public sources where possible:

- **AI as general-purpose technology** — Brynjolfsson, Rock, Syverson 2017 (NBER WP 24001); Goldfarb, Taska, Teodoridis 2019 (NBER)
- **Data > models doctrine** — Halevy, Norvig, Pereira 2009, *The Unreasonable Effectiveness of Data*, IEEE Intelligent Systems 24(2)
- **LLM productivity impact** — Eloundou, Manning, Mishkin, Rock 2023, *GPTs are GPTs*, arXiv:2303.10130; Dell'Acqua et al. 2023, HBS Working Paper 24-013
- **RAG** — Lewis et al. 2020, arXiv:2005.11401
- **Risk + governance baseline** — NIST AI RMF (2023, 2024); EU AI Act (Regulation 2024/1689); GDPR
- **Strategy benchmarks** — BCG/MIT *Winning with AI* (2019); McKinsey *State of AI* (2025); HBR strategy commentary
- **Workforce effects** — Acemoglu & Restrepo 2020 (JPE 128(6)); Bloom, Jones, Van Reenen, Webb 2017 (NBER WP 23782)
- **HR / employment AI law** — EEOC Uniform Guidelines on Employee Selection (4/5ths rule); GDPR Art. 22; NYC Local Law 144 (2023); Illinois AI Video Interview Act (820 ILCS 42); EU AI Act high-risk employment provisions
- **XAI methods** — Lundberg & Lee 2017, *A Unified Approach to Interpreting Model Predictions* (SHAP, NeurIPS); Ribeiro, Singh, Guestrin 2016, *"Why Should I Trust You?"* (LIME, KDD)

For the academic / regulatory deep dive, see the operational repo: [`gmanch94/ai-enablement-ws`](https://github.com/gmanch94/ai-enablement-ws).

---

## License

[CC-BY-4.0](LICENSE) — free to share, adapt, and reuse with attribution. Footer on every artifact: `© gmanch94 · CC-BY-4.0`.

---

## Companion repo

[`ai-enablement-ws`](https://github.com/gmanch94/ai-enablement-ws) — architect-grade operational workspace. Cookbooks (prompt, feature engineering), vendor frameworks, governance frameworks (general + HR overlay), audit templates (general + HR/EEOC 4/5ths), risk checklists, model evaluation canvas, ADRs, cloud cheatsheets (Azure / AWS / GCP / open source), and ~25 Claude Code skills (`/review`, `/threat-model`, `/red-team`, `/eval-design`, etc.).
