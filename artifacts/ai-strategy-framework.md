# AI Strategy Framework

> 8-section strategy framework for non-technical leaders. Synthesizes public sources on AI strategy: BCG/MIT *Winning with AI* (2019), McKinsey *State of AI* (2025), Brynjolfsson/Rock/Syverson 2017 NBER (AI as general-purpose technology), Eloundou et al. 2023 (*GPTs are GPTs*), HBR strategy commentary, and academic work on AI-driven innovation and workforce transformation.

---

## 1. Strategic Foundation

### 1.1 Why AI Strategy Matters

AI is a **general-purpose technology** — like the Internet, cloud, and mobile before it. Companies that retreat after early failures pay a heavy long-term price.

| Signal | Data Point |
|--------|-----------|
| Companies viewing AI as business opportunity | 9 out of 10 |
| Companies viewing AI as competitive risk | 45% |
| Companies that invested in AI and saw business gains | 40% overall; 60% of heavy investors |

**Core risk:** Early failures → irrational retreats → competitors leapfrog.

### 1.2 AI Strategy Integration (Most Critical Principle)

| Less Effective | More Effective |
|---------------|----------------|
| AI as a goal in itself | AI as a tool to reach existing strategic goals |
| Separate AI initiatives | AI integrated into digital/business initiatives |
| Focus on specific AI projects | Focus on AI's effect on business models |
| Cost reduction only | Revenue growth and new business creation |

> **BCG/MIT finding:** 50% of high-risk AI project investors see value vs 23% of low-risk investors.

---

## 2. Portfolio Approach

### 2.1 Why a Portfolio

Balances the need for short-term wins (to build consensus and skills) against long-term transformation (to generate competitive advantage). Neither alone is sufficient.

```
AI Portfolio = Quick Wins + Long-Term Projects
```

### 2.2 Quick Wins (0–6 months)

**Purpose:** Build organizational consensus, develop skills, demonstrate feasibility.

**Characteristics:**
- Use off-the-shelf ML tools (no custom development)
- Target internal employee touchpoints first (low risk of failure exposure)
- Aim for visible results within 3–6 months
- Not expected to transform the P&L

**Examples:**
- Voice interface for pharmacists looking up substitute drugs
- AI-powered internal meeting scheduler
- Automated document classification

**Benefits:**
- Converts skeptics by showing tangible AI results
- Builds data gathering, labeling, and analysis skills
- Low organizational risk if something goes wrong

### 2.3 Long-Term Projects (1–3 years)

**Purpose:** Redefine entire end-to-end processes for competitive advantage.

**Characteristics:**
- Require custom ML development
- Involve cross-functional process redesign
- Target customer-facing outcomes
- Aim for 50–70% automation of complex workflows

**Example — Insurance Claims Automation:**
1. Customer uploads photos via mobile app
2. Image recognition assesses damage type and severity
3. ML model trained on historical claims makes approval/denial decision
4. Human agents focus only on complex/edge-case claims

**Why Long-Term Projects Win:**
- Competitors cannot easily replicate end-to-end integrated processes
- Network effects from proprietary data accumulation
- Compounding returns as the system learns over time

### 2.4 Portfolio Construction Exercise

Recommended C-suite workshop (2–3 hours):

1. **Identify** all activities across functions that ML could automate (target: dozens)
2. **Classify** each as short-term (≤6 months) or long-term (1–3 years)
3. **Assess** return on investment and data asset availability for each
4. **Select** a 3-year portfolio: ~5–6 quick wins + 1–2 long-term projects
5. **Debate** organizational placement: centralized AI team vs. embedded in product teams

---

## 3. Economics of AI — Input Strategy

### 3.1 Four Key Inputs

Understanding the cost and availability trajectory of each input shapes investment timing and make-vs-buy decisions.

#### Software
- Deep learning frameworks now open source (TensorFlow 2015, PyTorch, Keras)
- PhD-level task → Master's-level → No-code tools
- **Implication:** Commodity. Don't build your own framework.

#### Skills
- No-code tools (Google Teachable Machine) enable domain experts to build basic ML
- Bottleneck shifting from "can we build it?" to "do we understand what it's doing?"
- **Implication:** Reskill domain experts; hire AI support roles, not just PhDs

