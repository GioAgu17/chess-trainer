import type { StudyGuide } from '../types'

/**
 * Study guides for the openings you choose to play.
 *
 * Written for a 1200-1800 player who wants to understand the position rather
 * than memorise it, so everything here is in English: what the pawns are doing,
 * where the pieces want to go, and what usually goes wrong.
 */
export const OPENING_STUDY: StudyGuide[] = [
  {
    id: 'italian-game',
    bigIdea:
      'The Italian is the slowest good opening in chess. White puts a bishop on the c4-f7 diagonal, props the centre up with c3 and d3, and then spends six or seven moves improving pieces before touching a pawn again. The break d3-d4 is the whole point, and it only comes once everything behind it is ready. If you like knowing what your next four moves are before you sit down, this is the opening for you.',
    structures: [
      {
        name: 'The c3-d3 duo',
        shape:
          'White pawns on c3, d3 and e4 against black pawns on d6 and e5. Nothing is exchanged, nothing is fixed, and both sides have a full board of pieces to arrange.',
        yourPlay:
          'The pawn on c3 exists to support d3-d4. Until you play it you have a flexible, unbreakable structure; once you play it you have a broad centre. Time the break for the moment Black has no good answer.',
        theirPlay:
          'Black mirrors you and waits, usually with ...a6 and ...Ba7 so the bishop is not hit when d4 finally lands, and ...Na5 to trade off your good bishop.',
      },
      {
        name: 'The broad centre after cxd4',
        shape:
          'You have played d4, Black has taken with ...exd4, and you have recaptured cxd4 - pawns on d4 and e4 side by side.',
        yourPlay:
          'This is what the whole opening was for. Push d4-d5 to gain space and shut out the c6-knight, or keep the duo and attack on whichever wing Black is weaker.',
        theirPlay:
          'Black wants to hit the centre with ...c5 or ...d5, or to blockade on d5 with a knight. If Black cannot break, the space advantage becomes permanent.',
      },
    ],
    plans: [
      {
        title: 'The knight tour Nbd2-f1-g3',
        detail:
          'The queen\'s knight has nowhere useful to go on c3 (the c-pawn wants that square) so it takes the scenic route: d2, then f1, then g3 or e3. From g3 it eyes f5 and h5; from e3 it eyes d5 and f5. It takes three moves and it is worth every one of them.',
      },
      {
        title: 'Rook to e1, then d3-d4',
        detail:
          'Put the rook on e1 before you break. When the centre opens, the rook and the e-file do the work, and a black queen or king still on the file is the reason many Italian games end quickly.',
      },
      {
        title: 'Bb3 and a2-a4',
        detail:
          'Retreat the bishop before Black plays ...Na5, and follow with a4 to stop ...b5. This little pair of moves removes almost all of Black\'s queenside counterplay for the rest of the game.',
      },
      {
        title: 'h2-h3 as a free move',
        detail:
          'Whenever you are not sure what to do, h3 is almost always useful. It takes g4 away from a black bishop and knight for good, and it gives your king a square. In a slow opening, a permanently useful move is never wasted.',
      },
    ],
    keySquares: [
      { square: 'f7', why: 'The only square defended by the black king alone. The bishop on c4 points at it from move three and every tactic in the opening runs through it.' },
      { square: 'd5', why: 'The square your knight tour is aiming for. A knight on d5 that cannot be taken usually means the game is decided.' },
      { square: 'd4', why: 'The square the whole opening is built to occupy. If a black knight ever gets there first, deal with it immediately.' },
      { square: 'a5', why: 'Where Black\'s knight goes to trade your good bishop. Meeting it with Bb3 and a4 leaves the knight stranded on the edge.' },
    ],
    breaks: [
      { move: 'd3-d4', when: 'Once the rook is on e1, the knight has left d2 and the bishop has dropped back to b3. Playing it earlier means recapturing with a piece rather than the c-pawn, which throws away the point.' },
      { move: 'a2-a4-a5', when: 'When Black has committed the bishop to b6. The pawn arrives with tempo and can eventually win the bishop or force a concession.' },
      { move: 'f2-f4', when: 'Rarely, and only with the knight already on g3 and the king safe. It is a real plan against a black king on g8 with no counterplay.' },
    ],
    middlegameFeel:
      'Quiet and slightly one-sided in your favour. Nothing happens for fifteen moves and then it all happens at once. You will almost never be worse out of the opening, and you will almost never be much better either - what you get is a position where you know the plan and your opponent is improvising.',
    pitfalls: [
      {
        title: 'Playing d4 too early',
        detail:
          'The single most common mistake. Without c3 played and a rook on e1, ...exd4 leaves you recapturing with a piece, and Black gains time hitting it. Prepare the break; do not just play it.',
      },
      {
        title: 'Ng5 hoping for the Fried Liver',
        detail:
          'Against a prepared opponent, Ng5 just loses time - Black plays ...O-O or ...Qe7 and your knight has to come back. The quiet build-up scores better below master level precisely because it does not depend on your opponent cooperating.',
      },
      {
        title: 'Forgetting the knight on d4',
        detail:
          'With pawns on c3 and d3, a black knight landing on d4 is not an inconvenience, it is a problem. Answer it immediately with Nxd4 or by driving it away - leaving it there while you continue your plan loses games.',
      },
    ],
  },
  {
    id: 'ruy-lopez',
    bigIdea:
      'The Ruy Lopez asks a question no other opening asks: by playing Bb5 you attack the knight that defends e5, so every black move has to keep that pawn alive. White then spends the opening building the ideal set-up - pawns on c3 and d4, a rook on e1, the knight tour to g3 - while Black scrambles for space on the queenside. It is the most respected opening in chess because every idea in it turns up everywhere else.',
    structures: [
      {
        name: 'The Spanish centre',
        shape:
          'White pawns on c3, d4 and e4; black pawns on d6 and e5 with the tension unresolved. The classic Chigorin tabiya.',
        yourPlay:
          'Keep the tension as long as possible. Every move you make improves a piece; every move Black makes has to solve a problem. If Black ever takes on d4 you get the broad centre; if Black never takes, you eventually play d4-d5 and gain space.',
        theirPlay:
          'Black plays ...Na5 to hit the bishop, then ...c5 to hit d4, and tries to get ...Nc6-b7 or ...Nc4 established before White\'s kingside build-up arrives.',
      },
      {
        name: 'The closed centre after d4-d5',
        shape: 'A locked chain: white pawns on c3, d5 and e4, black pawns on c5, d6 and e5.',
        yourPlay:
          'The game becomes a race. Your play is on the kingside with the knight tour and f2-f4, or on the queenside with c3-c4 and a b2-b4 break. Choose one and commit.',
        theirPlay:
          'Black attacks the base of your chain with ...c6 or plays ...f5 to open lines at your king. If you close the centre, be sure your king can survive.',
      },
    ],
    plans: [
      {
        title: 'Re1 first, always',
        detail:
          'Before anything else in the main lines, the rook goes to e1. It defends e4, it makes Bxc6 and Nxe5 a real threat, and it is the piece that punishes a black king that stays in the centre.',
      },
      {
        title: 'c3 and d4, in that order',
        detail:
          'The pawn on c3 is what makes d4 possible: it means ...exd4 can be answered by cxd4 with two pawns abreast rather than a piece recapture. Playing d4 first is a different, worse opening.',
      },
      {
        title: 'The knight tour Nbd2-f1-g3',
        detail:
          'Exactly as in the Italian, and for the same reason: c3 is taken. The knight ends on g3 or e3 pointing at f5 and d5, and the whole kingside attack hangs on it.',
      },
      {
        title: 'h2-h3 before anything committal',
        detail:
          'The most famous "useful move" in chess. It stops ...Bg4 pinning the f3-knight, which matters enormously once you have committed to d4, and it gives your king air.',
      },
      {
        title: 'a2-a4 against the queenside expansion',
        detail:
          'Black\'s counterplay is ...a6, ...b5 and ...c5. Meeting it with a4 at the right moment either wins a pawn or forces Black to weaken the queenside permanently.',
      },
    ],
    keySquares: [
      { square: 'e5', why: 'The pawn the whole opening is about. Everything White does is designed to make defending it awkward.' },
      { square: 'd5', why: 'The knight tour\'s destination and the square that decides the closed positions. A knight there is worth more than a rook on an open file.' },
      { square: 'f5', why: 'Where the g3-knight is going. A knight on f5 next to a castled king is the single most dangerous piece in the opening.' },
      { square: 'c4', why: 'Where Black\'s knight wants to land after ...Na5. Taking that square away with a4 and Nbd2-b3 is worth a tempo or two.' },
    ],
    breaks: [
      { move: 'd2-d4', when: 'After c3, Re1, h3 and Bb3. It is the main break and it is worth waiting five moves to play it properly.' },
      { move: 'd4-d5 followed by c3-c4', when: 'When Black has committed to ...c5. Closing the centre and expanding on the queenside is a complete plan.' },
      { move: 'f2-f4', when: 'Only in a closed centre, with the king safe and the knight already on g3. It is the sharpest way to play for a win.' },
      { move: 'a2-a4', when: 'The moment Black plays ...b5 without ...c5 to back it up.' },
    ],
    middlegameFeel:
      'Rich and slow. You will have a small, permanent pull and a large number of reasonable plans, which is exactly what makes the Ruy Lopez both the most instructive and the most demanding opening here. Games are long. The reward is that you will understand every other 1.e4 opening better afterwards.',
    pitfalls: [
      {
        title: 'Taking on c6 too early',
        detail:
          'Bxc6 gives Black the bishop pair, and without a concrete follow-up it just helps. The Exchange Variation is a real opening, but playing it by accident because the knight was attacked is not.',
      },
      {
        title: 'Nxe5 when the pawn is not really hanging',
        detail:
          'After 4.Ba4 Nf6 5.O-O Be7, the e5 pawn is not free: 6.Nxe5? Nxe5 7.d4 hits the knight but ...Nxe4 or ...c6 gives Black a good game. Check the whole tactic before grabbing.',
      },
      {
        title: 'Letting Black get ...Na5 and ...c5 for free',
        detail:
          'If Black lands both moves before you get Bb3 and a4 in, the queenside counterplay is real and your kingside attack is a move too slow. Deal with the queenside first.',
      },
      {
        title: 'Closing the centre without a plan',
        detail:
          'd4-d5 is a commitment. If you play it with no idea whether you are attacking on the kingside or the queenside, you will drift and Black\'s ...f5 will arrive first.',
      },
    ],
  },
  {
    id: 'queens-gambit-declined',
    bigIdea:
      'The Exchange Queen\'s Gambit is a positional squeeze with a plan you can state in one sentence: trade on d5, then advance the b-pawn to attack Black\'s c6 pawn, and leave Black with a weakness that never goes away. It is called the minority attack because you go forward with fewer pawns than your opponent has - and it works because the point is not to win a pawn but to create a target.',
    structures: [
      {
        name: 'The Carlsbad structure',
        shape:
          'White pawns on a2, b2, c3, d4, e3, f2, g2, h2 against black pawns on a7, b7, c6, d5, f7, g7, h7. White has three queenside pawns against Black\'s two; Black has four kingside pawns against White\'s three.',
        yourPlay:
          'Play b2-b4-b5. When Black takes on b5 you recapture and the c6 pawn is backward on a half-open file forever. If Black declines the trade, push past to b6 and the a7 and c7 pawns are both weak.',
        theirPlay:
          'Black should ignore the queenside and attack on the kingside, where the extra pawn is, usually with ...Ne4, ...f5 and a rook lift. A Black player who defends passively on the queenside is already losing.',
      },
    ],
    plans: [
      {
        title: 'The minority attack: a4, b4, Rb1, b5',
        detail:
          'Four moves, always in roughly that order. The rook belongs on b1 before the pawn arrives on b5 so that the file opens onto something. This is the plan the whole opening exists to reach.',
      },
      {
        title: 'Bg5 and the pin',
        detail:
          'The bishop on g5 pins the f6-knight to the queen and makes ...Ne4 awkward. If Black spends a move on ...h6 and ...Be7, you have gained a tempo for the queenside plan.',
      },
      {
        title: 'Nge2 rather than Nf3',
        detail:
          'A quiet refinement worth knowing: the knight on e2 does not block the f-pawn and can go to g3 to cover e4 and f5. It also means ...Bg4 achieves nothing.',
      },
      {
        title: 'Central play with f2-f3 and e3-e4',
        detail:
          'The other plan. If Black commits everything to the kingside, break in the centre instead. Two credible plans is what makes this structure so pleasant to play.',
      },
    ],
    keySquares: [
      { square: 'c6', why: 'The target. Every queenside move you make is aimed at making that pawn backward and then attacking it.' },
      { square: 'e5', why: 'The outpost your knight wants. From e5 it supports the queenside advance and interferes with Black\'s kingside plans.' },
      { square: 'e4', why: 'The square Black\'s knight wants. Taking it away with f3 or Nge2-g3 removes half of Black\'s counterplay.' },
      { square: 'b5', why: 'Where the minority attack lands. The whole plan is measured by whether you get there before Black\'s kingside attack arrives.' },
    ],
    breaks: [
      { move: 'b4-b5', when: 'Once the rook is on b1 and a2-a4 has been played. Too early and Black meets it with ...a6 and nothing happens.' },
      { move: 'e3-e4', when: 'When Black has committed pieces to the kingside and the centre is loose. It needs f2-f3 first.' },
      { move: 'c4xd5', when: 'On move four or five, before Black can recapture with a piece. Recapturing with the e-pawn is what creates the Carlsbad structure.' },
    ],
    middlegameFeel:
      'Two players on opposite sides of the board doing completely different things. You are grinding on the queenside; Black is throwing pawns at your king. Whoever gets there first wins, and your side of the race is the more forgiving one because a weak pawn on c6 does not go away if you slow down.',
    pitfalls: [
      {
        title: 'Playing b4-b5 before Rb1',
        detail:
          'The exchange on b5 opens a file. If your rook is not on it, you have created a target for yourself instead of for Black.',
      },
      {
        title: 'Castling into the attack too fast',
        detail:
          'Black\'s counterplay is on the kingside. Before castling short, check whether ...f5 and ...Ne4 are coming, and consider whether your king is better on the queenside or in the centre for a move.',
      },
      {
        title: 'Trading too many pieces',
        detail:
          'A weak pawn on c6 is only worth something if you have pieces to attack it with. Trade the ones that defend it, keep the ones that attack it - a rook and a knight are worth more here than a pair of bishops.',
      },
    ],
  },
  {
    id: 'london-system',
    bigIdea:
      'The London is a set-up rather than an opening. You put the bishop on f4 before playing e3, add pawns on c3 and d4, knights on f3 and d2 and a bishop on d3, and you play very nearly the same twelve moves whatever Black does. That is its strength and its limitation: you will never be lost by move fifteen, and you will rarely have much either, but you will be the one who knows the position.',
    structures: [
      {
        name: 'The London pyramid',
        shape:
          'Pawns on c3, d4 and e3 with the bishop safely outside on f4. Solid, symmetrical-looking, and impossible to break down quickly.',
        yourPlay:
          'Get a knight to e5 supported by the d4 pawn and the f4 bishop, then play f2-f4 to cement it and Qf3 and Rf1-f3 to attack. That is the whole attacking plan.',
        theirPlay:
          'Black hits d4 with ...c5 and b2 with ...Qb6, which is exactly where your dark-squared bishop is not. If Black gets both in with a knight on c6, you are the one solving problems.',
      },
      {
        name: 'The Stonewall version',
        shape: 'Pawns on c3, d4, e3 and f4, with the knight already on e5.',
        yourPlay:
          'Attack. Bring the queen to f3 or h5, the rook to f3 and h3, and go for the black king. The pawn on f4 makes the e5 knight permanent.',
        theirPlay:
          'Black should have prevented this with ...c5 and ...Qb6 much earlier. Once the pawn reaches f4, Black\'s counterplay has to come in the centre with ...f6 or ...e5.',
      },
    ],
    plans: [
      {
        title: 'Ne5 supported by f2-f4',
        detail:
          'The knight on e5 is the whole opening. Get it there, support it with f4 so it cannot be traded off cheaply, and everything else follows.',
      },
      {
        title: 'The Bd3 and Qc2 battery',
        detail:
          'Put the bishop on d3 and the queen on c2 behind it, both pointing at h7. Combined with a knight on e5 and a rook that can swing across, this is the classic Greek gift set-up: the bishop sacrifices itself on h7, the knight comes to g5 with check, and the queen arrives on h5 with mate.',
      },
      {
        title: 'Rook lift Rf1-f3-h3',
        detail:
          'Once the pawn is on f4 the rook has a road to the kingside. It is slow, but in a closed position slow is affordable.',
      },
      {
        title: 'Qb3 to answer ...Qb6',
        detail:
          'When Black hits b2, offering the trade is usually simplest. You give up your attacking chances but keep a perfectly sound position, which is a fair deal when the alternative is defending.',
      },
    ],
    keySquares: [
      { square: 'e5', why: 'The outpost the whole system is built around. If you never get a knight there, the London has not really happened.' },
      { square: 'h7', why: 'Where the bishop on d3 is pointing. Every London tactic is some version of Bxh7+.' },
      { square: 'b2', why: 'The square your dark-squared bishop left behind. It is the one permanent concession the opening makes, and good opponents will find it.' },
      { square: 'd4', why: 'The base of your structure. When Black plays ...c5 you must decide whether to hold it with c3, push past with d5, or take.' },
    ],
    breaks: [
      { move: 'f2-f4', when: 'Once a knight is on e5 and your king is castled. It fixes the knight and opens the road for the rook.' },
      { move: 'd4xc5', when: 'When Black has played ...c5 and cannot recapture comfortably, or when it wins a tempo on a bishop.' },
      { move: 'e3-e4', when: 'Rarely, and only when Black has abandoned the centre. It is not the point of the system.' },
    ],
    middlegameFeel:
      'Comfortable and familiar every single time. You will play the same first ten moves for years. Against an unprepared opponent you get a free attack; against a prepared one you get a slightly worse version of a normal queen\'s pawn game, which is a perfectly reasonable place to be.',
    pitfalls: [
      {
        title: 'Playing the set-up on autopilot against ...c5 and ...Qb6',
        detail:
          'The one line where the moves have to change. If you play Bd3 and Nbd2 while Black hits b2 and d4, you will lose a pawn or a tempo. Answer with Qb3 or c3 and Nc3 first.',
      },
      {
        title: 'Allowing ...Nh5',
        detail:
          'Once your knight commits to d2, the f4 bishop has only one square. ...Nh5 forces Bg3 and the trade on g3 hands Black the bishop pair. Play h2-h3 or keep the knight flexible.',
      },
      {
        title: 'Attacking with too few pieces',
        detail:
          'Bd3 and Qc2 alone do not mate anyone. If Black has a knight on f6 and a bishop on e7, you need the e5 knight and the rook as well. Build up first, sacrifice second.',
      },
    ],
  },
  {
    id: 'sicilian-najdorf',
    bigIdea:
      'The Najdorf is the most ambitious defence in chess. The move ...a6 looks like nothing - it takes b5 away from White\'s pieces and prepares ...e5 or ...b5 - but it is the foundation of a plan to seize the initiative rather than survive. You will be attacked in almost every game, and you will attack back. This is the opening with the most theory here and the most winning chances.',
    structures: [
      {
        name: 'The Boleslavsky hole',
        shape:
          'Black plays ...e5 and ends with pawns on d6 and e5 and no pawn able to cover d5. The d5 square is a permanent hole.',
        yourPlay:
          'The hole is the price of the space and the initiative. Cover d5 with pieces - ...Be6, ...Nbd7-b6, ...Rc8 - and use the half-open c-file and the queenside majority. Speed matters more than structure here.',
        theirPlay:
          'White wants a knight or a bishop on d5 permanently. If White gets a piece there that cannot be traded, the game is usually strategically lost for Black.',
      },
      {
        name: 'Opposite-side castling',
        shape:
          'White castles long behind pawns on a2, b2 and c2 and throws the g- and h-pawns forward; Black castles short and pushes ...b5, ...b4 and ...a5.',
        yourPlay:
          'It is a pure race and you are usually a move ahead, because ...a6 has already been played. Open a file at the white king and do not defend unless you have to.',
        theirPlay:
          'White plays g4-g5 to drive the f6-knight away and then Bh6 or Nd5. Every tempo you spend defending is a tempo White gains.',
      },
    ],
    plans: [
      {
        title: 'The ...b5 advance',
        detail:
          'This is the whole point of the little pawn move on the sixth rank. Advancing the b-pawn two squares gains space on the queenside, prepares to push it again and hit the knight defending White\'s centre, and opens a diagonal for the light-squared bishop pointing straight at the e4 pawn.',
      },
      {
        title: 'Fighting for d5',
        detail:
          'Once you have played ...e5, every piece has one job: cover d5. The knight goes b8-d7-b6 or f6, the bishop to e6, a rook to c8 or d8. Trade off any white piece that lands there.',
      },
      {
        title: 'The ...Rc8 and ...Qc7 battery',
        detail:
          'The half-open c-file is your compensation for the hole on d5. A rook on c8 and a queen on c7 aimed at c2 and c3 is the standard queenside set-up.',
      },
      {
        title: 'The exchange sacrifice ...Rxc3',
        detail:
          'A pattern rather than a move: giving up a rook for the c3-knight to wreck White\'s pawn cover and take the d5 square away for good. It is a Sicilian speciality and worth knowing exists.',
      },
    ],
    keySquares: [
      { square: 'd5', why: 'The square the whole opening argues about. Black concedes it and then spends the game making sure White cannot use it.' },
      { square: 'e4', why: 'White\'s centre pawn with no pawn to defend it. Your ...b5, ...Bb7 and ...Nc5 all point at it.' },
      { square: 'b5', why: 'The square ...a6 takes away from White\'s pieces and the square your own pawn wants to occupy.' },
      { square: 'c3', why: 'The pawn or knight that holds White\'s queenside together. ...b4 hitting it is the move the whole plan builds towards.' },
    ],
    breaks: [
      { move: '...b7-b5', when: 'As soon as it is safe. It is the main plan, not a sideline.' },
      { move: '...d6-d5', when: 'When White\'s pieces are committed to the kingside. If ...d5 lands under good circumstances, Black is usually already better.' },
      { move: '...e6-e5', when: 'In the Scheveningen-style lines, to gain space at the cost of the d5 hole. Only when you can cover d5 afterwards.' },
      { move: '...f7-f5', when: 'In the English Attack once you have castled and White has committed to g4-g5. It opens lines at your own king, so it needs care.' },
    ],
    middlegameFeel:
      'Sharp, concrete and exhausting. Both kings are usually in danger and the evaluation can swing on a single tempo. You will lose games you should have drawn and win games you should have lost. If you want positions where calculation matters more than judgement, this is it.',
    pitfalls: [
      {
        title: 'Playing ...e5 without a plan for d5',
        detail:
          'The move is fine; the hole it leaves is not automatic compensation. If your pieces cannot reach e6, b6 and c8 quickly, White simply plants a knight on d5 and you have nothing.',
      },
      {
        title: 'Defending in the opposite-castling race',
        detail:
          'Moves like ...h6 and ...Kh8 usually lose the race. In a mutual attack, the side that spends a move defending is the side that gets mated. Count the tempi instead of feeling nervous.',
      },
      {
        title: 'Grabbing the b2 pawn without knowing the line',
        detail:
          'The poisoned pawn variation is a real, sound, and enormously complicated opening. Taking on b2 because it looks free, without knowing what follows, loses more games than it wins.',
      },
      {
        title: 'Treating it as a system',
        detail:
          'The Najdorf is not a set-up you can apply generically. Against 6.Bg5, 6.Be3 and 6.Bc4 the plans are genuinely different. If you do not want to learn three of them, a different defence will serve you better.',
      },
    ],
  },
  {
    id: 'french-defence',
    bigIdea:
      'The French answers 1.e4 by refusing to fight for e5 and building a wall instead: pawns on e6 and d5 facing White\'s e4 and d4. Black accepts one lasting problem - the bishop on c8 is stuck behind its own pawns - in exchange for a rock-solid structure and one very clear plan: attack the base of White\'s chain with ...c5 and never stop.',
    structures: [
      {
        name: 'The French chain',
        shape:
          'White pawns on d4 and e5; black pawns on d5 and e6, with ...c5 coming. Two diagonal chains pointing at each other.',
        yourPlay:
          'A pawn chain is attacked at its base, and White\'s base is d4. Hit it with ...c5, then add ...Nc6 and ...Qb6, and if White ever has to take on c5 or push d5, the tension is resolved on your terms.',
        theirPlay:
          'White has more space and attacks on the kingside, usually with f4-f5 or a piece sacrifice on the h-file. White\'s base is on d4, so White wants to keep it defended and get on with the attack.',
      },
      {
        name: 'The e5 wedge',
        shape: 'White has pushed the e-pawn past yours and the centre is completely locked: chains facing each other with no way through for either side except by a pawn break.',
        yourPlay:
          'The position is now a clear plan on both sides. Yours is queenside and central: ...c5, ...Nc6, ...Qb6, ...f6 to undermine e5. Nothing else matters.',
        theirPlay:
          'White plays for f4-f5 and a kingside attack. Every white piece heads that way; every black piece heads the other way.',
      },
    ],
    plans: [
      {
        title: 'The ...c5 break, immediately',
        detail:
          'Not a plan so much as an obligation. A French player who does not play ...c5 has a bad bishop and no counterplay. Play it as soon as the position allows.',
      },
      {
        title: '...Qb6 hitting the base',
        detail:
          'The queen on b6 attacks b2 and adds a second attacker to d4. It is the move that forces White to make a structural concession or spend time defending.',
      },
      {
        title: 'Solving the c8-bishop',
        detail:
          'Three routes exist: ...b6 and ...Ba6 to trade it, ...Bd7-a4 or ...Bd7-b5 to activate it, or accepting it as a defender. Choose one deliberately - drifting with a dead bishop is how French games are lost.',
      },
      {
        title: 'The ...f6 undermining break',
        detail:
          'When the centre is locked with a pawn on e5, ...f6 attacks the head of White\'s chain. It opens the f-file and your own king, so it needs preparation, but it is the move that turns defence into counterattack.',
      },
    ],
    keySquares: [
      { square: 'd4', why: 'The base of White\'s chain and the target of everything you do.' },
      { square: 'e5', why: 'The head of the chain. If you can win or undermine that pawn, White\'s attack loses its foundation.' },
      { square: 'f5', why: 'The square White\'s pawn or knight wants. A pawn on f5 makes White\'s attack real, so ...g6 or ...Nf5 of your own is often worth a move.' },
      { square: 'c8', why: 'Not a square you attack - the one your worst piece starts on. Every French game is partly about what happens to that bishop.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'Almost always, as early as possible. It is the whole plan.' },
      { move: '...f7-f6', when: 'When the centre is locked and your king is safe, usually after castling and ...Nh6-f7 or ...Rf8-f7.' },
      { move: '...b7-b5', when: 'In the closed positions, to gain queenside space once ...c5 has been played and answered.' },
    ],
    middlegameFeel:
      'Cramped and then suddenly not. For twenty moves you have less space and a worse bishop, and then the queenside opens and your pieces are the active ones. It requires patience and a willingness to defend, and it rewards knowing exactly what you are aiming at.',
    pitfalls: [
      {
        title: 'Not playing ...c5',
        detail:
          'Every bad French position comes from the same place: a black player who developed pieces sensibly and never challenged d4. Without ...c5 you have a wall and no plan.',
      },
      {
        title: 'Leaving the light-squared bishop on c8 all game',
        detail:
          'It will not solve itself. Decide by move ten whether it is going to b7, a6, d7-b5, or staying home as a defender, and then play towards that.',
      },
      {
        title: 'Playing ...f6 too early',
        detail:
          'It is a strong break, but it opens the f-file and the a2-g8 diagonal. Before playing it, make sure the king has left the centre and the f7 square is covered.',
      },
      {
        title: 'Panicking about the kingside attack',
        detail:
          'White\'s attack is slow when the centre is locked. Counting the moves it actually takes usually shows you have time for one more queenside move than you thought.',
      },
    ],
  },
  {
    id: 'caro-kann',
    bigIdea:
      'The Caro-Kann builds the same wall as the French but solves its problem first. By playing ...c6 before ...d5, Black keeps the c8-bishop\'s diagonal open, so the bishop gets to f5 or g4 before ...e6 shuts the door. The cost is a move and a little ambition; the reward is a structure with no weaknesses and a genuinely good bishop.',
    structures: [
      {
        name: 'The Classical structure',
        shape:
          'Black pawns on c6 and e6 with the light-squared bishop already outside on f5 or g6; White has pawns on d4 and h4-h5 in many lines.',
        yourPlay:
          'You are solid everywhere. The plan is ...Nd7, ...Ngf6, castle - often long - and then ...c5 to hit d4. Trade pieces happily; the endgames are pleasant.',
        theirPlay:
          'White has more space and often a kingside pawn advance. White wants to trap or trade your good bishop and open lines before you finish developing.',
      },
      {
        name: 'The exchange structure',
        shape: 'After cxd5 cxd5, symmetrical pawns with a half-open c-file for Black.',
        yourPlay:
          'Simple and comfortable. Get the bishop out to f5 or g4, play ...e6, ...Bd6 and ...Nc6, and use the c-file. There is very little to go wrong.',
        theirPlay:
          'White plays a minority attack with b4-b5 exactly as in the Queen\'s Gambit Exchange, or tries to make something of the extra central space.',
      },
    ],
    plans: [
      {
        title: 'Get the bishop out first',
        detail:
          'The single defining idea of the opening. ...Bf5 or ...Bg4 before ...e6, always. Everything else in the Caro-Kann is ordinary good chess; this is the part that makes it work.',
      },
      {
        title: '...Nd7 rather than ...Nc6',
        detail:
          'The queen\'s knight belongs on d7 where it does not block the c-pawn and can recapture on f6 with a piece. Keeping the c-pawn free is what allows the ...c5 break later.',
      },
      {
        title: 'The ...c5 break',
        detail:
          'You spent a move on ...c6; you get it back by playing ...c5 in one go later, hitting d4 when White is least ready.',
      },
      {
        title: 'Castling long',
        detail:
          'In the Classical lines, with White\'s pawns advancing on the kingside, the black king is often safer on the queenside. It also puts a rook on the d-file straight away.',
      },
    ],
    keySquares: [
      { square: 'f5', why: 'The square that justifies the whole opening. A bishop there is worth the tempo ...c6 cost.' },
      { square: 'd4', why: 'White\'s centre pawn, and the target of the ...c5 break.' },
      { square: 'e5', why: 'The outpost White wants for a knight. ...Nd7 and ...Bd6 keep it covered.' },
      { square: 'g6', why: 'Where the bishop retreats when White plays h4-h5. Knowing it is safe there is what makes the whole set-up playable.' },
    ],
    breaks: [
      { move: '...c6-c5', when: 'Once development is finished. It is the freeing move and the reason the c-pawn was kept flexible.' },
      { move: '...e6-e5', when: 'In lines where White has committed the d-pawn and your pieces are already active. Less common but very strong when it works.' },
      { move: '...f7-f6', when: 'Only in the advance variation with a pawn on e5, and only once the king is safe.' },
    ],
    middlegameFeel:
      'Calm. You will very rarely be worse and very rarely be much better. Games are decided by small advantages and endgame technique rather than by tactics, which makes it an excellent choice if you dislike being attacked and a poor one if you need to win every game.',
    pitfalls: [
      {
        title: 'Playing ...e6 before ...Bf5',
        detail:
          'This turns the Caro-Kann into a worse French - you have the bad bishop and you have spent an extra move on ...c6 to get it. Get the bishop out first, every time.',
      },
      {
        title: 'Letting the bishop get trapped after h4-h5',
        detail:
          'In the Classical, White plays h4 and h5 to hit the bishop on g6. Answering ...h6 at the right moment gives the bishop a retreat and stops the whole idea.',
      },
      {
        title: 'Never playing ...c5',
        detail:
          'Solid does not mean passive. A Caro-Kann where Black shuffles pieces and never breaks slowly loses to the space advantage.',
      },
    ],
  },
  {
    id: 'kings-indian-defence',
    bigIdea:
      'The King\'s Indian gives White the whole centre on purpose. Black fianchettoes, castles, and then attacks - usually with ...e5, ...f5, ...f4 and every piece thrown at the white king while White does the same on the other wing. It is the most one-sided opening here: you will not get many quiet games, and knowing the plan matters far more than knowing the moves.',
    structures: [
      {
        name: 'The locked Mar del Plata chain',
        shape:
          'White pawns on c4, d5 and e4; black pawns on c7, d6, e5 and f5 coming. The centre is completely closed and both sides attack on opposite wings.',
        yourPlay:
          'Play ...f5, ...f4, ...g5, ...h5 and mate. Genuinely - the knight goes to f6 or h5, the rook to f7 and g7, and the position is a race where you have the shorter road.',
        theirPlay:
          'White plays c4-c5 and breaks on the queenside, aiming at the b7 and c7 pawns and the a-file. White\'s attack is usually objectively faster; yours is aimed at the king.',
      },
      {
        name: 'The open centre after d4xe5',
        shape: 'White has resolved the central tension by taking on e5, so the d-file is open and the closed pawn chains that make this opening what it is never appear.',
        yourPlay:
          'This is the quiet version. Recapture, trade queens if offered, and play the endgame - the fianchettoed bishop is a good piece and the structure is symmetrical.',
        theirPlay:
          'White wants exactly this: no attack for Black and a small structural pull. Be honest about it and play the endgame properly rather than forcing an attack that is not there.',
      },
    ],
    plans: [
      {
        title: 'The ...f5-f4 pawn storm',
        detail:
          'The whole opening. ...f5 first, then ...f4 to fix the kingside and take e3 and g3, then bring the pieces. Once ...f4 lands, White\'s pieces cannot easily come back to defend.',
      },
      {
        title: 'The knight to f6-h5 or e8-f6',
        detail:
          'The f6-knight has to move for ...f5 to be strong. h5 keeps it active and supports ...f4; e8 is slower but keeps it out of the way for ...f5 and ...g5.',
      },
      {
        title: 'The rook lift ...Rf7-g7',
        detail:
          'Once the f-file is blocked by your own pawn on f4, the rook goes sideways. It is slow and it is decisive when the pawn storm arrives.',
      },
      {
        title: 'The ...c6 and ...a6 counterplay',
        detail:
          'The alternative to the pawn storm: hit the centre on the queenside instead and play for ...b5. Slower, safer, and a good choice when White\'s attack is faster than yours.',
      },
    ],
    keySquares: [
      { square: 'e5', why: 'The pawn that locks the centre. Once it is fixed by d4-d5, the game becomes a race and everything else follows.' },
      { square: 'f4', why: 'The square the storm is aimed at. A pawn there takes e3 and g3 from White\'s pieces and cannot be removed.' },
      { square: 'c5', why: 'Where White breaks. How quickly you can meet it decides whether your attack arrives first.' },
      { square: 'g7', why: 'Your bishop\'s home. In closed positions it looks bad; the moment the centre opens it is the best piece on the board.' },
    ],
    breaks: [
      { move: '...e7-e5', when: 'Early, to provoke d4-d5 and lock the centre. That is the position the whole opening wants.' },
      { move: '...f7-f5', when: 'As soon as the centre is closed and the knight has moved. Delaying it hands White a free tempo on the queenside.' },
      { move: '...c7-c6', when: 'When White\'s queenside break is faster than your kingside one. It is the sober plan and there is no shame in it.' },
    ],
    middlegameFeel:
      'A knife fight. Both sides attack, nobody defends, and the game is usually decided by which attack lands first. Expect to lose some games badly and win others in twenty-five moves. It is enormously instructive about pawn storms and attacking play.',
    pitfalls: [
      {
        title: 'Playing ...f5 with the knight still on f6',
        detail:
          'The move needs preparation. Without ...Nh5 or ...Ne8 first, ...f5 loses time and the attack never gets going.',
      },
      {
        title: 'Defending the queenside',
        detail:
          'The hardest habit to break. Moves like ...Rb8 and ...a6 to hold the queenside usually just lose the race. The King\'s Indian is a bet that your attack is faster - play it that way or play something else.',
      },
      {
        title: 'Trading queens without noticing',
        detail:
          'The attack needs the queen. If White offers a queen trade in the Mar del Plata lines, taking it usually means agreeing to be slightly worse for the rest of the game.',
      },
      {
        title: 'Playing it against every White set-up',
        detail:
          'Against the Fianchetto and Four Pawns systems the plans genuinely change. If you play ...e5 and ...f5 by rote, you will get a bad position without understanding why.',
      },
    ],
  },
]
