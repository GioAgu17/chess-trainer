import type { ContentDictionary } from '../../keys'

/** Le guide di studio: Partita Italiana e Partita Spagnola. */
export const studyItalianRuy: ContentDictionary = {
  /* ------------------------------------------------------ Partita Italiana */
  'study.italian-game.bigIdea':
    'L\'Italiana è la più lenta fra le buone aperture. Il Bianco mette un alfiere sulla diagonale c4-f7, puntella il centro con c3 e d3, e poi spende sei o sette mosse a migliorare i pezzi prima di toccare di nuovo un pedone. La rottura d3-d4 è tutto il senso dell\'apertura, e arriva solo quando dietro è pronto tutto. Se ti piace sapere quali saranno le tue prossime quattro mosse prima ancora di sederti, questa è l\'apertura per te.',
  'study.italian-game.feel':
    'Tranquilla e leggermente sbilanciata a tuo favore. Non succede niente per quindici mosse e poi succede tutto insieme. Dall\'apertura non uscirai quasi mai peggio, e quasi mai molto meglio: quello che ottieni è una posizione in cui tu conosci il piano e il tuo avversario improvvisa.',
  'study.italian-game.s.0.name': 'La coppia c3-d3',
  'study.italian-game.s.0.shape':
    'Pedoni bianchi in c3, d3 ed e4 contro pedoni neri in d6 ed e5. Niente è stato cambiato, niente è fissato, ed entrambi hanno una scacchiera piena di pezzi da sistemare.',
  'study.italian-game.s.0.you':
    'Il pedone in c3 esiste per sostenere d3-d4. Finché non la giochi hai una struttura flessibile e inattaccabile; una volta giocata hai un centro ampio. Scegli per la rottura il momento in cui il Nero non ha una buona risposta.',
  'study.italian-game.s.0.them':
    'Il Nero ti rispecchia e aspetta, di solito con ...a6 e ...Aa7 così che l\'alfiere non venga colpito quando d4 finalmente arriva, e con ...Ca5 per cambiare il tuo alfiere buono.',
  'study.italian-game.s.1.name': 'Il centro ampio dopo cxd4',
  'study.italian-game.s.1.shape':
    'Hai giocato d4, il Nero ha preso con ...exd4 e tu hai ripreso con cxd4: pedoni in d4 ed e4 fianco a fianco.',
  'study.italian-game.s.1.you':
    'È per questo che è stata giocata tutta l\'apertura. Spingi d4-d5 per prendere spazio e tagliare fuori il cavallo di c6, oppure tieni la coppia e attacca sull\'ala dove il Nero è più debole.',
  'study.italian-game.s.1.them':
    'Il Nero vuole colpire il centro con ...c5 o ...d5, oppure bloccare in d5 con un cavallo. Se non riesce a rompere, il vantaggio di spazio diventa permanente.',
  'study.italian-game.p.0.title': 'Il giro di cavallo Cbd2-f1-g3',
  'study.italian-game.p.0.detail':
    'Il cavallo di donna non ha niente di utile da fare in c3 (quella casa la vuole il pedone c), quindi prende la strada panoramica: d2, poi f1, poi g3 oppure e3. Da g3 guarda f5 e h5; da e3 guarda d5 e f5. Costa tre mosse e le vale tutte e tre.',
  'study.italian-game.p.1.title': 'Torre in e1, poi d3-d4',
  'study.italian-game.p.1.detail':
    'Metti la torre in e1 prima di rompere. Quando il centro si apre, il lavoro lo fanno la torre e la colonna e, e una donna o un re neri ancora sulla colonna sono il motivo per cui molte partite italiane finiscono in fretta.',
  'study.italian-game.p.2.title': 'Ab3 e a2-a4',
  'study.italian-game.p.2.detail':
    'Ritira l\'alfiere prima che il Nero giochi ...Ca5, e prosegui con a4 per fermare ...b5. Questa piccola coppia di mosse toglie al Nero quasi tutto il controgioco sull\'ala di donna per il resto della partita.',
  'study.italian-game.p.3.title': 'h2-h3 come mossa gratis',
  'study.italian-game.p.3.detail':
    'Ogni volta che non sai cosa fare, h3 è quasi sempre utile. Toglie per sempre g4 a un alfiere e a un cavallo neri, e dà una casa al tuo re. In un\'apertura lenta, una mossa utile per sempre non è mai sprecata.',
  'study.italian-game.k.0.why':
    'L\'unica casa difesa dal solo re nero. L\'alfiere in c4 la punta dalla terza mossa e ogni tattica dell\'apertura passa di lì.',
  'study.italian-game.k.1.why':
    'La casa a cui punta il tuo giro di cavallo. Un cavallo in d5 che non si può prendere di solito vuol dire partita decisa.',
  'study.italian-game.k.2.why':
    'La casa che tutta l\'apertura è costruita per occupare. Se un cavallo nero ci arriva per primo, occupatene subito.',
  'study.italian-game.k.3.why':
    'Dove va il cavallo nero per cambiare il tuo alfiere buono. Rispondere con Ab3 e a4 lascia il cavallo arenato sul bordo.',
  'study.italian-game.b.0.when':
    'Una volta che la torre è in e1, il cavallo ha lasciato d2 e l\'alfiere è tornato in b3. Giocarla prima significa riprendere con un pezzo invece che con il pedone c, il che butta via tutto il senso.',
  'study.italian-game.b.1.when':
    'Quando il Nero ha impegnato l\'alfiere in b6. Il pedone arriva con tempo e alla lunga può vincere l\'alfiere o costringere a una concessione.',
  'study.italian-game.b.2.when':
    'Di rado, e solo con il cavallo già in g3 e il re al sicuro. È un piano vero contro un re nero in g8 senza controgioco.',
  'study.italian-game.f.0.title': 'Giocare d4 troppo presto',
  'study.italian-game.f.0.detail':
    'L\'errore più comune in assoluto. Senza c3 giocata e senza la torre in e1, ...exd4 ti costringe a riprendere con un pezzo, e il Nero guadagna tempo colpendolo. La rottura si prepara, non si gioca e basta.',
  'study.italian-game.f.1.title': 'Cg5 sperando nel Fegato Fritto',
  'study.italian-game.f.1.detail':
    'Contro un avversario preparato, Cg5 perde soltanto tempo: il Nero gioca ...O-O o ...De7 e il tuo cavallo deve tornare indietro. La costruzione tranquilla rende meglio sotto il livello di maestro proprio perché non dipende dalla collaborazione dell\'avversario.',
  'study.italian-game.f.2.title': 'Dimenticarsi del cavallo in d4',
  'study.italian-game.f.2.detail':
    'Con pedoni in c3 e d3, un cavallo nero che atterra in d4 non è una scocciatura: è un problema. Rispondi subito con Cxd4 o cacciandolo via. Lasciarlo lì mentre prosegui con il tuo piano fa perdere partite.',

  /* ------------------------------------------------------ Partita Spagnola */
  'study.ruy-lopez.bigIdea':
    'La Spagnola pone una domanda che nessun\'altra apertura pone: giocando Ab5 attacchi il cavallo che difende e5, quindi ogni mossa del Nero deve tenere in vita quel pedone. Il Bianco poi spende l\'apertura a costruire lo schema ideale - pedoni in c3 e d4, torre in e1, il giro di cavallo fino a g3 - mentre il Nero si arrabatta per prendere spazio sull\'ala di donna. È l\'apertura più rispettata degli scacchi perché ogni idea che contiene si ritrova ovunque.',
  'study.ruy-lopez.feel':
    'Ricca e lenta. Avrai un piccolo vantaggio permanente e un gran numero di piani ragionevoli, che è proprio ciò che rende la Spagnola sia la più istruttiva sia la più impegnativa apertura di questo repertorio. Le partite sono lunghe. La ricompensa è che dopo capirai meglio ogni altra apertura di 1.e4.',
  'study.ruy-lopez.s.0.name': 'Il centro spagnolo',
  'study.ruy-lopez.s.0.shape':
    'Pedoni bianchi in c3, d4 ed e4; pedoni neri in d6 ed e5 con la tensione irrisolta. La classica tabiya di Chigorin.',
  'study.ruy-lopez.s.0.you':
    'Tieni la tensione il più a lungo possibile. Ogni mossa che fai migliora un pezzo; ogni mossa che fa il Nero deve risolvere un problema. Se il Nero prende in d4 ottieni il centro ampio; se non prende mai, prima o poi giochi d4-d5 e prendi spazio.',
  'study.ruy-lopez.s.0.them':
    'Il Nero gioca ...Ca5 per colpire l\'alfiere, poi ...c5 per colpire d4, e cerca di sistemare ...Cc6-b7 o ...Cc4 prima che arrivi la costruzione bianca sull\'ala di re.',
  'study.ruy-lopez.s.1.name': 'Il centro chiuso dopo d4-d5',
  'study.ruy-lopez.s.1.shape':
    'Una catena bloccata: pedoni bianchi in c3, d5 ed e4, pedoni neri in c5, d6 ed e5.',
  'study.ruy-lopez.s.1.you':
    'La partita diventa una corsa. Il tuo gioco è sull\'ala di re con il giro di cavallo e f2-f4, oppure sull\'ala di donna con c3-c4 e la rottura b2-b4. Scegline uno e impegnati.',
  'study.ruy-lopez.s.1.them':
    'Il Nero attacca la base della tua catena con ...c6 oppure gioca ...f5 per aprire linee sul tuo re. Se chiudi il centro, assicurati che il tuo re possa sopravvivere.',
  'study.ruy-lopez.p.0.title': 'Te1 per prima, sempre',
  'study.ruy-lopez.p.0.detail':
    'Prima di ogni altra cosa nelle linee principali, la torre va in e1. Difende e4, rende Axc6 e Cxe5 una minaccia vera, ed è il pezzo che punisce un re nero che resta al centro.',
  'study.ruy-lopez.p.1.title': 'c3 e d4, in quest\'ordine',
  'study.ruy-lopez.p.1.detail':
    'È il pedone in c3 a rendere possibile d4: significa che a ...exd4 si può rispondere cxd4 con due pedoni affiancati invece di una ripresa di pezzo. Giocare prima d4 è un\'altra apertura, e peggiore.',
  'study.ruy-lopez.p.2.title': 'Il giro di cavallo Cbd2-f1-g3',
  'study.ruy-lopez.p.2.detail':
    'Esattamente come nell\'Italiana, e per lo stesso motivo: c3 è occupata. Il cavallo finisce in g3 o e3 puntato su f5 e d5, e tutto l\'attacco sull\'ala di re dipende da lui.',
  'study.ruy-lopez.p.3.title': 'h2-h3 prima di qualsiasi impegno',
  'study.ruy-lopez.p.3.detail':
    'La più famosa "mossa utile" degli scacchi. Impedisce ...Ag4 che inchioderebbe il cavallo di f3, cosa che conta enormemente una volta che ti sei impegnato con d4, e dà aria al tuo re.',
  'study.ruy-lopez.p.4.title': 'a2-a4 contro l\'espansione sull\'ala di donna',
  'study.ruy-lopez.p.4.detail':
    'Il controgioco del Nero è ...a6, ...b5 e ...c5. Rispondere con a4 al momento giusto o vince un pedone o costringe il Nero a indebolire per sempre l\'ala di donna.',
  'study.ruy-lopez.k.0.why':
    'Il pedone attorno a cui gira tutta l\'apertura. Ogni cosa che il Bianco fa è pensata per rendere scomoda la sua difesa.',
  'study.ruy-lopez.k.1.why':
    'La destinazione del giro di cavallo e la casa che decide le posizioni chiuse. Un cavallo lì vale più di una torre su una colonna aperta.',
  'study.ruy-lopez.k.2.why':
    'Dove va il cavallo di g3. Un cavallo in f5 accanto a un re arroccato è il pezzo più pericoloso di tutta l\'apertura.',
  'study.ruy-lopez.k.3.why':
    'Dove vuole atterrare il cavallo nero dopo ...Ca5. Togliergli quella casa con a4 e Cbd2-b3 vale un tempo o due.',
  'study.ruy-lopez.b.0.when':
    'Dopo c3, Te1, h3 e Ab3. È la rottura principale e vale la pena aspettare cinque mosse per giocarla come si deve.',
  'study.ruy-lopez.b.1.when':
    'Quando il Nero si è impegnato con ...c5. Chiudere il centro ed espandersi sull\'ala di donna è un piano completo.',
  'study.ruy-lopez.b.2.when':
    'Solo a centro chiuso, con il re al sicuro e il cavallo già in g3. È il modo più tagliente di giocare per la vittoria.',
  'study.ruy-lopez.b.3.when': 'Nel momento in cui il Nero gioca ...b5 senza ...c5 a sostenerlo.',
  'study.ruy-lopez.f.0.title': 'Prendere in c6 troppo presto',
  'study.ruy-lopez.f.0.detail':
    'Axc6 dà al Nero la coppia degli alfieri, e senza un seguito concreto lo aiuta e basta. La Variante di Cambio è un\'apertura vera, ma giocarla per sbaglio perché il cavallo era attaccato non lo è.',
  'study.ruy-lopez.f.1.title': 'Cxe5 quando il pedone non è davvero in presa',
  'study.ruy-lopez.f.1.detail':
    'Dopo 4.Aa4 Cf6 5.O-O Ae7 il pedone e5 non è gratis: 6.Cxe5? Cxe5 7.d4 colpisce il cavallo ma ...Cxe4 o ...c6 danno al Nero una buona partita. Controlla tutta la tattica prima di prendere.',
  'study.ruy-lopez.f.2.title': 'Lasciare al Nero ...Ca5 e ...c5 gratis',
  'study.ruy-lopez.f.2.detail':
    'Se il Nero infila entrambe le mosse prima che tu giochi Ab3 e a4, il controgioco sull\'ala di donna è reale e il tuo attacco sull\'ala di re è in ritardo di una mossa. Occupati prima dell\'ala di donna.',
  'study.ruy-lopez.f.3.title': 'Chiudere il centro senza un piano',
  'study.ruy-lopez.f.3.detail':
    'd4-d5 è un impegno. Se la giochi senza sapere se attacchi sull\'ala di re o su quella di donna, andrai alla deriva e il ...f5 del Nero arriverà per primo.',
}
