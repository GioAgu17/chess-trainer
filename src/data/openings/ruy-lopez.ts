import type { Opening } from '../types'

export const ruyLopez: Opening = {
  id: 'ruy-lopez',
  name: 'Ruy Lopez (Morphy Defence)',
  eco: 'C84',
  side: 'white',
  summary:
    "White pressures the knight that defends e5, then retreats the bishop along the a2-g8 diagonal and builds the classic Ruy centre with c3 and d4. The long-term asset is the bishop on b3 and a space advantage; the long-term plan is Nbd2-f1-g3 and pressure on Black’s kingside.",
  tree: [
    {
      san: 'e4',
      idea: 'Claim the centre and open lines for the bishop and queen.',
      hint: 'Open the game with the most direct central pawn move.',
      mistakes: [
        { san: 'd4', why: 'A fine first move, but this repertoire is a king-pawn one. Everything that follows assumes the e-pawn has gone to e4.' },
        { san: 'Nf3', why: 'Playable, but it lets Black choose the opening. Take the centre first and steer the game where you know it.' },
      ],
      children: [
        {
          san: 'e5',
          label: 'Open Game',
          idea: 'Black stakes an equal claim in the centre.',
          children: [
            {
              san: 'Nf3',
              idea: 'Develop with tempo: the knight attacks e5.',
              hint: 'Develop a piece and attack the pawn Black just played.',
              children: [
                {
                  san: 'Nc6',
                  label: 'Main line',
                  idea: 'Black defends e5 naturally.',
                  children: [
                    {
                      san: 'Bb5',
                      idea: 'The Spanish bishop. It pins nothing yet, but it attacks the defender of e5 and asks Black an immediate question.',
                      hint: 'Attack the piece that is holding e5 together.',
                      mistakes: [
                        { san: 'Bc4', why: 'A good move, but that is the Italian Game. This repertoire is the Ruy Lopez.' },
                        { san: 'Nxe5', why: "Loses a pawn back after ...Nxe5, and worse, ...Qe7 or ...Nxe5 followed by ...Qe7 leaves you with nothing. The knight on e5 is not supported." },
                        { san: 'd4', why: 'The Scotch. Playable, but it trades off the central tension the Ruy Lopez wants to keep.' },
                      ],
                      children: [
                        {
                          san: 'a6',
                          label: 'Morphy Defence',
                          idea: 'Black asks the bishop to declare itself before deciding on a set-up.',
                          children: [
                            {
                              san: 'Ba4',
                              idea: 'Keep the bishop on the long diagonal. Trading on c6 straight away would repair Black’s structure and hand over the bishop pair for nothing.',
                              hint: "Black asked your bishop a question. Keep it on the diagonal pointing at Black’s kingside.",
                              mistakes: [
                                { san: 'Bxc6', why: "The Exchange Variation. It is a real line, but it gives up the bishop pair and this repertoire keeps the tension with Ba4." },
                                { san: 'Bc4', why: 'Retreating here wastes the two tempi you spent on Bb5; the bishop belongs on the a4-e8 diagonal where it keeps pressuring c6.' },
                              ],
                              children: [
                                {
                                  san: 'Nf6',
                                  label: 'Main line',
                                  idea: 'Black develops and attacks e4.',
                                  children: [
                                    {
                                      san: 'O-O',
                                      idea: 'The e4-pawn is offered: after ...Nxe4 White plays d4 and regains it with a strong initiative. Castling is faster than defending.',
                                      hint: 'You do not need to defend e4 yet. Do the most useful thing instead.',
                                      mistakes: [
                                        { san: 'd3', why: "Solid, but slow. Castling is stronger here because the e4-pawn is poisoned - Black’s ...Nxe4 runs into d2-d4 with a big lead in development." },
                                        { san: 'Nc3', why: 'Passive and it blocks the c-pawn. In the Ruy Lopez the c-pawn wants to go to c3 to support d4.' },
                                      ],
                                      children: [
                                        {
                                          san: 'Be7',
                                          label: 'Closed Ruy Lopez',
                                          idea: 'Black declines the pawn and heads for the solid Closed system.',
                                          children: [
                                            {
                                              san: 'Re1',
                                              idea: 'Now e4 is genuinely defended, and the rook stands on the file that will open. It also renews the pressure on e5 behind the knight.',
                                              hint: 'Defend the e-pawn with a developing move that puts a rook on the right file.',
                                              mistakes: [
                                                { san: 'd4', why: 'Premature: ...exd4 and ...b5 combine well for Black, and the bishop on a4 can get trapped by ...b5 and ...c5 - the so-called Noah’s Ark trap.' },
                                                { san: 'd3', why: 'Playable but modest. Re1 is the main line because it defends e4 while adding to the pressure on e5.' },
                                              ],
                                              children: [
                                                {
                                                  san: 'b5',
                                                  label: 'Main line',
                                                  idea: "Black kicks the bishop before it can combine with pressure on c6 - the point of having played ...a6.",
                                                  children: [
                                                    {
                                                      san: 'Bb3',
                                                      idea: 'The bishop reaches its best square, staring at f7 and supporting the coming d4.',
                                                      hint: 'The bishop is attacked. Put it where it eyes f7.',
                                                      mistakes: [
                                                        { san: 'Bxb5', why: 'This just loses a piece: after ...axb5 there is nothing to recapture with, and the open a-file is Black’s.' },
                                                      ],
                                                      children: [
                                                        {
                                                          san: 'd6',
                                                          label: 'Main line',
                                                          idea: 'Black shores up e5 and opens the c8-bishop.',
                                                          children: [
                                                            {
                                                              san: 'c3',
                                                              idea: 'The Ruy Lopez move. It prepares d2-d4 and gives the bishop the c2 square, out of reach of ...Na5.',
                                                              hint: 'Prepare the central break and give the bishop an escape square in one move.',
                                                              mistakes: [
                                                                { san: 'd4', why: "Without c3 first, ...Bg4 and the pressure on d4 give Black an easy game. Prepare the break." },
                                                                { san: 'a4', why: 'A real sideline, but the main plan is c3 and d4. Playing a4 too early lets Black consolidate with ...b4.' },
                                                                { san: 'Nc3', why: 'The c-pawn, not the knight, belongs on c3 here. The knight is heading for d2, f1 and g3.' },
                                                              ],
                                                              end: {
                                                                name: 'Closed Ruy Lopez, main line',
                                                                plans: [
                                                                  'Play h2-h3 next (stopping ...Bg4) and only then d2-d4 - this is the classic Ruy move order.',
                                                                  'The knight tour Nb1-d2-f1-g3 (or e3) is the main regrouping; the rook often follows to e1 and the queen to e2.',
                                                                  'Keep the bishop safe on c2 when ...Na5 comes, then play d4 and hit the centre.',
                                                                  'Watch the d5 and f5 squares - if Black plays ...exd4 and ...d5, be ready to meet it with e4-e5.',
                                                                  'On the queenside, a2-a4 at the right moment cracks open the b5 pawn chain.',
                                                                ],
                                                              },
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          san: 'O-O',
                                                          label: 'Castling first',
                                                          idea: 'Black castles before deciding on ...d6.',
                                                          children: [
                                                            {
                                                              san: 'c3',
                                                              idea: 'The plan does not change: prepare d4 and give the bishop the c2 square.',
                                                              hint: 'Your plan is the same whatever Black does here: prepare the central break.',
                                                              end: {
                                                                name: 'Closed Ruy Lopez, 7...O-O',
                                                                plans: [
                                                                  'Play d2-d4 next; because Black has not played ...d6, the pawn on e5 is loose and d4 comes with real force.',
                                                                  'h2-h3 remains a useful prophylactic move against ...Bg4.',
                                                                  'The Marshall Attack (...d5) is the critical try here - if you want to avoid it, insert a2-a4 before d4.',
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
                                                  san: 'd6',
                                                  label: 'Delaying ...b5',
                                                  idea: 'Black supports e5 first and keeps ...b5 in reserve.',
                                                  children: [
                                                    {
                                                      san: 'c3',
                                                      idea: 'Same plan: prepare d4 and open the c2 retreat for the bishop.',
                                                      hint: 'Prepare the central break and give the bishop an escape square.',
                                                      end: {
                                                        name: 'Closed Ruy Lopez, 6...d6',
                                                        plans: [
                                                          'Follow with h3 and d4 in the usual Ruy fashion.',
                                                          'Because ...b5 has not been played, keep the option of Bxc6 followed by d4 in reserve.',
                                                          'The knight tour Nbd2-f1-g3 is still the main regrouping.',
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
                                          san: 'Nxe4',
                                          label: 'Open Ruy Lopez',
                                          idea: 'Black takes the pawn. It is not a blunder - Black plans ...d5 to hold the knight on e4.',
                                          children: [
                                            {
                                              san: 'd4',
                                              idea: 'The point of castling. Opening the centre while Black is undeveloped regains the pawn or wins the initiative.',
                                              hint: 'Do not chase the knight. Open the centre against the uncastled king.',
                                              mistakes: [
                                                { san: 'Re1', why: 'Black answers ...Nc5 and the bishop on a4 comes under fire; the immediate central break is far stronger.' },
                                                { san: 'Nxe5', why: "Black replies ...Nxe5 and after dxe5 Black is fine; you have released the tension for nothing." },
                                              ],
                                              end: {
                                                name: 'Open Ruy Lopez',
                                                plans: [
                                                  'After ...b5 Bb3 d5 the standard continuation is dxe5 Be6, reaching the main Open Spanish tabiya.',
                                                  'Aim for c3, Nbd2 and a well-timed Bc2 to attack the knight on e4.',
                                                  'The e5-pawn is a long-term asset that cramps Black; keep it defended.',
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          san: 'b5',
                                          label: 'Kicking the bishop early',
                                          idea: 'Black wins the bishop pair question a move earlier.',
                                          children: [
                                            {
                                              san: 'Bb3',
                                              idea: 'The bishop reaches its best diagonal, pointing at f7.',
                                              hint: 'Retreat the attacked bishop to the square where it eyes f7.',
                                              end: {
                                                name: 'Ruy Lopez, Arkhangelsk move order',
                                                plans: [
                                                  'After ...Bb7 or ...Bc5 the game becomes an Arkhangelsk; play c3 and d4 or the flexible Re1 and d3.',
                                                  'a2-a4 is always worth considering against the b5/a6 pawn duo.',
                                                  'Keep the bishop on b3 alive - trading it removes your main attacking piece.',
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          san: 'Bc5',
                                          label: 'Møller Defence',
                                          idea: 'Black develops actively and eyes f2.',
                                          children: [
                                            {
                                              san: 'c3',
                                              idea: 'Prepare d4 with tempo against the bishop on c5.',
                                              hint: 'The bishop on c5 stands in the way of your central break. Prepare it anyway - the break comes with tempo.',
                                              end: {
                                                name: 'Ruy Lopez, Møller Defence',
                                                plans: [
                                                  'd2-d4 comes next, hitting the bishop and opening the centre.',
                                                  'Watch for ...Nxe4 tactics: the d4 push and Re1 usually leave Black overextended.',
                                                  'Bc2 followed by d4 is the standard regrouping if Black plays ...b5.',
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
                                  san: 'b5',
                                  label: 'Immediate queenside expansion',
                                  idea: 'Black kicks the bishop straight away.',
                                  children: [
                                    {
                                      san: 'Bb3',
                                      idea: 'Retreat to the best diagonal - this is where the bishop belongs in every Ruy Lopez.',
                                      hint: 'The bishop is attacked. There is only one square worth going to.',
                                      end: {
                                        name: 'Ruy Lopez, 4...b5',
                                        plans: [
                                          'Follow with O-O and c3, aiming for d4 as usual.',
                                          'a2-a4 hits the b5-pawn and is often strong before Black has played ...Bb7.',
                                          "Black’s queenside pawns are a target as well as a space gain - do not be afraid to open lines there.",
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  san: 'd6',
                                  label: 'Modern Steinitz Defence',
                                  idea: 'Black solidifies e5 and takes the sting out of the pressure on c6.',
                                  children: [
                                    {
                                      san: 'O-O',
                                      idea: 'Castle first and keep every option open; c3 and d4 will follow.',
                                      hint: 'Nothing is hanging. Get the king safe.',
                                      end: {
                                        name: 'Modern Steinitz Defence',
                                        plans: [
                                          'Play c3 and d4 in the usual way; Black is solid but passive.',
                                          'Re1, Nbd2 and Nf1-g3 is the standard regrouping.',
                                          'If Black plays ...b5 and ...Na5, the bishop retreats to c2 and you continue with d4.',
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
                          label: 'Berlin Defence',
                          idea: "Black hits e4 at once and invites the famous Berlin endgame after 4.O-O Nxe4 5.d4 Nd6.",
                          children: [
                            {
                              san: 'd3',
                              idea: 'The Anti-Berlin. Quietly defending e4 sidesteps the Berlin endgame entirely and keeps queens on for a normal Spanish middlegame.',
                              hint: 'Defend the e-pawn with a modest pawn move and keep queens on the board.',
                              mistakes: [
                                { san: 'O-O', why: 'This is the main line, but it invites the Berlin endgame after ...Nxe4 5.d4 Nd6 - a drawish position that is hard to play for a win. The repertoire keeps queens on.' },
                                { san: 'Nc3', why: 'Solid but it blocks the c-pawn, and after ...Bb4 the game becomes a Four Knights.' },
                              ],
                              end: {
                                name: 'Berlin Defence, Anti-Berlin 4.d3',
                                plans: [
                                  'Follow with c3, Nbd2, O-O and Re1 - a slow Spanish build-up.',
                                  'Bxc6 followed by Nbd2 and Nc4 is a common idea, hitting e5 once Black cannot recapture comfortably.',
                                  'The d3-d4 break comes later, once you are fully developed.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'd6',
                          label: 'Steinitz Defence',
                          idea: 'Black defends e5 with a pawn but gives up central space and blocks the f8-bishop.',
                          children: [
                            {
                              san: 'd4',
                              idea: 'The classical refutation of the passive set-up: open the centre immediately while Black is cramped.',
                              hint: "Black’s last move was solid but passive. Take the centre at once.",
                              end: {
                                name: 'Steinitz Defence',
                                plans: [
                                  'After ...Bd7 play Nc3 and O-O with a comfortable space advantage.',
                                  'The pressure on e5 combined with the pin on c6 is the main source of tactics.',
                                  'd4-d5 kicks the knight and gives you a long-term space edge.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'Bc5',
                          label: 'Classical Defence',
                          idea: 'Black develops actively and ignores the pressure on c6.',
                          children: [
                            {
                              san: 'c3',
                              idea: 'Prepare d4 with tempo against the bishop on c5.',
                              hint: 'Prepare the central break - it will come with tempo against the bishop.',
                              end: {
                                name: 'Ruy Lopez, Classical Defence',
                                plans: [
                                  'Play d2-d4 next, hitting the bishop and taking the centre.',
                                  'O-O and Re1 follow; the pin on c6 gives you extra tactical resources on e5.',
                                  'If Black plays ...f5, meet it with d4 and open the centre before the attack gets going.',
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
