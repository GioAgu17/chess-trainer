/** Which colour the user plays in a given opening or defence. */
export type Side = 'white' | 'black'

/**
 * A named wrong move with a specific refutation, so the trainer can say
 * something better than "that is not the move" when a user falls for a
 * well-known error.
 */
export interface Mistake {
  /** SAN of the wrong move, e.g. `Nxe4`. Decorations (+, #, !, ?) are ignored. */
  san: string
  /**
   * True when the move is objectively sound and is declined on repertoire
   * grounds rather than because it is bad - 1...e5 against a Sicilian player,
   * say. The trainer says so instead of calling it an error, and
   * `scripts/verify-theory.mjs` allows it to evaluate as well as the move we
   * teach. Leave it off for moves that are genuinely worse.
   */
  deliberate?: boolean
  /** Why this particular move is not played here. Should not reveal the correct move. */
  why: string
}

/** Shown when a path through the tree runs out of theory. */
export interface LineEnd {
  /** Human name of the line just completed, e.g. "Giuoco Pianissimo, main line". */
  name: string
  /** The middlegame the user has reached: plans, pawn breaks, piece routes. */
  plans: string[]
}

/**
 * One ply in a repertoire tree.
 *
 * Whose move a node represents is derived from its depth and the entry's
 * `side` - see `isUserPly` in `src/engine/tree.ts`. It is never stored.
 *
 * At an *opponent* node's parent there may be several children: the first is
 * the main line, the rest are deviations the trainer may also play.
 * At a *user* node's parent there is normally exactly one child: the
 * repertoire move. If several are listed, the first is the one taught and the
 * others are accepted as correct too.
 */
export interface MoveNode {
  /** SAN as played from the parent position, e.g. `Nf3`, `O-O`, `exd5`. */
  san: string
  /** Opponent nodes: the name of the try, e.g. "Berlin Defence". */
  label?: string
  /** Why this move is played. Shown once the move is on the board. */
  idea?: string
  /** User nodes: a nudge shown on a wrong move that does not give the answer. */
  hint?: string
  /** User nodes: specific wrong moves worth naming. */
  mistakes?: Mistake[]
  /**
   * Opponent nodes only: this branch exists *because* the move is bad and the
   * user should learn to punish it. `scripts/verify-theory.mjs` inverts its
   * plausibility check for these - a branch marked `punish` has to be losing,
   * and one that is not is a bug in the data.
   */
  punish?: boolean
  /** Replies. Absent or empty means this node ends a line. */
  children?: MoveNode[]
  /** Set on the last node of every path through the tree. */
  end?: LineEnd
}

/**
 * A known trap: a short forcing sequence with one move that is the point.
 *
 * Traps are drilled as puzzles from both sides - one the user can spring, and
 * one they have to see coming. `moves` is the whole sequence from the initial
 * position; the move at index `setup` is the answer, and anything after it is
 * the follow-up shown once the puzzle is solved.
 */
export interface Trap {
  /** Stable slug, unique within the entry. Used as the puzzle id. */
  id: string
  name: string
  /** `ours`: we spring it. `theirs`: we must not walk into it. */
  owner: 'ours' | 'theirs'
  /** SAN from move 1, e.g. `['e4', 'e5', 'f4', 'Bc5', 'fxe5', 'Qh4+', 'g3', 'Qxe4+']`. */
  moves: string[]
  /** Index into `moves` of the move that is the point of the trap. */
  setup: number
  /**
   * Set to false for a trap that teaches a habit rather than a tactic - "take
   * on d3 the moment the bishop lands there" is worth knowing and is not a
   * puzzle, because there is no single move an engine would call the answer.
   * Those are shown in the study section and never sent to the verifier.
   */
  drillable?: boolean
  /** What the trap does, in plain English. Shown after the puzzle is answered. */
  point: string
}

/** Everything an opening and a defence have in common. */
export interface RepertoireBase {
  /** Stable slug. Used as a storage key, so never change it. */
  id: string
  name: string
  /** ECO code, e.g. `C50`. */
  eco: string
  /** The colour the user trains. */
  side: Side
  /** One or two sentences on the strategic idea. */
  summary: string
  /** Children of the initial position: the first move of the game. */
  tree: MoveNode[]
  /** Known traps, from both sides. Raw material for the puzzle generator. */
  traps?: Trap[]
}

/** An opening you choose to play. Indexed by what *you* want on the board. */
export interface Opening extends RepertoireBase {
  kind: 'opening'
}

