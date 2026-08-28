import { nodes, tree } from '../tree'

const n = tree('italian-game')

/** Partita Italiana: le spiegazioni dell'allenatore. */
export const italianGameTree = nodes(
  n('e4', {
    idea: 'Rivendica il centro e apre le linee all\'alfiere e alla donna.',
    hint: 'Apri la partita con la mossa di pedone centrale più diretta.',
    m: {
      d4: 'Ottima prima mossa, ma questo repertorio è di pedone di re. Tutto quello che segue dà per scontato che il pedone e sia andato in e4.',
      Nf3: 'Giocabile, ma lascia scegliere l\'apertura al Nero. Prendi prima il centro e porta la partita dove la conosci.',
    },
  }),
  n('e4 e5', { label: 'Partita aperta', idea: 'Il Nero rivendica il centro in parti uguali.' }),
  n('e4 e5 Nf3', {
    idea: 'Sviluppa con tempo: il cavallo colpisce subito e5.',
    hint: 'Sviluppa un pezzo e attacca il pedone che il Nero ha appena mosso.',
    m: {
      Bc4: 'Non è sbagliata, ma lascia al Nero ...Cf6 e ...d5 gratis. L\'Italiana si regge sul colpire e5 per primo, così il Nero è costretto a rispondere.',
      f4: 'Quello è il Gambetto di Re, un\'apertura diversa con una teoria diversissima. L\'Italiana tiene il centro solido.',
    },
  }),
  n('e4 e5 Nf3 Nc6', {
    label: 'Linea principale',
    idea: 'Il Nero difende e5 con la mossa di sviluppo naturale.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4', {
    idea: 'L\'alfiere italiano: guarda f7, l\'unica casa difesa soltanto dal re nero.',
    hint: 'Metti l\'alfiere campochiaro sulla sua diagonale più attiva.',
    m: {
      Bb5: 'Mossa perfettamente buona, ma quella è la Spagnola. Questo repertorio punta all\'Italiana.',
      d4: 'La Scozzese. Giocabile, ma scioglie subito la tensione centrale invece di costruire dietro di essa.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5', {
    label: 'Giuoco Piano',
    idea: 'Il Nero fa da specchio e punta l\'alfiere su f2.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3', {
    idea: 'Prepara d4. Il pedone dà anche all\'alfiere la casa di ritirata c2 per più avanti.',
    hint: 'Sostieni la rottura d4 prima di giocarla.',
    m: {
      Ng5: 'Troppo presto. Il Nero risponde ...Ch6 o ...De7 e il cavallo in g5 non ha niente da attaccare: muovere due volte lo stesso pezzo regala l\'iniziativa al Nero.',
      d4: 'Prematura. Dopo ...exd4 non hai nessun pedone che possa riprendere, quindi il Nero guadagna un tempo colpendo i tuoi pezzi.',
      Nc3: 'Naturale, ma blocca il pedone di c. Nell\'Italiana è proprio quel pedone a sostenere d4 e a dare all\'alfiere la ritirata in c2.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6', {
    label: 'Linea principale',
    idea: 'Il Nero sviluppa e mette pressione su e4.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3', {
    idea: 'Il Giuoco Pianissimo. Difendi e4 in silenzio, tieni il centro chiuso e prepara Cbd2-f1-g3 con una costruzione lenta sull\'ala di re.',
    hint: 'Difendi il pedone e attaccato con una modesta mossa di pedone che tenga solido il centro.',
    m: {
      d4: 'Questo è l\'aggressivo Attacco Greco. È pieno di teoria e il Nero ha vie di parità ben note; la costruzione tranquilla rende di più sotto il livello di maestro.',
      Nxe5: 'Perde un pezzo per un pedone: il cavallo in e5 non è difeso da niente e il Nero riprende semplicemente con ...Cxe5.',
      Ng5: 'Qui il Nero non è obbligato a difendere f7 con ...d5, e dopo ...O-O il tuo cavallo resta esposto. Continua a costruire.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6', {
    label: 'Linea principale',
    idea: 'Il Nero fa di nuovo da specchio, puntella e5 e apre l\'alfiere di c8.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O', {
    idea: 'Re al sicuro e la torre entra nella colonna e. Poi arrivano Te1, Cbd2, Ab3 e solo alla fine d4.',
    hint: 'Porta il re fuori dal centro.',
    m: {
      Bg5: 'L\'alfiere lì non ottiene niente: con il cavallo difeso dalla donna e il re nero ancora al centro, ...h6 guadagna soltanto tempo.',
      b4: 'Troppo presto. Il tuo re è ancora al centro e ...Ab6 lascia debole il pedone in b.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O', {
    label: 'Linea principale',
    idea: 'Arrocca anche il Nero e la posizione tipica del Giuoco Pianissimo è sulla scacchiera.',
    end: {
      name: 'Giuoco Pianissimo, linea principale',
      plans: [
        'Te1 e Cbd2, poi il giro di cavallo Cf1-g3 (oppure Ce3) per costruire sull\'ala di re.',
        'Ritira l\'alfiere con Ab3 e prosegui con a2-a4 per fermare ...b5 e togliere b5 e a4 al Nero.',
        'Gioca d3-d4 solo quando sei completamente sviluppato: il pedone in c3 ti permette di rispondere a ...exd4 con cxd4 e tenere un centro largo.',
        'Se il Nero gioca ...Ca5, rispondi Ab3 e ricorda che il cavallo in a5 è fuori gioco; a2-a4 e Cbd2-c4 gli rendono la vita difficile.',
        'Attenzione alla casa d4: con i pedoni in c3 e d3 la tua struttura è flessibile, ma a un cavallo nero che si piazza in d4 bisogna sempre rispondere (di solito con Cxd4, o prima con Ab3).',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 O-O', {
    label: 'Arrocco anticipato',
    idea: 'Un ordine di mosse comune: il Nero arrocca prima di decidere su ...d6.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 O-O O-O', {
    idea: 'Arrocca a tua volta. La partita di solito traspone nella linea principale dopo ...d6.',
    hint: 'All\'arrocco si risponde con l\'arrocco: il tuo piano di sviluppo non cambia.',
    end: {
      name: 'Giuoco Pianissimo, ordine di mosse con arrocco',
      plans: [
        'Gioca Te1, Cbd2 e Ab3: la stessa costruzione della linea principale.',
        'Il Nero di solito prosegue con ...d6 e ...a6, trasponendo nella posizione tipica.',
        'Siccome il Nero non ha ancora giocato ...d6, tieni d\'occhio un rapido d3-d4 che colpisce l\'alfiere in c5.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 a6', {
    label: 'Prepara ...Aa7',
    idea: 'Il Nero toglie b5 ai tuoi pezzi e prepara ...Aa7 così che l\'alfiere non venga colpito da d4.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 a6 O-O', {
    idea: 'Non cambia niente: arrocca e prosegui con Te1, Cbd2 e Ab3.',
    hint: 'Il Nero ha fatto una mossa utile ma lenta. Vai avanti con il tuo sviluppo.',
    end: {
      name: 'Giuoco Pianissimo con ...a6',
      plans: [
        'Prosegui con Te1, Cbd2, Ab3 e a2-a4 per fermare ...b5.',
        'Con l\'alfiere diretto in a7 la rottura d4 è meno efficace: preferisci il piano lento sull\'ala di re con Cf1-g3.',
        'La mossa h2-h3 è quasi sempre utile: impedisce ...Ag4 e ...Cg4 una volta per tutte.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7', {
    label: 'Difesa solida di donna',
    idea: 'Il Nero sovraprotegge e5 così che a d4 possa rispondere ...Ab6 senza perdere il pedone.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7 d4', {
    idea: 'Adesso la rottura funziona: la donna in e7 blocca l\'alfiere, quindi il Nero non riesce a sviluppare con scioltezza.',
    hint: 'Il Nero ha speso una mossa con la donna. Puniscilo aprendo il centro mentre sei più sviluppato.',
    end: {
      name: 'Giuoco Piano, 4...De7',
      plans: [
        'Dopo ...Ab6 arrocca e gioca a4 per guadagnare spazio sull\'ala di donna.',
        'La donna nera in e7 blocca l\'alfiere di f8, quindi punta ad aprire il centro prima che il Nero si districhi.',
        'Te1 con la donna avversaria di fronte in e7 è una fonte classica di tattiche appena la colonna e si apre.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6', {
    label: 'Difesa tranquilla',
    idea: 'Il Nero puntella prima e5, mantenendo l\'opzione di ...Cf6 o ...Ag4.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d4', {
    idea: 'La rottura è ben calibrata: c3 la sostiene e il Nero non ha ancora sviluppato l\'ala di re.',
    hint: 'Hai speso una mossa a preparare una rottura centrale e il Nero non ha contestato il centro. Giocala.',
    end: {
      name: 'Giuoco Piano, 4...d6',
      plans: [
        'Dopo ...exd4 cxd4 ottieni un centro largo; il Nero risponde Ab6, poi tu arrocchi e giochi Cc3.',
        'La spinta d4-d5 guadagna spazio e chiude fuori il cavallo di c6.',
        'Attenzione a ...Ag4 che inchioda il cavallo di f3: h2-h3 in anticipo vale spesso un tempo.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Bb6', {
    label: 'Ritirata preventiva',
    idea: 'Il Nero si toglie dalla strada di d4 prima ancora che arrivi.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Bb6 d4', {
    idea: 'Prenditi tutto il centro finché puoi: la ritirata dell\'alfiere è costata un tempo al Nero.',
    hint: 'Il Nero ha usato una mossa per ritirare un pezzo che non era attaccato. Prendi il centro.',
    end: {
      name: 'Giuoco Piano, 4...Ab6',
      plans: [
        'Costruisci il grande centro con d4 e, quando serve, d4-d5 per guadagnare spazio.',
        'Arrocca e gioca a4-a5 per infastidire l\'alfiere in b6.',
        'Tieni la tensione: riprendere in d4 con il pedone di c ti dà la coppia ideale e4/d4.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Nf6', {
    label: 'Difesa dei Due Cavalli',
    idea: 'Il Nero colpisce subito e4 e invita alle taglienti linee con 4.Cg5.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Nf6 d3', {
    idea: 'La risposta moderna e tranquilla. Difendere e4 evita l\'enorme teoria dopo 4.Cg5 e tiene una piacevole posizione di Italiana.',
    hint: 'Difendi il pedone e attaccato senza muovere due volte lo stesso pezzo.',
    m: {
      Ng5: 'Questo è il famoso territorio del Fegato Fritto e del Traxler. È giocabile, ma la teoria è lunga e tagliente e un passo falso perde. Il repertorio tiene la via tranquilla.',
      Nc3: 'Blocca il pedone di c, che tu vuoi in c3 per sostenere d4 e dare all\'alfiere la ritirata.',
      Nxe5: 'Perde materiale dopo ...Cxe4 o semplicemente ...Cxe5: il cavallo in e5 non è sostenuto.',
    },
    end: {
      name: 'Difesa dei Due Cavalli, 4.d3 tranquilla',
      plans: [
        'Prosegui con c3, O-O, Te1, Cbd2: la stessa costruzione lenta del Giuoco Pianissimo.',
        'Ab3 e a4 tolgono il veleno a ...Ca5 e ...b5.',
        'h2-h3 è utile per impedire ...Ag4 e ...Cg4 prima di impegnarti con d3-d4.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Be7', {
    label: 'Difesa Ungherese',
    idea: 'Il Nero rinuncia al gioco tagliente e sviluppa modestamente, cedendo un po\' di spazio al centro.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 Be7 d4', {
    idea: 'L\'alfiere in e7 non lotta per il centro, quindi prendilo adesso che puoi farlo senza costi.',
    hint: 'L\'ultima mossa del Nero è stata passiva. Prenditi subito il centro.',
    end: {
      name: 'Difesa Ungherese',
      plans: [
        'Dopo ...exd4 Cxd4 hai mano libera al centro; arrocca e gioca Cc3.',
        'L\'avanzata d4-d5 guadagna spazio e non dà nessun controgioco al Nero.',
        'Punta i pezzi sull\'ala di re: il Nero ha meno spazio e meno case attive.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bc4 d6', {
    label: 'Semi-Italiana (Difesa di Parigi)',
    idea: 'Il Nero puntella e5 e prepara ...Cf6 o ...Ae6 in uno schema lento.',
  }),
  n('e4 e5 Nf3 Nc6 Bc4 d6 d4', {
    idea: 'Il Nero si è impegnato in uno schema passivo. Apri il centro mentre sei più sviluppato.',
    hint: 'Il Nero non ha contestato il tuo centro. Prendilo con un pedone.',
    end: {
      name: 'Partita Italiana, Difesa di Parigi',
      plans: [
        'Gioca c3 alla mossa dopo per tenere il grande centro, poi arrocca.',
        'd4-d5 guadagna spazio e non lascia nessuna buona casa al cavallo di c6.',
        'Il Nero è compresso: evita i cambi inutili e costruisci con calma.',
      ],
    },
  }),
)
