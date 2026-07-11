#!/usr/bin/env node
// check-md-pipes.mjs — flag stray-pipe phantom-table risks in tracked .md files.
//
// WHY: kramdown (GitHub Pages) and GFM parse a raw " | " in prose, a list item,
// or a lone "| a | b |" line as a one-row table — chopping the sentence into
// cells so the page reads truncated. Backticks do NOT save you: `x` | `y` still
// trips it. See ~/.claude/rules/markdown-render-gotchas.md (precedent: this repo's
// docs/superpowers plan+spec, fixed in PR #3).
//
// Scope: `git ls-files '*.md'` — tracked files only, so gitignored scratch/ is
// excluded automatically and any new .md is covered without editing this script.
//
// Exit 0 = clean. Exit 1 = suspects found (print file:line + reason). Exit 2 = error.
// Usage: node scripts/check-md-pipes.mjs

import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const SEP = /^\s*\|?[\s:|-]*-{2,}[\s:|-]*\|?\s*$/; // table separator row |---|
const INLINE_PIPE = /`[^`]*`\s*\|\s*`/;            // `x` | `y`

// True if any individual `code span` on the line contains a pipe. Tests each
// span in isolation so a real column-delimiter pipe sitting BETWEEN two spans
// is not mistaken for an in-span pipe. (Input should have escaped \| stripped.)
function codeSpanHasPipe(s) {
  return (s.match(/`[^`]+`/g) || []).some(span => span.includes('|'));
}

// A pipe line is a genuine table row only if a separator row sits in its
// contiguous run of pipe-bearing lines (above or below).
function isTableRow(lines, i) {
  if (!lines[i].includes('|')) return false;
  for (let j = i; j >= 0 && lines[j].includes('|'); j--) if (SEP.test(lines[j])) return true;
  for (let j = i; j < lines.length && lines[j].includes('|'); j++) if (SEP.test(lines[j])) return true;
  return false;
}

function scan(file) {
  const lines = readFileSync(file, 'utf8').split('\n');
  const hits = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (ln.trim().startsWith('```')) { inFence = !inFence; continue; } // fenced code = safe
    if (inFence) continue;
    if (!ln.includes('|')) continue;
    if (SEP.test(ln)) continue;
    const bare = ln.replace(/\\\|/g, ' '); // escaped \| renders as a literal pipe, never a table — neutralize to a space (not empty, which would mis-pair backticks)
    if (!bare.includes('|')) continue;    // only escaped pipes on this line: safe
    if (isTableRow(lines, i)) {
      // real table row — but an UNescaped pipe inside a code span breaks the cell it sits in
      if (codeSpanHasPipe(bare)) hits.push({ file, line: i + 1, tag: 'pipe inside code span in table cell', text: ln.trim().slice(0, 130) });
      continue;
    }
    const tag = INLINE_PIPE.test(bare) ? 'inline-code-pipe' : 'prose/list/bare-row pipe';
    hits.push({ file, line: i + 1, tag, text: ln.trim().slice(0, 130) });
  }
  return hits;
}

function main() {
  let files;
  try {
    files = execSync('git ls-files "*.md"', { encoding: 'utf8' })
      .split('\n').map(s => s.trim()).filter(Boolean).filter(existsSync);
  } catch (e) {
    console.error('check-md-pipes: not a git repo or git unavailable:', e.message);
    process.exit(2);
  }
  const hits = files.flatMap(scan);
  if (hits.length === 0) {
    console.log(`check-md-pipes: OK — 0 stray-pipe phantom-table risks across ${files.length} tracked .md file(s).`);
    process.exit(0);
  }
  console.error(`check-md-pipes: ${hits.length} suspect line(s) — raw pipes that kramdown/GFM may render as phantom tables:\n`);
  for (const h of hits) console.error(`  ${h.file}:${h.line} [${h.tag}]\n    ${h.text}`);
  console.error(`\nFix: replace body " | " with commas, "or", "/", or " · " (middot);`);
  console.error(`escape a literal pipe as \\|; wrap "add this row" table snippets in a \`\`\`markdown fence.`);
  console.error(`Then render-verify on the published page, not the editor.`);
  process.exit(1);
}

main();
