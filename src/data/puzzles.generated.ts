/**
 * GENERATED FILE - do not edit by hand.
 *
 * Written by `npm run verify:theory`. Every puzzle here has been through
 * Stockfish at depth 24: the answer is the engine's first choice and it is at
 * least 90 centipawns clear of the next move, so "there is one right answer"
 * is a claim the data can actually back. Candidates that failed either test are
 * dropped rather than shipped - see the run's console output for which.
 *
 * Recall puzzles are not here: their answer is the repertoire move itself, and
 * those positions are checked by the theory half of the same run.
 */
import type { VerifiedPuzzle } from './types'

export const VERIFIED_PUZZLES: VerifiedPuzzle[] = [
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-fxe5",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1P3/4P3/8/PPPP2PP/RNBQKBNR b KQkq - 0 3",
    "solver": "black",
    "solution": "Qh4",
    "prompt": {
      "key": "puzzles.promptPunishBranch",
      "vars": {
        "move": "3.fxe5"
      }
    },
    "explanation": "The refutation. The check cannot be blocked by a piece and the king cannot move safely.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "fxe5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 371,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:italian-game:e4-e5-Nf3-Nc6-Bc4-Bc5-Ng5",
    "kind": "punish",
    "entryId": "italian-game",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
    "solver": "black",
    "solution": "Qxg5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4.Ng5"
      }
    },
    "explanation": "Too early. Black answers ...Nh6 or ...Qe7 and the knight on g5 has nothing to attack - moving the same piece twice hands Black the initiative. The move that shows it is Qxg5.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bc4",
      "Bc5",
      "Ng5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 267,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:italian-game:e4-e5-Nf3-Nc6-Bc4-Bc5-c3-Nf6-Nxe5",
    "kind": "punish",
    "entryId": "italian-game",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1N3/2B1P3/2P5/PP1P1PPP/RNBQK2R b KQkq - 0 5",
    "solver": "black",
    "solution": "Nxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5.Nxe5"
      }
    },
    "explanation": "Loses a piece for a pawn: the knight on e5 is defended by nothing and Black simply recaptures with ...Nxe5. The move that shows it is Nxe5.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bc4",
      "Bc5",
      "c3",
      "Nf6",
      "Nxe5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 159,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:italian-game:e4-e5-Nf3-Nc6-Bc4-Nf6-Nxe5",
    "kind": "punish",
    "entryId": "italian-game",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4N3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    "solver": "black",
    "solution": "Nxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4.Nxe5"
      }
    },
    "explanation": "Loses material after ...Nxe4 or simply ...Nxe5 - the knight on e5 is not supported. The move that shows it is Nxe5.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bc4",
      "Nf6",
      "Nxe5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 426,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:ruy-lopez:e4-e5-Nf3-Nc6-Nxe5",
    "kind": "punish",
    "entryId": "ruy-lopez",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
    "solver": "black",
    "solution": "Nxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3.Nxe5"
      }
    },
    "explanation": "Loses a pawn back after ...Nxe5, and worse, ...Qe7 or ...Nxe5 followed by ...Qe7 leaves you with nothing. The knight on e5 is not supported. The move that shows it is Nxe5.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Nxe5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 278,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:ruy-lopez:e4-e5-Nf3-Nc6-Bb5-a6-Ba4-Nf6-O-O-Be7-Re1-b5-Bxb5",
    "kind": "punish",
    "entryId": "ruy-lopez",
    "fen": "r1bqk2r/2ppbppp/p1n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 0 7",
    "solver": "black",
    "solution": "axb5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7.Bxb5"
      }
    },
    "explanation": "This just loses a piece: after ...axb5 there is nothing to recapture with, and the open a-file is Black’s. The move that shows it is axb5.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bb5",
      "a6",
      "Ba4",
      "Nf6",
      "O-O",
      "Be7",
      "Re1",
      "b5",
      "Bxb5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 519,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:queens-gambit-declined:d4-d5-c4-e6-Nc3-Nf6-cxd5-exd5-Bg5-Be7-e3-c6-b4",
    "kind": "punish",
    "entryId": "queens-gambit-declined",
    "fen": "rnbqk2r/pp2bppp/2p2n2/3p2B1/1P1P4/2N1P3/P4PPP/R2QKBNR b KQkq - 0 7",
    "solver": "black",
    "solution": "Bxb4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7.b4"
      }
    },
    "explanation": "The right idea, but far too early - you are not developed and the pawn is loose. The move that shows it is Bxb4.",
    "line": [
      "d4",
      "d5",
      "c4",
      "e6",
      "Nc3",
      "Nf6",
      "cxd5",
      "exd5",
      "Bg5",
      "Be7",
      "e3",
      "c6",
      "b4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 311,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:london-system:d4-d5-Bf4-Nf6-Bxc7",
    "kind": "punish",
    "entryId": "london-system",
    "fen": "rnbqkb1r/ppB1pppp/5n2/3p4/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 0 3",
    "solver": "black",
    "solution": "Qxc7",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3.Bxc7"
      }
    },
    "explanation": "The pawn is poisoned: ...Qxc7 wins the bishop and you are a whole piece down for one pawn. The move that shows it is Qxc7.",
    "line": [
      "d4",
      "d5",
      "Bf4",
      "Nf6",
      "Bxc7"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 521,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:french-defence:e4-e6-d4-d5-Nc3-Nf6-e5-Nbd7",
    "kind": "punish",
    "entryId": "french-defence",
    "fen": "r1bqkb1r/pppn1ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    "solver": "white",
    "solution": "exf6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Nbd7"
      }
    },
    "explanation": "Wrong knight. The b8-knight belongs on c6, where it hits d4; it is the attacked f6-knight that must retreat. The move that shows it is exf6.",
    "line": [
      "e4",
      "e6",
      "d4",
      "d5",
      "Nc3",
      "Nf6",
      "e5",
      "Nbd7"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 193,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:caro-kann:e4-c6-d4-d5-Nc3-Nf6",
    "kind": "punish",
    "entryId": "caro-kann",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    "solver": "white",
    "solution": "e5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...Nf6"
      }
    },
    "explanation": "White plays e5 and after ...Nfd7 you are in a French-style position with the bishop still locked in. The move that shows it is e5.",
    "line": [
      "e4",
      "c6",
      "d4",
      "d5",
      "Nc3",
      "Nf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 113,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:caro-kann:e4-c6-d4-d5-Nc3-dxe4-Nxe4-Bg4",
    "kind": "punish",
    "entryId": "caro-kann",
    "fen": "rn1qkbnr/pp2pppp/2p5/8/3PN1b1/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    "solver": "white",
    "solution": "Qxg4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Bg4"
      }
    },
    "explanation": "The bishop has no target there and White plays f3 or h3 gaining time. The move that shows it is Qxg4.",
    "line": [
      "e4",
      "c6",
      "d4",
      "d5",
      "Nc3",
      "dxe4",
      "Nxe4",
      "Bg4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 427,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:caro-kann:e4-c6-d4-d5-Nc3-dxe4-Nxe4-Bf5-Ng3-Bg6-h4-e6",
    "kind": "punish",
    "entryId": "caro-kann",
    "fen": "rn1qkbnr/pp3ppp/2p1p1b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR w KQkq - 0 7",
    "solver": "white",
    "solution": "h5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...e6"
      }
    },
    "explanation": "This is the move that loses the bishop: White plays h5 and the bishop on g6 is trapped. The move that shows it is h5.",
    "line": [
      "e4",
      "c6",
      "d4",
      "d5",
      "Nc3",
      "dxe4",
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6",
      "h4",
      "e6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 100,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:caro-kann:e4-c6-d4-d5-Nc3-dxe4-Nxe4-Bf5-Ng3-Bg6-h4-Nf6",
    "kind": "punish",
    "entryId": "caro-kann",
    "fen": "rn1qkb1r/pp2pppp/2p2nb1/8/3P3P/6N1/PPP2PP1/R1BQKBNR w KQkq - 1 7",
    "solver": "white",
    "solution": "h5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Nf6"
      }
    },
    "explanation": "White plays h5 and the bishop on g6 has nowhere to go. Deal with the threat first. The move that shows it is h5.",
    "line": [
      "e4",
      "c6",
      "d4",
      "d5",
      "Nc3",
      "dxe4",
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6",
      "h4",
      "Nf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 124,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:kings-indian-defence:d4-Nf6-c4-g6-Nc3-Bg7-e4-e5",
    "kind": "punish",
    "entryId": "kings-indian-defence",
    "fen": "rnbqk2r/pppp1pbp/5np1/4p3/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
    "solver": "white",
    "solution": "dxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...e5"
      }
    },
    "explanation": "Too soon: White plays dxe5 and after ...Ng4 or ...Nfd7 you have no real compensation. Support it with ...d6 first. The move that shows it is dxe5.",
    "line": [
      "d4",
      "Nf6",
      "c4",
      "g6",
      "Nc3",
      "Bg7",
      "e4",
      "e5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 190,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:kings-indian-defence:d4-Nf6-c4-g6-Nc3-Bg7-e4-d6-Nf3-e5",
    "kind": "punish",
    "entryId": "kings-indian-defence",
    "fen": "rnbqk2r/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "dxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...e5"
      }
    },
    "explanation": "Premature: White plays dxe5 dxe5 and Qxd8+ takes away your castling rights, killing the whole attacking plan. The move that shows it is dxe5.",
    "line": [
      "d4",
      "Nf6",
      "c4",
      "g6",
      "Nc3",
      "Bg7",
      "e4",
      "d6",
      "Nf3",
      "e5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 95,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-catalan-open:d4-Nf6-c4-e6-g3-d5-Bg2-dxc4-Nf3-Be7-O-O-O-O-Ne5-b5",
    "kind": "punish",
    "entryId": "vs-catalan-open",
    "fen": "rnbq1rk1/p1p1bppp/4pn2/1p2N3/2pP4/6P1/PP2PPBP/RNBQ1RK1 w - - 0 8",
    "solver": "white",
    "solution": "Bxa8",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...b5"
      }
    },
    "explanation": "The pawn on c4 is not what matters here. A knight on e5 supported by the g2-bishop is a real piece, and it has to be answered first. The move that shows it is Bxa8.",
    "line": [
      "d4",
      "Nf6",
      "c4",
      "e6",
      "g3",
      "d5",
      "Bg2",
      "dxc4",
      "Nf3",
      "Be7",
      "O-O",
      "O-O",
      "Ne5",
      "b5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 208,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-catalan-open:d4-Nf6-c4-e6-g3-d5-Bg2-dxc4-Nf3-Be7-Qa4-Nbd7-Qxc4-b5",
    "kind": "punish",
    "entryId": "vs-catalan-open",
    "fen": "r1bqk2r/p1pnbppp/4pn2/1p6/2QP4/5NP1/PP2PPBP/RNB1K2R w KQkq - 0 8",
    "solver": "white",
    "solution": "Qxb5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...b5"
      }
    },
    "explanation": "The queen on c4 is attacked, but after Qb3 or Qc2 you have left a hole on c6 and White's bishop is already pointing at it. The move that shows it is Qxb5.",
    "line": [
      "d4",
      "Nf6",
      "c4",
      "e6",
      "g3",
      "d5",
      "Bg2",
      "dxc4",
      "Nf3",
      "Be7",
      "Qa4",
      "Nbd7",
      "Qxc4",
      "b5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 91,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-london:d4-Nf6-Bf4-d5-e3-c5-c3-Qb6-Qb3-c4-Qxb6-axb6-Na3-Nc6-Nb5-e6",
    "kind": "punish",
    "entryId": "vs-london",
    "fen": "r1b1kb1r/1p3ppp/1pn1pn2/1N1p4/2pP1B2/2P1P3/PP3PPP/R3KBNR w KQkq - 0 9",
    "solver": "white",
    "solution": "Nc7",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "8...e6"
      }
    },
    "explanation": "Nc7+ comes with check, forks the king and the rook on a8, and wins the exchange on the spot. The move that shows it is Nc7.",
    "line": [
      "d4",
      "Nf6",
      "Bf4",
      "d5",
      "e3",
      "c5",
      "c3",
      "Qb6",
      "Qb3",
      "c4",
      "Qxb6",
      "axb6",
      "Na3",
      "Nc6",
      "Nb5",
      "e6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 250,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-london:d4-Nf6-Bf4-d5-e3-c5-c3-Qb6-Qb3-c4-Qxb6-axb6-Na3-Nc6-Nb5-Bf5",
    "kind": "punish",
    "entryId": "vs-london",
    "fen": "r3kb1r/1p2pppp/1pn2n2/1N1p1b2/2pP1B2/2P1P3/PP3PPP/R3KBNR w KQkq - 4 9",
    "solver": "white",
    "solution": "Nc7",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "8...Bf5"
      }
    },
    "explanation": "The same fork: Nc7+ takes the king and the rook together, and developing does not answer a check. The move that shows it is Nc7.",
    "line": [
      "d4",
      "Nf6",
      "Bf4",
      "d5",
      "e3",
      "c5",
      "c3",
      "Qb6",
      "Qb3",
      "c4",
      "Qxb6",
      "axb6",
      "Na3",
      "Nc6",
      "Nb5",
      "Bf5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 117,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-london:d4-Nf6-Bf4-d5-e3-c5-c3-Qb6-Qc1-Qxb2",
    "kind": "punish",
    "entryId": "vs-london",
    "fen": "rnb1kb1r/pp2pppp/5n2/2pp4/3P1B2/2P1P3/Pq3PPP/RNQ1KBNR w KQkq - 0 6",
    "solver": "white",
    "solution": "Qxb2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Qxb2"
      }
    },
    "explanation": "The pawn is defended by the queen on c1. Taking it simply loses the queen. The move that shows it is Qxb2.",
    "line": [
      "d4",
      "Nf6",
      "Bf4",
      "d5",
      "e3",
      "c5",
      "c3",
      "Qb6",
      "Qc1",
      "Qxb2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 802,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-trompowsky:d4-Nf6-Bg5-Ne4-Bf4-d5-e3-c5-Bd3-Nc6-Nf3-Qb6-Qc1-Qxb2",
    "kind": "punish",
    "entryId": "vs-trompowsky",
    "fen": "r1b1kb1r/pp2pppp/2n5/2pp4/3PnB2/3BPN2/PqP2PPP/RNQ1K2R w KQkq - 0 8",
    "solver": "white",
    "solution": "Qxb2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...Qxb2"
      }
    },
    "explanation": "The queen on c1 defends b2. Taking it just loses the queen. The move that shows it is Qxb2.",
    "line": [
      "d4",
      "Nf6",
      "Bg5",
      "Ne4",
      "Bf4",
      "d5",
      "e3",
      "c5",
      "Bd3",
      "Nc6",
      "Nf3",
      "Qb6",
      "Qc1",
      "Qxb2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 801,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-trompowsky:d4-Nf6-Bg5-Ne4-Bh4-c5-f3-cxd4",
    "kind": "punish",
    "entryId": "vs-trompowsky",
    "fen": "rnbqkb1r/pp1ppppp/8/8/3pn2B/5P2/PPP1P1PP/RN1QKBNR w KQkq - 0 5",
    "solver": "white",
    "solution": "fxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...cxd4"
      }
    },
    "explanation": "It releases the tension for nothing and after fxe4 White has a huge centre and a free game. The move that shows it is fxe4.",
    "line": [
      "d4",
      "Nf6",
      "Bg5",
      "Ne4",
      "Bh4",
      "c5",
      "f3",
      "cxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 271,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-trompowsky:d4-Nf6-Bg5-Ne4-Bh4-c5-f3-Qa5-c3-cxd4",
    "kind": "punish",
    "entryId": "vs-trompowsky",
    "fen": "rnb1kb1r/pp1ppppp/8/q7/3pn2B/2P2P2/PP2P1PP/RN1QKBNR w KQkq - 0 6",
    "solver": "white",
    "solution": "fxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...cxd4"
      }
    },
    "explanation": "Playable, but it lets White recapture and untangle. Keeping the tension is stronger with White so far behind in development. The move that shows it is fxe4.",
    "line": [
      "d4",
      "Nf6",
      "Bg5",
      "Ne4",
      "Bh4",
      "c5",
      "f3",
      "Qa5",
      "c3",
      "cxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 341,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-blackmar-diemer:d4-d5-e4-dxe4-Nc3-Nf6-f3-e5",
    "kind": "punish",
    "entryId": "vs-blackmar-diemer",
    "fen": "rnbqkb1r/ppp2ppp/5n2/4p3/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 0 5",
    "solver": "white",
    "solution": "dxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...e5"
      }
    },
    "explanation": "Loose. dxe5 and the pawn on e4 falls anyway, with White's pieces flooding out. The move that shows it is dxe5.",
    "line": [
      "d4",
      "d5",
      "e4",
      "dxe4",
      "Nc3",
      "Nf6",
      "f3",
      "e5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 162,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-blackmar-diemer:d4-d5-e4-dxe4-Nc3-Nf6-Bg5-Bf5-f3-e6",
    "kind": "punish",
    "entryId": "vs-blackmar-diemer",
    "fen": "rn1qkb1r/ppp2ppp/4pn2/5bB1/3Pp3/2N2P2/PPP3PP/R2QKBNR w KQkq - 0 6",
    "solver": "white",
    "solution": "fxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...e6"
      }
    },
    "explanation": "Declining leaves White with fxe4 and a big centre, and your bishop on f5 suddenly has nothing in front of it. The move that shows it is fxe4.",
    "line": [
      "d4",
      "d5",
      "e4",
      "dxe4",
      "Nc3",
      "Nf6",
      "Bg5",
      "Bf5",
      "f3",
      "e6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 310,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-blackmar-diemer:d4-d5-e4-dxe4-Nc3-Nf6-Bg5-Bf5-f3-exf3-Nxf3-Bxc2",
    "kind": "punish",
    "entryId": "vs-blackmar-diemer",
    "fen": "rn1qkb1r/ppp1pppp/5n2/6B1/3P4/2N2N2/PPb3PP/R2QKB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "Qxc2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Bxc2"
      }
    },
    "explanation": "Greedy and losing: after Rc1 or Qd2 the bishop on c2 is trapped and the second pawn costs a piece. The move that shows it is Qxc2.",
    "line": [
      "d4",
      "d5",
      "e4",
      "dxe4",
      "Nc3",
      "Nf6",
      "Bg5",
      "Bf5",
      "f3",
      "exf3",
      "Nxf3",
      "Bxc2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 357,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-Nf6",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk2r/pppp1ppp/5n2/2b1p3/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq - 3 4",
    "solver": "white",
    "solution": "fxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...Nf6"
      }
    },
    "explanation": "fxe5 comes with tempo on the knight, and after Nxe4 d4 White has the centre and the initiative. The move that shows it is fxe5.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "Nf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 111,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-d6-Nc3-Nf6-Bc4-Nxe4",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk2r/ppp2ppp/3p4/2b1p3/2B1nP2/2N2N2/PPPP2PP/R1BQK2R w KQkq - 0 6",
    "solver": "white",
    "solution": "Nxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Nxe4"
      }
    },
    "explanation": "Losing a piece: Nxe4 d5 forks nothing here because after Bxd5 and Nxe5 White simply picks the piece up. The move that shows it is Nxe4.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "d6",
      "Nc3",
      "Nf6",
      "Bc4",
      "Nxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 246,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-d6-Nc3-Nf6-Bc4-Nc6-d3-Bg4-h3-Bh5",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "r2qk2r/ppp2ppp/2np1n2/2b1p2b/2B1PP2/2NP1N1P/PPP3P1/R1BQK2R w KQkq - 1 8",
    "solver": "white",
    "solution": "g4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...Bh5"
      }
    },
    "explanation": "Retreating lets g2-g4 come with tempo and the bishop ends up in trouble on g6 while White's attack starts for free. The move that shows it is g4.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "d6",
      "Nc3",
      "Nf6",
      "Bc4",
      "Nc6",
      "d3",
      "Bg4",
      "h3",
      "Bh5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 120,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-d6-c3-Nf6-d4-Nxe4",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk2r/ppp2ppp/3p4/2b1p3/3PnP2/2P2N2/PP4PP/RNBQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "dxc5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Nxe4"
      }
    },
    "explanation": "Loses a piece to dxc5, because the knight on e4 has no defender and your bishop is hanging. The move that shows it is dxc5.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "d6",
      "c3",
      "Nf6",
      "d4",
      "Nxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 95,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-d6-c3-Nf6-d4-exd4-cxd4-Nxe4",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk2r/ppp2ppp/3p4/2b5/3PnP2/5N2/PP4PP/RNBQKB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "dxc5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Nxe4"
      }
    },
    "explanation": "Still loses to dxc5 - the bishop on c5 is hanging with tempo. The move that shows it is dxc5.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "d6",
      "c3",
      "Nf6",
      "d4",
      "exd4",
      "cxd4",
      "Nxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 367,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-d6-fxe5-Nc6",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "r1bqk1nr/ppp2ppp/2np4/2b1P3/4P3/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5",
    "solver": "white",
    "solution": "exd6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Nc6"
      }
    },
    "explanation": "Leaving a pawn hanging in the centre for no compensation. Take back first. The move that shows it is exd6.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "d6",
      "fxe5",
      "Nc6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 137,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nf3-d6-fxe5-dxe5-c3-Nf6-d4-Nxe4",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk2r/ppp2ppp/8/2b1p3/3Pn3/2P2N2/PP4PP/RNBQKB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "Bd3",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Nxe4"
      }
    },
    "explanation": "Loses a piece to dxc5 - your bishop on c5 is hanging. The move that shows it is Bd3.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nf3",
      "d6",
      "fxe5",
      "dxe5",
      "c3",
      "Nf6",
      "d4",
      "Nxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 114,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-fxe5-Qh4-g3-Bxg1",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnb1k1nr/pppp1ppp/8/4P3/4P2q/6P1/PPPP3P/RNBQKBbR w KQkq - 0 5",
    "solver": "white",
    "solution": "gxh4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Bxg1"
      }
    },
    "explanation": "A rook is good, but taking with check and then collecting the other rook is much better. The move that shows it is gxh4.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "fxe5",
      "Qh4",
      "g3",
      "Bxg1"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 331,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nc3-Nf6",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk2r/pppp1ppp/5n2/2b1p3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 3 4",
    "solver": "white",
    "solution": "fxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...Nf6"
      }
    },
    "explanation": "Now fxe5 simply wins a pawn: ...Nxe4 runs into Nxe4, because the knight on c3 was covering e4 all along. The move that shows it is fxe5.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nc3",
      "Nf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 336,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nc3-Qh4",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnb1k1nr/pppp1ppp/8/2b1p3/4PP1q/2N5/PPPP2PP/R1BQKBNR w KQkq - 3 4",
    "solver": "white",
    "solution": "g3",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...Qh4"
      }
    },
    "explanation": "The check only works once White has taken on e5. Here g3 chases the queen, the e-pawn is defended by the knight, and you have lost two moves. The move that shows it is g3.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nc3",
      "Qh4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 615,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-kings-gambit:e4-e5-f4-Bc5-Nc3-d6-Nf3-Qh4",
    "kind": "punish",
    "entryId": "vs-kings-gambit",
    "fen": "rnb1k1nr/ppp2ppp/3p4/2b1p3/4PP1q/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5",
    "solver": "white",
    "solution": "Nxh4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Qh4"
      }
    },
    "explanation": "The knight on f3 simply takes it. Once White covers h4 the queen has no business going there. The move that shows it is Nxh4.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "Nc3",
      "d6",
      "Nf3",
      "Qh4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 577,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Be3-Nf6",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R w KQkq - 3 6",
    "solver": "white",
    "solution": "Nxc6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Nf6"
      }
    },
    "explanation": "Natural, but after Nxc6 bxc6 and e4-e5 the knight is kicked and your structure is damaged. The queen move stops all of that. The move that shows it is Nxc6.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Be3",
      "Nf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 406,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Be3-d6",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1bqk1nr/ppp2ppp/2np4/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "Nxc6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...d6"
      }
    },
    "explanation": "Solid, but slow: it lets White play Nc3, Qd2 and O-O-O with a comfortable attacking game while you have made no threats. The move that shows it is Nxc6.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Be3",
      "d6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 150,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Be3-Qf6-c3-Bxd4",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1b1k1nr/pppp1ppp/2n2q2/8/3bP3/2P1B3/PP3PPP/RN1QKB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "cxd4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Bxd4"
      }
    },
    "explanation": "Still the wrong trade: cxd4 gives White a broad pawn centre and the bishop pair for nothing. The move that shows it is cxd4.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Be3",
      "Qf6",
      "c3",
      "Bxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 190,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Be3-Qf6-c3-Nge7-Bc4-Ne5-Be2-Bxd4",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1b1k2r/ppppnppp/5q2/4n3/3bP3/2P1B3/PP2BPPP/RN1QK2R w KQkq - 0 9",
    "solver": "white",
    "solution": "cxd4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "8...Bxd4"
      }
    },
    "explanation": "The same wrong trade, and now with the queen on f6 it also loses the pressure that has taken five moves to build. The move that shows it is cxd4.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Be3",
      "Qf6",
      "c3",
      "Nge7",
      "Bc4",
      "Ne5",
      "Be2",
      "Bxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 111,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Nxc6-Bxf2",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1bqk1nr/pppp1ppp/2N5/8/4P3/8/PPP2bPP/RNBQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "Kxf2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Bxf2"
      }
    },
    "explanation": "It wins a pawn but after Kxf2 the knight on c6 is still hanging and White comes out clearly ahead. The move that shows it is Kxf2.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Nxc6",
      "Bxf2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 180,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Nxc6-Qf6-Qd2-Qxf2",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1b1k1nr/pppp1ppp/2N5/2b5/4P3/8/PPPQ1qPP/RNB1KB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "Qxf2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Qxf2"
      }
    },
    "explanation": "Loses the queen after Qxf2 Bxf2+ Kxf2 - you have given a queen and a bishop for a queen and a pawn. The move that shows it is Qxf2.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Nxc6",
      "Qf6",
      "Qd2",
      "Qxf2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 591,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Nxc6-Qf6-Qd2-dxc6-Nc3-Qxf2",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1b1k1nr/ppp2ppp/2p5/2b5/4P3/2N5/PPPQ1qPP/R1B1KB1R w KQkq - 0 8",
    "solver": "white",
    "solution": "Qxf2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...Qxf2"
      }
    },
    "explanation": "Still loses the queen to Qxf2 Bxf2+ Kxf2 - the f2 pawn has been defended since White's queen went to d2. The move that shows it is Qxf2.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Nxc6",
      "Qf6",
      "Qd2",
      "dxc6",
      "Nc3",
      "Qxf2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 1024,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Nb3-Bxf2",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1bqk1nr/pppp1ppp/2n5/8/4P3/1N6/PPP2bPP/RNBQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "Kxf2",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Bxf2"
      }
    },
    "explanation": "It wins a pawn but Kxf2 leaves White with the bishop pair, an extra piece in the attack, and your king still on e8. The move that shows it is Kxf2.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Nb3",
      "Bxf2"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 670,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Nxd4-Bc5-Nb3-Bb6-Nc3-Nf6-Qe2-Nxe4",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1bqk2r/pppp1ppp/1bn5/8/4n3/1NN5/PPP1QPPP/R1B1KB1R w KQkq - 0 8",
    "solver": "white",
    "solution": "Qxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...Nxe4"
      }
    },
    "explanation": "Loses a piece: after Nxe4 the knight is simply taken and there is no follow-up. The move that shows it is Qxe4.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Bc5",
      "Nb3",
      "Bb6",
      "Nc3",
      "Nf6",
      "Qe2",
      "Nxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 92,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-scotch:e4-e5-Nf3-Nc6-d4-exd4-Bc4-Bc5-c3-Nf6-e5-Ne4",
    "kind": "punish",
    "entryId": "vs-scotch",
    "fen": "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bpn3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 7",
    "solver": "white",
    "solution": "Bd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Ne4"
      }
    },
    "explanation": "The knight has no support on e4 and after Qe2 or Bd5 it is simply lost. The move that shows it is Bd5.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Bc4",
      "Bc5",
      "c3",
      "Nf6",
      "e5",
      "Ne4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 115,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-f4-exf4",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "rnbqkb1r/pppp1ppp/5n2/8/4Pp2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
    "solver": "white",
    "solution": "e5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...exf4"
      }
    },
    "explanation": "Accepting is exactly what White wants: e4-e5 comes with tempo on your knight and White has a big centre and open lines for the attack. The move that shows it is e5.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "f4",
      "exf4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 97,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-f4-Nc6",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 1 4",
    "solver": "white",
    "solution": "fxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...Nc6"
      }
    },
    "explanation": "It develops but fxe5 Nxe5 d4 kicks the knight and gives White the centre and the initiative for free. The move that shows it is fxe5.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "f4",
      "Nc6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 135,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-f4-d5-fxe5-dxe4",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "rnbqkb1r/ppp2ppp/5n2/4P3/4p3/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 5",
    "solver": "white",
    "solution": "exf6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...dxe4"
      }
    },
    "explanation": "It regains the pawn but the pawn on e4 is a target and after d3 White breaks up your centre with a good game. The move that shows it is exf6.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "f4",
      "d5",
      "fxe5",
      "dxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 164,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-f4-d5-fxe5-Ng4",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4P1n1/2N5/PPPP2PP/R1BQKBNR w KQkq - 1 5",
    "solver": "white",
    "solution": "d4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Ng4"
      }
    },
    "explanation": "The knight has no future on g4 - after d4 and h3 it has to come back and you have lost time and a pawn. The move that shows it is d4.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "f4",
      "d5",
      "fxe5",
      "Ng4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 111,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-f4-d5-fxe5-Nxe4-Nf3-Be7-d4-O-O-Bd3-Bg4",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "rn1q1rk1/ppp1bppp/8/3pP3/3Pn1b1/2NB1N2/PPP3PP/R1BQK2R w KQ - 3 8",
    "solver": "white",
    "solution": "Nxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "7...Bg4"
      }
    },
    "explanation": "It develops but leaves the knight on e4 hanging to Bxe4, and the pin is easily broken with Be3 and Qd2. The move that shows it is Nxe4.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "f4",
      "d5",
      "fxe5",
      "Nxe4",
      "Nf3",
      "Be7",
      "d4",
      "O-O",
      "Bd3",
      "Bg4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 109,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-Bc4-Nc6-d3-Nxe4",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/2NP4/PPP2PPP/R1BQK1NR w KQkq - 0 5",
    "solver": "white",
    "solution": "dxe4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Nxe4"
      }
    },
    "explanation": "Still the trap: Nxe4 dxe4 and White simply wins the piece back with an extra tempo and a better position. The move that shows it is dxe4.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "Bc4",
      "Nc6",
      "d3",
      "Nxe4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 306,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-vienna:e4-e5-Nc3-Nf6-g3-d5-exd5-Qxd5",
    "kind": "punish",
    "entryId": "vs-vienna",
    "fen": "rnb1kb1r/ppp2ppp/5n2/3qp3/8/2N3P1/PPPP1P1P/R1BQKBNR w KQkq - 0 5",
    "solver": "white",
    "solution": "Nxd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Qxd5"
      }
    },
    "explanation": "Nxd5 wins the queen - the knight on c3 defends d5. Always check what defends the square before taking with the queen. The move that shows it is Nxd5.",
    "line": [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "g3",
      "d5",
      "exd5",
      "Qxd5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 95,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-d4-exd4-c3-d5-exd5-Qxd5-cxd4-Qxd4",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "rnb1kbnr/ppp2ppp/8/8/3q4/8/PP3PPP/RNBQKBNR w KQkq - 0 6",
    "solver": "white",
    "solution": "Qxd4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Qxd4"
      }
    },
    "explanation": "Qxd4 loses the queen after Nf3 or - worse - it simply trades queens into a position where White has developed with tempo. The d4 pawn is defended. The move that shows it is Qxd4.",
    "line": [
      "e4",
      "e5",
      "d4",
      "exd4",
      "c3",
      "d5",
      "exd5",
      "Qxd5",
      "cxd4",
      "Qxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 134,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-d4-exd4-c3-d5-exd5-Qxd5-cxd4-Nc6-Nf3-Qxd4",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1b1kbnr/ppp2ppp/2n5/8/3q4/5N2/PP3PPP/RNBQKB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "Nxd4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Qxd4"
      }
    },
    "explanation": "Nxd4 wins the queen. The knight on f3 defends the pawn. The move that shows it is Nxd4.",
    "line": [
      "e4",
      "e5",
      "d4",
      "exd4",
      "c3",
      "d5",
      "exd5",
      "Qxd5",
      "cxd4",
      "Nc6",
      "Nf3",
      "Qxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 232,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-d4-exd4-Qxd4-Nc6-Qe3-d5",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1bqkbnr/ppp2ppp/2n5/3p4/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq - 0 5",
    "solver": "white",
    "solution": "exd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...d5"
      }
    },
    "explanation": "Too early - exd5 Qxe3+ or Nb5 gives White real activity with your king still in the middle. The move that shows it is exd5.",
    "line": [
      "e4",
      "e5",
      "d4",
      "exd4",
      "Qxd4",
      "Nc6",
      "Qe3",
      "d5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 219,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-d4-exd4-Qxd4-Nc6-Qe3-Nd4",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1bqkbnr/pppp1ppp/8/8/3nP3/4Q3/PPP2PPP/RNB1KBNR w KQkq - 3 5",
    "solver": "white",
    "solution": "Qxd4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...Nd4"
      }
    },
    "explanation": "The knight is chased away by c3 or Bd3 and you have lost time and the good square on c6. The move that shows it is Qxd4.",
    "line": [
      "e4",
      "e5",
      "d4",
      "exd4",
      "Qxd4",
      "Nc6",
      "Qe3",
      "Nd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 409,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-d4-exd4-Qxd4-Nc6-Qe3-Nf6-Nc3-d5",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3p4/4P3/2N1Q3/PPP2PPP/R1B1KBNR w KQkq - 0 6",
    "solver": "white",
    "solution": "exd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...d5"
      }
    },
    "explanation": "Now exd5 Nb5 comes with tempo on c7, and your king is still on e8. The move that shows it is exd5.",
    "line": [
      "e4",
      "e5",
      "d4",
      "exd4",
      "Qxd4",
      "Nc6",
      "Qe3",
      "Nf6",
      "Nc3",
      "d5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 135,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-Nf3-Nc6-d4-exd4-c3-d5-exd5-Nf6",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3P4/3p4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 1 6",
    "solver": "white",
    "solution": "dxc6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Nf6"
      }
    },
    "explanation": "It leaves White a pawn up after cxd4 with a strong centre. Take the pawn back while the queen is safe. The move that shows it is dxc6.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "c3",
      "d5",
      "exd5",
      "Nf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 403,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-Nf3-Nc6-d4-exd4-c3-d5-exd5-dxc3",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1bqkbnr/ppp2ppp/2n5/3P4/8/2p2N2/PP3PPP/RNBQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "dxc6",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...dxc3"
      }
    },
    "explanation": "Back into the gambit, and now with a tempo lost. The whole point was to decline. The move that shows it is dxc6.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "c3",
      "d5",
      "exd5",
      "dxc3"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 142,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-danish-goring:e4-e5-Nf3-Nc6-d4-exd4-c3-d5-exd5-Qxd5-cxd4-Qxd4",
    "kind": "punish",
    "entryId": "vs-danish-goring",
    "fen": "r1b1kbnr/ppp2ppp/2n5/8/3q4/5N2/PP3PPP/RNBQKB1R w KQkq - 0 7",
    "solver": "white",
    "solution": "Nxd4",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Qxd4"
      }
    },
    "explanation": "Nxd4 or Qxd4 wins material - the pawn is defended by the knight on f3. The move that shows it is Nxd4.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "c3",
      "d5",
      "exd5",
      "Qxd5",
      "cxd4",
      "Qxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 232,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-english:c4-e5-Nc3-Nf6-Nf3-Bb4",
    "kind": "punish",
    "entryId": "vs-english",
    "fen": "rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 4 4",
    "solver": "white",
    "solution": "Nxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "3...Bb4"
      }
    },
    "explanation": "It develops but leaves e5 hanging - Nxe5 simply wins a pawn. The move that shows it is Nxe5.",
    "line": [
      "c4",
      "e5",
      "Nc3",
      "Nf6",
      "Nf3",
      "Bb4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 102,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-english:c4-e5-Nc3-Nf6-Nf3-Nc6-g3-d5-cxd5-Qxd5",
    "kind": "punish",
    "entryId": "vs-english",
    "fen": "r1b1kb1r/ppp2ppp/2n2n2/3qp3/8/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "Nxd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Qxd5"
      }
    },
    "explanation": "The queen is a target: Nc3 or Bg2 comes with tempo and White develops while you retreat. The move that shows it is Nxd5.",
    "line": [
      "c4",
      "e5",
      "Nc3",
      "Nf6",
      "Nf3",
      "Nc6",
      "g3",
      "d5",
      "cxd5",
      "Qxd5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 459,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-english:c4-e5-Nc3-Nf6-Nf3-Nc6-e3-d5-cxd5-Qxd5",
    "kind": "punish",
    "entryId": "vs-english",
    "fen": "r1b1kb1r/ppp2ppp/2n2n2/3qp3/8/2N1PN2/PP1P1PPP/R1BQKB1R w KQkq - 0 6",
    "solver": "white",
    "solution": "Nxd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "5...Qxd5"
      }
    },
    "explanation": "Nc3 or Bc4 gains a tempo on the queen and White develops while you retreat. The move that shows it is Nxd5.",
    "line": [
      "c4",
      "e5",
      "Nc3",
      "Nf6",
      "Nf3",
      "Nc6",
      "e3",
      "d5",
      "cxd5",
      "Qxd5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 481,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-english:c4-e5-Nc3-Nf6-Nf3-Nc6-e3-d5-cxd5-Nxd5-Bb5-Bd7",
    "kind": "punish",
    "entryId": "vs-english",
    "fen": "r2qkb1r/pppb1ppp/2n5/1B1np3/8/2N1PN2/PP1P1PPP/R1BQK2R w KQkq - 2 7",
    "solver": "white",
    "solution": "Nxd5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "6...Bd7"
      }
    },
    "explanation": "Passive, and it lets Nxd5 or Bxc6 come on White's terms. The move that shows it is Nxd5.",
    "line": [
      "c4",
      "e5",
      "Nc3",
      "Nf6",
      "Nf3",
      "Nc6",
      "e3",
      "d5",
      "cxd5",
      "Nxd5",
      "Bb5",
      "Bd7"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 238,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-reti:Nf3-d5-g3-Nf6-Bg2-c6-O-O-e5",
    "kind": "punish",
    "entryId": "vs-reti",
    "fen": "rnbqkb1r/pp3ppp/2p2n2/3pp3/8/5NP1/PPPPPPBP/RNBQ1RK1 w kq - 0 5",
    "solver": "white",
    "solution": "Nxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "4...e5"
      }
    },
    "explanation": "Ambitious but loose: d4 or Nxe5 comes and your centre pawns become targets before you are developed. The move that shows it is Nxe5.",
    "line": [
      "Nf3",
      "d5",
      "g3",
      "Nf6",
      "Bg2",
      "c6",
      "O-O",
      "e5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 135,
      "at": "2026-08-29"
    }
  },
  {
    "id": "punish:vs-reti:Nf3-d5-b3-e5",
    "kind": "punish",
    "entryId": "vs-reti",
    "fen": "rnbqkbnr/ppp2ppp/8/3pp3/8/1P3N2/P1PPPPPP/RNBQKB1R w KQkq - 0 3",
    "solver": "white",
    "solution": "Nxe5",
    "prompt": {
      "key": "puzzles.promptPunish",
      "vars": {
        "move": "2...e5"
      }
    },
    "explanation": "Tempting, but Bb2 is already pointing at the pawn and after Nxe5 or d4 you have overreached. The move that shows it is Nxe5.",
    "line": [
      "Nf3",
      "d5",
      "b3",
      "e5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 151,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:italian-game:italian-blackburne-shilling",
    "kind": "trap",
    "entryId": "italian-game",
    "fen": "r1bqkbnr/pppp1ppp/8/4N3/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    "solver": "black",
    "solution": "Qg5",
    "prompt": {
      "key": "puzzles.promptTrapTheirs",
      "vars": {
        "name": "italian-game.trap.italian-blackburne-shilling.name",
        "side": "common.black"
      }
    },
    "explanation": "The knight on d4 looks like a beginner move hanging a pawn, and 4.Nxe5 looks like winning one. Then the queen comes to g5 hitting the knight and g2 at once, and the greedy follow-up ends in mate on f3. The answer is not to take: 4.Nxd4 exd4 5.O-O leaves White a comfortable tempo up.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bc4",
      "Nd4",
      "Nxe5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 116,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:ruy-lopez:ruy-noahs-ark",
    "kind": "trap",
    "entryId": "ruy-lopez",
    "fen": "r1bqkbnr/2p2ppp/p2p4/1p6/3QP3/1B6/PPP2PPP/RNB1K2R b KQkq - 0 8",
    "solver": "black",
    "solution": "c5",
    "prompt": {
      "key": "puzzles.promptTrapTheirs",
      "vars": {
        "name": "ruy-lopez.trap.ruy-noahs-ark.name",
        "side": "common.black"
      }
    },
    "explanation": "The trap every Ruy Lopez player falls into once. Taking the pawn back on d4 with the queen looks natural, and then the black c- and b-pawns roll forward and the bishop on b3 runs out of squares. The pawns on b5 and c4 build a wall the bishop cannot escape. Recapture with the knight or the c-pawn instead, and check the bishop has a way out before grabbing anything.",
    "line": [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bb5",
      "a6",
      "Ba4",
      "d6",
      "d4",
      "b5",
      "Bb3",
      "Nxd4",
      "Nxd4",
      "exd4",
      "Qxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 283,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:queens-gambit-declined:qgd-elephant",
    "kind": "trap",
    "entryId": "queens-gambit-declined",
    "fen": "r1bqkb1r/pppn1ppp/5n2/3N2B1/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 6",
    "solver": "black",
    "solution": "Nxd5",
    "prompt": {
      "key": "puzzles.promptTrapTheirs",
      "vars": {
        "name": "queens-gambit-declined.trap.qgd-elephant.name",
        "side": "common.black"
      }
    },
    "explanation": "The knight on f6 looks pinned, so taking on d5 looks like winning a pawn. It is not: the knight takes back anyway, and after the queens come off with Bxd8 the check on b4 wins the piece straight back with a much better position for Black. The pin is only real if Black cannot afford the queen trade.",
    "line": [
      "d4",
      "d5",
      "c4",
      "e6",
      "Nc3",
      "Nf6",
      "Bg5",
      "Nbd7",
      "cxd5",
      "exd5",
      "Nxd5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 474,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:french-defence:french-milner-barry",
    "kind": "trap",
    "entryId": "french-defence",
    "fen": "r1b1kbnr/pp3ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQK2R w KQkq - 0 9",
    "solver": "white",
    "solution": "Bb5",
    "prompt": {
      "key": "puzzles.promptTrapTheirs",
      "vars": {
        "name": "french-defence.trap.french-milner-barry.name",
        "side": "common.white"
      }
    },
    "explanation": "Taking twice on d4 wins a pawn and loses the game: Bb5+ comes with check, and after the bishop is traded off White has a huge lead in development with the black king stuck in the middle. The pawn is there to be taken, but only once the check has been taken away.",
    "line": [
      "e4",
      "e6",
      "d4",
      "d5",
      "e5",
      "c5",
      "c3",
      "Nc6",
      "Nf3",
      "Qb6",
      "Bd3",
      "cxd4",
      "cxd4",
      "Nxd4",
      "Nxd4",
      "Qxd4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 723,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:caro-kann:caro-smothered",
    "kind": "trap",
    "entryId": "caro-kann",
    "fen": "r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6",
    "solver": "white",
    "solution": "Nd6",
    "prompt": {
      "key": "puzzles.promptTrapTheirs",
      "vars": {
        "name": "caro-kann.trap.caro-smothered.name",
        "side": "common.white"
      }
    },
    "explanation": "The most famous short mate in the Caro-Kann. After ...Nd7, the natural-looking ...Ngf6 is mate in one: the knight lands on d6 and every escape square is covered by Black's own pieces. The rule is simple - once the queen appears on e2, look at d6 before developing the second knight.",
    "line": [
      "e4",
      "c6",
      "d4",
      "d5",
      "Nc3",
      "dxe4",
      "Nxe4",
      "Nd7",
      "Qe2",
      "Ngf6"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 99855,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:vs-kings-gambit:kg-qh4",
    "kind": "trap",
    "entryId": "vs-kings-gambit",
    "fen": "rnbqk1nr/pppp1ppp/8/2b1P3/4P3/8/PPPP2PP/RNBQKBNR b KQkq - 0 3",
    "solver": "black",
    "solution": "Qh4",
    "prompt": {
      "key": "puzzles.promptTrapOurs",
      "vars": {
        "name": "vs-kings-gambit.trap.kg-qh4.name",
        "side": "common.black"
      }
    },
    "explanation": "After 2...Bc5 the e5 pawn is untouchable. 3.fxe5?? Qh4+ and White must block with g3, when ...Qxe4+ picks up the e-pawn and then the rook on h1. This is the whole reason the bishop goes to c5 rather than anywhere else, and it is worth knowing cold - club players grab that pawn all the time.",
    "line": [
      "e4",
      "e5",
      "f4",
      "Bc5",
      "fxe5"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 371,
      "at": "2026-08-29"
    }
  },
  {
    "id": "trap:vs-kings-gambit:kg-early-check",
    "kind": "trap",
    "entryId": "vs-kings-gambit",
    "fen": "rnb1kbnr/pppp1ppp/8/8/2B1Pp1q/8/PPPP2PP/RNBQK1NR w KQkq - 2 4",
    "solver": "white",
    "solution": "Kf1",
    "prompt": {
      "key": "puzzles.promptTrapTheirs",
      "vars": {
        "name": "vs-kings-gambit.trap.kg-early-check.name",
        "side": "common.white"
      }
    },
    "explanation": "If you have accepted the gambit, the natural-looking ...Qh4+ is a mistake: White simply plays Kf1, and although castling rights are gone, the white king is perfectly safe while the black queen becomes a target for Nf3, g2-g3 and Rg1 with tempo after tempo. Checks are only good when they achieve something.",
    "line": [
      "e4",
      "e5",
      "f4",
      "exf4",
      "Bc4",
      "Qh4"
    ],
    "verified": {
      "depth": 24,
      "marginCp": 129,
      "at": "2026-08-29"
    }
  }
]

/** Depth every puzzle above was verified at. */
export const PUZZLE_VERIFY_DEPTH = 24