/** Which first move the opponent's system starts from. */
export type DefenceFamily = 'd4' | 'e4' | 'flank'

/**
 * An answer to something the opponent plays. Indexed by *their* system rather
 * than by yours: "I keep facing the Catalan" is the question this answers.
 *
 * The move tree, deviation handling and mistake naming are exactly the same as
 * an `Opening`; only the framing differs.
 */
export interface Defence extends RepertoireBase {
  kind: 'defence'
  /** The opponent's system, e.g. `Catalan`. Two entries may share one system. */
  system: string
  /** Which first move it grows out of, for grouping in the picker. */
  family: DefenceFamily
  /** How you know you are in it. */
  recognisedBy: {
    /** The moves that give it away, e.g. `1.d4 Nf6 2.c4 e6 3.g3`. */
    moves: string
    /** The plain-English tell, e.g. "the bishop is heading for g2". */
    tell: string
  }
  /** What the opponent is trying to do, and why the system is annoying. */
  theirPlan: string
  /** Your answer, as concrete steps. */
  recipe: string[]
  /**
   * Set when one system has more than one answer here, so the user can pick a
   * temperament - the Open and Closed Catalan, for instance.
   */
  temperament?: {
    /** Slug, unique within the system. */
    key: string
    /** Short name shown on the choice, e.g. "Open". */
    name: string
    /** One line on what playing it feels like. */
    blurb: string
  }
}

export type RepertoireEntry = Opening | Defence

export function isDefence(entry: RepertoireEntry): entry is Defence {
  return entry.kind === 'defence'
}

/* ------------------------------------------------------------------ study */

/** A pawn structure that keeps coming up, and what each side does with it. */
export interface StudyStructure {
  name: string
  /** What the structure is, in words rather than notation. */
  shape: string
  /** What the side the user plays wants from it. */
  yourPlay: string
  /** What the opponent wants from it. */
  theirPlay: string
}

/** A standard plan or piece manoeuvre. */
export interface StudyPlan {
  title: string
  detail: string
}

/** A square that decides the game, and why. */
export interface StudySquare {
  square: string
  why: string
}

/** A pawn break, and the conditions that make it right. */
export interface StudyBreak {
  move: string
  when: string
}

/** A way club players go wrong here. */
export interface StudyPitfall {
  title: string
  detail: string
}

/**
 * The long read for one entry: what the opening is about, rather than which
 * move comes next. Written for a 1200-1800 player, in English, not notation.
 */
export interface StudyGuide {
  /** Id of the `RepertoireEntry` this belongs to. */
  id: string
  /** Two to four sentences: the whole opening in a nutshell. */
  bigIdea: string
  structures: StudyStructure[]
  plans: StudyPlan[]
  keySquares: StudySquare[]
  breaks: StudyBreak[]
  /** What the middlegame actually feels like to play. */
  middlegameFeel: string
  pitfalls: StudyPitfall[]
}

/* ---------------------------------------------------------------- puzzles */

/**
 * `recall`: a repertoire position out of sequence - what is the move here?
 * `punish`: the opponent has played a tempting error; find the refutation.
 * `trap`: the key move of a known trap, from either side.
 */
export type PuzzleKind = 'recall' | 'punish' | 'trap'

/** One exercise, ready to show. Every field is resolved before it ships. */
export interface Puzzle {
  /** Stable across regenerations, so the spaced-repetition record survives. */
  id: string
  kind: PuzzleKind
  /** The `RepertoireEntry` this came from. */
  entryId: string
  fen: string
  /** The side the solver plays. Also the board orientation. */
  solver: Side
  /** SAN of the move that solves it. */
  solution: string
  /** Other moves good enough to accept, if any. */
  alsoAccepted?: string[]
  /** The question, in plain English. */
  prompt: string
  /** Shown once the puzzle is answered. */
  explanation: string
  /** SAN from move 1 up to the puzzle position. */
  line: string[]
  /**
   * Recall puzzles only: the decision-point key, so a puzzle and the same
   * move met while drilling share one statistic and one review card.
   */
  moveKey?: string
}

/** A puzzle Stockfish has signed off on. Only these ship from generated data. */
export interface VerifiedPuzzle extends Puzzle {
  verified: {
    depth: number
    /** Centipawn gap between the solution and the next best move. */
    marginCp: number
    /** ISO date of the run that verified it. */
    at: string
  }
}
