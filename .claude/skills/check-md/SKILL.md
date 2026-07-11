---
name: check-md
description: Scan the repo's tracked .md files for stray-pipe phantom tables (kramdown/GitHub-Pages render bug), report file:line hits, guide the fix, and render-verify on the published Pages HTML. Use before shipping any .md change, when a published doc page reads truncated/chopped, or when the user says "check md", "md gate", "phantom table", or "apply the markdown-render rule".
---

# check-md — stray-pipe phantom-table gate

Encodes `~/.claude/rules/markdown-render-gotchas.md` as a repeatable gate for this repo. Precedent: `docs/superpowers` plan+spec had 4 raw-pipe lines rendering as phantom `<td>` cells on the live kramdown Pages build (fixed in PR #3).

## The bug

kramdown (GitHub Pages) and GFM parse a raw `\|` in **prose**, a **list item**, or a **lone `\| a \| b \|` line** as a one-row table — chopping the sentence into cells so the published page reads truncated. Backticks do NOT protect the line: a `` `code` \| `code` `` pattern still trips it. The source and the local editor look fine; only the rendered HTML shows the break. The source is not the artifact — the published page is.

## Run the gate

```
node scripts/check-md-pipes.mjs
```

- Scans `git ls-files '*.md'` — tracked files only (gitignored `scratch/` auto-excluded; new `.md` covered without editing the script).
- Exit `0` = clean. Exit `1` = suspects (prints `file:line` + the offending text). Exit `2` = git/error.
- It skips fenced code blocks and genuine tables (header + `\|---\|` separator), so only real risks surface.

## Fix each hit

| Hit shape | Fix |
|---|---|
| A raw `\|` between words in prose | commas, `or`, `/`, or ` · ` (middot) |
| Column names quoted in prose (`"Artifact \| Type"`) | commas: `"Artifact", "Type"` |
| List/checklist item with a `\|` chain | ` · ` middot separators |
| Bare `\| a \| b \|` "add this row" snippet | wrap in a ```` ```markdown ```` fence |
| A literal pipe you truly need in prose | escape as `\|` or `&#124;` |

Re-run the gate until it reports `0`.

## Render-verify on the published page (required)

Local pass is necessary but not sufficient — confirm on the live kramdown HTML.

1. Pages URL: `https://gmanch94.github.io/ai-architect-showcase/`. A tracked `docs/**/foo.md` publishes at `.../docs/**/foo.html`.
2. **Before merge**, fetch the current live page and grep for a stray `<td>` around the suspect text — proves the bug is real (verify-before-fixing), not a false positive.
3. **After merge**, wait for the Pages rebuild, then re-fetch and assert the phantom `<td>` fragments are `0` and the comma/middot/fenced fixes are present.

```
# rebuild poll (legacy Jekyll build)
gh api repos/gmanch94/ai-architect-showcase/pages/builds/latest --jq '[.status,.commit]|@tsv'
# then: curl -s "<page-url>?v=<sha>" | grep -c 'Artifact</td>'   # expect 0
```

## When to use

- Before committing/shipping any `.md` change (part of the pre-ship doc gate).
- When a published doc page reads truncated or a sentence looks cut off.
- Any time `~/.claude/rules/markdown-render-gotchas.md` applies.
