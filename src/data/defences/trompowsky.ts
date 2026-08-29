import type { Defence } from '../types'

export const vsTrompowsky: Defence = {
  kind: 'defence',
  id: 'vs-trompowsky',
  name: 'Trompowsky Attack',
  eco: 'A45',
  side: 'black',
  system: 'Trompowsky',
  family: 'd4',
  recognisedBy: {
    moves: '1.d4 Nf6 2.Bg5',
    tell: 'The bishop pins nothing and attacks your knight on move two. White wants to take on f6 and give you doubled pawns before you have decided on an opening.',
  },
  theirPlan:
    'The Trompowsky is a sidestep: White refuses to play c4 and instead threatens Bxf6, wrecking your kingside structure and taking the game out of every book you have read. If you allow it on White\'s terms, you spend the game with doubled f-pawns and no clear plan. What the Trompowsky does not have is a grip on the centre - White has spent a move on a bishop instead of a pawn, and the d4 pawn is left with very little support.',
  recipe: [
    'Play 2...Ne4 at once. It attacks the bishop, refuses the doubled pawns, and asks White to justify the second move.',
    'After the bishop retreats to f4, take the centre with ...d5 and then hit d4 with ...c5. White has no c-pawn to support it.',
    'Follow with ...Nc6 and ...Qb6. The queen on b6 hits b2 and d4 at the same time, exactly as it does against the London.',
    'Get the light-squared bishop to f5 before playing ...e6. Trompowsky positions are all about which side gets the better minor pieces.',
    'If White plays f2-f3 to kick your knight, remember the ...Qa5+ resource first: the check gains time and can pick up material if White answers c2-c3 carelessly.',
  ],
  summary:
    'Meet the Trompowsky with 2...Ne4, refusing the doubled pawns and gaining time on the bishop. Then take the centre with ...d5 and ...c5 and press the d4 and b2 squares, which White has left without pawn support.',
  traps: [
    {
      id: 'tromp-qa5-nxc3',
      name: 'The ...Qa5+ and ...Nxc3 shot',
      owner: 'ours',
      moves: ['d4', 'Nf6', 'Bg5', 'Ne4', 'Bf4', 'c5', 'f3', 'Qa5+', 'c3', 'Nxc3'],
      setup: 9,
      point:
        'If White plays f2-f3 to kick the knight, ...Qa5+ comes with tempo and c2-c3 is the natural block - but it hangs everything. ...Nxc3! wins material, because the knight is defended by the queen along the a5-e1 diagonal and taking it drops the b2 pawn and the d4 pawn with check. This is the single most valuable tactic to know in the Trompowsky.',
    },
    {
      id: 'tromp-bxf6',
      name: 'Doubling the pawns for free',
      owner: 'theirs',
      moves: ['d4', 'Nf6', 'Bg5', 'd5', 'Bxf6', 'exf6', 'e3', 'Bd6', 'c4'],
      setup: 8,
      point:
        'Answering 2.Bg5 with 2...d5 is not losing, but it lets White take on f6 for nothing. Black gets the bishop pair, White gets a permanently better structure and a free hand with c2-c4. The moral: challenge the bishop before it can trade itself off on its own terms.',
    },
  ],
  tree: [
    {
      san: 'd4',
      label: 'Queen\'s pawn',
      idea: 'A normal start.',
      children: [
        {
          san: 'Nf6',
          idea: 'Develop and cover e4. This is also the move that invites the Trompowsky, so it is the move this defence starts from.',
          hint: 'Develop a knight and stop White taking the whole centre.',
          mistakes: [
            { san: 'd5', deliberate: true, why: 'Sound, but it steers into Queen\'s Gambit territory rather than the Trompowsky. This defence exists for the moment White plays Bg5.' },
            { san: 'f5', why: 'The Dutch invites 2.Bg5 anyway, but from a much sharper structure with far more to know. Keep it simple.' },
          ],
          children: [
            {
              san: 'Bg5',
              label: 'Trompowsky Attack',
              idea: 'The bishop attacks the knight and threatens to double your pawns before the game has really begun.',
              children: [
                {
                  san: 'Ne4',
                  idea: 'The principled answer. The knight attacks the bishop, refuses the doubled pawns, and makes White move the same piece twice.',
                  hint: 'The bishop is attacking your knight and is defended by nothing. Attack it back.',
                  mistakes: [
                    { san: 'd5', why: 'Sound, and a main line - but Bxf6 exf6 hands White a permanently better pawn structure and White has given up nothing in return. This repertoire refuses the trade instead.', deliberate: true },
                    { san: 'e6', why: 'Solid, but it allows Bxf6 Qxf6 and White develops with e4 and Nc3 having gained time. The knight jump keeps the initiative.' },
                    { san: 'c5', why: 'Sharp, but after Bxf6 the choice between doubled pawns and gxf6 is unpleasant, and d4-d5 leaves White with a space edge.' },
                  ],
                  children: [
                    {
                      san: 'Bf4',
                      label: 'Main line',
                      idea: 'The bishop steps back to a safe, useful diagonal. White accepts having spent two moves on it.',
                      children: [
                        {
                          san: 'd5',
                          idea: 'Take the centre while the knight on e4 is well placed. Nothing can chase it away quickly, so build behind it.',
                          hint: 'Stake a claim in the centre with the pawn that supports your advanced knight.',
                          mistakes: [
                            { san: 'c5', why: 'A reasonable move, but the knight on e4 needs a pawn on d5 behind it. Without one, f2-f3 followed by e2-e4 comes with a huge centre.' },
                            { san: 'e6', why: 'Too modest - it shuts in the c8-bishop before the position needs it and lets White play f3 and e4 in comfort.' },
                          ],
                          children: [
                            {
                              san: 'e3',
                              label: 'Main line',
                              idea: 'White supports d4 and prepares to develop. It is solid, but the c-pawn is still at home.',
                              children: [
                                {
                                  san: 'c5',
                                  idea: 'Hit d4 while White has no c-pawn to back it up. This is the structural point of the whole line.',
                                  hint: 'Attack the centre pawn that has no pawn defending it.',
                                  mistakes: [
                                    { san: 'e6', why: 'Solid but slow, and it shuts in your bishop. The pawn on d4 is the target and it will not be undefended forever.' },
                                    { san: 'Bf5', why: 'The bishop is going there, but the c5 break has to come while White\'s queenside is still undeveloped.' },
                                    { san: 'Nc6', why: 'Natural, but it blocks the c-pawn - and the c-pawn is the piece of the plan that actually attacks something.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Bd3',
                                      label: 'Main line',
                                      idea: 'White develops and challenges the knight on e4.',
                                      children: [
                                        {
                                          san: 'Nc6',
                                          idea: 'Add a second attacker to d4 and prepare ...Qb6. The knight on e4 is not going anywhere while it is supported by the d5 pawn.',
                                          hint: 'Bring another piece to bear on the pawn you attacked last move.',
                                          mistakes: [
                                            { san: 'Nd7', why: 'The knight is passive on d7 and it shuts in the c8-bishop, which is the piece you want on f5 in this structure.' },
                                            { san: 'cxd4', why: 'Releasing the tension helps White: exd4 gives a clean structure and the bishop on f4 suddenly has a job.' },
                                            { san: 'e6', why: 'It locks in the bishop and does nothing about the pawn on d4. Develop towards the target instead.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Nf3',
                                              label: 'Main line',
                                              idea: 'White develops and defends d4 a second time.',
                                              children: [
                                                {
                                                  san: 'Qb6',
                                                  idea: 'The familiar double attack: b2 and d4 at once. White has to spend a move solving it.',
                                                  hint: 'Bring the queen to the square that hits two pawns at the same time.',
                                                  mistakes: [
                                                    { san: 'Bf5', why: 'A good square, but the queen sortie is the move that actually forces a concession. Play the forcing move first.' },
                                                    { san: 'cxd4', why: 'Trading in the centre resolves White\'s only problem for free and hands over the tension you have spent four moves building.' },
                                                    { san: 'e6', why: 'It shuts in the bishop just as the position is about to open. There is still no hurry to play this pawn.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Qc1',
                                                      label: 'Main line',
                                                      idea: 'White defends b2 the only way that does not lose material or wreck the structure. It is passive, and Black is comfortable.',
                                                      children: [
                                                        {
                                                          san: 'Bf5',
                                                          idea: 'Now the bishop comes out. With White\'s queen buried on c1 there is no tactic against b7, and the trade on d3 would suit you.',
                                                          hint: 'Develop your last minor piece while White\'s queen is stuck defending.',
                                                          mistakes: [
                                                            { san: 'Qxb2', why: 'The queen on c1 defends b2. Taking it just loses the queen.' },
                                                            { san: 'e6', why: 'One move too soon. The bishop has a free path to f5 right now and it will not have one after ...e6.' },
                                                          ],
                                                          end: {
                                                            name: 'Trompowsky, 2...Ne4 main line',
                                                            plans: [
                                                              'Play ...e6, ...Be7 and castle. Your pieces are better placed than White\'s and the knight on e4 is a permanent guest.',
                                                              'Keep the tension on d4. Play ...Rc8 and ...cxd4 only when the recapture creates a weakness you can attack.',
                                                              'If White trades on f5, recapture with the e-pawn to open the e-file and support the knight on e4.',
                                                              'White\'s queen on c1 is the worst piece on the board. Every move that keeps it there is a small victory.',
                                                              'The plan ...c4 followed by ...b5 and ...b4 works well here too, exactly as it does against the London.',
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
                                      san: 'c3',
                                      label: 'Propping up d4',
                                      idea: 'The solid answer: White supports d4 with a pawn and keeps everything defended.',
                                      children: [
                                        {
                                          san: 'Nc6',
                                          idea: 'Develop and keep the pressure. With the pawn on c3 rather than a piece, White\'s queenside development gets slower.',
                                          hint: 'Develop the knight that adds a second attacker to the centre.',
                                          mistakes: [
                                            { san: 'Qb6', why: 'Now the pawn on c3 means Qb3 comes with a comfortable trade and White has no problems at all. Develop first.' },
                                            { san: 'cxd4', why: 'cxd4 gives White exactly the structure the move c3 was played for. Keep the tension.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Nd2',
                                              label: 'Main line',
                                              idea: 'White challenges the knight on e4 and prepares to develop the kingside.',
                                              children: [
                                                {
                                                  san: 'Qb6',
                                                  idea: 'Now the queen sortie bites: with the knight on d2 rather than the queen on c1, b2 is genuinely awkward to hold.',
                                                  hint: 'With White\'s pieces committed to the centre, hit the pawn behind them.',
                                                  mistakes: [
                                                    { san: 'Nxd2', why: 'Objectively fine, but it trades your best piece for a knight that has only just moved and lets White finish development for free. This repertoire keeps the knight on e4.', deliberate: true },
                                                    { san: 'e6', why: 'It shuts in the bishop and gives White time to play Ngf3 and Bd3 with a comfortable game.' },
                                                  ],
                                                  end: {
                                                    name: 'Trompowsky, 4.c3',
                                                    plans: [
                                                      'The immediate threat is ...Nxd2 followed by ...Qxb2. White has to spend a move on Qb3 or Rb1.',
                                                      'After White defends, continue ...Bf5, ...e6, ...Be7 and castle - a comfortable, slightly better version of a London structure with colours reversed.',
                                                      'Do not trade on d2 without a reason: the knight on e4 is your best piece and White has to work to remove it.',
                                                      'The break ...c4 followed by ...b5 gains queenside space and leaves White\'s bishop on f4 with nothing to do.',
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
                      san: 'Bh4',
                      label: 'Keeping the bishop on the diagonal',
                      idea: 'White holds the pin idea and keeps an eye on d8, hoping for f2-f3 and e2-e4 with a big centre.',
                      children: [
                        {
                          san: 'c5',
                          idea: 'Strike at d4 immediately. White\'s bishop on h4 is far from the queenside and there is no c-pawn holding the centre together.',
                          hint: 'The bishop has gone even further from the queenside. Attack the centre pawn it has abandoned.',
                          mistakes: [
                            { san: 'd5', why: 'Solid, but it lets White play f3 and e4 in comfort with a big centre and the bishop eyeing d8.' },
                            { san: 'g5', why: 'It really does pick up the bishop pair, and the engine is content with it - but after Bg3 Nxg3 hxg3 your kingside is loose and the h-file points at your king. This repertoire declines that bargain.', deliberate: true },
                          ],
                          children: [
                            {
                              san: 'f3',
                              label: 'Main line',
                              idea: 'White kicks the knight and prepares e2-e4. It is the critical try, and it also weakens the a5-e1 diagonal.',
                              children: [
                                {
                                  san: 'Qa5+',
                                  idea: 'The check that changes everything. It comes with tempo, and if White blocks with c2-c3 the knight on e4 gets a free meal.',
                                  hint: 'White has just weakened a diagonal running at the king. Get your queen onto it with check.',
                                  mistakes: [
                                    { san: 'Nf6', why: 'Sound, but it gives back the tempo. The queen check first is what makes this line work; without it White simply consolidates.', deliberate: true },
                                    { san: 'g5', why: 'Sound, and messier than it looks - after fxe4 the position opens on both wings and it is your king cover that suffers. This repertoire keeps things clean instead.', deliberate: true },
                                    { san: 'cxd4', why: 'It releases the tension for nothing and after fxe4 White has a huge centre and a free game.' },
                                  ],
                                  children: [
                                    {
                                      san: 'c3',
                                      label: 'Main line',
                                      idea: 'The natural block - and the one that walks straight into ...Nxc3, which is why theory prefers Nc3 or Nd2 here.',
                                      children: [
                                        {
                                          san: 'Nf6',
                                          idea: 'The safe way to bank the profit. White has spent moves on Bg5-h4, f3 and c3 while you played useful moves and now stand better.',
                                          hint: 'You have already gained everything you need. Bring the knight back to a safe square with your extra tempi banked.',
                                          mistakes: [
                                            { san: 'cxd4', why: 'Playable, but it lets White recapture and untangle. Keeping the tension is stronger with White so far behind in development.' },
                                            { san: 'Nd6', why: 'The knight is badly placed on d6, blocking the d-pawn. f6 is the square from which it can go to d5 or h5.' },
                                          ],
                                          end: {
                                            name: 'Trompowsky, 3.Bh4 with 4...Qa5+',
                                            plans: [
                                              'Count the moves: White has played Bg5-h4, f2-f3 and c2-c3 and has not developed a piece. You have a queen out with tempo and a healthy structure.',
                                              'Follow with ...cxd4 and ...d5, or ...Nc6 and ...e6 - either way you get a normal position with an extra tempo.',
                                              'The pawn on f3 is a permanent weakness on the a7-g1 diagonal and the e3 square. Keep the queen active and think about ...e5.',
                                              'Do not let White consolidate with e2-e4 and Nc3 for free - open the position while you are ahead in development.',
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
