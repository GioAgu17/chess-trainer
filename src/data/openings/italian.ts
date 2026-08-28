import type { Opening } from '../types'

export const italianGame: Opening = {
  kind: 'opening',
  id: 'italian-game',
  name: 'Italian Game (Giuoco Piano)',
  eco: 'C50',
  side: 'white',
  summary:
    'White develops quickly and points the light-squared bishop at f7, then supports the centre with c3 and d3 rather than rushing d4. The plan is a slow build-up: Nbd2-f1-g3, a rook to e1, and a well-timed d4 break once Black has committed.',
  traps: [
    {
      id: 'italian-legal',
      name: "Legal's Mate",
      owner: 'ours',
      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'd6', 'Nc3', 'Bg4', 'Nxe5', 'Bxd1', 'Bxf7+', 'Ke7', 'Nd5#'],
      setup: 8,
      point:
        'The oldest trap in chess and it still works. Black pins the knight with the bishop, so White ignores the pin and takes on e5 anyway. If Black grabs the queen, three minor pieces deliver mate on d5. If Black declines and takes on e5 instead, White simply wins a pawn and keeps a good position - the sacrifice is safe either way.',
    },
    {
      id: 'italian-blackburne-shilling',
      name: 'The Blackburne Shilling',
      owner: 'theirs',
      moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nd4', 'Nxe5', 'Qg5', 'Nxf7', 'Qxg2', 'Rf1', 'Qxe4+', 'Be2', 'Nf3#'],
      setup: 7,
      point:
        'The knight on d4 looks like a beginner move hanging a pawn, and 4.Nxe5 looks like winning one. Then the queen comes to g5 hitting the knight and g2 at once, and the greedy follow-up ends in mate on f3. The answer is not to take: 4.Nxd4 exd4 5.O-O leaves White a comfortable tempo up.',
    },
  ],
  tree: [
    {
      san: 'e4',
      idea: 'Claim the centre and open lines for the bishop and queen.',
      hint: 'Open the game with the most direct central pawn move.',
      mistakes: [
        { san: 'd4', deliberate: true, why: 'A fine first move, but this repertoire is a king-pawn one. Everything that follows assumes the e-pawn has gone to e4.' },
        { san: 'Nf3', why: 'Playable, but it lets Black choose the opening. Take the centre first and steer the game where you know it.' },
      ],
      children: [
        {
          san: 'e5',
          label: 'Open Game',
          idea: 'Black stakes an equal claim in the centre.',
          children: [
            {
              san: 'Nf3',
              idea: 'Develop with tempo: the knight hits e5 straight away.',
              hint: 'Develop a piece and attack the pawn Black just played.',
              mistakes: [
                { san: 'Bc4', deliberate: true, why: 'Not wrong, but it lets Black play ...Nf6 and ...d5 for free. The Italian is built on hitting e5 first so Black has to answer.' },
                { san: 'f4', why: "That is the King’s Gambit - a different opening with very different theory. The Italian keeps the centre solid." },
              ],
              children: [
                {
                  san: 'Nc6',
                  label: 'Main line',
                  idea: 'Black defends e5 with the natural developing move.',
                  children: [
                    {
                      san: 'Bc4',
                      idea: 'The Italian bishop: it eyes f7, the one square only the black king defends.',
                      hint: 'Put your light-squared bishop on its most active diagonal.',
                      mistakes: [
                        { san: 'Bb5', deliberate: true, why: 'A perfectly good move, but that is the Ruy Lopez. This repertoire aims for the Italian.' },
                        { san: 'd4', deliberate: true, why: 'The Scotch. Playable, but it releases the central tension immediately instead of building up behind it.' },
                      ],
                      children: [
                        {
                          san: 'Bc5',
                          label: 'Giuoco Piano',
                          idea: 'Black mirrors White and aims the bishop at f2.',
                          children: [
                            {
                              san: 'c3',
                              idea: 'Prepare d4. The pawn also gives the bishop a retreat square on c2 later.',
                              hint: 'Support the coming d4 break before playing it.',
                              mistakes: [
                                { san: 'Ng5', why: 'Too early. Black answers ...Nh6 or ...Qe7 and the knight on g5 has nothing to attack - moving the same piece twice hands Black the initiative.' },
                                { san: 'd4', why: 'Premature. After ...exd4 you have no pawn that can recapture, so Black wins a tempo hitting your pieces.' },
                                { san: 'Nc3', why: 'Natural, but it blocks the c-pawn. In the Italian the c-pawn is the one that supports d4 and gives the bishop the c2 retreat.' },
                              ],
                              children: [
                                {
                                  san: 'Nf6',
                                  label: 'Main line',
                                  idea: 'Black develops and puts pressure on e4.',
                                  children: [
                                    {
                                      san: 'd3',
                                      idea: 'The Giuoco Pianissimo. Defend e4 quietly, keep the centre closed, and prepare Nbd2-f1-g3 with a slow kingside build-up.',
                                      hint: 'Defend the attacked e-pawn with a modest pawn move that keeps the centre solid.',
                                      mistakes: [
                                        { san: 'd4', why: 'This is the sharp Greco Attack. It is theory-heavy and Black has well-known equalising paths; the quiet build-up scores better below master level.' },
                                        { san: 'Nxe5', why: 'Loses a piece for a pawn: the knight on e5 is defended by nothing and Black simply recaptures with ...Nxe5.' },
                                        { san: 'Ng5', why: "Black is not obliged to defend f7 with ...d5 here, and after ...O-O your knight is out on a limb. Keep building." },
                                      ],
                                      children: [
                                        {
                                          san: 'd6',
                                          label: 'Main line',
                                          idea: 'Black mirrors again, propping up e5 and opening the c8-bishop.',
                                          children: [
                                            {
                                              san: 'O-O',
                                              idea: 'King to safety and the rook joins the e-file. Next comes Re1, Nbd2, Bb3 and only then d4.',
                                              hint: 'Get the king out of the centre.',
                                              mistakes: [
                                                { san: 'Bg5', why: 'The bishop achieves nothing there: with the knight defended by the queen and the black king still in the centre, ...h6 just gains time.' },
                                                { san: 'b4', why: 'Far too early. Your king is still in the centre and ...Bb6 leaves the b-pawn weak.' },
                                              ],
                                              children: [
                                                {
                                                  san: 'O-O',
                                                  label: 'Main line',
                                                  idea: 'Black castles too and the Giuoco Pianissimo tabiya is on the board.',
                                                  end: {
                                                    name: 'Giuoco Pianissimo, main line',
                                                    plans: [
                                                      'Re1 and Nbd2, then the knight tour Nf1-g3 (or Ne3) to build up on the kingside.',
                                                      'Retreat the bishop with Bb3 and follow with a2-a4 to stop ...b5 and take away b5/a4 from Black.',
                                                      'Play d3-d4 only once you are fully developed - the pawn on c3 means you can meet ...exd4 with cxd4 and keep a broad centre.',
                                                      'If Black goes ...Na5, meet it with Bb3 and remember the knight on a5 is offside; a2-a4 and Nbd2-c4 make life awkward for it.',
                                                      'Watch the d4 square: with pawns on c3 and d3 your structure is flexible, but a black knight landing on d4 must always be answered (usually Nxd4 or Bb3 first).',
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          san: 'O-O',
                                          label: 'Castling first',
                                          idea: 'A common move order - Black castles before deciding on ...d6.',
                                          children: [
                                            {
                                              san: 'O-O',
                                              idea: 'Castle in reply. The game usually transposes to the main line after ...d6.',
                                              hint: 'Answer castling with castling - your development plan does not change.',
                                              end: {
                                                name: 'Giuoco Pianissimo, castling move order',
                                                plans: [
                                                  'Play Re1, Nbd2 and Bb3 - the same build-up as the main line.',
                                                  'Black will usually follow with ...d6 and ...a6, transposing to the main tabiya.',
                                                  'Because Black has not played ...d6 yet, keep an eye on a quick d3-d4 hitting the bishop on c5.',
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                        {
                                          san: 'a6',
                                          label: 'Preparing ...Ba7',
                                          idea: 'Black takes b5 away from your pieces and prepares ...Ba7 so the bishop is not hit by d4.',
                                          children: [
                                            {
                                              san: 'O-O',
                                              idea: 'Nothing changes: castle and continue with Re1, Nbd2 and Bb3.',
                                              hint: 'Black has made a useful but slow move. Get on with your own development.',
                                              end: {
                                                name: 'Giuoco Pianissimo with ...a6',
                                                plans: [
                                                  'Continue Re1, Nbd2, Bb3 and a2-a4 to stop ...b5.',
                                                  'With the bishop heading to a7, the d4 break is less effective - prefer the slow kingside plan Nf1-g3.',
                                                  'The h2-h3 move is nearly always useful: it stops ...Bg4 and ...Ng4 for good.',
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
                                  san: 'Qe7',
                                  label: 'Solid queen defence',
                                  idea: 'Black over-protects e5 so that d4 can be met by ...Bb6 without losing the pawn.',
                                  children: [
                                    {
                                      san: 'd4',
                                      idea: 'Now the break works: the queen on e7 blocks the bishop, so Black cannot develop smoothly.',
                                      hint: 'Black has spent a move on the queen. Punish it by opening the centre while you are better developed.',
                                      end: {
                                        name: 'Giuoco Piano, 4...Qe7',
                                        plans: [
                                          'After ...Bb6 castle and play a4 to gain queenside space.',
                                          "Black’s queen on e7 blocks the f8-bishop, so aim to open the centre before Black untangles.",
                                          'Re1 with the queen opposite on e7 is a standard source of tactics once the e-file opens.',
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  san: 'd6',
                                  label: 'Quiet defence',
                                  idea: 'Black props up e5 first, keeping the option of ...Nf6 or ...Bg4.',
                                  children: [
                                    {
                                      san: 'd4',
                                      idea: 'The break is well timed: c3 supports it, and Black has not yet developed the kingside.',
                                      hint: 'You spent a move preparing a central break and Black has not challenged the centre. Play it.',
                                      end: {
                                        name: 'Giuoco Piano, 4...d6',
                                        plans: [
                                          'After ...exd4 cxd4 you get a broad pawn centre; Bb6 for Black, then castle and play Nc3.',
                                          'The d4-d5 push gains space and shuts out the c6-knight.',
                                          'Watch ...Bg4 pinning the f3-knight - h2-h3 first is often worth a tempo.',
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  san: 'Bb6',
                                  label: 'Retreating in advance',
                                  idea: 'Black steps out of the way of d4 before it happens.',
                                  children: [
                                    {
                                      san: 'd4',
                                      idea: 'Take the full centre while you can - the bishop retreat cost Black a tempo.',
                                      hint: 'Black used a move to retreat a piece that was not attacked. Take the centre.',
                                      end: {
                                        name: 'Giuoco Piano, 4...Bb6',
                                        plans: [
                                          'Build the big centre with d4 and, when useful, d4-d5 to gain space.',
                                          'Castle and play a4-a5 to harass the bishop on b6.',
                                          'Keep the tension: recapturing on d4 with the c-pawn gives you the ideal pawn duo e4/d4.',
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
                          san: 'Nf6',
                          label: 'Two Knights Defence',
                          idea: 'Black hits e4 at once and invites the sharp 4.Ng5 lines.',
                          children: [
                            {
                              san: 'd3',
                              idea: 'The modern, quiet answer. Defending e4 avoids the enormous theory after 4.Ng5 and keeps a pleasant Italian position.',
                              hint: 'Defend the attacked e-pawn without moving a piece twice.',
                              mistakes: [
                                { san: 'Ng5', why: 'This is the famous Fried Liver / Traxler territory. It is playable but the theory is long and sharp, and one slip loses. The repertoire keeps the quiet path.' },
                                { san: 'Nc3', why: 'Blocks the c-pawn, which you want on c3 to support d4 and give the bishop a retreat.' },
                                { san: 'Nxe5', why: 'Loses material after ...Nxe4 or simply ...Nxe5 - the knight on e5 is not supported.' },
                              ],
                              end: {
                                name: 'Two Knights Defence, quiet 4.d3',
                                plans: [
                                  'Follow with c3, O-O, Re1, Nbd2 - the same slow build-up as the Giuoco Pianissimo.',
                                  'Bb3 and a4 take the sting out of ...Na5 and ...b5.',
                                  'h2-h3 is useful to prevent ...Bg4 and ...Ng4 before you commit to d3-d4.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'Be7',
                          label: 'Hungarian Defence',
                          idea: 'Black declines the sharp play and develops modestly, giving up some central space.',
                          children: [
                            {
                              san: 'd4',
                              idea: 'The bishop on e7 does not fight for the centre, so take it now while you can do so without cost.',
                              hint: "Black’s last move was passive. Grab the centre immediately.",
                              end: {
                                name: 'Hungarian Defence',
                                plans: [
                                  'After ...exd4 Nxd4 you have a free hand in the centre; castle and play Nc3.',
                                  'The d4-d5 advance gains space and gives Black no counterplay.',
                                  'Aim your pieces at the kingside - Black has less space and fewer active squares.',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          san: 'd6',
                          label: 'Semi-Italian (Paris Defence)',
                          idea: 'Black props up e5 and plans ...Nf6 or ...Be6 in a slow set-up.',
                          children: [
                            {
                              san: 'd4',
                              idea: 'Black has committed to a passive set-up. Open the centre while better developed.',
                              hint: 'Black has not challenged your centre. Take it with a pawn.',
                              end: {
                                name: 'Italian Game, Paris Defence',
                                plans: [
                                  'Play c3 next to hold the big centre, then castle.',
                                  'd4-d5 gains space and gives the c6-knight no good square.',
                                  'Black is cramped: avoid unnecessary trades and build up slowly.',
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
}
