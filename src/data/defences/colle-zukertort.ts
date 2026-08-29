import type { Defence } from '../types'

export const vsColleZukertort: Defence = {
  kind: 'defence',
  id: 'vs-colle',
  name: 'Colle and Zukertort',
  eco: 'D05',
  side: 'black',
  system: 'Colle / Zukertort',
  family: 'd4',
  recognisedBy: {
    moves: '1.d4 d5 2.Nf3 Nf6 3.e3',
    tell: 'White plays e2-e3 before developing the dark-squared bishop. That bishop is now stuck behind its own pawns, and White has quietly announced a slow set-up rather than a fight for the centre.',
  },
  theirPlan:
    'Both systems build the same pyramid - pawns on d4 and e3, knights on f3 and d2, bishop on d3 - and then blow it up with e3-e4 at the moment you least want it. The Colle plays c2-c3 and saves the dark bishop for later; the Zukertort plays b2-b3 and Bb2, aiming the second bishop at e5 and your king. Either way the attack is real: the bishop on d3 plus a knight on e5 is the classic Greek gift set-up, and club players lose to it every day. What holds the whole thing together is that light-squared bishop.',
  recipe: [
    'Play ...Bf5 on move three, before ...e6. This is the single most important move in the line: White\'s bishop on d3 is the attacker, and your bishop on f5 is the only piece that can neutralise it.',
    'Be happy to trade on d3. Losing the bishop pair does not matter when the piece you remove is the one aiming at h7.',
    'Only after the bishop is out (or traded) should you play ...e6. Then ...Bd6, ...c6 and castle, and you have a perfectly sound position with no weaknesses.',
    'Fight for the e5 square. A white knight on e5 supported by pawns is the whole attack; a black bishop on d6 and a knight on d7 take it away.',
    'When White finally plays e3-e4, meet it with ...dxe4 and then hit the centre with ...c5. The pyramid comes down and your pieces are the better placed ones.',
  ],
  summary:
    'Both the Colle and the Zukertort depend on a bishop on d3 pointing at h7. Get your own bishop out to f5 on move three, trade it, and the attack never happens - then play ...e6, ...Bd6 and ...c5 with a comfortable game.',
  traps: [
    {
      id: 'colle-greek-gift',
      name: 'The Colle Greek gift',
      owner: 'theirs',
      moves: [
        'd4', 'd5', 'Nf3', 'Nf6', 'e3', 'e6', 'Bd3', 'Nbd7', 'Nbd2', 'Be7', 'O-O', 'O-O',
        'e4', 'dxe4', 'Nxe4', 'Nxe4', 'Bxe4', 'Nf6', 'Bxh7+',
      ],
      setup: 18,
      point:
        'This is the game the Colle is designed to produce, and it is why ...e6 before ...Bf5 is such a bad idea. Once a bishop lands on the b1-h7 diagonal with a knight ready for g5 and a queen for h5, the Greek gift is on the board: the bishop takes on h7, the king takes, and the knight arrives with check. Whether it wins in any particular position is a calculation - the point is that Black should never have to do that calculation. Getting the light-squared bishop out early takes the whole pattern off the table.',
    },
    {
      id: 'colle-trade-on-d3',
      drillable: false,
      name: 'Killing the attack on move four',
      owner: 'ours',
      moves: ['d4', 'd5', 'Nf3', 'Nf6', 'e3', 'Bf5', 'Bd3', 'Bxd3', 'Qxd3', 'e6'],
      setup: 7,
      point:
        'Not a tactic, but worth drilling until it is automatic. The moment White puts the bishop on d3 you take it. White recaptures with the queen, the whole kingside attacking scheme evaporates, and the resulting position is dead level with a comfortable game for Black.',
    },
  ],
  tree: [
    {
      san: 'd4',
      label: 'Queen\'s pawn',
      idea: 'The starting point of every Colle and Zukertort game.',
      children: [
        {
          san: 'd5',
          idea: 'Meet the centre pawn head-on. Against slow systems, taking your share of the centre immediately is always right.',
          hint: 'Answer the centre pawn with your own.',
          mistakes: [
            { san: 'Nf6', deliberate: true, why: 'Also fine and it usually transposes, but ...d5 first means White cannot switch to a King\'s Indian Attack set-up with a free tempo.' },
            { san: 'e6', why: 'It commits the e-pawn before you know anything, and against the Colle the e-pawn is exactly the one you want to keep flexible.' },
          ],
          children: [
            {
              san: 'Nf3',
              label: 'Main line',
              idea: 'White develops naturally. Nothing has been revealed yet.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Develop and cover e4 - the square White\'s entire plan is aimed at.',
                  hint: 'Develop the knight that stops White\'s central break before it starts.',
                  mistakes: [
                    { san: 'Bf5', why: 'The right square, but one move too soon: c2-c4 hits d5 while your bishop is off the queenside, and after Qb3 the pawn on b7 is loose.' },
                    { san: 'c5', why: 'Playable, but this repertoire keeps the pawn on c7 for a move so the bishop can come out first. Play ...c5 once the light-squared bishop is settled.' },
                  ],
                  children: [
                    {
                      san: 'e3',
                      label: 'Colle / Zukertort',
                      idea: 'The tell. White shuts in the dark-squared bishop and commits to a system: pawn to d4, knights to f3 and d2, bishop to d3, then e3-e4.',
                      children: [
                        {
                          san: 'Bf5',
                          idea: 'The key move of the whole defence. The bishop escapes before ...e6 shuts it in, and it takes aim at the d3 square White\'s attacking bishop wants.',
                          hint: 'White has just locked in a bishop. Make sure the same thing does not happen to yours.',
                          mistakes: [
                            { san: 'e6', why: 'Objectively fine, and the most common move played here - but it buries the c8-bishop and hands White the free Bd3, Nbd2, O-O and e4 attacking set-up. This repertoire gets that bishop out first.', deliberate: true },
                            { san: 'c5', why: 'Nothing wrong with the move itself, and the break keeps. But the light-squared bishop gets exactly one chance to leave the pawn chain, and this is it.', deliberate: true },
                            { san: 'Bg4', why: 'Playable, but h2-h3 asks the bishop an awkward question and White is happy to trade it on f3, which does not help you at all. f5 is the square that faces down the d3 bishop.' },
                          ],
                          children: [
                            {
                              san: 'Bd3',
                              label: 'Colle proper',
                              idea: 'White puts the bishop on the attacking diagonal anyway and offers the trade.',
                              children: [
                                {
                                  san: 'Bxd3',
                                  idea: 'Take it. That bishop is the whole attack; without it, White has a pleasant structure and nothing to do with it.',
                                  hint: 'The piece White has just offered is the one that was going to attack your king.',
                                  mistakes: [
                                    { san: 'Bg6', why: 'Retreating keeps the bishop, but it also keeps White\'s bishop, and White\'s is the more dangerous piece. Trade while you can.' },
                                    { san: 'e6', why: 'Now Bxf5 exf5 leaves you with a broken kingside and White with the better structure. Take on d3 first.' },
                                    { san: 'Bg4', why: 'It sidesteps the trade, but h2-h3 asks the bishop a question and after Bxf3 White recaptures with a useful piece rather than an awkward one.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Qxd3',
                                      label: 'Main line',
                                      idea: 'The queen recaptures. It looks active, but there is no attack left to support.',
                                      children: [
                                        {
                                          san: 'e6',
                                          idea: 'Now it is safe. The problem bishop is already off the board, so shutting the diagonal costs nothing.',
                                          hint: 'The piece this pawn move would have trapped is gone. Play it.',
                                          mistakes: [
                                            { san: 'Nc6', why: 'Sound, but the knight blocks the c-pawn and this repertoire wants ...c5 later. Complete the structure first.', deliberate: true },
                                            { san: 'c5', why: 'Slightly early - after dxc5 you have to spend a move recovering the pawn while your king is still in the centre.' },
                                          ],
                                          children: [
                                            {
                                              san: 'O-O',
                                              label: 'Main line',
                                              idea: 'White castles and plays for the e3-e4 break.',
                                              children: [
                                                {
                                                  san: 'Bd6',
                                                  idea: 'The bishop covers e5, which is the only square White\'s pieces could use, and eyes h2 in return.',
                                                  hint: 'Take the outpost square away from White\'s knight, and point a bishop at White\'s king while you are at it.',
                                                  mistakes: [
                                                    { san: 'Be7', why: 'Passive. On d6 the bishop stops Ne5 and does something in return; on e7 it does neither.' },
                                                    { san: 'c5', why: 'Right idea, and sound - but this repertoire castles first. With the king still in the centre, dxc5 Bxc5 lets White play e3-e4 with tempo.', deliberate: true },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'c4',
                                                      label: 'Main line',
                                                      idea: 'White switches to a Queen\'s Gambit set-up now that the quiet plan has been defused.',
                                                      children: [
                                                        {
                                                          san: 'c6',
                                                          idea: 'Solid and correct: the pawn on c6 makes d5 permanent and gives the queen the a5 and b6 squares.',
                                                          hint: 'Support the centre pawn with the modest move that also opens squares for the queen.',
                                                          mistakes: [
                                                            { san: 'dxc4', why: 'It gives up the centre for nothing - Qxc4 comes with tempo and White gets the free e3-e4 push you have spent the game preventing.' },
                                                            { san: 'c5', why: 'Sharp but loose: after cxd5 exd5 dxc5 you are left with a hanging pawn and White\'s queen already active on d3.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Nc3',
                                                              label: 'Main line',
                                                              idea: 'White develops and adds pressure to d5.',
                                                              children: [
                                                                {
                                                                  san: 'O-O',
                                                                  idea: 'King to safety with a completely sound structure and no bad pieces. This is exactly the position ...Bf5 was played for.',
                                                                  hint: 'Everything else is where it should be. Finish the job.',
                                                                  mistakes: [
                                                                    { san: 'Ne4', why: 'The knight looks active but it can be challenged with Nxe4 dxe4 and your centre pawn ends up on a dark square with no support.' },
                                                                    { san: 'dxc4', why: 'Still wrong for the same reason: it hands White the centre and a tempo, and this is the moment your king should be leaving the middle.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Anti-Colle, main line with 3...Bf5',
                                                                    plans: [
                                                                      'The next moves are ...Nbd7 and then ...Ne4 or ...Qe7 followed by the ...e5 break. Your structure supports both.',
                                                                      'Fight for e5. With the bishop on d6 and a knight coming to d7 or f6, White\'s pieces never get the outpost the system is built around.',
                                                                      'If White breaks with e3-e4, answer ...dxe4 and ...Nxe4 or ...c5 - with your bishop already traded there is nothing left to fear.',
                                                                      'The half-open e-file after a later ...exd5 or ...e5 is where your rook belongs.',
                                                                      'This is a completely healthy Queen\'s Gambit Declined structure where you have already solved the bad-bishop problem. Play simple, good moves.',
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
                                              san: 'Nbd2',
                                              label: 'Heading for e5',
                                              idea: 'White keeps the c-pawn at home and hurries the knight towards e5 and the kingside.',
                                              children: [
                                                {
                                                  san: 'Bd6',
                                                  idea: 'Cover e5 before the knight can get there. The bishop on d6 is the piece that makes White\'s whole scheme pointless.',
                                                  hint: 'A knight is heading for a strong central square. Take it away before it arrives.',
                                                  mistakes: [
                                                    { san: 'Be7', why: 'It develops, but it does nothing about Ne5, and a knight on e5 supported by pawns is the one thing that gives White a game here.' },
                                                    { san: 'c5', why: 'Right plan, and objectively fine - but this repertoire covers e5 first, because a white knight there is much harder to remove once it has landed.', deliberate: true },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'O-O',
                                                      label: 'Main line',
                                                      idea: 'White castles and hopes for e3-e4 or Ne5 later.',
                                                      children: [
                                                        {
                                                          san: 'Nbd7',
                                                          idea: 'The knight guards e5 a second time and supports the ...c5 and ...e5 breaks. White\'s central plan is now completely blunted.',
                                                          hint: 'Add another defender to the square White\'s knight wants.',
                                                          mistakes: [
                                                            { san: 'Nc6', why: 'It blocks the c-pawn, and here you want ...c5 as the freeing break. d7 is the square.' },
                                                            { san: 'O-O', why: 'Not wrong, but with White ready for Ne5 the useful move is the one that covers the square first - your king is in no danger yet.' },
                                                          ],
                                                          end: {
                                                            name: 'Anti-Colle, 5.Nbd2',
                                                            plans: [
                                                              'Castle, then play ...c5 or ...e5. Both breaks are available and White has no way to stop them both.',
                                                              'If White plays Ne5, take it: ...Nxe5 dxe5 Bc7 or ...Nd7 leaves the pawn on e5 weak and gives you the d5 outpost.',
                                                              'The e3-e4 break is White\'s only try. Meet it with ...dxe4 and ...Nxe4 - your pieces are better and there is no bishop on d3 any more.',
                                                              'With the light-squared bishops traded, the light squares around White\'s king (f3, h3, g4) are quietly yours in the long run.',
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
                              san: 'c4',
                              label: 'Switching to a Queen\'s Gambit',
                              idea: 'White abandons the system and plays for a real centre. It is the most testing move, but your bishop is already out.',
                              children: [
                                {
                                  san: 'c6',
                                  idea: 'Prop up d5. With the bishop already outside the chain, this is a Slav where you have solved your only problem for free.',
                                  hint: 'Support the attacked centre pawn with a pawn.',
                                  mistakes: [
                                    { san: 'dxc4', why: 'It gives up the centre and White gets e3-e4 with a free hand. In this structure you want to keep the wall on d5.' },
                                    { san: 'e6', why: 'Solid but it takes away the very square your bishop escaped from - and it leaves d5 defended only by a piece.' },
                                    { san: 'Bxb1', why: 'Giving up your good bishop for an undeveloped knight loses time and the bishop pair for no reason at all.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nc3',
                                      label: 'Main line',
                                      idea: 'White develops and piles up on d5.',
                                      children: [
                                        {
                                          san: 'e6',
                                          idea: 'Now it is safe: the bishop is already out, so this simply completes a rock-solid Slav structure.',
                                          hint: 'Finish the pawn triangle now that your bishop is safely outside it.',
                                          mistakes: [
                                            { san: 'dxc4', why: 'The pawn cannot be held here - a2-a4 or e3-e4 comes and White dominates the centre.' },
                                            { san: 'Nbd7', why: 'Fine, but the pawn move is the one that makes the structure permanent and gives the f8-bishop a route out.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Bd3',
                                              label: 'Main line',
                                              idea: 'White offers the bishop trade after all.',
                                              children: [
                                                {
                                                  san: 'Bxd3',
                                                  idea: 'Take it. Every version of this position is comfortable once the d3-bishop is gone.',
                                                  hint: 'You know what to do with a bishop on d3 by now.',
                                                  mistakes: [
                                                    { san: 'Bg6', why: 'Keeping the bishop invites Bxg6 hxg6 or a later Nh4 hitting it. Trade on your own terms.' },
                                                    { san: 'Bg4', why: 'It walks into h2-h3 and either a trade on f3 that helps White or an awkward retreat.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Qxd3',
                                                      label: 'Main line',
                                                      idea: 'The queen takes the diagonal, but there is no attack to be had.',
                                                      children: [
                                                        {
                                                          san: 'Be7',
                                                          idea: 'Simple development. The position is a comfortable Semi-Slav where Black\'s worst piece has already been traded off.',
                                                          hint: 'Develop the last minor piece and prepare to castle.',
                                                          mistakes: [
                                                            { san: 'Bd6', why: 'Playable, but with the queen on d3 the bishop on d6 can be hit by e3-e4-e5. e7 is the safe square in this structure.' },
                                                            { san: 'Nbd7', why: 'Fine but the bishop should come out first, otherwise the knight and the bishop get in each other\'s way.' },
                                                          ],
                                                          end: {
                                                            name: 'Anti-Colle, 4.c4',
                                                            plans: [
                                                              'Castle, then ...Nbd7 and either ...dxc4 followed by ...b5, or ...Ne4 and ...f5 in a Stonewall-like set-up.',
                                                              'The c6/d5/e6 triangle is one of the soundest structures in chess. You have it without a bad bishop, which is a genuine achievement.',
                                                              'Watch for e3-e4. Answer it with ...dxe4 and ...Nxe4 and the position simplifies towards equality.',
                                                              'If White plays cxd5, recapture with the e-pawn to open the e-file and free the position.',
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
                              san: 'b3',
                              label: 'Zukertort set-up',
                              idea: 'The Zukertort: the second bishop goes to b2, pointing at e5 and, in the long run, at your king.',
                              children: [
                                {
                                  san: 'e6',
                                  idea: 'Safe now that the bishop is on f5. The pawn triangle is solid and White\'s bishop on b2 is biting on the d4 pawn from behind.',
                                  hint: 'Your problem piece is already outside. Complete the structure.',
                                  mistakes: [
                                    { san: 'c5', why: 'Reasonable, but the Zukertort thrives on open lines for the bishop that is heading to b2. Build the pawn triangle before you open anything.' },
                                    { san: 'e5', why: 'Too ambitious with the bishop on b2 about to hit the square: Nxe5 or dxe5 and your centre falls apart before you are developed.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Bb2',
                                      label: 'Main line',
                                      idea: 'The long diagonal is White\'s: the bishop supports d4 and eyes the e5 square and beyond.',
                                      children: [
                                        {
                                          san: 'Bd6',
                                          idea: 'The right answer to a bishop on b2: take e5 away and point your own bishop at h2.',
                                          hint: 'The bishop on b2 wants a knight to land on e5. Cover the square.',
                                          mistakes: [
                                            { san: 'Be7', why: 'Passive. Against the Zukertort, control of e5 is the whole game, and the bishop on e7 does not contest it.' },
                                            { san: 'c5', why: 'It opens the long diagonal for White\'s bishop, which is exactly the piece you should be shutting out.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Be2',
                                              label: 'Main line',
                                              idea: 'With the light-squared bishop unable to reach d3 profitably, White settles for a modest square.',
                                              children: [
                                                {
                                                  san: 'Nbd7',
                                                  idea: 'A second defender for e5 and support for the coming ...c5 or ...e5 break. White has no active plan left.',
                                                  hint: 'Add one more piece to the fight for the central outpost.',
                                                  mistakes: [
                                                    { san: 'Nc6', why: 'It blocks the c-pawn and gets hit by Nb5 or a2-a3 and c2-c4. d7 keeps everything flexible.' },
                                                    { san: 'Ne4', why: 'Too early - c2-c4 and Nbd2 chase the knight away and you have lost time.' },
                                                  ],
                                                  end: {
                                                    name: 'Zukertort, 4.b3',
                                                    plans: [
                                                      'Castle and then play ...Qe7 followed by ...e5. That break turns your position from solid to actively better.',
                                                      'Never allow Ne5 for free. If it comes, trade it off - the recapture with the d-pawn hands you the d5 outpost, and with the b2-bishop shut out White has nothing.',
                                                      'The bishop on b2 is only good if the long diagonal opens. Keep a pawn on d5 and it stays a spectator.',
                                                      'A rook on e8 supports ...e5 and covers the file the break will open.',
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
