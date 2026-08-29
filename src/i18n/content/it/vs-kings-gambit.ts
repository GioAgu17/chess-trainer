import { nodes, tree } from '../tree'

const k = tree('vs-kings-gambit')

/** Contro il Gambetto di Re: rifiuto con 2...Ac5. */
export const vsKingsGambitTrees = nodes(
  k('e4', { label: 'Pedone di re', idea: 'La prima mossa più giocata negli scacchi.' }),
  k('e4 e5', {
    idea: 'La risposta classica: prenditi il centro e non lasciare mano libera al Bianco.',
    hint: 'Rispondi al pedone di re con il tuo.',
    m: {
      c5: 'La Siciliana è un\'ottima difesa ed evita del tutto il Gambetto di Re, ma così non impari mai cosa fare quando qualcuno te lo gioca contro.',
      e6: 'La Francese è solida, ma questa difesa esiste per rispondere a 2.f4, e devi permettergli di arrivare.',
    },
  }),
  k('e4 e5 f4', { label: 'Gambetto di Re', idea: 'Il gambetto. Il Bianco offre il pedone f per il centro e la colonna f, e nel farlo apre la diagonale verso g1.' }),
  k('e4 e5 f4 Bc5', {
    idea: 'Il Gambetto di Re Rifiutato, e la risposta più pratica che esista. L\'alfiere prende la diagonale che il Bianco ha appena aperto e rende impossibile fxe5.',
    hint: 'Il Bianco ha appena aperto una diagonale puntata sul proprio re. Mettici un alfiere.',
    m: {
      exf4: 'Accettare è del tutto giocabile - il motore lo preferisce persino - ma porta a una teoria enorme e tagliente in cui è il Bianco ad averla studiata. Questo repertorio rifiuta e tiene la partita alle tue condizioni.',
      d5: 'Il Controgambetto Falkbeer è un\'opzione vera e sana, ma è tagliente e concreta, e una sola imprecisione ti lascia peggio. La mossa di alfiere non richiede quasi nessuna teoria.',
      Nf6: 'Giocabile, ma permette a fxe5 di arrivare con tempo sul cavallo, che è esattamente la mossa gratis che il Bianco vuole.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3', { label: 'Linea principale', idea: 'L\'unica buona mossa: sviluppa e impedisce ...Dh4+ prima che accada.' }),
  k('e4 e5 f4 Bc5 Nf3 d6', {
    idea: 'Puntella e5 e apri l\'alfiere di c8. Il pedone in e5 adesso è difeso e non si può prendere, quindi il pedone f del Bianco resta lì a fare il debole.',
    hint: 'Sostieni il pedone centrale e allo stesso tempo apri una diagonale al tuo ultimo pezzo leggero.',
    m: {
      exf4: 'Adesso che l\'alfiere è impegnato in c5, prendere regala al Bianco d2-d4 gratis con tempo e un centro forte.',
      Nc6: 'Ragionevole, ma il pedone in e5 ha bisogno di un pedone dietro: prima bisogna rendere impossibile fxe5 seguito da d4.',
      Nf6: 'fxe5 arriva con tempo sul cavallo, e dopo ...Cxe4 d4 il Bianco ha centro e iniziativa.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e mantiene la tensione, sperando in un fxe5 o d4 più avanti.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6', {
    idea: 'Sviluppa e colpisci e4. Adesso il pedone in e5 è difeso e quello in e4 è quello sotto pressione.',
    hint: 'Sviluppa il cavallo che attacca il pedone centrale del Bianco.',
    m: {
      exf4: 'Ancora nessun motivo per prendere: d4 arriva con tempo sul tuo alfiere e il Bianco ottiene tutto quello per cui ha offerto il gambetto.',
      Bg4: 'L\'alfiere ci andrà, ma prima deve uscire il cavallo, così che h3 non ti guadagni semplicemente un tempo.',
      Nc6: 'Va bene, ma il cavallo in f6 colpisce e4 e toglie il veleno a ogni idea di Cg5 o f4-f5. Gioca prima quella utile.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4', { label: 'Linea principale', idea: 'La casa di sviluppo naturale, con un occhio a f7.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6', {
    idea: 'Sviluppa, difendi e5 una seconda volta e tieni d\'occhio le case d4 e a5.',
    hint: 'Sviluppa l\'ultimo cavallo sulla sua casa naturale.',
    m: {
      Nxe4: 'Perde un pezzo: dopo ...Cxe4 d5 non c\'è nessuna forchetta, perché con Axd5 e Cxe5 il Bianco raccoglie semplicemente il pezzo.',
      'O-O': 'Giocabile, ma con la colonna f che sta per aprirsi e un alfiere in c4, il re sta più sicuro al centro per un\'altra mossa. Sviluppa prima.',
      exf4: 'Apre la colonna f dritta sul tuo re con l\'alfiere bianco già in c4. Non c\'è ancora stato nessun motivo per prendere.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3', { label: 'Linea principale', idea: 'Il Bianco sostiene e4 e si accontenta di una partita lenta. Il gambetto è diventato una posizione normale in cui il pedone f4 è una debolezza.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4', {
    idea: 'Inchioda il cavallo. Senza il cavallo in f3, il Bianco non ha nessuna presa né su e5 né su d4.',
    hint: 'Inchioda il pezzo che tiene insieme il centro del Bianco.',
    m: {
      'O-O': 'Sicura, ma l\'inchiodatura è la mossa che crea una minaccia vera e costringe il Bianco a indebolire l\'ala di re con h3.',
      exf4: 'Oggettivamente va bene, ma Axf4 dà al Bianco un buon alfiere e la colonna aperta. Tutto il senso di 2...Ac5 era tenere quel pedone fissato, quindi questo repertorio lo lascia lì.',
      Na5: 'Sana, ma il cavallo in a5 è fuori gioco e Ab5+ o Ab3 ti costano tempo. È l\'inchiodatura la mossa che crea una minaccia vera.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4 h3', { label: 'Linea principale', idea: 'Il Bianco pone la domanda, al prezzo di una piccola debolezza sull\'ala di re.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4 h3 Bxf3', {
    idea: 'Prendi. Togliere il cavallo lascia d4 ed e5 senza guardia e il pedone in f4 senza nessun sostegno.',
    hint: 'Prendi il pezzo che difendeva il centro, e sii contento della struttura di pedoni che lasci dietro.',
    m: {
      Bh5: 'Ritirarsi permette a g2-g4 di arrivare con tempo e l\'alfiere finisce nei guai in g6 mentre l\'attacco bianco parte gratis.',
      Be6: 'Schiva la domanda ma butta via le due mosse spese per portare l\'alfiere in g4, e il Bianco gioca semplicemente f5 o O-O con una buona partita.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4 h3 Bxf3 Qxf3', { label: 'Linea principale', idea: 'La donna riprende. Sembra attiva, ma è anche un bersaglio.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4 h3 Bxf3 Qxf3 Nd4', {
    idea: 'Il punto. Il cavallo colpisce la donna e il pedone c2, e nessun pedone bianco potrà mai cacciarlo via.',
    hint: 'Un cavallo può adesso raggiungere una casa in mezzo alla scacchiera dove attacca la donna e non può essere scacciato.',
    m: {
      exf4: 'Regala all\'alfiere bianco la casa f4 e apre la colonna verso il tuo re mentre il tuo sviluppo non è finito.',
      'O-O': 'Solida, ma il salto di cavallo arriva con tempo sulla donna e occupa la casa migliore della scacchiera. Gioca la mossa forzante.',
      Nd7: 'Passiva e all\'indietro. L\'altro cavallo ha una casa splendida al centro disponibile proprio adesso.',
    },
    end: {
      name: 'Gambetto di Re Rifiutato, linea principale con 2...Ac5',
      plans: [
        'La donna deve muoversi. Dopo Dd1 o Dg3 consolidi con ...c6, ...O-O e ...Db6, aggiungendo pressione su b2 e sulla diagonale a7-g1.',
        'Il cavallo in d4 è il pezzo migliore della scacchiera. Non cambiarlo a meno che il cambio non vinca qualcosa di concreto.',
        'Tieni il pedone in e5. Finché resta lì, il pedone f4 del Bianco è fissato e le case e5 e d4 sono tue.',
        'Se il Bianco gioca fxe5 dxe5, la colonna d si apre per la tua torre e il pedone e5 si difende facilmente con ...De7 o ...Cd7.',
        'Arroccare corto qui va benissimo: con un cavallo in d4 e un alfiere in c5, al Bianco non resta nessun attacco da organizzare.',
      ],
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 c3', { label: 'Preparare d4', idea: 'Il Bianco sostiene il centro e si prepara a costruire con d4 invece di prendere materiale.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 c3 Nf6', {
    idea: 'Sviluppa e colpisci e4. Con il Bianco che spende tempo su c3, hai una mossa libera per migliorare.',
    hint: 'Sviluppa verso il centro e poni una domanda al pedone e del Bianco.',
    m: {
      exf4: 'Apre gratis la colonna f al Bianco, e con d2-d4 in arrivo hai consegnato tutto il centro.',
      Bb6: 'Ti ritiri prima ancora che te lo chiedano. L\'alfiere in c5 sta bene per ora, e c\'è una mossa di sviluppo da fare.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 c3 Nf6 d4', { label: 'Linea principale', idea: 'Il Bianco costruisce finalmente il centro.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 c3 Nf6 d4 exd4', {
    idea: 'Prendi al momento giusto. Con il cavallo già in f6 che colpisce e4, il Bianco non può riprendere e tenere tutto insieme.',
    hint: 'Questo è il momento di prendere al centro: la ripresa lascia al Bianco un pedone attaccabile.',
    m: {
      Bb6: 'Ritirarsi consegna al Bianco il centro perfetto con d4 ed e4 sostenuti da c3. Prendi finché conviene.',
      Nxe4: 'Perde un pezzo per dxc5, perché il cavallo in e4 non ha difensori e il tuo alfiere è in presa.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 c3 Nf6 d4 exd4 cxd4', { label: 'Linea principale', idea: 'Il Bianco ricostruisce il centro, ma adesso la diagonale a7-g1 è ancora più aperta.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 c3 Nf6 d4 exd4 cxd4 Bb4', {
    idea: 'Lo scacco arriva con tempo e costringe il Bianco a coprirsi su una casa scomoda prima che tu decida dove l\'alfiere andrà a vivere davvero.',
    hint: 'Dai uno scacco che costa un tempo al Bianco e gli scompiglia lo sviluppo.',
    m: {
      Bb6: 'Sana, ma la ritirata tranquilla dà al Bianco il tempo per Cc3 e una partita comoda con un grande centro. Questo repertorio prende prima lo scacco gratis.',
      Nxe4: 'Perde ancora per dxc5: l\'alfiere in c5 è in presa con tempo.',
    },
    end: {
      name: 'Gambetto di Re Rifiutato, 4.c3',
      plans: [
        'Dopo che il Bianco si è coperto, arrocca e colpisci il centro con ...Te8 e ...d5 oppure ...Cc6 che preme su d4.',
        'Il pedone in f4 resta una debolezza a lungo termine e le case e3 e g3 sono molli per sempre.',
        'Se il Bianco si copre con Cc3, valuta il cambio in c3 per lasciargli i pedoni doppiati e un d4 debole.',
        'Non avere fretta con ...Cxe4. Completa prima lo sviluppo: i pedoni centrali sono bersagli che non scappano.',
      ],
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 fxe5', { label: 'Sciogliere la tensione', idea: 'Adesso che e5 è difeso il cambio è legale, ma cede il centro e ti consegna la colonna f da usare più avanti.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 fxe5 dxe5', {
    idea: 'Riprendi e apri la colonna d dritta sulla donna bianca. Il pedone in e5 è solido e il tuo alfiere è piazzato splendidamente.',
    hint: 'Riprendi con il pedone che apre una colonna a donna e torre.',
    m: {
      Nc6: 'Lascia un pedone in presa al centro senza nessun compenso. Riprendi prima.',
      Qe7: 'Alla fine recupera il pedone, ma la donna in e7 blocca l\'alfiere di f8 e il Bianco infila d4 con tempo.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 fxe5 dxe5 c3', { label: 'Linea principale', idea: 'Il Bianco prepara d4 per contendere il centro.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 fxe5 dxe5 c3 Nf6', {
    idea: 'Sviluppa e colpisci e4 prima che il Bianco sia pronto. Il cavallo copre anche le case d5 e g4.',
    hint: 'Sviluppa il cavallo che mette pressione immediata sull\'ultimo pedone centrale del Bianco.',
    m: {
      Bg4: 'L\'inchiodatura serve meno adesso che la colonna f è aperta: Ac4 e Db3 colpiscono f7 e b7 mentre il tuo re è in mezzo.',
      Qf6: 'La donna in f6 è un bersaglio con una torre in arrivo in f1. Sviluppa i pezzi che non vengono colpiti.',
    },
  }),
  k('e4 e5 f4 Bc5 Nf3 d6 fxe5 dxe5 c3 Nf6 d4', { label: 'Linea principale', idea: 'Il Bianco costruisce il centro e colpisce l\'alfiere.' }),
  k('e4 e5 f4 Bc5 Nf3 d6 fxe5 dxe5 c3 Nf6 d4 exd4', {
    idea: 'Apri la posizione al momento giusto. Con i tuoi pezzi sviluppati e il re bianco ancora al centro, aprire linee favorisce te.',
    hint: 'Prendi al centro adesso che il tuo cavallo è fuori e il re bianco no.',
    m: {
      Bb6: 'Ritirarsi dà al Bianco il centro di pedoni perfetto con d4 ed e4 sostenuti da c3, e mano libera per sviluppare.',
      Nxe4: 'Perde un pezzo per dxc5: il tuo alfiere in c5 è in presa.',
    },
    end: {
      name: 'Gambetto di Re Rifiutato, 4.fxe5',
      plans: [
        'Dopo cxd4 l\'alfiere torna in b4 con scacco oppure in b6, e tu arrocchi con una partita comoda.',
        'La colonna f semiaperta taglia da entrambe le parti: con il tuo re arroccato e quello bianco ancora al centro, spesso è tua da usare.',
        'Punta un cavallo su d4 o f4: le case che il Bianco ha ceduto per sempre avanzando il pedone f.',
        'Non andare a caccia di pedoni. Finisci lo sviluppo e lascia che sia il Bianco a risolvere il problema del re esposto.',
      ],
    },
  }),
  k('e4 e5 f4 Bc5 fxe5', { label: 'Prendere il pedone', idea: 'La cattura dall\'aria naturale, e perdente. I giocatori di club la fanno di continuo.' }),
  k('e4 e5 f4 Bc5 fxe5 Qh4', {
    idea: 'La confutazione. Lo scacco non si può parare con un pezzo e il re non ha una casa sicura.',
    hint: 'Il Bianco ha appena aperto una linea verso il re e non c\'è nessun cavallo in f3. Trova lo scacco.',
    m: {
      Bxg1: 'Vince una torre, ma dopo Txg1 il Bianco ha compenso vero, mentre lo scacco di donna vince molto di più.',
      Nc6: 'Recuperare tranquillamente un pedone manca tutto il punto: lo scacco vince materiale per forza.',
    },
  }),
  k('e4 e5 f4 Bc5 fxe5 Qh4 g3', { label: 'Linea principale', idea: 'Forzata: l\'unico modo di rispondere allo scacco senza perdere subito.' }),
  k('e4 e5 f4 Bc5 fxe5 Qh4 g3 Qxe4', {
    idea: 'Prendi il pedone con scacco. La torre in h1 è la prossima e il Bianco non può farci niente.',
    hint: 'Prendi con scacco il pedone in presa e guarda cosa resta indifeso nell\'angolo.',
    m: {
      Bxg1: 'Una torre è buona, ma prendere con scacco e poi raccogliere l\'altra torre è molto meglio.',
    },
  }),
  k('e4 e5 f4 Bc5 fxe5 Qh4 g3 Qxe4 Qe2', { label: 'Linea principale', idea: 'Il Bianco si copre e offre il cambio, che è il male minore.' }),
  k('e4 e5 f4 Bc5 fxe5 Qh4 g3 Qxe4 Qe2 Qxh1', {
    idea: 'La torre esce dalla scacchiera. Il Nero vince facilmente.',
    hint: 'Raccogli il pezzo a cui lo scacco puntava fin dall\'inizio.',
    m: {
      Qxe2: 'Cambiare le donne butta via la vittoria: la torre in h1 era tutto il senso della combinazione.',
      Qxc2: 'Un pedone non è una torre. Prendi il pezzo nell\'angolo.',
    },
    end: {
      name: 'Gambetto di Re, 3.fxe5 confutato',
      plans: [
        'Hai una torre e un pedone in più. La donna in h1 è temporaneamente fuori gioco, quindi sviluppa in fretta con ...Cc6, ...d6 e ...Ag4 e riportala a casa.',
        'Il Bianco proverà Cf3 e Ag2 per intrappolare la donna. ...d5 e ...Ag4 le danno la via di fuga via h2 oppure con un cambio in f3.',
        'Non essere ingordo con altri pedoni. Sviluppo e re sicuro chiudono la partita.',
        'È esattamente per questo che 2...Ac5 è un\'ottima scelta pratica: tende una trappola in cui un gran numero di giocatori di Gambetto di Re cade in pieno.',
      ],
    },
  }),
  k('e4 e5 f4 Bc5 Nc3', {
    label: 'Sviluppare prima',
    idea: 'Il Bianco sviluppa il cavallo di donna, e la cosa cambia la posizione più di quanto sembri: con e4 difeso, fxe5 torna a essere una minaccia vera.',
  }),
  k('e4 e5 f4 Bc5 Nc3 d6', {
    idea: 'Puntella e5 con un pedone. La tattica che faceva funzionare 2...Ac5 ha bisogno che il pedone e4 sia allentato dopo ...Dh4+; adesso che un cavallo lo custodisce, il pedone in e5 va difeso come si deve.',
    hint: 'Stavolta il Bianco minaccia davvero di prendere in e5. Difendilo con un pedone.',
    m: {
      Nf6: 'Adesso fxe5 vince semplicemente un pedone: ...Cxe4 va a sbattere contro Cxe4, perché il cavallo in c3 copriva e4 fin dall\'inizio.',
      exf4: 'Cede il centro per niente mentre il tuo sviluppo non è finito, e Cf3 seguito da d4 dà al Bianco tutto.',
      'Qh4+': 'Lo scacco funziona solo dopo che il Bianco ha preso in e5. Qui g3 caccia la donna, il pedone e è difeso dal cavallo e tu hai perso due mosse.',
    },
  }),
  k('e4 e5 f4 Bc5 Nc3 d6 Nf3', {
    label: 'Linea principale',
    idea: 'Il Bianco ferma lo scacco una volta per tutte. La posizione è trasposta dritta nella linea principale.',
  }),
  k('e4 e5 f4 Bc5 Nc3 d6 Nf3 Nf6', {
    idea: 'Adesso il cavallo è al sicuro: e5 è difeso, quindi fxe5 non vince niente, e il cavallo può occuparsi di attaccare e4.',
    hint: 'Sviluppa il cavallo che attacca e4: adesso è al sicuro, perché il pedone dietro di lui è difeso.',
    m: {
      exf4: 'Ancora nessun motivo per prendere: d4 arriva con tempo sul tuo alfiere e il Bianco ottiene il centro e la colonna aperta per cui aveva offerto il gambetto.',
      Qh4: 'Il cavallo in f3 la prende e basta. Una volta che il Bianco copre h4, la donna non ha niente da fare lì.',
    },
    end: {
      name: 'Gambetto di Re Rifiutato, 3.Cc3',
      plans: [
        'Questa è una trasposizione: 3.Cc3 d6 4.Cf3 Cf6 è la stessa posizione della linea principale 3.Cf3 d6 4.Cc3 Cf6. Da qui in poi è il piano che conosci già.',
        'Adesso arrivano ...Cc6 e ...Ag4, che inchioda il cavallo che tiene insieme d4 ed e5.',
        'Quando il Bianco pone la domanda con h3, prendi in f3. Togliere quel cavallo lascia d4 molle per sempre e il Bianco con l\'ala di re un po\' allentata.',
        'Tieni il pedone in e5. Finché resta lì, il pedone f4 è fissato e le case e3, g3 e d4 sono tue.',
        'L\'ordine di mosse conta in un punto solo: siccome il Bianco ha giocato Cc3 prima di Cf3, ...d6 doveva venire per prima. Azzecca quello e il resto è la linea principale.',
      ],
    },
  }),
)
