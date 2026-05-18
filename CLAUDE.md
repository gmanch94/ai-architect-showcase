# CLAUDE.md

Guidance for Claude Code working in this repo. Auto-loaded at the start of every session.

---

## What this repo is

**AI Architect Showcase** — self-contained executive AI strategy artifacts (HTML, Markdown) for non-technical leaders making AI investment and governance decisions. Hosted on GitHub Pages; no build step.

Not a framework library — single-purpose artifacts only, each fully self-contained (one file = one deliverable).

---

## Session-start protocol

Before any tool calls beyond basic orientation:

1. Read [`scratch/NEXT_SESSION.md`](scratch/NEXT_SESSION.md) — resume bookmark: HEAD, branch, what landed last session, open items, things NOT to do without explicit instruction
2. Read [`LESSONS_LEARNED.md`](LESSONS_LEARNED.md) — process lessons from prior sessions; re-reading prevents repeat mistakes
3. Read this file — repo posture and constraints
4. `git status` + `git log --oneline -5` — confirm state matches the bookmark
5. Only then ask the user what they want to work on — do not start anything proactively

---

## Source of truth

**README.md** is the canonical artifact registry. Every artifact row maps the filename to its type, audience, and purpose.

Never add a new artifact without adding a corresponding row to README.md.

---

## Repo structure

```
ai-architect-showcase/
├── CLAUDE.md                  ← This file
├── LESSONS_LEARNED.md         ← Process lessons (re-read each session)
├── README.md                  ← Artifact registry (source of truth)
├── scratch/                   ← Gitignored; NEXT_SESSION.md and personal workspace
├── context/                   ← Claude's persistent project memory
│   └── MEMORY.md              ← Memory index
├── artifacts/                 ← All deliverables (HTML + .md)
│   ├── executive-briefing.html
│   ├── readiness-scorecard.html
│   ├── portfolio-worksheet.html
│   ├── hr-maturity-checklist.html
│   ├── mindmap.html
│   ├── case-study-library.html
│   ├── glossary.html
│   ├── communication-strategy.html
│   └── ai-strategy-framework.md
└── .claude/
    └── settings.json          ← Pre-allowed safe operations
```

---

## Sprint workflow

For any non-trivial task:

1. **Assumptions** — surface unstated assumptions before touching any artifact
2. **Plan** — agree on scope; use `/adr` if a design decision needs recording
3. **Implement** — build against the agreed plan; invoke Confusion Protocol if new ambiguity surfaces
4. **Review** — run `/review` before opening a PR
5. **Ship** — feature branch + PR; no direct commits to `main`
6. **Retro** — run `/retro` at end of session; write new lessons to LESSONS_LEARNED.md

Skip steps only with explicit agreement.

---

## Working conventions

- **Branch naming**: `feat/<slug>`, `fix/<slug>`, `content/<slug>`
- **Commit style**: imperative, present tense (`add glossary term`, `fix scorecard radar`)
- **One artifact = one file** — never split an artifact across multiple files
- **No build system** — plain HTML/CSS/JS; no npm, no bundlers, no transpilation
- **Self-contained files** — all CSS and JS inlined; no external CDN dependencies that can break
- **External references** — D3, Chart.js may be loaded from CDN only when already present in the file; document the version
- **Accessibility** — every interactive artifact must keyboard-navigate; ARIA labels on all chart elements
- **Print-to-PDF** — every HTML artifact must have `@media print` styles; test before shipping

**Confusion Protocol** — when facing an ambiguous requirement or design fork, stop and surface the assumption explicitly. Never guess. Ask one targeted question instead of producing output that may be wrong.

---

## Tone and output constraints

- No emojis in artifact content or commit messages unless explicitly requested
- Numeric where possible — "42% of executives" not "many executives"
- Every recommendation in artifacts names a failure mode — no universally-best options
- Source claims: every stat needs a citation anchor (already in README sourcing section)
- Code comments only when the WHY is non-obvious — never "this div shows the radar chart"
- Artifacts address the reader directly ("You are…", "Your organization…") — not third person

---

## Things to avoid

- Don't commit directly to `main` — all changes via feature branch + PR
- Don't push to remote without explicit user instruction
- Don't add CDN dependencies mid-artifact without checking if the artifact already loads one
- Don't inline data that belongs in the artifact's editable config block
- Don't use long PowerShell here-strings for commit messages — hits 948-byte parse limit; use inline `-m "..."` instead

**Four failure modes to guard against (Karpathy):**
- **Wrong assumptions** — don't guess at intent; surface the assumption and ask
- **Overcomplexity** — don't add abstraction the task doesn't require
- **Orthogonal edits** — don't touch artifacts outside the stated task scope
- **Imperative over declarative** — describe the desired outcome, not the steps

---

## Automation

**Skills** (type in Claude Code prompt):

- `/office-hours` — surface unstated assumptions; produce design doc before implementation
- `/review` — code review with [BLOCKER] / [SUGGESTION] / [NITPICK] format
- `/adr` — draft an Architecture Decision Record
- `/retro` — retrospective; reviews recent commits; writes lessons to LESSONS_LEARNED.md

**Permissions:** `.claude/settings.json` pre-allows safe read-only operations so they never prompt. Write/Edit/Bash remain prompt-required — add to `settings.local.json` (gitignored) for your machine.

---

## Worktree cleanup (after merge)

Worktrees are created externally by the harness — `ExitWorktree` won't work. After a branch is merged and remote deleted, clean up from the **main repo directory**:

```powershell
cd "C:/Users/giris/Documents/GitHub/ai-architect-showcase"
git fetch --prune
git worktree prune
git branch -d <branch-name>
```

If the worktree folder still exists (e.g. locked by a running session), delete it manually then run `git worktree prune`.
