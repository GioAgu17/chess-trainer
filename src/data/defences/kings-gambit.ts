import type { Defence } from '../types'

export const vsKingsGambit: Defence = {
  kind: 'defence',
  id: 'vs-kings-gambit',
  name: 'King\'s Gambit',
  eco: 'C30',
  side: 'black',
  system: 'King\'s Gambit',
  family: 'e4',
  recognisedBy: {
    moves: '1.e4 e5 2.f4',
    tell: 'The f-pawn steps out on move two. White is offering a pawn to open the f-file and build a big centre with d4.',
  },
  theirPlan:
    'White gives up the f-pawn for the centre and the f-file. If you take, White plays Nf3 to stop the check on h4, then d4, Bc4 and O-O, and suddenly there is a rook on f1 pointing at f7 with your king still on e8. The gambit has a fearsome reputation and it deserves some of it - but only when Black accepts and then defends badly. The hidden cost of 2.f4 is that the diagonal from a7 to g1 is now wide open, and the king is sitting at the end of it.',
  recipe: [
    'Decline with 2...Bc5. The bishop takes the newly opened diagonal and, crucially, White can no longer castle kingside comfortably or grab on e5.',
    'Remember why 3.fxe5 is impossible: ...Qh4+ wins on the spot. That single tactic is what makes the whole line work.',
    'Follow with ...d6, ...Nf6, ...Nc6 and ...Bg4. Simple development, no theory, and White has to solve the problems.',
    'Trade on f3 when White plays h3. Removing the knight leaves the d4 square permanently soft and White with a slightly loose kingside.',
    'The knight belongs on d4. From there it hits c2 and f3 and cannot be chased away by a pawn.',
    'Do not open the centre while White\'s pieces are more active. Keep the pawn on e5, keep the tension, and let the weakened f4 pawn become a long-term problem.',
  ],
  summary:
    'Decline the King\'s Gambit with 2...Bc5. The bishop takes the diagonal that 2.f4 opened, White can never take on e5 because of ...Qh4+, and simple development with ...d6, ...Nf6 and ...Bg4 leaves you with the better structure.',
  traps: [
    {
      id: 'kg-qh4',
      name: 'Why fxe5 loses',
      owner: 'ours',
      moves: ['e4', 'e5', 'f4', 'Bc5', 'fxe5', 'Qh4+', 'g3', 'Qxe4+'],
      setup: 5,
      point:
        'After 2...Bc5 the e5 pawn is untouchable. 3.fxe5?? Qh4+ and White must block with g3, when ...Qxe4+ picks up the e-pawn and then the rook on h1. This is the whole reason the bishop goes to c5 rather than anywhere else, and it is worth knowing cold - club players grab that pawn all the time.',
    },
    {
      id: 'kg-early-check',
      name: 'The wrong check',
      owner: 'theirs',
      moves: ['e4', 'e5', 'f4', 'exf4', 'Bc4', 'Qh4+', 'Kf1'],
      setup: 6,
      point:
        'If you have accepted the gambit, the natural-looking ...Qh4+ is a mistake: White simply plays Kf1, and although castling rights are gone, the white king is perfectly safe while the black queen becomes a target for Nf3, g2-g3 and Rg1 with tempo after tempo. Checks are only good when they achieve something.',
    },
  ],
  tree: [
    {
      san: 'e4',
      label: 'King\'s pawn',
      idea: 'The most common first move in chess.',
      children: [
        {
          san: 'e5',
          idea: 'The classical answer: claim the centre and refuse to give White a free hand.',
          hint: 'Meet the king\'s pawn head-on with your own.',
          mistakes: [
            { san: 'c5', deliberate: true, why: 'The Sicilian is a fine defence and it avoids the King\'s Gambit entirely - but then you never learn what to do when someone plays it.' },
            { san: 'e6', deliberate: true, why: 'The French is sound, but this defence exists to answer 2.f4, and you have to allow it to answer it.' },
          ],
          children: [
            {
              san: 'f4',
              label: 'King\'s Gambit',
              idea: 'The gambit. White offers the f-pawn for the centre and the f-file - and opens the diagonal to g1 in the process.',
              children: [
                {
                  san: 'Bc5',
                  idea: 'The King\'s Gambit Declined, and the most practical answer there is. The bishop takes the diagonal White just opened and makes fxe5 impossible.',
                  hint: 'White has just opened a diagonal pointing at their own king. Put a bishop on it.',
                  mistakes: [
                    {
                      san: 'exf4',
                      why: 'Accepting is fully playable - the engine even prefers it - but it leads to enormous, sharp theory where White is the one who has studied it. This repertoire declines and keeps the game on your terms.',
                      deliberate: true,
                    },
                    { san: 'd5', why: 'The Falkbeer is a real option, but it is sharp and concrete, and one inaccuracy leaves you worse. The bishop move needs almost no theory.' },
                    { san: 'Nf6', why: 'Playable but it lets fxe5 come with tempo on the knight, which is exactly the free move White wants.' },
                  ],
                  children: [
                    {
                      san: 'Nf3',
                      label: 'Main line',
                      idea: 'The only good move: it develops and stops ...Qh4+ before it happens.',
                      children: [
                        {
                          san: 'd6',
                          idea: 'Prop up e5 and open the c8-bishop. The pawn on e5 is now defended and cannot be taken, so White\'s f-pawn just sits there being weak.',
                          hint: 'Support the centre pawn and open a diagonal for your last minor piece at the same time.',
                          mistakes: [
                            { san: 'exf4', why: 'Now that the bishop is committed to c5, taking gives White the free d2-d4 with tempo and a strong centre.' },
                            { san: 'Nc6', why: 'Reasonable, but the pawn on e5 needs a pawn behind it - fxe5 followed by d4 has to be made impossible first.' },
                            { san: 'Nf6', why: 'fxe5 comes with tempo on the knight, and after Nxe4 d4 White has the centre and the initiative.' },
                          ],
                          children: [
                            {
                              san: 'Nc3',
                              label: 'Main line',
                              idea: 'White develops and keeps the tension, hoping for a later fxe5 or d4.',
                              children: [
                                {
                                  san: 'Nf6',
                                  idea: 'Develop and hit e4. Now the pawn on e5 is defended and the pawn on e4 is the one under pressure.',
                                  hint: 'Develop the knight that attacks White\'s centre pawn.',
                                  mistakes: [
                                    { san: 'exf4', why: 'Still no reason to take: d4 comes with tempo on your bishop and White gets everything the gambit was offered for.' },
                                    { san: 'Bg4', why: 'The bishop is going there, but the knight should come out first so that h3 does not simply gain a tempo on you.' },
                                    { san: 'Nc6', why: 'Fine, but the f6 knight hits e4 and takes the sting out of any Ng5 or f4-f5 ideas. Play the useful one first.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Bc4',
                                      label: 'Main line',
                                      idea: 'The natural developing square, eyeing f7.',
                                      children: [
                                        {
                                          san: 'Nc6',
                                          idea: 'Develop, defend e5 a second time and eye the d4 and a5 squares.',
                                          hint: 'Develop the last knight to its natural square.',
                                          mistakes: [
                                            { san: 'Nxe4', why: 'Losing a piece: Nxe4 d5 forks nothing here because after Bxd5 and Nxe5 White simply picks the piece up.' },
                                            { san: 'O-O', why: 'Playable, but with the f-file about to open and a bishop on c4, the king is safer in the centre for one more move. Develop first.' },
                                            { san: 'exf4', why: 'It opens the f-file straight at your own king with White\'s bishop already on c4. There has still been no reason to take.' },
                                          ],
                                          children: [
                                            {
                                              san: 'd3',
                                              label: 'Main line',
                                              idea: 'White supports e4 and settles for a slow game. The gambit has become a normal position where the f4 pawn is a weakness.',
                                              children: [
                                                {
                                                  san: 'Bg4',
                                                  idea: 'Pin the knight. Without the knight on f3, White has no grip on e5 or d4 at all.',
                                                  hint: 'Pin the piece that is holding White\'s centre together.',
                                                  mistakes: [
                                                    { san: 'O-O', why: 'Safe, but the pin is the move that creates a real threat and forces White to weaken the kingside with h3.' },
                                                    { san: 'exf4', why: 'Now Bxf4 gives White a beautiful bishop and the open file, and you have nothing.' },
                                                    { san: 'Na5', why: 'The knight on a5 is offside and after Bb5+ or Bb3 you have simply lost time.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'h3',
                                                      label: 'Main line',
                                                      idea: 'White asks the question, at the cost of a small kingside weakness.',
                                                      children: [
                                                        {
                                                          san: 'Bxf3',
                                                          idea: 'Take. Removing the knight leaves d4 and e5 unguarded and the pawn on f4 with no support at all.',
                                                          hint: 'Take the piece that was defending the centre, and be happy about the pawn structure you leave behind.',
                                                          mistakes: [
                                                            { san: 'Bh5', why: 'Retreating lets g2-g4 come with tempo and the bishop ends up in trouble on g6 while White\'s attack starts for free.' },
                                                            { san: 'Be6', why: 'It sidesteps the question but wastes the two moves you spent getting the bishop to g4, and White simply plays f5 or O-O with a good game.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Qxf3',
                                                              label: 'Main line',
                                                              idea: 'The queen recaptures. It looks active but it is also a target.',
                                                              children: [
                                                                {
                                                                  san: 'Nd4',
                                                                  idea: 'The point. The knight hits the queen and the c2 pawn, and no white pawn can ever chase it away.',
                                                                  hint: 'A knight can now reach a square in the middle of the board where it attacks the queen and cannot be kicked.',
                                                                  mistakes: [
                                                                    { san: 'exf4', why: 'It gives White\'s bishop the f4 square and opens the file towards your own king while your development is unfinished.' },
                                                                    { san: 'O-O', why: 'Solid, but the knight jump comes with tempo on the queen and takes the best square on the board. Play the forcing move.' },
                                                                    { san: 'Nd7', why: 'Passive and backwards. The other knight has a wonderful square in the centre available right now.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'King\'s Gambit Declined, 2...Bc5 main line',
                                                                    plans: [
                                                                      'The queen must move. After Qd1 or Qg3 you consolidate with ...c6, ...O-O and ...Qb6, adding pressure to b2 and the a7-g1 diagonal.',
                                                                      'The knight on d4 is the best piece on the board. Do not trade it unless the trade wins something concrete.',
                                                                      'Keep the pawn on e5. As long as it stands, White\'s f4 pawn is fixed and the e5 and d4 squares belong to you.',
                                                                      'If White plays fxe5 dxe5, the d-file opens for your rook and the e5 pawn is easily defended by ...Qe7 or ...Nd7.',
                                                                      'Castling short is fine here - with a knight on d4 and a bishop on c5, White has no attack left to organise.',
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
                            {
                              san: 'c3',
                              label: 'Preparing d4',
                              idea: 'White supports the centre and prepares to build with d4 rather than grab material.',
                              children: [
                                {
                                  san: 'Nf6',
                                  idea: 'Develop and hit e4. With White spending time on c3, you have a free move to improve.',
                                  hint: 'Develop towards the centre and put a question to White\'s e-pawn.',
                                  mistakes: [
                                    { san: 'exf4', why: 'It opens the f-file for White for free, and with d2-d4 coming next you have handed over the whole centre.' },
                                    { san: 'Bb6', why: 'Retreating before you are asked to. The bishop is fine on c5 for now, and there is a developing move to make.' },
                                  ],
                                  children: [
                                    {
                                      san: 'd4',
                                      label: 'Main line',
                                      idea: 'White finally builds the centre.',
                                      children: [
                                        {
                                          san: 'exd4',
                                          idea: 'Take at the right moment. With the knight already on f6 hitting e4, White cannot recapture and hold everything.',
                                          hint: 'Now is the moment to take in the centre - the recapture leaves White with a pawn that can be attacked.',
                                          mistakes: [
                                            { san: 'Bb6', why: 'Retreating hands White the perfect centre with d4 and e4 supported by c3. Take while the taking is good.' },
                                            { san: 'Nxe4', why: 'Loses a piece to dxc5, because the knight on e4 has no defender and your bishop is hanging.' },
                                          ],
                                          children: [
                                            {
                                              san: 'cxd4',
                                              label: 'Main line',
                                              idea: 'White rebuilds the centre, but now the a7-g1 diagonal is even more open.',
                                              children: [
                                                {
                                                  san: 'Bb4+',
                                                  idea: 'The check comes with tempo and forces White to block on an awkward square before you decide where the bishop finally lives.',
                                                  hint: 'Give a check that costs White a tempo and disrupts development.',
                                                  mistakes: [
                                                    { san: 'Bb6', why: 'The quiet retreat gives White time for Nc3 and a comfortable game with a big centre. Take the free check first.' },
                                                    { san: 'Nxe4', why: 'Still loses to dxc5 - the bishop on c5 is hanging with tempo.' },
                                                  ],
                                                  end: {
                                                    name: 'King\'s Gambit Declined, 4.c3',
                                                    plans: [
                                                      'After the block, castle and hit the centre with ...Re8 and ...d5 or ...Nc6 pressing d4.',
                                                      'The pawn on f4 is still a long-term weakness and the e3 and g3 squares are permanently soft.',
                                                      'If White plays Nc3 to block, consider trading on c3 to leave White with doubled pawns and a weak d4.',
                                                      'Do not rush ...Nxe4. Complete development first; the centre pawns are targets that will not run away.',
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
                              san: 'fxe5',
                              label: 'Releasing the tension',
                              idea: 'Now that e5 is defended, the trade is legal - but it gives up the centre and hands you the f-file to use later.',
                              children: [
                                {
                                  san: 'dxe5',
                                  idea: 'Recapture and open the d-file straight at White\'s queen. The pawn on e5 is solid and your bishop is beautifully placed.',
                                  hint: 'Take back with the pawn that opens a file for your queen and rook.',
                                  mistakes: [
                                    { san: 'Nc6', why: 'Leaving a pawn hanging in the centre for no compensation. Take back first.' },
                                    { san: 'Qe7', why: 'It regains the pawn eventually but the queen on e7 blocks the f8-bishop and White gets d4 in with tempo.' },
                                  ],
                                  children: [
                                    {
                                      san: 'c3',
                                      label: 'Main line',
                                      idea: 'White prepares d4 to fight for the centre.',
                                      children: [
                                        {
                                          san: 'Nf6',
                                          idea: 'Develop and hit e4 before White is ready. The knight also covers the d5 and g4 squares.',
                                          hint: 'Develop the knight that puts immediate pressure on White\'s remaining centre pawn.',
                                          mistakes: [
                                            { san: 'Bg4', why: 'The pin is less useful now the f-file is open - Bc4 and Qb3 hit f7 and b7 while your king is in the middle.' },
                                            { san: 'Qf6', why: 'The queen is a target on f6 with a rook coming to f1. Develop the pieces that do not get hit.' },
                                          ],
                                          children: [
                                            {
                                              san: 'd4',
                                              label: 'Main line',
                                              idea: 'White builds the centre and hits the bishop.',
                                              children: [
                                                {
                                                  san: 'exd4',
                                                  idea: 'Open the position at the right moment. With your pieces developed and White\'s king still in the centre, opening lines favours you.',
                                                  hint: 'Take in the centre now that your knight is out and White\'s king is not.',
                                                  mistakes: [
                                                    { san: 'Bb6', why: 'Retreating gives White the perfect pawn centre with d4 and e4 backed by c3, and a free hand to develop.' },
                                                    { san: 'Nxe4', why: 'Loses a piece to dxc5 - your bishop on c5 is hanging.' },
                                                  ],
                                                  end: {
                                                    name: 'King\'s Gambit Declined, 4.fxe5',
                                                    plans: [
                                                      'After cxd4 the bishop drops back to b4 with check or to b6, and you castle with a comfortable game.',
                                                      'The half-open f-file cuts both ways: with your king castled and White\'s still in the centre, it is often yours to use.',
                                                      'Aim a knight at d4 or f4 - the squares White has permanently given up by advancing the f-pawn.',
                                                      'Do not chase pawns. Finish development and let White solve the problem of the exposed king.',
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
                      san: 'fxe5',
                      label: 'Grabbing the pawn',
                      punish: true,
                      idea: 'The natural-looking capture, and a losing one. Club players play it all the time.',
                      children: [
                        {
                          san: 'Qh4+',
                          idea: 'The refutation. The check cannot be blocked by a piece and the king cannot move safely.',
                          hint: 'White has just opened a line to the king and there is no knight on f3. Find the check.',
                          mistakes: [
                            { san: 'Bxg1', why: 'It wins a rook but after Rxg1 White has real compensation and the queen check wins far more.' },
                            { san: 'Nc6', why: 'Quietly regaining a pawn misses the whole point: the check is winning material by force.' },
                          ],
                          children: [
                            {
                              san: 'g3',
                              label: 'Main line',
                              idea: 'Forced - the only way to answer the check without losing immediately.',
                              children: [
                                {
                                  san: 'Qxe4+',
                                  idea: 'Take the pawn with check. The rook on h1 is next and there is nothing White can do about it.',
                                  hint: 'Take the loose pawn with check and look at what stands undefended in the corner.',
                                  mistakes: [
                                    { san: 'Bxg1', why: 'A rook is good, but taking with check and then collecting the other rook is much better.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Qe2',
                                      label: 'Main line',
                                      idea: 'White blocks and offers the trade, which is the least bad option.',
                                      children: [
                                        {
                                          san: 'Qxh1',
                                          idea: 'The rook comes off the board. Black is winning easily.',
                                          hint: 'Collect the piece the check was aimed at all along.',
                                          mistakes: [
                                            { san: 'Qxe2', why: 'Trading queens throws away the win - the rook on h1 was the whole point of the combination.' },
                                            { san: 'Qxc2', why: 'A pawn is not a rook. Take the piece in the corner.' },
                                          ],
                                          end: {
                                            name: 'King\'s Gambit, 3.fxe5 refuted',
                                            plans: [
                                              'You are a rook and a pawn up. The queen on h1 is temporarily out of play, so develop quickly with ...Nc6, ...d6 and ...Bg4 and bring it home.',
                                              'White will try Nf3 and Bg2 to trap the queen. ...d5 and ...Bg4 give the queen the escape route via h2 or via a trade on f3.',
                                              'Do not get greedy with more pawns. Development and a safe king finish the game.',
                                              'This is exactly why 2...Bc5 is a good practical choice: it sets a trap that a large number of King\'s Gambit players walk straight into.',
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
                      san: 'Nc3',
                      label: 'Developing first',
                      idea: 'White develops the queenside knight, and that changes the position more than it looks: with e4 defended, fxe5 is a real threat again.',
                      children: [
                        {
                          san: 'd6',
                          idea: 'Prop up e5 with a pawn. The tactic that made 2...Bc5 work needs the e4 pawn to be loose after ...Qh4+ - now that a knight guards it, the e5 pawn has to be defended properly instead.',
                          hint: 'White is threatening to take on e5 for real this time. Defend it with a pawn.',
                          mistakes: [
                            { san: 'Nf6', why: 'Now fxe5 simply wins a pawn: ...Nxe4 runs into Nxe4, because the knight on c3 was covering e4 all along.' },
                            { san: 'exf4', why: 'It gives up the centre for nothing while your development is unfinished, and Nf3 followed by d4 gives White everything.' },
                            { san: 'Qh4+', why: 'The check only works once White has taken on e5. Here g3 chases the queen, the e-pawn is defended by the knight, and you have lost two moves.' },
                          ],
                          children: [
                            {
                              san: 'Nf3',
                              label: 'Main line',
                              idea: 'White stops the check for good. The position has transposed straight back into the main line.',
                              children: [
                                {
                                  san: 'Nf6',
                                  idea: 'Now the knight is safe: e5 is defended, so fxe5 wins nothing, and the knight gets on with attacking e4.',
                                  hint: 'Develop the knight that attacks e4 - it is safe now that the pawn behind it is defended.',
                                  mistakes: [
                                    { san: 'exf4', why: 'Still no reason to take: d4 comes with tempo on your bishop and White gets the centre and the open file the gambit was offered for.' },
                                    { san: 'Qh4', why: 'The knight on f3 simply takes it. Once White covers h4 the queen has no business going there.' },
                                  ],
                                  end: {
                                    name: 'King\'s Gambit Declined, 3.Nc3',
                                    plans: [
                                      'This is a transposition: 3.Nc3 d6 4.Nf3 Nf6 is the same position as the main line 3.Nf3 d6 4.Nc3 Nf6. Everything from here is the plan you already know.',
                                      'Next come ...Nc6 and ...Bg4, pinning the knight that holds d4 and e5 together.',
                                      'When White asks the question with h3, take on f3. Removing that knight leaves d4 permanently soft and White with a slightly loose kingside.',
                                      'Keep the pawn on e5. While it stands, the f4 pawn is fixed and the e3, g3 and d4 squares belong to you.',
                                      'The move order matters in exactly one way: because White played Nc3 before Nf3, ...d6 had to come first. Get that right and the rest is the main line.',
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
