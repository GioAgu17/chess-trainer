# Chess Trainer

A local, offline-first web app for building and drilling a personal chess opening repertoire, aimed at roughly 1200 to 1800 rated club players.
Live at **https://chess-trainer-lac.vercel.app**.

Answer three questions and it builds you a repertoire: what you play as White, what you play as Black, and - the part most trainers skip - what to do against the openings you keep facing.
Twenty entries, eight openings and twelve prepared defences indexed by the system you are up against, hold 139 complete lines and 334 decision points where you have to find a move.

Then it drills you on it.
The computer plays the opposing side straight from the repertoire tree and you play your own moves; a wrong move is never silently accepted, and the coach tells a real mistake apart from a sound move that simply is not this repertoire - the two are worded differently and counted separately, because playing the Ruy Lopez against an Italian repertoire is a preference rather than a weakness.
The statistics are drawn from the moves you actually played: accuracy per opening, line and move, the moves you miss most, progress over time, and how much of the repertoire you have never once been asked for.
Puzzles are generated from those weak spots rather than from a generic tactics dump - recall drills, punishing the tempting wrong move, and the traps in each line - and every one of them is checked by Stockfish before it ships, so the app itself needs no engine and makes no network calls.
Each entry also has a study guide written in plain language: the big idea, the structures, the plans, and the ways club players go wrong.

Everything is in English and Italian, interface and content alike, and progress lives in your browser's `localStorage` and never leaves it.

## Running it

```sh
npm install
npm run dev
```

The dev server prints a local URL; open it in a browser.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm test` | Run the vitest suite once |
| `npm run test:watch` | Run vitest in watch mode |
| `npm run lint` | Run oxlint |
| `npm run typecheck` | Type-check without emitting |
| `npm run verify:theory` | Engine-check the repertoire and regenerate the puzzles ([details](docs/development.md#checking-the-theory-with-an-engine)) |
| `npm run check:browser` | Walk the whole app in a real browser ([details](docs/development.md#checking-it-in-a-browser)) |

## Contributing

Contributions are welcome, and a report costs you nothing to file.

**Start with an issue.**
A bug, a line of theory you think is wrong, a translation that reads badly, an idea for something the trainer should do - all of it starts in [Issues](https://github.com/GioAgu17/chess-trainer/issues), where there are four short forms to pick from.
Agreeing on the problem first is the difference between a fix that lands and a pull request that sits, and an issue on its own is a real contribution.

**Then a pull request** from a branch, referencing the issue (`Fixes #123`) and keeping to one topic.
Run `npm run lint`, `npm test` and `npm run build` before you open it; all three run again on the pull request.
Every pull request needs my review and approval before it can reach `main` - that is enforced on the branch rather than left to good manners, so one that looks blocked is not broken.

**A wrong line teaches someone the wrong thing**, so a change to opening theory, a trap or puzzle data must also pass `npm run verify:theory`, which puts every position through Stockfish.
If you cannot run it, say so in the pull request and it can be run for you.

[`docs/development.md`](docs/development.md) covers how the code is laid out, the tests, the engine verification, the browser checks and deployment.
[`docs/adding-content.md`](docs/adding-content.md) is the recipe for adding an opening, a defence, or a whole new language.
