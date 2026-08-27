import type { MoveNode, Opening } from '../data/types'
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
  /** Guards against counting two wrong tries at one decision point twice. */
  pendingMistake: boolean
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
    pendingMistake: false,
  }
}

export function phaseOf(opening: Opening, state: SessionState): Phase {
  if (isLineComplete(opening, state.path)) return 'complete'
  return isUserPly(opening.side, state.path.length) ? 'user' : 'opponent'
}

/** The repertoire moves available right now. */
export function candidates(opening: Opening, state: SessionState): MoveNode[] {
  return childrenAfter(opening, state.path)
}

/** The move the user is being asked to find, if it is their turn. */
export function expectedMove(opening: Opening, state: SessionState): MoveNode | undefined {
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

function logMistake(
  opening: Opening,
  state: SessionState,
  expected: MoveNode,
  played: string,
): Pick<SessionState, 'mistakes' | 'mistakeLog' | 'pendingMistake'> {
  if (state.pendingMistake) {
    return {
      mistakes: state.mistakes,
      mistakeLog: state.mistakeLog,
      pendingMistake: true,
    }
  }
  return {
    mistakes: state.mistakes + 1,
    pendingMistake: true,
    mistakeLog: [
      ...state.mistakeLog,
      {
        key: `${opening.id}|${pathKey(state.path)}`,
        label: moveLabel(state.path.length, normalizeSan(expected.san)),
        expected: normalizeSan(expected.san),
        played: normalizeSan(played),
      },
    ],
  }
}

/**
 * Apply the user's move. A move that is not in the repertoire is never played
 * on the board: the state records the error and the board stays put.
 */
export function applyUserMove(
  opening: Opening,
  state: SessionState,
  san: string,
): SessionState {
  if (phaseOf(opening, state) !== 'user') return state
  const options = candidates(opening, state)
  const verdict = judgeUserMove(options, san)

  if (verdict.status === 'wrong') {
    return {
      ...state,
      ...logMistake(opening, state, verdict.expected, san),
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
    path: [...state.path, verdict.node],
    decisions: state.decisions + 1,
    error: null,
    revealed: false,
    pendingMistake: false,
  }
}

/** Dismiss the error and let the user try the same move again. */
export function tryAgain(state: SessionState): SessionState {
  return { ...state, error: null }
}

/** Play the repertoire move for the user and explain it. */
export function showMe(opening: Opening, state: SessionState): SessionState {
  if (phaseOf(opening, state) !== 'user') return state
  const expected = candidates(opening, state)[0]
  if (!expected) return state
  const counted = logMistake(opening, state, expected, state.error?.played ?? '')
  return {
    ...state,
    ...counted,
    path: [...state.path, expected],
    decisions: state.decisions + 1,
    error: null,
    revealed: true,
    pendingMistake: false,
  }
}

/** Play the opponent's reply from the repertoire tree. */
export function applyOpponentMove(
  opening: Opening,
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
}

/** The end-of-line summary, or undefined while the line is still running. */
export function completedRun(opening: Opening, state: SessionState): CompletedRun | undefined {
  if (phaseOf(opening, state) !== 'complete') return undefined
  const end = lineEnd(state.path)
  if (!end) return undefined
  return {
    lineName: end.name,
    plans: end.plans,
    accuracy: runAccuracy(state),
    mistakes: state.mistakeLog,
  }
}
