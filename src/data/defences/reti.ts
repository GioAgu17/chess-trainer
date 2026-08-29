import type { Defence } from '../types'

export const vsReti: Defence = {
  kind: 'defence',
  id: 'vs-reti',
  name: 'Reti Opening',
  eco: 'A09',
  side: 'black',
  system: 'Reti',
  family: 'flank',
  recognisedBy: {
    moves: '1.Nf3 d5 2.c4',
    tell: 'The knight comes out first and then the c-pawn attacks your centre from the side. White will fianchetto on g2 and play against your d5 pawn from a distance.',
  },
  theirPlan:
    'The Reti is a waiting game. White develops flexibly, keeps every transposition available, and attacks your centre with pieces and flank pawns rather than occupying it. The bishop on g2, the pawn on c4 and a later b2-b3 and Bb2 all point at the same thing: your pawn on d5, and the long diagonal behind it. Reti players are happy to transpose into a Catalan, an English or a Queen\'s Gambit depending on what you do, so the practical problem is choosing a set-up that is good against all of them.',
  recipe: [
    'Support d5 with ...e6. It is not the most ambitious move, but it makes the centre permanent and keeps every structure sound.',
    'Do not grab the c4 pawn. Unlike the Catalan, White has no d-pawn committed, so ...dxc4 followed by ...b5 runs straight into a4 and b3 with a strong attack.',
    'Develop naturally: ...Nf6, ...Be7, castle. There is nothing to fear and no theory to memorise.',
    'Then take space with ...c5. Once you have pawns on c5, d5 and e6, White\'s pieces have nothing to attack and you have the more solid centre.',
    'Finish with ...Nc6 and ...b6, and the position is a comfortable Queen\'s Indian with an extra tempo\'s worth of solidity.',
    'If White plays the King\'s Indian Attack with 2.g3, hit the centre with ...c6 and ...Bg4 - once the light-squared bishop is outside the chain you have no problems at all.',
  ],
  summary:
    'Answer the Reti with ...d5 and ...e6, keeping the centre and refusing the gambit pawn. Then ...Nf6, ...Be7, castle and ...c5 gives a rock-solid structure that every Reti transposition runs into.',
  traps: [
    {
      id: 'reti-gambit-b5',
      /** Study-only: the pattern is the point, and the engine has an equally good alternative. */
      drillable: false,
      name: 'The Reti Gambit trap',
      owner: 'theirs',
      moves: ['Nf3', 'd5', 'c4', 'dxc4', 'e3', 'b5', 'a4', 'c6', 'axb5', 'cxb5', 'b3', 'cxb3', 'Bxb5+'],
      setup: 12,
      point:
        'Taking the c4 pawn and trying to hold it with ...b5 is the standard way to lose a game to the Reti. a4! hits the chain, and after axb5 cxb5 b3! the whole structure collapses: Bxb5+ picks up a piece, the a-file is open at your rook, and White is winning by move seven. This is exactly why the recipe says ...e6 and not ...dxc4.',
    },
    {
      id: 'reti-c5-break',
      drillable: false,
      name: 'The ...c5 space grab',
      owner: 'ours',
      moves: ['Nf3', 'd5', 'c4', 'e6', 'g3', 'Nf6', 'Bg2', 'Be7', 'O-O', 'O-O', 'b3', 'c5'],
      setup: 11,
      point:
        'Not a tactic - a habit worth building. Once you have castled, ...c5 is the move that turns a passive set-up into a good one. It takes d4 away from White\'s pieces, gives your queen the c7 and b6 squares, and means the bishop on g2 is staring at a wall of pawns for the rest of the game.',
    },
  ],
  tree: [
    {
      san: 'Nf3',
      label: 'Reti Opening',
      idea: 'A flexible first move. White keeps every transposition open and commits to nothing.',
      children: [
        {
          san: 'd5',
          idea: 'Take the centre. Against a flexible opening, the side that occupies the middle first has something concrete to defend.',
          hint: 'Answer a flexible knight move by putting a pawn in the centre.',
          mistakes: [
            { san: 'Nf6', deliberate: true, why: 'Completely sound and it transposes into all sorts of Indian defences, but it lets White choose the structure. Taking the centre is more direct.' },
            { san: 'c5', deliberate: true, why: 'Playable and it often becomes a Sicilian or a symmetrical English, but this defence answers the Reti on its own terms.' },
            { san: 'g6', why: 'Too slow against a flexible system: White gets d4, c4 and e4 in and you have not challenged anything.' },
          ],
          children: [
            {
              san: 'c4',
              label: 'Reti Gambit',
              idea: 'The Reti proper. The c-pawn attacks d5 from the side and is offered as a gambit.',
              children: [
                {
                  san: 'e6',
                  idea: 'Support the centre and keep it. The pawn on e6 makes d5 permanent and opens the f8-bishop.',
                  hint: 'Support the attacked centre pawn with a modest pawn move that also frees a bishop.',
                  mistakes: [
                    { san: 'dxc4', why: 'The Reti Gambit accepted. Unlike the Catalan, White has no committed d-pawn, so trying to hold it with ...b5 walks into a4 and b3 with a winning attack.' },
                    { san: 'd4', why: 'Pushing past leaves the pawn on d4 as a lone target: e3 or b4 comes and White undermines it while you have nothing developed.' },
                    { san: 'c6', why: 'Solid, but it takes the c6 square from your knight and blocks the ...c5 break, which is the move that gives you a good game.' },
                  ],
                  children: [
                    {
                      san: 'g3',
                      label: 'Main line',
                      idea: 'The Reti fianchetto: the bishop goes to g2 and presses on d5 and the long diagonal.',
                      children: [
                        {
                          san: 'Nf6',
                          idea: 'Develop and defend d5 a second time. Nothing clever is needed here.',
                          hint: 'Develop a knight to its natural square, adding another defender to your centre pawn.',
                          mistakes: [
                            { san: 'dxc4', why: 'Sound and playable - but Qa4+ or Na3 recovers the pawn and White gets a free tempo on top of the fianchetto. This repertoire keeps the centre instead.', deliberate: true },
                            { san: 'c5', why: 'The break is right but the order is wrong - develop and castle first, or cxd5 exd5 leaves your pawn on d5 loose.' },
                          ],
                          children: [
                            {
                              san: 'Bg2',
                              label: 'Main line',
                              idea: 'The bishop takes the long diagonal.',
                              children: [
                                {
                                  san: 'Be7',
                                  idea: 'Simple development. The bishop is safe on e7 and the king is one move from safety.',
                                  hint: 'Develop the bishop that lets you castle next move.',
                                  mistakes: [
                                    { san: 'dxc4', why: 'The gambit is still not worth taking - Qa4+ or Ne5 recovers it with a much better game for White.' },
                                    { san: 'Bb4+', why: 'The check achieves nothing: Bd2 or Nbd2 blocks and you have to move the bishop again.' },
                                    { san: 'c5', why: 'One move too early: cxd5 exd5 and your pawn on d5 is loose with your king still in the centre.' },
                                  ],
                                  children: [
                                    {
                                      san: 'O-O',
                                      label: 'Main line',
                                      idea: 'White castles and waits.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Castle in reply. Both sides are safe and the real game begins.',
                                          hint: 'The obvious move.',
                                          mistakes: [
                                            { san: 'c5', why: 'The break is coming but the king comes first - cxd5 exd5 with your king on e8 gives White ideas with Ne5 and Qa4.' },
                                            { san: 'Nbd7', why: 'Fine, but there is no reason to delay castling and every reason not to.' },
                                          ],
                                          children: [
                                            {
                                              san: 'b3',
                                              label: 'Main line',
                                              idea: 'The double fianchetto. White prepares Bb2 and a slow squeeze against d5.',
                                              children: [
                                                {
                                                  san: 'c5',
                                                  idea: 'The break. Now that everything is developed, ...c5 takes d4 away from White\'s pieces and turns your centre into a wall.',
                                                  hint: 'With your king safe and your pieces out, take space with the pawn move that guards d4.',
                                                  mistakes: [
                                                    { san: 'dxc4', why: 'bxc4 gives White a big centre and the open b-file straight at your queenside. The gambit pawn is never worth it here.' },
                                                    { san: 'b6', why: 'Reasonable, but the c5 break is the move that decides who owns the centre. Take space first.' },
                                                    { san: 'Nbd7', why: 'Fine but slow. ...c5 is the move that gives your position a point.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Bb2',
                                                      label: 'Main line',
                                                      idea: 'The second bishop joins the long diagonal.',
                                                      children: [
                                                        {
                                                          san: 'Nc6',
                                                          idea: 'Develop with a purpose: the knight supports the pawn on c5 and eyes d4 and b4.',
                                                          hint: 'Develop the knight that supports your new pawn on c5.',
                                                          mistakes: [
                                                            { san: 'Nbd7', why: 'Playable, but with a pawn already on c5 the knight belongs on c6 where it fights for d4.' },
                                                            { san: 'd4', why: 'Sound, but pushing past shuts the position and leaves the pawn on d4 as a target for e3 and a blockading piece. This repertoire pushes only once White cannot blockade.', deliberate: true },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'e3',
                                                              label: 'Main line',
                                                              idea: 'White supports a coming d4 and completes a very solid set-up.',
                                                              children: [
                                                                {
                                                                  san: 'b6',
                                                                  idea: 'The last piece gets a diagonal. With bishops facing each other on the long diagonal and a solid pawn wall, Black is completely equal.',
                                                                  hint: 'Open a diagonal for your last undeveloped piece.',
                                                                  mistakes: [
                                                                    { san: 'd4', why: 'Sound, but it releases the tension: after exd4 cxd4 the pawn on d4 needs constant defending. This repertoire keeps the tension one move longer.', deliberate: true },
                                                                    { san: 'dxc4', why: 'bxc4 and White has a strong centre with pawns on c4 and d4 to come, plus the open b-file.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Reti, main line with ...e6 and ...c5',
                                                                    plans: [
                                                                      'Play ...Bb7 next and the position is a comfortable, symmetrical middlegame with no weaknesses on either side.',
                                                                      'Keep the pawn on d5 while it is useful. It blocks the g2-bishop, and that bishop is White\'s best piece.',
                                                                      'The rook belongs on c8 or d8. If White plays cxd5 exd5, the half-open e-file becomes yours instead.',
                                                                      'A useful plan is ...Qc7 and ...Rfd8 followed by ...d4 at the right moment - once White has committed a knight to c3 or d2 it is much harder to blockade.',
                                                                      'Do not go looking for an attack. This is a structure where good moves accumulate and the side that drifts first is the one who loses.',
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
                    {
                      san: 'cxd5',
                      label: 'Trading in the centre',
                      idea: 'White resolves the tension and heads for a Queen\'s Gambit Exchange structure.',
                      children: [
                        {
                          san: 'exd5',
                          idea: 'Recapture towards the centre. Your bishop on c8 now has a diagonal and the structure is symmetrical.',
                          hint: 'Take back with the pawn that opens a diagonal for your worst piece.',
                          mistakes: [
                            { san: 'Qxd5', why: 'Nc3 comes with tempo and White develops while your queen retreats.' },
                            { san: 'c6', why: 'It ignores the pawn on d5 - just take it back.' },
                          ],
                          children: [
                            {
                              san: 'd4',
                              label: 'Main line',
                              idea: 'White takes the centre and heads for a normal queen\'s pawn game.',
                              children: [
                                {
                                  san: 'Nf6',
                                  idea: 'Develop and defend d5. This is now a completely standard, sound position.',
                                  hint: 'Develop the natural knight.',
                                  mistakes: [
                                    { san: 'c5', why: 'It challenges d4 but leaves your pawn on d5 hanging after dxc5 and Nc3. Develop first.' },
                                    { san: 'Bd6', why: 'Playable, but the knight develops and defends at the same time. Bishops after knights here.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Bf4',
                                      label: 'Main line',
                                      idea: 'The bishop takes an active square outside the pawn chain.',
                                      children: [
                                        {
                                          san: 'Bd6',
                                          idea: 'Offer the trade. Every piece that comes off makes the symmetrical structure easier to hold, and White\'s bishop is the more useful one.',
                                          hint: 'Challenge the bishop that has just taken the best diagonal.',
                                          mistakes: [
                                            { san: 'Be7', why: 'Passive. On d6 the bishop contests the diagonal and offers a trade you are happy to make.' },
                                            { san: 'c5', why: 'Now dxc5 and your pawn on d5 is isolated with White\'s bishop already on the good square.' },
                                          ],
                                          end: {
                                            name: 'Reti, 3.cxd5',
                                            plans: [
                                              'Castle and play ...c6 and ...Bg4 or ...Bf5 - the structure is symmetrical and completely comfortable.',
                                              'If White avoids the trade with Bg3, take on g3 anyway when it suits you: hxg3 gives White doubled pawns and fxg3 opens the file at their own king.',
                                              'The plan is ...Re8, ...Nbd7 and ...Ne4 with a well-placed knight in the middle.',
                                              'Symmetrical structures are drawish but not dead. The side with the better minor pieces wins them, so trade off your worst piece and keep your best.',
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
                      san: 'b3',
                      label: 'Double fianchetto',
                      idea: 'White develops both bishops on the long diagonals before committing any pawns.',
                      children: [
                        {
                          san: 'Nf6',
                          idea: 'Develop and hold d5. Against a slow set-up, simple developing moves are exactly right.',
                          hint: 'Develop the natural knight.',
                          mistakes: [
                            { san: 'dxc4', why: 'bxc4 gives White a strong pawn duo and the open b-file. Do not take.' },
                            { san: 'c5', why: 'Playable, but developing first is safer - the pawn on d5 needs a piece behind it before you commit.' },
                          ],
                          children: [
                            {
                              san: 'Bb2',
                              label: 'Main line',
                              idea: 'The bishop takes the long diagonal and eyes e5 and g7.',
                              children: [
                                {
                                  san: 'Be7',
                                  idea: 'Develop and prepare to castle. There is no rush and nothing to fear.',
                                  hint: 'Develop the last kingside minor piece.',
                                  mistakes: [
                                    { san: 'Bd6', why: 'Playable, but with a bishop already on b2 eyeing g7, the safer square is e7 where the bishop cannot be hit by a knight coming to e5 or c4.' },
                                    { san: 'dxc4', why: 'Still no - bxc4 gives White the centre and the file for nothing.' },
                                  ],
                                  children: [
                                    {
                                      san: 'e3',
                                      label: 'Main line',
                                      idea: 'White completes the set-up and waits.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Castle. Black is fully developed with a solid centre and no weaknesses.',
                                          hint: 'Finish development the obvious way.',
                                          mistakes: [
                                            { san: 'c5', why: 'The break is coming, but the king should leave the centre first - cxd5 exd5 with a king on e8 gives White ideas.' },
                                            { san: 'b6', why: 'Fine, but the king first. There is never a reason to delay castling in a quiet position.' },
                                          ],
                                          end: {
                                            name: 'Reti, 3.b3 double fianchetto',
                                            plans: [
                                              'Play ...c5 and ...Nc6 next, taking d4 away from White\'s pieces and turning your pawns into a wall.',
                                              'Follow with ...b6 and ...Bb7 - bishops facing bishops on both long diagonals, with a completely balanced game.',
                                              'The break ...d4 becomes strong once White has committed a knight to c3. Watch for the moment.',
                                              'If White plays Ne5, meet it with ...Nbd7 and trade it off; the recapture with the d-pawn would give White a strong centre.',
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
              san: 'g3',
              label: 'King\'s Indian Attack',
              idea: 'White fianchettoes without playing c4 and heads for a King\'s Indian set-up with colours reversed.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Develop and keep everything flexible.',
                  hint: 'Develop the natural knight.',
                  mistakes: [
                    { san: 'c5', why: 'Playable, but the knight comes out first - it is useful in every structure and commits to nothing.' },
                    { san: 'Bg4', why: 'A good square for this bishop, but the knight on f6 needs to come out first so the bishop is not simply hit by Ne5.' },
                  ],
                  children: [
                    {
                      san: 'Bg2',
                      label: 'Main line',
                      idea: 'The bishop takes the diagonal.',
                      children: [
                        {
                          san: 'c6',
                          idea: 'Support d5 and give the queen the b6 and c7 squares. This is the flexible, low-theory answer to the King\'s Indian Attack.',
                          hint: 'Support the centre pawn with the modest move that also gives your queen squares.',
                          mistakes: [
                            { san: 'e6', why: 'Playable, but it shuts in the c8-bishop, and against a King\'s Indian Attack you want that bishop outside the chain on g4 or f5.' },
                            { san: 'g6', why: 'Copying the fianchetto is passive here - White is a tempo up in the same structure.' },
                          ],
                          children: [
                            {
                              san: 'O-O',
                              label: 'Main line',
                              idea: 'White castles and prepares d3 and Nbd2 with a slow build-up.',
                              children: [
                                {
                                  san: 'Bg4',
                                  idea: 'The bishop gets out before ...e6 shuts it in. Pinning the knight also makes it harder for White to organise e2-e4.',
                                  hint: 'Get your problem bishop outside the pawn chain while there is still time.',
                                  mistakes: [
                                    { san: 'e6', why: 'It buries the bishop for the rest of the game, which is exactly what the King\'s Indian Attack is hoping for.' },
                                    { san: 'e5', why: 'Ambitious but loose: d4 or Nxe5 comes and your centre pawns become targets before you are developed.' },
                                  ],
                                  end: {
                                    name: 'King\'s Indian Attack, 2.g3',
                                    plans: [
                                      'Follow with ...e6, ...Be7 and castle - a rock-solid set-up where your bad bishop is already outside.',
                                      'Trade on f3 if White plays h3, and use the light squares White gives up in return.',
                                      'The plan is ...Nbd7, ...Bd6 and ...e5, taking the centre before White gets e2-e4 in.',
                                      'King\'s Indian Attack positions punish passivity. Grab the centre and play for ...e5 rather than waiting.',
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
              san: 'b3',
              label: 'Nimzo-Larsen Attack',
              idea: 'The bishop goes to b2 immediately, pointing at e5 and the kingside.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Develop naturally and keep the centre.',
                  hint: 'Develop the natural knight.',
                  mistakes: [
                    { san: 'e5', why: 'Tempting, but Bb2 is already pointing at the pawn and after Nxe5 or d4 you have overreached.' },
                    { san: 'c5', why: 'Playable, but developing first keeps every option and does not commit a pawn early.' },
                  ],
                  children: [
                    {
                      san: 'Bb2',
                      label: 'Main line',
                      idea: 'The bishop takes the diagonal and eyes e5 and g7.',
                      children: [
                        {
                          san: 'Bg4',
                          idea: 'Get the light-squared bishop out and pin the knight. Without the knight on f3, White\'s bishop on b2 has nothing to support it.',
                          hint: 'Develop the bishop that would otherwise be shut in, and pin something while you are at it.',
                          mistakes: [
                            { san: 'e6', why: 'It shuts in the bishop with no compensation. Against every fianchetto system, get that bishop out first.' },
                            { san: 'g6', why: 'Copying White is passive, and the bishop on b2 is already pointing at the square your bishop wants.' },
                          ],
                          children: [
                            {
                              san: 'e3',
                              label: 'Main line',
                              idea: 'White supports the centre and prepares Be2 and d4 or c4.',
                              children: [
                                {
                                  san: 'e6',
                                  idea: 'Now it is safe: with the bishop already outside, the pawn triangle makes your position rock solid.',
                                  hint: 'Complete the structure now that your bishop is safely outside it.',
                                  mistakes: [
                                    { san: 'Bxf3', why: 'Trading without being asked to helps White: Qxf3 or gxf3 both give useful development or an extra centre pawn.' },
                                    { san: 'e5', why: 'The bishop on b2 hits e5 and after Nxe5 or d4 you have handed over the centre.' },
                                  ],
                                  end: {
                                    name: 'Nimzo-Larsen Attack',
                                    plans: [
                                      'Play ...Nbd7, ...Bd6 and castle. The set-up is comfortable and White has no attack.',
                                      'Aim for ...e5. Once that pawn lands with support, the bishop on b2 is biting on granite.',
                                      'Keep the bishop on g4 unless a trade wins something - it is your good bishop and White\'s knight is holding the centre.',
                                      'If White plays h3, retreat to h5 rather than trading; g4 by White would badly weaken the kingside.',
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
}
