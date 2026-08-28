import type { Defence } from '../types'

export const vsEnglish: Defence = {
  kind: 'defence',
  id: 'vs-english',
  name: 'English Opening',
  eco: 'A28',
  side: 'black',
  system: 'English',
  family: 'flank',
  recognisedBy: {
    moves: '1.c4',
    tell: 'A flank pawn on move one. White is not claiming the centre with pawns - the plan is to control d5 from the side with c4, Nc3 and a bishop on g2.',
  },
  theirPlan:
    'The English is a Sicilian with an extra move. White fights for d5 from the wing, fianchettoes on g2, and waits for you to commit before choosing a structure. English players are usually comfortable in slow, manoeuvring positions and are quite happy to transpose into a Queen\'s Gambit or a Catalan the moment you give them the chance. The one thing White has not done is put a pawn in the centre, which is exactly where you should look.',
  recipe: [
    'Answer 1.c4 with ...e5. It is the Sicilian with colours reversed, and being the one with the extra pawn in the centre is worth more than the extra tempo White has.',
    'Develop with ...Nf6 and ...Nc6, and then break with ...d5 at the first good moment. Getting ...d5 in is the whole game.',
    'After cxd5 Nxd5, retreat the knight to b6 rather than trading on c3. From b6 it eyes c4 and d5 and supports the queenside.',
    'Complete with ...Be7 and castle. Nothing fancy - your structure is the healthier one and you have no weaknesses.',
    'If White plays 2.Nf3 hitting the e-pawn, push past with ...e4. The knight has to go to d4 or g5 and you gain time.',
    'Do not let White get in d2-d4 for free. Meet it with ...exd4 and then ...Bb4, pinning the knight that recaptured.',
  ],
  summary:
    'Meet the English with ...e5, treating it as a Sicilian a tempo down for White. Develop with ...Nf6 and ...Nc6, break with ...d5, and retreat the knight to b6 - a healthy central pawn and no weaknesses is more than enough.',
  traps: [
    {
      id: 'english-e4-fork',
      name: 'The premature ...e4',
      owner: 'theirs',
      moves: ['c4', 'e5', 'Nc3', 'Nf6', 'Nf3', 'Nc6', 'g3', 'd5', 'cxd5', 'Nxd5', 'Bg2', 'Nxc3', 'bxc3', 'e4', 'Ng5', 'Qxg5', 'Bxe4'],
      setup: 14,
      point:
        'Pushing ...e4 to gain space runs into Ng5, when the pawn is attacked twice and defended by nothing. If Black then panics with ...Qxg5, Bxe4 forks the knight on c6 and the rook on a8. The lesson is more general than the trap: once the long diagonal opens, a bishop on g2 sees a8, and every loose piece on the queenside becomes a tactic.',
    },
    {
      id: 'english-nb6',
      name: 'Retreat to b6, do not trade',
      owner: 'ours',
      moves: ['c4', 'e5', 'Nc3', 'Nf6', 'Nf3', 'Nc6', 'g3', 'd5', 'cxd5', 'Nxd5', 'Bg2', 'Nb6'],
      setup: 11,
      point:
        'Not a tactic, but the move that decides the whole opening. Trading on c3 opens the b-file and gives White\'s bishop the long diagonal for free. Retreating to b6 keeps the position closed on the light squares, guards c4 and d5, and leaves White with a knight on c3 that has nothing to do.',
    },
  ],
  tree: [
    {
      san: 'c4',
      label: 'English Opening',
      idea: 'A flank opening. White will fight for d5 from the side rather than occupying the centre.',
      children: [
        {
          san: 'e5',
          idea: 'The most testing answer: a Sicilian with colours reversed, and you are the one with a pawn in the centre.',
          hint: 'Answer a flank opening by putting a pawn in the middle of the board.',
          mistakes: [
            { san: 'Nf6', deliberate: true, why: 'Fully sound and it usually transposes to an Indian defence, but it lets White choose which structure appears. Taking the centre first is more principled.' },
            { san: 'c5', deliberate: true, why: 'The symmetrical English is a solid choice, but symmetrical positions favour the side with the extra tempo - and that is White.' },
            { san: 'e6', why: 'It commits the e-pawn without taking any space, and after d4 White gets a Queen\'s Gambit with a free tempo.' },
          ],
          children: [
            {
              san: 'Nc3',
              label: 'Main line',
              idea: 'The natural developing move, adding a second attacker to d5.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Develop and cover d5. In a reversed Sicilian the d5 square is everything.',
                  hint: 'Develop a knight to the square that fights for d5.',
                  mistakes: [
                    { san: 'Bb4', why: 'Playable, but Nd5 hits the bishop and after ...Be7 White has gained time. Develop the knight first.' },
                    { san: 'd6', why: 'Too passive: it hands White a free hand with g3, Bg2 and d3, and you have not fought for d5 at all.' },
                    { san: 'f5', why: 'Ambitious but loose - d4 comes and the pawn on e5 falls apart while your king is exposed.' },
                  ],
                  children: [
                    {
                      san: 'Nf3',
                      label: 'Main line',
                      idea: 'White develops and attacks e5.',
                      children: [
                        {
                          san: 'Nc6',
                          idea: 'Defend the pawn with a developing move, exactly as in a normal open game.',
                          hint: 'Defend the attacked pawn by developing your other knight.',
                          mistakes: [
                            { san: 'e4', why: 'The push works when White has not developed the queen\'s knight. Here Ng5 comes and the pawn on e4 falls with your development still unfinished.' },
                            { san: 'd6', why: 'It defends the pawn but passively, and it blocks the f8-bishop for no reason.' },
                            { san: 'Bb4', why: 'It develops but leaves e5 hanging - Nxe5 simply wins a pawn.' },
                          ],
                          children: [
                            {
                              san: 'g3',
                              label: 'Main line',
                              idea: 'The English fianchetto. The bishop is heading to g2 to press on d5 and the long diagonal.',
                              children: [
                                {
                                  san: 'd5',
                                  idea: 'The break. White has spent a move on the fianchetto, so this is the moment to open the centre before the bishop lands on g2.',
                                  hint: 'White has spent a tempo on the wing. Break in the centre now.',
                                  mistakes: [
                                    { san: 'Bb4', why: 'Playable, but the central break is the move that solves your problems permanently. Bishop moves can wait.' },
                                    { san: 'g6', why: 'Copying the fianchetto gives White the better version - White is a tempo ahead in the same structure.' },
                                    { san: 'd6', why: 'Passive. Playing ...d6 instead of ...d5 concedes the centre and lets White dictate the whole game.' },
                                  ],
                                  children: [
                                    {
                                      san: 'cxd5',
                                      label: 'Main line',
                                      idea: 'Forced in practice: leaving the tension lets Black take on c4 with a fine game.',
                                      children: [
                                        {
                                          san: 'Nxd5',
                                          idea: 'Recapture with the knight, taking the central square and preparing to reroute to b6.',
                                          hint: 'Take back with the knight that lands in the centre.',
                                          mistakes: [
                                            { san: 'Qxd5', why: 'The queen is a target: Nc3 or Bg2 comes with tempo and White develops while you retreat.' },
                                            { san: 'e4', why: 'Ng5 or Nd4 comes and the pawn on e4 is weak. Recapture first.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Bg2',
                                              label: 'Main line',
                                              idea: 'The bishop finally arrives, pointing at the knight on d5 and the rook behind it.',
                                              children: [
                                                {
                                                  san: 'Nb6',
                                                  idea: 'The key retreat. Trading on c3 would open the b-file and hand the long diagonal to White\'s bishop; from b6 the knight keeps everything shut and eyes c4 and d5.',
                                                  hint: 'The knight in the centre is attacked. Retreat it rather than trading, and pick the square that keeps White\'s bishop shut out.',
                                                  mistakes: [
                                                    { san: 'Nxc3', why: 'The most common mistake in the whole variation. bxc3 gives White a big centre, an open b-file, and a bishop on g2 with nothing in front of it.' },
                                                    { san: 'Nde7', why: 'The knight is passive on e7 and blocks the f8-bishop. On b6 it does real work on the queenside.' },
                                                    { san: 'Be6', why: 'Reasonable, but leaving the knight on d5 to be traded on White\'s terms is exactly what you want to avoid.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'O-O',
                                                      label: 'Main line',
                                                      idea: 'White castles and prepares d3 and a queenside advance with a3 and b4.',
                                                      children: [
                                                        {
                                                          san: 'Be7',
                                                          idea: 'Simple development. The bishop is fine on e7, defends the knight on b6 along the rank if needed, and clears the way to castle.',
                                                          hint: 'Develop the last minor piece on the kingside and get ready to castle.',
                                                          mistakes: [
                                                            { san: 'Bc5', why: 'Playable but the bishop gets hit by d3, Be3 or Na4 and has to move again. On e7 it is safe and useful.' },
                                                            { san: 'f6', why: 'It props up e5 but weakens the king and the e6 square, and there is no need - the pawn is defended once and attacked never.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'd3',
                                                              label: 'Main line',
                                                              idea: 'White supports the position and prepares Be3 or a3 and b4.',
                                                              children: [
                                                                {
                                                                  san: 'O-O',
                                                                  idea: 'King to safety. You have a healthy extra pawn in the centre, no weaknesses, and every piece on a good square.',
                                                                  hint: 'Everything is developed. Finish the job.',
                                                                  mistakes: [
                                                                    { san: 'e4', why: 'It looks like it gains space but Ng5 hits the pawn and after dxe4 or Ncxe4 White simply wins it. Castle first.' },
                                                                    { san: 'Be6', why: 'Fine, but the king should get off the e-file before it opens. Castle first, develop the bishop after.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'English, Four Knights with ...d5',
                                                                    plans: [
                                                                      'Play ...Be6 and ...f6 or ...Re8, and think about ...Nd4 hitting the knight on f3 and the c2 square.',
                                                                      'White will play a3 and b4 to gain queenside space. Meet it with ...a5, and if b4 comes anyway, ...axb4 opens the a-file for you.',
                                                                      'Your pawn on e5 is your space advantage. Keep it defended and do not push it to e4 unless it is genuinely supported.',
                                                                      'The knight on b6 controls c4 and d5 and can go to d7 and f6 later, or to a4 hitting c3.',
                                                                      'This is a reversed Sicilian where you have the extra central pawn. Play solidly and the small edge is real.',
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
                              san: 'e3',
                              label: 'A small centre',
                              idea: 'White prepares d4 rather than fianchettoing, aiming for a solid pawn centre.',
                              children: [
                                {
                                  san: 'd5',
                                  idea: 'Break first. With White heading for d2-d4, the moment to open the centre is before it happens.',
                                  hint: 'White is preparing to take the centre with pawns. Get there first.',
                                  mistakes: [
                                    { san: 'Bb4', why: 'Playable, but Qc2 or Nd5 give White a comfortable game. The central break is the principled reply.' },
                                    { san: 'd6', why: 'It concedes d4 for nothing and White gets exactly the position the move e3 was played for.' },
                                  ],
                                  children: [
                                    {
                                      san: 'cxd5',
                                      label: 'Main line',
                                      idea: 'White trades to keep control of d5.',
                                      children: [
                                        {
                                          san: 'Nxd5',
                                          idea: 'Take with the knight and keep a pawn on e5.',
                                          hint: 'Recapture with the piece rather than the queen.',
                                          mistakes: [
                                            { san: 'Qxd5', why: 'Nc3 or Bc4 gains a tempo on the queen and White develops while you retreat.' },
                                            { san: 'e4', why: 'It leaves the pawn on d5 uncaptured and after Nd4 or Ng5 White is simply better developed.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Bb5',
                                              label: 'Main line',
                                              idea: 'The pin on the knight, aiming to undermine the defender of e5.',
                                              children: [
                                                {
                                                  san: 'Nxc3',
                                                  idea: 'Here the trade is right: with the bishop on b5 rather than g2, doubling White\'s pawns leaves a permanently damaged structure and no compensation on the long diagonal.',
                                                  hint: 'Trade the knights - with no bishop on g2, White\'s recapture is a real structural concession.',
                                                  mistakes: [
                                                    { san: 'Nb6', why: 'The right idea against a fianchetto, but here the bishop is on b5 and Bxc6+ followed by pressure on e5 gives White a good game.' },
                                                    { san: 'Bd7', why: 'Passive, and it lets Nxd5 or Bxc6 come on White\'s terms.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'bxc3',
                                                      label: 'Main line',
                                                      idea: 'Forced - dxc3 would leave White with no centre at all.',
                                                      children: [
                                                        {
                                                          san: 'Bd6',
                                                          idea: 'Defend e5 and develop. White\'s doubled c-pawns and the hole on c4 are permanent features now.',
                                                          hint: 'Develop the bishop to the square that also holds your centre pawn.',
                                                          mistakes: [
                                                            { san: 'Be7', why: 'It develops but does not defend e5, and Nxe5 or d4 comes with real force.' },
                                                            { san: 'Qd5', why: 'The queen is exposed and after c4 or Bxc6+ White gains time while you shuffle.' },
                                                          ],
                                                          end: {
                                                            name: 'English, 4.e3',
                                                            plans: [
                                                              'Castle and play ...Bg4 or ...Be6, then ...Qe7 and ...Rad8 with pressure down the d-file.',
                                                              'White\'s doubled c-pawns are the story. Fix them with ...a6 and ...b5 or simply blockade on c4 with a knight.',
                                                              'Your pawn on e5 gives you space. Support it with ...Re8 and ...f6 if needed.',
                                                              'If White plays d4, answer ...e4 to keep the position closed and the doubled pawns fixed.',
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
                              san: 'd4',
                              label: 'Taking the centre',
                              idea: 'The most direct try: White breaks in the centre before Black gets ...d5 in.',
                              children: [
                                {
                                  san: 'exd4',
                                  idea: 'Take. Leaving the tension lets White build with d5 or Be3 and you have nothing.',
                                  hint: 'Take the pawn that has just entered the centre.',
                                  mistakes: [
                                    { san: 'e4', why: 'It gains space but Ng5 or Nd2 hits the pawn and White has a big centre with d4 supported. Take instead.' },
                                    { san: 'd6', why: 'Declining hands White the full centre with pawns on c4 and d4 and a free game.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nxd4',
                                      label: 'Main line',
                                      idea: 'The knight recaptures and White has a Sicilian-like position a tempo up.',
                                      children: [
                                        {
                                          san: 'Bb4',
                                          idea: 'The pin. It hits the knight on c3 and stops White from playing e4 comfortably - this is the standard equalising device in the position.',
                                          hint: 'Pin the knight that is holding the centre together.',
                                          mistakes: [
                                            { san: 'Nxd4', why: 'Qxd4 leaves White\'s queen centralised with a big lead in development and an easy game.' },
                                            { san: 'd5', why: 'Now cxd5 Nxd5 Ndb5 comes with tempo and your position is loose while your king is in the centre.' },
                                            { san: 'Bc5', why: 'The bishop is hit by Nb3 or Be3 and has to move again. On b4 it pins and gains time.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Bg5',
                                              label: 'Main line',
                                              idea: 'White pins in return and adds pressure to the knight on f6.',
                                              children: [
                                                {
                                                  san: 'h6',
                                                  idea: 'Ask the question. White has to decide between taking, which gives you the bishop pair, and retreating, which loses time.',
                                                  hint: 'Put the question to the pinning bishop.',
                                                  mistakes: [
                                                    { san: 'Bxc3+', why: 'Trading first releases the tension and after bxc3 White has a strong centre and the bishop pair.' },
                                                    { san: 'O-O', why: 'Playable, but the bishop on g5 is uncomfortable and asking the question first costs nothing.' },
                                                  ],
                                                  end: {
                                                    name: 'English, 4.d4',
                                                    plans: [
                                                      'If White takes on f6, recapture with the queen - the bishop pair and the open g-file are worth the slight structural cost.',
                                                      'If the bishop retreats to h4, play ...Bxc3+ followed by ...Ne4 hitting the bishop and the pawn on c3.',
                                                      'Aim for ...d5 or ...Ne5 - White\'s knight on d4 has no support once your bishop takes on c3.',
                                                      'Castle short and put a rook on e8. The position is a Nimzo-Indian in spirit and it is completely sound for Black.',
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
              san: 'Nf3',
              label: 'Chasing the e-pawn',
              idea: 'White attacks the pawn straight away, hoping you will defend it passively.',
              children: [
                {
                  san: 'e4',
                  idea: 'Push past. The knight has to retreat to an awkward square and you gain time and space.',
                  hint: 'Do not defend the pawn - push it forward and kick the knight.',
                  mistakes: [
                    { san: 'Nc6', why: 'Playable, but Nxe5 or d4 gives White a comfortable game. The push gains a tempo and takes space.' },
                    { san: 'd6', why: 'Passive: it defends the pawn but blocks the bishop and hands White the initiative with d4.' },
                    { san: 'f6', why: 'It defends but weakens the king and the e6 square badly, and Nc3 followed by e4 gives White a big game.' },
                  ],
                  children: [
                    {
                      san: 'Nd4',
                      label: 'Main line',
                      idea: 'The best square: the knight sits in the centre and eyes b5 and f5.',
                      children: [
                        {
                          san: 'Nc6',
                          idea: 'Challenge the knight at once. If White takes, the recapture opens the d-file for your queen and gives you a pleasant structure.',
                          hint: 'Attack the knight that has just landed in the centre.',
                          mistakes: [
                            { san: 'd5', why: 'cxd5 Qxd5 Nc3 comes with tempo and White is developing while your queen runs. Challenge the knight first.' },
                            { san: 'Nf6', why: 'Fine, but Nc3 and d3 chip away at your pawn on e4 and you have not questioned the centralised knight.' },
                          ],
                          children: [
                            {
                              san: 'Nxc6',
                              label: 'Main line',
                              idea: 'White resolves the tension. It gives Black a healthy structure and the two bishops.',
                              children: [
                                {
                                  san: 'dxc6',
                                  idea: 'Recapture with the d-pawn: it opens the queen\'s diagonal, frees the c8-bishop, and keeps a pawn majority on the kingside.',
                                  hint: 'Take back with the pawn that opens lines for two of your pieces at once.',
                                  mistakes: [
                                    { san: 'bxc6', why: 'It keeps a central pawn majority but shuts in the c8-bishop and leaves the a-file and the c-pawns weak.' },
                                  ],
                                  end: {
                                    name: 'English, 2.Nf3 e4',
                                    plans: [
                                      'Develop with ...Nf6, ...Bc5 or ...Bd6 and castle. The pawn on e4 gives you space and takes d3 and f3 away from White.',
                                      'Trade queens if the chance appears - the endgame with your kingside majority and healthy structure is comfortable.',
                                      'Watch the e4 pawn. It is a strength while it is defended and a weakness the moment it is not; ...Bf5 and ...Re8 are the natural supports.',
                                      'White will try Nc3 and d3 or Qc2 to undermine e4. Meet d3 with ...exd3 and recapture with the bishop.',
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
              san: 'g3',
              label: 'Fianchetto first',
              idea: 'White develops the bishop before committing the knights, keeping every set-up available.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Develop and cover d5, keeping ...d5 and ...c6 both available.',
                  hint: 'Develop the knight that fights for the key central square.',
                  mistakes: [
                    { san: 'd5', why: 'Too early: cxd5 Qxd5 Nf3 and Nc3 come with tempo, and your queen is chased while White develops.' },
                    { san: 'c6', why: 'Playable, but the knight comes first - it develops and fights for d5 at the same time.' },
                  ],
                  children: [
                    {
                      san: 'Bg2',
                      label: 'Main line',
                      idea: 'The bishop takes the long diagonal.',
                      children: [
                        {
                          san: 'c6',
                          idea: 'Prepare ...d5 with support, so that cxd5 can be met by ...cxd5 keeping a pawn in the centre.',
                          hint: 'Prepare the central break so that you can recapture with a pawn.',
                          mistakes: [
                            { san: 'd5', why: 'cxd5 Nxd5 and White gains time with Nf3 and Nc3 while the bishop on g2 hits the a8 rook.' },
                            { san: 'Nc6', why: 'Reasonable, but the pawn on c6 is what makes the ...d5 break work properly - a pawn recapture keeps the centre.' },
                          ],
                          children: [
                            {
                              san: 'Nf3',
                              label: 'Main line',
                              idea: 'White develops and hits e5 again.',
                              children: [
                                {
                                  san: 'e4',
                                  idea: 'Push past once more. With the pawn on c6 supporting a later ...d5, the advance gains time and space.',
                                  hint: 'The same idea as before: push past rather than defend.',
                                  mistakes: [
                                    { san: 'd6', why: 'Passive and it lets White play d4 with a comfortable space advantage.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nd4',
                                      label: 'Main line',
                                      idea: 'The knight takes the central square, eyeing b5 and f5.',
                                      children: [
                                        {
                                          san: 'd5',
                                          idea: 'Now the break comes with the c-pawn behind it. Black has a big pawn centre and a comfortable game.',
                                          hint: 'Play the central break you prepared, now that you can recapture with a pawn.',
                                          mistakes: [
                                            { san: 'Na6', why: 'The knight is offside on a6 and White simply plays Nc3 and d3, undermining your pawn on e4 while you untangle.' },
                                            { san: 'Qb6', why: 'The queen is exposed and Nb3 or Nc2 gains time while your development lags.' },
                                          ],
                                          end: {
                                            name: 'English, 2.g3 with ...c6 and ...d5',
                                            plans: [
                                              'You have pawns on c6, d5 and e4 - a genuine space advantage. Support them with ...Bd6, ...O-O and ...Re8.',
                                              'The pawn on e4 shuts the bishop on g2 out of the game. Keep it there as long as it is defended.',
                                              'Watch for cxd5 - recapture with the c-pawn to keep the wall intact.',
                                              'White will try d3 to undermine you. Meet it with ...exd3 and recapture with the bishop, keeping the d5 pawn.',
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
