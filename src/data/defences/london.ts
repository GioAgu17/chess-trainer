import type { Defence } from '../types'

export const vsLondon: Defence = {
  kind: 'defence',
  id: 'vs-london',
  name: 'London System',
  eco: 'D02',
  side: 'black',
  system: 'London System',
  family: 'd4',
  recognisedBy: {
    moves: '1.d4 Nf6 2.Bf4',
    tell: 'The bishop comes out to f4 before anything is decided. White will play e3, c3, Bd3, Nbd2, Nf3 and h3 almost regardless of what you do.',
  },
  theirPlan:
    'The London is a system, not an opening: White plays the same six moves against everything, so a London player has done this three hundred times and you have not. The set-up is genuinely good - the bishop is outside the pawn chain before e3 shuts it in, the structure is solid, and White dreams of Ne5, Bd3 and a kingside attack with Qf3 and Rf1-f3. It is not dangerous if you take the centre seriously. It is very dangerous if you shuffle.',
  recipe: [
    'Hit the centre early with ...c5. The London\'s dark-squared bishop has left the queenside, so d4 and b2 are the two squares White has quietly weakened.',
    'Play ...Qb6 to attack b2 and d4 at once. This is the move London players like least, because there is no comfortable way to defend b2.',
    'If White answers Qb3 offering the trade, play ...c4! first. Gaining the tempo before the queens come off is what turns an equal position into a pleasant one.',
    'After the queens trade on b6, recapture with the a-pawn. The half-open a-file and the queenside majority are your long-term assets.',
    'Get the light-squared bishop out to f5 before ...e6 shuts it in. The London player wants to trade it with Bd3 - make them spend a tempo on it.',
    'Never take on b2 with the queen when White has played Nc3. The pawn is poisoned and Nb5 wins.',
  ],
  summary:
    'Meet the London with ...c5 and ...Qb6, hitting the two squares the bishop on f4 has left behind. When White offers the queen trade with Qb3, insert ...c4 first, recapture on b6 with the a-pawn, and play against the queenside.',
  traps: [
    {
      id: 'london-poisoned-b2',
      name: 'The poisoned b2 pawn',
      owner: 'theirs',
      moves: ['d4', 'Nf6', 'Bf4', 'c5', 'e3', 'Qb6', 'Nc3', 'Qxb2', 'Nb5'],
      setup: 8,
      point:
        'The b2 pawn looks free after ...Qb6, and against most London move orders it very nearly is. But if White has played Nc3 and simply lets you take it, Nb5 traps the queen: the threats of Rb1 and Nc7+ come at once and Black loses the queen or gets mated on the queenside. Hit b2, but only take when White has to defend it.',
    },
    {
      id: 'london-nh5',
      name: 'Winning the bishop pair with ...Nh5',
      owner: 'ours',
      moves: ['d4', 'Nf6', 'Bf4', 'd5', 'e3', 'c5', 'c3', 'Nc6', 'Nd2', 'Nh5', 'Bg3', 'Nxg3', 'hxg3', 'Qb6'],
      setup: 9,
      point:
        'Once White has committed the knight to d2, the bishop on f4 has only one square. ...Nh5 forces Bg3, and taking on g3 hands you the bishop pair while wrecking nothing of your own. It is worth knowing precisely because the whole London depends on that bishop.',
    },
  ],
  tree: [
    {
      san: 'd4',
      label: 'Queen\'s pawn',
      idea: 'The London always starts here.',
      children: [
        {
          san: 'Nf6',
          idea: 'Develop and take e4 away. Keeping the game flexible costs nothing.',
          hint: 'Develop a knight to its natural square and stop White from taking the whole centre.',
          mistakes: [
            { san: 'd5', deliberate: true, why: 'Perfectly sound and it also reaches this structure, but the knight move keeps more options and gives White fewer free tempi.' },
            { san: 'g6', why: 'Against the London a kingside fianchetto is comfortable but slow - White gets the whole set-up for free and you have not challenged the centre at all.' },
          ],
          children: [
            {
              san: 'Bf4',
              label: 'London System',
              idea: 'There it is: the bishop is out before e3 locks it in. From here White will play the same set-up whatever you do.',
              children: [
                {
                  san: 'd5',
                  idea: 'Take a share of the centre. With pawns on d5 and, soon, c5, White\'s d4 pawn has to be defended rather than advanced.',
                  hint: 'Match White in the centre with the pawn that also opens your light-squared bishop.',
                  mistakes: [
                    { san: 'g6', why: 'Playable, but it gives White the whole London set-up free of charge and a very comfortable Ne5 to look forward to.' },
                    { san: 'e6', why: 'Solid but it shuts in the c8-bishop, which is exactly the piece the London tries to smother. Keep its diagonal open for now.' },
                  ],
                  children: [
                    {
                      san: 'e3',
                      label: 'Main line',
                      idea: 'The standard London: the pawn supports d4 now that the bishop is safely outside.',
                      children: [
                        {
                          san: 'c5',
                          idea: 'The critical move. It hits d4, and because the dark-squared bishop has gone to f4 there is nothing covering b2 behind it.',
                          hint: 'Challenge the pawn that the bishop on f4 is supposed to be supporting.',
                          mistakes: [
                            { san: 'e6', why: 'Comfortable but passive. It locks in your best remaining minor piece and lets White build the ideal set-up unopposed.' },
                            { san: 'Bf5', why: 'The right square for this bishop, but the centre comes first: after c4 White gets a big game before you are ready.' },
                            { san: 'Nc6', why: 'Not a mistake in spirit, but the knight blocks the c-pawn, and the c-pawn is the piece of artillery that makes this position work.' },
                          ],
                          children: [
                            {
                              san: 'c3',
                              label: 'Main line',
                              idea: 'White props up d4 and keeps the structure intact. It also means b2 now has only the queen behind it.',
                              children: [
                                {
                                  san: 'Qb6',
                                  idea: 'The move London players dread: it hits b2 and adds a second attacker to d4. White has no comfortable way to defend both.',
                                  hint: 'Bring out the piece that attacks both the pawn behind the bishop and the pawn in front of it.',
                                  mistakes: [
                                    { san: 'Nc6', why: 'A good move but it is not the one that asks the question. The queen on b6 is what forces White to make a concession.' },
                                    { san: 'cxd4', why: 'Releasing the tension helps White: cxd4 or exd4 gives a clean structure with no weak b2 to worry about.' },
                                    { san: 'e6', why: 'Solid but it hands White a free move and shuts in the bishop. The queen sortie is what makes this whole plan work.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Qb3',
                                      label: 'Main line',
                                      idea: 'The most common answer: White offers the queen trade rather than watch b2 fall.',
                                      children: [
                                        {
                                          san: 'c4',
                                          idea: 'Insert this before trading. It gains a tempo on the queen, fixes the queenside, and means the recapture on b6 comes with a healthy structure.',
                                          hint: 'Before you agree to the trade, push the pawn that attacks White\'s queen.',
                                          mistakes: [
                                            { san: 'Qxb3', why: 'Trading immediately is playable but throws away the free tempo. Push first, then let White take.' },
                                            { san: 'Nc6', why: 'Now White is happy to play Qxb6 axb6 on their own terms, or even to keep queens on. Take the tempo while it is there.' },
                                            { san: 'cxd4', why: 'It releases the tension for nothing and lets White\'s queen sit comfortably on b3 hitting both b6 and d5.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Qxb6',
                                              label: 'Main line',
                                              idea: 'The queens come off. White has gained nothing from the exchange and lost the chance to attack.',
                                              children: [
                                                {
                                                  san: 'axb6',
                                                  idea: 'Always with the a-pawn. The half-open a-file points straight at a2, and the doubled b-pawns control c5 and a5 - useful squares, not weak ones.',
                                                  hint: 'Recapture with the pawn that opens a file for your rook.',
                                                  mistakes: [
                                                    { san: 'Nbd7', why: 'You must take the queen. Leaving it there loses material outright.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Nd2',
                                                      label: 'Main line',
                                                      idea: 'White develops and eyes the b3 and e5 squares.',
                                                      children: [
                                                        {
                                                          san: 'Nc6',
                                                          idea: 'Develop with a purpose: the knight eyes a5 and b4, and from a5 it can land on b3.',
                                                          hint: 'Develop the queen\'s knight towards the queenside squares your pawn structure has opened up.',
                                                          mistakes: [
                                                            { san: 'e6', why: 'Not wrong, but it locks in the bishop that you want on f5. Develop the pieces that need the open diagonals first.' },
                                                            { san: 'b5', why: 'Too committal. The b-pawn on b6 is doing useful work covering c5 and a5; pushing it just gives White the a5 square.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Be2',
                                                              label: 'Main line',
                                                              idea: 'White develops modestly. With the queens off and the centre fixed, there is no attack to be had.',
                                                              children: [
                                                                {
                                                                  san: 'Bf5',
                                                                  idea: 'The bishop takes its best diagonal before ...e6 shuts it in. This is the piece the London usually smothers.',
                                                                  hint: 'Get your last problem piece outside the pawn chain before you close it.',
                                                                  mistakes: [
                                                                    { san: 'e6', why: 'One move too soon - it entombs the light-squared bishop for the rest of the game. Get it out first.' },
                                                                    { san: 'Na5', why: 'The knight is going there eventually, but the bishop has only one moment to escape and this is it.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Anti-London, main line with 5...c4',
                                                                    plans: [
                                                                      'Play ...e6 next, now that the bishop is safely outside, then ...Be7 and castle. Your structure is fixed and comfortable.',
                                                                      'The plan is ...Na5 and ...Nb3 or ...Ra4 - the queenside is where you have the extra space and the open file.',
                                                                      'Keep an eye on b2 and a2. With the a-file half open and your pawn on c4, White\'s queenside pawns are permanently a little loose.',
                                                                      'White will try b2-b3 to break the bind. Answer ...cxb3 and recapture with the a-pawn or the knight, keeping the file open.',
                                                                      'Do not hurry. With queens off and the centre locked, you have no weaknesses; improve the pieces and let White find a plan.',
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
                                                      san: 'Na3',
                                                      label: 'Heading for b5',
                                                      idea: 'The knight takes the route to b5 and c7, hoping to make use of the hole your queenside pawns left.',
                                                      children: [
                                                        {
                                                          san: 'e6',
                                                          idea: 'Take b5 and d6 away from the knight before it gets there. With the queens off there is no hurry about the bishop.',
                                                          hint: 'Cover the squares the knight on a3 is heading for.',
                                                          mistakes: [
                                                            { san: 'Bf5', why: 'Good in the other line, but here Nb5 comes at once and the knight on c7 would be a genuine nuisance. Stop it first.' },
                                                            { san: 'Nc6', why: 'It develops, but it does nothing about Nb5 - and after Nb5 the a7 and c7 squares become real problems.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Be2',
                                                              label: 'Main line',
                                                              idea: 'White develops and castles, having achieved very little with the knight tour.',
                                                              children: [
                                                                {
                                                                  san: 'Bd6',
                                                                  idea: 'Offer the trade of the London bishop. Every trade helps you here, because White has no attack and you have the better structure.',
                                                                  hint: 'Challenge the bishop the whole London system is built around.',
                                                                  mistakes: [
                                                                    { san: 'Be7', why: 'Passive. The bishop on d6 offers the trade of White\'s best piece; on e7 it does nothing at all.' },
                                                                    { san: 'b5', why: 'It looks like it stops Nb5 but it walks into Nc2-b4 or a2-a4 and just loosens your own queenside.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Anti-London, 7.Na3',
                                                                    plans: [
                                                                      'Trade on f4 if White allows it. Every piece that comes off makes your queenside majority more valuable.',
                                                                      'Complete with ...Ne7 or ...Nbd7 and castle; then ...Ra4 or ...Na5 to press the queenside.',
                                                                      'The knight on a3 is misplaced. Keep b5 covered and it will have to come back via c2.',
                                                                      'Remember the pawn break b2-b3 is White\'s only counterplay. Meet it by keeping a rook on the a-file.',
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
                                      san: 'Qc1',
                                      label: 'Sidestepping the trade',
                                      idea: 'White tucks the queen away to keep b2 defended without trading. It is solid but passive.',
                                      children: [
                                        {
                                          san: 'Nc6',
                                          idea: 'Simple development. White\'s queen on c1 is doing nothing, so bring another attacker towards the centre.',
                                          hint: 'White has just made a purely defensive move. Answer it with a developing one.',
                                          mistakes: [
                                            { san: 'Qxb2', why: 'The pawn is defended by the queen on c1. Taking it simply loses the queen.' },
                                            { san: 'cxd4', why: 'Releasing the tension is exactly what White\'s awkward queen placement needs. Keep the pressure and develop.' },
                                            { san: 'c4', why: 'The push works when it gains a tempo on a queen on b3. With the queen on c1 it only fixes the structure and frees White\'s d4 pawn from any pressure.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Nf3',
                                              label: 'Main line',
                                              idea: 'White finally develops the kingside knight.',
                                              children: [
                                                {
                                                  san: 'Bf5',
                                                  idea: 'Out before ...e6. With White\'s queen tucked on c1 there is no tactic against b7, so this is the moment.',
                                                  hint: 'Develop your worst piece while nothing is attacking b7.',
                                                  mistakes: [
                                                    { san: 'e6', why: 'It shuts in the bishop with no compensation. In every anti-London line the light-squared bishop comes out first.' },
                                                    { san: 'Bg4', why: 'Playable, but with the knight already on f3 and h2-h3 coming, the bishop ends up trading itself off or retreating. f5 is the better diagonal here.' },
                                                  ],
                                                  end: {
                                                    name: 'Anti-London, 5.Qc1',
                                                    plans: [
                                                      'Play ...e6, ...Be7 and castle. Your pieces are all out and White\'s queen has spent a move going backwards.',
                                                      'The pressure on d4 does not go away. Keep ...c5 and ...Nc6 pointed at it and add ...Rc8 or ...Qa5.',
                                                      'If White plays Nbd2 and Ne5, meet it with ...Nxe5 dxe5 Nd7, when the pawn on e5 is weak and your knight comes to c5.',
                                                      'Consider ...Nh5 at the right moment: with the bishop on f4 short of squares, winning the bishop pair is often available.',
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
