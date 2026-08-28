import type { Opening } from '../types'

export const queensGambitDeclined: Opening = {
  kind: 'opening',
  id: 'queens-gambit-declined',
  name: "Queen’s Gambit Declined (Exchange)",
  eco: 'D35',
  side: 'white',
  summary:
    "White exchanges on d5 while the black bishop is still shut in behind the e6-pawn, producing a fixed structure where the plans are clear on both sides. White’s main weapon is the minority attack: b2-b4-b5 to crack open Black’s queenside and leave a weak pawn on c6.",
  traps: [
    {
      id: 'qgd-elephant',
      name: 'The Elephant Trap',
      owner: 'theirs',
      moves: [
        'd4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Nbd7', 'cxd5', 'exd5', 'Nxd5',
        'Nxd5', 'Bxd8', 'Bb4+', 'Qd2', 'Bxd2+', 'Kxd2', 'Kxd8',
      ],
      setup: 11,
      point:
        'The knight on f6 looks pinned, so taking on d5 looks like winning a pawn. It is not: the knight takes back anyway, and after the queens come off with Bxd8 the check on b4 wins the piece straight back with a much better position for Black. The pin is only real if Black cannot afford the queen trade.',
    },
  ],
  tree: [
    {
      san: 'd4',
      idea: 'Take the centre and open the c1-bishop.',
      hint: 'Start with the queen-pawn.',
      children: [
        {
          san: 'd5',
          label: 'Classical reply',
          idea: 'Black meets the centre head on.',
          children: [
            {
              san: 'c4',
              idea: "The Queen’s Gambit. It is not a real gambit: the pawn can always be regained, and the point is to deflect the d5-pawn so White owns the centre.",
              hint: 'Challenge the d5-pawn from the side.',
              mistakes: [
                { san: 'Nf3', deliberate: true, why: 'A fine move, but this repertoire plays c4 first so Black cannot answer with a comfortable ...Bf5 set-up.' },
                { san: 'Bf4', deliberate: true, why: 'That is the London System - a different repertoire. Here we play the Queen’s Gambit.' },
                { san: 'e3', why: 'Too modest. It shuts in the c1-bishop before challenging the centre.' },
              ],
              children: [
                {
                  san: 'e6',
                  label: "Queen’s Gambit Declined",
                  idea: 'Black supports d5 with a pawn, accepting that the c8-bishop is temporarily passive.',
                  children: [
                    {
                      san: 'Nc3',
                      idea: 'Develop and add a third attacker to d5. Black must decide how to hold the centre.',
                      hint: 'Develop a knight so it presses on d5.',
                      mistakes: [
                        { san: 'cxd5', why: 'Too early. Black recaptures with ...exd5 and the c8-bishop is suddenly free; the Exchange Variation only makes sense once Black has committed a knight to f6.' },
                        { san: 'e3', why: 'Playable but it locks in the c1-bishop before you have to. Develop the knight first.' },
                      ],
                      children: [
                        {
                          san: 'Nf6',
                          label: 'Main line',
                          idea: 'Black develops and defends d5 a third time.',
                          children: [
                            {
                              san: 'cxd5',
                              idea: 'The Exchange Variation. Now is the moment: with the knight on f6, Black must recapture with the e-pawn, so the c8-bishop stays passive and the structure is fixed.',
                              hint: 'One capture now fixes the structure in your favour, because Black cannot recapture with a piece.',
                              mistakes: [
                                { san: 'Bg5', deliberate: true, why: 'A great move and the Orthodox main line, but this repertoire commits to the Exchange Variation, where the plan is much easier to remember.' },
                                { san: 'Nf3', why: 'Playable, but it lets Black free the position with ...dxc4 or ...c5. Take on d5 while it costs Black the bishop’s diagonal.' },
                              ],
                              children: [
                                {
                                  san: 'exd5',
                                  label: 'Main line',
                                  idea: 'Forced in spirit: recapturing with the knight would give White a free hand in the centre with e4.',
                                  children: [
                                    {
                                      san: 'Bg5',
                                      idea: 'Pin the knight that guards d5. This is the standard follow-up and it makes ...Be7 almost obligatory.',
                                      hint: 'Pin the piece that defends the d5-pawn.',
                                      mistakes: [
                                        { san: 'Bf4', why: 'Playable, but the bishop is far more annoying on g5 where it pins the f6-knight and eyes the e7 square.' },
                                        { san: 'e4', why: 'Loses a pawn: after ...dxe4 the pawn is simply gone and your centre collapses.' },
                                      ],
                                      children: [
                                        {
                                          san: 'Be7',
                                          label: 'Main line',
                                          idea: 'Black breaks the pin and prepares to castle.',
                                          children: [
                                            {
                                              san: 'e3',
                                              idea: 'Open the f1-bishop and give the king a safe home. The pawn on e3 is not passive here - the structure is fixed, so the c1-bishop is already outside the pawn chain.',
                                              hint: 'Open a path for the light-squared bishop.',
                                              mistakes: [
                                                { san: 'e4', why: 'Loses a pawn - the d5-pawn is defended three times and after ...dxe4 you have nothing to show for it.' },
                                                { san: 'Bxf6', why: 'Trading here gives Black the bishop pair for free. Keep the pin; the trade is only good once it wins something concrete.' },
                                              ],
                                              children: [
                                                {
                                                  san: 'c6',
                                                  label: 'Main line',
                                                  idea: 'Black shores up d5 and prepares ...Bf5 or ...Nbd7. This is exactly the pawn the minority attack will target.',
                                                  children: [
                                                    {
                                                      san: 'Bd3',
                                                      idea: 'The bishop takes the b1-h7 diagonal, eyeing h7 and controlling f5 so Black cannot free the light-squared bishop.',
                                                      hint: 'Develop your last minor piece to the diagonal that stops ...Bf5.',
                                                      mistakes: [
                                                        { san: 'Nf3', why: 'Natural, but the bishop should come out first: after Nf3 Black gets in ...Bf5 and solves the problem piece.' },
                                                        { san: 'b4', why: 'The right idea, but far too early - you are not developed and the pawn is loose.' },
                                                      ],
                                                      end: {
                                                        name: 'Queen’s Gambit Declined, Exchange Variation',
                                                        plans: [
                                                          'The minority attack: play Rb1, b2-b4 and b4-b5. After bxc6 bxc6 Black is left with a permanently weak pawn on c6 and a hole on c5.',
                                                          'Complete development with Nge2 (not Nf3) so the f-pawn is free for a later f2-f3 and e3-e4 break.',
                                                          'Trade the dark-squared bishops with Bxe7 only when it helps you - Black often wants that trade more than you do.',
                                                          'Watch for ...Ne4: meet it with Bxe7 and then Nxe4 or f3, and remember the knight cannot stay there once you challenge it.',
                                                          'If Black attacks on the kingside with ...Ne4 and ...f5, defend with f3 and Kh1 and keep pushing on the queenside - your attack is faster because it targets pawns, not a castled king.',
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                                {
                                                  san: 'O-O',
                                                  label: 'Castling first',
                                                  idea: 'Black castles before deciding where the pawns go.',
                                                  children: [
                                                    {
                                                      san: 'Bd3',
                                                      idea: 'Same plan: take the b1-h7 diagonal and stop ...Bf5.',
                                                      hint: 'Take the diagonal that keeps the c8-bishop locked in.',
                                                      end: {
                                                        name: 'QGD Exchange, 6...O-O',
                                                        plans: [
                                                          'Nge2, O-O, Rb1 and then the minority attack with b4-b5.',
                                                          'Because Black has not played ...c6 yet, the immediate Nge2 and f3-e4 central plan is also available.',
                                                          'Keep the bishop on g5 as long as it pins the f6-knight.',
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                                {
                                                  san: 'Nbd7',
                                                  label: 'Developing the knight',
                                                  idea: 'Black develops and keeps ...c6 in reserve.',
                                                  children: [
                                                    {
                                                      san: 'Bd3',
                                                      idea: 'Develop and control f5 - the plan does not change.',
                                                      hint: 'Take the diagonal that keeps the c8-bishop locked in.',
                                                      end: {
                                                        name: 'QGD Exchange, 6...Nbd7',
                                                        plans: [
                                                          'Nge2, O-O, Rb1 and the minority attack.',
                                                          'With the knight on d7 rather than the pawn on c6, keep an eye on a quick Nf3-e5 too.',
                                                          'The e3-e4 break becomes strong if Black ever loosens control of that square.',
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
                                          san: 'c6',
                                          label: 'Supporting d5 first',
                                          idea: 'Black bolsters the centre before breaking the pin.',
                                          children: [
                                            {
                                              san: 'e3',
                                              idea: 'Open the bishop and prepare to castle; the game usually transposes.',
                                              hint: 'Open a path for the light-squared bishop.',
                                              end: {
                                                name: 'QGD Exchange, 5...c6',
                                                plans: [
                                                  'Bd3, Nge2, O-O and the minority attack with Rb1 and b4-b5.',
                                                  'Qc2 is a useful square, adding to the pressure on h7 and c6.',
                                                  'Because Black has not played ...Be7, keep an eye on ...Bd6 hitting h2 - Bd3 answers it.',
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          san: 'h6',
                                          label: 'Questioning the bishop',
                                          idea: 'Black asks the bishop to declare itself.',
                                          children: [
                                            {
                                              san: 'Bh4',
                                              idea: 'Keep the pin. Trading on f6 would hand Black the bishop pair and repair the structure.',
                                              hint: 'Keep the pin on the f6-knight rather than trading it off.',
                                              mistakes: [
                                                { san: 'Bxf6', deliberate: true, why: 'A genuine alternative, and engines rate it a shade higher. It is not this repertoire’s choice though: it hands over the bishop pair and lets Black develop the queen to f6 with time, and the minority-attack plan works best with the pin intact.' },
                                                { san: 'Bf4', why: 'This retreat gives up the pin for nothing; the bishop has no future on f4 once Black plays ...Bd6.' },
                                              ],
                                              end: {
                                                name: 'QGD Exchange, 5...h6',
                                                plans: [
                                                  'Continue e3, Bd3, Nge2 and O-O.',
                                                  'The pawn on h6 is a small weakness: a later Qc2 and Bg3 lines up on the b1-h7 diagonal.',
                                                  'The minority attack with Rb1 and b4-b5 is still the main plan.',
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
                                  san: 'Nxd5',
                                  label: 'Recapturing with the knight',
                                  idea: 'Black avoids the fixed structure, but the knight on d5 can be attacked.',
                                  children: [
                                    {
                                      san: 'e4',
                                      idea: 'Grab the whole centre with tempo. Black must move the knight again and White gets a perfect pawn duo.',
                                      hint: 'Black has put a knight in front of your e-pawn. Hit it and take the centre.',
                                      end: {
                                        name: 'QGD, 4...Nxd5',
                                        plans: [
                                          'After ...Nxc3 bxc3 you have the classical big centre with pawns on d4 and e4.',
                                          'Play Nf3, Bd3 and O-O, then push with e4-e5 or d4-d5 at the right moment.',
                                          'The half-open b-file gives your rook a target on b7.',
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
                          san: 'c6',
                          label: 'Triangle / Semi-Slav set-up',
                          idea: 'Black keeps every option open and heads for Semi-Slav structures.',
                          children: [
                            {
                              san: 'Nf3',
                              idea: 'Develop naturally. This keeps the game in normal Semi-Slav channels and avoids the sharpest gambits.',
                              hint: 'Just develop your other knight to its best square.',
                              end: {
                                name: 'Semi-Slav, Triangle set-up',
                                plans: [
                                  'e3, Bd3 and O-O gives a solid Meran-style position.',
                                  'Watch for ...dxc4 followed by ...b5 - meet it with a2-a4 or the Meran main lines.',
                                  'If Black never takes on c4, the e3-e4 break is your main way to open the position.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'c5',
                          label: 'Tarrasch Defence',
                          idea: 'Black accepts an isolated queen pawn in return for free piece play.',
                          children: [
                            {
                              san: 'cxd5',
                              idea: 'Take first. Black must recapture with the e-pawn, and after ...exd5 the d5-pawn will be isolated.',
                              hint: 'Trade in the centre so Black is left with a lone pawn on d5.',
                              mistakes: [
                                { san: 'dxc5', why: 'This releases the tension in the wrong direction: Black plays ...d4 and gets a strong centre with a free game.' },
                                { san: 'Nf3', why: 'Playable, but taking on d5 first is the main line and gives Black the isolated pawn you want to play against.' },
                              ],
                              end: {
                                name: 'Tarrasch Defence',
                                plans: [
                                  'The main line is Nf3, g3 and Bg2 - the fianchetto puts maximum pressure on the isolated d5-pawn.',
                                  'Blockade d4 with a knight and trade pieces; in an endgame the isolated pawn is simply weak.',
                                  'Do not let Black play ...d4 for free - it releases the weakness and frees the position.',
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
                  san: 'c6',
                  label: 'Slav Defence',
                  idea: 'Black supports d5 with the c-pawn, keeping the c8-bishop free.',
                  children: [
                    {
                      san: 'Nf3',
                      idea: 'Develop and cover e5, which is the square the c8-bishop wants to support with ...Bf5.',
                      hint: 'Develop the kingside knight and control e5 before Black plays ...Bf5.',
                      end: {
                        name: 'Slav Defence',
                        plans: [
                          'Nc3 next; then either e3 (solid) or the sharp a4 lines against ...dxc4 and ...b5.',
                          'If Black plays ...Bf5, the standard reply is Nc3 followed by e3 and a later Nh4 hitting the bishop.',
                          'The e3-e4 break is the main way to open the position once you are developed.',
                        ],
                      },
                    },
                  ],
                },
                {
                  san: 'dxc4',
                  label: "Queen’s Gambit Accepted",
                  idea: 'Black takes the pawn, planning to give it back for development or hold it with ...b5.',
                  children: [
                    {
                      san: 'Nf3',
                      idea: 'Do not rush to recapture. Nf3 stops ...e5 and the pawn on c4 cannot be held - e3 and Bxc4 come next.',
                      hint: 'Stop Black from freeing the position with ...e5. The pawn is not going anywhere.',
                      mistakes: [
                        { san: 'e3', why: 'This allows ...b5 holding the extra pawn for the moment, and after ...Bb7 Black is fine. Nf3 first is more accurate.' },
                        { san: 'Qa4+', why: 'It wins the pawn back, but the queen comes out early and Black gains time with ...Nc6 and ...Nf6.' },
                        { san: 'e4', why: 'Ambitious but Black hits back with ...e5 or ...Nf6 and your centre is loose. Nf3 first is the main line.' },
                      ],
                      end: {
                        name: "Queen’s Gambit Accepted",
                        plans: [
                          'Play e3 and Bxc4 next, reaching a comfortable isolated-pawn-free position with a lead in development.',
                          'The e3-e4 break gives you a big centre once the bishop has recaptured on c4.',
                          'If Black tries ...b5, the standard reply is a2-a4 undermining the pawn chain.',
                        ],
                      },
                    },
                  ],
                },
                {
                  san: 'e5',
                  label: 'Albin Counter-Gambit',
                  idea: 'Black gambits a pawn to gain space, hoping for the ...d4 wedge and tricks on the e-file.',
                  children: [
                    {
                      san: 'dxe5',
                      idea: 'Take the pawn - declining it lets Black equalise for free.',
                      hint: 'Accept the gambit; the alternative gives Black exactly what it wants.',
                      mistakes: [
                        { san: 'cxd5', why: "Black replies ...exd4 and gets a strong pawn on d4 with a free game. Take on e5 first." },
                        { san: 'e3', why: 'Black answers ...exd4 and after exd4 the position is symmetrical and equal - you have declined a free pawn.' },
                      ],
                      children: [
                        {
                          san: 'd4',
                          label: 'Main line',
                          idea: 'The point of the gambit: the pawn on d4 cramps White and eyes c3 and e3.',
                          children: [
                            {
                              san: 'Nf3',
                              idea: 'Develop and stop the annoying ...Bb4+ and ...Qe7 ideas from becoming dangerous. Avoid the trap 4.e3? Bb4+ 5.Bd2 dxe3! when Black gets a huge attack.',
                              hint: 'Develop a piece. Do not touch the e-pawn - there is a famous trap there.',
                              mistakes: [
                                { san: 'e3', why: 'The classic trap: after ...Bb4+ Bd2 dxe3! Bxb4 exf2+ Black wins material or the initiative. Never play e3 here.' },
                                { san: 'e4', why: 'Loosening. Black plays ...Nc6 and ...Bg4 with strong pressure on your weakened centre.' },
                              ],
                              end: {
                                name: 'Albin Counter-Gambit',
                                plans: [
                                  'Play g3 and Bg2 next - the fianchetto is the safest and strongest set-up against the Albin.',
                                  'Once you castle and play Nbd2, the d4-pawn becomes weak rather than strong.',
                                  'Keep the extra pawn on e5; it cramps Black and is hard to win back.',
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
      ],
    },
  ],
}
