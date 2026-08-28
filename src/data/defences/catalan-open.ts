import type { Defence } from '../types'

export const catalanOpen: Defence = {
  kind: 'defence',
  id: 'vs-catalan-open',
  name: 'Catalan: take the pawn (Open)',
  eco: 'E04',
  side: 'black',
  system: 'Catalan',
  family: 'd4',
  recognisedBy: {
    moves: '1.d4 Nf6 2.c4 e6 3.g3',
    tell: 'White plays g2-g3 before developing the knight to f3. The bishop is going to g2 and it is going to stare down the long diagonal at your queenside for the rest of the game.',
  },
  theirPlan:
    'The Catalan is a queen\'s pawn opening with a fianchetto instead of a fight. White puts a bishop on g2, castles, and then simply squeezes: the bishop hits d5, c6, b7 and a8 all game, the c-pawn and d-pawn cramp you, and White has no weaknesses to attack in return. Most Catalan players never sacrifice anything - they just wait for you to run out of useful moves and then break with e2-e4 or open the c-file. The pain is slow, which is exactly why it is hard to meet by feel.',
  recipe: [
    'Take the c4 pawn with 4...dxc4 and hold it for a few moves. It is not greed: it costs White time to win it back, and every tempo spent on the c-pawn is a tempo not spent squeezing you.',
    'Follow with ...Be7 and castle. Do not rush to defend the pawn with ...b5 before your king is safe - the a4 and Ne5 tricks all need an uncastled king to work.',
    'Once White regains the pawn with Qxc4, play ...b5 and ...Bb7. Your bishop now looks straight back down the diagonal at White\'s and the position is balanced.',
    'The ...a6 and ...b5 pawns are not weaknesses here - they gain queenside space and take c4 and b5 away from White\'s pieces.',
    'Aim for the freeing break ...c5. Once that lands, the Catalan bishop is biting on granite and you are simply equal.',
  ],
  temperament: {
    key: 'open',
    name: 'Open',
    blurb: 'Grab the pawn and give it back on your terms. Concrete, a little sharp, and it stops White from getting the free squeeze.',
  },
  summary:
    'The Open Catalan: Black takes on c4 and makes White spend time recovering the pawn, then uses those tempi to play ...a6, ...b5 and ...Bb7. The bishop on b7 finally answers the one on g2, and the ...c5 break follows.',
  traps: [
    {
      id: 'catalan-hold-b5',
      name: 'Holding the pawn one move too long',
      owner: 'theirs',
      moves: ['d4', 'Nf6', 'c4', 'e6', 'g3', 'd5', 'Bg2', 'dxc4', 'Nf3', 'b5', 'a4'],
      setup: 10,
      point:
        'After 5...b5 the pawn chain looks solid, but a2-a4 hits it before Black has a single piece out. Black must answer ...c6, and after axb5 cxb5 the a-file is open, the a8-rook is staring at White\'s rook, and Ne5 lands on a hole. Take the pawn, but give it back once White has paid for it.',
    },
  ],
  tree: [
    {
      san: 'd4',
      label: 'Queen\'s pawn',
      idea: 'White opens with the queen\'s pawn. Nothing is committed yet.',
      children: [
        {
          san: 'Nf6',
          idea: 'The most flexible reply: it stops e2-e4 and keeps every black set-up open.',
          hint: 'Develop a knight to the square that takes e4 away from White.',
          mistakes: [
            { san: 'd5', deliberate: true, why: 'A perfectly good move, but it invites the Queen\'s Gambit instead. This repertoire meets 1.d4 with the knight so you can choose your structure a move later.' },
            { san: 'f5', deliberate: true, why: 'The Dutch is playable but it is a whole separate body of theory, and it does nothing to answer the question this defence is about.' },
          ],
          children: [
            {
              san: 'c4',
              label: 'Main line',
              idea: 'White claims the centre with the c-pawn and keeps the Catalan and Queen\'s Gambit both on the table.',
              children: [
                {
                  san: 'e6',
                  idea: 'Support a coming ...d5 and open the f8-bishop. This is the move that invites the Catalan, and meeting it head-on is the point of this defence.',
                  hint: 'Prepare ...d5 with a modest pawn move that also frees your dark-squared bishop.',
                  mistakes: [
                    { san: 'g6', deliberate: true, why: 'The King\'s Indian is a fine opening, but it sidesteps the Catalan rather than answering it. If you want to know what to do against g3 systems, you have to allow them.' },
                    { san: 'e5', why: 'The Budapest Gambit. It is a real opening, but you are giving up a pawn on move two for activity, and the Catalan player has no interest in it - they will simply take and develop.' },
                  ],
                  children: [
                    {
                      san: 'g3',
                      label: 'Catalan',
                      idea: 'There it is. The bishop is heading to g2 and White intends a long, quiet squeeze on the light squares.',
                      children: [
                        {
                          san: 'd5',
                          idea: 'Stake your claim in the centre before the bishop arrives on g2. A pawn on d5 is the one thing that blocks the long diagonal.',
                          hint: 'Put a pawn on the square the g2-bishop most wants to see empty.',
                          mistakes: [
                            { san: 'Bb4+', deliberate: true, why: 'The Bogo-Indian check is sound, but White answers Bd2 and you have committed a piece before you know where the centre is going. Deal with the diagonal first.' },
                            { san: 'c5', why: 'Too early. After d4-d5 the centre closes on White\'s terms, the g2-bishop gets a free open diagonal, and you have solved none of your problems.' },
                            { san: 'b6', why: 'Natural-looking, but the bishop on b7 will be staring at White\'s bishop on g2 with nothing in between. Block the diagonal with a pawn first.' },
                          ],
                          children: [
                            {
                              san: 'Bg2',
                              label: 'Main line',
                              idea: 'The Catalan bishop takes its post. Every light square from d5 to a8 is now under fire.',
                              children: [
                                {
                                  san: 'dxc4',
                                  idea: 'The Open Catalan. Taking the pawn removes the c4/d4 duo and, more importantly, forces White to spend moves getting the pawn back instead of building up.',
                                  hint: 'White has left a pawn hanging on the queenside. Taking it is not greed here - it costs White time.',
                                  mistakes: [
                                    { san: 'Be7', deliberate: true, why: 'This is the Closed Catalan, which is a sound choice and available as the other half of this defence. It leads to a much slower game where you sit and wait.' },
                                    { san: 'c6', deliberate: true, why: 'Another solid move that heads for the Closed Catalan structure. This half of the repertoire is the one that takes the pawn.' },
                                    { san: 'c5', why: 'Releasing the centre while White is a move from castling. After cxd5 exd5 dxc5 you are left with an isolated pawn and White\'s bishop pointed straight at it.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nf3',
                                      label: 'Main line',
                                      idea: 'White develops and ignores the pawn for now, trusting that it cannot be held forever.',
                                      children: [
                                        {
                                          san: 'Be7',
                                          idea: 'Develop and prepare to castle. The pawn on c4 is not running away, and a safe king is what makes holding it possible.',
                                          hint: 'Do not try to defend the extra pawn yet. Develop the piece that lets you castle next move.',
                                          mistakes: [
                                            { san: 'b5', why: 'Far too early. With your king in the centre, a2-a4 hits the chain immediately and after axb5 the open a-file is worth more than the pawn.' },
                                            { san: 'c5', why: 'Opening the centre with your king still on e8 and White fully developed on the kingside is exactly what the Catalan player wants.' },
                                            { san: 'a6', why: 'The right idea one move too soon. Castle first: every trick White has against ...b5 depends on your king sitting in the middle.' },
                                          ],
                                          children: [
                                            {
                                              san: 'O-O',
                                              label: 'Main line',
                                              idea: 'White castles and prepares to round up the c4 pawn with Qc2 or Qa4.',
                                              children: [
                                                {
                                                  san: 'O-O',
                                                  idea: 'King to safety. Now every ...a6 and ...b5 idea actually works, because there is no check on the a4-e8 diagonal to worry about.',
                                                  hint: 'The safest move on the board, and the one that makes your queenside plan legal.',
                                                  mistakes: [
                                                    { san: 'b5', why: 'Still premature. a2-a4 c6, axb5 cxb5 and with your king on e8 the pressure down the a-file and the Ne5 jump come with tempo.' },
                                                    { san: 'Nc6', why: 'The knight has no future on c6 here - the d4 pawn is solidly defended and the knight blocks your own ...c5 break.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Qc2',
                                                      label: 'Main line',
                                                      idea: 'The most common recovery: the queen steps to c2, eyeing the c4 pawn and the long diagonal behind it.',
                                                      children: [
                                                        {
                                                          san: 'a6',
                                                          idea: 'Prepare ...b5. If White ever takes on c4 you answer ...b5 with tempo, and if White does not take, you simply hold the pawn.',
                                                          hint: 'Support the pawn advance that will defend c4 from the side.',
                                                          mistakes: [
                                                            { san: 'b5', why: 'One move too soon: a2-a4 comes with the queen already on c2, and after axb5 axb5 Rxa8 the exchange on a8 costs you the pawn anyway.' },
                                                            { san: 'c5', why: 'Playable but early. Right now the extra pawn on c4 is worth more than the break; play ...c5 once your queenside is set up.' },
                                                            { san: 'Nc6', why: 'Blocks the very pawn break you are aiming for and leaves the knight hitting a well-defended d4.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Qxc4',
                                                              label: 'Main line',
                                                              idea: 'White finally recovers the pawn - four moves after it was taken, which is exactly the point.',
                                                              children: [
                                                                {
                                                                  san: 'b5',
                                                                  idea: 'With tempo on the queen. The queenside pawns take c4 and b5 away from White\'s pieces and the bishop is coming to b7.',
                                                                  hint: 'Hit the queen and gain space at the same time.',
                                                                  mistakes: [
                                                                    { san: 'Bd7', why: 'Passive. The bishop belongs on b7 answering White\'s bishop on g2, and the move that gets it there also kicks the queen.' },
                                                                    { san: 'c5', why: 'Reasonable but it lets White keep the queen on c4 where it is well placed. Kick it first and take the queenside space for free.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Open Catalan, main line with 7...a6',
                                                                    plans: [
                                                                      'Play ...Bb7 next. That bishop is the whole point of the line: it finally answers White\'s bishop on g2 and defends the long diagonal you spent the opening worrying about.',
                                                                      'Follow with ...Nbd7 and then ...c5. Once ...c5 lands the centre opens on your terms and the Catalan bishop has nothing to bite on.',
                                                                      'The pawns on a6 and b5 are space, not weakness. They deny c4 and b5 to White\'s knights and give your own pieces the c4 square later.',
                                                                      'If White plays a2-a4, answer ...b4 rather than ...bxa4. Keeping the pawns connected keeps the queenside closed, which suits you.',
                                                                      'Watch for Ne5 or Ng5 hitting f7 once your queen leaves d8. Keeping a rook on f8 and the knight on f6 is usually enough.',
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
                                                      san: 'Ne5',
                                                      label: 'The immediate raid on c4',
                                                      idea: 'The sharpest try: the knight jumps to e5 to take on c4 next move and cramp you at the same time.',
                                                      children: [
                                                        {
                                                          san: 'Nc6',
                                                          idea: 'Challenge the knight at once. If White takes on c6 the b-pawn recaptures and your bishop on b7 gets a monster diagonal; if White does not, the knight has to move again.',
                                                          hint: 'The intruder on e5 is defended by nothing. Attack it with a developing move.',
                                                          mistakes: [
                                                            { san: 'c5', why: 'Opening lines while a knight sits on e5 and both white bishops are aimed at your king is asking for trouble.' },
                                                            { san: 'Nfd7', why: 'Passive and it undevelops. Challenging the knight head-on gains time; retreating hands White the initiative for free.' },
                                                            { san: 'b5', why: 'The pawn on c4 is not what matters here. A knight on e5 supported by the g2-bishop is a real piece, and it has to be answered first.' },
                                                          ],
                                                          end: {
                                                            name: 'Open Catalan, 7.Ne5',
                                                            plans: [
                                                              'After Bxc6 bxc6 your pawn structure looks broken, but the bishop pair and the half-open b-file are worth more than the doubled pawns.',
                                                              'If White wins the pawn back on c6, meet it with ...Qe8 or ...Qd6 to hit the knight and untangle.',
                                                              'The dark squares are yours here: aim the bishop at d4 with ...Bf6 or ...Bd6 and think about ...Rb8 down the open file.',
                                                              'Do not panic about the pawn count. In this line material is level and the bishop pair is the long-term asset.',
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
                                              san: 'Qa4+',
                                              label: 'The check before castling',
                                              idea: 'White grabs the pawn back straight away, at the cost of the queen coming out early.',
                                              children: [
                                                {
                                                  san: 'Nbd7',
                                                  idea: 'Block the check with the knight that was heading for d7 anyway. Nothing is lost.',
                                                  hint: 'Block the check with a piece that was going to that square in any case.',
                                                  mistakes: [
                                                    { san: 'Bd7', why: 'It blocks the check, but the bishop on d7 stands badly and gets in the way of the knight. Use the piece that wanted the square.' },
                                                    { san: 'c6', why: 'It blocks, but it takes c6 away from your own knight and leaves a permanent hole on d6 for White\'s pieces.' },
                                                    { san: 'Qd7', why: 'Trading queens into a slightly worse endgame is exactly what the Catalan player is happy with, and the queen belongs on d8 for now.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Qxc4',
                                                      label: 'Main line',
                                                      idea: 'The pawn comes back, but White has spent two queen moves to get it.',
                                                      children: [
                                                        {
                                                          san: 'a6',
                                                          idea: 'The same plan as the main line: prepare ...b5, take queenside space, and get the bishop to b7.',
                                                          hint: 'Prepare the pawn advance that gains time on the queen and space on the wing.',
                                                          mistakes: [
                                                            { san: 'b5', why: 'The queen on c4 is attacked, but after Qb3 or Qc2 you have left a hole on c6 and White\'s bishop is already pointing at it.' },
                                                            { san: 'c5', why: 'Reasonable but rushed - with your king still on e8 in this move order, opening the centre favours the better developed side.' },
                                                          ],
                                                          end: {
                                                            name: 'Open Catalan, 6.Qa4+ with ...Be7',
                                                            plans: [
                                                              'Castle next, then follow the usual recipe: ...b5, ...Bb7 and ...c5.',
                                                              'White\'s queen has moved three times to win one pawn. Use that time to complete development before opening anything.',
                                                              'The knight on d7 is well placed here - it supports ...c5 and covers e5 so White has no outpost.',
                                                              'If White plays Qc2 and e2-e4, meet it with ...c5 straight away rather than sitting still.',
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
                                      san: 'Qa4+',
                                      label: 'Recovering the pawn at once',
                                      idea: 'The straightforward club approach: check, take the pawn back and get on with it.',
                                      children: [
                                        {
                                          san: 'Nbd7',
                                          idea: 'Block with the knight. It is going to d7 anyway, so the check has cost White a tempo and gained nothing.',
                                          hint: 'Block the check with the piece that already wanted that square.',
                                          mistakes: [
                                            { san: 'Bd7', why: 'The bishop blocks the check but stands in the way of the knight and does nothing on d7. Keep it for b7.' },
                                            { san: 'c6', why: 'Solid but it takes the natural square from your knight and gives White a free hand on the dark squares.' },
                                            { san: 'Qd7', why: 'Offering the queen trade suits White, who would love a quiet endgame with the better bishop.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Qxc4',
                                              label: 'Main line',
                                              idea: 'The pawn is back, but White\'s queen has made three moves and the kingside is undeveloped.',
                                              children: [
                                                {
                                                  san: 'a6',
                                                  idea: 'Prepare ...b5 with tempo on the queen, then ...Bb7 and ...c5. The plan never changes.',
                                                  hint: 'Set up the queenside advance that gains time on White\'s queen.',
                                                  mistakes: [
                                                    { san: 'b5', why: 'Immediate, but after the queen steps away you have a permanent hole on c6 with a white bishop looking at it. Prepare it properly.' },
                                                    { san: 'e5', why: 'Tempting, but dxe5 Nxe5 walks into Qb3 or Qc2 with tempo and your knight has nowhere good to go.' },
                                                  ],
                                                  end: {
                                                    name: 'Open Catalan, 5.Qa4+',
                                                    plans: [
                                                      'Continue ...b5, ...Bb7, ...Be7 and castle. The extra tempo White spent on the queen is exactly the tempo you use to finish development.',
                                                      'The break ...c5 is the target. Once it lands, the light-squared bishops trade or neutralise each other and the position is level.',
                                                      'Do not let the queen settle on c4 or c2 undisturbed - ...b5 and later ...Nb6 or ...Rc8 keep hitting it.',
                                                      'With White\'s knight still on b1 you are ahead in kingside development. Castle and think about ...e5 as a second break.',
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
