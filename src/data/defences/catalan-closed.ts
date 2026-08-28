import type { Defence } from '../types'

export const catalanClosed: Defence = {
  kind: 'defence',
  id: 'vs-catalan-closed',
  name: 'Catalan: keep it shut (Closed)',
  eco: 'E06',
  side: 'black',
  system: 'Catalan',
  family: 'd4',
  recognisedBy: {
    moves: '1.d4 Nf6 2.c4 e6 3.g3',
    tell: 'The same tell as the Open Catalan: g2-g3 before Nf3. What changes is your answer - you leave the pawn on d5 rather than taking on c4.',
  },
  theirPlan:
    'Identical to the Open Catalan: bishop to g2, castle, and squeeze the light squares from a8 to d5 for the rest of the game. The difference is what White gets to do when you do not take on c4. With the tension kept, White will try to build with Qc2, Nbd2 and e2-e4, or to trade on d5 and play against a slightly loose centre. There is nothing forcing about it, which is why it is so hard to play against without a plan.',
  recipe: [
    'Keep the pawn on d5 and refuse to release the tension. A pawn on d5 is a wall in front of the g2-bishop, and the wall is the whole point.',
    'Develop simply: ...Be7, castle, then ...c6. The pawn on c6 props up d5 permanently and gives your queen the a5 and b6 squares.',
    'Play ...Nbd7 rather than ...Nc6. From d7 the knight supports both ...c5 and ...e5, and it does not block your own c-pawn.',
    'Then choose a break. ...b6 and ...Bb7 followed by ...c5 is the patient plan; ...dxc4 followed by ...b5 is the sharp one if White ever leaves the c4 pawn loose.',
    'The one thing you must not do is drift. Pick a break, prepare it, and play it - a Closed Catalan where Black never breaks is a Closed Catalan Black slowly loses.',
  ],
  temperament: {
    key: 'closed',
    name: 'Closed',
    blurb: 'Build a wall on d5 and take your time. Low theory, very few ways to lose quickly, but you have to be willing to defend and wait for your break.',
  },
  summary:
    'The Closed Catalan: Black leaves the pawn on d5 as a permanent block on the long diagonal, develops with ...Be7, ...O-O, ...c6 and ...Nbd7, and only then chooses between the ...c5 and ...e5 breaks. Solid, low on theory and hard to lose quickly.',
  traps: [
    {
      id: 'catalan-closed-passive',
      drillable: false,
      name: 'The Exchange Catalan squeeze',
      owner: 'theirs',
      moves: ['d4', 'Nf6', 'c4', 'e6', 'g3', 'd5', 'Bg2', 'Be7', 'Nf3', 'O-O', 'cxd5', 'exd5', 'Nc3', 'c6', 'Qb3'],
      setup: 14,
      point:
        'After cxd5 exd5 the position looks harmless, but if Black plays on autopilot White gets Qb3 hitting b7 and d5 at once, with Bf4, Rc1 and a minority attack to follow. Meeting the exchange with ...c6 first, and then getting the bishop out to f5 or g4 before playing ...Nbd7, is what keeps the position comfortable.',
    },
  ],
  tree: [
    {
      san: 'd4',
      label: 'Queen\'s pawn',
      idea: 'The quiet start. Everything is still open.',
      children: [
        {
          san: 'Nf6',
          idea: 'Stop e2-e4 and keep every option. The knight on f6 is useful in every line that follows.',
          hint: 'Develop a knight to the square that takes e4 away from White.',
          mistakes: [
            { san: 'd5', deliberate: true, why: 'Sound, but it steers towards a Queen\'s Gambit rather than a Catalan. This defence exists to answer the g3 systems, so let White show the fianchetto first.' },
            { san: 'e6', why: 'Playable but it commits the e-pawn before you know whether White is going for a Catalan or an e4 push, and it blocks in the c8-bishop for no reason yet.' },
          ],
          children: [
            {
              san: 'c4',
              label: 'Main line',
              idea: 'White grabs the centre and keeps the Catalan open as an option.',
              children: [
                {
                  san: 'e6',
                  idea: 'Prepare ...d5 and open the f8-bishop. This is the move order that invites the Catalan, which is what we want to learn to face.',
                  hint: 'Support the coming ...d5 with a small pawn move.',
                  mistakes: [
                    { san: 'g6', deliberate: true, why: 'The King\'s Indian is a fine choice, but it dodges the Catalan question entirely instead of answering it.' },
                    { san: 'c5', why: 'The Benoni. It is a real opening, but after d4-d5 you are in a completely different game with far more theory to know.' },
                  ],
                  children: [
                    {
                      san: 'g3',
                      label: 'Catalan',
                      idea: 'The Catalan move. The bishop goes to g2 and the squeeze begins.',
                      children: [
                        {
                          san: 'd5',
                          idea: 'Occupy the centre and block the diagonal before the bishop even arrives. In this half of the repertoire, the pawn is going to stay there.',
                          hint: 'Put a pawn on the one square that shuts down the g2-bishop.',
                          mistakes: [
                            { san: 'Bb4+', deliberate: true, why: 'The Bogo-Indian check is sound but it commits a piece early and leaves the light squares unresolved. Build the wall first.' },
                            { san: 'b6', why: 'Placing the bishop on b7 without a pawn on d5 means it stares straight into White\'s bishop with an empty diagonal - and White is the one with the extra tempo.' },
                          ],
                          children: [
                            {
                              san: 'Bg2',
                              label: 'Main line',
                              idea: 'The Catalan bishop is home. Your pawn on d5 is the only thing standing in its way, so it is not moving.',
                              children: [
                                {
                                  san: 'Be7',
                                  idea: 'Simple development. The bishop does its job from e7, defends the knight and clears the way to castle.',
                                  hint: 'Develop the last minor piece between your king and the rook.',
                                  mistakes: [
                                    { san: 'dxc4', deliberate: true, why: 'This is the Open Catalan, which is sound and available as the other half of this defence. This half is about keeping the pawn on d5.' },
                                    { san: 'c6', why: 'The right idea in the wrong order. Develop and castle first - a pawn move that could be played later is never as urgent as a piece move that has to be played anyway.' },
                                    { san: 'Bb4+', why: 'The check achieves nothing now that the bishop is on g2: White blocks with Bd2 or Nc3 and you have to move the bishop again.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nf3',
                                      label: 'Main line',
                                      idea: 'White completes the kingside and prepares to castle.',
                                      children: [
                                        {
                                          san: 'O-O',
                                          idea: 'Get the king safe. Everything in the Closed Catalan is easier once you never have to check for tricks on the e-file or the a4-e8 diagonal.',
                                          hint: 'The most obviously useful move in the position.',
                                          mistakes: [
                                            { san: 'c6', why: 'Not wrong, but there is no reason to delay castling. Finish the king safety first and keep the pawn move in reserve.' },
                                            { san: 'Nbd7', why: 'The knight belongs on d7, but the king belongs off e8 first. Piece placement can wait a move; king safety cannot.' },
                                          ],
                                          children: [
                                            {
                                              san: 'O-O',
                                              label: 'Main line',
                                              idea: 'Both kings are safe and the real game starts.',
                                              children: [
                                                {
                                                  san: 'c6',
                                                  idea: 'The keystone. The pawn on c6 makes d5 permanent, gives the queen a5 and b6, and prepares either ...b6 and ...Bb7 or ...dxc4 and ...b5.',
                                                  hint: 'Prop up the centre pawn with the one pawn move that also opens squares for your queen.',
                                                  mistakes: [
                                                    { san: 'dxc4', deliberate: true, why: 'Sound - it transposes towards the Open Catalan. This half of the repertoire keeps the wall on d5 instead.' },
                                                    { san: 'Nbd7', why: 'A good square for the knight, but the pawn on c6 is what makes the whole structure hold together. Build the base first.' },
                                                    { san: 'c5', why: 'Too early. After cxd5 exd5 dxc5 you are left with a lonely d-pawn and White\'s bishop pointed at it from g2.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Qc2',
                                                      label: 'Main line',
                                                      idea: 'The queen takes the c-file and supports a later e2-e4 push.',
                                                      children: [
                                                        {
                                                          san: 'Nbd7',
                                                          idea: 'The right square: from d7 the knight backs up both ...c5 and ...e5, and it keeps the c-pawn free.',
                                                          hint: 'Develop the queen\'s knight to the square that does not block your own c-pawn.',
                                                          mistakes: [
                                                            { san: 'Ne4', why: 'The knight looks active but Nxe4 dxe4 leaves your centre pawn on a square the g2-bishop is already staring at.' },
                                                            { san: 'b6', why: 'The right idea but the wrong move order: with the queen on c2 and the bishop on g2, cxd5 exd5 leaves b7 uncomfortably loose. Develop the knight first.' },
                                                            { san: 'dxc4', why: 'With the queen already on c2 you are simply handing the pawn back with tempo - Qxc4 comes with a gain of time.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Nbd2',
                                                              label: 'Main line',
                                                              idea: 'White keeps the c-file clear for the queen and prepares b2-b3 and Bb2, or e2-e4.',
                                                              children: [
                                                                {
                                                                  san: 'b6',
                                                                  idea: 'Now the bishop can come to b7 without being hit by cxd5, and the ...c5 break is next.',
                                                                  hint: 'Open a diagonal for your last undeveloped piece.',
                                                                  mistakes: [
                                                                    { san: 'e5', why: 'Tempting, but with the knight on d2 supporting the centre, dxe5 Nxe5 Nxe5 leaves your d5 pawn hanging on an open diagonal.' },
                                                                    { san: 'c5', why: 'Right idea, wrong moment - your light-squared bishop is still on c8 and after the centre opens it will have nothing to do.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Closed Catalan, main line',
                                                                    plans: [
                                                                      'Play ...Bb7 and then ...c5. That is the whole plan and it is a good one: once ...c5 lands, your bishop on b7 and White\'s on g2 cancel each other out.',
                                                                      'Keep the pawn on d5 for as long as it is useful. It is the only thing between White\'s bishop and your queenside, and trading it off without a reason hands White the diagonal.',
                                                                      'If White plays e2-e4, answer ...dxe4 and then ...c5 - once the centre opens your pieces are on good squares and White has no extra space left.',
                                                                      'The rook belongs on c8 or e8 depending on which break you choose. Decide the break first, then place the rook.',
                                                                      'A useful little move is ...a5, stopping b2-b4 and giving the knight on d7 a route to c5 via b6.',
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
                                                      san: 'b3',
                                                      label: 'Preparing Bb2',
                                                      idea: 'A slower set-up: White fianchettoes the second bishop too and plays for a long positional game.',
                                                      children: [
                                                        {
                                                          san: 'b6',
                                                          idea: 'Mirror White. With b2-b3 played, cxd5 no longer comes with any bite, so the bishop can go to b7 immediately.',
                                                          hint: 'White has committed to a slow set-up. Copy the useful part of it.',
                                                          mistakes: [
                                                            { san: 'dxc4', why: 'The pawn on b3 is the reason not to: bxc4 gives White a big pawn centre and an open b-file straight at your queenside.' },
                                                            { san: 'Nbd7', why: 'Fine but slow. With b2-b3 played, this is the moment to get the light-squared bishop out before White has Ba3 or Bb2 ideas.' },
                                                          ],
                                                          children: [
                                                            {
                                                              san: 'Bb2',
                                                              label: 'Main line',
                                                              idea: 'The second bishop takes the long diagonal and eyes the e5 square.',
                                                              children: [
                                                                {
                                                                  san: 'Bb7',
                                                                  idea: 'Bishops face bishops. The position is symmetrical and completely comfortable for Black.',
                                                                  hint: 'Answer the fianchetto with your own.',
                                                                  mistakes: [
                                                                    { san: 'Ba6', why: 'The a6 square is for positions where White\'s c4 pawn is loose. With b3 played, c4 is well defended and the bishop just bites on granite.' },
                                                                    { san: 'c5', why: 'Premature: your bishop is still on c8, so opening the centre only helps the side whose pieces are already out.' },
                                                                  ],
                                                                  end: {
                                                                    name: 'Closed Catalan, double fianchetto',
                                                                    plans: [
                                                                      'Complete with ...Nbd7 and then choose between ...c5 and ...Ne4 followed by ...f5 in a Stonewall-like set-up.',
                                                                      'Symmetrical positions favour the side with a plan. Yours is ...c5 followed by taking the c-file with a rook.',
                                                                      'Watch for Ne5 - it is the point of Bb2. Meet it with ...Nxe5 dxe5 Nd7, hitting the pawn and freeing your position.',
                                                                      'If White ever plays cxd5, recapture with the e-pawn (...exd5) to keep the c6 pawn on and the position solid.',
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
                                              san: 'cxd5',
                                              label: 'Exchange Catalan',
                                              idea: 'White releases the tension at once and plays for a slow squeeze against a symmetrical structure.',
                                              children: [
                                                {
                                                  san: 'exd5',
                                                  idea: 'Recapture towards the centre. Now the c8-bishop finally has a diagonal, which is the one thing the Catalan usually denies you.',
                                                  hint: 'Take back with the pawn that opens a diagonal for your worst piece.',
                                                  mistakes: [
                                                    { san: 'Nxd5', why: 'It looks natural, but it hands White the free e2-e4 push and leaves the g2-bishop staring at an empty diagonal all the way to a8.' },
                                                    { san: 'Qxd5', why: 'The queen is a target on d5: Nc3 comes with tempo and White develops while you retreat.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Nc3',
                                                      label: 'Main line',
                                                      idea: 'The knight puts pressure on d5 and prepares the minority attack with b2-b4.',
                                                      children: [
                                                        {
                                                          san: 'c6',
                                                          idea: 'Solidify d5 before anything else. With c6 and d5 fixed, White\'s only real plan is a slow queenside advance, and you have plenty of time to meet it.',
                                                          hint: 'Support the pawn White\'s knight is aiming at.',
                                                          mistakes: [
                                                            { san: 'Nc6', why: 'It leaves d5 defended only once while White can pile up with Nc3, Qb3 and Bf4. The pawn needs a pawn behind it.' },
                                                            { san: 'Bf5', why: 'A good square for the bishop, but d5 comes first - Qb3 hitting b7 and d5 at once is exactly the trick to avoid.' },
                                                          ],
                                                          end: {
                                                            name: 'Exchange Catalan',
                                                            plans: [
                                                              'Get the light-squared bishop out to f5 or g4 before playing ...Nbd7 - that bishop is the piece the Catalan usually traps, and here you have the chance to free it.',
                                                              'Meet a queenside minority attack (b4-b5) with ...a6 and pieces on the c-file rather than with more pawn moves.',
                                                              'The half-open e-file is yours. A rook on e8 and a knight coming to e4 is the standard set-up.',
                                                              'This structure is a Carlsbad with colours reversed in spirit: White presses on the queenside, you press in the centre and on the kingside.',
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
