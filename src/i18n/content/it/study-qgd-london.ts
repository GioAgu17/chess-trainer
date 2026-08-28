import type { ContentDictionary } from '../../keys'

/** Le guide di studio: Gambetto di Donna Variante di Cambio e Sistema Londra. */
export const studyQgdLondon: ContentDictionary = {
  /* --------------------------------------- Gambetto di Donna, Variante di Cambio */
  'study.queens-gambit-declined.bigIdea':
    'La Variante di Cambio del Gambetto di Donna è una stretta posizionale con un piano che si riassume in una frase: cambia in d5, poi avanza il pedone b per attaccare il pedone c6 del Nero e lasciagli una debolezza che non se ne va più. Si chiama attacco di minoranza perché avanzi con meno pedoni di quanti ne ha l\'avversario, e funziona perché lo scopo non è vincere un pedone ma creare un bersaglio.',
  'study.queens-gambit-declined.feel':
    'Due giocatori su lati opposti della scacchiera che fanno cose completamente diverse. Tu macini sull\'ala di donna; il Nero lancia pedoni contro il tuo re. Vince chi arriva prima, e la tua metà della corsa è la più indulgente, perché un pedone debole in c6 non sparisce se rallenti.',
  'study.queens-gambit-declined.s.0.name': 'La struttura di Carlsbad',
  'study.queens-gambit-declined.s.0.shape':
    'Pedoni bianchi in a2, b2, c3, d4, e3, f2, g2, h2 contro pedoni neri in a7, b7, c6, d5, f7, g7, h7. Il Bianco ha tre pedoni sull\'ala di donna contro due del Nero; il Nero ha quattro pedoni sull\'ala di re contro tre del Bianco.',
  'study.queens-gambit-declined.s.0.you':
    'Gioca b2-b4-b5. Quando il Nero prende in b5 tu riprendi e il pedone in c6 resta arretrato su una colonna semiaperta per sempre. Se il Nero rifiuta il cambio, spingi oltre in b6 e i pedoni a7 e c7 sono entrambi deboli.',
  'study.queens-gambit-declined.s.0.them':
    'Il Nero dovrebbe ignorare l\'ala di donna e attaccare sull\'ala di re, dove ha il pedone in più, di solito con ...Ce4, ...f5 e una torre sollevata. Un Nero che difende passivamente sull\'ala di donna sta già perdendo.',
  'study.queens-gambit-declined.p.0.title': 'L\'attacco di minoranza: a4, b4, Tb1, b5',
  'study.queens-gambit-declined.p.0.detail':
    'Quattro mosse, quasi sempre in quest\'ordine. La torre appartiene a b1 prima che il pedone arrivi in b5, così che la colonna si apra su qualcosa. È il piano per cui esiste tutta l\'apertura.',
  'study.queens-gambit-declined.p.1.title': 'Ag5 e l\'inchiodatura',
  'study.queens-gambit-declined.p.1.detail':
    'L\'alfiere in g5 inchioda il cavallo di f6 alla donna e rende scomodo ...Ce4. Se il Nero spende una mossa in ...h6 e ...Ae7, hai guadagnato un tempo per il piano sull\'ala di donna.',
  'study.queens-gambit-declined.p.2.title': 'Cge2 invece di Cf3',
  'study.queens-gambit-declined.p.2.detail':
    'Una raffinatezza tranquilla che vale la pena conoscere: il cavallo in e2 non blocca il pedone f e può andare in g3 a coprire e4 e f5. E in più ...Ag4 non ottiene niente.',
  'study.queens-gambit-declined.p.3.title': 'Gioco centrale con f2-f3 ed e3-e4',
  'study.queens-gambit-declined.p.3.detail':
    'L\'altro piano. Se il Nero impegna tutto sull\'ala di re, rompi invece al centro. Avere due piani credibili è ciò che rende questa struttura così piacevole da giocare.',
  'study.queens-gambit-declined.k.0.why':
    'Il bersaglio. Ogni mossa che fai sull\'ala di donna punta a rendere arretrato quel pedone e poi ad attaccarlo.',
  'study.queens-gambit-declined.k.1.why':
    'L\'avamposto che il tuo cavallo vuole. Da e5 sostiene l\'avanzata sull\'ala di donna e ostacola i piani del Nero sull\'ala di re.',
  'study.queens-gambit-declined.k.2.why':
    'La casa che vuole il cavallo nero. Toglierla con f3 o con Cge2-g3 elimina metà del controgioco avversario.',
  'study.queens-gambit-declined.k.3.why':
    'Dove atterra l\'attacco di minoranza. Tutto il piano si misura sul fatto che tu ci arrivi prima che l\'attacco nero sull\'ala di re arrivi a destinazione.',
  'study.queens-gambit-declined.b.0.when':
    'Una volta che la torre è in b1 e a2-a4 è stata giocata. Troppo presto e il Nero risponde ...a6 e non succede niente.',
  'study.queens-gambit-declined.b.1.when':
    'Quando il Nero ha impegnato i pezzi sull\'ala di re e il centro è allentato. Ha bisogno di f2-f3 prima.',
  'study.queens-gambit-declined.b.2.when':
    'Alla quarta o quinta mossa, prima che il Nero possa riprendere con un pezzo. È la ripresa con il pedone e a creare la struttura di Carlsbad.',
  'study.queens-gambit-declined.f.0.title': 'Giocare b4-b5 prima di Tb1',
  'study.queens-gambit-declined.f.0.detail':
    'Il cambio in b5 apre una colonna. Se la tua torre non ci sta sopra, hai creato un bersaglio per te invece che per il Nero.',
  'study.queens-gambit-declined.f.1.title': 'Arroccare dentro l\'attacco troppo in fretta',
  'study.queens-gambit-declined.f.1.detail':
    'Il controgioco del Nero è sull\'ala di re. Prima di arroccare corto, controlla se stanno arrivando ...f5 e ...Ce4, e valuta se per una mossa il tuo re non stia meglio sull\'ala di donna o al centro.',
  'study.queens-gambit-declined.f.2.title': 'Cambiare troppi pezzi',
  'study.queens-gambit-declined.f.2.detail':
    'Un pedone debole in c6 vale qualcosa solo se hai pezzi con cui attaccarlo. Cambia quelli che lo difendono, tieni quelli che lo attaccano: qui una torre e un cavallo valgono più di una coppia di alfieri.',

  /* -------------------------------------------------------- Sistema Londra */
  'study.london-system.bigIdea':
    'Il Londra è uno schema più che un\'apertura. Metti l\'alfiere in f4 prima di giocare e3, aggiungi pedoni in c3 e d4, cavalli in f3 e d2 e un alfiere in d3, e giochi praticamente le stesse dodici mosse qualunque cosa faccia il Nero. È la sua forza ed è il suo limite: non sarai mai perso alla mossa quindici, e raramente avrai molto, ma sarai tu quello che conosce la posizione.',
  'study.london-system.feel':
    'Comodo e familiare ogni singola volta. Giocherai le stesse prime dieci mosse per anni. Contro un avversario impreparato ottieni un attacco gratis; contro uno preparato ottieni una versione leggermente peggiore di una normale partita di pedone di donna, che è un posto del tutto ragionevole dove stare.',
  'study.london-system.s.0.name': 'La piramide del Londra',
  'study.london-system.s.0.shape':
    'Pedoni in c3, d4 ed e3 con l\'alfiere al sicuro fuori, in f4. Solida, dall\'aria simmetrica e impossibile da abbattere in fretta.',
  'study.london-system.s.0.you':
    'Porta un cavallo in e5 sostenuto dal pedone d4 e dall\'alfiere di f4, poi gioca f2-f4 per cementarlo e Df3 e Tf1-f3 per attaccare. È tutto qui il piano d\'attacco.',
  'study.london-system.s.0.them':
    'Il Nero colpisce d4 con ...c5 e b2 con ...Db6, cioè esattamente dove il tuo alfiere camposcuro non c\'è. Se infila entrambe con un cavallo in c6, sei tu quello che risolve problemi.',
  'study.london-system.s.1.name': 'La versione Stonewall',
  'study.london-system.s.1.shape': 'Pedoni in c3, d4, e3 ed f4, con il cavallo già in e5.',
  'study.london-system.s.1.you':
    'Attacca. Porta la donna in f3 o h5, la torre in f3 e h3, e vai a prendere il re nero. Il pedone in f4 rende permanente il cavallo di e5.',
  'study.london-system.s.1.them':
    'Il Nero avrebbe dovuto impedirlo molto prima con ...c5 e ...Db6. Una volta che il pedone raggiunge f4, il suo controgioco deve arrivare al centro con ...f6 o ...e5.',
  'study.london-system.p.0.title': 'Ce5 sostenuto da f2-f4',
  'study.london-system.p.0.detail':
    'Il cavallo in e5 è tutta l\'apertura. Portacelo, sostienilo con f4 così che non lo si possa cambiare a buon mercato, e tutto il resto viene da sé.',
  'study.london-system.p.1.title': 'La batteria Ad3 e Dc2',
  'study.london-system.p.1.detail':
    'Metti l\'alfiere in d3 e la donna in c2 dietro di lui, entrambi puntati su h7. Insieme a un cavallo in e5 e a una torre che può spostarsi di lato, è il classico schema del dono greco: l\'alfiere si sacrifica in h7, il cavallo arriva in g5 con scacco e la donna atterra in h5 con il matto.',
  'study.london-system.p.2.title': 'Sollevamento di torre Tf1-f3-h3',
  'study.london-system.p.2.detail':
    'Una volta che il pedone è in f4 la torre ha una strada verso l\'ala di re. È lento, ma in una posizione chiusa il lento te lo puoi permettere.',
  'study.london-system.p.3.title': 'Db3 per rispondere a ...Db6',
  'study.london-system.p.3.detail':
    'Quando il Nero colpisce b2, offrire il cambio di solito è la cosa più semplice. Rinunci alle tue possibilità d\'attacco ma tieni una posizione del tutto sana, che è un buon affare quando l\'alternativa è difendere.',
  'study.london-system.k.0.why':
    'L\'avamposto attorno a cui è costruito tutto il sistema. Se non ci porti mai un cavallo, il Londra non è davvero successo.',
  'study.london-system.k.1.why':
    'Dove punta l\'alfiere di d3. Ogni tattica del Londra è una qualche versione di Axh7+.',
  'study.london-system.k.2.why':
    'La casa che il tuo alfiere camposcuro si è lasciato alle spalle. È l\'unica concessione permanente dell\'apertura, e i buoni avversari la trovano.',
  'study.london-system.k.3.why':
    'La base della tua struttura. Quando il Nero gioca ...c5 devi decidere se tenerla con c3, spingere oltre con d5 oppure prendere.',
  'study.london-system.b.0.when':
    'Una volta che un cavallo è in e5 e il tuo re è arroccato. Fissa il cavallo e apre la strada alla torre.',
  'study.london-system.b.1.when':
    'Quando il Nero ha giocato ...c5 e non può riprendere comodamente, oppure quando guadagna un tempo su un alfiere.',
  'study.london-system.b.2.when':
    'Di rado, e solo quando il Nero ha abbandonato il centro. Non è il senso del sistema.',
  'study.london-system.f.0.title': 'Giocare lo schema col pilota automatico contro ...c5 e ...Db6',
  'study.london-system.f.0.detail':
    'L\'unica linea in cui le mosse devono cambiare. Se giochi Ad3 e Cbd2 mentre il Nero colpisce b2 e d4, perderai un pedone o un tempo. Rispondi con Db3 oppure con c3 e Cc3 per primi.',
  'study.london-system.f.1.title': 'Permettere ...Ch5',
  'study.london-system.f.1.detail':
    'Una volta che il tuo cavallo si impegna in d2, l\'alfiere di f4 ha una sola casa. ...Ch5 costringe Ag3 e il cambio in g3 consegna al Nero la coppia degli alfieri. Gioca h2-h3 o tieni il cavallo flessibile.',
  'study.london-system.f.2.title': 'Attaccare con troppo pochi pezzi',
  'study.london-system.f.2.detail':
    'Ad3 e Dc2 da soli non danno matto a nessuno. Se il Nero ha un cavallo in f6 e un alfiere in e7, ti servono anche il cavallo di e5 e la torre. Prima si costruisce, poi si sacrifica.',
}