#### Compute
- CPU → GPU → TPU evolution
- Cloud rental (AWS, GCP, Azure) eliminates upfront CAPEX
- Battle for the AI stack: cloud providers investing heavily in specialized hardware
- **Implication:** Use cloud. Don't build custom hardware infrastructure.

#### Data
- Training data is the primary differentiator in ML performance
- Deep learning performance scales continuously with data (shallow ML caps out)
- Virtuous cycle: more data → better product → more users → more data
- **"Data is the new oil"** — especially for complex deep learning applications
- **Data/model marketplaces** (Kaggle, Snowflake, AWS, cloud providers) allow purchasing datasets and pre-built algorithms — viable shortcut when proprietary data is thin
- **Implication:** Data strategy IS AI strategy. Protect and grow data assets; use marketplaces to close gaps fast.

### 3.2 Investment Timing Principle

As AI input barriers continue to drop, the optimal posture is **invest slowly and steadily** rather than betting heavy upfront. Early CAPEX locks you into today's tools; incremental investment lets you ride declining costs and improving tooling. Returns compound over the long run for persistent investors.

### 3.3 AutoML — Opportunity and Risk

**What it is:** Automated end-to-end ML workflow — upload data, receive predictions. No ML expertise required.

**Variants:** Google AutoML, Microsoft Automated ML, Amazon SageMaker AutoPilot, IBM AutoAI

**Opportunity:** Democratizes AI; makes it accessible to any team with data.

**Risk — AutoML Hubris:**
> "A lack of understanding about inner workings will lead to problems, especially when we develop arrogance around AI being easy to deploy."

- Bias amplified when deployers don't understand algorithms
- Governance failures when organizations skip model understanding
- Growing demand for AI ethicists who can interpret and challenge algorithmic decisions

---

## 4. Competitive Strategy

### 4.1 Data as Competitive Moat

| Dynamic | Implication |
|---------|------------|
| Data scale advantage (deep learning) | First-mover data advantage compounds |
| Virtuous cycle | Data-rich firms continuously extend lead |
| Platform concentration | Small number of firms capture disproportionate value |

**Strategic response for data-poor firms:**
- Identify proprietary data sources competitors cannot easily replicate
- Build data collection into every product and process from day one
- Consider data partnerships and marketplace purchases to close gaps

### 4.2 Competitive Landscape

- **Data portability regulation** (ACCESS Act, GDPR) may reduce data moats over time
- Growing regulatory pressure on tech concentration
- **Data ownership debate:** Who owns the data — platform or user?
- Winning strategy: build AI capabilities before regulatory environment forces data sharing

### 4.3 Generative AI: The Moat Has Changed

Post-2022, foundation models (GPT, Claude, Gemini) commoditized model access. This changes competitive dynamics:

| Factor | Traditional ML Era | Generative AI Era |
|--------|-------------------|-------------------|
| Model access | Differentiator | Commodity — same models available to all |
| First-mover advantage on new model | Sustained | ~6–8 weeks before competitors catch up (HBR 2024) |
| Real competitive moat | Proprietary training data | Proprietary data **+** organizational context |
| Organizational context | Supporting factor | Co-equal moat: unique processes, domain knowledge embedded in AI workflows |

**Implication:** Competing on model selection alone is not a strategy. Sustainable advantage requires layering proprietary data with deep organizational context — the institutional knowledge, workflows, and customer patterns that rivals cannot replicate even with the same model.

---

## 5. Organizational Strategy

### 5.1 Five Behaviors of High-Performing AI Organizations

Derived from BCG/MIT survey of executives at companies successfully deriving value from AI:

| Behavior | Less Effective | More Effective |
|---------|---------------|----------------|
| **Strategy Integration** | AI strategy separate from business strategy | AI embedded in overall organizational strategy |
| **Risk/Reward** | Focus on cost reduction, low-risk projects | Pursue revenue growth, accept higher-risk projects |
| **Data Infrastructure** | Data siloed by department | Integrated data warehouse; cross-functional access |
| **AI Production + Consumption** | Only data scientists use AI | Managers consume AI insights for decisions |
| **Talent Investment** | One approach (hire only or reskill only) | Diversified: hire externals + reskill internals |

