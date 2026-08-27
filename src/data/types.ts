/** Which colour the user plays in a given opening. */
export type Side = 'white' | 'black'

/**
 * A named wrong move with a specific refutation, so the trainer can say
 * something better than "that is not the move" when a user falls for a
 * well-known error.
 */
export interface Mistake {
  /** SAN of the wrong move, e.g. `Nxe4`. Decorations (+, #, !, ?) are ignored. */
  san: string
  /** Why this particular move is wrong. Should not reveal the correct move. */
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
 * Whose move a node represents is derived from its depth and the opening's
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
  /** Replies. Absent or empty means this node ends a line. */
  children?: MoveNode[]
  /** Set on the last node of every path through the tree. */
  end?: LineEnd
}

export interface Opening {
  /** Stable slug. Used as the localStorage key, so never change it. */
  id: string
  name: string
  /** ECO code or range, e.g. `C50` or `B90`. */
  eco: string
  /** The colour the user trains. */
  side: Side
  /** One or two sentences on the strategic idea. */
  summary: string
  /** Children of the initial position: the first move of the game. */
  tree: MoveNode[]
}
