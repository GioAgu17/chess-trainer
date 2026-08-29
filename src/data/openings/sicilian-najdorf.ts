import type { Opening } from '../types'

export const sicilianNajdorf: Opening = {
  kind: 'opening',
  id: 'sicilian-najdorf',
  name: 'Sicilian Defence (Najdorf)',
  eco: 'B90',
  side: 'black',
  summary:
    'Black trades a wing pawn for a centre pawn and gets the half-open c-file in return, then plays the small but hugely useful move ...a6 to take b5 away from every white piece. The Najdorf keeps maximum flexibility: depending on what White does, Black follows with ...e5 grabbing the centre or ...e6 in a solid Scheveningen set-up.',
  traps: [
    {
      id: 'najdorf-bxb5',
      /** Study-only: the pattern is the point, and the engine has an equally good alternative. */
      drillable: false,
      name: 'The b5 sacrifice',
      owner: 'theirs',
      moves: [
        'e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Bg5', 'e6',
        'f4', 'Nbd7', 'Qf3', 'Qc7', 'O-O-O', 'b5', 'Bxb5',
      ],
      setup: 18,
      point:
        'The standard queenside advance runs into the standard sacrifice: with White castled long and every piece pointed at the black king, Bxb5 rips the queenside open before Black has castled. The lesson is about move order rather than about this one position - get the king to safety before pushing the b-pawn when White has already committed to O-O-O.',
    },
  ],
  tree: [
    {
      san: 'e4',
      label: 'King pawn opening',
      idea: 'White takes the centre.',
      children: [
        {
          san: 'c5',
          idea: 'The Sicilian. Black declines the symmetrical ...e5 and fights for the centre from the side, gaining the half-open c-file after the coming trade.',
          hint: 'Meet the king pawn asymmetrically, with a wing pawn that hits d4.',
          mistakes: [
            { san: 'e5', deliberate: true, why: 'A perfectly good move, but that is the Open Game, not the Sicilian. This repertoire fights for an imbalance from move one.' },
            { san: 'e6', deliberate: true, why: 'That is the French Defence. Also fine, but a different repertoire.' },
          ],
          children: [
            {
              san: 'Nf3',
              label: 'Open Sicilian',
              idea: 'White develops and prepares d4.',
              children: [
                {
                  san: 'd6',
                  idea: 'The Najdorf move order. The pawn covers e5, keeps the c8-bishop free, and prepares ...Nf6 without allowing e4-e5.',
                  hint: 'Prepare ...Nf6 by covering the e5 square first.',
                  mistakes: [
                    { san: 'Nf6', why: 'White simply plays e5 and the knight has to move again while White gains time and space.' },
                    { san: 'Nc6', deliberate: true, why: 'A good move, but it leads to the Sveshnikov, Classical or Accelerated Dragon rather than the Najdorf.' },
                    { san: 'e6', why: 'Playable, and it can transpose, but it commits the pawn early and shuts in the c8-bishop. The Najdorf keeps that option open.' },
                  ],
                  children: [
                    {
                      san: 'd4',
                      label: 'Main line',
                      idea: 'White opens the centre.',
                      children: [
                        {
                          san: 'cxd4',
                          idea: 'Take. This is the trade the Sicilian is built on: a c-pawn for a d-pawn, and the c-file opens for the black rook.',
                          hint: 'Make the trade the whole opening is designed around.',
                          mistakes: [
                            { san: 'Nf6', why: 'White plays dxc5 or e5 and you are simply worse. Take on d4 first.' },
                            { san: 'e5', why: 'This blocks the position and leaves a hole on d5 while your pieces are undeveloped; White gets a lasting bind after dxe5.' },
                          ],
                          children: [
                            {
                              san: 'Nxd4',
                              label: 'Main line',
                              idea: 'White recaptures with the knight, reaching the Open Sicilian.',
                              children: [
                                {
                                  san: 'Nf6',
                                  idea: 'Develop with tempo: the knight attacks e4 and forces White to defend it, almost always with Nc3.',
                                  hint: 'Develop a piece so that it attacks the e-pawn.',
                                  mistakes: [
                                    { san: 'a6', why: 'The right idea but the wrong order. Play ...Nf6 first so White has to spend a move defending e4 with Nc3.' },
                                    { san: 'Nc6', deliberate: true, why: 'Playable, but it leads to the Classical Sicilian. The Najdorf develops the king’s knight first.' },
                                  ],
                                  children: [
                                    {
                                      san: 'Nc3',
                                      label: 'Main line',
                                      idea: 'White defends e4 with the natural developing move.',
                                      children: [
                                        {
                                          san: 'a6',
                                          idea: "The Najdorf move. It looks slow, but it takes b5 away from White’s knight and bishop for the rest of the game and prepares ...e5 and ...b5.",
                                          hint: 'Play the quiet pawn move that permanently denies White the b5 square.',
                                          mistakes: [
                                            { san: 'e5', why: 'Too soon. Without ...a6 White plays Bb5+ and you are already in trouble on the light squares.' },
                                            { san: 'g6', deliberate: true, why: 'That is the Dragon - a fine opening, but a completely different one with far sharper theory.' },
                                            { san: 'Nc6', why: 'That transposes to the Classical Sicilian. The Najdorf plays ...a6 to keep b5 covered.' },
                                            { san: 'e6', why: 'That is the Scheveningen, and it allows the dangerous Keres Attack with g2-g4. The ...a6 move order avoids it.' },
                                          ],
                                          children: [
                                            {
                                              san: 'Be3',
                                              label: 'English Attack',
                                              idea: 'White prepares f3, Qd2 and O-O-O with a pawn storm on the kingside. The most popular try today.',
                                              children: [
                                                {
                                                  san: 'e5',
                                                  idea: 'The critical reply. It hits the knight and takes the centre; the hole on d5 is acceptable because White cannot easily occupy it.',
                                                  hint: 'The bishop on e3 no longer covers the centre. Kick the knight and take space.',
                                                  mistakes: [
                                                    { san: 'e6', deliberate: true, why: 'Solid and playable, but it invites the full English Attack pawn storm with f3, g4 and h4. The repertoire hits back in the centre.' },
                                                    { san: 'Ng4', why: 'White answers Bg5 and after ...h6 Bh4 the knight on g4 has no good square, so you lose time.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Nb3',
                                                      label: 'Main line',
                                                      idea: 'The knight steps back and keeps an eye on a5 and c5.',
                                                      children: [
                                                        {
                                                          san: 'Be7',
                                                          idea: 'Develop and prepare to castle. The bishop is modest on e7 but it covers d8 and supports the ...d5 break.',
                                                          hint: 'Develop the last kingside piece so you can castle next move.',
                                                          mistakes: [
                                                            { san: 'Be6', deliberate: true, why: 'A main line in its own right, but with White playing f3 and g4 the bishop on e6 can come under fire. ...Be7 first is the flexible move order.' },
                                                            { san: 'b5', why: 'Natural, but premature: White plays a4 and after ...b4 Nd5 the hole on d5 becomes real.' },
                                                          ],
                                                          end: {
                                                            name: 'Najdorf, English Attack main line',
                                                            plans: [
                                                              'Castle short, then play ...Be6, ...Nbd7 and ...b5 with queenside counterplay.',
                                                              'The ...b5-b4 push drives the c3-knight away and makes the d5 hole much less relevant.',
                                                              'If White castles long and storms with g4-g5, meet it on the queenside: your attack against the king on c1 is usually faster.',
                                                              'The ...d5 break is the ideal freeing move; play it the moment White loses control of that square.',
                                                              'Keep the light-squared bishop - after ...Be6 it defends d5 and supports ...b5 and ...Nb6-c4.',
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      san: 'Nf3',
                                                      label: 'Modern retreat',
                                                      idea: 'The knight goes to f3, where it hits e5 and keeps more pieces on the board.',
                                                      children: [
                                                        {
                                                          san: 'Be7',
                                                          idea: 'Develop and castle; the e5-pawn is defended and ...Be6 or ...Qc7 follow.',
                                                          hint: 'Develop the bishop and get ready to castle.',
                                                          end: {
                                                            name: 'Najdorf, 7.Nf3',
                                                            plans: [
                                                              'Castle short, then ...Qc7, ...Be6 and ...Nbd7.',
                                                              'The ...b5 and ...b4 advance is the main source of counterplay.',
                                                              'Keep the option of ...d5 - with the knight on f3 rather than b3, White has less control over that square.',
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
                                              san: 'Be2',
                                              label: 'Classical / Opocensky',
                                              idea: 'A quiet, sound set-up: White castles short and plays for a small edge.',
                                              children: [
                                                {
                                                  san: 'e5',
                                                  idea: 'Grab the centre with tempo. Against the modest Be2, this is the most testing move.',
                                                  hint: 'White has developed quietly. Hit the knight and take the centre.',
                                                  mistakes: [
                                                    { san: 'e6', deliberate: true, why: 'Perfectly sound, but it gives White the comfortable Scheveningen. With the bishop on e2 rather than e3, ...e5 is even better here.' },
                                                  ],
                                                  children: [
                                                    {
                                                      san: 'Nb3',
                                                      label: 'Main line',
                                                      idea: 'The knight retreats to b3.',
                                                      children: [
                                                        {
                                                          san: 'Be7',
                                                          idea: 'Develop and castle; ...O-O, ...Be6 and ...Nbd7 follow.',
                                                          hint: 'Develop the last kingside piece.',
                                                          end: {
                                                            name: 'Najdorf, Classical Variation',
                                                            plans: [
                                                              'Castle short, then ...Be6, ...Nbd7, ...Qc7 and ...b5.',
                                                              'The knight route ...Nb6-c4 or ...Nf6-d7-c5 puts pressure on White’s queenside.',
                                                              'The d5 square is White’s target - contest it with ...Be6 and, at the right moment, break with ...d5.',
                                                              'On the queenside, ...b5-b4 gains space and drives the knight from c3.',
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
                                              san: 'Bg5',
                                              label: 'Main Line (6.Bg5)',
                                              idea: 'The sharpest classical try: White pins the knight and prepares f4, Qf3 and O-O-O.',
                                              children: [
                                                {
                                                  san: 'e6',
                                                  idea: 'With the bishop on g5 pinning the f6-knight, ...e5 would leave d5 and f5 fatally weak. ...e6 is the correct set-up here.',
                                                  hint: 'The knight on f6 is pinned. Do not weaken d5 - choose the solid central pawn move instead.',
                                                  mistakes: [
                                                    { san: 'e5', why: 'A serious error here: with the knight pinned by the bishop on g5, White plays Bxf6 and lands a knight on d5 with a permanent bind.' },
                                                    { san: 'h6', why: 'It invites Bxf6, and after ...gxf6 or ...Qxf6 your structure or your queen is compromised. ...e6 first is the main line.' },
                                                  ],
                                                  end: {
                                                    name: 'Najdorf, 6.Bg5 main line',
                                                    plans: [
                                                      'The main continuations are 7.f4 Be7 (or the razor-sharp Poisoned Pawn with 7...Qb6) and 7.Qf3.',
                                                      'Counterplay comes from ...b5, ...Bb7 and pressure down the half-open c-file.',
                                                      'The ...d5 break is the freeing move - it usually costs a pawn but gives huge activity.',
                                                      'If White castles long, race on the queenside with ...b5-b4 and ...Qa5 or ...Qc7.',
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                            {
                                              san: 'Bc4',
                                              label: 'Fischer-Sozin Attack',
                                              idea: 'The bishop takes aim at f7 and the a2-g8 diagonal.',
                                              children: [
                                                {
                                                  san: 'e6',
                                                  idea: 'The standard answer: the pawn blunts the bishop’s diagonal at once and prepares ...b5 hitting it again.',
                                                  hint: 'Block the diagonal the bishop just took.',
                                                  mistakes: [
                                                    { san: 'e5', why: 'It leaves d5 weak while the bishop on c4 already eyes that diagonal - exactly what White wants.' },
                                                    { san: 'b5', why: 'The right idea one move too early: White has Bd5 or Bb3 and, in some lines, tactics against the loose queenside.' },
                                                  ],
                                                  end: {
                                                    name: 'Najdorf, Fischer-Sozin Attack',
                                                    plans: [
                                                      'Follow with ...b5, hitting the bishop and gaining queenside space.',
                                                      '...Be7, ...O-O and ...Bb7 complete development; the c-file is your main highway.',
                                                      'Watch for White’s f4-f5 and Bb3 with a kingside attack; ...Nbd7-e5 is a good defensive and blockading resource.',
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                            {
                                              san: 'f4',
                                              label: 'Amsterdam Variation',
                                              idea: 'White grabs space and prepares e4-e5 or a kingside build-up.',
                                              children: [
                                                {
                                                  san: 'e5',
                                                  idea: 'Strike back in the centre immediately, before White consolidates with Bd3 and O-O.',
                                                  hint: 'White has committed a kingside pawn. Hit the centre before it becomes a rolling pawn mass.',
                                                  end: {
                                                    name: 'Najdorf, 6.f4 e5',
                                                    plans: [
                                                      'After fxe5 dxe5 the knight has to move and you have a good grip on d4 and c5.',
                                                      'The e5-pawn is a little loose - support it with ...Qc7 and ...Nbd7 rather than more pawn moves.',
                                                      '...b5, ...Bb7 and pressure on e4 are the usual follow-ups.',
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
                              san: 'Qxd4',
                              label: 'Queen recapture',
                              idea: 'White recaptures with the queen, which comes out early.',
                              children: [
                                {
                                  san: 'Nc6',
                                  idea: 'Develop with tempo - the knight attacks the queen and White must move it again.',
                                  hint: 'The white queen is on an open square. Develop a piece that attacks it.',
                                  mistakes: [
                                    { san: 'Nf6', deliberate: true, why: 'A perfectly good move - the two are about equal. This repertoire prefers ...Nc6 because it develops with tempo against the queen, which is easier to play.' },
                                  ],
                                  end: {
                                    name: 'Sicilian, 4.Qxd4',
                                    plans: [
                                      'After Bb5 Bd7 you develop comfortably; the trade on c6 gives you the bishop pair.',
                                      '...Nf6, ...g6 or ...e6 and ...Be7 complete development.',
                                      'The half-open c-file is still your main asset.',
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
                      san: 'Bb5+',
                      label: 'Moscow Variation',
                      idea: 'White avoids the Open Sicilian entirely and offers a bishop trade.',
                      children: [
                        {
                          san: 'Bd7',
                          idea: 'Block with the bishop. Trading on d7 helps you: your queen or knight recaptures actively and the c-file stays open.',
                          hint: 'Block the check with the piece you are happy to trade.',
                          mistakes: [
                            { san: 'Nd7', why: 'Playable but passive: the knight blocks the bishop and after O-O White keeps a small pull.' },
                            { san: 'Nc6', why: 'This walks into the pin and, worse, allows the trade on c6 wrecking your queenside pawns.' },
                          ],
                          end: {
                            name: 'Sicilian, Moscow Variation',
                            plans: [
                              'After Bxd7+ recapture with the queen or knight and follow with ...Nf6, ...g6 or ...e6.',
                              'You have the half-open c-file and a solid structure; the position is roughly balanced.',
                              'The ...d5 or ...e5 break frees the position once you are developed.',
                            ],
                          },
                        },
                      ],
                    },
                    {
                      san: 'c3',
                      label: 'Delayed Alapin',
                      idea: 'White builds a big centre with d4 supported by the c-pawn.',
                      children: [
                        {
                          san: 'Nf6',
                          idea: 'Hit e4 immediately. With the pawn on c3 White cannot defend it with Nc3, so White must spend time.',
                          hint: 'White has blocked the natural square for the queen’s knight. Attack the e-pawn.',
                          end: {
                            name: 'Sicilian, 3.c3',
                            plans: [
                              'After Be2 or Bd3 continue ...Nc6, ...g6 or ...e6 and hit the centre with ...d5 or ...e5.',
                              'The big white centre can be undermined with ...d5 at the right moment.',
                              'Do not let White play d4 and e5 unchallenged.',
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
              san: 'c3',
              label: 'Alapin Variation',
              idea: 'White prepares d4 with pawn support instead of playing the Open Sicilian.',
              children: [
                {
                  san: 'Nf6',
                  idea: 'Attack e4 at once. White must push to e5, after which the pawn becomes a target for ...d6 and ...Nc6.',
                  hint: 'The c3-pawn takes away the knight’s defending square. Attack the e-pawn.',
                  mistakes: [
                    { san: 'd5', deliberate: true, why: 'Also a main line and perfectly good, but ...Nf6 is the sharper try and it forces White to commit at once.' },
                    { san: 'e5', why: 'This gives up on the Sicilian structure and leaves a hole on d5 while White develops freely.' },
                  ],
                  end: {
                    name: 'Alapin Variation',
                    plans: [
                      'After 3.e5 Nd5 the knight sits well and White’s e5-pawn needs constant defence.',
                      'Undermine the centre with ...d6 and ...Nc6, and challenge d4 with ...cxd4.',
                      'The endgame usually favours Black slightly because White’s advanced pawns can become weak.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'Nc3',
              label: 'Closed / delayed Open Sicilian',
              idea: 'White develops flexibly, keeping both the Closed Sicilian and a later d4 in reserve.',
              children: [
                {
                  san: 'd6',
                  idea: 'Keep the Najdorf structure. If White plays Nf3 and d4 you transpose straight into your main line.',
                  hint: 'Stay in your own system - play the move that would come next in the main line.',
                  end: {
                    name: 'Sicilian, 2.Nc3',
                    plans: [
                      'If White plays Nf3 and d4, the game transposes to the Open Sicilian and your normal Najdorf plans apply.',
                      'Against the Closed Sicilian set-up (g3, Bg2, f4) reply with ...Nc6, ...g6 and ...Bg7 and expand with ...b5.',
                      'The half-open c-file and queenside expansion remain your main sources of play.',
                    ],
                  },
                },
              ],
            },
            {
              san: 'f4',
              label: 'Grand Prix Attack',
              idea: 'White plans Nc3, Bc4 or Bb5 and a direct kingside attack.',
              children: [
                {
                  san: 'd5',
                  idea: 'The most testing reply: strike in the centre immediately, before White develops the attacking pieces.',
                  hint: 'White has played a flank move. Punish it by hitting the centre at once.',
                  mistakes: [
                    { san: 'Nc6', why: 'Playable, but it allows Bb5 and the full Grand Prix attacking set-up. Hitting the centre straight away is the cleanest answer.' },
                  ],
                  end: {
                    name: 'Grand Prix Attack, 2...d5',
                    plans: [
                      'After exd5 Nf6 you regain the pawn with a good game.',
                      'The pawn on f4 has weakened White’s king diagonal - ...Qb6 and ...e6 are useful.',
                      'Develop quickly and open the centre before White can attack on the kingside.',
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
}
