import { nodes, tree } from '../tree'

const e = tree('vs-english')

/** Contro l'Apertura Inglese: ...e5 e la rottura ...d5. */
export const vsEnglishTrees = nodes(
  e('c4', { label: 'Apertura Inglese', idea: 'Un\'apertura di fianco. Il Bianco lotterà per d5 di lato invece di occupare il centro.' }),
  e('c4 e5', {
    idea: 'La risposta più impegnativa: una Siciliana a colori invertiti, e quello con un pedone al centro sei tu.',
    hint: 'Rispondi a un\'apertura di fianco mettendo un pedone in mezzo alla scacchiera.',
    m: {
      Nf6: 'Del tutto sana e di solito traspone in una difesa indiana, ma lascia al Bianco la scelta della struttura. Prendersi prima il centro è più coerente.',
      c5: 'L\'Inglese simmetrica è una scelta solida, ma le posizioni simmetriche favoriscono chi ha il tempo in più, e quello è il Bianco.',
      e6: 'Impegna il pedone e senza prendere spazio, e dopo d4 il Bianco ottiene un Gambetto di Donna con un tempo gratis.',
    },
  }),
  e('c4 e5 Nc3', { label: 'Linea principale', idea: 'La mossa di sviluppo naturale, che aggiunge un secondo attaccante su d5.' }),
  e('c4 e5 Nc3 Nf6', {
    idea: 'Sviluppa e copri d5. In una Siciliana a colori invertiti la casa d5 è tutto.',
    hint: 'Sviluppa un cavallo sulla casa che lotta per d5.',
    m: {
      Bb4: 'Giocabile, ma Cd5 colpisce l\'alfiere e dopo ...Ae7 il Bianco ha guadagnato tempo. Sviluppa prima il cavallo.',
      d6: 'Troppo passiva: dà al Bianco mano libera con g3, Ag2 e d3, e tu non hai lottato affatto per d5.',
      f5: 'Ambiziosa ma allentante: arriva d4 e il pedone in e5 si sfalda mentre il tuo re resta esposto.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e attacca e5.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6', {
    idea: 'Difendi il pedone con una mossa di sviluppo, esattamente come in una normale partita aperta.',
    hint: 'Difendi il pedone attaccato sviluppando l\'altro cavallo.',
    m: {
      e4: 'La spinta funziona quando il Bianco non ha ancora sviluppato il cavallo di donna. Qui arriva Cg5 e il pedone in e4 cade con il tuo sviluppo ancora incompleto.',
      d6: 'Difende il pedone ma in modo passivo, e blocca l\'alfiere di f8 senza motivo.',
      Bb4: 'Sviluppa ma lascia e5 in presa: Cxe5 vince semplicemente un pedone.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3', { label: 'Linea principale', idea: 'Il fianchetto inglese. L\'alfiere è diretto in g2 per premere su d5 e sulla grande diagonale.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5', {
    idea: 'La rottura. Il Bianco ha speso una mossa sul fianchetto, quindi questo è il momento di aprire il centro prima che l\'alfiere atterri in g2.',
    hint: 'Il Bianco ha speso un tempo sull\'ala. Rompi al centro adesso.',
    m: {
      Bb4: 'Giocabile, ma la rottura centrale è la mossa che risolve i tuoi problemi in modo permanente. Le mosse di alfiere possono aspettare.',
      g6: 'Copiare il fianchetto dà al Bianco la versione migliore: è un tempo avanti nella stessa struttura.',
      d6: 'Passiva. Giocare ...d6 invece di ...d5 concede il centro e lascia al Bianco il comando di tutta la partita.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5', { label: 'Linea principale', idea: 'Forzata in pratica: lasciare la tensione permette al Nero di prendere in c4 con un\'ottima partita.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5', {
    idea: 'Riprendi con il cavallo, occupando la casa centrale e preparando il trasferimento in b6.',
    hint: 'Riprendi con il cavallo che finisce al centro.',
    m: {
      Qxd5: 'La donna è un bersaglio: Cc3 o Ag2 arrivano con tempo e il Bianco sviluppa mentre tu ti ritiri.',
      e4: 'Arriva Cg5 o Cd4 e il pedone in e4 è debole. Riprendi prima.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2', { label: 'Linea principale', idea: 'L\'alfiere arriva finalmente, puntato sul cavallo in d5 e sulla torre dietro di lui.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6', {
    idea: 'La ritirata chiave. Cambiare in c3 aprirebbe la colonna b e consegnerebbe la grande diagonale all\'alfiere bianco; da b6 il cavallo tiene tutto chiuso e guarda c4 e d5.',
    hint: 'Il cavallo al centro è attaccato. Ritiralo invece di cambiarlo, e scegli la casa che tiene fuori gioco l\'alfiere bianco.',
    m: {
      Nxc3: 'L\'errore più comune di tutta la variante. bxc3 dà al Bianco un grande centro, la colonna b aperta e un alfiere in g2 senza più niente davanti.',
      Nde7: 'Il cavallo in e7 è passivo e blocca l\'alfiere di f8. In b6 fa un lavoro vero sull\'ala di donna.',
      Be6: 'Ragionevole, ma lasciare il cavallo in d5 da cambiare alle condizioni del Bianco è esattamente quello che vuoi evitare.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e prepara d3 e l\'avanzata sull\'ala di donna con a3 e b4.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7', {
    idea: 'Sviluppo semplice. L\'alfiere sta bene in e7, all\'occorrenza difende il cavallo di b6 lungo la traversa, e libera la strada all\'arrocco.',
    hint: 'Sviluppa l\'ultimo pezzo leggero sull\'ala di re e preparati ad arroccare.',
    m: {
      Bc5: 'Giocabile ma l\'alfiere viene colpito da d3, Ae3 o Ca4 e deve rimuoversi di nuovo. In e7 è sicuro e utile.',
      f6: 'Puntella e5 ma indebolisce il re e la casa e6, e non serve: il pedone è difeso una volta e attaccato mai.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7 d3', { label: 'Linea principale', idea: 'Il Bianco sostiene la posizione e prepara Ae3 oppure a3 e b4.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7 d3 O-O', {
    idea: 'Re al sicuro. Hai un sano pedone in più al centro, nessuna debolezza e ogni pezzo su una buona casa.',
    hint: 'È tutto sviluppato. Finisci il lavoro.',
    m: {
      e4: 'Sembra guadagnare spazio ma Cg5 colpisce il pedone e dopo dxe4 o Ccxe4 il Bianco lo vince semplicemente. Arrocca prima.',
      Be6: 'Va bene, ma il re dovrebbe togliersi dalla colonna e prima che si apra. Arrocca prima, sviluppa l\'alfiere dopo.',
    },
    end: {
      name: 'Inglese, Quattro Cavalli con ...d5',
      plans: [
        'Gioca ...Ae6 e ...f6 oppure ...Te8, e pensa a ...Cd4 che colpisce il cavallo in f3 e la casa c2.',
        'Il Bianco giocherà a3 e b4 per prendere spazio sull\'ala di donna. Rispondi con ...a5, e se b4 arriva comunque, ...axb4 ti apre la colonna a.',
        'Il tuo pedone in e5 è il tuo vantaggio di spazio. Tienilo difeso e non spingerlo in e4 se non è davvero sostenuto.',
        'Il cavallo in b6 controlla c4 e d5 e più avanti può andare in d7 e f6, oppure in a4 colpendo c3.',
        'Questa è una Siciliana a colori invertiti in cui il pedone centrale in più è tuo. Gioca solido e il piccolo vantaggio è reale.',
      ],
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3', { label: 'Un centro piccolo', idea: 'Il Bianco prepara d4 invece del fianchetto, puntando a un solido centro di pedoni.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5', {
    idea: 'Rompi per primo. Con il Bianco diretto a d2-d4, il momento di aprire il centro è prima che accada.',
    hint: 'Il Bianco si prepara a prendere il centro con i pedoni. Arrivaci prima.',
    m: {
      Bb4: 'Sana, ed è una linea principale a pieno titolo. Questo repertorio preferisce la rottura centrale, che risolve i problemi dell\'apertura una volta per tutte invece di porre una domanda.',
      d6: 'Concede d4 per niente e il Bianco ottiene esattamente la posizione per cui aveva giocato e3.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5 cxd5', { label: 'Linea principale', idea: 'Il Bianco cambia per mantenere il controllo di d5.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5 cxd5 Nxd5', {
    idea: 'Prendi con il cavallo e tieni un pedone in e5.',
    hint: 'Riprendi con il pezzo, non con la donna.',
    m: {
      Qxd5: 'Cc3 o Ac4 guadagnano un tempo sulla donna e il Bianco sviluppa mentre tu ti ritiri.',
      e4: 'Lascia il pedone in d5 non catturato e dopo Cd4 o Cg5 il Bianco è semplicemente più sviluppato.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5 cxd5 Nxd5 Bb5', { label: 'Linea principale', idea: 'L\'inchiodatura sul cavallo, per minare il difensore di e5.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5 cxd5 Nxd5 Bb5 Nxc3', {
    idea: 'Qui il cambio è giusto: con l\'alfiere in b5 e non in g2, doppiare i pedoni bianchi lascia una struttura rovinata per sempre e nessun compenso sulla grande diagonale.',
    hint: 'Cambia i cavalli: senza alfiere in g2, la ripresa del Bianco è una concessione strutturale vera.',
    m: {
      Nb6: 'L\'idea giusta contro un fianchetto, ma qui l\'alfiere è in b5 e Axc6+ seguito dalla pressione su e5 dà al Bianco una buona partita.',
      Bd7: 'Passiva, e permette a Cxd5 o Axc6 di arrivare alle condizioni del Bianco.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5 cxd5 Nxd5 Bb5 Nxc3 bxc3', { label: 'Linea principale', idea: 'Forzata: dxc3 lascerebbe il Bianco senza nessun centro.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 e3 d5 cxd5 Nxd5 Bb5 Nxc3 bxc3 Bd6', {
    idea: 'Difendi e5 e sviluppa. I pedoni c doppiati del Bianco e il buco in c4 sono ormai caratteristiche permanenti.',
    hint: 'Sviluppa l\'alfiere sulla casa che tiene anche il tuo pedone centrale.',
    m: {
      Be7: 'Sviluppa ma non difende e5, e Cxe5 o d4 arrivano con forza vera.',
      Qd5: 'La donna è esposta e dopo c4 o Axc6+ il Bianco guadagna tempo mentre tu ti riorganizzi.',
    },
    end: {
      name: 'Inglese, 4.e3',
      plans: [
        'Arrocca e gioca ...Ag4 o ...Ae6, poi ...De7 e ...Tad8 con pressione sulla colonna d.',
        'I pedoni c doppiati del Bianco sono la storia della posizione. Fissali con ...a6 e ...b5 oppure blocca semplicemente c4 con un cavallo.',
        'Il tuo pedone in e5 ti dà spazio. Sostienilo con ...Te8 e, se serve, ...f6.',
        'Se il Bianco gioca d4, rispondi ...e4 per tenere la posizione chiusa e i pedoni doppiati fissati.',
      ],
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 d4', { label: 'Prendersi il centro', idea: 'Il tentativo più diretto: il Bianco rompe al centro prima che il Nero infili ...d5.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 d4 exd4', {
    idea: 'Prendi. Lasciare la tensione permette al Bianco di costruire con d5 o Ae3 e tu non hai niente.',
    hint: 'Prendi il pedone appena entrato al centro.',
    m: {
      e4: 'Guadagna spazio ma Cg5 o Cd2 colpiscono il pedone e il Bianco ha un grande centro con d4 sostenuto. Prendi invece.',
      d6: 'Rifiutare consegna al Bianco il centro pieno con pedoni in c4 e d4 e una partita libera.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 d4 exd4 Nxd4', { label: 'Linea principale', idea: 'Il cavallo riprende e il Bianco ha una posizione tipo Siciliana con un tempo in più.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 d4 exd4 Nxd4 Bb4', {
    idea: 'L\'inchiodatura. Colpisce il cavallo in c3 e impedisce al Bianco di giocare e4 con comodo: è il classico strumento di parità in questa posizione.',
    hint: 'Inchioda il cavallo che tiene insieme il centro.',
    m: {
      Nxd4: 'Dxd4 lascia la donna bianca centralizzata con un grosso vantaggio di sviluppo e una partita facile.',
      d5: 'Adesso cxd5 Cxd5 Cdb5 arriva con tempo e la tua posizione è allentata con il re al centro.',
      Bc5: 'L\'alfiere viene colpito da Cb3 o Ae3 e deve rimuoversi di nuovo. In b4 inchioda e guadagna tempo.',
    },
  }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 d4 exd4 Nxd4 Bb4 Bg5', { label: 'Linea principale', idea: 'Il Bianco inchioda a sua volta e aggiunge pressione sul cavallo di f6.' }),
  e('c4 e5 Nc3 Nf6 Nf3 Nc6 d4 exd4 Nxd4 Bb4 Bg5 h6', {
    idea: 'Poni la domanda. Il Bianco deve scegliere fra prendere, che ti dà la coppia degli alfieri, e ritirarsi, che perde tempo.',
    hint: 'Poni la domanda all\'alfiere che inchioda.',
    m: {
      Bxc3: 'Cambiare per primo scioglie la tensione e dopo bxc3 il Bianco ha un centro forte e la coppia degli alfieri.',
      'O-O': 'Giocabile, ma l\'alfiere in g5 è scomodo e porre prima la domanda non costa niente.',
    },
    end: {
      name: 'Inglese, 4.d4',
      plans: [
        'Se il Bianco prende in f6, riprendi con la donna: la coppia degli alfieri e la colonna g aperta valgono il piccolo costo strutturale.',
        'Se l\'alfiere si ritira in h4, gioca ...Axc3+ seguito da ...Ce4 colpendo l\'alfiere e il pedone in c3.',
        'Punta a ...d5 o ...Ce5: il cavallo bianco in d4 resta senza sostegno una volta che il tuo alfiere prende in c3.',
        'Arrocca corto e metti una torre in e8. La posizione è una Nimzo-Indiana nello spirito ed è del tutto sana per il Nero.',
      ],
    },
  }),
  e('c4 e5 Nf3', { label: 'Attaccare il pedone e', idea: 'Il Bianco attacca subito il pedone, sperando che tu lo difenda passivamente.' }),
  e('c4 e5 Nf3 e4', {
    idea: 'Spingi oltre. Il cavallo deve ritirarsi su una casa scomoda e tu guadagni tempo e spazio.',
    hint: 'Non difendere il pedone: spingilo avanti e scaccia il cavallo.',
    m: {
      Nc6: 'Giocabile, ma Cxe5 o d4 danno al Bianco una partita comoda. La spinta guadagna un tempo e prende spazio.',
      d6: 'Passiva: difende il pedone ma blocca l\'alfiere e consegna l\'iniziativa al Bianco con d4.',
      f6: 'Difende ma indebolisce gravemente il re e la casa e6, e Cc3 seguito da e4 dà al Bianco una gran partita.',
    },
  }),
  e('c4 e5 Nf3 e4 Nd4', { label: 'Linea principale', idea: 'La casa migliore: il cavallo sta al centro e guarda b5 e f5.' }),
  e('c4 e5 Nf3 e4 Nd4 Nc6', {
    idea: 'Contesta subito il cavallo. Se il Bianco prende, la ripresa apre la colonna d alla tua donna e ti dà una struttura piacevole.',
    hint: 'Attacca il cavallo appena atterrato al centro.',
    m: {
      d5: 'cxd5 Dxd5 Cc3 arriva con tempo e il Bianco sviluppa mentre la tua donna scappa. Contesta prima il cavallo.',
      Nf6: 'Va bene, ma Cc3 e d3 rosicchiano il tuo pedone in e4 e tu non hai messo in discussione il cavallo centralizzato.',
    },
  }),
  e('c4 e5 Nf3 e4 Nd4 Nc6 Nxc6', { label: 'Linea principale', idea: 'Il Bianco scioglie la tensione. Dà al Nero una struttura sana e i due alfieri.' }),
  e('c4 e5 Nf3 e4 Nd4 Nc6 Nxc6 dxc6', {
    idea: 'Riprendi con il pedone d: apre la diagonale alla donna, libera l\'alfiere di c8 e tiene una maggioranza di pedoni sull\'ala di re.',
    hint: 'Riprendi con il pedone che apre linee a due tuoi pezzi in una volta sola.',
    m: {
      bxc6: 'Tiene una maggioranza centrale ma chiude dentro l\'alfiere di c8 e lascia deboli la colonna a e i pedoni c.',
    },
    end: {
      name: 'Inglese, 2.Cf3 e4',
      plans: [
        'Sviluppa con ...Cf6, ...Ac5 o ...Ad6 e arrocca. Il pedone in e4 ti dà spazio e toglie d3 e f3 al Bianco.',
        'Cambia le donne se se ne presenta l\'occasione: il finale con la tua maggioranza sull\'ala di re e una struttura sana è comodo.',
        'Tieni d\'occhio il pedone e4. È una forza finché è difeso e una debolezza nel momento in cui non lo è; ...Af5 e ...Te8 sono i sostegni naturali.',
        'Il Bianco proverà Cc3 e d3 oppure Dc2 per minare e4. Rispondi a d3 con ...exd3 e riprendi con l\'alfiere.',
      ],
    },
  }),
  e('c4 e5 g3', { label: 'Prima il fianchetto', idea: 'Il Bianco sviluppa l\'alfiere prima di impegnare i cavalli, tenendo aperto ogni schema.' }),
  e('c4 e5 g3 Nf6', {
    idea: 'Sviluppa e copri d5, tenendo disponibili sia ...d5 sia ...c6.',
    hint: 'Sviluppa il cavallo che lotta per la casa centrale chiave.',
    m: {
      d5: 'Troppo presto: cxd5 Dxd5 Cf3 e Cc3 arrivano con tempo, e la tua donna viene inseguita mentre il Bianco sviluppa.',
      c6: 'Giocabile, ma il cavallo viene prima: sviluppa e lotta per d5 allo stesso tempo.',
    },
  }),
  e('c4 e5 g3 Nf6 Bg2', { label: 'Linea principale', idea: 'L\'alfiere prende la grande diagonale.' }),
  e('c4 e5 g3 Nf6 Bg2 c6', {
    idea: 'Prepara ...d5 con sostegno, così che a cxd5 si possa rispondere ...cxd5 tenendo un pedone al centro.',
    hint: 'Prepara la rottura centrale in modo da poter riprendere con un pedone.',
    m: {
      d5: 'cxd5 Cxd5 e il Bianco guadagna tempo con Cf3 e Cc3 mentre l\'alfiere in g2 colpisce la torre di a8.',
      Nc6: 'Ragionevole, ma è il pedone in c6 a far funzionare davvero la rottura ...d5: la ripresa di pedone tiene il centro.',
    },
  }),
  e('c4 e5 g3 Nf6 Bg2 c6 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e colpisce di nuovo e5.' }),
  e('c4 e5 g3 Nf6 Bg2 c6 Nf3 e4', {
    idea: 'Spingi oltre ancora una volta. Con il pedone in c6 che sostiene un futuro ...d5, l\'avanzata guadagna tempo e spazio.',
    hint: 'La stessa idea di prima: spingi oltre invece di difendere.',
    m: {
      d6: 'Passiva, e permette al Bianco di giocare d4 con un comodo vantaggio di spazio.',
    },
  }),
  e('c4 e5 g3 Nf6 Bg2 c6 Nf3 e4 Nd4', { label: 'Linea principale', idea: 'Il cavallo prende la casa centrale, con un occhio a b5 e f5.' }),
  e('c4 e5 g3 Nf6 Bg2 c6 Nf3 e4 Nd4 d5', {
    idea: 'Adesso la rottura arriva con il pedone c dietro. Il Nero ha un grande centro di pedoni e una partita comoda.',
    hint: 'Gioca la rottura centrale che avevi preparato, adesso che puoi riprendere con un pedone.',
    m: {
      Na6: 'Il cavallo in a6 è fuori gioco e il Bianco gioca semplicemente Cc3 e d3, minando il tuo pedone in e4 mentre tu ti districhi.',
      Qb6: 'La donna è esposta e Cb3 o Cc2 guadagnano tempo mentre il tuo sviluppo resta indietro.',
    },
    end: {
      name: 'Inglese, 2.g3 con ...c6 e ...d5',
      plans: [
        'Hai pedoni in c6, d5 ed e4: un vantaggio di spazio vero. Sostienili con ...Ad6, ...O-O e ...Te8.',
        'Il pedone in e4 taglia fuori dalla partita l\'alfiere di g2. Tienilo lì finché è difeso.',
        'Attenzione a cxd5: riprendi con il pedone c per tenere il muro intatto.',
        'Il Bianco proverà d3 per minarti. Rispondi con ...exd3 e riprendi con l\'alfiere, conservando il pedone in d5.',
      ],
    },
  }),
)