### 5.2 Data Infrastructure (Critical Enabler)

Without integrated data, AI cannot deliver organizational value. Data silos are the most common structural barrier.

**Required investment:**
- Data warehousing: pull data from all departments into unified repository
- Data governance: standards for data quality, access, and labeling
- Data catalog: make datasets discoverable across the organization

### 5.3 AI Team Structure

| Structure | Best For | Trade-off |
|-----------|---------|-----------|
| **Centralized AI team** | Early stage; building capabilities; standards | Risk of building tools product teams don't adopt |
| **Embedded in product teams** | Scale stage; broad deployment | Risk of inconsistent standards; duplication |
| **Hybrid (Center of Excellence + embedded)** | Most mature orgs | Coordination overhead; requires strong governance |

**Research finding:** Dispersing AI skills across functions generates **+3–5% enterprise value** vs. concentration in a single department (academic studies on AI organizational structure and dispersion).

**The GE/Twitter lesson:** Both initially centralized AI, built tools, and found product teams didn't adopt them. Both decentralized. Best model: **pair industry domain expert with AI specialist.**

### 5.4 Talent Strategy

**Hire:**
- Data scientists and ML engineers for core model development
- AI support roles (non-researchers with AI skills are equally effective)
- AI ethicists and governance specialists (growing need)

**Reskill:**
- Domain experts: basic data literacy and AI tool usage
- Managers: ability to consume AI insights, challenge model outputs
- Engineers: ML-adjacent skills (data pipelines, feature engineering)

**Google model:** Trained 25,000 engineers in ML; invited employees to 6-month rotations with ML team + mentor; then distributed back to product teams.

### 5.5 Workforce Transformation Under AI

Empirical findings from a national Canada study (89% firm response rate) on robot/AI adoption. Counter-intuitive results with direct strategic implications.

**Employment effects:**

| Metric | Effect After AI/Robot Adoption | Implication |
|--------|-------------------------------|-------------|
| Total employment | ↑ Increases over 3–5 years | AI adoption creates jobs firm-wide |
| Manager headcount | ↓ Decreases (especially years 1 and 3+) | Technology absorbs supervisory functions |
| High-skill workers | ↑ Grows | Demand for expertise rises |
| Middle-skill workers | ↓ Hollowed out | Routine cognitive work automated |
| Low-skill workers | ↑ Grows | Standardized physical tasks remain; monitoring automated |

**Managerial practice shifts:**

| Practice | Change | Why |
|----------|--------|-----|
| Span of control | ↑ Each manager supervises more people | Fewer managers; technology replaces monitoring |
| Work predictability | ↓ Jobs become less predictable | AI handles routine tasks; humans handle exceptions |
| Performance-based pay | ↑ Increases | AI reduces production variance → individual contributions more attributable |
| Training decisions | Shift from managers → employees | Workers self-direct development |
| Technology selection decisions | Shift from managers → C-suite | Strategic call moves up; middle managers lose this authority |

**Key finding:** AI adoption productivity = **10× its factor share**. Non-adopters in the same industry lose market share and experience employment decline — the "job destruction" narrative in press traces to *non-adopters*, not adopters.

**Strategic implication:** Adoption is not optional in competitive markets. Plan proactively for workforce composition change; middle-manager roles will need redefinition, not just headcount reduction.

---

## 6. AI and Innovation Strategy

### 6.1 Where AI Creates Innovation Value

