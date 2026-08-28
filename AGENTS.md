# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## What this is

A Vite + React + TypeScript single-page app for building and drilling a personal chess opening repertoire, in English and Italian. No backend, no chess engine at runtime, no network calls. Deployed as a static build on Vercel (`vercel.json`); live at https://chess-trainer-lac.vercel.app. See `README.md` for how to run it, what is in the repertoire, the recipes for adding an opening or a defence, and how the translations are put together.

## The rule that matters most

**A trainer that teaches a wrong move is worse than no trainer.** Every line in `src/data/openings/` and `src/data/defences/` is replayed through `chess.js` by `src/data/openings.test.ts`, which fails on an illegal move, on SAN that is not spelled exactly as `chess.js` writes it (disambiguation included: `Nfd7` vs `Nbd7`), on a named "mistake" that is not actually legal or is named twice, on a trap whose sequence does not play out, and on a path with no end summary. Never weaken those assertions to make a line pass - fix the line.

`npm run verify:theory` is the second half of that guard: it puts every position through Stockfish, reports any move we teach that the engine disputes and any move we call a mistake that is not actually worse, **and** regenerates `src/data/puzzles.generated.ts` with only the puzzles whose answer the engine agrees is uniquely best. It needs `npm install --no-save stockfish` (~240 MB, deliberately not a dependency) and takes over an hour at depth 24. Run it after changing any line or any trap; `--only-puzzles` re-does just the puzzle half, which is much faster.

A `Mistake` marked `deliberate` means the move is objectively sound and declined on repertoire grounds. It changes what the user is told *and* how the statistics count it, so never set it on a move that loses material - there is a test guarding exactly that.

## Where the logic lives

`src/engine/` is pure functions over plain data - `tree.ts` traversal and judgement, `session.ts` the training loop as transitions, `progress.ts` the versioned record, `stats.ts` aggregation, `scheduler.ts` spaced repetition, `puzzles.ts` puzzle generation, `profile.ts` the setup conversation as a state machine. That is where the tests belong. `src/components/Board.tsx` and `MiniBoard.tsx` are the only files that know about `react-chessboard`.

## Translations

`src/i18n/parity.test.ts` is the gate and it is not advisory: every string in one language must exist in the other, with the same `{placeholders}`, and every content key must still correspond to something in `src/data`. Adding a line to a tree adds keys; the test names the first missing one. `node scripts/extract-strings.mjs <entryId|study>` dumps the English source for a whole entry, and `tree()`/`nodes()` in `src/i18n/content/tree.ts` keep the move-path keys readable.

**Move notation is never localised.** SAN comes from `chess.js`, the verifier reads it back, and `progress.ts` keys its records by it. Italian piece letters would break all three. If it ever has to happen, it is a display-only conversion at the rendering edge with the data untouched - raise it as a decision, do not do it inline.

## Sharp edges

- **Errors and off-repertoire choices are never added together.** An `error` is a move that is worse; `off-repertoire` is a sound move this repertoire declines. They are counted separately in `progress.ts`, reported separately by `stats.ts`, worded differently in the coach and the summary, and an off-repertoire answer does not set the spaced-repetition card back. Conflating them makes every accuracy figure a lie, and there are tests on each of those points.
- **One attempt is recorded per decision point, not per try.** `session.ts` keeps a `logged` flag so a user who guesses four times has got one move wrong. The first verdict is the one that sticks, even if they then find the move.
- `.feedback` in `src/styles/index.css` has a **fixed** height, not a floor. The coach panel must never resize as the message changes or every pane below it jumps on each move. If content grows past it, it scrolls; the end-of-line summary opts out via `.feedback--summary`.
- Everything written since v2 uses the `--s1..--s8` spacing scale defined at the top of `src/styles/index.css`, and is laid out mobile-first with wider arrangements added at `min-width` breakpoints. Keep to the scale rather than adding one-off pixel values.
- `react-chessboard` v5 applies `squareStyles` to an inner div, not to the `[data-square]` element. Read `[data-square="e4"] > :last-child` when checking highlights from a browser session.
- Trainer state is remounted per entry via `key={entry.id}` in `App.tsx`, so `restart()` only has to reset the session in place.
- `src/data/puzzles.generated.ts` is generated. Do not hand-edit it; re-run the verifier.
- `src/data/verify-entry.ts` exists only as the bundle entry point for `scripts/`, which run in plain node. Keep it free of anything that imports React.
- **Never run `npm install` while `verify:theory` is running.** Stockfish and Puppeteer are both installed `--no-save`, and any later install prunes the other one out of `node_modules` - which pulls the engine out from under a running verification. Install them together: `npm install --no-save stockfish puppeteer`.
- `src/i18n` is split into `context.ts` / `LocaleProvider.tsx` / `useI18n.ts` / `index.ts` to satisfy oxlint's fast-refresh rule. Keep components and non-component exports in separate files there.
- A verification run caches every engine answer to `.verify-cache.jsonl` as it arrives, so an interrupted run resumes rather than starting again. Delete the file to force a fresh pass; changing depth or movetime already invalidates it.

## Browser checking

`chrome-devtools-axi` was unusable in the environment this was last built in (`take_snapshot` and `screenshot` both failed with `Required at pageId`). The fallback is `npm install --no-save puppeteer` plus a short script that walks the whole path - setup conversation, a drill, a defence drill, the statistics page, a puzzle, a study page - at 1440x900 and 390x844, asserting no console errors and that the document never scrolls horizontally. Try `chrome-devtools-axi` first; if it is still broken, that fallback is the quickest way back to a real browser.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
