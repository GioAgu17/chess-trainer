import type { Opening } from '../types'

export const londonSystem: Opening = {
  kind: 'opening',
  id: 'london-system',
  name: 'London System',
  eco: 'D02',
  side: 'white',
  summary:
    'White builds the same solid set-up against almost anything: pawns on d4 and e3, the dark-squared bishop developed outside the pawn chain on f4, and knights on f3 and d2. It costs almost no memorisation and leads to a sound middlegame where the standard ideas are Ne5, a kingside build-up, and the e3-e4 break.',
  traps: [
    {
      id: 'london-nb5',
      name: 'The poisoned b2 pawn',
      owner: 'ours',
      moves: ['d4', 'Nf6', 'Bf4', 'c5', 'e3', 'Qb6', 'Nc3', 'Qxb2', 'Nb5'],
      setup: 8,
      point:
        'The b2 pawn is the London\'s one soft spot, and offering it with Nc3 is the way to make that a virtue. If Black takes, Nb5 traps the queen: Rb1 and Nc7+ are both coming and there is no good square. Offer the pawn only when the knight is on c3 first.',
    },
    {
      id: 'london-c4-tempo',
      name: 'Losing a tempo to ...c4',
      owner: 'theirs',
      moves: ['d4', 'd5', 'Bf4', 'Nf6', 'e3', 'c5', 'c3', 'Qb6', 'Qb3', 'c4'],
      setup: 9,
      point:
        'Offering the queen trade with Qb3 looks like the tidy way to defend b2. Black inserts ...c4 first, gaining a tempo and fixing the queenside, and then recaptures on b6 with the a-pawn and a half-open file. Answer ...Qb6 with Qc1 or Nc3 instead, and keep the queens on.',
    },
  ],
  tree: [
    {
      san: 'd4',
      idea: 'The London always starts here.',
      hint: 'Start with the queen-pawn.',
      children: [
        {
          san: 'd5',
          label: 'Classical reply',
          idea: 'Black meets the centre head on.',
          children: [
            {
              san: 'Bf4',
              idea: 'The London bishop. Getting it outside the pawn chain before playing e3 is the whole point of the system.',
              hint: 'Develop the bishop before you shut it in with a pawn.',
              mistakes: [
                { san: 'e3', why: 'This is the one move order error that ruins the London: the c1-bishop is now trapped behind its own pawns. Always develop it first.' },
                { san: 'c4', deliberate: true, why: "A good move - engines rate it above the London. But that is the Queen’s Gambit: a different repertoire, and one with far more theory to carry." },
                { san: 'Nf3', deliberate: true, why: 'A perfectly good move, and no worse than the text. It is a move-order preference: developing the knight first lets Black answer ...Bf5 or ...c5, and this repertoire gets the bishop outside the pawn chain before anything else.' },
              ],
              children: [
                {
                  san: 'Nf6',
                  label: 'Main line',
                  idea: 'Black develops naturally.',
                  children: [
                    {
                      san: 'e3',
                      idea: 'Now that the bishop is outside, the pawn chain can be built. e3 opens the f1-bishop and supports d4.',
                      hint: 'Now that the bishop is safely outside, build the pawn chain.',
                      mistakes: [
                        { san: 'Bxc7', why: 'The pawn is poisoned: ...Qxc7 wins the bishop and you are a whole piece down for one pawn.' },
                        { san: 'Nc3', why: 'In the London the queen’s knight belongs on d2, where it supports e4 and does not block the c-pawn.' },
                      ],
                      children: [
                        {
                          san: 'e6',
                          label: 'Main line',
                          idea: 'Black builds a solid but slightly passive set-up.',
                          children: [
                            {
                              san: 'Nf3',
                              idea: 'Develop and control e5 - the square the London knight wants to occupy later.',
                              hint: 'Develop the kingside knight to its natural square.',
                              mistakes: [
                                { san: 'Bd3', why: 'Playable, but the knight should come first: after Bd3 Black may hit it with ...c5 and ...Nc6 before you are ready.' },
                                { san: 'c4', deliberate: true, why: 'This transposes to a Queen’s Gambit but with the bishop already committed to f4, which is not what this repertoire wants.' },
                              ],
                              children: [
                                {
                                  san: 'c5',
                                  label: 'Main line',
                                  idea: 'Black challenges the d4-pawn, the principled way to fight the London.',
                                  children: [
                                    {
                                      san: 'c3',
                                      idea: 'Hold d4. The pawn triangle c3-d4-e3 is the backbone of the London and it gives the queen the b3 square.',
                                      hint: 'Support the attacked d4-pawn with a pawn, keeping the structure intact.',
                                      mistakes: [
                                        { san: 'dxc5', why: 'Releases the tension for nothing: Black recaptures with ...Bxc5 and gets a free, active game.' },
                                        { san: 'Nc3', why: 'The knight blocks the pawn that should be on c3 supporting d4. In the London the queen’s knight belongs on d2.' },
                                        { san: 'Bd3', why: 'Ignores the attack on d4. After ...cxd4 exd4 the structure is looser and Black has easy play against the isolated-ish d-pawn.' },
                                      ],
                                      children: [
                                        {
                                          san: 'Nc6',
                                          label: 'Main line',
                                          idea: 'Black develops and increases the pressure on d4.',
                                          children: [
                                            {
                                              san: 'Nbd2',
                                              idea: 'The London knight square. From d2 it supports e4 and c4, keeps the c-pawn free, and can go to f1 or b3.',
                                              hint: 'Develop the queen’s knight to the square that supports the future e4 break.',
                                              mistakes: [
                                                { san: 'Ne5', why: 'The knight wants that square, but not yet: ...Nxe5 dxe5 leaves the pawn on e5 loose and your structure worse. Support it with Nbd2 first.' },
                                                { san: 'dxc5', why: 'Still premature. Keep the tension; Black has to spend time recapturing.' },
                                              ],
                                              children: [
                                                {
                                                  san: 'Bd6',
                                                  label: 'Main line',
                                                  idea: 'Black offers to trade off the strong London bishop.',
                                                  children: [
                                                    {
                                                      san: 'Bg3',
                                                      idea: 'Sidestep the trade. The bishop is your best piece and on g3 it still eyes the b8-h2 diagonal while staying out of reach.',
                                                      hint: 'Black wants to trade your best piece. Do not let it happen.',
                                                      mistakes: [
                                                        { san: 'Bxd6', why: 'Trading your good bishop for Black’s problem piece is exactly what Black wants. It also gives Black the half-open e-file after ...Qxd6.' },
                                                        { san: 'Be5', why: 'The bishop is loose there: Black plays ...Nxe5 or ...Bxe5 and you have lost your best piece anyway, with a worse structure.' },
                                                        { san: 'Bd3', why: 'The f4-bishop is attacked. Deal with it first.' },
                                                      ],
                                                      end: {
                                                        name: 'London System, main line',
                                                        plans: [
                                                          'Bd3 and O-O next, then decide between the kingside plan and the central break.',
                                                          'Ne5 is the classic London idea: the knight is supported by the d2-knight and by f2-f4 if you want it.',
                                                          'The e3-e4 break is your main way to open the position; it is prepared by Nbd2, Bd3, Qe2 and sometimes Rae1.',
                                                          'Trading dark-squared bishops on d6 is fine once Black has committed the queen there and the e5 square is yours.',
                                                          'On the queenside, keep an eye on ...Qb6 hitting b2 - Qb3 or Rb1 answers it, and after Qxb3 axb3 the a-file works for you.',
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                                {
                                                  san: 'Be7',
                                                  label: 'Modest development',
                                                  idea: 'Black avoids the bishop trade and keeps things flexible.',
                                                  children: [
                                                    {
                                                      san: 'Bd3',
                                                      idea: 'Complete development on the b1-h7 diagonal; O-O and Ne5 follow.',
                                                      hint: 'Your bishop is not attacked. Finish developing on the diagonal aimed at h7.',
                                                      end: {
                                                        name: 'London System, 6...Be7',
                                                        plans: [
                                                          'O-O, then Ne5 and f2-f4 for a kingside build-up.',
                                                          'Qe2 and Rae1 prepare e3-e4.',
                                                          'With the bishop on e7 rather than d6, the b8-h2 diagonal stays open for your bishop - keep it there.',
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          san: 'Qb6',
                                          label: 'Hitting b2',
                                          idea: 'The most testing move: Black attacks b2 while the bishop has left the queenside.',
                                          children: [
                                            {
                                              san: 'Qb3',
                                              idea: 'The standard answer. Offering the trade defuses everything: if Black takes, axb3 opens the a-file and strengthens your centre.',
                                              hint: 'Do not defend b2 passively. Meet the queen with your own queen.',
                                              mistakes: [
                                                { san: 'b3', why: 'Passive and it weakens the dark squares around your king’s future home; the c1-a3 diagonal becomes a highway for Black.' },
                                                { san: 'Qc2', why: 'It defends b2 but leaves the queen awkward, and Black continues ...Bf5 with tempo.' },
                                                { san: 'dxc5', why: 'It saves b2 by opening the a7-g1 diagonal instead, and after ...Bxc5 Black is fully developed with the initiative.' },
                                              ],
                                              end: {
                                                name: 'London System, 5...Qb6',
                                                plans: [
                                                  'If Black trades on b3, recapture with the a-pawn: your rook gets the open a-file and c4 is covered.',
                                                  'If Black avoids the trade with ...c4, answer Qxb6 axb6 and play against the queenside pawns, or keep queens on with Qc2 and prepare b3.',
                                                  'The rest of the plan is unchanged: Nbd2, Be2 or Bd3, O-O and Ne5.',
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          san: 'cxd4',
                                          label: 'Releasing the tension',
                                          idea: 'Black trades in the centre, giving up some flexibility.',
                                          children: [
                                            {
                                              san: 'exd4',
                                              idea: 'Recapture towards the centre. The pawn on d4 is supported by c3 and your bishop on f4 stays outside the chain.',
                                              hint: 'Recapture with the pawn that keeps your bishop outside the pawn chain.',
                                              mistakes: [
                                                { san: 'cxd4', why: 'This leaves a backward pawn on e3 and shuts your bishop back in. Recapture the other way.' },
                                                { san: 'Nxd4', why: 'The knight is fine there for a moment, but you have given up the ideal London structure and Black equalises easily with ...e5.' },
                                              ],
                                              end: {
                                                name: 'London System, 5...cxd4',
                                                plans: [
                                                  'Nbd2, Bd3 and O-O; the pawn on d4 is solid and gives you the e5 square.',
                                                  'Ne5 followed by f2-f4 is a natural kingside build-up.',
                                                  'The c-file is half open for Black, so a rook on c1 is often useful.',
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  san: 'Bd6',
                                  label: 'Offering the trade early',
                                  idea: 'Black goes straight for the London bishop.',
                                  children: [
                                    {
                                      san: 'Bg3',
                                      idea: 'Keep the bishop. It is the piece that gives the London its bite.',
                                      hint: 'Black wants to trade your best piece. Step aside.',
                                      mistakes: [
                                        { san: 'Bxd6', why: 'Trading your good bishop for Black’s worse one is what Black is hoping for.' },
                                        { san: 'Bg5', why: 'The bishop has nothing to do on g5 here, and ...h6 gains a tempo. On g3 it keeps the useful diagonal.' },
                                      ],
                                      end: {
                                        name: 'London System, 4...Bd6',
                                        plans: [
                                          'c3, Nbd2, Bd3 and O-O - the standard set-up.',
                                          'Once Black plays ...Bxg3, recapture with hxg3: the h-file opens for your rook.',
                                          'Ne5 and f2-f4 remain the main kingside plan.',
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          san: 'c5',
                          label: 'Immediate central challenge',
                          idea: 'Black hits d4 before developing the kingside.',
                          children: [
                            {
                              san: 'c3',
                              idea: 'Hold the centre with the London triangle.',
                              hint: 'Support the attacked d-pawn with a pawn.',
                              end: {
                                name: 'London System, 3...c5',
                                plans: [
                                  'Nf3, Nbd2, Bd3 and O-O follow in almost any order.',
                                  'Meet ...Qb6 with Qb3, as usual.',
                                  'Keep the tension on d4 - Black usually has to resolve it first, which costs a tempo.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'g6',
                          label: "King’s Indian set-up",
                          idea: 'Black fianchettoes and will hit the centre with ...c5 or ...d6 and ...e5.',
                          children: [
                            {
                              san: 'Nf3',
                              idea: 'Develop and cover e5. Against a fianchetto the London plans h2-h3, Be2 and a slow build-up.',
                              hint: 'Just develop the kingside knight and keep the set-up.',
                              end: {
                                name: 'London System vs fianchetto',
                                plans: [
                                  'h2-h3 is important here: it stops ...Nh5 hitting your bishop and ...Bg4 pinning your knight.',
                                  'Be2, O-O, c3 and Nbd2 complete the set-up.',
                                  'The e3-e4 break, prepared by Qe2 and Rad1, is the main way to open the game.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'Bf5',
                          label: 'Mirroring the bishop',
                          idea: 'Black develops the problem bishop outside the pawn chain too.',
                          children: [
                            {
                              san: 'Nf3',
                              idea: 'Develop and keep the structure; c4 later will test the bishop’s absence from the queenside.',
                              hint: 'Develop the kingside knight and keep building.',
                              end: {
                                name: 'London System, 3...Bf5',
                                plans: [
                                  'c4 becomes strong here: with the bishop on f5, the b7-pawn and the queenside are looser.',
                                  'Qb3 hitting b7 is a recurring idea once the bishop has left the queenside.',
                                  'Otherwise the normal set-up with c3, Nbd2, Be2 and O-O is perfectly good.',
                                ],
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  san: 'c5',
                  label: 'Immediate ...c5',
                  idea: 'Black challenges d4 straight away.',
                  children: [
                    {
                      san: 'e3',
                      idea: 'Build the pawn chain; d4 is held by the coming c3.',
                      hint: 'Continue the standard set-up - the bishop is already out.',
                      end: {
                        name: 'London System, 2...c5',
                        plans: [
                          'c3 next holds d4 and completes the triangle.',
                          'Nf3, Nbd2, Bd3 and O-O follow.',
                          'Answer ...Qb6 with Qb3 as always.',
                        ],
                      },
                    },
                  ],
                },
                {
                  san: 'e6',
                  label: 'Solid set-up',
                  idea: 'Black shuts in the c8-bishop but keeps a rock-solid centre.',
                  children: [
                    {
                      san: 'e3',
                      idea: 'The standard London structure.',
                      hint: 'Continue the standard set-up - the bishop is already out.',
                      end: {
                        name: 'London System, 2...e6',
                        plans: [
                          'Nf3, c3, Nbd2, Bd3 and O-O in the usual order.',
                          "Black’s c8-bishop is the problem piece; avoid trades that free it.",
                          'Ne5 and the e3-e4 break are the two main plans.',
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          san: 'Nf6',
          label: 'Indian set-up',
          idea: "Black keeps the option of a King’s Indian, Nimzo or Grünfeld. The London works against all of them.",
          children: [
            {
              san: 'Bf4',
              idea: 'The same move regardless. This flexibility is exactly why the London is worth learning.',
              hint: 'Your set-up does not depend on what Black plays. Develop the bishop.',
              mistakes: [
                { san: 'c4', why: 'That invites the Nimzo-Indian, Grünfeld and King’s Indian all at once - a huge amount of theory. The London avoids all of it.' },
              ],
              children: [
                {
                  san: 'g6',
                  label: "King’s Indian set-up",
                  idea: 'Black fianchettoes and will play ...d6 and ...e5, or ...d5 and ...c5.',
                  children: [
                    {
                      san: 'e3',
                      idea: 'Build the chain. Against the fianchetto the key extra move is h2-h3.',
                      hint: 'Continue the London set-up.',
                      children: [
                        {
                          san: 'Bg7',
                          label: 'Main line',
                          idea: 'Black completes the fianchetto.',
                          children: [
                            {
                              san: 'Nf3',
                              idea: 'Develop and control e5 - the square Black wants for a pawn.',
                              hint: 'Develop the kingside knight.',
                              children: [
                                {
                                  san: 'O-O',
                                  label: 'Main line',
                                  idea: 'Black castles and prepares ...d6 and ...e5.',
                                  children: [
                                    {
                                      san: 'Be2',
                                      idea: 'A modest but useful square: it keeps h5 covered and prepares O-O and h2-h3.',
                                      hint: 'Develop the last minor piece so you can castle.',
                                      mistakes: [
                                        { san: 'Bd3', why: 'Against a fianchetto the bishop has no target on h7, and it walks into ...Nh5 hitting your f4-bishop. Be2 is better here.' },
                                      ],
                                      end: {
                                        name: 'London System vs the King’s Indian',
                                        plans: [
                                          'O-O and h2-h3 next: h3 is essential to stop ...Nh5 and ...Bg4.',
                                          'c3 and Nbd2 complete the set-up; the knight can then go to c4 hitting d6.',
                                          'If Black plays ...d6 and ...e5, meet it with dxe5 dxe5 and Bg5 or Bh2 - the e5-pawn becomes a target.',
                                          'The a4-a5 space grab on the queenside is a good long-term plan when Black attacks on the kingside.',
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  san: 'e6',
                  label: 'Flexible',
                  idea: 'Black keeps ...d5 and ...c5 in reserve.',
                  children: [
                    {
                      san: 'e3',
                      idea: 'The set-up is the same.',
                      hint: 'Continue the London set-up.',
                      end: {
                        name: 'London System vs 2...e6',
                        plans: [
                          'Nf3, c3, Nbd2, Bd3 and O-O.',
                          'Watch for ...Bb4+ - answer with c3 or Nbd2, never Bd2, because you want the f4-bishop to stay.',
                          'Ne5 and the e3-e4 break are the main ideas.',
                        ],
                      },
                    },
                  ],
                },
                {
                  san: 'c5',
                  label: 'Benoni-style challenge',
                  idea: 'Black hits the centre immediately.',
                  children: [
                    {
                      san: 'e3',
                      idea: 'Hold the centre with the chain; c3 supports d4 next.',
                      hint: 'Continue the London set-up - c3 will hold d4.',
                      end: {
                        name: 'London System vs 2...c5',
                        plans: [
                          'c3 next; if Black takes on d4, recapture with the e-pawn to keep the bishop outside.',
                          'Answer ...Qb6 with Qb3.',
                          'Nf3, Nbd2, Bd3 and O-O complete development.',
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
