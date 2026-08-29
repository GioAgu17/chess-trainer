# Adding content

The recipes for adding an opening, a defence, or a language.
See [`development.md`](development.md) for how the tests and the engine verification then check it, and the project's `AGENTS.md` for the rules that apply to every line in the repertoire.

## Adding an opening

1. **Write the file.** Copy the shape of an existing one, for example `src/data/openings/italian.ts`.

   ```ts
   import type { Opening } from '../types'

   export const myOpening: Opening = {
     kind: 'opening',
     id: 'my-opening',        // stable slug, also a storage key - never change it
     name: 'My Opening',
     eco: 'A00',
     side: 'white',           // the colour the user trains
     summary: 'One or two sentences on the strategic idea.',
     traps: [ /* see below */ ],
     tree: [ /* see below */ ],
   }
   ```

2. **Build the move tree.** `tree` holds the children of the *initial position*, so its entries are always White's first move, whichever colour the user plays.
   Each node is one ply:

   ```ts
   {
     san: 'e4',                     // exactly as chess.js writes it
     idea: 'Why this move is played. Shown once it is on the board.',
     hint: 'A nudge for a wrong move that does not give the answer away.',
     mistakes: [                    // optional, user nodes only
       { san: 'd4', why: 'Why this particular move is not played here.' },
       // `deliberate` means the move is objectively sound and is declined on
       // repertoire grounds, not because it is bad. The trainer then says
       // "sound move, not this repertoire" instead of calling it an error, and
       // the statistics count it separately from a real mistake.
       { san: 'Bb5', deliberate: true, why: 'A perfectly good move, but that is the Ruy Lopez.' },
     ],
     punish: true,                  // optional, opponent nodes only - see below
     children: [ /* replies */ ],
     end: { name: '...', plans: ['...'] },  // on the last node of a path
   }
   ```

   Whose move a node represents is derived from its depth and the entry's `side`, so it is never stored.

   - At a **user** turn, list exactly one child: the repertoire move. It needs `idea` and `hint`.
   - At an **opponent** turn, list two to five children. The first is the main line and the rest are deviations, and each needs a `label` naming the try. In `Add sidelines` mode the computer picks among them.
   - `punish: true` on an opponent node says the branch is there *because* the move loses - the King's Gambit's 3.fxe5 is one. The verifier then requires it to be losing rather than plausible, and the puzzle generator builds a punish exercise from it.
   - Every path must end at a node carrying `end`, with at least two `plans`.

3. **Add the traps.** At least one per entry, with both sides represented across the set:

   ```ts
   traps: [
     {
       id: 'legal-mate',                       // unique within the entry
       name: "Legal's Mate",
       owner: 'ours',                          // 'ours' to spring, 'theirs' to avoid
       moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'd6', 'Nc3', 'Bg4', 'Nxe5'],
       setup: 8,                               // index of the move that is the point
       point: 'What the trap does, in plain English.',
     },
   ]
   ```

4. **Write the study guide** in `src/data/study/openings.ts`, keyed by the same id.
   The tests check it has a real big idea, at least one pawn structure described from both sides, three plans, two key squares, a pawn break, a middlegame description and two pitfalls - and that it reads as English rather than as a game score.

5. **Register it** in `src/data/openings/index.ts`.

6. **Translate it.** `node scripts/extract-strings.mjs <id>` dumps every new key with its English source; add the Italian to `src/i18n/content/it/`. The parity test fails until it is done, and tells you which key is next.

7. **Run the tests.** `npm test` will not let a broken opening through, and `npm run verify:theory` checks the theory itself.

## Adding a defence

A defence is the same move tree with a different index: it is filed under what the *opponent* plays.

