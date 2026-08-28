import type { Defence } from '../types'

export const vsScotch: Defence = {
  kind: 'defence',
  id: 'vs-scotch',
  name: 'Scotch Game',
  eco: 'C45',
  side: 'black',
  system: 'Scotch',
  family: 'e4',
  recognisedBy: {
    moves: '1.e4 e5 2.Nf3 Nc6 3.d4',
    tell: 'White breaks in the centre on move three instead of playing Bb5 or Bc4. The tension is released immediately and the game opens up straight away.',
  },
  theirPlan:
    'White trades the d-pawn for your e-pawn to open the centre before you have developed a single minor piece besides the knight. The knight on d4 sits in the middle of the board, the e-file may open, and White wants Nxc6 followed by e4-e5, gaining space and driving your knight backwards. It is a perfectly respectable opening with real bite - the point is that it is also completely equal if you know where your pieces belong.',
  recipe: [
    'Answer 4.Nxd4 with ...Bc5, hitting the knight and taking the a7-g1 diagonal before White can play Be3 comfortably.',
    'Follow with ...Qf6. It is unusual to bring the queen out this early, but here it hits d4 a second time and pressures f2, and it is the main line for a reason.',
    'Develop the king\'s knight to e7, not f6. From e7 it supports the queen, does not block anything, and heads for g6 or c6.',
    'The knight manoeuvre ...Nc6-e5 hits c4 and White\'s bishop. It is the move that makes the whole set-up work.',
    'Finish with ...Qg6, hitting e4 and g2 at once. White has to make a concession and the position is level.',
    'Against the Scotch Gambit (4.Bc4), answer ...Bc5 and ...Nf6, and when White pushes e4-e5, hit back with ...d5 immediately.',
  ],
  summary:
    'Meet the Scotch with 4...Bc5 and the classical ...Qf6, ...Nge7, ...Ne5 and ...Qg6 set-up. Black keeps the extra centre pawn under control, develops with tempo throughout, and reaches a completely balanced middlegame.',
  traps: [
    {
      id: 'scotch-gambit-d5',
      name: 'Punishing the Scotch Gambit push',
      owner: 'ours',
      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Bc4', 'Nf6', 'e5', 'd5'],
      setup: 9,
      point:
        'In the Scotch Gambit, White\'s natural-looking 5.e5 attacking the knight runs into ...d5!. The pawn forks nothing but it hits the bishop on c4 and blocks the attack at the same time; after exf6 dxc4 Black comes out a pawn up with a healthy position. Remember it as the standard answer to any e4-e5 push that attacks a knight on f6 while a bishop sits on c4.',
    },
    {
      id: 'scotch-qh4',
      name: 'The premature queen sortie',
      owner: 'theirs',
      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4', 'Qh4', 'Nb5'],
      setup: 8,
      point:
        'Attacking e4 with the queen looks tempting because White\'s knight has left the queenside. But Nb5! defends nothing and threatens everything: Nxc7+ is coming, and after ...Qxe4+ Be3 the black king is stuck on d8 with White developing every piece with tempo. The queen is a poor attacker on move four.',
    },
  ],
  tree: [
    {
      san: 'e4',
      label: 'King\'s pawn',
      idea: 'The standard opening move.',
      children: [
        {
          san: 'e5',
          idea: 'The classical answer, and the one that allows the Scotch.',
          hint: 'Answer the king\'s pawn with your own.',
          mistakes: [
            { san: 'c5', deliberate: true, why: 'The Sicilian avoids the Scotch entirely, which is a fine choice - but this defence is about knowing what to do when the Scotch appears.' },
            { san: 'e6', deliberate: true, why: 'The French is sound and it dodges 3.d4 Scotch lines, but you cannot learn to answer an opening you never allow.' },
          ],
          children: [
            {
              san: 'Nf3',
              label: 'Main line',
              idea: 'White develops and attacks e5.',
              children: [
                {
                  san: 'Nc6',
                  idea: 'Defend the pawn with the natural developing move.',
                  hint: 'Defend the attacked pawn by developing a piece.',
                  mistakes: [
                    { san: 'Nf6', deliberate: true, why: 'The Petroff is a completely sound defence, but it takes the game somewhere else entirely rather than answering the Scotch.' },
                    { san: 'd6', why: 'Philidor\'s Defence is playable but passive: it shuts in the f8-bishop and gives White a free hand in the centre with d4.' },
                  ],
                  children: [
                    {
                      san: 'd4',
                      label: 'Scotch Game',
                      idea: 'The Scotch. White opens the centre immediately rather than building up behind it.',
                      children: [
                        {
                          san: 'exd4',
                          idea: 'Take. Declining leaves White with an ideal centre and you with nothing to show for it.',
                          hint: 'The centre pawn is attacked and defended once. Take it.',
                          mistakes: [
                            { san: 'd6', why: 'Declining hands White the perfect centre - dxe5 and everything falls apart, or d4-d5 and your knight is kicked with tempo.' },
                            { san: 'Nxd4', why: 'It trades a developed knight for a pawn but after Nxd4 exd4 Qxd4 White\'s queen is beautifully centralised and you have wasted moves.' },
                          ],
                          children: [
                            {
                              san: 'Nxd4',
                              label: 'Main line',
                              idea: 'The Scotch proper. The knight takes the centre and White wants Nxc6 followed by e4-e5.',
                              children: [
                                {
                                  san: 'Bc5',
                                  idea: 'The Classical Scotch. The bishop hits the knight on d4 and takes the diagonal towards f2 before White can play Be3 in comfort.',
                                  hint: 'Develop a bishop onto the diagonal that attacks the knight in the centre.',
                                  mistakes: [
                                    { san: 'Nf6', deliberate: true, why: 'The Schmidt Variation is fully sound and a main line, but it walks into the enormously theoretical Mieses lines after Nxc6 bxc6 e5. This repertoire chooses the quieter classical set-up.' },
                                    { san: 'Qh4', why: 'Nb5 comes with the threat of Nxc7+ and the queen sortie backfires badly - the queen becomes a target and your king is stuck in the centre.' },
                                    { san: 'Nxd4', why: 'Trading straight away gives White the centralised queen after Qxd4 and hands over the initiative for nothing.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Be3',
                                      label: 'Main line',
                                      idea: 'White defends the knight with a developing move and offers the trade on d4.',
                                      children: [
                                        {
                                          san: 'Qf6',
                                          idea: 'The main line, and it looks stranger than it is: the queen adds a second attacker to d4 and eyes f2, so White cannot simply develop.',
                                          hint: 'Attack the knight in the centre a second time with the piece that also looks at f2.',
                                          mistakes: [
                                            { san: 'Bxd4', why: 'Trading on d4 gives White the bishop pair and a free tempo after Bxd4, with an easy game and a strong centre.' },
                                            { san: 'Nf6', why: 'Natural, but after Nxc6 bxc6 and e4-e5 the knight is kicked and your structure is damaged. The queen move stops all of that.' },
                                            { san: 'd6', why: 'Solid, but slow: it lets White play Nc3, Qd2 and O-O-O with a comfortable attacking game while you have made no threats.' },
                                          ],
                                          children: [
                                            {
                                              san: 'c3',
                                              label: 'Main line',
                                              idea: 'White props up the knight and prepares to develop the queenside.',
                                              children: [
                                                {
                                                  san: 'Nge7',
                                                  idea: 'The right square. From e7 the knight supports the queen, keeps the f6 square free, and heads for g6 or back to c6.',
                                                  hint: 'Develop the last knight to the square that supports your queen rather than blocking it.',
                                                  mistakes: [
                                                    { san: 'Nh6', why: 'The knight is badly placed on the rim and Bxh6 wrecks your kingside structure for nothing.' },
                                                    { san: 'Bxd4', why: 'Still the wrong trade: cxd4 gives White a broad pawn centre and the bishop pair for nothing.' },
                                                    { san: 'd6', why: 'Playable, but the knight has one good square and it is worth taking it before White gets Bc4 and Qd2 in.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Bc4',
                                                      label: 'Main line',
                                                      idea: 'The bishop takes aim at f7 and adds a defender to the centre.',
                                                      children: [
                                                        {
                                                          san: 'Ne5',
                                                          idea: 'The key manoeuvre. The knight attacks the bishop on c4, clears c6 for the c-pawn and heads for g6 or c4 itself.',
                                                          hint: 'One of your knights can jump to a central square where it attacks the bishop that just moved.',
                                                          mistakes: [
                                                            { san: 'O-O', why: 'Safe but slow. The knight jump gains a tempo on the bishop and is the move that gives the whole set-up its point.' },
                                                            { san: 'Nxd4', why: 'It trades but after cxd4 White has a big centre and the bishop pair, which is exactly what you have been avoiding.' },
                                                            { san: 'd6', why: 'Reasonable, but it lets White castle and consolidate. Play the move that forces White to react.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Be2',
                                                              label: 'Main line',
                                                              idea: 'The bishop steps back. White has been pushed around and Black is fully equal.',
                                                              children: [
                                                                {
                                                                  san: 'Qg6',
                                                                  idea: 'The queen swings across to hit e4 and g2 at once. White has to spend another move on defence and Black finishes development in comfort.',
                                                                  hint: 'Move the queen along the sixth rank to attack two things at once.',
                                                                  mistakes: [
                                                                    { san: 'd6', why: 'Solid, but the queen swing is the move that keeps the initiative and stops White from castling comfortably.' },
                                                                    { san: 'Bxd4', why: 'The same wrong trade, and now with the queen on f6 it also loses the pressure that has taken five moves to build.' },
                                                                    { san: 'O-O', why: 'Safe, but the queen swing is what keeps White busy. Castling quietly lets White consolidate with O-O and f2-f4 hitting your knight.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Scotch, Classical main line',
                                                                    plans: [
                                                                      'Follow with ...d6 and ...O-O, or castle long with ...d5 first if White commits the king to the kingside.',
                                                                      'The knight on e5 is your best piece. It eyes c4, d3 and g4, and White has no pawn that can chase it away.',
                                                                      'Play ...d6 rather than ...d5 in most lines - it supports the knight and keeps the position solid.',
                                                                      'If White plays O-O, the plan ...h5-h4 with the queen on g6 is a genuine attacking try.',
                                                                      'Everything is equal here, but the position is far easier to play with Black: every white piece is defending and every black piece has a job.',
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
                                      san: 'Nxc6',
                                      label: 'Trading at once',
                                      idea: 'White resolves the tension immediately and plays for e4-e5 with a space advantage.',
                                      children: [
                                        {
                                          san: 'Qf6',
                                          idea: 'Before recapturing, hit f2 and the knight. This little move order trick is what stops White from getting e4-e5 in for free.',
                                          hint: 'Do not recapture yet. There is a move that attacks two things and forces White to deal with it first.',
                                          mistakes: [
                                            { san: 'bxc6', why: 'Recapturing straight away allows e4-e5 with tempo and leaves you with a damaged queenside for nothing.' },
                                            { san: 'dxc6', why: 'Playable but it hands White the free Qxd8+ trade and a slightly better endgame. The queen move first is much stronger.' },
                                            { san: 'Bxf2+', why: 'It wins a pawn but after Kxf2 the knight on c6 is still hanging and White comes out clearly ahead.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Qd2',
                                              label: 'Main line',
                                              idea: 'White defends f2 indirectly and prepares to develop the queenside.',
                                              children: [
                                                {
                                                  san: 'dxc6',
                                                  idea: 'Now recapture, and with the d-pawn: it opens the c8-bishop and keeps the pawn structure healthy.',
                                                  hint: 'Take back with the pawn that opens a diagonal for your undeveloped bishop.',
                                                  mistakes: [
                                                    { san: 'bxc6', why: 'It keeps a pawn majority in the centre but leaves the c8-bishop shut in and the queenside pawns doubled.' },
                                                    { san: 'Qxf2+', why: 'Loses the queen after Qxf2 Bxf2+ Kxf2 - you have given a queen and a bishop for a queen and a pawn.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Nc3',
                                                      label: 'Main line',
                                                      idea: 'White develops and prepares to castle long.',
                                                      children: [
                                                        {
                                                          san: 'Be6',
                                                          idea: 'Develop the bishop to a good square and prepare ...O-O-O with a completely sound position.',
                                                          hint: 'Develop the bishop that the recapture just freed.',
                                                          mistakes: [
                                                            { san: 'Qxf2+', why: 'Still loses the queen to Qxf2 Bxf2+ Kxf2 - the f2 pawn has been defended since White\'s queen went to d2.' },
                                                            { san: 'Bd4', why: 'The bishop is a target on d4 and after Na4 or Bd3 you have to move it again having achieved nothing.' },
                                                          ],
                                                          end: {
                                                            name: 'Scotch, 5.Nxc6',
                                                            plans: [
                                                              'Castle long and play against the e4 pawn with ...Rhe8 and ...Qg6 or ...Bd5.',
                                                              'The bishop pair is yours and the position is symmetrical enough that it is a long-term asset with nothing to fear.',
                                                              'The doubled c-pawns control d5 and b5 - useful squares, not weaknesses, as long as you do not open the c-file for White.',
                                                              'If White castles long too, the position is balanced and the plan is simply to improve pieces; if White castles short, get the queenside pawns moving.',
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
                                      san: 'Nb3',
                                      label: 'Kicking the bishop',
                                      idea: 'White steps away from the pin and asks the bishop where it wants to live.',
                                      children: [
                                        {
                                          san: 'Bb6',
                                          idea: 'The natural retreat. The bishop keeps the diagonal, cannot be hit again, and supports a later ...d6 and ...Nf6.',
                                          hint: 'Move the attacked bishop to a square where no pawn can ever chase it.',
                                          mistakes: [
                                            { san: 'Be7', why: 'Passive - the whole point of putting the bishop on c5 was the a7-g1 diagonal, and this move gives it up.' },
                                            { san: 'Bd6', why: 'It blocks your own d-pawn, which you need for ...d6 and ...d5. The bishop belongs on b6.' },
                                            { san: 'Bxf2+', why: 'It wins a pawn but Kxf2 leaves White with the bishop pair, an extra piece in the attack, and your king still on e8.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Nc3',
                                              label: 'Main line',
                                              idea: 'White develops and prepares Be3 or Bg5.',
                                              children: [
                                                {
                                                  san: 'Nf6',
                                                  idea: 'With the knight off d4 there is no Nxc6 trick, so the natural square is fine and it hits e4.',
                                                  hint: 'Develop the last knight - with White\'s knight on b3 the usual objection no longer applies.',
                                                  mistakes: [
                                                    { san: 'Qf6', why: 'The queen sortie is only strong when it hits a knight on d4. Here it just blocks the natural square for your knight.' },
                                                    { san: 'd6', why: 'Fine but slow. Develop the knight while it is hitting e4 and White has to react.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Qe2',
                                                      label: 'Main line',
                                                      idea: 'White defends e4 and prepares to castle long.',
                                                      children: [
                                                        {
                                                          san: 'd6',
                                                          idea: 'Solidify and open the light-squared bishop. Black has a comfortable Scotch position with no weaknesses.',
                                                          hint: 'Open the diagonal for your last minor piece and take the e5 square under control.',
                                                          mistakes: [
                                                            { san: 'Nxe4', why: 'Loses a piece: after Nxe4 the knight is simply taken and there is no follow-up.' },
                                                            { san: 'O-O', why: 'Playable, but with White eyeing O-O-O and a kingside pawn storm, it is worth keeping the king flexible for one more move.' },
                                                          ],
                                                          end: {
                                                            name: 'Scotch, 5.Nb3',
                                                            plans: [
                                                              'Castle short or long depending on where White\'s king goes; with the bishop on b6 and a pawn on d6 you are ready for either.',
                                                              'The a7-g1 diagonal is your long-term asset. Keep the bishop on b6 and add ...Be6 and ...Qd7.',
                                                              'The knight on b3 is offside. Play ...a5-a4 to gain time on it and grab queenside space.',
                                                              'If White plays Bg5, meet it with ...h6 and ...Be6 - there is no pin worth worrying about once your queen has a flight square.',
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
                              san: 'Bc4',
                              label: 'Scotch Gambit',
                              idea: 'White ignores the pawn on d4 and develops with tempo, aiming at f7.',
                              children: [
                                {
                                  san: 'Bc5',
                                  idea: 'Develop with a threat of your own: the bishop hits f2 and holds the extra pawn for now.',
                                  hint: 'Answer the bishop on c4 with your own bishop on the mirror square.',
                                  mistakes: [
                                    { san: 'Nf6', deliberate: true, why: 'The Two Knights approach is sound but it invites the sharp e4-e5 lines. The bishop move keeps things simpler.' },
                                    { san: 'd6', why: 'Passive: it gives back the initiative and White gets O-O and Nxd4 with a comfortable game and an extra tempo.' },
                                    { san: 'Bb4+', why: 'The check achieves nothing: c2-c3 blocks with tempo and White builds the centre while your bishop retreats.' },
                                  ],
                                  children: [
                                    {
                                      san: 'c3',
                                      label: 'Main line',
                                      idea: 'White offers a second pawn to open lines - this is the Göring Gambit within the Scotch.',
                                      children: [
                                        {
                                          san: 'Nf6',
                                          idea: 'Develop and hit e4 rather than grabbing more material. Development beats greed against a gambit.',
                                          hint: 'Develop the knight and attack the pawn in the centre instead of taking a second pawn.',
                                          mistakes: [
                                            { san: 'dxc3', why: 'Taking the second pawn is playable but it opens exactly the lines White is paying for, with your king still in the centre.' },
                                            { san: 'd6', why: 'Too slow. cxd4 comes with a big centre and you have made no threats at all.' },
                                            { san: 'd3', why: 'It blocks the position but hands the pawn straight back while White develops with Bxd3 and a big lead.' },
                                          ],
                                          children: [
                                            {
                                              san: 'e5',
                                              label: 'Main line',
                                              idea: 'The natural-looking push, hitting the knight - and the move that walks into the standard refutation.',
                                              children: [
                                                {
                                                  san: 'd5',
                                                  idea: 'The counter-punch. The pawn hits the bishop on c4 and blocks the attack on the knight at the same time.',
                                                  hint: 'A pawn move that hits the bishop and shuts the file at once - not the knight retreat.',
                                                  mistakes: [
                                                    { san: 'Ng8', why: 'Retreating undoes your development and hands White a free centre and a huge lead in development.' },
                                                    { san: 'Ne4', why: 'The knight has no support on e4 and after Qe2 or Bd5 it is simply lost.' },
                                                    { san: 'Ng4', why: 'The knight is offside and after Bxf7+ or h3 it has to run again while White consolidates the centre.' },
                                                  ],
                                                  end: {
                                                    name: 'Scotch Gambit, 5.e5 d5',
                                                    plans: [
                                                      'After exf6 dxc4 you are a clean pawn up with the bishop pair and no weaknesses. Take the f6 pawn back with the queen or the g-pawn as suits you.',
                                                      'If White plays Bb5 instead of taking, answer ...Ne4 and follow with ...Bd7 - the knight on e4 is now supported.',
                                                      'Castle as soon as you can. Gambit positions punish kings in the centre and reward kings that have already left it.',
                                                      'Once the dust settles you are a pawn up in an open position. Trade pieces, not pawns.',
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
