import type { Opening } from '../types'

export const kingsIndianDefence: Opening = {
  id: 'kings-indian-defence',
  name: "King’s Indian Defence (Classical)",
  eco: 'E97',
  side: 'black',
  summary:
    'Black lets White build a big pawn centre, fianchettoes the dark-squared bishop behind it, and only then strikes with ...e5. The resulting positions are unbalanced by design: White expands on the queenside with c4-c5 while Black closes the centre and attacks the king with ...f5, ...f4 and ...g5.',
  tree: [
    {
      san: 'd4',
      label: 'Queen pawn opening',
      idea: 'White takes the centre.',
      children: [
        {
          san: 'Nf6',
          idea: 'Control e4 with a piece rather than a pawn. This is the Indian move order, keeping every option open.',
          hint: 'Fight for e4 with a piece, not a pawn.',
          mistakes: [
            { san: 'd5', deliberate: true, why: 'A good move, but that heads for the Queen’s Gambit family, not the King’s Indian.' },
            { san: 'g6', why: 'Playable, but it allows White the strong option of e4 immediately with a huge centre. ...Nf6 first keeps that pawn under control.' },
          ],
          children: [
            {
              san: 'c4',
              label: 'Main line',
              idea: 'White stakes out queenside space and supports the coming e4.',
              children: [
                {
                  san: 'g6',
                  idea: 'Prepare the fianchetto. The bishop on g7 will be the most important piece in the game, pointed at White’s centre and queenside.',
                  hint: 'Prepare to fianchetto the dark-squared bishop.',
                  mistakes: [
                    { san: 'e6', deliberate: true, why: 'That heads for the Nimzo-Indian or Queen’s Indian - fine openings, but a different repertoire.' },
                    { san: 'c5', why: 'That is the Benoni. Playable, but the King’s Indian fianchettoes first.' },
                    { san: 'd5', why: 'That transposes to a Grünfeld-style position without the useful ...g6 - White gets a comfortable edge with cxd5.' },
                  ],
                  children: [
                    {
                      san: 'Nc3',
                      label: 'Main line',
                      idea: 'White develops and prepares e4.',
                      children: [
                        {
                          san: 'Bg7',
                          idea: 'Complete the fianchetto. The bishop now eyes d4 and the long diagonal through to a1.',
                          hint: 'Put the bishop on the long diagonal.',
                          mistakes: [
                            { san: 'd5', deliberate: true, why: 'That is the Grünfeld - an excellent opening, but a different one. The King’s Indian develops the bishop and plays ...d6 and ...e5.' },
                            { san: 'c5', deliberate: true, why: 'That heads for a Benoni. Playable, but the King’s Indian completes the fianchetto first and hits the centre with ...e5.' },
                          ],
                          children: [
                            {
                              san: 'e4',
                              label: 'Classical / main line',
                              idea: 'White takes the full centre, exactly what the King’s Indian invites.',
                              children: [
                                {
                                  san: 'd6',
                                  idea: 'The key move. It stops e4-e5, opens the c8-bishop, and above all it prepares the ...e5 break that the whole system is built on.',
                                  hint: 'Stop White pushing the e-pawn again, and prepare your own central break.',
                                  mistakes: [
                                    { san: 'O-O', why: 'Playable and usually transposing, but White gets the extra option of e4-e5 in some lines. ...d6 first is the accurate order.' },
                                    { san: 'e5', why: 'Too soon: White plays dxe5 and after ...Ng4 or ...Nfd7 you have no real compensation. Support it with ...d6 first.' },
                                    { san: 'c5', why: 'That is a Benoni, and here White answers d5 with a big space advantage on your worst terms.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nf3',
                                      label: 'Classical Variation',
                                      idea: 'White develops naturally and prepares Be2 and O-O.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Castle. The king is safe behind the fianchetto and the rook will be useful on f8 once the ...f5 break comes.',
                                          hint: 'Get the king safe behind the fianchetto before opening the centre.',
                                          mistakes: [
                                            { san: 'e5', why: 'Premature: White plays dxe5 dxe5 and Qxd8+ takes away your castling rights, killing the whole attacking plan.' },
                                            { san: 'Nbd7', why: 'Playable, but castling first is more accurate - you want the rook on f8 before you commit the knight.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Be2',
                                              label: 'Classical main line',
                                              idea: 'White develops modestly and castles - the classical set-up.',
                                              children: [
                                                {
                                                  san: 'e5',
                                                  idea: 'The King’s Indian break at last. It challenges d4 and asks White the central question: close, trade, or hold the tension.',
                                                  hint: 'Now play the central break the whole opening has been preparing.',
                                                  mistakes: [
                                                    { san: 'c5', why: 'This heads for a Benoni structure. Playable, but the Classical King’s Indian plays ...e5, which keeps the kingside attack alive.' },
                                                    { san: 'Nbd7', why: 'The knight belongs there only after ...e5 - otherwise it just blocks the c8-bishop with nothing achieved.' },
                                                    { san: 'Nc6', why: 'The knight on c6 gets hit by d4-d5 with tempo. Play ...e5 first, and only then bring the knight to c6.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'O-O',
                                                      label: 'Main line',
                                                      idea: 'White castles and keeps the central tension.',
                                                      children: [
                                                        {
                                                          san: 'Nc6',
                                                          idea: 'The Mar del Plata move. It provokes d4-d5, which closes the centre - exactly what Black wants, because then the kingside attack with ...f5 becomes the only game in town.',
                                                          hint: 'Attack the centre with a piece and invite White to close it.',
                                                          mistakes: [
                                                            { san: 'exd4', why: 'Releasing the tension helps White: after Nxd4 the position opens and your bishop on g7 bites on granite.' },
                                                            { san: 'Nbd7', deliberate: true, why: 'A perfectly good alternative system, but the main line provokes d4-d5 with ...Nc6 and gets the attack going faster.' },
                                                            { san: 'c6', why: 'Too slow. It does nothing about the centre and White simply consolidates with d5 on the best terms.' },
                                                          ],
                                                          end: {
                                                            name: "King’s Indian Defence, Classical Mar del Plata",
                                                            plans: [
                                                              'After d4-d5 the centre is closed. Play ...Ne7, then ...Nd7 or ...Ne8, and break with ...f5.',
                                                              'The attacking formation is ...f5, ...f4, ...g5, ...Rf6-h6 or ...Ng6 and ...Nf6-h5. Pawns first, pieces after.',
                                                              'Do not open the centre. Your attack only works while White cannot counter in the middle.',
                                                              'White will play c4-c5 and attack on the queenside; count the tempi honestly - it is a genuine race.',
                                                              'The bishop on g7 looks passive behind the pawn chain but comes to life the moment the long diagonal opens.',
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      san: 'dxe5',
                                                      label: 'Exchange Variation',
                                                      idea: 'White trades in the centre, heading for a queenless middlegame.',
                                                      children: [
                                                        {
                                                          san: 'dxe5',
                                                          idea: 'Recapture. The queens usually come off, but the position is balanced and White’s d-file pressure is manageable.',
                                                          hint: 'Recapture in the centre.',
                                                          end: {
                                                            name: "King’s Indian, Exchange Variation",
                                                            plans: [
                                                              'After Qxd8 Rxd8 keep the rook on d8 and play ...c6, ...Nbd7 and ...Nc5.',
                                                              'The f8-rook is better on d8 than the a8-rook; recapture with the correct one.',
                                                              'Target d3 and c4 with a knight; the endgame is roughly equal.',
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      san: 'd5',
                                                      label: 'Petrosian Variation',
                                                      idea: 'White closes the centre before Black has played ...Nc6.',
                                                      children: [
                                                        {
                                                          san: 'a5',
                                                          idea: 'Stop White’s queenside expansion with b2-b4 before starting your own attack. In closed positions, prophylaxis first.',
                                                          hint: 'White is about to expand on the queenside. Stop it before you start your own attack.',
                                                          mistakes: [
                                                            { san: 'Ne8', why: 'The knight is heading there, but starting the kingside plan first lets White play b2-b4 and c4-c5 unopposed, and that race is faster than yours.' },
                                                          ],
                                                          end: {
                                                            name: "King’s Indian, Petrosian Variation",
                                                            plans: [
                                                              'Follow with ...Na6-c5, targeting the hole on b3 and d3.',
                                                              'Then prepare ...f5 as usual; with b4 stopped, White’s counterplay is much slower.',
                                                              'Keep the centre closed - your play is on the kingside.',
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      san: 'Be3',
                                                      label: 'Gligoric Variation',
                                                      idea: 'White develops and adds pressure on the centre before castling.',
                                                      children: [
                                                        {
                                                          san: 'Ng4',
                                                          idea: 'Hit the bishop immediately. It is the standard answer: White must either retreat or allow the trade, and either way you gain time.',
                                                          hint: 'The bishop just stepped onto a square where a knight can hit it. Do it now, before White plays h3.',
                                                          mistakes: [
                                                            { san: 'Nbd7', why: 'Playable, but you miss the chance to hit the bishop on e3 with tempo before White plays h3 or d5.' },
                                                            { san: 'exd4', deliberate: true, why: 'Objectively fine, and engines slightly prefer it. But it trades away the closed centre the whole King’s Indian attacking plan depends on, so this repertoire keeps the tension and hits the bishop instead.' },
                                                          ],
                                                          end: {
                                                            name: "King’s Indian, Gligoric Variation",
                                                            plans: [
                                                              'After Bg5 f6 Bh4 the bishop is offside and you continue with ...Nc6 or ...g5 and ...Nh6.',
                                                              'If White plays Bc1, you have gained time and can continue with ...Nc6 or ...exd4 on your terms.',
                                                              'The usual King’s Indian plans apply once the centre closes: ...f5 and the kingside attack.',
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
                                              san: 'h3',
                                              label: 'Makogonov Variation',
                                              idea: 'White prevents ...Bg4 and prepares Be3 and g2-g4.',
                                              children: [
                                                {
                                                  san: 'e5',
                                                  idea: 'Break in the centre as usual - White has spent a move on a pawn, so hit back at once.',
                                                  hint: 'Play your standard central break.',
                                                  end: {
                                                    name: "King’s Indian, Makogonov Variation",
                                                    plans: [
                                                      'If White closes with d5, continue with ...Nh5 or ...a5 and ...Na6-c5.',
                                                      'The h3-pawn makes ...f5 slightly harder but also gives White a target after ...f5-f4 and ...g5-g4.',
                                                      'Keep the centre closed and attack on the kingside.',
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
                                      san: 'f3',
                                      label: 'Sämisch Variation',
                                      idea: 'White supports e4 with the f-pawn and prepares Be3, Qd2 and a kingside pawn storm with g4 and h4.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Castle and keep options open. Against the Sämisch you can choose between ...e5, ...c5 and ...a6/...c6 plans later.',
                                          hint: 'Get the king safe first; you can choose your break next move.',
                                          mistakes: [
                                            { san: 'e5', why: 'Playable, but the Sämisch is exactly the line where White wants to close the centre and storm the kingside. Castle first and keep the ...c5 option.' },
                                          ],
                                          end: {
                                            name: "King’s Indian, Sämisch Variation",
                                            plans: [
                                              'The main choices are ...e5 (closing the centre) and ...c5 (a Benoni-style gambit that opens lines fast).',
                                              'White will play Be3, Qd2, O-O-O and g4-h4; counterplay must be quick.',
                                              '...a6, ...c6 and ...b5 is the modern queenside plan and often the safest.',
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      san: 'f4',
                                      label: 'Four Pawns Attack',
                                      idea: 'White takes as much space as possible - ambitious but loosening.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Castle first. Against an overextended centre, development matters more than immediate action.',
                                          hint: 'White has spent four moves on pawns. Get developed and castled, then hit back.',
                                          mistakes: [
                                            { san: 'e5', why: 'Premature: fxe5 dxe5 and d5 leaves you cramped with the king still in the centre.' },
                                          ],
                                          end: {
                                            name: "King’s Indian, Four Pawns Attack",
                                            plans: [
                                              'The main break is ...c5, hitting d4 while White’s king is still in the centre.',
                                              'After d5 the game becomes a Benoni where White’s f4-pawn is more weakness than strength.',
                                              '...e6 and ...exd5 opening lines is another good route.',
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      san: 'Be2',
                                      label: 'Move order transposition',
                                      idea: 'White develops the bishop before the knight.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Castle; after Nf3 the game transposes straight into the Classical main line.',
                                          hint: 'Get castled; the game will transpose to your main line.',
                                          end: {
                                            name: "King’s Indian, 5.Be2",
                                            plans: [
                                              'After Nf3 you are in the Classical: play ...e5 and then ...Nc6.',
                                              'If White plays Bg5 instead, ...h6 and ...e5 is comfortable.',
                                              'All the usual King’s Indian plans apply.',
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
                              san: 'g3',
                              label: 'Fianchetto Variation',
                              idea: 'White fianchettoes too, which is the safest and most positional way to meet the King’s Indian.',
                              children: [
                                {
                                  san: 'O-O',
                                  idea: 'Castle and wait. Against the fianchetto, Black chooses between ...d6 with ...Nbd7 and ...e5, or the ...c6 and ...d5 set-up.',
                                  hint: 'Get the king safe before choosing a central plan.',
                                  end: {
                                    name: "King’s Indian, Fianchetto Variation",
                                    plans: [
                                      'The main lines are ...d6, ...Nbd7 and ...e5, or the solid ...d6, ...Nc6 and ...a6 with ...Rb8 and ...b5.',
                                      'White’s bishop on g2 neutralises your bishop on g7, so the kingside attack is slower here.',
                                      'Queenside counterplay with ...a6, ...Rb8 and ...b5 is usually the best plan.',
                                    ],
                                  },
                                },
                              ],
                            },
                            {
                              san: 'Nf3',
                              label: 'Delaying e4',
                              idea: 'White develops and keeps both e4 and g3 available.',
                              children: [
                                {
                                  san: 'O-O',
                                  idea: 'Castle and keep every option open; after e4 d6 the game transposes to the Classical.',
                                  hint: 'Get castled; you can choose your central plan next.',
                                  end: {
                                    name: "King’s Indian, 4.Nf3",
                                    plans: [
                                      'After e4 play ...d6 and you are in the Classical main lines.',
                                      'If White plays g3 instead, the Fianchetto plans apply.',
                                      'Keep ...d6 and ...e5 as the core plan whenever White takes the full centre.',
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
                      label: 'Flexible',
                      idea: 'White develops before committing the queen’s knight.',
                      children: [
                        {
                          san: 'Bg7',
                          idea: 'Complete the fianchetto - your plan does not change.',
                          hint: 'Finish the fianchetto.',
                          end: {
                            name: "King’s Indian, 3.Nf3",
                            plans: [
                              'After Nc3 and e4 the game transposes to the Classical.',
                              'If White plays g3, follow the Fianchetto plans with ...O-O, ...d6 and ...Nbd7.',
                              '...d6 and ...e5 remains the central plan.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'g3',
                      label: 'Early fianchetto',
                      idea: 'White heads straight for the fianchetto systems.',
                      children: [
                        {
                          san: 'Bg7',
                          idea: 'Complete your own fianchetto and castle next.',
                          hint: 'Finish the fianchetto.',
                          end: {
                            name: "King’s Indian vs early g3",
                            plans: [
                              '...O-O and ...d6 next, then choose between ...Nbd7 and ...e5 or ...Nc6 and ...a6.',
                              'Queenside counterplay with ...a6, ...Rb8 and ...b5 works well here.',
                              'The centre with ...e5 is still the main freeing break.',
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
              label: 'Flexible move order',
              idea: 'White develops and delays c4.',
              children: [
                {
                  san: 'g6',
                  idea: 'Head for the fianchetto anyway - the King’s Indian set-up works against almost anything.',
                  hint: 'Play your standard set-up move.',
                  end: {
                    name: "King’s Indian vs 2.Nf3",
                    plans: [
                      'After c4 and Nc3 the game transposes to the main lines.',
                      'If White plays a London or Torre set-up, ...Bg7, ...O-O, ...d6 and ...Nbd7 with ...e5 is comfortable.',
                      'The ...c5 break is also available against systems without c4.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'Bg5',
              label: 'Trompowsky Attack',
              idea: 'White pins the knight immediately, avoiding all main-line theory.',
              children: [
                {
                  san: 'Ne4',
                  idea: 'The principled answer: attacking the bishop gains a tempo and forces White to declare intentions at once.',
                  hint: 'The pinned knight is not really pinned - there is no king behind it. Jump forward and hit the bishop.',
                  mistakes: [
                    { san: 'g6', why: 'Playable, but White takes with Bxf6 and after ...exf6 your structure is damaged for nothing.' },
                    { san: 'd5', deliberate: true, why: 'A good move, and engines are happy with it. This repertoire plays the principled ...Ne4 instead, hitting the bishop and making White declare intentions at once.' },
                  ],
                  end: {
                    name: 'Trompowsky Attack',
                    plans: [
                      'After Bf4 the standard continuations are ...c5 and ...d5, both giving a good game.',
                      'If White plays Bh4, ...c5 hits the centre while the bishop is offside.',
                      'You have gained time; use it to strike in the centre before White is developed.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'Bf4',
              label: 'London System',
              idea: 'White plays a solid system rather than fighting for theory.',
              children: [
                {
                  san: 'g6',
                  idea: 'Fianchetto as usual. Against the London the bishop on g7 combines with ...d6 and ...Nh5 hitting the f4-bishop.',
                  hint: 'Play your standard fianchetto set-up.',
                  end: {
                    name: "King’s Indian set-up vs the London",
                    plans: [
                      '...Bg7, ...O-O, ...d6 and ...Nbd7 with a later ...e5.',
                      '...Nh5 hitting the f4-bishop is a key idea - if White has not played h3, take the bishop pair.',
                      '...c5 is also good, hitting d4 while White has no c4-pawn to support it.',
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