1. **Write the file** in `src/data/defences/`, copying the shape of `src/data/defences/london.ts`:

   ```ts
   import type { Defence } from '../types'

   export const vsSomething: Defence = {
     kind: 'defence',
     id: 'vs-something',          // stable slug, `vs-` prefixed by convention
     name: 'Their System',
     eco: 'A00',
     side: 'black',               // a defence is always played from the black side
     system: 'Their System',      // two entries may share one system
     family: 'd4',                // 'd4' | 'e4' | 'flank' - how the picker groups it
     recognisedBy: {
       moves: '1.d4 Nf6 2.Bf4',   // must start with the tree's first move
       tell: 'The plain-English giveaway, in a sentence or two.',
     },
     theirPlan: 'What the opponent is trying to do, and why it is annoying. Forty words or more.',
     recipe: [
       'Four or more concrete steps, each a real sentence.',
     ],
     summary: 'One or two sentences, as for an opening.',
     traps: [ /* at least one */ ],
     tree: [ /* exactly as for an opening */ ],
   }
   ```

2. **Give a system two answers** only when both are genuinely reasonable and they feel different to play.
   Both entries then need a `temperament`, and the setup conversation turns it into a question:

   ```ts
   temperament: {
     key: 'open',
     name: 'Open',
     blurb: 'One line on what playing it feels like.',
   },
   ```

   The Catalan is the worked example: `vs-catalan-open` and `vs-catalan-closed` share `system: 'Catalan'`.

3. **Write the study guide** in `src/data/study/defences.ts`, keyed by the entry id.

4. **Register it** in `src/data/defences/index.ts`.

5. **Translate it.** Same recipe as for an opening: `node scripts/extract-strings.mjs <id>`, then a file under `src/i18n/content/it/` using the `tree()` helper.

6. **Run the tests, then the engine.** The defence tests additionally check that the entry explains the opponent's plan, gives a real recipe, starts from the moves it says identify the system, and carries at least one trap.

## How the translations are put together

```
src/i18n/
  locales.ts       the list of locales, the storage key and the browser detection
  keys.ts          derives a content key for every translatable string in the data
  localize.ts      rebuilds an entry or a study guide in a locale, cached per locale
  ui/en.ts         the English UI catalogue - the source of truth for the key list
  ui/it.ts         the Italian UI catalogue, typed against it
  content/it/      the repertoire and the study guides in Italian
  parity.test.ts   the gate: no missing keys, no orphans, no untranslated paragraphs
```

Two ideas keep it honest:

- **UI strings** live in typed catalogues. `ui/en.ts` exports the `UiKey` union, and `ui/it.ts` is declared as `UiCatalogue`, so a missing or misspelled key is a *type error*, not a runtime fallback.
- **Content strings** - everything that lives in `src/data` - are not duplicated. `keys.ts` derives a key from where the string sits (`vs-london.n.d4 d5 Bf4.idea`, `study.caro-kann.p.0.detail`), and `localize.ts` rebuilds the entry with those strings swapped in. Rewrite a line in the data and its old keys show up as orphans rather than silently drifting out of date.

The locale is remembered in `localStorage` under `chess-trainer:locale`; on a first visit it is taken from the browser's `navigator.languages`.
Opening and defence names use the proper Italian names (Difesa Siciliana, Partita Italiana, Partita Spagnola, Attacco Indiano di Re), not translations of the English.
Move notation is never localised - see `AGENTS.md` for why.

## Adding a third language

1. Add the locale to `LOCALES` in `src/i18n/locales.ts`.
2. Copy `src/i18n/ui/en.ts` to `ui/<code>.ts`, type it as `UiCatalogue`, and translate the values. TypeScript lists anything you miss.
3. Add `src/i18n/content/<code>/` and translate the repertoire and the study guides. `node scripts/extract-strings.mjs <entryId>` dumps every key for one entry with its English source; `node scripts/extract-strings.mjs study` does the same for all twenty guides. The `tree()` and `nodes()` helpers in `src/i18n/content/tree.ts` keep the long move-path keys readable.
4. Register both in `CATALOGUES` in `LocaleProvider.tsx` and `CONTENT` in `src/i18n/content/index.ts`.
5. Run `npx vitest run src/i18n`. It tells you exactly how many strings are left and which one is next.

No i18n library is involved. Placeholders are `{name}`, plurals are a `_one` / `_other` key pair, and that is the whole feature set - anything cleverer would make the catalogues harder to translate rather than easier.
