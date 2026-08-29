import type { Defence } from '../types'

export const vsDanishGoring: Defence = {
  kind: 'defence',
  id: 'vs-danish-goring',
  name: 'Danish and Goring Gambits',
  eco: 'C21',
  side: 'black',
  system: 'Danish / Goring Gambit',
  family: 'e4',
  recognisedBy: {
    moves: '1.e4 e5 2.d4 exd4 3.c3 (or 1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.c3)',
    tell: 'White offers the c-pawn to recapture on d4 with a pawn rather than a piece. If you take twice, White ends up with two raking bishops on c4 and b2 and no pawns in the centre at all.',
  },
  theirPlan:
    'The Danish is one of the oldest attacking gambits there is. White gives up one pawn and often two to get bishops on c4 and b2 firing at f7 and g7 with your king still on e8. Every Danish player knows the resulting attacking patterns; almost no one who faces it does. What White does not have is a centre - after two captures on c3 and b2 White has no pawns anywhere near the middle, which is the key to the whole thing.',
  recipe: [
    'Decline. Meet 3.c3 with ...d5!, giving the pawn straight back to open the position while White is not ready.',
    'After exd5 Qxd5 the queen is centralised and safe: there is no Nc3 available to hit it because the c-pawn has gone to c3.',
    'Recapture on d4 lets White have the centre pawn back - that is fine. You have development and no weaknesses, and White has no gambit.',
    'Develop with ...Nc6 and ...Bg4, pinning the knight that holds d4 together.',
    'The check on b4 is the point of the whole line: it forces Nc3 and then ...Bxc3+ leaves White with doubled c-pawns and a weak d4.',
    'If you ever do accept the gambit, remember the Schlechter Defence: give the material back with ...d5 the moment White develops a bishop.',
  ],
  summary:
    'Do not take the second pawn. Answer 3.c3 with ...d5, hand the pawn back at once, and develop with ...Nc6, ...Bg4 and ...Bb4+. White gets a symmetrical position with a weak d-pawn instead of the attack the gambit was paid for.',
  traps: [
    {
      id: 'danish-schlechter',
      name: 'The Schlechter Defence',
      owner: 'ours',
      moves: ['e4', 'e5', 'd4', 'exd4', 'c3', 'dxc3', 'Bc4', 'cxb2', 'Bxb2', 'd5'],
      setup: 9,
      point:
        'If you do take both pawns, this is the way out. ...d5! gives one pawn back to block the c4-bishop and open your own position. After Bxd5 Nf6 you develop with tempo, castle, and White is left with two bishops and nothing to attack. Grabbing material against a gambit is fine as long as you know the move that gives it back.',
    },
    {
      id: 'danish-greedy',
      name: 'One pawn too many',
      owner: 'theirs',
      moves: ['e4', 'e5', 'd4', 'exd4', 'c3', 'dxc3', 'Bc4', 'cxb2', 'Bxb2', 'Nf6', 'e5'],
      setup: 10,
      point:
        'Two pawns up and a natural developing move looks like a fine result. It is not: e4-e5 hits the knight, and after ...Nd5 or ...Qe7 White plays O-O and Re1 with every piece pointing at the black king. The problem is not the material - it is developing towards White\'s attack instead of away from it.',
    },
  ],
  tree: [
    {
      san: 'e4',
      label: 'King\'s pawn',
      idea: 'The normal start.',
      children: [
        {
          san: 'e5',
          idea: 'The classical answer, which is also the move that allows the Danish.',
          hint: 'Answer the king\'s pawn with your own.',
          mistakes: [
            { san: 'c5', deliberate: true, why: 'The Sicilian avoids all of this, which is a reasonable practical decision - but then the gambit is still a mystery when it turns up.' },
            { san: 'd5', why: 'The Scandinavian is playable but after exd5 Qxd5 Nc3 White gains a tempo, and this defence is about the 1...e5 games.' },
          ],
          children: [
            {
              san: 'd4',
              label: 'Danish Gambit',
              idea: 'The immediate centre break. White will follow with c3 to open lines rather than recapture with a piece.',
              children: [
                {
                  san: 'exd4',
                  idea: 'Take. There is no reason to decline a centre pawn, and holding the tension only helps White.',
                  hint: 'Take the pawn that has just been offered in the centre.',
                  mistakes: [
                    { san: 'd6', why: 'Declining gives White the perfect centre with pawns on d4 and e4 and nothing to show for it.' },
                    { san: 'Nc6', why: 'Playable but d5 comes with tempo, and now the knight is kicked while White keeps a big centre.' },
                  ],
                  children: [
                    {
                      san: 'c3',
                      label: 'Main line',
                      idea: 'The gambit. White offers a second pawn to recapture on d4 with a pawn and open both bishop diagonals.',
                      children: [
                        {
                          san: 'd5',
                          idea: 'Decline by counter-attacking. Giving the pawn back immediately opens the position while White\'s pieces are still at home, which is the exact opposite of what a gambit wants.',
                          hint: 'Do not take the second pawn. Strike back in the centre with your own pawn instead.',
                          mistakes: [
                            { san: 'dxc3', why: 'Accepting is sound, and the engine is content with it - but it is exactly the game White has prepared, two bishops raking your kingside while your king is still in the centre. This repertoire refuses.', deliberate: true },
                            { san: 'Nc6', why: 'Solid, but cxd4 gives White the centre and a comfortable game with no gambit left to refute. The counter-strike is much stronger.' },
                            { san: 'd3', why: 'It blocks the position but hands the pawn back for nothing, and after Bxd3 White is developed with an extra tempo and a big lead.' },
                          ],
                          children: [
                            {
                              san: 'exd5',
                              label: 'Main line',
                              idea: 'Forced in practice: anything else leaves White a pawn down with no compensation at all.',
                              children: [
                                {
                                  san: 'Qxd5',
                                  idea: 'The queen is completely safe in the middle here: White\'s c-pawn is on c3, so there is no Nc3 to gain a tempo with.',
                                  hint: 'Recapture with the queen - and notice that the square White would normally use to chase it is occupied by a pawn.',
                                  mistakes: [
                                    { san: 'Nf6', why: 'It develops but leaves White a pawn up with cxd4 and a strong centre. Take the pawn back while the queen cannot be harassed.' },
                                    { san: 'dxc3', why: 'Now you are back in the gambit White wanted, with an extra tempo for White because your d-pawn has already been traded.' },
                                  ],
                                  children: [
                                    {
                                      san: 'cxd4',
                                      label: 'Main line',
                                      idea: 'White recovers the pawn. The material is level and there is no attack.',
                                      children: [
                                        {
                                          san: 'Nc6',
                                          idea: 'Develop and hit d4. The pawn is White\'s only central asset and it is now a target rather than a spearhead.',
                                          hint: 'Develop a knight and attack the pawn White just recaptured with.',
                                          mistakes: [
                                            { san: 'Qxd4', why: 'Qxd4 loses the queen after Nf3 or - worse - it simply trades queens into a position where White has developed with tempo. The d4 pawn is defended.' },
                                            { san: 'Nf6', why: 'Fine, but the queen\'s knight hits d4 immediately and that is the pawn the whole position revolves around.' },
                                            { san: 'Bb4+', why: 'The check is coming, but it is much stronger once you have developed - right now Nc3 or Bd2 just gains a tempo on you.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Nf3',
                                              label: 'Main line',
                                              idea: 'White develops and defends the d4 pawn.',
                                              children: [
                                                {
                                                  san: 'Bg4',
                                                  idea: 'Pin the defender. The knight on f3 is holding d4 together and pinning it makes the pawn genuinely weak.',
                                                  hint: 'Pin the piece that is holding White\'s only centre pawn in place.',
                                                  mistakes: [
                                                    { san: 'Nf6', why: 'Fine but slower - the pin is what stops White from castling comfortably and keeps d4 under pressure.' },
                                                    { san: 'Qxd4', why: 'Nxd4 wins the queen. The knight on f3 defends the pawn.' },
                                                    { san: 'Bb4+', why: 'The check works better once the pin is in. Right now Nc3 blocks and White is fine.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Be2',
                                                      label: 'Main line',
                                                      idea: 'White develops and breaks the pin, but the bishop is passive on e2.',
                                                      children: [
                                                        {
                                                          san: 'Bb4+',
                                                          idea: 'Now the check bites. White has to block with Nc3, and then trading on c3 leaves a permanently damaged queenside.',
                                                          hint: 'Give the check that forces White to block with the knight.',
                                                          mistakes: [
                                                            { san: 'Bxf3', why: 'Trading now lets Bxf3 come with tempo on your queen and White gets comfortable development. Insert the check first.' },
                                                            { san: 'O-O-O', why: 'Castling long walks into c-file pressure with White\'s queen and rook aimed at your king, and the d4 pawn is not going anywhere.' },
                                                            { san: 'Nf6', why: 'Reasonable, but the check is forcing and it wins the concession you want before White can consolidate.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Nc3',
                                                              label: 'Main line',
                                                              idea: 'The only block that develops a piece - and it also attacks your queen on d5.',
                                                              children: [
                                                                {
                                                                  san: 'Bxc3+',
                                                                  idea: 'Take it. It answers the attack on your queen and leaves White with doubled c-pawns and a permanently weak d4.',
                                                                  hint: 'Your queen is attacked and so is the knight blocking the check. Solve both problems with one capture.',
                                                                  mistakes: [
                                                                    { san: 'Qa5', why: 'Sound, but passive by comparison: O-O and Bd2 leave White comfortably developed while your bishop on b4 becomes a target. Taking on c3 is the move that wins the concession.', deliberate: true },
                                                                    { san: 'Qd6', why: 'Retreating loses the initiative: White castles and the pawn on d4 is suddenly a strength rather than a weakness.' },
                                                                    { san: 'Bxf3', why: 'Perfectly sound - the engine even prefers it - but this repertoire takes the knight on c3 instead. Doubling White\'s pawns and fixing d4 as a target is the concrete gain the whole line was played for, and ...Bxf3 lets White recapture with tempo on your queen.', deliberate: true },
                                                                  ],
                                                                  end: {
                                                                    name: 'Danish Gambit declined, 3...d5',
                                                                    plans: [
                                                                      'After bxc3 play ...Qc4! immediately - it hits the bishop on e2 and the pawn on c3 at the same time and White has no comfortable answer.',
                                                                      'White\'s pawns on c3 and d4 are hanging targets on an open board. Pile up on them with ...Nge7-f5 and a rook on d8.',
                                                                      'Trade the light-squared bishop on f3 when it suits you - it removes the defender of d4 and leaves White with weak light squares.',
                                                                      'Castle short and bring the rooks to the c- and d-files. There is no attack to fear.',
                                                                      'This is what a refuted gambit looks like: material is level, White\'s structure is worse, and there is nothing to show for it.',
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
                      san: 'Qxd4',
                      label: 'Centre Game',
                      idea: 'White recaptures with the queen instead of gambiting. It is not a gambit any more, but the queen comes out early.',
                      children: [
                        {
                          san: 'Nc6',
                          idea: 'Develop with tempo. The queen has to move again, and every time it does you gain time.',
                          hint: 'Develop a piece that attacks the queen in the centre.',
                          mistakes: [
                            { san: 'Nf6', why: 'It develops but it does not hit the queen, and after Nc3 and Bg5 White gets a comfortable game.' },
                            { san: 'd6', why: 'Slow and passive: it lets White develop with Nc3, Be3 and O-O-O with a free hand.' },
                          ],
                          children: [
                            {
                              san: 'Qe3',
                              label: 'Main line',
                              idea: 'The standard square: the queen steps out of the way and supports a coming Nc3, Bd2 and O-O-O.',
                              children: [
                                {
                                  san: 'Nf6',
                                  idea: 'Develop and hit e4. With the queen on e3 the e-file is congested and White\'s development is awkward.',
                                  hint: 'Develop the other knight and attack the pawn White is now short of defenders for.',
                                  mistakes: [
                                    { san: 'Bb4', why: 'Playable, but the knight first is more accurate: it attacks e4 and forces White to spend a move on it.' },
                                    { san: 'd5', why: 'Too early - exd5 Qxe3+ or Nb5 gives White real activity with your king still in the middle.' },
                                    { san: 'Nd4', why: 'The knight is chased away by c3 or Bd3 and you have lost time and the good square on c6.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nc3',
                                      label: 'Main line',
                                      idea: 'White defends e4 and develops, heading for Bd2 and O-O-O.',
                                      children: [
                                        {
                                          san: 'Bb4',
                                          idea: 'Pin the knight and prepare to castle. The bishop also eyes the trade on c3, which would leave White\'s queenside structure damaged.',
                                          hint: 'Pin the knight that is defending the centre pawn.',
                                          mistakes: [
                                            { san: 'Nxe4', why: 'Loses a piece: Nxe4 and the knight is simply taken, because the queen on e3 covers the square.' },
                                            { san: 'd5', why: 'Now exd5 Nb5 comes with tempo on c7, and your king is still on e8.' },
                                            { san: 'Be7', why: 'Passive. The pin on c3 is what makes Black comfortable here - without it White castles long and attacks.' },
                                          ],
                                          end: {
                                            name: 'Centre Game',
                                            plans: [
                                              'Castle short quickly. White is going long, so the two kings will be on opposite wings and speed is everything.',
                                              'The plan is ...Re8, ...d6 and ...Ne5 or ...Na5, hitting the queen and the c4 square.',
                                              'Trading on c3 is usually good: it wrecks White\'s pawn cover on the side the king is heading for.',
                                              'Get the queenside pawns moving with ...a6 and ...b5 once White commits the king to c1.',
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
              san: 'Nf3',
              label: 'Goring Gambit move order',
              idea: 'White develops first and gambits a move later. It is the same idea reached through a normal-looking Italian or Scotch move order.',
              children: [
                {
                  san: 'Nc6',
                  idea: 'Develop and defend e5, exactly as you would against anything else.',
                  hint: 'Defend the attacked pawn by developing a piece.',
                  mistakes: [
                    { san: 'd6', why: 'Philidor\'s Defence is playable but passive, and it takes you out of this defence entirely.' },
                    { san: 'Nf6', deliberate: true, why: 'The Petroff is sound but it sidesteps the whole gambit question rather than answering it.' },
                  ],
                  children: [
                    {
                      san: 'd4',
                      label: 'Main line',
                      idea: 'The centre break, one move later than the Danish.',
                      children: [
                        {
                          san: 'exd4',
                          idea: 'Take. Declining hands White the perfect centre.',
                          hint: 'Take the centre pawn.',
                          mistakes: [
                            { san: 'd6', why: 'Declining gives White a big centre with dxe5 or d5 coming, and no compensation for you.' },
                            { san: 'Nxd4', why: 'Nxd4 exd4 Qxd4 leaves White\'s queen beautifully centralised and you a tempo behind.' },
                          ],
                          children: [
                            {
                              san: 'c3',
                              label: 'Goring Gambit',
                              idea: 'The gambit arrives. Same idea as the Danish: open lines for the bishops.',
                              children: [
                                {
                                  san: 'd5',
                                  idea: 'The same answer as always. Give the pawn back at once and open the position before White is developed.',
                                  hint: 'The same recipe as the Danish - strike in the centre rather than taking a second pawn.',
                                  mistakes: [
                                    { san: 'dxc3', why: 'Accepting leads to sharp attacking positions that White has prepared and you have not. The counter-strike is far more reliable.' },
                                    { san: 'Nf6', why: 'Playable, but cxd4 gives White the centre and easy development while you have not challenged anything.' },
                                    { san: 'd3', why: 'It gives the pawn back for nothing and Bxd3 leaves White a full tempo ahead with a lead in development.' },
                                  ],
                                  children: [
                                    {
                                      san: 'exd5',
                                      label: 'Main line',
                                      idea: 'Forced - anything else leaves White simply worse.',
                                      children: [
                                        {
                                          san: 'Qxd5',
                                          idea: 'The queen is safe on d5 because the c-pawn is on c3 and cannot be replaced by a knight.',
                                          hint: 'Recapture with the queen - the usual Nc3 tempo move is unavailable.',
                                          mistakes: [
                                            { san: 'Nf6', why: 'It leaves White a pawn up after cxd4 with a strong centre. Take the pawn back while the queen is safe.' },
                                            { san: 'dxc3', why: 'Back into the gambit, and now with a tempo lost. The whole point was to decline.' },
                                          ],
                                          children: [
                                            {
                                              san: 'cxd4',
                                              label: 'Main line',
                                              idea: 'White regains the pawn with a symmetrical position and a slightly loose d-pawn.',
                                              children: [
                                                {
                                                  san: 'Bg4',
                                                  idea: 'Pin the knight that holds d4. With the queen already developed and the knight already on c6, this is the natural next step.',
                                                  hint: 'Pin the defender of White\'s only centre pawn.',
                                                  mistakes: [
                                                    { san: 'Qxd4', why: 'Nxd4 or Qxd4 wins material - the pawn is defended by the knight on f3.' },
                                                    { san: 'Nf6', why: 'Fine, but the pin is more testing and it stops White from castling comfortably.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Be2',
                                                      label: 'Main line',
                                                      idea: 'White develops and prepares to break the pin.',
                                                      children: [
                                                        {
                                                          san: 'Bb4+',
                                                          idea: 'The same idea as the Danish: the check forces Nc3 and then ...Bxc3+ wrecks White\'s queenside.',
                                                          hint: 'Give the check that forces the knight to block.',
                                                          mistakes: [
                                                            { san: 'Bxf3', why: 'Trading first lets Bxf3 come with tempo on your queen. Insert the check.' },
                                                            { san: 'O-O-O', why: 'Castling into the open c-file with White\'s queen and rook aimed that way is asking for trouble.' },
                                                          ],
                                                          end: {
                                                            name: 'Goring Gambit declined',
                                                            plans: [
                                                              'After Nc3, take on c3 and follow with ...Qc4 hitting the bishop on e2 and the pawn on c3 - exactly the same recipe as the Danish.',
                                                              'This is a straight transposition into the Danish lines. If you know one, you know the other.',
                                                              'The isolated d4 pawn is the target. Rooks on d8 and c8, knights to f5 or b6, and simply pile up.',
                                                              'Castle short, keep the position simple, and let White explain what the gambit bought.',
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
        },
      ],
    },
  ],
}
