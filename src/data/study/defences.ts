import type { StudyGuide } from '../types'

/**
 * Study guides for the defences - what the opponent's system is trying to do,
 * and what the position feels like once you have answered it.
 */
export const DEFENCE_STUDY: StudyGuide[] = [
  {
    id: 'vs-catalan-open',
    bigIdea:
      'The Open Catalan is a bargain. You take the pawn on c4 knowing you will give it back, because the three or four moves White spends recovering it are the moves you use to solve the one problem the Catalan creates: the bishop on g2 staring down the long diagonal at your queenside. By the time White has the pawn back, your own bishop is on b7 looking straight at it and the position is level.',
    structures: [
      {
        name: 'The queenside pawn wedge',
        shape:
          'Black pawns on a6 and b5 with the bishop on b7; White has pawns on d4 and e2 and a queen that has spent three moves getting to c4 or c2.',
        yourPlay:
          'The pawns on a6 and b5 are space, not weakness. They deny b5 and c4 to White\'s knights, they support ...c5, and they give your own knight the c4 square later.',
        theirPlay:
          'White wants a2-a4 to break the chain, or e2-e4 to build a centre while your queenside pawns are loose. Both need time, and time is what you have taken away.',
      },
      {
        name: 'After the ...c5 break',
        shape:
          'The centre opens; often White is left with an isolated d-pawn or hanging pawns on c- and d-files.',
        yourPlay:
          'Blockade on d5 with a knight and pile on the d-pawn. With bishops facing each other on the long diagonal, neither is doing much, and the isolated pawn is the story.',
        theirPlay:
          'White wants the open lines for the pieces and a kingside attack before you consolidate. An isolated pawn is a weakness in the endgame and a strength in the middlegame.',
      },
    ],
    plans: [
      {
        title: 'Take, castle, then ...a6 and ...b5',
        detail:
          'In that order, every time. Trying to hold the pawn with ...b5 before castling walks into a4 and Ne5 tricks that all need a king on e8 to work.',
      },
      {
        title: 'The bishop to b7',
        detail:
          'This is what the whole line is for. The bishop on b7 answers the bishop on g2, and the long diagonal stops being a one-way street.',
      },
      {
        title: 'The ...c5 freeing break',
        detail:
          'Once ...Bb7 and ...Nbd7 are in, ...c5 opens the position at the moment your pieces are ready and White\'s queen has been chased around.',
      },
      {
        title: 'Meeting a2-a4 with ...b4',
        detail:
          'Not ...bxa4. Keeping the pawns connected keeps the queenside closed, which suits the side that is a little behind in development.',
      },
    ],
    keySquares: [
      { square: 'a8', why: 'The end of the long diagonal, and what the bishop on g2 is really aiming at. Getting a bishop to b7 or a pawn to c6 is how you deal with it.' },
      { square: 'c4', why: 'The pawn you take and the square you eventually own once ...b5 is in.' },
      { square: 'e5', why: 'Where White\'s knight wants to land. ...Nc6 and ...Nbd7 keep it covered.' },
      { square: 'd5', why: 'The blockading square once the centre opens. A knight there against an isolated d-pawn is the ideal endgame piece.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'After ...Bb7 and ...Nbd7. It is the move that equalises and everything before it is preparation.' },
      { move: '...b5-b4', when: 'The moment White plays a2-a4. Keeping the pawns joined is worth more than winning the a-pawn.' },
      { move: '...e6-e5', when: 'Rarely, when White\'s knight has left f3 and the d4 pawn is loose. It is the sharper way to free the position.' },
    ],
    middlegameFeel:
      'A little tense early and then completely comfortable. The first eight moves matter enormously and the rest is ordinary good chess. Once ...Bb7 and ...c5 are in, there is nothing left of White\'s edge.',
    pitfalls: [
      {
        title: 'Trying to keep the pawn',
        detail:
          'The most common way to lose to the Catalan. Taking on c4 and then defending it with ...b5 and ...c6 gives White exactly the target the a4 break needs. Take it, hold it for four moves, then give it back.',
      },
      {
        title: 'Playing ...b5 before castling',
        detail:
          'Every trick White has against ...b5 - Ne5, a4, Qa4+ - needs the black king on e8. Castle first and most of them disappear.',
      },
      {
        title: 'Fianchettoing without a pawn on d5',
        detail:
          'Putting a bishop on b7 while the long diagonal is empty means it stares straight into White\'s bishop with White a tempo ahead. Block the diagonal with ...d5 first, or trade on c4 so your pawn on b5 does the blocking.',
      },
      {
        title: 'Drifting',
        detail:
          'A Catalan where Black never plays ...c5 is a Catalan Black slowly loses. Pick the break and prepare it; do not shuffle.',
      },
    ],
  },
  {
    id: 'vs-catalan-closed',
    bigIdea:
      'The Closed Catalan is the opposite bargain. You leave the pawn on d5 as a permanent wall in front of White\'s bishop and accept a slightly cramped position in exchange for having no weaknesses at all. The whole game is about one thing: choosing your freeing break and getting it in before you run out of useful moves.',
    structures: [
      {
        name: 'The c6-d5-e6 triangle',
        shape:
          'Black pawns on c6, d5 and e6 with pieces behind them; White has pawns on c4, d4 and g3 and a fianchettoed bishop.',
        yourPlay:
          'The triangle is one of the soundest structures in chess. The pawn on d5 blocks the bishop, c6 makes d5 permanent, and the queen gets a5 and b6. Play ...b6 and ...Bb7, then break with ...c5.',
        theirPlay:
          'White plays Qc2, Nbd2 and e2-e4, or trades on d5 and plays a minority attack. White\'s space advantage only counts if you never break.',
      },
      {
        name: 'The Exchange structure',
        shape: 'After cxd5 exd5: symmetrical pawns and a half-open e-file for Black.',
        yourPlay:
          'The trade is a relief - your light-squared bishop finally has a diagonal. Get it to f5 or g4 before ...Nbd7, then use the e-file.',
        theirPlay:
          'White plays Qb3 hitting b7 and d5, Bf4, Rc1 and b4-b5. It is the Carlsbad minority attack with an extra fianchetto.',
      },
    ],
    plans: [
      {
        title: 'Build the triangle, then break',
        detail:
          'Develop the dark-squared bishop, castle, prop the centre up with the c-pawn, bring the queen\'s knight to d7, open a diagonal with the b-pawn, put the bishop on the long diagonal, and only then break. Seven moves, always roughly in that order, and the position after them is equal.',
      },
      {
        title: '...Nbd7 rather than ...Nc6',
        detail:
          'From d7 the knight supports both ...c5 and ...e5 and keeps the c-pawn free. On c6 it blocks the pawn that has to move.',
      },
      {
        title: 'Meeting e2-e4 with ...dxe4',
        detail:
          'When the wall finally comes down, take. Your pieces are on good squares and White\'s extra space evaporates the moment the centre opens.',
      },
      {
        title: '...a5 as a useful waiting move',
        detail:
          'It stops b2-b4, gives the d7-knight the b6 and c5 route, and costs nothing. In a slow position, a move that is permanently useful is never wasted.',
      },
    ],
    keySquares: [
      { square: 'd5', why: 'The wall. As long as it stands, White\'s best piece is a spectator.' },
      { square: 'c5', why: 'Where the freeing break lands. The whole opening is arranged around getting there.' },
      { square: 'e4', why: 'White\'s break square. Covering it with ...Ne4 of your own, or being ready to take, is what defuses the plan.' },
      { square: 'b7', why: 'Your bishop\'s eventual home, once ...b6 has been played and cxd5 is no longer awkward.' },
    ],
    breaks: [
      { move: '...c6-c5', when: 'After ...b6 and ...Bb7. It is the main freeing break.' },
      { move: '...e6-e5', when: 'When White\'s knight has left f3 or the d4 pawn is under-defended. Sharper, and it comes with tempo.' },
      { move: '...d5xc4 followed by ...b5', when: 'If White ever leaves the c4 pawn loose. It transposes into an Open Catalan a tempo up.' },
    ],
    middlegameFeel:
      'Patient. You will spend twenty moves being slightly worse and never in danger. It suits players who are happy to defend and to win in the endgame, and it frustrates players who need something to happen.',
    pitfalls: [
      {
        title: 'Never breaking',
        detail:
          'The only way to lose this position. Solid structures with no plan lose to space advantages over forty moves. Decide on ...c5 or ...e5 by move twelve and build towards it.',
      },
      {
        title: 'Playing ...Nc6',
        detail:
          'It looks like development and it blocks the pawn that has to move. In this structure the queen\'s knight belongs on d7.',
      },
      {
        title: 'Meeting cxd5 with ...Nxd5',
        detail:
          'Recapturing with the pawn keeps the wall. Recapturing with the knight hands White e2-e4 for free and opens the long diagonal.',
      },
    ],
  },
  {
    id: 'vs-london',
    bigIdea:
      'The London player has done this three hundred times and you have not. What evens the odds is that the bishop on f4 has left the queenside, so b2 has only the queen behind it and d4 has only the c-pawn. Hit both with ...c5 and ...Qb6 and the system-player is suddenly out of the system on move five.',
    structures: [
      {
        name: 'After the queens come off on b6',
        shape:
          'You have played ...c5-c4 and recaptured on b6 with the a-pawn: pawns on b6, b7 and c4 against White\'s b2 and c3, with the a-file half open.',
        yourPlay:
          'Queenside space and an open file. Play ...Na5-b3 or ...Ra4, keep the pawn on c4 as a wedge, and slowly squeeze. With queens off there is no attack to fear.',
        theirPlay:
          'White has to break with b2-b3 or e3-e4 to get any play at all. Neither is easy with the c4 pawn fixing the queenside.',
      },
    ],
    plans: [
      {
        title: '...c5 and ...Qb6, in that order',
        detail:
          'The two moves the London has no comfortable answer to. Every reply - Qb3, Qc1, Nc3 - is either a trade you are happy with or a passive move.',
      },
      {
        title: 'Insert ...c4 before trading queens',
        detail:
          'When White offers the trade with Qb3, push the pawn first. It gains a tempo, fixes the queenside and means you recapture on b6 with a healthy structure.',
      },
      {
        title: 'Get the bishop to f5 before ...e6',
        detail:
          'The London\'s dream is a black bishop stuck on c8. Take it out first and the whole system is toothless.',
      },
      {
        title: 'Winning the bishop pair with ...Nh5',
        detail:
          'Once White\'s knight is on d2, the f4 bishop has one square. ...Nh5 forces Bg3, and taking there costs you nothing and wins the bishop pair.',
      },
    ],
    keySquares: [
      { square: 'b2', why: 'The pawn the bishop left behind. It is why ...Qb6 is so annoying - but only take it when White has to defend it, never when Nc3 and Nb5 are available.' },
      { square: 'd4', why: 'The pawn ...c5 attacks. Everything White does has to keep it defended.' },
      { square: 'e5', why: 'Where White\'s knight wants to sit. ...Nc6, ...Bd6 and a pawn on d5 keep it out.' },
      { square: 'f5', why: 'Your bishop\'s square. It has one chance to get there and it is before ...e6.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'On move three or four, before White has a chance to consolidate with c3 and Nbd2 in comfort.' },
      { move: '...c5-c4', when: 'Only to gain a tempo on a queen on b3. Otherwise it releases the tension on d4 for nothing.' },
      { move: '...e6-e5', when: 'In lines where White has not got a knight to e5. It equalises immediately.' },
    ],
    middlegameFeel:
      'You will feel like you are the one with the plan, which is unusual against a system player. Games are quiet and slightly better for you, and they are won by grinding the queenside rather than by tactics.',
    pitfalls: [
      {
        title: 'Playing ...e6 early',
        detail:
          'The single most common way to get a bad position against the London. It shuts in the bishop that the whole system wants to smother.',
      },
      {
        title: 'Taking on b2 when Nc3 is available',
        detail:
          'The pawn is genuinely poisoned in some move orders: Nb5 traps the queen. Attack b2, do not always take it.',
      },
      {
        title: 'Releasing the tension with ...cxd4',
        detail:
          'It solves White\'s only problem. Keep the pressure on d4 until White has to make a concession.',
      },
      {
        title: 'Trading queens without ...c4 first',
        detail:
          'A small thing that changes the whole structure. The free tempo is what turns an equal position into a pleasant one.',
      },
    ],
  },
  {
    id: 'vs-trompowsky',
    bigIdea:
      'The Trompowsky is a bluff dressed as an opening. White threatens to double your pawns on move two, and if you let it happen on White\'s terms you spend the game with a bad structure and no plan. Answering with 2...Ne4 refuses the trade, gains a tempo on the bishop, and leaves White with no c-pawn to support the centre.',
    structures: [
      {
        name: 'The d5-c5 pressure structure',
        shape:
          'Black pawns on c5 and d5 with a knight on e4; White has a pawn on d4 supported by e3 and, crucially, no pawn on c4.',
        yourPlay:
          'The knight on e4 is supported by the d5 pawn and cannot be chased by a pawn. Add ...Nc6 and ...Qb6 and White has to solve the b2 and d4 problems at the same time.',
        theirPlay:
          'White wants c2-c3 and Nbd2 to challenge the knight, or f2-f3 and e3-e4 to build a centre. The second one weakens the a7-g1 diagonal.',
      },
      {
        name: 'The doubled f-pawns, if you allow them',
        shape: 'After Bxf6 exf6: black pawns on d7, f6 and f7, with the bishop pair.',
        yourPlay:
          'Not the recommended line, but perfectly playable: the half-open e-file and two bishops are real compensation. Play ...Bd6, ...O-O, ...Re8 and ...f5.',
        theirPlay:
          'White has the better structure and plays c4, Nc3 and a slow squeeze. In the long run the pawns matter more than the bishops.',
      },
    ],
    plans: [
      {
        title: '2...Ne4, immediately',
        detail:
          'It refuses the doubled pawns, attacks the bishop and makes White move the same piece twice. Everything good in the line follows from it.',
      },
      {
        title: '...d5 and ...c5',
        detail:
          'Support the knight with ...d5, then hit the centre with ...c5. With no white c-pawn, d4 has only pieces defending it.',
      },
      {
        title: '...Qb6 hitting b2 and d4',
        detail:
          'The same double attack as against the London, and for the same reason: the dark-squared bishop has left the queenside.',
      },
      {
        title: 'The ...Qa5+ resource against f2-f3',
        detail:
          'When White plays f3 to kick the knight, ...Qa5+ comes with tempo. If White blocks with c3, the knight takes it and wins material. Knowing this makes the whole f3 plan unplayable.',
      },
    ],
    keySquares: [
      { square: 'e4', why: 'Where your knight sits. Supported by a pawn on d5, no white pawn can remove it.' },
      { square: 'd4', why: 'White\'s centre pawn with no c-pawn behind it. The target of ...c5 and ...Qb6.' },
      { square: 'b2', why: 'What the bishop on g5 or f4 has abandoned. ...Qb6 is the move that makes it matter.' },
      { square: 'e3', why: 'The hole f2-f3 creates. A queen or a knight landing there is very hard to remove.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'As soon as ...d5 supports the knight. It is the move that puts the question to d4.' },
      { move: '...c5-c4', when: 'When you want a queenside bind, exactly as against the London.' },
      { move: '...e7-e5', when: 'In the doubled-pawn lines, to open the position for the bishop pair.' },
    ],
    middlegameFeel:
      'Slightly better for you and slightly odd. Nobody has a standard structure and both sides have to think from move three. That suits the player who has read this and not the one who plays the Trompowsky to avoid theory.',
    pitfalls: [
      {
        title: 'Allowing Bxf6 for nothing',
        detail:
          'If you play 2...d5 or 2...e6 and White simply takes, you have given away the structure and got no time in return. Challenge the bishop first.',
      },
      {
        title: 'Playing ...g5 to trap the bishop',
        detail:
          'It looks like it wins a piece. After Bg3 Nxg3 hxg3 your kingside is in ruins and the h-file is open at your king.',
      },
      {
        title: 'Retreating the knight without provocation',
        detail:
          'The knight on e4 is the best piece on the board. Bring it home only when a pawn actually attacks it, and take the free tempi first.',
      },
    ],
  },
  {
    id: 'vs-colle',
    bigIdea:
      'The Colle and the Zukertort are the same trap with different scenery: a modest-looking pyramid of pawns, a bishop on d3 pointing at h7, and a knight coming to e5. Then White breaks with e3-e4 and the position explodes. There is exactly one move that defuses all of it, and it is ...Bf5 on move three.',
    structures: [
      {
        name: 'The Colle pyramid',
        shape: 'White pawns on c3, d4 and e3, knights on f3 and d2, bishop on d3.',
        yourPlay:
          'Get your bishop out to f5 before ...e6, then trade it for the one on d3. With the attacking bishop gone, the pyramid is just a solid position with no punch.',
        theirPlay:
          'White wants Ne5, Bd3, Qc2 or Qe2, and then e3-e4 opening everything with pieces already aimed at your king.',
      },
      {
        name: 'The Zukertort double fianchetto',
        shape: 'The same pyramid, but with b2-b3 and Bb2 instead of c2-c3.',
        yourPlay:
          'Fight for e5 rather than for the light squares: ...Bd6, ...Nbd7 and a pawn on d5. The bishop on b2 needs the long diagonal open, so keep it shut.',
        theirPlay:
          'White plays Ne5, f2-f4 and a rook lift. It is a genuine attacking system if you let it get going.',
      },
    ],
    plans: [
      {
        title: '3...Bf5 - the whole antidote',
        detail:
          'One move. It gets the bishop outside the pawn chain and takes aim at d3. Everything else in the line is ordinary development.',
      },
      {
        title: 'Trade on d3 without hesitation',
        detail:
          'You lose the bishop pair and remove the piece pointing at h7. That is a very good trade against a system whose only idea is a kingside attack.',
      },
      {
        title: 'Fight for e5 with ...Bd6 and ...Nbd7',
        detail:
          'A knight on e5 supported by pawns is what makes the Colle work. Two defenders of the square is enough to stop it entirely.',
      },
      {
        title: 'Answer e3-e4 with ...dxe4 and ...c5',
        detail:
          'When the break finally comes, take and then hit the centre. With no bishop on d3, opening the position simply helps the better-developed side, which by then is you.',
      },
    ],
    keySquares: [
      { square: 'd3', why: 'The bishop\'s square and the whole attack. Trading it there is the point of the defence.' },
      { square: 'h7', why: 'Where the attack lands. Every Colle tactic is Bxh7+ in some form.' },
      { square: 'e5', why: 'The outpost. Two defenders and White has no system left.' },
      { square: 'e4', why: 'The break square. Being ready to take there turns White\'s plan into a liability.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'Once the bishop is traded and the king is safe. It challenges d4 and frees the position.' },
      { move: '...e6-e5', when: 'In the Zukertort lines, after ...Qe7 and ...Nbd7. It is the move that turns equality into an edge.' },
      { move: '...c6-c5 in two steps', when: 'In the Slav-like lines after c2-c4. Slower but very solid.' },
    ],
    middlegameFeel:
      'Dead level and completely safe, which is a good outcome against a system designed to produce a free attack. Games are decided by ordinary middlegame play rather than by opening preparation.',
    pitfalls: [
      {
        title: 'Playing ...e6 before ...Bf5',
        detail:
          'The mistake the whole system feeds on. It buries the bishop and hands White the Greek gift set-up for free.',
      },
      {
        title: 'Castling into the attack',
        detail:
          'If the bishop on d3 is still on the board and a knight is heading for e5, castling short is a decision, not a formality. Trade the bishop first.',
      },
      {
        title: 'Ignoring the e3-e4 break',
        detail:
          'It is not a threat you can shrug off. Either take on e4 when it comes or make sure ...Ne4 and ...f5 have made it impossible.',
      },
    ],
  },
  {
    id: 'vs-blackmar-diemer',
    bigIdea:
      'The Blackmar-Diemer is a pure speed bet: White gives a pawn to open the f-file and get every piece pointing at f7 before you have castled. It is not sound, and every published assessment says so. What makes it dangerous is that White has seen the resulting positions a hundred times and you have not. The answer is to take the pawn, refuse the second one, and get your king to safety.',
    structures: [
      {
        name: 'The Euwe set-up',
        shape:
          'Black pawns on e6, f7, g7 and h7 with the king castled short and a pawn more; White has pieces on f3, g5 and d3 and an open f-file.',
        yourPlay:
          'A pawn up with no weaknesses. Trade pieces, hold h7 with ...h6 and ...Nbd7-f8 if needed, and hit the centre with ...c5.',
        theirPlay:
          'White needs a sacrifice to work. Every trade makes that less likely, which is why simplification is the whole plan for Black.',
      },
    ],
    plans: [
      {
        title: 'Take on e4, then on f3',
        detail:
          'Accept both times. Declining leaves White with a big centre and the initiative and you with nothing - the worst of both worlds.',
      },
      {
        title: '...e6, ...Be7, castle',
        detail:
          'Three moves and the gambit is over. Nothing clever is needed; the position is winning for the side that finishes development.',
      },
      {
        title: 'Trade queens whenever offered',
        detail:
          'An endgame a pawn up against a gambit player is the ideal outcome. Every piece that comes off makes the material count more.',
      },
      {
        title: 'Against 3.f3 without Nc3, play ...e5',
        detail:
          'The Blackmar proper is refuted outright: dxe5 Qxd1+ Kxd1 Nc6 and White has no castling rights, no attack, and is losing the e5 pawn.',
      },
    ],
    keySquares: [
      { square: 'f7', why: 'What every white piece is aimed at. Castling short takes it out of the firing line.' },
      { square: 'e6', why: 'Where your pawn goes. It covers d5 and f5 at once, which is most of the defence.' },
      { square: 'd4', why: 'White\'s centre pawn, and the pawn you must not take with the queen - that is the Halosar trap.' },
      { square: 'h7', why: 'The second target once White gets a bishop to d3. ...h6 backed by a knight is the standard answer.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'Once castled. It hits d4 and opens lines for your own pieces after the attack has stalled.' },
      { move: '...b7-b5', when: 'When White castles long. The queenside pawns arrive faster than anything on the other wing.' },
      { move: '...e6-e5', when: 'Against 3.f3, immediately - it is the refutation, not a break.' },
    ],
    middlegameFeel:
      'Uncomfortable for eight moves and then completely winning. The danger is entirely in the first phase. If you know the set-up and play it without improvising, you will be a healthy pawn up with a safe king by move fourteen.',
    pitfalls: [
      {
        title: 'Taking on d4 with the queen',
        detail:
          'The Halosar trap. Be3 comes with tempo and White develops with threats while your king sits on e8. One pawn is plenty.',
      },
      {
        title: 'Trying to hold the pawn with ...f5',
        detail:
          'It wrecks the light squares around your king exactly where White wants to attack. Give the pawn back on f3 and develop.',
      },
      {
        title: 'Fianchettoing with ...g6',
        detail:
          'Playable, but it invites Bh6 and h4-h5, which is the attack the gambit was designed to produce. The Euwe set-up with ...e6 gives White nothing.',
      },
      {
        title: 'Leaving the king in the centre one move too long',
        detail:
          'Every white idea depends on it. Castling is more urgent than any developing move once the bishop reaches d3.',
      },
    ],
  },
  {
    id: 'vs-kings-gambit',
    bigIdea:
      'Two hundred years of theory says accepting the King\'s Gambit is playable, and two hundred years of practice says the person who has studied it wins. Declining with 2...Bc5 sidesteps all of it: the bishop takes the diagonal that 2.f4 just opened, White can never take on e5 because of ...Qh4+, and you get a normal game where White has a weakened kingside and you have not memorised anything.',
    structures: [
      {
        name: 'The unresolved tension',
        shape:
          'White pawns on e4 and f4, black pawns on d6 and e5. Nobody has taken and nobody wants to.',
        yourPlay:
          'Keep the pawn on e5. As long as it stands, the f4 pawn is fixed and the e3, g3 and d4 squares are permanently soft. Develop and let White worry about it.',
        theirPlay:
          'White wants to play d4 and build a centre, or fxe5 at a moment when the recapture costs you something. Neither is easy while the bishop on c5 hits g1.',
      },
      {
        name: 'After fxe5 dxe5',
        shape: 'A half-open f-file for White and an open d-file for you.',
        yourPlay:
          'Your structure is healthy and the d-file points at White\'s queen. Play ...Nf6, ...Nc6 and get a knight to d4.',
        theirPlay:
          'The f-file is White\'s compensation - but only if White gets castled first, which the bishop on c5 makes awkward.',
      },
    ],
    plans: [
      {
        title: '2...Bc5 and remember why',
        detail:
          'The bishop makes the pawn on e5 untouchable. If White takes it, the queen comes to h4 with check, White has to block on the third rank, and the queen collects the e-pawn with check and then the rook in the corner. Club players grab that pawn all the time.',
      },
      {
        title: '...d6, ...Nf6, ...Nc6, ...Bg4',
        detail:
          'Four ordinary developing moves and you have a good position. The pin on f3 is the one with teeth: it attacks the piece holding the centre together.',
      },
      {
        title: 'Trade on f3 when h3 comes',
        detail:
          'Removing the knight leaves d4 and e5 unguarded and White with a slightly loose kingside. Giving up the bishop pair for that is a good deal.',
      },
      {
        title: 'The knight to d4',
        detail:
          'Once the f3-knight is gone, ...Nd4 lands on a square no pawn can attack, hitting c2 and whatever is on f3. It is usually the best piece on the board.',
      },
    ],
    keySquares: [
      { square: 'g1', why: 'The end of the diagonal 2.f4 opened. The bishop on c5 points at it for the whole game.' },
      { square: 'h4', why: 'Where the queen check lands if White ever takes on e5. Knowing this one tactic is most of the opening.' },
      { square: 'd4', why: 'The outpost that appears once the f3-knight is traded. No white pawn can ever chase a knight from there.' },
      { square: 'e5', why: 'The pawn that fixes f4. Keep it defended and White\'s structure stays weak.' },
    ],
    breaks: [
      { move: '...exf4', when: 'Almost never in this repertoire. Only if White has committed the bishop badly and you win something concrete.' },
      { move: '...d6-d5', when: 'When White has castled and the centre is stable. It opens the position for your better structure.' },
      { move: '...Nd4 (a piece, not a pawn)', when: 'After the trade on f3. Treat it as the main "break" of the line.' },
    ],
    middlegameFeel:
      'Normal, which is exactly the point. Your opponent wanted a wild attacking game and got a quiet one where their f-pawn is a long-term liability. Very little to memorise and very little that can go wrong.',
    pitfalls: [
      {
        title: 'Taking on f4 out of habit',
        detail:
          'The whole repertoire depends on not taking. Once the bishop is on c5, taking gives White d4 with tempo and everything the gambit wanted.',
      },
      {
        title: 'Playing ...Qh4+ when it is not winning',
        detail:
          'The check only works after White has taken on e5. In other positions g2-g3 chases the queen and you lose two tempi.',
      },
      {
        title: 'Castling short too early',
        detail:
          'The f-file is going to open. Develop first, see where White\'s king is going, and castle when the position is clear.',
      },
    ],
  },
  {
    id: 'vs-scotch',
    bigIdea:
      'The Scotch opens the centre on move three, before anyone has developed. That is its point and its problem: with pieces coming out fast, the side who knows where they belong is much better placed. The classical answer - ...Bc5, ...Qf6, ...Nge7, ...Ne5, ...Qg6 - develops every piece with a threat and reaches complete equality by move eight.',
    structures: [
      {
        name: 'The open centre',
        shape:
          'One white pawn on e4 against one black pawn on d6 or d7, with all the minor pieces out and the d- and e-files open or half open.',
        yourPlay:
          'Rapid development and pressure on e4. The knight on e5 and the queen on g6 hit c4, d3, e4 and g2 between them, which is why White never gets time to consolidate.',
        theirPlay:
          'White wants e4-e5 gaining space, or a big centre with c3 and f4. Both need a move you never give.',
      },
      {
        name: 'The doubled c-pawns after Nxc6',
        shape: 'Black pawns on c6 and c7 after ...dxc6, with the bishop pair.',
        yourPlay:
          'The doubled pawns control d5 and b5 and are not weak while the c-file stays shut. The bishop pair and quick ...O-O-O are the real assets.',
        theirPlay:
          'White plays for an endgame where the structure counts. Avoiding a queen trade on unfavourable terms is worth a tempo.',
      },
    ],
    plans: [
      {
        title: '4...Bc5 hitting the knight',
        detail:
          'The bishop takes the diagonal to f2 and attacks the knight in the centre. It is the move that stops White getting Nxc6 and e4-e5 in comfortably.',
      },
      {
        title: '...Qf6 - unusual, and correct',
        detail:
          'The queen adds a second attacker to d4 and eyes f2. It looks like a beginner move and it is the main line, because in an open position with White\'s knight loose it genuinely works.',
      },
      {
        title: '...Nge7 rather than ...Nf6',
        detail:
          'The f6 square is taken by the queen, and from e7 the knight supports her, keeps lines clear and heads for g6 or c6.',
      },
      {
        title: '...Ne5 and ...Qg6',
        detail:
          'The knight hits the c4 bishop and the queen swings to hit e4 and g2. Two moves, two threats, and White has to spend both replies defending.',
      },
    ],
    keySquares: [
      { square: 'd4', why: 'Where White\'s knight sits. Every one of your first four moves attacks it or the pieces defending it.' },
      { square: 'f2', why: 'The soft square in an uncastled White position. The bishop on c5 and the queen on f6 both point at it.' },
      { square: 'e5', why: 'Your knight\'s outpost. From there it hits c4 and d3 and cannot be chased by a pawn.' },
      { square: 'g2', why: 'What the queen on g6 attacks. It is why White has to play g3 or Bf3 and lose time.' },
    ],
    breaks: [
      { move: '...d7-d6', when: 'The standard follow-up: solid, opens the c8-bishop, and covers e5.' },
      { move: '...d7-d5', when: 'When White has castled and the centre is stable - it frees everything in one move.' },
      { move: '...d5 against the Scotch Gambit', when: 'Immediately after e4-e5 attacks your knight. It hits the bishop on c4 and wins material.' },
    ],
    middlegameFeel:
      'Open, fast and completely balanced. Games are short and decided by tactics rather than by structure. The set-up is easy to remember because every move has a reason you can see on the board.',
    pitfalls: [
      {
        title: 'Trading on d4 with the bishop',
        detail:
          'Bxd4 gives White the bishop pair and a free tempo. Keep the tension - the knight in the centre is White\'s problem, not yours.',
      },
      {
        title: '4...Qh4 grabbing at e4',
        detail:
          'Nb5 comes with the threat of Nxc7+, the queen ends up chased, and your king is stuck on d8. It is one of the oldest traps in the opening.',
      },
      {
        title: 'Recapturing on c6 with the b-pawn',
        detail:
          'It looks like it builds a centre. It shuts in the c8-bishop and leaves the queenside pawns weak. Take with the d-pawn.',
      },
      {
        title: 'Meeting the Scotch Gambit by grabbing pawns',
        detail:
          'Against 4.Bc4 the answer is development, not material. ...Bc5 and ...Nf6 and the ...d5 counter-punch beat any attempt to hold two extra pawns.',
      },
    ],
  },
  {
    id: 'vs-vienna',
    bigIdea:
      'The Vienna is a King\'s Gambit with the safety catch on: by playing Nc3 first, White defends e4 and can then play f2-f4 without ...Qh4+ ruining everything. The answer is a rule you can apply anywhere - meet a wing attack with a strike in the centre. Against 3.f4, ...d5 turns the whole gambit inside out.',
    structures: [
      {
        name: 'The knight on e4',
        shape:
          'A black knight on e4 supported by ...f5, against a white pawn on e5 and pawns on d4 and c2.',
        yourPlay:
          'The knight is a permanent guest. Support it with ...f5, develop with ...Be7, ...O-O and ...Nc6, and undermine the e5 pawn.',
        theirPlay:
          'White wants Bd3 to trade the knight off, or d4-d5 to gain space. Neither works once the knight has a pawn behind it.',
      },
      {
        name: 'The doubled c-pawns after ...Nxc3 bxc3',
        shape: 'White pawns on c2 and c3 after the trade on c3, in the fianchetto lines.',
        yourPlay:
          'A permanent structural target. Fix it with ...c5 or ...b6 and ...Ba6, hold e5, and play the long game.',
        theirPlay:
          'White gets a half-open b-file and a broad centre in return. It is only good for White if the position opens.',
      },
    ],
    plans: [
      {
        title: '2...Nf6 first',
        detail:
          'It develops, hits e4 and means f2-f4 can always be met in the centre. Nothing else keeps that option open.',
      },
      {
        title: '3.f4 answered by ...d5',
        detail:
          'The refutation. Not ...exf4. After fxe5 Nxe4 you have a knight in the middle of the board, a healthy structure and no attack to defend.',
      },
      {
        title: 'Against 3.Bc4, ...Nc6 and ...Na5',
        detail:
          'Do not take on e4. Develop, then trade off the bishop that makes the whole line dangerous. A knight on the rim is a fine price for White\'s best piece.',
      },
      {
        title: 'Against 3.g3, hit the centre with ...d5',
        detail:
          'The same principle applied to a slow move. White has spent a tempo on the wing; take the middle.',
      },
    ],
    keySquares: [
      { square: 'e4', why: 'The knight\'s home in the gambit lines, and White\'s pawn in the others. Whoever controls it controls the game.' },
      { square: 'd5', why: 'The break square. Every good Vienna answer runs through it.' },
      { square: 'f7', why: 'What the bishop on c4 is aimed at. It is why grabbing on e4 loses to Qh5.' },
      { square: 'c4', why: 'The bishop\'s square. Trading it with ...Na5 removes White\'s only attacking piece.' },
    ],
    breaks: [
      { move: '...d7-d5', when: 'Against 3.f4 and 3.g3, immediately. It is the answer to almost everything.' },
      { move: '...f7-f5', when: 'Once the knight is on e4 and the king is castled. It makes the outpost permanent.' },
      { move: '...c7-c5', when: 'Later, to undermine a white pawn on d4 or e5 once development is finished.' },
    ],
    middlegameFeel:
      'Sharp for four moves and then comfortable. The Vienna Gambit looks frightening and folds to one accurate pawn move. Most of the danger is in the 3.Bc4 lines, where the whole game is about not taking a free pawn.',
    pitfalls: [
      {
        title: 'Taking on e4 against 3.Bc4',
        detail:
          'Qh5! hits f7 and the knight at once. It is the Frankenstein-Dracula trap and it catches everybody once.',
      },
      {
        title: 'Taking on f4',
        detail:
          'Accepting the Vienna Gambit gives White e4-e5 with tempo on your knight and a big centre. Answer in the middle instead.',
      },
      {
        title: 'Trading the e4 knight off',
        detail:
          '...Nxc3 hands White a broad centre and an open b-file. Keep the knight where it is and make White work to remove it.',
      },
    ],
  },
  {
    id: 'vs-danish-goring',
    bigIdea:
      'The Danish and the Goring are the same idea two moves apart: give up one pawn, often two, to get bishops on c4 and b2 raking your kingside before you have castled. It is genuinely dangerous if you accept and try to hold everything. The recipe is to give the pawn straight back with ...d5, which opens the position at the moment White has spent all the time and you have all the pieces.',
    structures: [
      {
        name: 'The isolated d-pawn',
        shape:
          'After ...d5, exd5, ...Qxd5 and cxd4, White has a lone pawn on d4 and you have a queen in the middle that cannot be chased.',
        yourPlay:
          'Blockade and attack. ...Nc6 and ...Bg4 hit the pawn and its defender; ...Bb4+ and ...Bxc3+ leave White with doubled pawns as well.',
        theirPlay:
          'White wants piece activity to make up for the structure. Trading pieces is bad for White and good for you.',
      },
      {
        name: 'The Danish accepted',
        shape: 'White bishops on c4 and b2, no white centre pawns at all, and Black two pawns up.',
        yourPlay:
          'Not the recommended line, but if you get there, give a pawn back with ...d5! to block the c4 bishop and open your own position.',
        theirPlay:
          'Every white piece is already aimed at your king. This is the game the Danish player has practised, which is why declining is more practical.',
      },
    ],
    plans: [
      {
        title: '3...d5 - decline by counter-attacking',
        detail:
          'The whole recipe. It gives one pawn back to open the centre while White has one piece developed and you have none of the problems.',
      },
      {
        title: '...Qxd5 without fear',
        detail:
          'The queen is safe on d5 because White\'s c-pawn has gone to c3, so there is no Nc3 to gain a tempo. That small detail is what makes the line work.',
      },
      {
        title: '...Nc6 and ...Bg4',
        detail:
          'Develop with threats: the knight hits d4, the bishop pins the knight that defends it. White has to spend moves solving it.',
      },
      {
        title: '...Bb4+ then ...Bxc3+ and ...Qc4',
        detail:
          'The forcing sequence that finishes the job. The check forces Nc3, the trade doubles the pawns, and ...Qc4 hits the bishop on e2 and the pawn on c3 at once.',
      },
    ],
    keySquares: [
      { square: 'd5', why: 'Where your pawn goes and then your queen. It is safe there, which is the entire idea.' },
      { square: 'd4', why: 'White\'s isolated pawn once the dust settles. The permanent target.' },
      { square: 'c3', why: 'Where the knight is forced to block, and where it becomes a doubled pawn.' },
      { square: 'f7', why: 'What the bishop on c4 is aimed at in the accepted lines. Not a problem in the declined ones - which is the point.' },
    ],
    breaks: [
      { move: '...d7-d5', when: 'On move three against the Danish and move four against the Goring. Immediately, either way.' },
      { move: '...c7-c5', when: 'Later, to hit the isolated d-pawn from the side once pieces are developed.' },
      { move: '...d5 in the accepted lines', when: 'The moment White\'s bishop reaches c4. It is the Schlechter Defence and it is the way out.' },
    ],
    middlegameFeel:
      'Level material, better structure, and a slightly better game. The whole gambit evaporates by move six and what is left is a normal open position where White has a weak pawn. Very little to remember and almost nothing that can go wrong.',
    pitfalls: [
      {
        title: 'Taking both pawns and trying to hold on',
        detail:
          'It is objectively playable and practically terrible. White has prepared those positions and you have not.',
      },
      {
        title: 'Taking on d4 with the queen',
        detail:
          'The d4 pawn is defended by the knight on f3 once White has developed. Check before grabbing.',
      },
      {
        title: 'Trading on f3 before inserting the check',
        detail:
          'Bxf3 first lets Bxf3 come with tempo on your queen. The move order ...Bb4+ then ...Bxc3+ is what wins the concession.',
      },
    ],
  },
  {
    id: 'vs-english',
    bigIdea:
      'The English is a Sicilian with an extra move: White fights for d5 from the wing and waits for you to commit. Answering with ...e5 turns the tables - now you are the one with a pawn in the middle, and being the side with the central pawn is worth more than the extra tempo White has. It becomes a reversed Sicilian where you have the better structure.',
    structures: [
      {
        name: 'The reversed Sicilian',
        shape:
          'A black pawn on e5 against a white pawn on c4, with knights on c3, f3, c6 and f6 and a bishop heading for g2.',
        yourPlay:
          'Break with ...d5 as soon as it is safe. After cxd5 Nxd5, retreat to b6 rather than trading on c3 - the retreat keeps the long diagonal shut.',
        theirPlay:
          'White plays a3 and b4 for queenside space, or d3 and a slow build-up. White\'s pieces need the long diagonal open to be worth anything.',
      },
      {
        name: 'The advanced e-pawn',
        shape: 'A black pawn on e4 after White has played an early Nf3 and been pushed back.',
        yourPlay:
          'The pawn on e4 takes d3 and f3 away from White\'s pieces. Support it with ...Bf5, ...Re8 and ...d5 and it is a genuine space advantage.',
        theirPlay:
          'White plays d3 to undermine it. Meeting d3 with ...exd3 and recapturing with a piece keeps the position comfortable.',
      },
    ],
    plans: [
      {
        title: '1...e5 immediately',
        detail:
          'The most principled reply to a flank opening: occupy the centre while White is controlling it from a distance.',
      },
      {
        title: 'The ...d5 break',
        detail:
          'The move the whole opening builds towards. Once it lands you have equal space and a healthier structure.',
      },
      {
        title: '...Nb6, never ...Nxc3',
        detail:
          'The single most important move in the line. Trading on c3 opens the b-file and gives the g2 bishop a clear diagonal; retreating to b6 keeps both shut and guards c4 and d5.',
      },
      {
        title: 'Meeting 2.Nf3 with ...e4',
        detail:
          'Push past rather than defend. The knight has to go to d4 or g5 and you gain time and space.',
      },
    ],
    keySquares: [
      { square: 'd5', why: 'The square the English fights for and your break lands on. Everything both sides do is about it.' },
      { square: 'a8', why: 'The end of the long diagonal. Keeping a knight on b6 rather than trading on c3 is how you keep it closed.' },
      { square: 'd4', why: 'The square your knight or bishop wants once ...e5 and ...Nc6 are in. From there it hits c2 and f3.' },
      { square: 'c4', why: 'White\'s wing pawn. Once you play ...d5 it either trades or becomes a target.' },
    ],
    breaks: [
      { move: '...d7-d5', when: 'After ...Nf6 and ...Nc6, and especially when White has spent a move on g2-g3.' },
      { move: '...e5-e4', when: 'Against an early Nf3, immediately - it comes with tempo.' },
      { move: '...a7-a5', when: 'To meet a queenside expansion with a3 and b4 before it gets going.' },
    ],
    middlegameFeel:
      'Slow, manoeuvring and quietly pleasant. Nobody gets mated in the English. Games are decided by who understands the structure better, which after reading this is you.',
    pitfalls: [
      {
        title: 'Trading on c3 after ...Nxd5',
        detail:
          'The most common mistake in the whole variation. It hands White a big centre, an open b-file and a bishop on g2 with nothing in its way.',
      },
      {
        title: 'Copying the fianchetto',
        detail:
          'Symmetry favours the side with the extra tempo, and that is White. Take the centre instead.',
      },
      {
        title: 'Pushing ...e4 without support',
        detail:
          'Once the long diagonal opens, Ng5 hits the pawn and a bishop on g2 sees a8. Loose pieces on the queenside become tactics.',
      },
    ],
  },
  {
    id: 'vs-reti',
    bigIdea:
      'The Reti is a waiting game with a gambit attached. White develops flexibly, keeps every transposition available, and attacks your centre with pieces rather than pawns. The practical problem is not any single line - it is choosing a set-up that is good against a Catalan, an English and a Queen\'s Gambit all at once. ...d5 and ...e6 is that set-up.',
    structures: [
      {
        name: 'The solid wall',
        shape:
          'Black pawns on c5, d5 and e6 with pieces developed behind them; White has pawns on c4, b3 and g3 and bishops on g2 and b2.',
        yourPlay:
          'You have the more solid centre and nothing to defend. The plan is ...Nc6, ...b6 and ...Bb7, then look for ...d4 once White has committed a knight.',
        theirPlay:
          'White attacks d5 from the flanks and hopes you drift. Without a pawn break of its own, the Reti is a slow squeeze that needs your cooperation.',
      },
    ],
    plans: [
      {
        title: '...e6 rather than ...dxc4',
        detail:
          'Support the centre. Unlike the Catalan, White has no committed d-pawn, so trying to hold the c4 pawn with ...b5 loses to a4 and b3.',
      },
      {
        title: 'Develop, castle, then ...c5',
        detail:
          'Once the king is safe, ...c5 turns a passive set-up into a good one. It takes d4 away from White\'s pieces and gives your queen squares.',
      },
      {
        title: '...b6 and ...Bb7',
        detail:
          'Bishops facing bishops on the long diagonal. Symmetrical and balanced, and it neutralises White\'s best piece.',
      },
      {
        title: 'The ...d4 advance',
        detail:
          'The one way to play for more. Once White has a knight on c3 or d2 that cannot easily blockade, pushing past gains space and shuts the g2 bishop out permanently.',
      },
    ],
    keySquares: [
      { square: 'd5', why: 'The pawn the whole opening attacks. Supported by ...e6 and ...c6 it is unbreakable.' },
      { square: 'd4', why: 'The square ...c5 takes away and the square your pawn eventually wants.' },
      { square: 'e5', why: 'Where White\'s knight wants to land. ...Nbd7 or ...Nc6 and a bishop on e7 keep it covered.' },
      { square: 'b7', why: 'Your bishop\'s square, and where it finally answers the one on g2.' },
    ],
    breaks: [
      { move: '...c7-c5', when: 'Right after castling. It is the move that gives the position a point.' },
      { move: '...d5-d4', when: 'When White has committed a knight and cannot blockade. It gains space and closes the diagonal.' },
      { move: '...e6-e5', when: 'Against the King\'s Indian Attack set-up, where the centre is White\'s weak point.' },
    ],
    middlegameFeel:
      'Quiet, symmetrical, and decided by small things. There is very little tactical danger and very little to memorise. The player who improves their pieces more purposefully wins, which makes it a good structure to learn positional play in.',
    pitfalls: [
      {
        title: 'Taking on c4 and trying to hold it',
        detail:
          'The Reti Gambit trap is real: ...dxc4 and ...b5 loses to a4, axb5 and b3. Support the centre instead.',
      },
      {
        title: 'Playing ...e6 without ever playing ...c5',
        detail:
          'Solid becomes passive very quickly. The break is not optional; it is the difference between equal and slowly worse.',
      },
      {
        title: 'Shutting in the light-squared bishop against the King\'s Indian Attack',
        detail:
          'When White plays g3 without c4, get the bishop to g4 or f5 before ...e6, exactly as against the Colle.',
      },
    ],
  },
]
