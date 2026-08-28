import { nodes, tree } from '../tree'

const n = tree('kings-indian-defence')

/** Difesa Est-Indiana, Classica. */
export const kingsIndianTree = nodes(
  n('d4', { label: 'Apertura di pedone di donna', idea: 'Il Bianco prende il centro.' }),
  n('d4 Nf6', {
    idea: 'Controlla e4 con un pezzo invece che con un pedone. È l\'ordine di mosse indiano, che tiene aperte tutte le opzioni.',
    hint: 'Lotta per e4 con un pezzo, non con un pedone.',
    m: {
      d5: 'Buona mossa, ma porta alla famiglia del Gambetto di Donna, non all\'Est-Indiana.',
      g6: 'Giocabile, ma lascia al Bianco la forte opzione di e4 immediato con un centro enorme.',
    },
  }),
  n('d4 Nf6 c4', { label: 'Linea principale', idea: 'Il Bianco prende spazio sull\'ala di donna e sostiene il futuro e4.' }),
  n('d4 Nf6 c4 g6', {
    idea: 'Prepara il fianchetto. L\'alfiere in g7 sarà il pezzo più importante della partita.',
    hint: 'Preparati a fianchettare l\'alfiere camposcuro.',
    m: {
      e6: 'Quella porta alla Nimzo-Indiana o all\'Indiana di Donna: ottime aperture, ma un repertorio diverso.',
      c5: 'Quella è la Benoni. Giocabile, ma l\'Est-Indiana fianchetta per prima cosa.',
      d5: 'Quella traspone in una posizione in stile Grünfeld senza l\'utile ...g6, e il Bianco sta comodo.',
    },
  }),
  n('d4 Nf6 c4 g6 Nc3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e prepara e4.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7', {
    idea: 'Completa il fianchetto. L\'alfiere adesso guarda d4 e la grande diagonale.',
    hint: 'Metti l\'alfiere sulla grande diagonale.',
    m: {
      d5: 'Quella è la Grünfeld: un\'apertura eccellente, ma diversa. L\'Est-Indiana lascia il centro al Bianco apposta.',
      c5: 'Quella porta a una Benoni. Giocabile, ma l\'Est-Indiana completa prima il fianchetto.',
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4', { label: 'Classica / linea principale', idea: 'Il Bianco prende tutto il centro: esattamente quello che l\'Est-Indiana invita a fare.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6', {
    idea: 'La mossa chiave. Impedisce e4-e5, apre l\'alfiere di c8 e soprattutto prepara la rottura ...e5.',
    hint: 'Impedisci al Bianco di spingere di nuovo il pedone e, e prepara la tua rottura centrale.',
    m: {
      'O-O': 'Giocabile e di solito traspone, ma dà al Bianco l\'opzione in più di e4-e5 in certi ordini di mosse.',
      e5: 'Troppo presto: il Bianco gioca dxe5 e dopo ...Cg4 o ...Cfd7 hai una posizione scomoda senza compenso.',
      c5: 'Quella è una Benoni, e qui il Bianco risponde d5 con un grande vantaggio di spazio.',
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3', { label: 'Variante Classica', idea: 'Il Bianco sviluppa con naturalezza e prepara Ae2 e O-O.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O', {
    idea: 'Arrocca. Il re è al sicuro dietro il fianchetto e la torre arriva in e8 o in f8, dove servirà.',
    hint: 'Metti il re al sicuro dietro il fianchetto prima di aprire il centro.',
    m: {
      e5: 'Prematura: il Bianco gioca dxe5 dxe5 e Dxd8+ ti toglie l\'arrocco.',
      Nbd7: 'Giocabile, ma arroccare prima è più preciso: vuoi tenere aperta la scelta della casa del cavallo.',
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2', { label: 'Classica linea principale', idea: 'Il Bianco sviluppa modestamente e arrocca: lo schema classico.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5', {
    idea: 'Finalmente la rottura dell\'Est-Indiana. Contesta d4 e chiede al Bianco di decidere che partita giocare.',
    hint: 'Adesso gioca la rottura centrale a cui punta tutta l\'apertura.',
    m: {
      c5: 'Questa porta a una struttura di Benoni. Giocabile, ma è un\'altra apertura.',
      Nbd7: 'Il cavallo va lì solo dopo ...e5: altrimenti blocca l\'alfiere di c8 senza contestare niente.',
      Nc6: 'Il cavallo in c6 viene colpito da d4-d5 con tempo. Gioca prima il pedone.',
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e mantiene la tensione centrale.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6', {
    idea: 'La mossa di Mar del Plata. Provoca d4-d5 e chiude il centro: è la posizione che tutta l\'apertura vuole.',
    hint: 'Attacca il centro con un pezzo e invita il Bianco a chiuderlo.',
    m: {
      exd4: 'Sciogliere la tensione aiuta il Bianco: dopo Cxd4 ottiene una posizione comoda e tu non hai attacco.',
      Nbd7: 'Un sistema alternativo perfettamente valido, ma più lento; questo repertorio gioca per la corsa di Mar del Plata.',
      c6: 'Troppo lenta. Non fa niente al centro e il Bianco consolida con calma.',
    },
    end: {
      name: 'Difesa Est-Indiana, Classica Mar del Plata',
      plans: [
        'Dopo d4-d5 il centro è chiuso. Gioca ...Ce7, poi ...Cd7 o ...Ce8 e prepara ...f5.',
        'La formazione d\'attacco è ...f5, ...f4, ...g5, ...h5, con la torre in f7 e g7: è tutto il piano.',
        'Non aprire il centro. Il tuo attacco sull\'ala di re funziona solo se la posizione resta chiusa.',
        'Il Bianco giocherà c4-c5 e attaccherà sull\'ala di donna: è una corsa, e la tua strada è più corta.',
        'L\'alfiere in g7 sembra passivo dietro i tuoi stessi pedoni, ma appena la posizione si apre diventa il pezzo migliore della scacchiera.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5', { label: 'Variante di Cambio', idea: 'Il Bianco cambia al centro e punta a una partita tranquilla.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5', {
    idea: 'Riprendi. Le donne di solito escono e si arriva a un finale simmetrico dove il tuo alfiere in g7 è un buon pezzo.',
    hint: 'Riprendi al centro.',
    end: {
      name: 'Est-Indiana, Variante di Cambio',
      plans: [
        'Dopo Dxd8 Txd8 tieni la torre in d8 e gioca ...Td8, ...c6 e ...Cbd7 con un finale comodo.',
        'La torre di f8 sta meglio in d8 che dove si trova: è la colonna che conta.',
        'Punta a d3 e c4 con un cavallo; il pedone in e4 è un po\' allentato e l\'alfiere in g7 lo guarda da lontano.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5', { label: 'Variante Petrosian', idea: 'Il Bianco chiude il centro prima che il Nero abbia giocato ...Cc6.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5', {
    idea: 'Ferma l\'espansione bianca con b2-b4 prima che cominci.',
    hint: 'Il Bianco sta per espandersi sull\'ala di donna. Fermalo prima che parta.',
    m: {
      Ne8: 'Il cavallo è diretto lì, ma cominciare senza ...a5 lascia al Bianco b4 e c5 con un attacco molto più veloce.',
    },
    end: {
      name: 'Est-Indiana, Variante Petrosian',
      plans: [
        'Prosegui con ...Ca6-c5, puntando al buco lasciato dal pedone in b4 fermato.',
        'Poi prepara ...f5 come sempre; con b4 bloccato il Bianco è molto più lento.',
        'Tieni il centro chiuso: il tuo gioco è sull\'ala di re e vive di quella struttura.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Be3', { label: 'Variante Gligoric', idea: 'Il Bianco sviluppa e aggiunge pressione al centro.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Be3 Ng4', {
    idea: 'Colpisci subito l\'alfiere. È la risposta standard e guadagna tempo.',
    hint: 'L\'alfiere è appena arrivato su una casa dove un cavallo può colpirlo. Fallo.',
    m: {
      Nbd7: 'Giocabile, ma perdi l\'occasione di colpire l\'alfiere con tempo.',
      exd4: 'Oggettivamente valida, e i motori la preferiscono un filo, ma scioglie la tensione e rinuncia alla corsa che l\'Est-Indiana cerca.',
    },
    end: {
      name: 'Est-Indiana, Variante Gligoric',
      plans: [
        'Dopo Ag5 f6 Ah4 l\'alfiere è fuori gioco e tu hai guadagnato spazio sull\'ala di re.',
        'Se il Bianco gioca Ac1, hai guadagnato due tempi: usali per ...f5 o ...Cc6.',
        'Valgono i soliti piani dell\'Est-Indiana sull\'ala di re una volta chiuso il centro.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O h3', { label: 'Variante Makogonov', idea: 'Il Bianco impedisce ...Ag4 e prepara Ae3 e g2-g4.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O h3 e5', {
    idea: 'Rompi al centro come sempre: il Bianco ha speso una mossa su un pedone che non contesta niente.',
    hint: 'Gioca la tua rottura centrale standard.',
    end: {
      name: 'Est-Indiana, Variante Makogonov',
      plans: [
        'Se il Bianco chiude con d5, prosegui con ...Ch5 o ...Ce8 e prepara ...f5.',
        'Il pedone in h3 rende ...f5 leggermente più difficile ma dà anche un bersaglio a ...g5-g4.',
        'Tieni il centro chiuso e attacca sull\'ala di re: la struttura non cambia.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3', { label: 'Variante Sämisch', idea: 'Il Bianco sostiene e4 con il pedone f e prepara Ae3, Dd2 e l\'arrocco lungo.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O', {
    idea: 'Arrocca e tieni aperte le opzioni. Contro il Sämisch puoi scegliere fra ...e5 e ...c5.',
    hint: 'Metti prima il re al sicuro; la rottura la scegli alla mossa dopo.',
    m: {
      e5: 'Giocabile, ma il Sämisch è proprio la linea dove il Bianco vuole quel centro chiuso: tieni aperta la scelta.',
    },
    end: {
      name: 'Est-Indiana, Variante Sämisch',
      plans: [
        'Le scelte principali sono ...e5 (chiudere il centro) e ...c5 (aprirlo mentre il re bianco è ancora indeciso).',
        'Il Bianco giocherà Ae3, Dd2, O-O-O e g4-h4: il controgioco arriva sull\'ala di donna.',
        '...a6, ...c6 e ...b5 è il piano moderno sull\'ala di donna ed è di solito il più rapido.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4', { label: 'Attacco dei Quattro Pedoni', idea: 'Il Bianco prende tutto lo spazio possibile: ambizioso, ma allentante.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O', {
    idea: 'Arrocca per prima cosa. Contro un centro sovraesteso, lo sviluppo batte l\'avidità.',
    hint: 'Il Bianco ha speso quattro mosse in pedoni. Sviluppa e arrocca.',
    m: {
      e5: 'Prematura: fxe5 dxe5 e d5 ti lascia compresso con il re ancora al centro.',
    },
    end: {
      name: 'Est-Indiana, Attacco dei Quattro Pedoni',
      plans: [
        'La rottura principale è ...c5, che colpisce d4 mentre il re bianco è ancora in mezzo.',
        'Dopo d5 la partita diventa una Benoni in cui il pedone bianco in f4 è una debolezza invece che una forza.',
        '...e6 e ...exd5 per aprire linee è un\'altra buona strada.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2', { label: 'Trasposizione di ordine', idea: 'Il Bianco sviluppa l\'alfiere prima del cavallo.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O', {
    idea: 'Arrocca; dopo Cf3 la partita traspone direttamente nella Classica.',
    hint: 'Arrocca: la partita trasporrà nella tua linea principale.',
    end: {
      name: 'Est-Indiana, 5.Ae2',
      plans: [
        'Dopo Cf3 sei nella Classica: gioca ...e5 e valgono i soliti piani.',
        'Se il Bianco gioca Ag5, ...h6 ed ...e5 danno una posizione comoda.',
        'Valgono tutti i piani abituali dell\'Est-Indiana.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 g3', { label: 'Variante del Fianchetto', idea: 'Anche il Bianco fianchetta: è il modo più sicuro e posizionale di affrontare l\'Est-Indiana.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 g3 O-O', {
    idea: 'Arrocca e aspetta. Contro il fianchetto il Nero sceglie fra ...d6 e ...e5 e il piano con ...c6 e ...d5.',
    hint: 'Metti il re al sicuro prima di scegliere un piano centrale.',
    end: {
      name: 'Est-Indiana, Variante del Fianchetto',
      plans: [
        'Le linee principali sono ...d6, ...Cbd7 ed ...e5, oppure il solido ...c6 e ...d5.',
        'L\'alfiere bianco in g2 neutralizza il tuo in g7, quindi la tempesta sull\'ala di re è meno efficace del solito.',
        'Il controgioco sull\'ala di donna con ...a6, ...Tb8 e ...b5 è di solito la strada migliore.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 Nf3', { label: 'Rimanda e4', idea: 'Il Bianco sviluppa e tiene disponibili sia e4 sia g3.' }),
  n('d4 Nf6 c4 g6 Nc3 Bg7 Nf3 O-O', {
    idea: 'Arrocca e tieni tutte le opzioni; dopo e4 d6 la partita traspone.',
    hint: 'Arrocca: il piano centrale lo scegli dopo.',
    end: {
      name: 'Est-Indiana, 4.Cf3',
      plans: [
        'Dopo e4 gioca ...d6 e sei nelle linee principali della Classica.',
        'Se il Bianco gioca g3, valgono i piani della variante del Fianchetto.',
        'Tieni ...d6 ed ...e5 come piano di base ogni volta che il Bianco prende il centro.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 Nf3', { label: 'Flessibile', idea: 'Il Bianco sviluppa prima di impegnare il cavallo di donna.' }),
  n('d4 Nf6 c4 g6 Nf3 Bg7', {
    idea: 'Completa il fianchetto: il tuo piano non cambia.',
    hint: 'Finisci il fianchetto.',
    end: {
      name: 'Est-Indiana, 3.Cf3',
      plans: [
        'Dopo Cc3 ed e4 la partita traspone nella Classica.',
        'Se il Bianco gioca g3, segui i piani del Fianchetto con ...O-O, ...d6 e ...Cbd7.',
        '...d6 ed ...e5 restano il piano centrale.',
      ],
    },
  }),
  n('d4 Nf6 c4 g6 g3', { label: 'Fianchetto immediato', idea: 'Il Bianco punta dritto ai sistemi con il fianchetto.' }),
  n('d4 Nf6 c4 g6 g3 Bg7', {
    idea: 'Completa il tuo fianchetto e arrocca alla mossa dopo.',
    hint: 'Finisci il fianchetto.',
    end: {
      name: 'Est-Indiana contro g3 immediato',
      plans: [
        '...O-O e ...d6 alla mossa dopo, poi scegli fra ...Cbd7 ed ...e5 oppure ...Cc6.',
        'Il controgioco sull\'ala di donna con ...a6, ...Tb8 e ...b5 funziona bene qui.',
        'Il centro con ...e5 resta la rottura liberatoria principale.',
      ],
    },
  }),
  n('d4 Nf6 Nf3', { label: 'Ordine di mosse flessibile', idea: 'Il Bianco sviluppa e rimanda c4.' }),
  n('d4 Nf6 Nf3 g6', {
    idea: 'Punta comunque al fianchetto: lo schema dell\'Est-Indiana funziona contro quasi tutto.',
    hint: 'Gioca la tua mossa di schema standard.',
    end: {
      name: 'Est-Indiana contro 2.Cf3',
      plans: [
        'Dopo c4 e Cc3 la partita traspone nelle linee principali.',
        'Se il Bianco gioca un Londra o un Torre, ...Ag7, ...O-O, ...d6 e ...Cbd7 vanno benissimo.',
        'La rottura ...c5 è disponibile anche contro i sistemi senza c4.',
      ],
    },
  }),
  n('d4 Nf6 Bg5', { label: 'Attacco Trompowsky', idea: 'Il Bianco inchioda subito il cavallo, evitando tutta la teoria delle linee principali.' }),
  n('d4 Nf6 Bg5 Ne4', {
    idea: 'La risposta di principio: attaccare l\'alfiere guadagna un tempo e costringe il Bianco a muoverlo di nuovo.',
    hint: 'Il cavallo inchiodato non è davvero inchiodato: non c\'è nessun re dietro. Saltaci sopra.',
    m: {
      g6: 'Giocabile, ma il Bianco prende con Axf6 e dopo ...exf6 la tua struttura è danneggiata gratis.',
      d5: 'Buona mossa, e i motori sono contenti. Questo repertorio gioca la risposta di principio.',
    },
    end: {
      name: 'Attacco Trompowsky',
      plans: [
        'Dopo Af4 i seguiti standard sono ...c5 e ...d5, entrambi con una buona partita.',
        'Se il Bianco gioca Ah4, ...c5 colpisce il centro mentre l\'alfiere è fuori posizione.',
        'Hai guadagnato tempo: usalo per colpire al centro prima che il Bianco sia sviluppato.',
      ],
    },
  }),
  n('d4 Nf6 Bf4', { label: 'Sistema Londra', idea: 'Il Bianco gioca un sistema solido invece di lottare sulla teoria.' }),
  n('d4 Nf6 Bf4 g6', {
    idea: 'Fianchetta come al solito. Contro il Londra l\'alfiere in g7 si combina con ...d6 ed ...e5.',
    hint: 'Gioca il tuo schema standard con il fianchetto.',
    end: {
      name: 'Schema est-indiano contro il Londra',
      plans: [
        '...Ag7, ...O-O, ...d6 e ...Cbd7 con un ...e5 più avanti.',
        '...Ch5 che colpisce l\'alfiere di f4 è un\'idea chiave: se il Bianco non ha giocato h3, guadagni la coppia degli alfieri.',
        '...c5 è altrettanto buona, perché colpisce d4 mentre il Bianco non ha il pedone in c4 a sostenerlo.',
      ],
    },
  }),
)