| Innovation Type | AI Impact | Why |
|----------------|-----------|-----|
| **Process innovation** | ✓ Strong (+7% productivity) | AI excels at pattern optimization in data-rich processes |
| **Product innovation (general)** | ✗ Neutral/negative | Product-oriented firms less likely to adopt AI |
| **Recombination innovation** | ✓ Strong | AI searches massive combinatorial space |
| **Diverse combination (ABC)** | ✓ Strongest | AI explores 2^N combinations across many domains |
| **Incremental improvement (A')** | ○ Modest | Search space small; AI helps but not dramatically |
| **Novel/first-of-class (D)** | ✗ Limited | No training data; tacit knowledge can't be codified |

**Key insight:** AI is a pattern-matching and combination machine. It finds hidden links across large datasets. It cannot generate fundamentally new ideas from scratch.

### 6.2 Innovation Strategy Recommendations

1. **Pair AI investment with process orientation** — AI + process focus = 7% productivity gain. Either alone = no gain.
2. **Target recombination opportunities** — look for ways to combine existing technologies in new sectors
3. **Use AI for early-stage screening**, not final innovation decisions
4. **Require known mechanism** before acting on AI-generated drug/product candidates (correlation ≠ causation)
5. **Decentralize innovation structure** before scaling AI investment — decentralized structures benefit most

### 6.3 Organizational Structure for AI-Driven Innovation

| Structure | AI Benefit | Mechanism |
|-----------|-----------|-----------|
| **Decentralized** | +3% productivity | AI bridges the silo coordination gap |
| **Centralized** | Less benefit | Coordination already present; AI adds less |

**Why decentralization + AI works:**
- Decentralized teams have local expertise but poor cross-silo coordination
- AI mines across silos to find hidden patterns and novel combinations
- This fills precisely the gap where decentralized teams are weak

---

## 7. Implementation Roadmap

### Phase 1 — Foundation (0–6 months)
- [ ] Conduct portfolio construction workshop with C-suite
- [ ] Identify and launch 2–3 quick win projects
- [ ] Assess data infrastructure maturity; identify silo problem
- [ ] Begin data warehouse/integration project
- [ ] Inventory existing ML/AI capabilities
- [ ] Design talent strategy (hire + reskill plan)

### Phase 2 — Build (6–18 months)
- [ ] Complete quick win projects; document learnings and ROI
- [ ] Launch 1 long-term project with cross-functional team
- [ ] Begin structured ML training for engineers and domain experts
- [ ] Establish data governance policies
- [ ] Decide on AI team structure (centralized vs. embedded)
- [ ] Define AI ethics principles aligned to organizational values

### Phase 3 — Scale (18–36 months)
- [ ] Expand portfolio based on learnings
- [ ] Scale data infrastructure to support organization-wide AI
- [ ] Embed AI skills across functional departments
- [ ] Implement AI governance framework (controls, transparency, audits)
- [ ] Monitor competitive landscape and regulatory environment
- [ ] Develop long-term proprietary data strategy

---

## 8. Common Failure Modes

| Failure Mode | What Happens | How to Avoid |
|-------------|-------------|--------------|
| **Irrational retreat** | Early project failure → leadership pulls back entirely | Portfolio approach; set realistic expectations |
| **AI for cost only** | Low-risk projects only; no competitive differentiation | Target revenue/growth outcomes |
| **Talent bottleneck** | Data scientists isolated from domain knowledge | Embed skills; pair experts with AI specialists |
| **Data silos** | AI built on incomplete, fragmented data | Data infrastructure investment precedes AI at scale |
| **AutoML hubris** | Easy tools deployed without governance | Require bias audits; hire AI ethicists |
| **Centralized AI team** | Great tools nobody uses | Decentralize; pair AI skills with domain teams |
| **Short-termism only** | Quick wins built, long-term transformation neglected | Portfolio balance: 5–6 quick wins + 1–2 long-term |
| **Non-adoption in competitive markets** | Competitors adopt; your firm loses market share and workforce competitiveness — the employment loss attributed to AI in the press actually traces to non-adopters | Treat adoption as table stakes in your industry; plan workforce transition proactively |
| **Stuck in POC / scaling gap** | 88% of companies use AI in at least one function but only 33% have scaled enterprise-wide (McKinsey 2025); most stall at proof-of-concept | Treat scaling as a separate phase with dedicated resources; commit to workflow redesign — the #1 driver of EBIT impact, yet only 21% of organizations have done it |

---

## 9. Generative AI & Agentic Era (Post-2022 Update)

The course framework was built on traditional ML/deep learning. The 2022–2025 period introduced two shifts that require strategic attention:

### 9.1 Foundation Models Change the Build vs. Buy Equation

- Foundation models (LLMs, multimodal models) are accessible via API — no training from scratch required
- This dramatically lowers the skill and compute barrier for language, vision, and reasoning tasks
- **Implication:** The "build custom ML" path (Section 2.3) now competes with "prompt + fine-tune foundation model" as a faster route. Evaluate both for every long-term project.

### 9.2 Agentic AI — The Next Process Redesign Wave

Agentic AI (AI systems that autonomously plan, execute multi-step tasks, and use tools) is at **35% enterprise adoption** (2025) with another 44% planning deployment.

| Dimension | What Changes |
|-----------|-------------|
| **Workflow scope** | Agents execute end-to-end workflows, not just predictions or classification |
| **Speed** | 30–50% process acceleration reported in early deployments |
| **Org design** | Flat, outcome-aligned teams replace task-based hierarchies; humans hold final accountability |
| **Governance** | Real-time, embedded governance required — periodic reviews too slow for autonomous agents |
| **Data infrastructure** | High-quality, interoperable data becomes even more critical; agents fail on dirty data |

**Strategic priority:** Workflow redesign is the #1 driver of EBIT impact from AI (McKinsey 2025), yet only **21% of organizations** have redesigned at least some workflows. This is the most underpenetrated high-value action available.

### 9.3 What This Means for the Portfolio

Add a third category alongside Quick Wins and Long-Term Projects:

| Type | Horizon | Focus |
|------|---------|-------|
| Quick Wins | 0–6 months | Off-the-shelf ML, employee touchpoints |
| Long-Term Projects | 1–3 years | Custom ML, end-to-end process redesign |
| **Agentic Initiatives** | **6–18 months** | **Foundation model + agent layer on top of existing data; automate multi-step knowledge workflows** |

---

## Key References (public sources)

- BCG/MIT Report: *Winning with AI* (2019) — survey of executive AI behaviors
- Hosanagar, K.: *A Human's Guide to Machine Intelligence* (2019, Viking) — book
- Bloom, N., Jones, C., Van Reenen, J., Webb, M.: *Are Ideas Getting Harder to Find?* (2017, NBER WP 23782)
- Brynjolfsson, E., Rock, D., Syverson, C.: *Artificial Intelligence and the Modern Productivity Paradox* (2017, NBER WP 24001)
- Eloundou, T., Manning, S., Mishkin, P., Rock, D.: *GPTs are GPTs: An Early Look at the Labor Market Impact Potential of LLMs* (2023, arXiv:2303.10130)
- Acemoglu, D., Restrepo, P.: *Robots and Jobs: Evidence from US Labor Markets* (2020, Journal of Political Economy 128(6))
- McKinsey: *The State of AI* (2025) — scaling gap, workflow redesign as #1 EBIT driver
- McKinsey: *The Agentic Organization* (2025) — agentic org design principles
- HBR: *When Every Company Can Use the Same AI Models, Context Becomes a Competitive Advantage* (2024)
- Goldfarb, A., Taska, B., Teodoridis, F.: *Could Machine Learning Be a General Purpose Technology?* (2019, NBER)
- Deloitte / MIT Sloan: *Agentic AI Strategy* coverage (2025–2026)

---

## Companion artifacts

| Artifact | Use for |
|---|---|
| [`executive-briefing.html`](executive-briefing.html) | 10-slide deck for leadership |
| [`readiness-scorecard.html`](readiness-scorecard.html) | 5-dim org readiness self-assessment |
| [`portfolio-worksheet.html`](portfolio-worksheet.html) | 3-horizon use-case scoring + bubble chart |
| [`mindmap.html`](mindmap.html) | Visual map of strategy + governance topics |
| [`case-study-library.html`](case-study-library.html) | Searchable case studies (filter by topic) |
| [`glossary.html`](glossary.html) | Plain-English AI term reference |
| [`hr-maturity-checklist.html`](hr-maturity-checklist.html) | HR-specific maturity model (5 dims, EEOC/GDPR/NYC LL 144 anchored) |

---

© gmanch94 · CC-BY-4.0 · github.com/gmanch94/ai-architect-showcase
