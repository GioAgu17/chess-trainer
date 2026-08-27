# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## What this is

A Vite + React + TypeScript single-page app for drilling chess openings. No backend, no chess engine, no runtime network calls. See `README.md` for how to run it and how to add an opening.

## The rule that matters most

**A trainer that teaches a wrong move is worse than no trainer.** Every line in `src/data/openings/` is replayed through `chess.js` by `src/data/openings.test.ts`, which fails on an illegal move, on SAN that is not spelled exactly as `chess.js` writes it (disambiguation included: `Nfd7` vs `Nbd7`), on a named "mistake" that is not actually legal, and on a path with no end summary. Never weaken those assertions to make a line pass - fix the line.

When writing opening prose, state plans and structures. Do not assert a concrete tactical evaluation you cannot verify; there is no engine here to check it.

## Where the logic lives

`src/engine/` is pure functions over plain data (`tree.ts` traversal and judgement, `session.ts` the training loop as transitions, `progress.ts` the localStorage record). That is where the tests belong. `src/components/Board.tsx` is the only file that knows about `react-chessboard`.

## Sharp edges

- `.feedback` in `src/styles/index.css` has a **fixed** height, not a floor. The coach panel must never resize as the message changes or every pane below it jumps on each move. If content grows past it, it scrolls; the end-of-line summary opts out via `.feedback--summary`.
- `react-chessboard` v5 applies `squareStyles` to an inner div, not to the `[data-square]` element. Read `[data-square="e4"] > :last-child` when checking highlights from a browser session.
- Trainer state is remounted per opening via `key={opening.id}` in `App.tsx`, so `restart()` only has to reset the session in place.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
