import type { Defence } from '../types'

export const vsBlackmarDiemer: Defence = {
  kind: 'defence',
  id: 'vs-blackmar-diemer',
  name: 'Blackmar-Diemer Gambit',
  eco: 'D00',
  side: 'black',
  system: 'Blackmar-Diemer and early d-pawn gambits',
  family: 'd4',
  recognisedBy: {
    moves: '1.d4 d5 2.e4',
    tell: 'A second centre pawn offered on move two. If you take it, White will play Nc3 and f3 to open lines rather than take it back.',
  },
  theirPlan:
    'White gives a pawn to rip open the f-file and the e-file before you have castled. The whole gambit runs on speed: Nc3, f3, Nxf3, Bd3 or Bc4, Qe2 and O-O-O, and then everything points at f7 and h7 while your king is still deciding where to live. Blackmar-Diemer players know their attacking patterns cold and are counting on you to defend by feel. The gambit is not sound - it is just fast.',
  recipe: [
    'Take the pawn on e4. Declining gives White a free centre and the initiative anyway; you may as well be a pawn up while you defend.',
    'Answer 3.Nc3 with ...Nf6. It develops, covers d5, and stops the immediate e-file tricks.',
    'When White plays f3, take on f3 and let the knight recapture. Do not try to hold a second pawn - one is plenty.',
    'Then play the Euwe set-up: ...e6, ...Be7 and castle. Solid beats clever here; once your king is safe, the extra pawn wins itself.',
    'Do not grab the d4 pawn with the queen. The Halosar trap punishes exactly that, and there is no need for it when you are already a pawn ahead.',
    'If White plays the immediate 3.f3 without Nc3, hit back with ...e5! - the centre opens while White\'s king is the one in the middle.',
  ],
  summary:
    'Take the pawn, develop with ...Nf6 and give back nothing else. The Euwe set-up with ...e6, ...Be7 and a quick castle leaves White a pawn short with no attack, which is exactly the game a gambit player does not want.',
  traps: [
    {
      id: 'bdg-halosar',
      name: 'The Halosar trap',
      owner: 'theirs',
      moves: ['d4', 'd5', 'e4', 'dxe4', 'Nc3', 'Nf6', 'f3', 'exf3', 'Qxf3', 'Qxd4', 'Be3'],
      setup: 10,
      point:
        'The greedy 5...Qxd4 looks winning - a second pawn and White\'s queen is offside. Then Be3! comes with tempo, the queen has to run to g4, and after Qf2, Nb5 and Rd1 White is attacking with every piece while the black king sits on e8. You are already a pawn up after the gambit; taking a second one costs the game.',
    },
    {
      id: 'bdg-blackmar-e5',
      name: 'Punishing the immediate 3.f3',
      owner: 'ours',
      moves: ['d4', 'd5', 'e4', 'dxe4', 'f3', 'e5'],
      setup: 5,
      point:
        'Against the Blackmar Gambit proper (3.f3 without Nc3), ...e5! is the most convincing answer. Taking the second pawn is fine too, but the central strike is the one that ends the game as a contest: after dxe5 Qxd1+ Kxd1 Nc6 the queens are off, White has lost the right to castle, and the pawn on e5 falls next. A gambit with no attack and no pawn is simply a lost game.',
    },
  ],
  tree: [
    {
      san: 'd4',
      label: 'Queen\'s pawn',
      idea: 'A normal-looking start.',
      children: [
        {
          san: 'd5',
          idea: 'Take your share of the centre. It is also the move that invites the gambit, which is what this defence is for.',
          hint: 'Answer the centre pawn with your own.',
          mistakes: [
            { san: 'Nf6', deliberate: true, why: 'Sound, and it sidesteps the gambit entirely - but then you never learn what to do when someone plays it against you.' },
            { san: 'f5', why: 'The Dutch invites 2.e4 as a gambit too, and from a far more exposed structure. Meet the centre with a centre pawn.' },
          ],
          children: [
            {
              san: 'e4',
              label: 'Blackmar-Diemer Gambit',
              idea: 'The pawn is offered. White wants open lines, not material.',
              children: [
                {
                  san: 'dxe4',
                  idea: 'Take it. Declining leaves White with a big centre and the initiative, which is the worst of both worlds.',
                  hint: 'A free pawn in the centre, and declining gives White everything they wanted anyway.',
                  mistakes: [
                    { san: 'e6', why: 'The French Defence. Sound in itself, but you have given White the full centre for nothing and dodged the question instead of answering it.' },
                    { san: 'c6', why: 'The Caro-Kann. Playable, but the whole point of this defence is to show that the gambit does not work when you take.' },
                    { san: 'Nf6', why: 'Now e4-e5 kicks the knight and White has the centre and the tempo, which is exactly what the gambit is trying to buy with a pawn.' },
                  ],
                  children: [
                    {
                      san: 'Nc3',
                      label: 'Main line',
                      idea: 'The Blackmar-Diemer proper: develop first, and win the pawn back with f3 next move on White\'s terms.',
                      children: [
                        {
                          san: 'Nf6',
                          idea: 'Develop, cover d5, and defend the extra pawn once more. It is the move theory has always considered best.',
                          hint: 'Develop the knight that both guards your extra pawn and covers d5.',
                          mistakes: [
                            { san: 'f5', why: 'Trying to hold the pawn with a pawn wrecks your kingside: Qh5+ or Bc4 and the whole light-squared complex around your king collapses.' },
                            { san: 'e5', why: 'Too loose - dxe5 and your queen gets pushed around while White develops with tempo and the extra pawn on e4 falls anyway.' },
                            { san: 'Bf5', why: 'It looks natural, but f2-f3 hits the pawn and the bishop has no good square once g2-g4 comes. Develop the knight first.' },
                          ],
                          children: [
                            {
                              san: 'f3',
                              label: 'Main line',
                              idea: 'The gambit move. White opens the f-file and offers the pawn back to get there.',
                              children: [
                                {
                                  san: 'exf3',
                                  idea: 'Accept. Refusing with ...e3 or ...Bf5 gives back the pawn for nothing; taking means White has to spend a move recapturing.',
                                  hint: 'Take the pawn. Everything White gets in this gambit comes from the f-file, and it opens whether you take or not.',
                                  mistakes: [
                                    { san: 'e3', why: 'A known practical try, but it hands the pawn straight back and after Bxe3 White has a lead in development for nothing.' },
                                    { san: 'Bf5', why: 'It looks solid but g2-g4 comes with tempo and your bishop has to run while White opens lines at your king.' },
                                    { san: 'e5', why: 'Loose. dxe5 and the pawn on e4 falls anyway, with White\'s pieces flooding out.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nxf3',
                                      label: 'Main line',
                                      idea: 'The knight recaptures and White\'s pieces come at you: Bd3, Bg5, Qe2 and O-O-O are all coming.',
                                      children: [
                                        {
                                          san: 'e6',
                                          idea: 'The Euwe Defence, and the soundest answer there is. A pawn on e6 covers d5 and f5, opens the bishop, and prepares to castle out of the danger zone.',
                                          hint: 'Nothing fancy. Open a line for your bishop, cover the light squares, and prepare to castle.',
                                          mistakes: [
                                            { san: 'g6', why: 'Sound, and a real alternative - but the fianchetto invites Bh6 and h2-h4-h5, which is exactly the attack the gambit is designed to produce. This repertoire prefers the quiet ...e6 set-up.', deliberate: true },
                                            { san: 'Bg4', why: 'It pins the knight but after h3 the bishop is deflected, and Ne5 and Bc4 hit f7 while your king is still in the centre.' },
                                            { san: 'Qxd4', why: 'The greedy move, and the one the Halosar trap is built on. A second pawn is not worth the queen being chased across the board.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Bg5',
                                              label: 'Main line',
                                              idea: 'The bishop pins the knight and adds a piece to the kingside build-up.',
                                              children: [
                                                {
                                                  san: 'Be7',
                                                  idea: 'Break the pin and prepare to castle. Simple, and it takes the sting out of everything White has.',
                                                  hint: 'Answer the pin with the move that both unpins and lets you castle next.',
                                                  mistakes: [
                                                    { san: 'h6', why: 'Bxf6 Qxf6 and now Ne5 and Qd2 come with your kingside loosened and the h-pawn a target for a later Bd3 and Qe2.' },
                                                    { san: 'Nbd7', why: 'It blocks the bishop and leaves the pin, so Bxf6 or Ne5 comes with real force. Break the pin first.' },
                                                    { san: 'c6', why: 'Slow. There is no time for a quiet pawn move with a bishop on g5, a knight on f3 and White ready to castle long.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Bd3',
                                                      label: 'Main line',
                                                      idea: 'The bishop takes the attacking diagonal and White prepares Qe2 and O-O-O.',
                                                      children: [
                                                        {
                                                          san: 'O-O',
                                                          idea: 'Get the king out. Once it is on g8 behind three pawns, White is simply a pawn down with no way through.',
                                                          hint: 'The whole gambit is aimed at a king in the centre. Take that target away.',
                                                          mistakes: [
                                                            { san: 'Nc6', why: 'It develops but leaves the king on e8 for another move, and Bxf6 followed by Qd2 and O-O-O is a real attack.' },
                                                            { san: 'h6', why: 'Loosening the kingside with a bishop on d3 already aimed at h7 is exactly what White is hoping for.' },
                                                            { san: 'Nbd7', why: 'Natural, but the king comes first here. With the bishop on d3 and the knight ready for e5, another move in the centre is one too many.' },
                                                          ],
                                                          end: {
                                                            name: 'Blackmar-Diemer, Euwe Defence',
                                                            plans: [
                                                              'You are a clean pawn up with a safe king and no weaknesses. Trade pieces whenever you can - every exchange takes the gambit further away from working.',
                                                              'Play ...Nbd7 and ...c5 next, hitting d4 and opening lines for your own pieces once the attack has stalled.',
                                                              'Watch the h7 square. If White plays Qe2 or Ne5 aiming at it, ...h6 backed up by ...Nbd7 and ...Nf8 is a reliable set-up.',
                                                              'If White castles long, get the queenside pawns moving: ...b5, ...a5 and ...b4 arrive faster than anything White can generate on the other wing.',
                                                              'Do not go pawn-hunting on d4 or b2. The extra pawn you already have is enough to win the endgame.',
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
                              san: 'Bg5',
                              label: 'Delaying the gambit',
                              idea: 'White pins first and keeps f3 in reserve, hoping to win the pawn back under better circumstances.',
                              children: [
                                {
                                  san: 'Bf5',
                                  idea: 'With f3 not yet played, the bishop gets out to its best square for free and holds the extra pawn.',
                                  hint: 'White has delayed the pawn-grab. Use the free move to develop the bishop before it gets shut in.',
                                  mistakes: [
                                    { san: 'e6', why: 'Solid, but with f3 not yet played there is a free move to develop the light-squared bishop outside the chain. Take it.' },
                                    { san: 'h6', why: 'Bxf6 exf6 wrecks your structure and gives White the e-file and the initiative for the pawn.' },
                                    { san: 'c6', why: 'Too slow and too passive - it neither develops nor holds anything that was not already held.' },
                                  ],
                                  children: [
                                    {
                                      san: 'f3',
                                      label: 'Main line',
                                      idea: 'Now the gambit comes anyway, one move later.',
                                      children: [
                                        {
                                          san: 'exf3',
                                          idea: 'Accept again. The extra tempo you spent on ...Bf5 makes this version even better for Black.',
                                          hint: 'Same answer as always: take, and let White spend the move recapturing.',
                                          mistakes: [
                                            { san: 'e6', why: 'Declining leaves White with fxe4 and a big centre, and your bishop on f5 suddenly has nothing in front of it.' },
                                            { san: 'Bg6', why: 'Sound enough, but this repertoire takes the pawn rather than retreating. Making White prove the compensation is the whole point of accepting a gambit.', deliberate: true },
                                          ],
                                          children: [
                                            {
                                              san: 'Nxf3',
                                              label: 'Main line',
                                              idea: 'The recapture. White is a pawn down with the same attacking ideas, but you are a move further along.',
                                              children: [
                                                {
                                                  san: 'e6',
                                                  idea: 'Complete the set-up. Bishop on f5 already out, king about to castle, and a pawn in the bank.',
                                                  hint: 'Finish the structure and prepare to castle.',
                                                  mistakes: [
                                                    { san: 'Bxc2', why: 'Greedy and losing: after Rc1 or Qd2 the bishop on c2 is trapped and the second pawn costs a piece.' },
                                                    { san: 'h6', why: 'Weakening for no gain - the bishop simply goes to h4 or takes on f6 with a better structure for White.' },
                                                  ],
                                                  end: {
                                                    name: 'Blackmar-Diemer, 4.Bg5',
                                                    plans: [
                                                      'Play ...Be7 and castle. With the light-squared bishop already outside the pawn chain, this is the best version of the whole defence.',
                                                      'Do not touch the c2 pawn. The bishop belongs on f5 or g6 keeping the light squares safe, not trapped on the queenside.',
                                                      'After castling, hit the centre with ...c5. White has no pawn on e4 and no compensation once the position opens.',
                                                      'Trade queens whenever the chance appears. An endgame a pawn up against a gambit player is the perfect outcome.',
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
                      san: 'f3',
                      label: 'Blackmar Gambit proper',
                      idea: 'The original and much weaker version: White opens the f-file before developing.',
                      children: [
                        {
                          san: 'e5',
                          idea: 'The refutation. White\'s king is in the centre on a soon-to-be-open file, so open it.',
                          hint: 'White has weakened the a7-g1 diagonal and left the king in the middle. Strike in the centre.',
                          mistakes: [
                            { san: 'exf3', why: 'Taking is playable, but after Nxf3 White has the game they wanted. The central strike is much stronger - it wins a pawn back with the queens coming off.' },
                            { san: 'Nf6', why: 'Solid, but it lets White recapture on f3 with a normal gambit position. The immediate central break is far more testing.' },
                            { san: 'Bf5', why: 'Reasonable, but fxe4 Bxe4 leads to a messy position where White has real activity. The pawn break is cleaner.' },
                          ],
                          children: [
                            {
                              san: 'dxe5',
                              label: 'Main line',
                              idea: 'Forced in practice - anything else loses a pawn for nothing.',
                              children: [
                                {
                                  san: 'Qxd1+',
                                  idea: 'Trade queens with check. A gambit without queens and without an attack is simply a pawn down.',
                                  hint: 'Take the queen with check and end White\'s attacking dreams on the spot.',
                                  mistakes: [
                                    { san: 'Qh4+', why: 'It looks aggressive but g3 comes with tempo and your queen ends up chased around while White develops.' },
                                    { san: 'exf3', why: 'It wins a pawn but leaves the queens on and White gets Nxf3 with an attack down the f-file. The queen trade is stronger.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Kxd1',
                                      label: 'Main line',
                                      idea: 'Forced. White\'s king is stuck in the centre and can never castle.',
                                      children: [
                                        {
                                          san: 'Nc6',
                                          idea: 'Develop with an attack on the e5 pawn. White cannot hold it and cannot castle, which is a losing combination.',
                                          hint: 'Develop a piece and attack the pawn White just won.',
                                          mistakes: [
                                            { san: 'exf3', why: 'Playable, but Nxf3 gives White some activity. Winning the e5 pawn while developing is far cleaner.' },
                                            { san: 'Be6', why: 'Slow. The pawn on e5 is the target and the knight hits it while coming to a good square.' },
                                            { san: 'f6', why: 'It attacks the pawn but wrecks your own structure and opens lines at your king for no reason.' },
                                          ],
                                          end: {
                                            name: 'Blackmar Gambit refuted',
                                            plans: [
                                              'The pawn on e5 falls next move. White is a pawn down with a king on d1 and no castling rights.',
                                              'Develop simply with ...Be6, ...O-O-O and ...Nxe5 - your rooks connect and White\'s never do.',
                                              'Do not rush to take on f3. Let White worry about that pawn while you finish development.',
                                              'This is why the Blackmar-Diemer inserts Nc3 first: the immediate 3.f3 simply loses a pawn for nothing.',
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
}
