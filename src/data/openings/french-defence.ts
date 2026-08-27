import type { Opening } from '../types'

export const frenchDefence: Opening = {
  id: 'french-defence',
  name: 'French Defence (Classical, Steinitz)',
  eco: 'C11',
  side: 'black',
  summary:
    'Black answers 1.e4 with ...e6 and ...d5, building a solid pawn chain and accepting a cramped but very hard to crack position. The price is the light-squared bishop, shut in behind e6; the compensation is the ...c5 break and permanent pressure against the base of White’s pawn chain on d4.',
  tree: [
    {
      san: 'e4',
      label: 'King pawn opening',
      idea: 'White takes the centre.',
      children: [
        {
          san: 'e6',
          idea: 'The French move order. It prepares ...d5 with pawn support, so that White cannot simply trade and simplify.',
          hint: 'Prepare ...d5 with a modest pawn move first.',
          mistakes: [
            { san: 'd5', why: 'That is the Scandinavian: after exd5 Qxd5 Nc3 your queen is chased around. The French supports d5 with a pawn first.' },
            { san: 'e5', why: 'A good move, but that is the Open Game, not the French.' },
            { san: 'c6', why: 'That is the Caro-Kann - the French’s cousin, but a different repertoire.' },
          ],
          children: [
            {
              san: 'd4',
              label: 'Main line',
              idea: 'White builds the big centre.',
              children: [
                {
                  san: 'd5',
                  idea: 'The point of ...e6. Now White must decide what to do about the centre, and every choice gives Black a clear plan.',
                  hint: 'Now challenge the centre with the pawn you prepared.',
                  mistakes: [
                    { san: 'c5', why: 'Too early - White plays d5 and gains a big space advantage while your position stays passive.' },
                    { san: 'Nf6', why: 'White plays e5 and the knight is kicked at once, having gained nothing.' },
                  ],
                  children: [
                    {
                      san: 'Nc3',
                      label: 'Classical / Winawer',
                      idea: 'White defends e4 with the most natural developing move.',
                      children: [
                        {
                          san: 'Nf6',
                          idea: 'The Classical French. Attacking e4 forces White to resolve the centre, and the knight will be a useful defender on d7 after e4-e5.',
                          hint: 'Attack the e-pawn and force White to commit.',
                          mistakes: [
                            { san: 'Bb4', why: 'That is the Winawer - a great opening, but far sharper and this repertoire chooses the Classical.' },
                            { san: 'dxe4', why: 'The Rubinstein. It is solid but very passive: you hand White the centre and free development for nothing.' },
                            { san: 'c5', why: 'Premature. White has not committed in the centre yet, and exd5 followed by dxc5 gives White the better structure.' },
                          ],
                          children: [
                            {
                              san: 'e5',
                              label: 'Steinitz Variation',
                              idea: 'White gains space and shuts the position, the most testing and most common reply.',
                              children: [
                                {
                                  san: 'Nfd7',
                                  idea: 'The knight steps back to d7, where it supports the coming ...c5 break and eyes b6 and f8. Retreating is not passive here: the whole game is about hitting d4.',
                                  hint: 'The knight is attacked. Retreat it to the square where it will support your central break.',
                                  mistakes: [
                                    { san: 'Ne4', why: 'The knight has no support there and White plays Nxe4 dxe4 with a strong centre and a free game.' },
                                    { san: 'Ng8', why: 'It undoes your development completely. The knight belongs on d7 where it supports ...c5.' },
                                    { san: 'Nbd7', why: 'Wrong knight. The b8-knight belongs on c6, where it hits d4; it is the attacked f6-knight that must retreat.' },
                                  ],
                                  children: [
                                    {
                                      san: 'f4',
                                      label: 'Steinitz main line',
                                      idea: 'White props up e5 with a pawn and gains more space.',
                                      children: [
                                        {
                                          san: 'c5',
                                          idea: 'The French break. White’s pawn chain runs d4-e5, so d4 is its base: hit it and the whole structure comes under strain.',
                                          hint: 'Attack the base of White’s pawn chain.',
                                          mistakes: [
                                            { san: 'f6', why: 'Also a French break, but with the pawn on f4 supporting e5 it is far less effective here, and it opens lines towards your own king.' },
                                            { san: 'b6', why: 'Solving the bad bishop is a real French idea, but it is much too slow while White has a free hand in the centre. Hit d4 first.' },
                                            { san: 'Nc6', why: 'Natural, but the pawn should come first: ...c5 attacks d4 with a pawn, which is worth far more than a piece attack.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Nf3',
                                              label: 'Main line',
                                              idea: 'White develops and defends d4 a second time.',
                                              children: [
                                                {
                                                  san: 'Nc6',
                                                  idea: 'Pile up on d4. Every black piece in this system points at that one square.',
                                                  hint: 'Add another attacker to the pawn White is holding together with everything.',
                                                  mistakes: [
                                                    { san: 'cxd4', why: 'Releasing the tension too early: after Nxd4 White is comfortable and you have given up your main source of pressure.' },
                                                    { san: 'Qb6', why: 'A good move in many French positions, but the knight should come to c6 first so that ...Qb6 hits a properly overloaded d4.' },
                                                  ],
                                                  end: {
                                                    name: 'French Defence, Steinitz Variation main line',
                                                    plans: [
                                                      'Keep piling on d4: ...Qb6 and ...cxd4 at the right moment, with the queen and knights all bearing down on it.',
                                                      'The ...f6 break comes later, once White is committed - it opens the f-file and attacks the head of the chain.',
                                                      'Your light-squared bishop is the problem piece: free it with ...b6 and ...Ba6, or trade it after ...cxd4 and ...Bb4.',
                                                      'Watch White’s kingside build-up with Be3, Qd2, Bd3 and O-O - the g4-g5 and f4-f5 pushes are the danger.',
                                                      'The c-file is half open for you: a rook on c8 combines well with ...Nb4 hitting the bishop on d3.',
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                            {
                                              san: 'dxc5',
                                              label: 'Releasing the tension',
                                              idea: 'White grabs the pawn but gives up the strong pawn chain.',
                                              children: [
                                                {
                                                  san: 'Nc6',
                                                  idea: 'Develop and prepare to win the pawn back with ...Bxc5 - there is no hurry, the pawn on c5 cannot run.',
                                                  hint: 'Do not chase the pawn yet. Develop the piece that will help you regain it.',
                                                  mistakes: [
                                                    { san: 'Bxc5', why: 'Too fast: White plays Qg4 hitting g7 and you have to weaken the kingside. Develop first.' },
                                                    { san: 'Qc7', why: 'The queen is misplaced there and White consolidates with Bd3 and O-O keeping the extra pawn.' },
                                                  ],
                                                  end: {
                                                    name: 'French Steinitz, 6.dxc5',
                                                    plans: [
                                                      'Regain the pawn with ...Bxc5 once White has spent a move on a3 or Bd3.',
                                                      'The d4 square is now a wonderful outpost for a black knight.',
                                                      'The e5-pawn is loose without the d4 support - attack it with ...f6 and ...Qb6.',
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
                                      san: 'Nf3',
                                      label: 'Quiet development',
                                      idea: 'White develops without committing the f-pawn.',
                                      children: [
                                        {
                                          san: 'c5',
                                          idea: 'The break is even better here, because e5 is defended only once.',
                                          hint: 'Attack the base of the pawn chain.',
                                          end: {
                                            name: 'French Classical, 5.Nf3',
                                            plans: [
                                              '...Nc6 and ...Qb6 pile onto d4.',
                                              'The ...f6 break is strong here because the e5-pawn has no f4 support.',
                                              'Trade off the bad bishop with ...b6 and ...Ba6 when you get the chance.',
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      san: 'Nce2',
                                      label: 'Reinforcing d4',
                                      idea: 'White backs up d4 and keeps the c-pawn free for c3.',
                                      children: [
                                        {
                                          san: 'c5',
                                          idea: 'Hit d4 before White consolidates with c3.',
                                          hint: 'Attack the base of the pawn chain before White reinforces it.',
                                          end: {
                                            name: 'French Classical, 5.Nce2',
                                            plans: [
                                              'Follow with ...Nc6 and ...Qb6; the knight on e2 is passive and White is slow.',
                                              'The ...f6 break works well here.',
                                              'Because the c3-knight has left, ...cxd4 followed by ...Nb6 and ...Bd7-b5 is a good regrouping.',
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
                              san: 'Bg5',
                              label: 'Classical, 4.Bg5',
                              idea: 'White pins the knight and increases the pressure on d5.',
                              children: [
                                {
                                  san: 'Be7',
                                  idea: 'Break the pin. Now e4-e5 can be met by ...Nfd7 with the bishop already developed, and Bxf6 costs White the bishop pair.',
                                  hint: 'The knight is pinned. Unpin it with a developing move.',
                                  mistakes: [
                                    { san: 'dxe4', why: 'The Burn Variation - playable, but it hands White the centre. The repertoire keeps the tension.' },
                                    { san: 'h6', why: 'It invites Bxf6, and after ...Qxf6 or ...gxf6 you either lose time or wreck your structure.' },
                                    { san: 'Bb4', why: 'The bishop is not doing anything on b4 with the knight on c3 already defended, and it walks into e5 hitting your knight.' },
                                  ],
                                  end: {
                                    name: 'French Classical, 4.Bg5 Be7',
                                    plans: [
                                      'After 5.e5 Nfd7 6.Bxe7 Qxe7 you have traded the bad bishop - a strategic success.',
                                      'The ...c5 break follows, hitting d4 as always.',
                                      'The half-open c-file and pressure on d4 are your standard sources of play.',
                                    ],
                                  },
                                },
                              ],
                            },
                            {
                              san: 'exd5',
                              label: 'Exchange Variation',
                              idea: 'White releases the tension and heads for a symmetrical position.',
                              children: [
                                {
                                  san: 'exd5',
                                  idea: 'Recapture and note the silver lining: your light-squared bishop, normally the French problem piece, is now free.',
                                  hint: 'Recapture towards the centre and free your bad bishop.',
                                  end: {
                                    name: 'French Exchange Variation',
                                    plans: [
                                      'Develop actively: ...Bd6, ...O-O, ...Bg4 or ...Bf5, ...c6 and ...Re8.',
                                      'The position is symmetrical, so play for a small edge rather than a break - avoid mass trades if you want to win.',
                                      'The ...c5 break is available later and gives you the more active game if White plays passively.',
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
                      san: 'Nd2',
                      label: 'Tarrasch Variation',
                      idea: 'White defends e4 without blocking the c-pawn, avoiding the Winawer pin.',
                      children: [
                        {
                          san: 'c5',
                          idea: 'The knight on d2 blocks White’s own bishop and does not control d4 well, so hit the centre immediately.',
                          hint: 'The knight on d2 is passive. Punish it by striking at the centre at once.',
                          mistakes: [
                            { san: 'Nf6', why: 'Perfectly playable, but the knight on d2 is passive right now and the immediate ...c5 is the sharpest way to exploit it.' },
                            { san: 'dxe4', why: 'It frees White’s pieces for nothing. Keep the tension and hit d4.' },
                          ],
                          end: {
                            name: 'French Tarrasch, 3...c5',
                            plans: [
                              'After exd5 Qxd5 the queen is safe because White has no Nc3 to gain time.',
                              'Develop with ...Nc6, ...Nf6, ...Bd6 or ...cxd4 and play against the isolated d-pawn if White gets one.',
                              'The knight on d2 is White’s worst piece - keep it there by avoiding early trades.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'e5',
                      label: 'Advance Variation',
                      idea: 'White gains space at once and locks the centre.',
                      children: [
                        {
                          san: 'c5',
                          idea: 'The base of the chain is d4. Attack it immediately - this is the whole French plan in one move.',
                          hint: 'Attack the base of White’s new pawn chain.',
                          mistakes: [
                            { san: 'f6', why: 'This break is for later, once White is committed. Right now it just opens lines towards your own king.' },
                            { san: 'Nc6', why: 'The pawn break should come first: ...c5 attacks d4 with a pawn, which is far more valuable than a piece attack.' },
                          ],
                          end: {
                            name: 'French Advance Variation',
                            plans: [
                              '...Nc6 and ...Qb6 pile onto d4; the b2-pawn is often a bonus target.',
                              '...Bd7-b5 trades off the bad light-squared bishop.',
                              'The ...f6 break comes later and hits the head of the chain.',
                              'White will try Nf3, Be2, O-O and a kingside attack - counter in the centre and on the queenside.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'exd5',
                      label: 'Exchange Variation',
                      idea: 'White simplifies immediately.',
                      children: [
                        {
                          san: 'exd5',
                          idea: 'Recapture towards the centre. Your problem bishop is now a good bishop.',
                          hint: 'Recapture with the pawn that frees your light-squared bishop.',
                          end: {
                            name: 'French Exchange Variation',
                            plans: [
                              'Develop actively with ...Nf6, ...Bd6, ...O-O and ...Bg4 or ...Bf5.',
                              'Avoid mechanical trades - the position is symmetrical, so activity decides.',
                              '...c5 later gives the position life and can leave White with an isolated pawn.',
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
              san: 'd3',
              label: "King’s Indian Attack",
              idea: 'White plays a flexible reversed system with Nd2, Ngf3, g3 and Bg2.',
              children: [
                {
                  san: 'd5',
                  idea: 'Take the centre while White plays modestly.',
                  hint: 'White has played a modest pawn move. Occupy the centre.',
                  end: {
                    name: "King’s Indian Attack vs the French",
                    plans: [
                      'Play ...c5, ...Nc6, ...Nge7 or ...Nf6 and ...Be7 with a comfortable game.',
                      'White will play e4-e5 and attack on the kingside; expand on the queenside with ...b5 and ...a5.',
                      'A rook on c8 and the ...c4 or ...d4 push give you the faster attack.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'Nf3',
              label: 'Flexible development',
              idea: 'White develops first and keeps d4 in reserve.',
              children: [
                {
                  san: 'd5',
                  idea: 'Play the French move anyway - after d4 the game transposes to your main line.',
                  hint: 'Play your standard French move; the game will transpose.',
                  end: {
                    name: 'French, 2.Nf3 d5',
                    plans: [
                      'If White plays d4, you are in your normal French with all the usual plans.',
                      'If White plays exd5, recapture with the pawn and your bad bishop is free.',
                      'If White plays e5, hit the chain with ...c5 as always.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'Nc3',
              label: 'Two Knights vs the French',
              idea: 'White develops and keeps d4 for later.',
              children: [
                {
                  san: 'd5',
                  idea: 'The standard French move. The knight on c3 will be hit by ...d4 or ...Bb4 later.',
                  hint: 'Play your standard French move.',
                  end: {
                    name: 'French, 2.Nc3 d5',
                    plans: [
                      'If White plays d4 the game transposes to the Classical or Winawer.',
                      'After exd5 exd5 you have easy development and a free bishop.',
                      '...Nf6 and ...Bb4 develop with tempo against the knight on c3.',
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
}
