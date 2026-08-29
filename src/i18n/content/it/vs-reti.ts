import { nodes, tree } from '../tree'

const r = tree('vs-reti')

/** Contro l'Apertura Réti: ...d5 ed ...e6, poi la rottura ...c5. */
export const vsRetiTrees = nodes(
  r('Nf3', { label: 'Apertura Réti', idea: 'Una prima mossa flessibile. Il Bianco tiene aperta ogni trasposizione e non si impegna in niente.' }),
  r('Nf3 d5', {
    idea: 'Prenditi il centro. Contro un\'apertura flessibile, chi occupa per primo il mezzo ha qualcosa di concreto da difendere.',
    hint: 'Rispondi a una mossa di cavallo flessibile mettendo un pedone al centro.',
    m: {
      Nf6: 'Del tutto sana e traspone in ogni sorta di difesa indiana, ma lascia al Bianco la scelta della struttura. Prendersi il centro è più diretto.',
      c5: 'Giocabile e spesso diventa una Siciliana o un\'Inglese simmetrica, ma questa difesa risponde alla Réti sul suo terreno.',
      g6: 'Troppo lenta contro un sistema flessibile: il Bianco infila d4, c4 ed e4 e tu non hai contestato niente.',
    },
  }),
  r('Nf3 d5 c4', { label: 'Gambetto Réti', idea: 'La Réti vera e propria. Il pedone c attacca d5 di lato ed è offerto come gambetto.' }),
  r('Nf3 d5 c4 e6', {
    idea: 'Sostieni il centro e tienilo. Il pedone in e6 rende d5 permanente e apre l\'alfiere di f8.',
    hint: 'Sostieni il pedone centrale attaccato con una modesta mossa di pedone che libera anche un alfiere.',
    m: {
      dxc4: 'Il Gambetto Réti accettato. A differenza della Catalana, il Bianco non ha impegnato il pedone d, quindi provare a tenerlo con ...b5 finisce dentro a4 e b3 con un attacco vincente.',
      d4: 'Spingere oltre lascia il pedone in d4 come bersaglio solitario: arriva e3 o b4 e il Bianco lo mina mentre tu non hai sviluppato niente.',
      c6: 'Solida, ma toglie la casa c6 al tuo cavallo e blocca la rottura ...c5, che è la mossa che ti dà una buona partita.',
    },
  }),
  r('Nf3 d5 c4 e6 g3', { label: 'Linea principale', idea: 'Il fianchetto della Réti: l\'alfiere va in g2 e preme su d5 e sulla grande diagonale.' }),
  r('Nf3 d5 c4 e6 g3 Nf6', {
    idea: 'Sviluppa e difendi d5 una seconda volta. Qui non serve niente di sofisticato.',
    hint: 'Sviluppa un cavallo sulla sua casa naturale, aggiungendo un altro difensore al tuo pedone centrale.',
    m: {
      dxc4: 'Sana e giocabile, ma Da4+ o Ca3 recuperano il pedone e il Bianco si ritrova un tempo gratis oltre al fianchetto. Questo repertorio tiene invece il centro.',
      c5: 'La rottura è giusta ma l\'ordine è sbagliato: sviluppa e arrocca prima, altrimenti cxd5 exd5 lascia allentato il tuo pedone in d5.',
    },
  }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2', { label: 'Linea principale', idea: 'L\'alfiere prende la grande diagonale.' }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7', {
    idea: 'Sviluppo semplice. L\'alfiere sta sicuro in e7 e il re è a una mossa dall\'arrocco.',
    hint: 'Sviluppa l\'alfiere che ti permette di arroccare alla mossa dopo.',
    m: {
      dxc4: 'Il gambetto continua a non valere la pena: Da4+ o Ce5 lo recuperano con una partita molto migliore per il Bianco.',
      Bb4: 'Lo scacco non ottiene niente: Ad2 o Cbd2 coprono e devi rimuovere di nuovo l\'alfiere.',
      c5: 'Una mossa troppo presto: cxd5 exd5 e il tuo pedone in d5 è allentato con il re ancora al centro.',
    },
  }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e aspetta.' }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O', {
    idea: 'Arrocca a tua volta. Entrambi i re sono al sicuro e la partita vera comincia.',
    hint: 'La mossa ovvia.',
    m: {
      c5: 'La rottura arriverà, ma prima viene il re: cxd5 exd5 con il tuo re in e8 dà al Bianco idee con Ce5 e Da4.',
      Nbd7: 'Va bene, ma non c\'è nessun motivo per rimandare l\'arrocco e ce ne sono molti per non farlo.',
    },
  }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3', { label: 'Linea principale', idea: 'Il doppio fianchetto. Il Bianco prepara Ab2 e una lenta stretta contro d5.' }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5', {
    idea: 'La rottura. Adesso che è tutto sviluppato, ...c5 toglie d4 ai pezzi bianchi e trasforma il tuo centro in un muro.',
    hint: 'Con il re al sicuro e i pezzi fuori, prendi spazio con la mossa di pedone che presidia d4.',
    m: {
      dxc4: 'bxc4 dà al Bianco un grande centro e la colonna b aperta dritta sulla tua ala di donna. Qui il pedone del gambetto non vale mai la pena.',
      b6: 'Ragionevole, ma la rottura in c5 è la mossa che decide di chi è il centro. Prendi prima spazio.',
      Nbd7: 'Va bene ma è lenta. ...c5 è la mossa che dà un senso alla tua posizione.',
    },
  }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5 Bb2', { label: 'Linea principale', idea: 'Il secondo alfiere si unisce sulla grande diagonale.' }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5 Bb2 Nc6', {
    idea: 'Sviluppa con uno scopo: il cavallo sostiene il pedone in c5 e guarda d4 e b4.',
    hint: 'Sviluppa il cavallo che sostiene il tuo nuovo pedone in c5.',
    m: {
      Nbd7: 'Giocabile, ma con un pedone già in c5 il cavallo appartiene a c6, dove lotta per d4.',
      d4: 'Sana, ma spingere oltre chiude la posizione e lascia il pedone in d4 come bersaglio per e3 e per un pezzo che lo blocchi. Questo repertorio spinge solo quando il Bianco non può più bloccare.',
    },
  }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5 Bb2 Nc6 e3', { label: 'Linea principale', idea: 'Il Bianco sostiene un futuro d4 e completa uno schema solidissimo.' }),
  r('Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5 Bb2 Nc6 e3 b6', {
    idea: 'L\'ultimo pezzo ottiene una diagonale. Con gli alfieri che si guardano sulla grande diagonale e un solido muro di pedoni, il Nero è in perfetta parità.',
    hint: 'Apri una diagonale al tuo ultimo pezzo non sviluppato.',
    m: {
      d4: 'Sana, ma scioglie la tensione: dopo exd4 cxd4 il pedone in d4 va difeso in continuazione. Questo repertorio tiene la tensione una mossa in più.',
      dxc4: 'bxc4 e il Bianco ha un centro forte con pedoni in c4 e d4 in arrivo, più la colonna b aperta.',
    },
    end: {
      name: 'Réti, linea principale con ...e6 e ...c5',
      plans: [
        'Gioca ...Ab7 alla mossa dopo e la posizione è un comodo mediogioco simmetrico senza debolezze da nessuna delle due parti.',
        'Tieni il pedone in d5 finché è utile. Blocca l\'alfiere di g2, e quell\'alfiere è il pezzo migliore del Bianco.',
        'La torre appartiene a c8 o d8. Se il Bianco gioca cxd5 exd5, la colonna e semiaperta diventa invece tua.',
        'Un piano utile è ...Dc7 e ...Tfd8 seguiti da ...d4 al momento giusto: una volta che il Bianco ha impegnato un cavallo in c3 o d2, bloccare è molto più difficile.',
        'Non andare in cerca di un attacco. È una struttura in cui le buone mosse si accumulano e perde chi va alla deriva per primo.',
      ],
    },
  }),
  r('Nf3 d5 c4 e6 cxd5', { label: 'Cambio al centro', idea: 'Il Bianco scioglie la tensione e punta a una struttura da Variante di Cambio del Gambetto di Donna.' }),
  r('Nf3 d5 c4 e6 cxd5 exd5', {
    idea: 'Riprendi verso il centro. Adesso il tuo alfiere di c8 ha una diagonale e la struttura è simmetrica.',
    hint: 'Riprendi con il pedone che apre una diagonale al tuo pezzo peggiore.',
    m: {
      Qxd5: 'Cc3 arriva con tempo e il Bianco sviluppa mentre la tua donna si ritira.',
      c6: 'Ignora il pedone in d5: riprendilo e basta.',
    },
  }),
  r('Nf3 d5 c4 e6 cxd5 exd5 d4', { label: 'Linea principale', idea: 'Il Bianco prende il centro e punta a una normale partita di pedone di donna.' }),
  r('Nf3 d5 c4 e6 cxd5 exd5 d4 Nf6', {
    idea: 'Sviluppa e difendi d5. Adesso è una posizione del tutto standard e sana.',
    hint: 'Sviluppa il cavallo naturale.',
    m: {
      c5: 'Contesta d4 ma lascia il tuo pedone in d5 in presa dopo dxc5 e Cc3. Sviluppa prima.',
      Bd6: 'Giocabile, ma il cavallo sviluppa e difende allo stesso tempo. Qui gli alfieri dopo i cavalli.',
    },
  }),
  r('Nf3 d5 c4 e6 cxd5 exd5 d4 Nf6 Bf4', { label: 'Linea principale', idea: 'L\'alfiere prende una casa attiva fuori dalla catena di pedoni.' }),
  r('Nf3 d5 c4 e6 cxd5 exd5 d4 Nf6 Bf4 Bd6', {
    idea: 'Offri il cambio. Ogni pezzo che esce rende più facile tenere la struttura simmetrica, e l\'alfiere bianco è il più utile dei due.',
    hint: 'Contesta l\'alfiere che ha appena preso la diagonale migliore.',
    m: {
      Be7: 'Passiva. In d6 l\'alfiere contende la diagonale e offre un cambio che sei contento di fare.',
      c5: 'Adesso dxc5 e il tuo pedone in d5 resta isolato con l\'alfiere bianco già sulla casa buona.',
    },
    end: {
      name: 'Réti, 3.cxd5',
      plans: [
        'Arrocca e gioca ...c6 e ...Ag4 oppure ...Af5: la struttura è simmetrica e del tutto comoda.',
        'Se il Bianco evita il cambio con Ag3, prendi comunque in g3 quando ti conviene: hxg3 gli dà i pedoni doppiati e fxg3 apre la colonna sul suo stesso re.',
        'Il piano è ...Te8, ...Cbd7 e ...Ce4 con un cavallo ben piazzato al centro.',
        'Le strutture simmetriche sono patte ma non morte. Le vince chi ha i pezzi leggeri migliori, quindi cambia il tuo peggiore e tieni il migliore.',
      ],
    },
  }),
  r('Nf3 d5 c4 e6 b3', { label: 'Doppio fianchetto', idea: 'Il Bianco sviluppa entrambi gli alfieri sulle grandi diagonali prima di impegnare qualsiasi pedone.' }),
  r('Nf3 d5 c4 e6 b3 Nf6', {
    idea: 'Sviluppa e tieni d5. Contro uno schema lento, le semplici mosse di sviluppo sono esattamente giuste.',
    hint: 'Sviluppa il cavallo naturale.',
    m: {
      dxc4: 'bxc4 dà al Bianco una coppia di pedoni forte e la colonna b aperta. Non prendere.',
      c5: 'Giocabile, ma sviluppare prima è più sicuro: il pedone in d5 ha bisogno di un pezzo alle spalle prima che tu ti impegni.',
    },
  }),
  r('Nf3 d5 c4 e6 b3 Nf6 Bb2', { label: 'Linea principale', idea: 'L\'alfiere prende la grande diagonale e guarda e5 e g7.' }),
  r('Nf3 d5 c4 e6 b3 Nf6 Bb2 Be7', {
    idea: 'Sviluppa e preparati ad arroccare. Non c\'è fretta e non c\'è niente da temere.',
    hint: 'Sviluppa l\'ultimo pezzo leggero dell\'ala di re.',
    m: {
      Bd6: 'Giocabile, ma con un alfiere già in b2 puntato su g7, la casa più sicura è e7, dove l\'alfiere non può essere colpito da un cavallo che arriva in e5 o c4.',
      dxc4: 'Ancora no: bxc4 dà al Bianco il centro e la colonna per niente.',
    },
  }),
  r('Nf3 d5 c4 e6 b3 Nf6 Bb2 Be7 e3', { label: 'Linea principale', idea: 'Il Bianco completa lo schema e aspetta.' }),
  r('Nf3 d5 c4 e6 b3 Nf6 Bb2 Be7 e3 O-O', {
    idea: 'Arrocca. Il Nero è completamente sviluppato con un centro solido e nessuna debolezza.',
    hint: 'Completa lo sviluppo nel modo ovvio.',
    m: {
      c5: 'La rottura arriverà, ma il re dovrebbe lasciare prima il centro: cxd5 exd5 con un re in e8 dà idee al Bianco.',
      b6: 'Va bene, ma prima il re. In una posizione tranquilla non c\'è mai un motivo per rimandare l\'arrocco.',
    },
    end: {
      name: 'Réti, doppio fianchetto con 3.b3',
      plans: [
        'Gioca ...c5 e ...Cc6 alla mossa dopo, togliendo d4 ai pezzi bianchi e trasformando i tuoi pedoni in un muro.',
        'Prosegui con ...b6 e ...Ab7: alfieri contro alfieri su entrambe le grandi diagonali, con una partita del tutto equilibrata.',
        'La rottura ...d4 diventa forte una volta che il Bianco ha impegnato un cavallo in c3. Sta\' attento al momento.',
        'Se il Bianco gioca Ce5, rispondi con ...Cbd7 e cambialo: riprendere con il pedone d darebbe al Bianco un centro forte.',
      ],
    },
  }),
  r('Nf3 d5 g3', { label: 'Attacco Indiano di Re', idea: 'Il Bianco fa il fianchetto senza giocare c4 e punta a uno schema Indiano di Re a colori invertiti.' }),
  r('Nf3 d5 g3 Nf6', {
    idea: 'Sviluppa e tieni tutto flessibile.',
    hint: 'Sviluppa il cavallo naturale.',
    m: {
      c5: 'Giocabile, ma il cavallo esce prima: è utile in ogni struttura e non impegna a niente.',
      Bg4: 'Una buona casa per questo alfiere, ma il cavallo di f6 deve uscire prima, altrimenti l\'alfiere viene semplicemente colpito da Ce5.',
    },
  }),
  r('Nf3 d5 g3 Nf6 Bg2', { label: 'Linea principale', idea: 'L\'alfiere prende la diagonale.' }),
  r('Nf3 d5 g3 Nf6 Bg2 c6', {
    idea: 'Sostieni d5 e dai alla donna le case b6 e c7. È la risposta flessibile e con poca teoria all\'Attacco Indiano di Re.',
    hint: 'Sostieni il pedone centrale con la mossa modesta che dà anche case alla tua donna.',
    m: {
      e6: 'Giocabile, ma chiude dentro l\'alfiere di c8, e contro un Attacco Indiano di Re quell\'alfiere lo vuoi fuori dalla catena, in g4 o f5.',
      g6: 'Copiare il fianchetto qui è passivo: il Bianco è un tempo avanti nella stessa struttura.',
    },
  }),
  r('Nf3 d5 g3 Nf6 Bg2 c6 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e prepara d3 e Cbd2 con una costruzione lenta.' }),
  r('Nf3 d5 g3 Nf6 Bg2 c6 O-O Bg4', {
    idea: 'L\'alfiere esce prima che ...e6 lo chiuda dentro. Inchiodare il cavallo rende anche più difficile al Bianco organizzare e2-e4.',
    hint: 'Porta il tuo alfiere problematico fuori dalla catena di pedoni finché sei in tempo.',
    m: {
      e6: 'Seppellisce l\'alfiere per il resto della partita, che è esattamente quello che l\'Attacco Indiano di Re spera.',
      e5: 'Ambiziosa ma allentante: arriva d4 o Cxe5 e i tuoi pedoni centrali diventano bersagli prima che tu sia sviluppato.',
    },
    end: {
      name: 'Attacco Indiano di Re, 2.g3',
      plans: [
        'Prosegui con ...e6, ...Ae7 e arrocca: uno schema solidissimo in cui il tuo alfiere cattivo è già fuori.',
        'Cambia in f3 se il Bianco gioca h3, e sfrutta le case bianche che cede in cambio.',
        'Il piano è ...Cbd7, ...Ad6 ed ...e5, prendendo il centro prima che il Bianco infili e2-e4.',
        'Le posizioni di Attacco Indiano di Re puniscono la passività. Prenditi il centro e gioca per ...e5 invece di aspettare.',
      ],
    },
  }),
  r('Nf3 d5 b3', { label: 'Attacco Nimzo-Larsen', idea: 'L\'alfiere va subito in b2, puntato su e5 e sull\'ala di re.' }),
  r('Nf3 d5 b3 Nf6', {
    idea: 'Sviluppa con naturalezza e tieni il centro.',
    hint: 'Sviluppa il cavallo naturale.',
    m: {
      e5: 'Allettante, ma Ab2 punta già il pedone e dopo Cxe5 o d4 hai esagerato.',
      c5: 'Giocabile, ma sviluppare prima tiene aperta ogni opzione e non impegna presto un pedone.',
    },
  }),
  r('Nf3 d5 b3 Nf6 Bb2', { label: 'Linea principale', idea: 'L\'alfiere prende la diagonale e guarda e5 e g7.' }),
  r('Nf3 d5 b3 Nf6 Bb2 Bg4', {
    idea: 'Porta fuori l\'alfiere campochiaro e inchioda il cavallo. Senza il cavallo in f3, l\'alfiere bianco in b2 non ha niente che lo sostenga.',
    hint: 'Sviluppa l\'alfiere che altrimenti resterebbe chiuso dentro, e già che ci sei inchioda qualcosa.',
    m: {
      e6: 'Chiude dentro l\'alfiere senza nessun compenso. Contro ogni sistema di fianchetto, quell\'alfiere va portato fuori per primo.',
      g6: 'Copiare il Bianco è passivo, e l\'alfiere in b2 punta già la casa che il tuo alfiere vuole.',
    },
  }),
  r('Nf3 d5 b3 Nf6 Bb2 Bg4 e3', { label: 'Linea principale', idea: 'Il Bianco sostiene il centro e prepara Ae2 e d4 oppure c4.' }),
  r('Nf3 d5 b3 Nf6 Bb2 Bg4 e3 e6', {
    idea: 'Adesso è sicuro: con l\'alfiere già fuori, il triangolo di pedoni rende la tua posizione solidissima.',
    hint: 'Completa la struttura adesso che il tuo alfiere è al sicuro fuori.',
    m: {
      Bxf3: 'Cambiare senza che te lo abbiano chiesto aiuta il Bianco: sia Dxf3 sia gxf3 gli danno sviluppo utile o un pedone centrale in più.',
      e5: 'L\'alfiere in b2 colpisce e5 e dopo Cxe5 o d4 hai consegnato il centro.',
    },
    end: {
      name: 'Attacco Nimzo-Larsen',
      plans: [
        'Gioca ...Cbd7, ...Ad6 e arrocca. Lo schema è comodo e il Bianco non ha nessun attacco.',
        'Punta a ...e5. Una volta che quel pedone atterra con sostegno, l\'alfiere in b2 morde il granito.',
        'Tieni l\'alfiere in g4 a meno che un cambio non vinca qualcosa: è il tuo alfiere buono e il cavallo bianco tiene il centro.',
        'Se il Bianco gioca h3, ritirati in h5 invece di cambiare: un g4 bianco indebolirebbe gravemente la sua ala di re.',
      ],
    },
  }),
)
