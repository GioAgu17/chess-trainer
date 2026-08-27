import type { Opening } from '../types'

export const caroKann: Opening = {
  id: 'caro-kann',
  name: 'Caro-Kann Defence (Classical)',
  eco: 'B18',
  side: 'black',
  summary:
    'Black supports ...d5 with the c-pawn instead of the e-pawn, which means the light-squared bishop gets out to f5 before the pawn chain closes. The result is the French Defence without the bad bishop: a rock-solid structure, an easy plan, and endgames that often favour Black.',
  tree: [
    {
      san: 'e4',
      label: 'King pawn opening',
      idea: 'White takes the centre.',
      children: [
        {
          san: 'c6',
          idea: 'The Caro-Kann. It prepares ...d5 with pawn support while leaving the c8-h3 diagonal open for the bishop.',
          hint: 'Prepare ...d5 with a pawn move that does not shut in your light-squared bishop.',
          mistakes: [
            { san: 'e6', deliberate: true, why: 'That is the French Defence - solid, but it locks in the c8-bishop, which is exactly what the Caro-Kann avoids.' },
            { san: 'd5', why: 'That is the Scandinavian: after exd5 Qxd5 Nc3 your queen loses time. The Caro-Kann supports d5 first.' },
          ],
          children: [
            {
              san: 'd4',
              label: 'Main line',
              idea: 'White builds the classical centre.',
              children: [
                {
                  san: 'd5',
                  idea: 'Challenge the centre now that it is properly supported.',
                  hint: 'Challenge the centre with the pawn you prepared.',
                  mistakes: [
                    { san: 'e5', why: 'White simply takes with dxe5 and you have no good recapture; the c6-pawn is not doing its job there.' },
                    { san: 'Nf6', why: 'White plays e5 and gains time and space while you have not challenged the centre at all.' },
                  ],
                  children: [
                    {
                      san: 'Nc3',
                      label: 'Main line',
                      idea: 'White defends e4 and invites the classical exchange on e4.',
                      children: [
                        {
                          san: 'dxe4',
                          idea: 'Take. The whole point of the Caro-Kann structure is that after Nxe4 you develop the bishop to f5 with tempo, before playing ...e6.',
                          hint: 'Trade in the centre so that your light-squared bishop gets out before ...e6.',
                          mistakes: [
                            { san: 'e6', why: 'This transposes to a French and shuts in the very bishop the Caro-Kann is designed to free. Take on e4 first.' },
                            { san: 'Nf6', why: 'White plays e5 and after ...Nfd7 you are in a French-style position with the bishop still locked in.' },
                            { san: 'g6', why: 'The Gurgenidze - playable but very committal, and White gets a strong centre with e5.' },
                          ],
                          children: [
                            {
                              san: 'Nxe4',
                              label: 'Main line',
                              idea: 'White recaptures with the knight.',
                              children: [
                                {
                                  san: 'Bf5',
                                  idea: 'The Classical Caro-Kann. The bishop comes out with tempo, hitting the knight on e4, and only then will ...e6 close the chain.',
                                  hint: 'Develop the bishop outside the pawn chain, with tempo against the knight.',
                                  mistakes: [
                                    { san: 'Nf6', deliberate: true, why: 'That is the Bronstein-Larsen or the Tartakower, where White takes on f6 and wrecks your structure. The Classical develops the bishop first.' },
                                    { san: 'Nd7', deliberate: true, why: 'The Karpov Variation - completely sound, but slower. The whole point of the Caro-Kann is to get the bishop out first.' },
                                    { san: 'e6', why: 'This wastes the one advantage the Caro-Kann has over the French. Bring the bishop out first.' },
                                    { san: 'Bg4', why: 'The bishop has no target there and White plays f3 or h3 gaining time.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Ng3',
                                      label: 'Main line',
                                      idea: 'The knight steps aside and attacks the bishop.',
                                      children: [
                                        {
                                          san: 'Bg6',
                                          idea: 'Retreat along the diagonal. The bishop is safe on g6 and keeps controlling the important light squares.',
                                          hint: 'The bishop is attacked. Keep it on the same diagonal.',
                                          mistakes: [
                                            { san: 'Bd7', why: 'Passive - it undoes the development you just achieved and blocks the queen’s knight.' },
                                            { san: 'Be6', why: 'The bishop is worse there: it blocks the e-pawn, so you can never play ...e6 comfortably.' },
                                            { san: 'Bc8', why: 'This gives back the whole point of the variation. The bishop belongs on the b1-h7 diagonal.' },
                                            { san: 'e6', why: 'The bishop on f5 is attacked right now. Developing instead simply loses it to Nxf5 - deal with the threat first.' },
                                          ],
                                          children: [
                                            {
                                              san: 'h4',
                                              label: 'Main line',
                                              idea: 'White gains space and threatens h4-h5 to trap or trade the bishop.',
                                              children: [
                                                {
                                                  san: 'h6',
                                                  idea: 'Essential. It gives the bishop the h7 square so that h4-h5 no longer traps it, and it takes g5 away from White’s pieces.',
                                                  hint: 'White threatens to push the h-pawn again and trap your bishop. Give it an escape square.',
                                                  mistakes: [
                                                    { san: 'h5', why: 'It stops h5 but permanently weakens g5 and g6; White plays Nf3, Ne5 and Bd3 and your bishop has no good squares.' },
                                                    { san: 'e6', why: 'This is the move that loses the bishop: White plays h5 and the bishop on g6 is trapped.' },
                                                    { san: 'Nf6', why: 'White plays h5 and the bishop on g6 has nowhere to go. Deal with the threat first.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Nf3',
                                                      label: 'Main line',
                                                      idea: 'White develops and prepares Ne5 and Bd3.',
                                                      children: [
                                                        {
                                                          san: 'Nd7',
                                                          idea: 'Develop the knight to d7, covering e5 and f6 and keeping the c-file clear for a rook. The other knight will come to f6 next.',
                                                          hint: 'Develop the queen’s knight to the square that covers e5.',
                                                          mistakes: [
                                                            { san: 'Nf6', why: 'Playable, but it allows Ne5 with pressure. ...Nd7 first covers e5 and is the main line.' },
                                                            { san: 'e6', why: 'Natural, but the knight should come to d7 first so that Ne5 can always be met by ...Nxe5.' },
                                                          ],
                                                          end: {
                                                            name: 'Caro-Kann, Classical Variation main line',
                                                            plans: [
                                                              'Complete development with ...Ngf6, ...e6, ...Bd6 (trading if White has a knight on e5) and ...Qc7.',
                                                              'Castle long in the sharpest lines - White usually does, and then it is a race; castling short is the solid alternative.',
                                                              'The ...c5 break is your main way to open the position once you are developed.',
                                                              'Your structure has no weaknesses, so trades favour you. Aim for the endgame if White overextends on the kingside.',
                                                              'Keep an eye on the e5 square - if White plants a knight there, challenge it with ...Nxe5 or ...Bd6.',
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      san: 'h5',
                                                      label: 'Pushing on',
                                                      idea: 'White pushes anyway, forcing the bishop back.',
                                                      children: [
                                                        {
                                                          san: 'Bh7',
                                                          idea: 'The bishop is perfectly safe on h7 - this is exactly why ...h6 was played.',
                                                          hint: 'Your previous move made a square for this bishop. Use it.',
                                                          end: {
                                                            name: 'Caro-Kann Classical, 7.h5',
                                                            plans: [
                                                              'Develop with ...Nd7, ...Ngf6, ...e6 and ...Bd6.',
                                                              'The pawn on h5 is a long-term weakness for White; g6 breaks and endgames favour you.',
                                                              'The ...c5 break is still the way to open the position.',
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
                                              idea: 'White skips the h-pawn advance and develops.',
                                              children: [
                                                {
                                                  san: 'Nd7',
                                                  idea: 'Develop and cover e5 before White can use it.',
                                                  hint: 'Develop the queen’s knight to the square that covers e5.',
                                                  end: {
                                                    name: 'Caro-Kann Classical, 6.Nf3',
                                                    plans: [
                                                      '...Ngf6, ...e6, ...Bd6 and ...Qc7 complete a very comfortable set-up.',
                                                      'Without h4-h5 your bishop on g6 is completely safe and useful.',
                                                      'The ...c5 break frees the position at the right moment.',
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
                    },
                    {
                      san: 'e5',
                      label: 'Advance Variation',
                      idea: 'White closes the centre and takes space, the most popular try today.',
                      children: [
                        {
                          san: 'Bf5',
                          idea: 'The reason to play the Caro-Kann rather than the French: the bishop gets outside the pawn chain before ...e6 shuts the door.',
                          hint: 'Before you play ...e6, get the bishop out.',
                          mistakes: [
                            { san: 'e6', why: 'This turns the position into a French with a bad bishop - the one thing the Caro-Kann exists to avoid.' },
                            { san: 'c5', why: 'The break is a French idea. Here you have already spent a move on ...c6, so ...c5 costs a tempo. Develop the bishop first.' },
                          ],
                          end: {
                            name: 'Caro-Kann, Advance Variation',
                            plans: [
                              'Follow with ...e6, ...Nd7, ...Ne7 and ...c5 hitting the base of the chain.',
                              'If White plays Nf3 and Be2 with Nh4 hitting your bishop, be ready to retreat to g6 and meet Nxg6 with ...hxg6, opening the h-file.',
                              'The ...c5 break and pressure on d4 are your main plans, exactly as in the French, but with a good bishop.',
                              'Avoid ...h5 unless it is forced - it weakens g5 permanently.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'exd5',
                      label: 'Exchange Variation',
                      idea: 'White simplifies and plays for a small structural edge.',
                      children: [
                        {
                          san: 'cxd5',
                          idea: 'Recapture towards the centre. The position resembles a Queen’s Gambit Exchange with colours reversed, and Black is very solid.',
                          hint: 'Recapture with the pawn that keeps a pawn on d5.',
                          mistakes: [
                            { san: 'Qxd5', why: 'The queen comes out early and White gains time with Nc3. Recapture with the pawn.' },
                          ],
                          end: {
                            name: 'Caro-Kann Exchange Variation',
                            plans: [
                              'Develop with ...Nc6, ...Nf6, ...Bf5 or ...Bg4 and ...e6.',
                              'If White plays the Panov with c4, meet it with ...Nf6 and ...e6 or ...g6 and treat it as an isolated-pawn position.',
                              'Watch for the minority attack with b4-b5 - meet it with ...a6 and counterplay in the centre.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'f3',
                      label: 'Fantasy Variation',
                      idea: 'White props up e4 with the f-pawn, aiming for a big centre at the cost of king safety.',
                      children: [
                        {
                          san: 'e6',
                          idea: 'The safest reply. It keeps the centre solid and means the weakened e1-h4 diagonal will eventually count against White.',
                          hint: 'Keep the centre solid rather than opening it while White has an extra centre pawn.',
                          mistakes: [
                            { san: 'dxe4', why: 'After fxe4 White has the big centre that was the whole point of f3, and your development is behind.' },
                          ],
                          end: {
                            name: 'Caro-Kann, Fantasy Variation',
                            plans: [
                              'Follow with ...Nf6, ...Bd6 or ...Be7, ...O-O and the ...c5 break.',
                              'The f3-pawn weakens the g1-a7 and e1-h4 diagonals - ...Qb6 and ...Qh4+ ideas are worth remembering.',
                              'Do not open the centre until you are fully developed.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'Nd2',
                      label: 'Modern move order',
                      idea: 'White defends e4 with the other knight, keeping the c-pawn free.',
                      children: [
                        {
                          san: 'dxe4',
                          idea: 'Trade as usual - after Nxe4 the game transposes straight into the Classical main line.',
                          hint: 'Play the same trade as in the main line; the game transposes.',
                          end: {
                            name: 'Caro-Kann, 3.Nd2',
                            plans: [
                              'After Nxe4 play ...Bf5 and you are in the Classical main line.',
                              'All the usual plans apply: ...Nd7, ...Ngf6, ...e6, ...Bd6 and the ...c5 break.',
                              'The knight on d2 rather than c3 means White cannot easily attack d5, which suits you.',
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
              label: 'Flexible development',
              idea: 'White develops first, keeping d4 and d3 both available.',
              children: [
                {
                  san: 'd5',
                  idea: 'Play the Caro-Kann move anyway - the game usually transposes after d4.',
                  hint: 'Play your standard move; the game will transpose.',
                  end: {
                    name: 'Caro-Kann, 2.Nf3',
                    plans: [
                      'If White plays d4, you are in the main lines.',
                      'If White plays e5, reply ...Bf5 as in the Advance Variation.',
                      'If White plays exd5 cxd5 you have a comfortable, symmetrical game.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'Nc3',
              label: 'Two Knights Variation',
              idea: 'White develops flexibly and often follows with Nge2 or Nf3.',
              children: [
                {
                  san: 'd5',
                  idea: 'The standard challenge to the centre.',
                  hint: 'Play your standard move and challenge the centre.',
                  end: {
                    name: 'Caro-Kann, Two Knights Variation',
                    plans: [
                      'After Nf3 the main reply is ...Bg4, pinning the knight and solving the bishop problem.',
                      'If White takes on d5, recapture with the c-pawn.',
                      'Follow with ...e6, ...Nf6, ...Be7 and a solid, easy game.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'c4',
              label: 'Accelerated Panov',
              idea: 'White stakes out queenside space and heads for Panov structures.',
              children: [
                {
                  san: 'd5',
                  idea: 'Hit the centre. With pawns on e4 and c4 White is loose, and the tension favours the better developed side.',
                  hint: 'Challenge the centre immediately while White has two loose pawns there.',
                  end: {
                    name: 'Caro-Kann, 2.c4',
                    plans: [
                      'After exd5 cxd5 you often get an isolated-pawn position where the pawn is White’s problem, not yours.',
                      'Develop with ...Nf6, ...Nc6, ...e6 and ...Be7.',
                      'The d4 square is a natural outpost for your pieces.',
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
