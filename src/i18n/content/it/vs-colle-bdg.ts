import { nodes, tree } from '../tree'

const c = tree('vs-colle')
const b = tree('vs-blackmar-diemer')

/** Contro il Colle/Zukertort e contro il Blackmar-Diemer. */
export const vsColleBdgTrees = nodes(
  /* ---------------------------------------------------------- Colle/Zukertort */
  c('d4', { label: 'Pedone di donna', idea: 'Il punto di partenza di ogni partita di Colle e di Zukertort.' }),
  c('d4 d5', {
    idea: 'Affronta il pedone centrale a viso aperto. Contro i sistemi lenti, prendersi subito la propria parte di centro è sempre giusto.',
    hint: 'Rispondi al pedone centrale con il tuo.',
    m: {
      Nf6: 'Anche questa va bene e di solito traspone, ma con ...d5 per prima il Bianco non può passare a uno schema tipo Attacco Indiano di Re guadagnando un tempo.',
      e6: 'Impegna il pedone e prima di sapere qualsiasi cosa, e contro il Colle il pedone e è proprio quello che vuoi tenere flessibile.',
    },
  }),
  c('d4 d5 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa con naturalezza. Non ha ancora rivelato niente.' }),
  c('d4 d5 Nf3 Nf6', {
    idea: 'Sviluppa e copri e4, la casa a cui punta tutto il piano bianco.',
    hint: 'Sviluppa il cavallo che ferma la rottura centrale del Bianco prima ancora che parta.',
    m: {
      Bf5: 'La casa giusta, ma una mossa troppo presto: c2-c4 colpisce d5 mentre il tuo alfiere ha lasciato l\'ala di donna, e dopo Db3 il pedone b7 è scoperto.',
      c5: 'Giocabile, ma questo repertorio tiene il pedone in c7 ancora una mossa così che l\'alfiere esca per primo. Gioca ...c5 quando l\'alfiere campochiaro è sistemato.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3', { label: 'Colle / Zukertort', idea: 'Il segnale. Il Bianco chiude dentro l\'alfiere camposcuro e si impegna in uno schema: pedone in d4, cavalli in f3 e d2, alfiere in d3, e poi e3-e4.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5', {
    idea: 'La mossa chiave di tutta la difesa. L\'alfiere scappa prima che ...e6 lo chiuda dentro, e punta la casa d3 che l\'alfiere d\'attacco bianco vuole.',
    hint: 'Il Bianco ha appena chiuso dentro un alfiere. Assicurati che al tuo non succeda lo stesso.',
    m: {
      e6: 'Oggettivamente va bene, ed è la mossa più giocata qui, ma seppellisce l\'alfiere di c8 e regala al Bianco lo schema d\'attacco con Ad3, Cbd2, O-O ed e4. Questo repertorio porta prima fuori quell\'alfiere.',
      c5: 'Non c\'è niente di sbagliato nella mossa in sé, e la rottura non scappa. Ma l\'alfiere campochiaro ha esattamente una occasione per uscire dalla catena di pedoni, ed è questa.',
      Bg4: 'Giocabile, ma h2-h3 pone all\'alfiere una domanda scomoda e il Bianco è felice di cambiarlo in f3, cosa che non ti aiuta per niente. La casa che guarda in faccia l\'alfiere di d3 è f5.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3', { label: 'Colle vero e proprio', idea: 'Il Bianco mette comunque l\'alfiere sulla diagonale d\'attacco e offre il cambio.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3', {
    idea: 'Prendilo. Quell\'alfiere è tutto l\'attacco; senza di lui il Bianco ha una struttura piacevole e niente da farci.',
    hint: 'Il pezzo che il Bianco ha appena offerto è quello che stava per attaccare il tuo re.',
    m: {
      Bg6: 'Ritirarsi conserva il tuo alfiere, ma conserva anche quello bianco, e quello bianco è il pezzo più pericoloso. Cambia finché puoi.',
      e6: 'Adesso Axf5 exf5 ti lascia con l\'ala di re rotta e il Bianco con la struttura migliore. Prendi prima in d3.',
      Bg4: 'Schiva il cambio, ma h2-h3 e poi il cambio in f3 lasciano al Bianco una ripresa utile invece che scomoda.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3', { label: 'Linea principale', idea: 'La donna riprende. Sembra attiva, ma non c\'è più nessun attacco da sostenere.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6', {
    idea: 'Adesso è sicuro. L\'alfiere problematico è già fuori dalla scacchiera, quindi chiudere la diagonale non costa niente.',
    hint: 'Il pezzo che questa mossa di pedone avrebbe intrappolato non c\'è più. Giocala.',
    m: {
      Nc6: 'Sana, ma il cavallo blocca il pedone c e questo repertorio vuole ...c5 più avanti. Completa prima la struttura.',
      c5: 'Leggermente prematura: dopo dxc5 devi spendere una mossa per recuperare il pedone con il re ancora al centro.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e gioca per la rottura e3-e4.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O Bd6', {
    idea: 'L\'alfiere copre e5, l\'unica casa che i pezzi bianchi potrebbero usare, e in cambio guarda h2.',
    hint: 'Togli l\'avamposto al cavallo bianco, e già che ci sei punta un alfiere sul suo re.',
    m: {
      Be7: 'Passiva. In d6 l\'alfiere ferma Ce5 e fa qualcosa in cambio; in e7 non fa né l\'uno né l\'altro.',
      c5: 'Idea giusta, e sana, ma questo repertorio arrocca prima. Con il re ancora al centro, dxc5 Axc5 permette al Bianco e3-e4 con tempo.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O Bd6 c4', { label: 'Linea principale', idea: 'Il Bianco passa a uno schema di Gambetto di Donna adesso che il piano tranquillo è stato disinnescato.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O Bd6 c4 c6', {
    idea: 'Solida e corretta: il pedone in c6 rende d5 permanente e dà alla donna le case a5 e b6.',
    hint: 'Sostieni il pedone centrale con la mossa modesta che apre anche case alla donna.',
    m: {
      dxc4: 'Cede il centro per niente: Dxc4 arriva con tempo e il Bianco ottiene gratis la spinta e3-e4 che hai passato la partita a impedire.',
      c5: 'Tagliente ma allentante: dopo cxd5 exd5 dxc5 ti resta un pedone in presa con la donna bianca già attiva in d3.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O Bd6 c4 c6 Nc3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e aggiunge pressione su d5.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O Bd6 c4 c6 Nc3 O-O', {
    idea: 'Re al sicuro con una struttura del tutto sana e nessun pezzo cattivo. È esattamente la posizione per cui hai giocato ...Af5.',
    hint: 'Tutto il resto è al suo posto. Finisci il lavoro.',
    m: {
      Ne4: 'Il cavallo sembra attivo ma si può contestare con Cxe4 dxe4, e il tuo pedone centrale finisce su una casa scura senza sostegno.',
      dxc4: 'Sbagliata per la stessa ragione: cede al Bianco il centro e un tempo, e questo è il momento in cui il tuo re dovrebbe lasciare il centro.',
    },
    end: {
      name: 'Anti-Colle, linea principale con 3...Af5',
      plans: [
        'Le mosse successive sono ...Cbd7 e poi ...Ce4 oppure ...De7 seguito dalla rottura ...e5. La tua struttura sostiene entrambe.',
        'Lotta per e5. Con l\'alfiere in d6 e un cavallo in arrivo su d7 o f6, i pezzi bianchi non ottengono mai l\'avamposto attorno a cui è costruito il sistema.',
        'Se il Bianco rompe con e3-e4, rispondi ...dxe4 e ...Cxe4 oppure ...c5: con il tuo alfiere già cambiato non c\'è più niente da temere.',
        'La colonna e semiaperta, dopo un futuro ...exd5 o ...e5, è dove va la tua torre.',
        'Questa è una struttura di Gambetto di Donna Rifiutato del tutto sana in cui hai già risolto il problema dell\'alfiere cattivo. Gioca mosse semplici e buone.',
      ],
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nbd2', { label: 'Diretto a e5', idea: 'Il Bianco tiene il pedone di c a casa e porta in fretta il cavallo verso e5 e l\'ala di re.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nbd2 Bd6', {
    idea: 'Copri e5 prima che il cavallo ci arrivi. L\'alfiere in d6 è il pezzo che rende inutile tutto lo schema bianco.',
    hint: 'Un cavallo è diretto su una casa centrale forte. Toglila prima che ci arrivi.',
    m: {
      Be7: 'Sviluppa, ma non fa niente contro Ce5, e un cavallo in e5 sostenuto dai pedoni è l\'unica cosa che qui dà una partita al Bianco.',
      c5: 'Piano giusto, e oggettivamente valido, ma questo repertorio copre prima e5, perché un cavallo bianco lì è molto più difficile da rimuovere una volta atterrato.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nbd2 Bd6 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e spera in e3-e4 o Ce5 più avanti.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nbd2 Bd6 O-O Nbd7', {
    idea: 'Il cavallo difende e5 una seconda volta e sostiene le rotture ...c5 ed ...e5. Il piano centrale del Bianco è adesso completamente spuntato.',
    hint: 'Aggiungi un altro difensore alla casa che il cavallo bianco vuole.',
    m: {
      Nc6: 'Blocca il pedone di c, e qui vuoi ...c5 come rottura liberatoria. La casa è d7.',
      'O-O': 'Non è sbagliata, ma con il Bianco pronto a Ce5 la mossa utile è quella che copre prima la casa: il tuo re non è ancora in pericolo.',
    },
    end: {
      name: 'Anti-Colle, 5.Cbd2',
      plans: [
        'Arrocca, poi gioca ...c5 oppure ...e5. Entrambe le rotture sono disponibili e il Bianco non può fermarle tutte e due.',
        'Se il Bianco gioca Ce5, prendilo: ...Cxe5 dxe5 Ac7 oppure ...Cd7 lascia il pedone in e5 debole e ti dà l\'avamposto d5.',
        'La rottura e3-e4 è l\'unico tentativo del Bianco. Rispondi ...dxe4 e ...Cxe4: i tuoi pezzi stanno meglio e non c\'è più nessun alfiere in d3.',
        'Con gli alfieri campochiari cambiati, le case bianche attorno al re avversario (f3, h3, g4) sono a lungo andare tue.',
      ],
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4', { label: 'Passa a un Gambetto di Donna', idea: 'Il Bianco abbandona il sistema e gioca per un centro vero. È la mossa più impegnativa, ma il tuo alfiere è già fuori.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6', {
    idea: 'Puntella d5. Con l\'alfiere già fuori dalla catena, questa è una Slava in cui hai risolto gratis il tuo unico problema.',
    hint: 'Sostieni con un pedone il pedone centrale attaccato.',
    m: {
      dxc4: 'Cede il centro e il Bianco ottiene e3-e4 con mano libera. In questa struttura vuoi tenere il muro in d5.',
      e6: 'Solida ma toglie proprio la casa da cui il tuo alfiere è scappato, e lascia d5 difeso soltanto da un pezzo.',
      Bxb1: 'Cedere il tuo alfiere buono per un cavallo non sviluppato perde tempo e la coppia degli alfieri senza nessun motivo.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6 Nc3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e accumula su d5.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6 Nc3 e6', {
    idea: 'Adesso è sicuro: l\'alfiere è già fuori, quindi questa completa semplicemente una struttura slava solidissima.',
    hint: 'Completa il triangolo di pedoni adesso che il tuo alfiere è al sicuro fuori.',
    m: {
      dxc4: 'Qui il pedone non si può tenere: arrivano a2-a4 o e3-e4 e il Bianco domina il centro.',
      Nbd7: 'Va bene, ma è la mossa di pedone a rendere la struttura permanente e a dare all\'alfiere di f8 una via d\'uscita.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6 Nc3 e6 Bd3', { label: 'Linea principale', idea: 'Il Bianco offre comunque il cambio degli alfieri.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6 Nc3 e6 Bd3 Bxd3', {
    idea: 'Prendilo. Ogni versione di questa posizione è comoda una volta che l\'alfiere di d3 è sparito.',
    hint: 'Ormai sai cosa fare con un alfiere in d3.',
    m: {
      Bg6: 'Tenere l\'alfiere invita Axg6 hxg6 oppure un futuro Ch4 che lo colpisce. Cambia alle tue condizioni.',
      Bg4: 'Va a sbattere contro h2-h3 e o un cambio in f3 che aiuta il Bianco o una ritirata scomoda.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6 Nc3 e6 Bd3 Bxd3 Qxd3', { label: 'Linea principale', idea: 'La donna prende la diagonale, ma non c\'è nessun attacco da fare.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 c4 c6 Nc3 e6 Bd3 Bxd3 Qxd3 Be7', {
    idea: 'Sviluppo semplice. La posizione è un comodo Semi-Slavo in cui il pezzo peggiore del Nero è già stato cambiato.',
    hint: 'Sviluppa l\'ultimo pezzo leggero e preparati ad arroccare.',
    m: {
      Bd6: 'Giocabile, ma con la donna in d3 l\'alfiere in d6 può essere colpito da e3-e4-e5. In questa struttura la casa sicura è e7.',
      Nbd7: 'Va bene ma l\'alfiere dovrebbe uscire per primo, altrimenti cavallo e alfiere si intralciano a vicenda.',
    },
    end: {
      name: 'Anti-Colle, 4.c4',
      plans: [
        'Arrocca, poi ...Cbd7 e o ...dxc4 seguito da ...b5, oppure ...Ce4 e ...f5 in uno schema tipo Stonewall.',
        'Il triangolo c6/d5/e6 è una delle strutture più sane degli scacchi. Averla senza l\'alfiere cattivo è un risultato vero.',
        'Occhio a e3-e4. Rispondi ...dxe4 e ...Cxe4 e la posizione si semplifica verso la parità.',
        'Se il Bianco gioca cxd5, riprendi con il pedone e per aprire la colonna e e liberare la posizione.',
      ],
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 b3', { label: 'Schema Zukertort', idea: 'Lo Zukertort: il secondo alfiere va in b2, puntato su e5 e, a lungo andare, sul tuo re.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 b3 e6', {
    idea: 'Sicura adesso che l\'alfiere è in f5. Il triangolo di pedoni è solido e l\'alfiere bianco in b2 morde il pedone d4 da dietro.',
    hint: 'Il tuo pezzo problematico è già fuori. Completa la struttura.',
    m: {
      c5: 'Ragionevole, ma lo Zukertort vive di linee aperte per l\'alfiere diretto in b2. Costruisci prima il triangolo.',
      e5: 'Troppo ambiziosa con l\'alfiere in b2 che sta per puntare quella casa: dopo Cxe5 o dxe5 hai ceduto il centro.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 b3 e6 Bb2', { label: 'Linea principale', idea: 'La grande diagonale è del Bianco: l\'alfiere sostiene d4 e guarda la casa e5 e oltre.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 b3 e6 Bb2 Bd6', {
    idea: 'La risposta giusta a un alfiere in b2: togli e5 e punta il tuo alfiere su h2.',
    hint: 'L\'alfiere in b2 vuole un cavallo che atterri in e5. Copri la casa.',
    m: {
      Be7: 'Passiva. Contro lo Zukertort il controllo di e5 è tutta la partita, e l\'alfiere in e7 non la contende.',
      c5: 'Apre la grande diagonale all\'alfiere bianco, che è esattamente il pezzo che dovresti chiudere fuori.',
    },
  }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 b3 e6 Bb2 Bd6 Be2', { label: 'Linea principale', idea: 'Con l\'alfiere campochiaro incapace di arrivare utilmente in d3, il Bianco si accontenta di una casa modesta.' }),
  c('d4 d5 Nf3 Nf6 e3 Bf5 b3 e6 Bb2 Bd6 Be2 Nbd7', {
    idea: 'Un secondo difensore per e5 e sostegno alla futura rottura ...c5 o ...e5. Il Bianco non ha più nessun piano attivo.',
    hint: 'Aggiungi un altro pezzo alla lotta per l\'avamposto centrale.',
    m: {
      Nc6: 'Blocca il pedone di c e va a sbattere contro Cb5 oppure a2-a3 e c2-c4. La casa d7 tiene tutto flessibile.',
      Ne4: 'Troppo presto: c2-c4 e Cbd2 cacciano il cavallo e hai perso tempo.',
    },
    end: {
      name: 'Zukertort, 4.b3',
      plans: [
        'Arrocca e poi gioca ...De7 seguito da ...e5. Quella rottura trasforma la tua posizione da solida ad attivamente migliore.',
        'Non permettere mai Ce5 gratis. Se arriva, cambialo: la ripresa con il pedone d ti regala l\'avamposto d5, e con l\'alfiere di b2 chiuso fuori il Bianco non ha niente.',
        'L\'alfiere in b2 è buono solo se la grande diagonale si apre. Tieni un pedone in d5 e resta uno spettatore.',
        'Una torre in e8 sostiene ...e5 e copre la colonna che la rottura aprirà.',
      ],
    },
  }),

  /* ------------------------------------------------------------ Blackmar-Diemer */
  b('d4', { label: 'Pedone di donna', idea: 'Un inizio dall\'aria normale.' }),
  b('d4 d5', {
    idea: 'Prenditi la tua parte di centro. È anche la mossa che invita il gambetto, che è il motivo per cui questa difesa esiste.',
    hint: 'Rispondi al pedone centrale con il tuo.',
    m: {
      Nf6: 'Valida, e schiva del tutto il gambetto, ma allora non impari mai cosa fare quando qualcuno te lo gioca contro.',
      f5: 'L\'Olandese invita 2.e4 come gambetto lo stesso, e da una struttura molto più esposta. Al centro si risponde con un pedone centrale.',
    },
  }),
  b('d4 d5 e4', { label: 'Gambetto Blackmar-Diemer', idea: 'Il pedone è offerto. Il Bianco vuole linee aperte, non materiale.' }),
  b('d4 d5 e4 dxe4', {
    idea: 'Prendilo. Rifiutare lascia il Bianco con un grande centro e l\'iniziativa, che è il peggio di entrambi i mondi.',
    hint: 'Un pedone gratis al centro, e rifiutare regala comunque al Bianco tutto quello che voleva.',
    m: {
      e6: 'La Difesa Francese. Valida in sé, ma hai regalato al Bianco tutto il centro per niente e hai schivato la domanda invece di rispondere.',
      c6: 'La Caro-Kann. Giocabile, ma tutto il senso di questa difesa è dimostrare che il gambetto non funziona quando prendi.',
      Nf6: 'Adesso e4-e5 caccia il cavallo e il Bianco ha centro e tempo, che è esattamente quello che il gambetto sta cercando di comprare con un pedone.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3', { label: 'Linea principale', idea: 'Il Blackmar-Diemer vero e proprio: sviluppa prima e riprenditi il pedone con f3 alla mossa dopo, alle condizioni del Bianco.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6', {
    idea: 'Sviluppa, copri d5 e difendi il pedone in più una volta di più. È la mossa che la teoria ha sempre considerato migliore.',
    hint: 'Sviluppa il cavallo che difende il tuo pedone in più e copre anche d5.',
    m: {
      f5: 'Provare a tenere il pedone con un pedone rovina la tua ala di re: Dh5+ o Ac4 e tutto il complesso delle case bianche attorno al re crolla.',
      e5: 'Troppo allentante: dxe5 e la tua donna viene cacciata mentre il Bianco sviluppa con tempo, e il pedone in e4 cade comunque.',
      Bf5: 'Sembra naturale, ma f2-f3 colpisce il pedone e l\'alfiere non ha una buona casa quando arriva g2-g4. Sviluppa prima il cavallo.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3', { label: 'Linea principale', idea: 'La mossa del gambetto. Il Bianco apre la colonna f e per farlo offre indietro il pedone.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3', {
    idea: 'Accetta. Rifiutare con ...e3 o ...Af5 restituisce il pedone per niente; prendere costringe il Bianco a spendere una mossa per riprendere.',
    hint: 'Prendi il pedone. Tutto quello che il Bianco ottiene in questo gambetto viene dalla colonna f, e quella si apre sia che tu prenda sia che no.',
    m: {
      e3: 'Un tentativo pratico noto, ma restituisce subito il pedone e dopo Axe3 il Bianco ha un vantaggio di sviluppo per niente.',
      Bf5: 'Sembra solida ma g2-g4 arriva con tempo e il tuo alfiere deve scappare mentre il Bianco apre linee sul tuo re.',
      e5: 'Allentante. dxe5 e il pedone in e4 cade comunque, con i pezzi bianchi che sciamano fuori.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3', { label: 'Linea principale', idea: 'Il cavallo riprende e i pezzi bianchi arrivano: Ad3, Ag5, De2 e O-O-O sono tutti in arrivo.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6', {
    idea: 'La Difesa Euwe, ed è la risposta più solida che esista. Un pedone in e6 copre d5 e f5, apre l\'alfiere e prepara l\'arrocco fuori dalla zona di pericolo.',
    hint: 'Niente di sofisticato. Apri una linea al tuo alfiere, copri le case bianche e preparati ad arroccare.',
    m: {
      g6: 'Sana, ed è un\'alternativa vera, ma il fianchetto invita Ah6 e h2-h4-h5, che è esattamente l\'attacco che il gambetto è fatto per produrre. Questo repertorio preferisce il tranquillo schema con ...e6.',
      Bg4: 'Inchioda il cavallo ma dopo h3 l\'alfiere viene deviato, e Ce5 e Ac4 colpiscono f7 con il tuo re ancora al centro.',
      Qxd4: 'La mossa ingorda, e quella su cui è costruita la trappola Halosar. Un secondo pedone non vale una donna inseguita per tutta la scacchiera.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6 Bg5', { label: 'Linea principale', idea: 'L\'alfiere inchioda il cavallo e aggiunge un pezzo alla costruzione sull\'ala di re.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6 Bg5 Be7', {
    idea: 'Rompi l\'inchiodatura e preparati ad arroccare. Semplice, e toglie il veleno a tutto quello che il Bianco ha in mano.',
    hint: 'Rispondi all\'inchiodatura con la mossa che la sblocca e ti permette di arroccare alla mossa dopo.',
    m: {
      h6: 'Axf6 Dxf6 e adesso Ce5 e Dd2 arrivano con la tua ala di re allentata e il pedone h un bersaglio per un futuro Ad3 e De2.',
      Nbd7: 'Blocca l\'alfiere e lascia l\'inchiodatura, quindi Axf6 o Ce5 arrivano con forza vera. Rompi prima l\'inchiodatura.',
      c6: 'Lenta. Non c\'è tempo per una tranquilla mossa di pedone con un alfiere in g5, un cavallo in f3 e il Bianco pronto ad arroccare lungo.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6 Bg5 Be7 Bd3', { label: 'Linea principale', idea: 'L\'alfiere prende la diagonale d\'attacco e il Bianco prepara De2 e O-O-O.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6 Bg5 Be7 Bd3 O-O', {
    idea: 'Porta fuori il re. Una volta in g8 dietro tre pedoni, il Bianco è semplicemente un pedone sotto senza via d\'entrata.',
    hint: 'Tutto il gambetto punta a un re al centro. Togli il bersaglio.',
    m: {
      Nc6: 'Sviluppa ma lascia il re in e8 per un\'altra mossa, e Axf6 seguito da Dd2 e O-O-O è un attacco vero.',
      h6: 'Allentare l\'ala di re con un alfiere in d3 già puntato su h7 è esattamente quello che il Bianco spera.',
      Nbd7: 'Naturale, ma qui viene prima il re. Con l\'alfiere in d3 e il cavallo pronto per e5, un\'altra mossa al centro è una di troppo.',
    },
    end: {
      name: 'Blackmar-Diemer, Difesa Euwe',
      plans: [
        'Sei un pedone netto in più con il re al sicuro e nessuna debolezza. Cambia pezzi ogni volta che puoi: ogni cambio allontana il gambetto dal funzionare.',
        'Gioca ...Cbd7 e ...c5 alla mossa dopo, colpendo d4 e aprendo linee ai tuoi pezzi una volta che l\'attacco si è arenato.',
        'Attenzione alla casa h7. Se il Bianco gioca De2 o Ce5 puntandola, ...h6 sostenuto da ...Cbd7 e ...Cf8 è uno schema affidabile.',
        'Se il Bianco arrocca lungo, metti in moto i pedoni dell\'ala di donna: ...b5, ...a5 e ...b4 arrivano prima di qualsiasi cosa il Bianco possa generare sull\'altra ala.',
        'Non andare a caccia di pedoni in d4 o b2. Quello che hai già basta per vincere il finale.',
      ],
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 Bg5', { label: 'Rimanda il gambetto', idea: 'Il Bianco inchioda per primo e tiene f3 in riserva, sperando di recuperare il pedone in condizioni migliori.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 Bg5 Bf5', {
    idea: 'Con f3 non ancora giocata, l\'alfiere raggiunge gratis la sua casa migliore e tiene il pedone in più.',
    hint: 'Il Bianco ha rimandato la ripresa del pedone. Usa la mossa libera per sviluppare l\'alfiere prima che venga chiuso dentro.',
    m: {
      e6: 'Solida, ma con f3 non ancora giocata c\'è una mossa libera per sviluppare l\'alfiere campochiaro fuori dalla catena. Prendila.',
      h6: 'Axf6 exf6 ti rovina la struttura e dà al Bianco la colonna e e l\'iniziativa in cambio del pedone.',
      c6: 'Troppo lenta e troppo passiva: non sviluppa e non tiene niente che non fosse già tenuto.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 Bg5 Bf5 f3', { label: 'Linea principale', idea: 'Adesso il gambetto arriva comunque, una mossa più tardi.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 Bg5 Bf5 f3 exf3', {
    idea: 'Accetta di nuovo. Il tempo in più speso su ...Af5 rende questa versione ancora migliore per il Nero.',
    hint: 'La solita risposta: prendi, e lascia che sia il Bianco a spendere la mossa per riprendere.',
    m: {
      e6: 'Rifiutare lascia il Bianco con fxe4 e un grande centro, e il tuo alfiere in f5 improvvisamente non ha più niente davanti.',
      Bg6: 'Abbastanza sana, ma questo repertorio prende il pedone invece di ritirarsi. Costringere il Bianco a dimostrare il compenso è tutto il senso dell\'accettare un gambetto.',
    },
  }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 Bg5 Bf5 f3 exf3 Nxf3', { label: 'Linea principale', idea: 'La ripresa. Il Bianco è un pedone sotto con le stesse idee d\'attacco, ma tu sei una mossa più avanti.' }),
  b('d4 d5 e4 dxe4 Nc3 Nf6 Bg5 Bf5 f3 exf3 Nxf3 e6', {
    idea: 'Completa lo schema. Alfiere in f5 già fuori, re a una mossa dall\'arrocco e un pedone in banca.',
    hint: 'Completa la struttura e preparati ad arroccare.',
    m: {
      Bxc2: 'Ingorda e perdente: dopo Tc1 o Dd2 l\'alfiere in c2 è intrappolato e il secondo pedone costa un pezzo.',
      h6: 'Allentante per niente: l\'alfiere va semplicemente in h4 oppure prende in f6 con una struttura migliore per il Bianco.',
    },
    end: {
      name: 'Blackmar-Diemer, 4.Ag5',
      plans: [
        'Gioca ...Ae7 e arrocca. Con l\'alfiere campochiaro già fuori dalla catena, questa è la versione migliore di tutta la difesa.',
        'Non toccare il pedone c2. L\'alfiere appartiene a f5 o g6, dove tiene sicure le case bianche, non intrappolato sull\'ala di donna.',
        'Dopo l\'arrocco, colpisci il centro con ...c5. Il Bianco non ha un pedone in e4 e nessun compenso una volta che la posizione si apre.',
        'Cambia le donne appena se ne presenta l\'occasione. Un finale con un pedone in più contro un giocatore di gambetto è il risultato perfetto.',
      ],
    },
  }),
  b('d4 d5 e4 dxe4 f3', { label: 'Gambetto Blackmar vero e proprio', idea: 'La versione originale e molto più debole: il Bianco apre la colonna f prima di sviluppare.' }),
  b('d4 d5 e4 dxe4 f3 e5', {
    idea: 'La confutazione. Il re bianco è al centro su una colonna che sta per aprirsi, quindi aprila.',
    hint: 'Il Bianco ha indebolito la diagonale a7-g1 e lasciato il re in mezzo. Colpisci al centro.',
    m: {
      exf3: 'Prendere è giocabile, ma dopo Cxf3 il Bianco ha la partita che voleva. Il colpo al centro è molto più forte: recupera un pedone e porta al cambio delle donne.',
      Nf6: 'Solida, ma lascia riprendere il Bianco in f3 con una normale posizione di gambetto. La rottura centrale immediata è molto più impegnativa.',
      Bf5: 'Ragionevole, ma fxe4 Axe4 porta a una posizione confusa in cui il Bianco ha attività vera. La rottura di pedone è più pulita.',
    },
  }),
  b('d4 d5 e4 dxe4 f3 e5 dxe5', { label: 'Linea principale', idea: 'Forzata in pratica: qualunque altra cosa lascia il Bianco un pedone sotto senza compenso.' }),
  b('d4 d5 e4 dxe4 f3 e5 dxe5 Qxd1', {
    idea: 'Cambia le donne con scacco. Un gambetto senza donne e senza attacco è semplicemente un pedone sotto.',
    hint: 'Prendi la donna con scacco e chiudi sul posto i sogni d\'attacco del Bianco.',
    m: {
      Qh4: 'Sembra aggressiva ma g3 arriva con tempo e la tua donna finisce inseguita mentre il Bianco sviluppa.',
      exf3: 'Guadagna un pedone ma lascia le donne in campo e il Bianco ottiene Cxf3 con attacco sulla colonna f. Il cambio delle donne è più forte.',
    },
  }),
  b('d4 d5 e4 dxe4 f3 e5 dxe5 Qxd1 Kxd1', { label: 'Linea principale', idea: 'Forzata. Il re bianco resta bloccato al centro e non potrà mai arroccare.' }),
  b('d4 d5 e4 dxe4 f3 e5 dxe5 Qxd1 Kxd1 Nc6', {
    idea: 'Sviluppa attaccando il pedone e5. Il Bianco non lo può tenere e non può arroccare: una combinazione perdente.',
    hint: 'Sviluppa un pezzo e attacca il pedone che il Bianco ha appena vinto.',
    m: {
      exf3: 'Giocabile, ma Cxf3 dà al Bianco un po\' di attività. Vincere il pedone e5 sviluppando è molto più pulito.',
      Be6: 'Lenta. Il pedone in e5 è il bersaglio, e il cavallo lo colpisce arrivando su una buona casa.',
      f6: 'Attacca il pedone ma rovina la tua struttura e apre linee verso il tuo re senza motivo.',
    },
    end: {
      name: 'Gambetto Blackmar confutato',
      plans: [
        'Il pedone in e5 cade alla mossa dopo. Il Bianco è un pedone sotto con il re in d1 e senza diritto di arrocco.',
        'Sviluppa semplicemente con ...Ae6, ...O-O-O e ...Cxe5: le tue torri si collegano, le sue no.',
        'Non correre a prendere in f3. Lascia che sia il Bianco a preoccuparsi di quel pedone mentre tu finisci lo sviluppo.',
        'È per questo che il Blackmar-Diemer infila prima Cc3: il 3.f3 immediato perde semplicemente un pedone per niente.',
      ],
    },
  }),
)
