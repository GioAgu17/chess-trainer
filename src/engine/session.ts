import type { MoveNode, RepertoireEntry } from '../data/types'
import {
  accuracy,
  childrenAfter,
  isLineComplete,
  isUserPly,
  judgeUserMove,
  lineEnd,
  moveLabel,
  normalizeSan,
  pathKey,
  pickOpponentMove,
  type OpponentMode,
} from './tree'

export interface LoggedMistake {
  key: string
  label: string
  expected: string
  played: string
  /** Why it was not counted as correct. The summary words the two differently. */
  result: 'error' | 'off-repertoire' | 'revealed'
}

/**
 * What happened the *first* time the user was asked for a particular move.
 *
 * One record per decision point, never one per try: someone who guesses four
 * times before finding the move has got one move wrong, not four, and counting
 * the retries would make every accuracy figure meaningless.
 */
export interface LoggedAttempt {
  key: string
  label: string
  expected: string
  ply: number
  /** `off-repertoire` is a sound move declined on repertoire grounds. */
  result: 'correct' | 'error' | 'off-repertoire' | 'revealed'
  /** The move actually played, when it was not the repertoire one. */
  played?: string
}

export interface SessionState {
  /** Moves played so far, as nodes of the repertoire tree. */
  path: MoveNode[]
  /** Set while the user's last attempt was wrong and not yet corrected. */
  error: { played: string; reason: string; deliberate: boolean } | null
  /** True when the user asked to be shown the move rather than finding it. */
  revealed: boolean
  /** Decision points the user has reached, i.e. their own moves. */
  decisions: number
  /** Decision points where the user's first attempt was wrong. */
  mistakes: number
  mistakeLog: LoggedMistake[]
  /** Every decision point reached, with what happened the first time. */
  attemptLog: LoggedAttempt[]
  /** True once the current decision point has been recorded. */
  logged: boolean
}

export type Phase = 'user' | 'opponent' | 'complete'

export function newSession(): SessionState {
  return {
    path: [],
    error: null,
    revealed: false,
    decisions: 0,
    mistakes: 0,
    mistakeLog: [],
    attemptLog: [],
    logged: false,
  }
}

export function phaseOf(opening: RepertoireEntry, state: SessionState): Phase {
  if (isLineComplete(opening, state.path)) return 'complete'
  return isUserPly(opening.side, state.path.length) ? 'user' : 'opponent'
}

/** The repertoire moves available right now. */
export function candidates(opening: RepertoireEntry, state: SessionState): MoveNode[] {
  return childrenAfter(opening, state.path)
}

/** The move the user is being asked to find, if it is their turn. */
export function expectedMove(opening: RepertoireEntry, state: SessionState): MoveNode | undefined {
  if (phaseOf(opening, state) !== 'user') return undefined
  return candidates(opening, state)[0]
}

/** The node just played, whoever played it. */
export function lastNode(state: SessionState): MoveNode | undefined {
  return state.path[state.path.length - 1]
}

export function runAccuracy(state: SessionState): number {
  return accuracy(state.decisions, state.mistakes)
}

type Logged = Pick<SessionState, 'mistakes' | 'mistakeLog' | 'attemptLog' | 'logged'>

/**
 * Record what happened at this decision point, once.
 *
 * The `logged` flag is what makes a second wrong guess at the same move free:
 * it is the same mistake, and both the run accuracy and the long-term record
 * want to count it once.
 */
function logAttempt(
  opening: RepertoireEntry,
  state: SessionState,
  expected: MoveNode,
  result: LoggedAttempt['result'],
  played: string,
): Logged {
  if (state.logged) {
    return {
      mistakes: state.mistakes,
      mistakeLog: state.mistakeLog,
      attemptLog: state.attemptLog,
      logged: true,
    }
  }

  const key = `${opening.id}|${pathKey(state.path)}`
  const label = moveLabel(state.path.length, normalizeSan(expected.san))
  const attempt: LoggedAttempt = {
    key,
    label,
    expected: normalizeSan(expected.san),
    ply: state.path.length,
    result,
    played: played ? normalizeSan(played) : undefined,
  }

  const missed = result !== 'correct'
  return {
    mistakes: state.mistakes + (missed ? 1 : 0),
    logged: true,
    attemptLog: [...state.attemptLog, attempt],
    mistakeLog: missed
      ? [
          ...state.mistakeLog,
          {
            key,
            label,
            expected: normalizeSan(expected.san),
            played: normalizeSan(played),
            result: result as LoggedMistake['result'],
          },
        ]
      : state.mistakeLog,
  }
}

/**
 * Apply the user's move. A move that is not in the repertoire is never played
 * on the board: the state records the error and the board stays put.
 */
export function applyUserMove(
  opening: RepertoireEntry,
  state: SessionState,
  san: string,
): SessionState {
  if (phaseOf(opening, state) !== 'user') return state
  const options = candidates(opening, state)
  const verdict = judgeUserMove(options, san)

  if (verdict.status === 'wrong') {
    return {
      ...state,
      ...logAttempt(
        opening,
        state,
        verdict.expected,
        verdict.deliberate ? 'off-repertoire' : 'error',
        san,
      ),
      error: {
        played: normalizeSan(san),
        reason: verdict.reason,
        deliberate: verdict.deliberate,
      },
      revealed: false,
    }
  }

  return {
    ...state,
    ...logAttempt(opening, state, verdict.node, 'correct', ''),
    path: [...state.path, verdict.node],
    decisions: state.decisions + 1,
    error: null,
    revealed: false,
    logged: false,
  }
}

/** Dismiss the error and let the user try the same move again. */
export function tryAgain(state: SessionState): SessionState {
  return { ...state, error: null }
}

/** Play the repertoire move for the user and explain it. */
export function showMe(opening: RepertoireEntry, state: SessionState): SessionState {
  if (phaseOf(opening, state) !== 'user') return state
  const expected = candidates(opening, state)[0]
  if (!expected) return state
  const counted = logAttempt(opening, state, expected, 'revealed', state.error?.played ?? '')
  return {
    ...state,
    ...counted,
    path: [...state.path, expected],
    decisions: state.decisions + 1,
    error: null,
    revealed: true,
    logged: false,
  }
}

/** Play the opponent's reply from the repertoire tree. */
export function applyOpponentMove(
  opening: RepertoireEntry,
  state: SessionState,
  mode: OpponentMode,
  random: () => number = Math.random,
): SessionState {
  if (phaseOf(opening, state) !== 'opponent') return state
  const node = pickOpponentMove(candidates(opening, state), mode, random)
  if (!node) return state
  return { ...state, path: [...state.path, node], error: null, revealed: false }
}

export interface CompletedRun {
  lineName: string
  plans: string[]
  accuracy: number
  mistakes: LoggedMistake[]
  /** Decision points reached in this run. */
  decisions: number
  /** Genuine errors, kept apart from sound moves played off the repertoire. */
  errors: number
  offRepertoire: number
}

/** The end-of-line summary, or undefined while the line is still running. */
export function completedRun(opening: RepertoireEntry, state: SessionState): CompletedRun | undefined {
  if (phaseOf(opening, state) !== 'complete') return undefined
  const end = lineEnd(state.path)
  if (!end) return undefined
  return {
    lineName: end.name,
    plans: end.plans,
    accuracy: runAccuracy(state),
    mistakes: state.mistakeLog,
    decisions: state.decisions,
    errors: state.attemptLog.filter((a) => a.result === 'error' || a.result === 'revealed').length,
    offRepertoire: state.attemptLog.filter((a) => a.result === 'off-repertoire').length,
  }
}
