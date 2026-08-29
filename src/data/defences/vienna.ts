import type { Defence } from '../types'

export const vsVienna: Defence = {
  kind: 'defence',
  id: 'vs-vienna',
  name: 'Vienna Game',
  eco: 'C26',
  side: 'black',
  system: 'Vienna',
  family: 'e4',
  recognisedBy: {
    moves: '1.e4 e5 2.Nc3',
    tell: 'The queen\'s knight comes out before the king\'s knight. White is keeping the f-pawn free so that f2-f4 can come with the centre already defended.',
  },
  theirPlan:
    'The Vienna is a King\'s Gambit with the safety catch on. By playing Nc3 first, White defends e4 and can then play f2-f4 without allowing ...Qh4+. If Black answers on autopilot with ...Nc6 and ...Bc5, White gets f4, fxe5 and a strong centre with a free attack. There is also a nasty bishop line - 3.Bc4 - built entirely around the trick 3...Nxe4 4.Qh5!, which wins material for White in a way that catches a lot of people once.',
  recipe: [
    'Play 2...Nf6. It develops, attacks e4, and means that f2-f4 can always be met by the central counter-strike.',
    'When White plays 3.f4, hit back with ...d5! immediately. Not ...exf4 - the central break is what refutes the gambit rather than accepting it.',
    'After fxe5 Nxe4 your knight is beautifully placed on e4 and White has no way to shift it easily.',
    'Continue ...Be7, ...O-O and then ...f5 - taking en passant is fine for you, and if White declines, the knight on e4 is a permanent guest.',
    'Against 3.Bc4, do NOT take on e4. Play ...Nc6 and then ...Na5 to trade off that bishop, which is the piece the whole line depends on.',
    'Against 3.g3, play ...d5 straight away. White has spent a move on a fianchetto and cannot afford to leave the centre alone.',
  ],
  summary:
    'Answer the Vienna with 2...Nf6 and, when the gambit comes with 3.f4, strike in the centre with ...d5 rather than taking. The knight lands on e4 and White\'s attack never gets going.',
  traps: [
    {
      id: 'vienna-frankenstein',
      name: 'The Frankenstein-Dracula trap',
      owner: 'theirs',
      moves: ['e4', 'e5', 'Nc3', 'Nf6', 'Bc4', 'Nxe4', 'Qh5'],
      setup: 6,
      point:
        'Taking the pawn on e4 looks like a free move because the knight on c3 is pinned to nothing - but Qh5! hits f7 and the knight at once. Black has to play ...Nd6 and after Bb3 White has a lead in development and a monstrous initiative, or Black loses material outright. Against 3.Bc4 the correct plan is ...Nc6 and ...Na5, trading the dangerous bishop instead of grabbing a pawn.',
    },
    {
      id: 'vienna-d5-break',
      name: 'The ...d5 refutation',
      owner: 'ours',
      moves: ['e4', 'e5', 'Nc3', 'Nf6', 'f4', 'd5'],
      setup: 5,
      point:
        'The Vienna Gambit only works if Black takes on f4. Meeting 3.f4 with ...d5! turns the tables: the e4 pawn is attacked twice, and after fxe5 Nxe4 Black has a knight in the middle of the board, a healthy structure, and no attack to defend against. Learn it as a reflex - centre answers wing.',
    },
  ],
  tree: [
    {
      san: 'e4',
      label: 'King\'s pawn',
      idea: 'The standard start.',
      children: [
        {
          san: 'e5',
          idea: 'The classical answer, which is what invites the Vienna.',
          hint: 'Answer the king\'s pawn with your own.',
          mistakes: [
            { san: 'c5', deliberate: true, why: 'The Sicilian sidesteps the Vienna, which is fine in itself, but this defence is about knowing the answer when it appears on the board.' },
            { san: 'd5', why: 'The Scandinavian is playable but after exd5 Qxd5 Nc3 White develops with tempo, which is the opposite of what you want against a Vienna player.' },
          ],
          children: [
            {
              san: 'Nc3',
              label: 'Vienna Game',
              idea: 'The queen\'s knight first. White defends e4 so that f2-f4 becomes possible without allowing ...Qh4+.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Develop and hit e4. Now White\'s f2-f4 can always be answered in the centre, which is what takes the sting out of the whole system.',
                  hint: 'Develop the knight that attacks White\'s centre pawn.',
                  mistakes: [
                    { san: 'Nc6', why: 'Playable, but it lets White choose between f4 and Bc4 lines with a free hand. The knight on f6 is the move that hits back at e4 straight away.' },
                    { san: 'Bc5', why: 'It develops but does nothing about the coming f2-f4, and after fxe5 the bishop on c5 does not stop anything.' },
                    { san: 'd6', why: 'Solid but passive: it shuts in the f8-bishop and gives White a free hand with f4, Nf3 and Bc4.' },
                  ],
                  children: [
                    {
                      san: 'f4',
                      label: 'Vienna Gambit',
                      idea: 'The gambit. With e4 defended by the knight, ...Qh4+ is no longer available and White really is threatening fxe5.',
                      children: [
                        {
                          san: 'd5',
                          idea: 'The refutation. Instead of taking on f4, hit the centre: the pawn on e4 is now attacked twice and White\'s whole idea collapses.',
                          hint: 'Answer a wing attack with a strike in the centre.',
                          mistakes: [
                            { san: 'exf4', why: 'Accepting is exactly what White wants: e4-e5 comes with tempo on your knight and White has a big centre and open lines for the attack.' },
                            { san: 'Nc6', why: 'It develops but fxe5 Nxe5 d4 kicks the knight and gives White the centre and the initiative for free.' },
                            { san: 'd6', why: 'Passive: fxe5 dxe5 Qxd8+ Kxd8 leaves you without castling rights and with nothing to show for it.' },
                          ],
                          children: [
                            {
                              san: 'fxe5',
                              label: 'Main line',
                              idea: 'White takes, which is the only consistent try.',
                              children: [
                                {
                                  san: 'Nxe4',
                                  idea: 'The knight lands in the middle of the board, supported by nothing but supportable by everything. This is the position ...d5 was played for.',
                                  hint: 'Recapture in the centre with the piece that lands on the strongest square.',
                                  mistakes: [
                                    { san: 'dxe4', why: 'It regains the pawn but the pawn on e4 is a target and after d3 White breaks up your centre with a good game.' },
                                    { san: 'Ng4', why: 'The knight has no future on g4 - after d4 and h3 it has to come back and you have lost time and a pawn.' },
                                    { san: 'Nfd7', why: 'Passive: it undevelops, and after d4 White has a big centre and an extra pawn.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nf3',
                                      label: 'Main line',
                                      idea: 'White develops and supports the pawn on e5.',
                                      children: [
                                        {
                                          san: 'Be7',
                                          idea: 'Simple development, preparing to castle. There is no need for anything clever - the knight on e4 is not going anywhere.',
                                          hint: 'Develop the bishop that lets you castle next move.',
                                          mistakes: [
                                            { san: 'Nxc3', why: 'Trading your best piece for a knight helps White: bxc3 gives a strong centre and the b-file, and you have given up your outpost for nothing.' },
                                            { san: 'Bg4', why: 'The pin is answered by Qe2 or Be2 and after h3 your bishop has to make a decision, while your king is still in the centre.' },
                                            { san: 'Bf5', why: 'Playable, but the bishop can be hit by d3 and Nd4, and the king should get to safety first.' },
                                          ],
                                          children: [
                                            {
                                              san: 'd4',
                                              label: 'Main line',
                                              idea: 'White builds the centre and challenges the knight from below.',
                                              children: [
                                                {
                                                  san: 'O-O',
                                                  idea: 'King to safety. With the knight on e4 firmly placed and no white pieces near your king, this is simply the most useful move.',
                                                  hint: 'Your pieces are fine. Get the king out of the middle.',
                                                  mistakes: [
                                                    { san: 'Nxc3', why: 'It still helps White - bxc3 gives a broad centre and an open file, and your knight was the best piece on the board.' },
                                                    { san: 'f5', why: 'The right idea one move too soon: exf6 en passant comes while your king is still on e8 and the e-file opens on you.' },
                                                    { san: 'c5', why: 'Opening the centre with your king on e8 is exactly what a gambit player is hoping for.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Bd3',
                                                      label: 'Main line',
                                                      idea: 'White challenges the knight on e4 and points the bishop at h7.',
                                                      children: [
                                                        {
                                                          san: 'f5',
                                                          idea: 'Support the knight with a pawn. Taking en passant opens the f-file straight at White\'s uncastled king, so White usually has to allow the knight to stay.',
                                                          hint: 'Support your knight in the centre with a pawn, and dare White to take en passant.',
                                                          mistakes: [
                                                            { san: 'Nxc3', why: 'Trading now hands White the bishop pair, a broad centre and an open b-file - everything the gambit was originally paying for.' },
                                                            { san: 'Nc6', why: 'Natural but it ignores the threat to your best piece: Bxe4 dxe4 and the pawn on e4 falls next.' },
                                                            { san: 'Bg4', why: 'It develops but leaves the knight on e4 hanging to Bxe4, and the pin is easily broken with Be3 and Qd2.' },
                                                          ],
                                                          end: {
                                                            name: 'Vienna Gambit, 3...d5 main line',
                                                            plans: [
                                                              'If White takes en passant, recapture with the bishop or the rook and use the open f-file - White\'s king is still in the centre.',
                                                              'The knight on e4 is your best piece. Support it with ...f5, ...Nc6 and ...Be6 and it stays there all game.',
                                                              'The pawn on e5 is White\'s only asset. Undermine it with ...c5 or ...Nc6 and it becomes a permanent weakness.',
                                                              'Play ...Be6 and ...Nc6 to finish development, then double on the f-file.',
                                                              'Material is level and your structure is the healthier one. There is nothing to fear here - the gambit has already failed.',
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
                              san: 'exd5',
                              label: 'Taking the other way',
                              idea: 'White grabs the d-pawn instead, hoping to keep an extra pawn and a big centre.',
                              children: [
                                {
                                  san: 'e4',
                                  idea: 'Push past. The pawn on e4 takes f3 and d3 away from White\'s pieces and the knight on d5 can always be chased later.',
                                  hint: 'Do not recapture - push the centre pawn forward and take squares away from White\'s knight.',
                                  mistakes: [
                                    { san: 'Nxd5', why: 'Sound, and the engine slightly prefers it. This repertoire pushes past instead: the pawn on e4 takes f3 and d3 away from White\'s pieces and hands you a plan you can play without calculation.', deliberate: true },
                                    { san: 'exf4', why: 'Now White is simply a pawn up with a strong centre and you have opened lines at your own king.' },
                                    { san: 'Qxd5', why: 'Nxd5 wins the queen - the knight on c3 defends d5.' },
                                  ],
                                  end: {
                                    name: 'Vienna Gambit, 4.exd5',
                                    plans: [
                                      'The pawn on e4 is a bone in White\'s throat: no knight can use f3 or d3, and the pawn is easy to defend with ...Bf5 and ...Nbd7.',
                                      'Regain the pawn on d5 at your leisure with ...Nxd5 once White\'s knight leaves c3, or leave it and play against the weak d4 and e3 squares.',
                                      'Develop with ...Bc5 or ...Bd6, castle, and think about ...Re8 with the half-open file.',
                                      'White\'s f4 pawn has left permanent holes on e3 and g3. A knight or a queen landing there is very hard to dislodge.',
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
                      san: 'Bc4',
                      label: 'The bishop first',
                      idea: 'White develops and aims at f7, hoping you will grab the e4 pawn and walk into Qh5.',
                      children: [
                        {
                          san: 'Nc6',
                          idea: 'Develop calmly. Taking on e4 walks into Qh5 with a huge attack, so develop instead and prepare to trade off the dangerous bishop.',
                          hint: 'Do not take the pawn. Develop a knight and prepare to challenge the bishop.',
                          mistakes: [
                            { san: 'Nxe4', why: 'This is the trap the whole line exists for: Qh5! hits f7 and the knight at once, and after ...Nd6 Bb3 White has a raging attack for the pawn.' },
                            { san: 'Bc5', why: 'Playable, but Qg4 or f4 come with real force. Developing the knight and heading for a5 to trade the bishop is more reliable.' },
                            { san: 'd6', why: 'Solid but passive: it shuts in the bishop and White gets f4 and Nf3 with a comfortable game.' },
                          ],
                          children: [
                            {
                              san: 'd3',
                              label: 'Main line',
                              idea: 'White supports the centre and settles for a slow game.',
                              children: [
                                {
                                  san: 'Na5',
                                  idea: 'Off to the edge, but with a purpose: trading the bishop on c4 removes the only piece with any attacking potential in White\'s position.',
                                  hint: 'Attack the bishop that every White attacking idea depends on, even if the knight looks odd on the edge.',
                                  mistakes: [
                                    { san: 'Bc5', why: 'Reasonable, but the bishop on c4 is the piece that makes White\'s position dangerous. Trade it while you can.' },
                                    { san: 'Nxe4', why: 'Still the trap: Nxe4 dxe4 and White simply wins the piece back with an extra tempo and a better position.' },
                                    { san: 'h6', why: 'Slow and unnecessary - there is nothing on g5 to worry about yet, and the bishop on c4 is the real problem.' },
                                  ],
                                  end: {
                                    name: 'Vienna, 3.Bc4 with ...Na5',
                                    plans: [
                                      'Take on c4 next move. The doubled c-pawns White gets are not enough compensation for losing the bishop pair and the whole attacking plan.',
                                      'After the trade, bring the knight back with ...Nc6 or leave it on a5 heading for c6 via b7 if the position calls for it.',
                                      'Follow with ...Bc5 or ...Be7, ...d6 and castle. There is no attack left to worry about.',
                                      'If White avoids the trade with Bb3, play ...Nxb3 anyway - axb3 leaves White with a permanently damaged queenside.',
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
                      san: 'g3',
                      label: 'Fianchetto Vienna',
                      idea: 'A slower plan: the bishop goes to g2 and White plays for a long positional game.',
                      children: [
                        {
                          san: 'd5',
                          idea: 'Strike in the centre while White spends a move on the fianchetto. This is always the answer to a slow flank set-up.',
                          hint: 'White has spent a move on a wing. Take the centre.',
                          mistakes: [
                            { san: 'Bc5', why: 'Playable, but with White committed to a slow plan, the strongest reply is the immediate central break.' },
                            { san: 'Nc6', why: 'Fine, but it lets Bg2 and Nge2 come with a comfortable set-up. Hit the centre while White is not ready.' },
                            { san: 'g6', why: 'Copying the fianchetto is passive here: White is a tempo ahead and gets the better version of the same structure.' },
                          ],
                          children: [
                            {
                              san: 'exd5',
                              label: 'Main line',
                              idea: 'White takes, and the position opens up.',
                              children: [
                                {
                                  san: 'Nxd5',
                                  idea: 'Recapture with the knight, which now sits in the centre and can trade itself off on c3 to damage White\'s structure.',
                                  hint: 'Take back with the piece that lands on the best square.',
                                  mistakes: [
                                    { san: 'Qxd5', why: 'Nxd5 wins the queen - the knight on c3 defends d5. Always check what defends the square before taking with the queen.' },
                                    { san: 'e4', why: 'Playable but here White simply plays Bg2 hitting the pawn and Ng1-e2, and the pawn on e4 becomes weak rather than strong.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Bg2',
                                      label: 'Main line',
                                      idea: 'The bishop takes the long diagonal and eyes d5.',
                                      children: [
                                        {
                                          san: 'Nxc3',
                                          idea: 'Now the trade is right: it wrecks White\'s queenside structure before the bishop on g2 can be supported by pieces.',
                                          hint: 'Trade the knight while the recapture damages White\'s pawns.',
                                          mistakes: [
                                            { san: 'Nb6', why: 'Retreating gives White a free tempo and Nf3, O-O and d4 with a very comfortable game.' },
                                            { san: 'Be6', why: 'Reasonable, but Ne4 or Nxd5 comes and you have lost the chance to double White\'s pawns.' },
                                            { san: 'c6', why: 'Too slow. It defends the knight but Nge2 and O-O give White an easy game with the better structure.' },
                                          ],
                                          children: [
                                            {
                                              san: 'bxc3',
                                              label: 'Main line',
                                              idea: 'Forced in practice - dxc3 would leave the d-file wide open and the queens traded.',
                                              children: [
                                                {
                                                  san: 'Bd6',
                                                  idea: 'Develop and hold e5. White\'s doubled c-pawns are a long-term weakness and there is nothing to attack you with.',
                                                  hint: 'Develop the bishop to the square that also defends your centre pawn.',
                                                  mistakes: [
                                                    { san: 'Bc5', why: 'Playable, but on d6 the bishop defends e5 - and holding that pawn is what makes White\'s structural weakness matter.' },
                                                    { san: 'Qd7', why: 'The queen has nothing to do on d7 and it blocks the bishop on c8. Develop the pieces that hold your centre together first.' },
                                                  ],
                                                  end: {
                                                    name: 'Vienna, 3.g3 fianchetto',
                                                    plans: [
                                                      'Castle, then ...Nc6 or ...Nd7 and ...Re8. Simple development is enough here.',
                                                      'White\'s doubled c-pawns are the story of the position. Play ...c5 or ...b6 and ...Ba6 to fix them and press.',
                                                      'The pawn on e5 is your space. Defend it and White\'s bishop on g2 has nothing to bite on.',
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
