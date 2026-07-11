# Design: Communication Strategy Framework

**Date:** 2026-05-17  
**Artifact:** `artifacts/communication-strategy.html`  
**Status:** Approved for implementation

---

## What We're Building

A self-contained HTML planning tool that helps executives structure AI initiative communications using the Rider / Elephant / Path model (Heath & Heath, *Switch*, 2010). Executive inputs initiative details, selects an archetype, edits pre-filled lever content, and gets a formatted one-pager + talking points — both printable and copy-ready.

---

## Layout

Two-column grid, consistent with `readiness-scorecard.html`:

- **Left column — input form**
  - Gradient header banner (matching repo style: `#1a237e → #3949ab`)
  - Initiative name (text input)
  - Target audience (text input)
  - Archetype dropdown (8 options — see Content section)
  - Three collapsible lever sections: Rider, Elephant, Path
    - Each: guide prompt above textarea, textarea pre-filled from archetype
  - "Generate Plan" button (updates right pane)

- **Right column — output panel (sticky)**
  - Formatted one-pager: initiative name, audience, date, three lever blocks with labels
  - Talking points block: 3–5 bullets per lever, auto-split from textarea content
  - Copy-to-clipboard button per lever talking points block
  - Print button — `@media print` hides left column, renders right column full-width

---

## Archetypes (8)

Pre-fill all three lever textareas. Executive edits to fit their org.

| # | Archetype | Rider focus | Elephant focus | Path focus |
|---|---|---|---|---|
| 1 | Cost Reduction | Processing time benchmarks (40–60%, McKinsey 2025) | Reclaiming expert time, not cutting headcount | Pilot → measure hours saved → expand |
| 2 | Productivity & Speed | Developer task time reduction (55%, GitHub Copilot 2023) | Amplifying what people do well | Week 1 access → Week 2 practice → Week 4 retro |
| 3 | Customer Experience | Tier-1 ticket resolution rate (70%, Klarna 2024) | Customer trust through faster service | FAQ automation → weekly review → 60-day quality gate |
| 4 | Risk & Compliance | Manual vs AI-assisted review accuracy (85% → 97%, NIST baseline) | Protection, not surveillance | Shadow mode → co-pilot after 90-day audit |
| 5 | Talent & Upskilling | AI literacy ROI (3.4×, BCG 2024) | Making people more valuable | Literacy session → early adopters → champions |
| 6 | Data Strategy | Data foundation ROI multiplier (2×, McKinsey 2025) | Unlocking locked organizational knowledge | Audit one source → connect → prove value |
| 7 | Competitive Positioning | Competitor AI adoption rate (67% Fortune 500, PwC 2025) | Protecting ground already built | Define 2 scenarios → assign owners → quarterly review |
| 8 | Governance & Ethics | Regulatory exposure (EU AI Act 2024, US state laws) | Trust signal to employees, customers, regulators | 30-day inventory → risk tier → assign accountability |

---

## Interactions

- **Archetype dropdown change** → instantly pre-fills all three textareas (no button needed)
- **"Generate Plan" button** → renders output panel from current textarea content
- **Talking points auto-split** → split textarea on newline (`\n`), filter empty lines, render as `<li>` elements, max 5 bullets per lever; textarea placeholder instructs "one point per line"
- **Copy button** → `navigator.clipboard.writeText()` on the talking points text; button label changes to "Copied!" for 1.5s
- **Print** → `@media print` shows only output panel, full-width, no shadows, clean typography
- **Keyboard nav** → collapsible sections toggle on Enter/Space; tab order: dropdown → lever sections → generate → output

---

## Output One-Pager Structure

```
[Initiative Name]                          [Date]
Audience: [Target Audience]

THE RIDER — Appeal to Rational Thinking
[Lever content]

THE ELEPHANT — Engage Emotion
[Lever content]

THE PATH — Make It Easy
[Lever content]

Talking Points
Rider: • ... • ... • ...
Elephant: • ... • ... • ...
Path: • ... • ... • ...

© gmanch94 · CC-BY-4.0 · AI Architect Showcase
```

---

## Technical Constraints

- Single `.html` file, no npm, no bundler, no CDN dependencies
- All CSS and JS inlined
- `@media print` hides left column, renders right column full-width at 100% width
- ARIA labels on all interactive elements
- Keyboard navigable (collapsibles respond to Enter/Space)
- Follows repo color palette: `#1a237e`, `#3949ab`, `#f5f6fa`, `#1a1f2e`
- Footer: `© gmanch94 · CC-BY-4.0`

---

## README Entry

Add row to artifact registry table:

```markdown
| [`communication-strategy.html`](artifacts/communication-strategy.html) | Planning tool | Select an AI initiative archetype (8 options) → edit Rider / Elephant / Path levers → get a formatted communication plan + talking points. Print to PDF or copy talking points. |
```

Add audience routing row:

```markdown
| A change leader communicating an AI initiative | [`communication-strategy.html`](artifacts/communication-strategy.html) |
```

---

## Out of Scope

- Saving/loading plans (no localStorage, no backend)
- Multi-initiative comparison
- Email/Slack export
- Collaboration / shared editing
