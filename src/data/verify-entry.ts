/**
 * Bundle entry point for the dev scripts in `scripts/`.
 *
 * Those run in plain node and cannot read TypeScript, so `build-openings.mjs`
 * bundles this file. It deliberately re-exports only data and pure functions,
 * so no React or browser code is ever pulled into a verification run.
 */
export { ENTRIES, OPENINGS, DEFENCES } from './entries'
export { engineCandidates, recallPuzzles, describeLine } from '../engine/puzzles'
export type { PuzzleCandidate } from '../engine/puzzles'
