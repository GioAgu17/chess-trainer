import { nodes, tree } from '../tree'

const v = tree('vs-vienna')

/** Contro la Partita Viennese: 2...Cf6 e la rottura ...d5. */
export const vsViennaTrees = nodes(
  v('e4', { label: 'Pedone di re', idea: 'L\'inizio standard.' }),
  v('e4 e5', {
    idea: 'La risposta classica, ed è quella che invita la Viennese.',
    hint: 'Rispondi al pedone di re con il tuo.',
    m: {
      c5: 'La Siciliana schiva la Viennese, il che di per sé va benissimo, ma questa difesa serve a conoscere la risposta quando compare sulla scacchiera.',
      d5: 'La Scandinava è giocabile ma dopo exd5 Dxd5 Cc3 il Bianco sviluppa con tempo, che è l\'opposto di quello che vuoi contro un giocatore di Viennese.',
    },
  }),
  v('e4 e5 Nc3', { label: 'Partita Viennese', idea: 'Prima il cavallo di donna. Il Bianco difende e4 così che f2-f4 diventi possibile senza permettere ...Dh4+.' }),
  v('e4 e5 Nc3 Nf6', {
    idea: 'Sviluppa e colpisci e4. Adesso f2-f4 si può sempre affrontare al centro, ed è questo a togliere il veleno a tutto il sistema.',
    hint: 'Sviluppa il cavallo che attacca il pedone centrale del Bianco.',
    m: {
      Nc6: 'Giocabile, ma lascia al Bianco mano libera di scegliere fra le linee con f4 e quelle con Ac4. Il cavallo in f6 è la mossa che risponde subito su e4.',
      Bc5: 'Sviluppa ma non fa niente contro il f2-f4 in arrivo, e dopo fxe5 l\'alfiere in c5 non ferma proprio nulla.',
      d6: 'Solida ma passiva: chiude dentro l\'alfiere di f8 e dà al Bianco mano libera con f4, Cf3 e Ac4.',
    },
  }),
  v('e4 e5 Nc3 Nf6 f4', { label: 'Gambetto Viennese', idea: 'Il gambetto. Con e4 difeso dal cavallo, ...Dh4+ non è più disponibile e la minaccia fxe5 è reale.' }),
  v('e4 e5 Nc3 Nf6 f4 d5', {
    idea: 'La confutazione. Invece di prendere in f4, colpisci al centro: il pedone in e4 adesso è attaccato due volte e tutta l\'idea del Bianco crolla.',
    hint: 'Rispondi a un attacco sull\'ala con un colpo al centro.',
    m: {
      exf4: 'Accettare è esattamente quello che il Bianco vuole: e4-e5 arriva con tempo sul tuo cavallo e il Bianco ha un grande centro e linee aperte per l\'attacco.',
      Nc6: 'Sviluppa, ma fxe5 Cxe5 d4 scaccia il cavallo e regala al Bianco centro e iniziativa.',
      d6: 'Passiva: fxe5 dxe5 Dxd8+ Rxd8 ti lascia senza diritto di arrocco e senza niente in cambio.',
    },
  }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5', { label: 'Linea principale', idea: 'Il Bianco prende, che è l\'unico tentativo coerente.' }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4', {
    idea: 'Il cavallo atterra in mezzo alla scacchiera, per ora senza sostegno ma sostenibile da tutto. È la posizione per cui hai giocato ...d5.',
    hint: 'Riprendi al centro con il pezzo che finisce sulla casa più forte.',
    m: {
      dxe4: 'Recupera il pedone ma il pedone in e4 è un bersaglio e dopo d3 il Bianco ti smonta il centro con una buona partita.',
      Ng4: 'Il cavallo non ha futuro in g4: dopo d4 e h3 deve tornare indietro e hai perso tempo e un pedone.',
      Nfd7: 'Passiva: disfa il tuo sviluppo, e dopo d4 il Bianco ha un grande centro e un pedone in più.',
    },
  }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e sostiene il pedone in e5.' }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7', {
    idea: 'Sviluppo semplice, in preparazione dell\'arrocco. Non serve niente di sofisticato: il cavallo in e4 non va da nessuna parte.',
    hint: 'Sviluppa l\'alfiere che ti permette di arroccare alla mossa dopo.',
    m: {
      Nxc3: 'Cambiare il tuo pezzo migliore per un cavallo aiuta il Bianco: bxc3 gli dà un centro forte e la colonna b, e tu hai ceduto il tuo avamposto per niente.',
      Bg4: 'All\'inchiodatura si risponde con De2 o Ae2, e dopo h3 il tuo alfiere deve prendere una decisione mentre il tuo re è ancora al centro.',
      Bf5: 'Giocabile, ma l\'alfiere può essere colpito da d3 e Cd4, e il re dovrebbe mettersi al sicuro per primo.',
    },
  }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4', { label: 'Linea principale', idea: 'Il Bianco costruisce il centro e contesta il cavallo dal basso.' }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O', {
    idea: 'Re al sicuro. Con il cavallo in e4 ben piazzato e nessun pezzo bianco vicino al tuo re, questa è semplicemente la mossa più utile.',
    hint: 'I tuoi pezzi stanno bene. Togli il re dal centro.',
    m: {
      Nxc3: 'Aiuta ancora il Bianco: bxc3 gli dà un ampio centro e una colonna aperta, e il tuo cavallo era il pezzo migliore della scacchiera.',
      f5: 'L\'idea giusta una mossa troppo presto: exf6 en passant arriva mentre il tuo re è ancora in e8 e la colonna e si apre addosso a te.',
      c5: 'Aprire il centro con il re in e8 è esattamente quello che un giocatore di gambetto spera.',
    },
  }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O Bd3', { label: 'Linea principale', idea: 'Il Bianco contesta il cavallo in e4 e punta l\'alfiere su h7.' }),
  v('e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O Bd3 f5', {
    idea: 'Sostieni il cavallo con un pedone. Prendere en passant apre la colonna f dritta sul re bianco non arroccato, quindi di solito il Bianco deve lasciare il cavallo dov\'è.',
    hint: 'Sostieni il tuo cavallo al centro con un pedone, e sfida il Bianco a prendere en passant.',
    m: {
      Nxc3: 'Cambiare adesso regala al Bianco la coppia degli alfieri, un ampio centro e la colonna b aperta: tutto quello per cui il gambetto stava pagando.',
      Nc6: 'Naturale ma ignora la minaccia al tuo pezzo migliore: Axe4 dxe4 e il pedone in e4 cade subito dopo.',
      Bg4: 'Sviluppa ma lascia il cavallo in e4 in presa ad Axe4, e l\'inchiodatura si rompe facilmente con Ae3 e Dd2.',
    },
    end: {
      name: 'Gambetto Viennese, linea principale con 3...d5',
      plans: [
        'Se il Bianco prende en passant, riprendi con l\'alfiere o con la torre e usa la colonna f aperta: il re bianco è ancora al centro.',
        'Il cavallo in e4 è il tuo pezzo migliore. Sostienilo con ...f5, ...Cc6 e ...Ae6 e ci resta per tutta la partita.',
        'Il pedone in e5 è l\'unica risorsa del Bianco. Minalo con ...c5 o ...Cc6 e diventa una debolezza permanente.',
        'Gioca ...Ae6 e ...Cc6 per completare lo sviluppo, poi raddoppia sulla colonna f.',
        'Il materiale è pari e la tua struttura è la più sana. Qui non c\'è niente da temere: il gambetto è già fallito.',
      ],
    },
  }),
  v('e4 e5 Nc3 Nf6 f4 d5 exd5', { label: 'Prendere dall\'altra parte', idea: 'Il Bianco prende invece il pedone d, sperando di tenere un pedone in più e un grande centro.' }),
  v('e4 e5 Nc3 Nf6 f4 d5 exd5 e4', {
    idea: 'Spingi oltre. Il pedone in e4 toglie f3 e d3 ai pezzi bianchi, e il cavallo in d5 si può sempre scacciare più avanti.',
    hint: 'Non riprendere: spingi avanti il pedone centrale e togli case al cavallo bianco.',
    m: {
      Nxd5: 'Riprende, ma Cxd5 Dxd5 fxe5 lascia il Bianco con un sano pedone in più e una partita facile.',
      exf4: 'Adesso il Bianco è semplicemente un pedone in più con un centro forte e tu hai aperto linee sul tuo stesso re.',
      Qxd5: 'Cxd5 vince la donna: il cavallo in c3 difende d5.',
    },
    end: {
      name: 'Gambetto Viennese, 4.exd5',
      plans: [
        'Il pedone in e4 è una spina nella gola del Bianco: nessun cavallo può usare f3 o d3, e il pedone si difende facilmente con ...Af5 e ...Cbd7.',
        'Recupera il pedone in d5 con comodo giocando ...Cxd5 una volta che il cavallo bianco lascia c3, oppure lascialo lì e gioca contro le case deboli d4 ed e3.',
        'Sviluppa con ...Ac5 o ...Ad6, arrocca e pensa a ...Te8 sulla colonna semiaperta.',
        'Il pedone f4 del Bianco ha lasciato buchi permanenti in e3 e g3. Un cavallo o una donna che ci atterrano sono difficilissimi da smuovere.',
      ],
    },
  }),
  v('e4 e5 Nc3 Nf6 Bc4', { label: 'Prima l\'alfiere', idea: 'Il Bianco sviluppa e punta f7, sperando che tu prenda il pedone e4 e finisca dentro Dh5.' }),
  v('e4 e5 Nc3 Nf6 Bc4 Nc6', {
    idea: 'Sviluppa con calma. Prendere in e4 finisce dentro Dh5 con un attacco enorme, quindi sviluppa e preparati a cambiare l\'alfiere pericoloso.',
    hint: 'Non prendere il pedone. Sviluppa un cavallo e preparati a contestare l\'alfiere.',
    m: {
      Nxe4: 'È la trappola per cui esiste tutta questa linea: Dh5! colpisce f7 e il cavallo insieme, e dopo ...Cd6 Ab3 il Bianco ha un attacco furioso per il pedone.',
      Bc5: 'Giocabile, ma Dg4 o f4 arrivano con forza vera. Sviluppare il cavallo e puntare ad a5 per cambiare l\'alfiere è più affidabile.',
      d6: 'Solida ma passiva: chiude dentro l\'alfiere e il Bianco ottiene f4 e Cf3 con una partita comoda.',
    },
  }),
  v('e4 e5 Nc3 Nf6 Bc4 Nc6 d3', { label: 'Linea principale', idea: 'Il Bianco sostiene il centro e si accontenta di una partita lenta.' }),
  v('e4 e5 Nc3 Nf6 Bc4 Nc6 d3 Na5', {
    idea: 'Verso il bordo, ma con uno scopo: cambiare l\'alfiere in c4 toglie al Bianco l\'unico pezzo con un potenziale d\'attacco.',
    hint: 'Attacca l\'alfiere da cui dipende ogni idea d\'attacco del Bianco, anche se il cavallo sembra strano sul bordo.',
    m: {
      Bc5: 'Ragionevole, ma l\'alfiere in c4 è il pezzo che rende pericolosa la posizione bianca. Cambialo finché puoi.',
      Nxe4: 'Sempre la trappola: Cxe4 dxe4 e il Bianco riprende semplicemente il pezzo con un tempo in più e una posizione migliore.',
      h6: 'Lenta e inutile: per ora non c\'è niente in g5 di cui preoccuparsi, e il vero problema è l\'alfiere in c4.',
    },
    end: {
      name: 'Viennese, 3.Ac4 con ...Ca5',
      plans: [
        'Prendi in c4 alla mossa dopo. I pedoni c doppiati che il Bianco ottiene non compensano la perdita della coppia degli alfieri e di tutto il piano d\'attacco.',
        'Dopo il cambio riporta il cavallo con ...Cc6, oppure lascialo in a5 diretto a c6 via b7 se la posizione lo richiede.',
        'Prosegui con ...Ac5 o ...Ae7, ...d6 e arrocca. Non resta nessun attacco di cui preoccuparsi.',
        'Se il Bianco evita il cambio con Ab3, gioca comunque ...Cxb3: axb3 gli lascia l\'ala di donna rovinata per sempre.',
      ],
    },
  }),
  v('e4 e5 Nc3 Nf6 g3', { label: 'Viennese col fianchetto', idea: 'Un piano più lento: l\'alfiere va in g2 e il Bianco gioca per una lunga partita posizionale.' }),
  v('e4 e5 Nc3 Nf6 g3 d5', {
    idea: 'Colpisci al centro mentre il Bianco spende una mossa sul fianchetto. È sempre questa la risposta a uno schema lento sull\'ala.',
    hint: 'Il Bianco ha speso una mossa su un\'ala. Prenditi il centro.',
    m: {
      Bc5: 'Giocabile, ma con il Bianco impegnato in un piano lento la risposta più forte è la rottura centrale immediata.',
      Nc6: 'Va bene, ma permette Ag2 e Cge2 con uno schema comodo. Colpisci il centro finché il Bianco non è pronto.',
      g6: 'Copiare il fianchetto qui è passivo: il Bianco è un tempo avanti e ottiene la versione migliore della stessa struttura.',
    },
  }),
  v('e4 e5 Nc3 Nf6 g3 d5 exd5', { label: 'Linea principale', idea: 'Il Bianco prende e la posizione si apre.' }),
  v('e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5', {
    idea: 'Riprendi con il cavallo, che ora sta al centro e può cambiarsi in c3 per rovinare la struttura bianca.',
    hint: 'Riprendi con il pezzo che finisce sulla casa migliore.',
    m: {
      Qxd5: 'Cxd5 vince la donna: il cavallo in c3 difende d5. Controlla sempre cosa difende la casa prima di prendere con la donna.',
      e4: 'Giocabile, ma qui il Bianco gioca semplicemente Ag2 colpendo il pedone e poi Cg1-e2, e il pedone in e4 diventa debole invece che forte.',
    },
  }),
  v('e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2', { label: 'Linea principale', idea: 'L\'alfiere prende la grande diagonale e guarda d5.' }),
  v('e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3', {
    idea: 'Adesso il cambio è giusto: rovina la struttura dell\'ala di donna bianca prima che l\'alfiere in g2 possa essere sostenuto dai pezzi.',
    hint: 'Cambia il cavallo finché la ripresa danneggia i pedoni del Bianco.',
    m: {
      Nb6: 'Ritirarsi regala al Bianco un tempo gratis e Cf3, O-O e d4 con una partita comodissima.',
      Be6: 'Ragionevole, ma arriva Ce4 o Cxd5 e hai perso l\'occasione di doppiare i pedoni bianchi.',
      c6: 'Troppo lenta. Difende il cavallo, ma Cge2 e O-O danno al Bianco una partita facile con la struttura migliore.',
    },
  }),
  v('e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3', { label: 'Linea principale', idea: 'Forzata in pratica: dxc3 lascerebbe la colonna d spalancata e le donne cambiate.' }),
  v('e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3 Bd6', {
    idea: 'Sviluppa e tieni e5. I pedoni c doppiati del Bianco sono una debolezza a lungo termine e non c\'è niente con cui possa attaccarti.',
    hint: 'Sviluppa l\'alfiere sulla casa che difende anche il tuo pedone centrale.',
    m: {
      Bc5: 'Giocabile, ma in d6 l\'alfiere difende e5, e tenere quel pedone è ciò che rende importante la debolezza strutturale del Bianco.',
      Qd7: 'La donna in d7 non ha niente da fare e blocca l\'alfiere di c8. Sviluppa prima i pezzi che tengono insieme il tuo centro.',
    },
    end: {
      name: 'Viennese, fianchetto con 3.g3',
      plans: [
        'Arrocca, poi ...Cc6 o ...Cd7 e ...Te8. Qui basta lo sviluppo semplice.',
        'I pedoni c doppiati del Bianco sono la storia della posizione. Gioca ...c5 oppure ...b6 e ...Aa6 per fissarli e premere.',
        'Il pedone in e5 è il tuo spazio. Difendilo e l\'alfiere bianco in g2 non ha niente da mordere.',
        'Se il Bianco gioca d4, rispondi ...e4 per tenere la posizione chiusa e i pedoni doppiati fissati.',
      ],
    },
  }),
)
