# Communication Strategy Framework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `artifacts/communication-strategy.html` — a self-contained executive planning tool for structuring AI initiative communications using the Rider / Elephant / Path model.

**Architecture:** Single HTML file with all CSS and JS inlined. Left column = form (archetype dropdown + lever textareas). Right column = sticky output panel (formatted one-pager + talking points). No CDN dependencies, no build system.

**Tech Stack:** Plain HTML5, CSS Grid, vanilla JS (ES6). No frameworks, no npm, no external assets.

---

## File Structure

| Action | Path | Responsibility |
|---|---|---|
| Create | `artifacts/communication-strategy.html` | Complete artifact — layout, styles, data, logic |
| Modify | `README.md` | Add artifact row + audience routing row |

---

### Task 1: HTML skeleton + CSS foundation + two-column layout

**Files:**
- Create: `artifacts/communication-strategy.html`

- [ ] **Step 1: Create the file with DOCTYPE, head, and CSS reset**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Communication Strategy Framework</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#f5f6fa;color:#1a1f2e;min-height:100vh;}

  /* ── Header ── */
  header{background:linear-gradient(135deg,#1a237e,#3949ab);color:#fff;padding:36px 48px 28px;}
  header h1{font-size:1.8rem;font-weight:700;margin-bottom:6px;}
  header p{font-size:0.9rem;opacity:0.85;max-width:680px;line-height:1.6;}
  .header-meta{display:flex;gap:32px;margin-top:18px;flex-wrap:wrap;align-items:center;}
  .header-meta label{font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;opacity:0.65;display:block;margin-bottom:4px;}
  .header-meta input{background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,0.4);color:#fff;font-size:0.9rem;width:220px;padding:2px 0;outline:none;}
  .header-meta input::placeholder{color:rgba(255,255,255,0.4);}
  .btn-print{background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#fff;padding:8px 20px;border-radius:8px;font-size:0.85rem;cursor:pointer;font-weight:600;}
  .btn-print:hover{background:rgba(255,255,255,0.25);}

  /* ── Two-column grid ── */
  .main{display:grid;grid-template-columns:1fr 420px;gap:28px;max-width:1240px;margin:0 auto;padding:36px 24px 60px;}

  /* ── Footer ── */
  .footer{max-width:1240px;margin:0 auto;padding:20px 24px 40px;font-size:0.78rem;color:#5c6bc0;border-top:1px solid #e8edf8;}
  .footer a{color:#3949ab;text-decoration:none;}
  .footer a:hover{text-decoration:underline;}

  /* ── Responsive ── */
  @media(max-width:900px){
    .main{grid-template-columns:1fr;padding:20px 12px 40px;}
    header{padding:24px 20px;}
  }
</style>
</head>
<body>

<header>
  <h1>AI Communication Strategy Framework</h1>
  <p>Structure your AI initiative communications using the Rider / Elephant / Path model. Select an archetype, edit the levers to fit your organization, then generate a formatted plan and talking points.</p>
  <div class="header-meta">
    <div><label>Initiative Name</label><input type="text" id="initiativeName" placeholder="e.g. AI-Assisted Contract Review"></div>
    <div><label>Target Audience</label><input type="text" id="targetAudience" placeholder="e.g. Legal Department"></div>
    <button class="btn-print" onclick="window.print()">Print / PDF</button>
  </div>
</header>

<div class="main">
  <div id="leftCol"><!-- Task 2 --></div>
  <div id="rightCol"><!-- Task 5 --></div>
</div>

<div class="footer">
  <span>© <a href="https://github.com/gmanch94/ai-architect-showcase">gmanch94</a> · <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a> · AI Architect Showcase · Based on Heath &amp; Heath, <em>Switch</em> (2010)</span>
</div>

<script>
// Task 4 — archetypes data and JS logic goes here
</script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Open `artifacts/communication-strategy.html` in a browser. Verify:
- Gradient header renders correctly (dark blue → medium blue)
- Initiative Name and Target Audience inputs appear in header
- Print button visible
- Two-column grid placeholder divs present (empty)
- Footer with CC-BY-4.0 at bottom

- [ ] **Step 3: Commit**

```bash
git add artifacts/communication-strategy.html
git commit -m "add communication-strategy: HTML skeleton and two-column layout"
```

---

### Task 2: Left column — archetype selector + lever section shells

**Files:**
- Modify: `artifacts/communication-strategy.html`

- [ ] **Step 1: Add CSS for the left column components**

Inside `<style>`, after the `@media` block, add:

```css
  /* ── Left column ── */
  .section-card{background:#fff;border-radius:14px;box-shadow:0 2px 12px #0000000d;margin-bottom:20px;overflow:hidden;}

  .archetype-block{padding:20px 24px;}
  .archetype-block label{font-size:0.78rem;font-weight:700;color:#1a237e;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:8px;}
  .archetype-select{width:100%;padding:10px 14px;border:1px solid #c5cae9;border-radius:8px;font-size:0.9rem;color:#1a1f2e;background:#fff;cursor:pointer;outline:none;}
  .archetype-select:focus{border-color:#3949ab;box-shadow:0 0 0 3px rgba(57,73,171,0.12);}

  .lever-header{padding:16px 24px;display:flex;align-items:center;gap:14px;cursor:pointer;user-select:none;}
  .lever-header:focus{outline:2px solid #3949ab;outline-offset:-2px;}
  .lever-icon{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.3rem;font-weight:700;}
  .lever-title-block{flex:1;}
  .lever-title{font-size:0.95rem;font-weight:700;color:#1a237e;margin-bottom:2px;}
  .lever-sub{font-size:0.75rem;color:#9fa8da;}
  .lever-chevron{font-size:0.8rem;color:#9fa8da;transition:transform 0.2s;}
  .lever-chevron.open{transform:rotate(180deg);}

  .lever-body{padding:0 24px 20px;display:none;}
  .lever-body.open{display:block;}
  .lever-guide{font-size:0.78rem;color:#5c6bc0;margin-bottom:8px;line-height:1.5;}
  .lever-textarea{width:100%;min-height:110px;padding:10px 12px;border:1px solid #c5cae9;border-radius:8px;font-size:0.85rem;color:#1a1f2e;line-height:1.6;resize:vertical;outline:none;font-family:inherit;}
  .lever-textarea:focus{border-color:#3949ab;box-shadow:0 0 0 3px rgba(57,73,171,0.12);}
  .lever-hint{font-size:0.72rem;color:#9fa8da;margin-top:5px;}

  .rider-icon{background:#e8eaf6;color:#3949ab;}
  .elephant-icon{background:#fce4ec;color:#c2185b;}
  .path-icon{background:#e8f5e9;color:#2e7d32;}

  .btn-generate{width:100%;padding:14px;background:#1a237e;color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;margin-top:4px;letter-spacing:0.02em;}
  .btn-generate:hover{background:#283593;}
  .btn-generate:focus{outline:2px solid #3949ab;outline-offset:2px;}
```

- [ ] **Step 2: Replace `<div id="leftCol">` with the full left column HTML**

```html
  <div id="leftCol">
    <!-- Archetype selector -->
    <div class="section-card">
      <div class="archetype-block">
        <label for="archetypeSelect">Initiative Archetype</label>
        <select id="archetypeSelect" class="archetype-select" aria-label="Select initiative archetype">
          <option value="cost">Cost Reduction</option>
          <option value="productivity">Productivity &amp; Speed</option>
          <option value="cx">Customer Experience</option>
          <option value="risk">Risk &amp; Compliance</option>
          <option value="talent">Talent &amp; Upskilling</option>
          <option value="data">Data Strategy</option>
          <option value="competitive">Competitive Positioning</option>
          <option value="governance">Governance &amp; Ethics</option>
        </select>
      </div>
    </div>

    <!-- Rider lever -->
    <div class="section-card">
      <div class="lever-header" tabindex="0" role="button" aria-expanded="true" aria-controls="riderBody" onclick="toggleLever('rider')" onkeydown="handleLeverKey(event,'rider')">
        <div class="lever-icon rider-icon">R</div>
        <div class="lever-title-block">
          <div class="lever-title">The Rider</div>
          <div class="lever-sub">Appeals to rational thinking — facts, plans, evidence</div>
        </div>
        <span class="lever-chevron open" id="riderChevron">&#9660;</span>
      </div>
      <div class="lever-body open" id="riderBody">
        <div class="lever-guide">What data, benchmarks, or logical argument makes the case? (one point per line)</div>
        <textarea id="riderText" class="lever-textarea" aria-label="Rider lever content" placeholder="One point per line&#10;e.g. AI reduces processing time by 40–60% in comparable organizations (McKinsey 2025)"></textarea>
        <div class="lever-hint">One point per line — each line becomes a talking point bullet.</div>
      </div>
    </div>

    <!-- Elephant lever -->
    <div class="section-card">
      <div class="lever-header" tabindex="0" role="button" aria-expanded="true" aria-controls="elephantBody" onclick="toggleLever('elephant')" onkeydown="handleLeverKey(event,'elephant')">
        <div class="lever-icon elephant-icon">E</div>
        <div class="lever-title-block">
          <div class="lever-title">The Elephant</div>
          <div class="lever-sub">Engages emotion — identity, urgency, shared purpose</div>
        </div>
        <span class="lever-chevron open" id="elephantChevron">&#9660;</span>
      </div>
      <div class="lever-body open" id="elephantBody">
        <div class="lever-guide">What emotional truth resonates? Avoid fear or sentimentality. (one point per line)</div>
        <textarea id="elephantText" class="lever-textarea" aria-label="Elephant lever content" placeholder="One point per line&#10;e.g. We are not cutting jobs — we are reclaiming time our people spend on work that doesn't use their expertise."></textarea>
        <div class="lever-hint">One point per line — each line becomes a talking point bullet.</div>
      </div>
    </div>

    <!-- Path lever -->
    <div class="section-card">
      <div class="lever-header" tabindex="0" role="button" aria-expanded="true" aria-controls="pathBody" onclick="toggleLever('path')" onkeydown="handleLeverKey(event,'path')">
        <div class="lever-icon path-icon">P</div>
        <div class="lever-title-block">
          <div class="lever-title">The Path</div>
          <div class="lever-sub">Makes it easy — clear steps, intermediate wins, low friction</div>
        </div>
        <span class="lever-chevron open" id="pathChevron">&#9660;</span>
      </div>
      <div class="lever-body open" id="pathBody">
        <div class="lever-guide">What is the concrete next step? What happens in 30 / 60 / 90 days? (one point per line)</div>
        <textarea id="pathText" class="lever-textarea" aria-label="Path lever content" placeholder="One point per line&#10;e.g. Pilot with one team. Measure hours saved in 30 days. Expand if threshold met."></textarea>
        <div class="lever-hint">One point per line — each line becomes a talking point bullet.</div>
      </div>
    </div>

    <button class="btn-generate" onclick="generatePlan()" aria-label="Generate communication plan">Generate Plan</button>
  </div>
```

- [ ] **Step 3: Open in browser and verify**

Verify:
- Archetype dropdown with 8 options renders
- Three lever cards (Rider / Elephant / Path) appear with correct colors (blue / pink / green icons)
- Each lever is open by default, showing textarea
- Chevron arrows visible
- "Generate Plan" button at bottom, full width

- [ ] **Step 4: Commit**

```bash
git add artifacts/communication-strategy.html
git commit -m "add communication-strategy: left column form — archetype selector and lever sections"
```

---

### Task 3: JS — archetypes data + dropdown pre-fill logic + collapsible toggle

**Files:**
- Modify: `artifacts/communication-strategy.html`

- [ ] **Step 1: Replace the `<script>` block with archetypes data and utility functions**

```html
<script>
const ARCHETYPES = {
  cost: {
    rider: `AI reduces manual processing time by 40–60% in comparable organizations (McKinsey, State of AI 2025)
Our team currently spends an estimated X hours per week on tasks AI can automate
Peer organizations that deployed similar tools report 6-month payback periods`,
    elephant: `We are not cutting jobs — we are reclaiming time our people spend on work that doesn't use their expertise
Every hour saved on low-value tasks is an hour returned to the work only your team can do
This is about respect for your people's time and skill`,
    path: `Pilot with one team for 30 days
Measure hours saved and error rate weekly
Expand to next team only after pilot threshold is met`
  },
  productivity: {
    rider: `GitHub Copilot reduced developer task completion time by 55% in controlled trials (GitHub, 2023)
Our current backlog stands at X weeks — equivalent to Y of delayed business value
Three teams in comparable organizations report 2× throughput within 60 days of rollout`,
    elephant: `Faster delivery means your ideas ship — not get queued
This is about amplifying what you already do well, not replacing your judgment
Your team deserves tools that match the quality of work they produce`,
    path: `Week 1: tool access provisioned for volunteer cohort
Week 2: 2-hour guided practice session
Week 4: team retrospective on output quality and blockers`
  },
  cx: {
    rider: `AI-assisted support resolves 70% of tier-1 tickets without escalation (Klarna case study, 2024)
Our current first-response time is X hours — industry benchmark is Y hours
CSAT correlates with resolution speed at r=0.74 across comparable customer bases`,
    elephant: `Customers who wait less trust us more
This isn't automation for its own sake — it's time back to your customer
The agents who handle escalations will focus on the cases that actually need human judgment`,
    path: `Start with FAQ and tier-1 query automation
Review flagged and escalated cases weekly with the support lead
Expand scope only after 60-day quality gate: <5% false escalation rate`
  },
  risk: {
    rider: `Manual compliance review catches approximately 85% of violations; AI-assisted review raises that to 97% (NIST AI RMF baseline, 2024)
Regulatory exposure under EU AI Act (2024) and US state laws increases with undocumented AI use
One missed violation in this domain costs an estimated $X in remediation and reputational exposure`,
    elephant: `This is about protecting the organization and the people in it — not surveillance
Responsible AI signals trust to employees, customers, and regulators simultaneously
Getting ahead of this now is leadership — waiting makes it reactive and costly`,
    path: `Shadow mode first: AI flags potential issues, humans make all decisions
Run for 90 days and audit false-positive rate
Promote to co-pilot mode only after audit confirms accuracy threshold`
  },
  talent: {
    rider: `Organizations that invest in AI literacy outperform peers by 3.4× on innovation metrics (BCG, 2024)
Our workforce has an estimated X roles with high AI-augmentation potential per internal job analysis
Peer organizations report 40% reduction in change resistance after structured literacy programs`,
    elephant: `This is about making your people more valuable — not replacing them with a tool
The employees who learn to work with AI become the organization's competitive advantage
Investing in your team's skills is the clearest signal that this change is for them, not to them`,
    path: `Start with a 2-hour AI literacy session for all affected teams
Identify 3 early adopters per team who will become internal champions
Run a structured champion program for 60 days before broader rollout`
  },
  data: {
    rider: `Model performance is bounded by data quality — organizations with mature data foundations see 2× higher AI ROI (McKinsey, 2025)
Our current data readiness score is X (per the AI Readiness Scorecard)
Three high-value use cases are blocked today by data availability, not by AI capability`,
    elephant: `We have years of organizational knowledge locked in systems that can't talk to each other — this unlocks it
Better data doesn't just power AI; it improves every decision we make as an organization
This investment pays dividends whether or not AI is the end use case`,
    path: `Audit one high-value data source in the first 30 days
Clean, label, and connect it to one downstream system
Prove value with one concrete use case before expanding the data program`
  },
  competitive: {
    rider: `67% of Fortune 500 CEOs cite AI as a top-3 strategic priority (PwC CEO Survey, 2025)
Three direct competitors have announced AI programs in the past 12 months
Early movers in our sector are reporting X% improvement in [key metric] after 18 months`,
    elephant: `This is not about chasing trends — it's about not ceding ground we've spent years building
Our customers will experience AI-powered alternatives; the question is whether those alternatives are ours or a competitor's
Moving now is a decision to compete on terms we choose`,
    path: `Define 2 competitive scenarios where AI changes the playing field for us within 18 months
Assign an owner to monitor and respond to each scenario
Review and update the scenarios quarterly at the leadership offsite`
  },
  governance: {
    rider: `The EU AI Act (2024) creates direct liability for high-risk AI systems without audit trails
Emerging US state laws (Illinois, Colorado, New York) are adding employment AI requirements in 2025–2026
We currently have an estimated X AI systems in production without a formal governance record`,
    elephant: `Responsible AI is a trust signal — to employees, customers, and regulators
Getting ahead of governance is leadership; being forced into it by a regulator is a crisis
This is about ensuring the organization can stand behind every AI decision we make`,
    path: `Inventory all AI systems in use across the organization within 30 days
Apply a risk tier (high / medium / low) to each system using the EU AI Act classification
Assign a named accountability owner for each high-risk system before quarter end`
  }
};

function prefillFromArchetype(key) {
  const a = ARCHETYPES[key];
  if (!a) return;
  document.getElementById('riderText').value = a.rider;
  document.getElementById('elephantText').value = a.elephant;
  document.getElementById('pathText').value = a.path;
}

function toggleLever(id) {
  const body = document.getElementById(id + 'Body');
  const chevron = document.getElementById(id + 'Chevron');
  const header = body.previousElementSibling;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
  header.setAttribute('aria-expanded', String(!isOpen));
}

function handleLeverKey(e, id) {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLever(id); }
}

// Pre-fill on archetype change
document.getElementById('archetypeSelect').addEventListener('change', function() {
  prefillFromArchetype(this.value);
});

// Pre-fill on load with default archetype
prefillFromArchetype('cost');
</script>
```

- [ ] **Step 2: Open in browser and verify**

Verify:
- Page loads with Cost Reduction content pre-filled in all three textareas
- Changing archetype dropdown immediately updates all three textareas
- Cycling through all 8 archetypes fills correct content in each lever
- Clicking lever headers collapses/expands the textarea bodies
- Chevron rotates correctly on collapse/expand

- [ ] **Step 3: Commit**

```bash
git add artifacts/communication-strategy.html
git commit -m "add communication-strategy: archetypes data and pre-fill logic"
```

---

### Task 4: Right column — output panel HTML + CSS

**Files:**
- Modify: `artifacts/communication-strategy.html`

- [ ] **Step 1: Add CSS for the right column output panel**

Inside `<style>`, after the existing left-column CSS, add:

```css
  /* ── Right column — output panel ── */
  .output-panel{position:sticky;top:28px;}

  .output-card{background:#fff;border-radius:14px;box-shadow:0 2px 12px #0000000d;padding:28px;margin-bottom:20px;}
  .output-card h3{font-size:0.78rem;font-weight:700;color:#1a237e;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:18px;}

  .plan-header{margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid #e8edf8;}
  .plan-title{font-size:1.2rem;font-weight:800;color:#1a237e;margin-bottom:4px;min-height:1.5em;}
  .plan-meta{font-size:0.8rem;color:#5c6bc0;}

  .lever-block{margin-bottom:18px;padding-bottom:18px;border-bottom:1px solid #f0f2fa;}
  .lever-block:last-child{border:none;margin-bottom:0;padding-bottom:0;}
  .lever-block-label{font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;gap:8px;}
  .lever-block-label .dot{width:10px;height:10px;border-radius:50%;display:inline-block;}
  .rider-dot{background:#3949ab;}
  .elephant-dot{background:#c2185b;}
  .path-dot{background:#2e7d32;}
  .lever-block-content{font-size:0.85rem;color:#374060;line-height:1.7;white-space:pre-wrap;}

  .tp-block{background:#f8f9ff;border-radius:10px;padding:14px 16px;margin-bottom:12px;}
  .tp-label{font-size:0.72rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#3949ab;margin-bottom:8px;}
  .tp-list{padding-left:18px;margin:0;}
  .tp-list li{font-size:0.82rem;color:#374060;line-height:1.6;margin-bottom:3px;}
  .btn-copy{margin-top:8px;background:transparent;border:1px solid #c5cae9;color:#3949ab;padding:4px 12px;border-radius:6px;font-size:0.75rem;cursor:pointer;font-weight:600;}
  .btn-copy:hover{background:#e8eaf6;}
  .btn-copy:focus{outline:2px solid #3949ab;outline-offset:2px;}

  .output-empty{text-align:center;padding:40px 20px;color:#9fa8da;}
  .output-empty .empty-icon{font-size:2.5rem;margin-bottom:12px;}
  .output-empty p{font-size:0.85rem;line-height:1.6;}
```

- [ ] **Step 2: Replace `<div id="rightCol">` with the output panel HTML**

```html
  <div id="rightCol">
    <div class="output-panel">
      <!-- One-pager -->
      <div class="output-card" id="onePager">
        <h3>Communication Plan</h3>
        <div id="planContent">
          <div class="output-empty">
            <div class="empty-icon">&#128196;</div>
            <p>Fill in the levers and click<br><strong>Generate Plan</strong> to see your formatted plan.</p>
          </div>
        </div>
      </div>
      <!-- Talking points -->
      <div class="output-card" id="tpCard" style="display:none;">
        <h3>Talking Points</h3>
        <div id="tpContent"></div>
      </div>
    </div>
  </div>
```

- [ ] **Step 3: Open in browser and verify**

Verify:
- Right column appears with "Communication Plan" card showing empty state (paper icon + instruction text)
- Talking Points card is hidden
- Sticky positioning holds the panel in view as page scrolls
- Layout is visually balanced — left column form, right column output

- [ ] **Step 4: Commit**

```bash
git add artifacts/communication-strategy.html
git commit -m "add communication-strategy: right column output panel HTML and CSS"
```

---

### Task 5: JS — Generate Plan logic + talking points rendering

**Files:**
- Modify: `artifacts/communication-strategy.html`

- [ ] **Step 1: Add `generatePlan()` function to the `<script>` block**

Inside `<script>`, after the `prefillFromArchetype('cost');` line, add:

```js
function generatePlan() {
  const initiative = document.getElementById('initiativeName').value.trim() || 'Untitled Initiative';
  const audience = document.getElementById('targetAudience').value.trim() || 'All Stakeholders';
  const rider = document.getElementById('riderText').value.trim();
  const elephant = document.getElementById('elephantText').value.trim();
  const path = document.getElementById('pathText').value.trim();
  const date = new Date().toISOString().slice(0, 10);

  // Render one-pager
  document.getElementById('planContent').innerHTML = `
    <div class="plan-header">
      <div class="plan-title">${escHtml(initiative)}</div>
      <div class="plan-meta">Audience: ${escHtml(audience)} &nbsp;·&nbsp; ${date}</div>
    </div>
    <div class="lever-block">
      <div class="lever-block-label"><span class="dot rider-dot"></span><span style="color:#3949ab;">THE RIDER</span> — Appeal to Rational Thinking</div>
      <div class="lever-block-content">${escHtml(rider)}</div>
    </div>
    <div class="lever-block">
      <div class="lever-block-label"><span class="dot elephant-dot"></span><span style="color:#c2185b;">THE ELEPHANT</span> — Engage Emotion</div>
      <div class="lever-block-content">${escHtml(elephant)}</div>
    </div>
    <div class="lever-block">
      <div class="lever-block-label"><span class="dot path-dot"></span><span style="color:#2e7d32;">THE PATH</span> — Make It Easy</div>
      <div class="lever-block-content">${escHtml(path)}</div>
    </div>
  `;

  // Render talking points
  const levers = [
    { id: 'rider', label: 'Rider', color: '#3949ab', text: rider },
    { id: 'elephant', label: 'Elephant', color: '#c2185b', text: elephant },
    { id: 'path', label: 'Path', color: '#2e7d32', text: path }
  ];

  document.getElementById('tpContent').innerHTML = levers.map(lv => {
    const bullets = lv.text.split('\n').map(s => s.trim()).filter(Boolean).slice(0, 5);
    const items = bullets.map(b => `<li>${escHtml(b)}</li>`).join('');
    return `
      <div class="tp-block" id="tp-${lv.id}">
        <div class="tp-label" style="color:${lv.color};">${lv.label}</div>
        <ul class="tp-list">${items}</ul>
        <button class="btn-copy" onclick="copyTP('${lv.id}')" aria-label="Copy ${lv.label} talking points">Copy</button>
      </div>`;
  }).join('');

  document.getElementById('tpCard').style.display = '';
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function copyTP(id) {
  const block = document.getElementById('tp-' + id);
  const items = Array.from(block.querySelectorAll('li')).map(li => '• ' + li.textContent).join('\n');
  navigator.clipboard.writeText(items).then(() => {
    const btn = block.querySelector('.btn-copy');
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
  });
}
```

- [ ] **Step 2: Open in browser and verify**

Verify:
- Click "Generate Plan" with Cost Reduction pre-filled content
- Right column shows formatted one-pager with initiative name, audience, date, and three lever blocks
- Lever blocks have colored labels (blue / pink / green)
- Talking Points card appears below with three tp-blocks
- Each tp-block shows up to 5 bullet points from the textarea (newline-split)
- "Copy" button appears per lever
- Click Copy → button text changes to "Copied!" for ~1.5s → reverts to "Copy"
- Test with custom initiative name and audience — both appear in the plan header

- [ ] **Step 3: Test with a custom archetype + edited content**

- Select "Governance & Ethics" from dropdown
- Edit the Rider textarea — add a custom line
- Click Generate Plan
- Verify the custom line appears in the plan and talking points

- [ ] **Step 4: Commit**

```bash
git add artifacts/communication-strategy.html
git commit -m "add communication-strategy: Generate Plan logic and talking points with copy-to-clipboard"
```

---

### Task 6: Print styles + keyboard nav + ARIA polish

**Files:**
- Modify: `artifacts/communication-strategy.html`

- [ ] **Step 1: Add print styles to `<style>`**

Add inside `<style>`, after the `@media(max-width:900px)` block:

```css
  @media print{
    header{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .main{grid-template-columns:1fr;display:block;}
    #leftCol{display:none;}
    #rightCol{display:block;width:100%;}
    .output-panel{position:static;}
    .output-card{box-shadow:none;border:1px solid #e8edf8;page-break-inside:avoid;}
    .btn-copy{display:none;}
    .footer{border-top:1px solid #ccc;}
    body{background:#fff;}
  }
```

- [ ] **Step 2: Verify print layout**

In Chrome: open the file → Ctrl+P (or Cmd+P) → Print Preview.
Verify:
- Left column (form) is hidden
- Right column output fills the full page width
- One-pager and talking points cards both visible
- Copy buttons hidden
- No shadows — clean for PDF

- [ ] **Step 3: Verify keyboard navigation**

Tab through the page. Expected tab order:
1. Initiative Name input (header)
2. Target Audience input (header)
3. Print button (header)
4. Archetype dropdown
5. Rider lever header (collapsible) → Enter/Space toggles
6. Rider textarea
7. Elephant lever header → Enter/Space toggles
8. Elephant textarea
9. Path lever header → Enter/Space toggles
10. Path textarea
11. Generate Plan button
12. Copy buttons (after plan is generated)

If any element is unreachable by Tab, add `tabindex="0"` to it.

- [ ] **Step 4: Verify ARIA**

Using browser DevTools Accessibility panel or axe extension, check:
- `aria-label` present on all inputs, textarea, select, and buttons
- `aria-expanded` on lever headers updates correctly on toggle
- `aria-controls` on lever headers points to correct body IDs
- No missing labels on interactive elements

Fix any gaps found. Common fix pattern:
```html
aria-label="Descriptive label for screen reader"
```

- [ ] **Step 5: Commit**

```bash
git add artifacts/communication-strategy.html
git commit -m "add communication-strategy: print styles, keyboard nav, and ARIA polish"
```

---

### Task 7: Update README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add audience routing row**

In `README.md`, find the audience routing table (the one that starts with "You are..."). Add this row:

```markdown
| A change leader communicating an AI initiative | [`communication-strategy.html`](artifacts/communication-strategy.html) → [`executive-briefing.html`](artifacts/executive-briefing.html) |
```

- [ ] **Step 2: Add artifact registry row**

In `README.md`, find the artifact registry table (the one with columns "Artifact | Type | What it does"). Add this row:

```markdown
| [`communication-strategy.html`](artifacts/communication-strategy.html) | Planning tool | Select an AI initiative archetype (8 options) → edit Rider / Elephant / Path levers → get a formatted communication plan + talking points. Print to PDF or copy talking points. Based on Heath & Heath, *Switch* (2010). |
```

- [ ] **Step 3: Add direct artifact link**

In the "Direct artifact links" section, add:

```markdown
- [Communication strategy framework](https://gmanch94.github.io/ai-architect-showcase/artifacts/communication-strategy.html)
```

- [ ] **Step 4: Verify README renders correctly**

Open `README.md` in a Markdown previewer (VS Code preview or GitHub). Verify:
- New audience routing row appears in the correct table
- New artifact row appears in the correct table with correct link
- No broken table formatting (pipe characters aligned, no stray backticks)

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs: add communication-strategy to artifact registry and audience routing"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** 8 archetypes ✓ | Split-pane layout ✓ | Archetype pre-fill ✓ | Generate Plan button ✓ | Formatted one-pager ✓ | Talking points ✓ | Copy-to-clipboard ✓ | Print-to-PDF ✓ | Keyboard nav ✓ | ARIA ✓ | No CDN ✓ | CC-BY-4.0 footer ✓ | README update ✓
- [x] **No placeholders:** All code blocks complete. No TBDs.
- [x] **Type consistency:** `escHtml()` defined in Task 5 Step 1, called in same block. `toggleLever()` defined in Task 3, referenced in Task 2 HTML `onclick`. `generatePlan()` defined in Task 5, referenced in Task 2 HTML `onclick`. `copyTP()` defined in Task 5, referenced in Task 5 generated HTML. All consistent.
- [x] **ID consistency:** `riderText`, `elephantText`, `pathText` defined in Task 2, read in Task 5. `riderBody`, `elephantBody`, `pathBody` defined in Task 2, toggled in Task 3. `tp-rider`, `tp-elephant`, `tp-path` generated in Task 5, read in `copyTP()`. All consistent.
