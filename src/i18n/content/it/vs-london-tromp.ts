import { nodes, tree } from '../tree'

const l = tree('vs-london')
const t = tree('vs-trompowsky')

/** Contro il Sistema Londra e contro la Trompowsky. */
export const vsLondonTrompTrees = nodes(
  /* --------------------------------------------------------- Sistema Londra */
  l('d4', { label: 'Pedone di donna', idea: 'Il Londra comincia sempre da qui.' }),
  l('d4 Nf6', {
    idea: 'Sviluppa e togli e4. Tenere la partita flessibile non costa niente.',
    hint: 'Sviluppa un cavallo sulla sua casa naturale e impedisci al Bianco di prendersi tutto il centro.',
    m: {
      d5: 'Perfettamente valida e porta alla stessa struttura, ma la mossa di cavallo tiene più opzioni e regala meno tempi al Bianco.',
      g6: 'Contro il Londra il fianchetto sull\'ala di re è comodo ma lento: il Bianco ottiene tutto lo schema gratis e si gode un bel Ce5 in prospettiva.',
    },
  }),
  l('d4 Nf6 Bf4', { label: 'Sistema Londra', idea: 'Eccolo: l\'alfiere è fuori prima che e3 lo chiuda dentro. Da qui il Bianco giocherà lo stesso schema qualunque cosa tu faccia.' }),
  l('d4 Nf6 Bf4 d5', {
    idea: 'Prenditi la tua parte di centro. Con i pedoni in d5 e, fra poco, in c5, il pedone d4 del Bianco dovrà essere difeso invece che avanzato.',
    hint: 'Rispondi al Bianco al centro con il pedone che apre anche il tuo alfiere campochiaro.',
    m: {
      g6: 'Giocabile, ma dà al Bianco tutto lo schema del Londra a costo zero e un comodissimo Ce5 in prospettiva.',
      e6: 'Solida ma chiude dentro l\'alfiere di c8, che è esattamente il pezzo che il Londra cerca di soffocare. Tieni aperta la sua diagonale.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3', { label: 'Linea principale', idea: 'Il Londra standard: il pedone sostiene d4 adesso che l\'alfiere è al sicuro fuori.' }),
  l('d4 Nf6 Bf4 d5 e3 c5', {
    idea: 'La mossa critica. Colpisce d4 e, siccome l\'alfiere camposcuro è andato in f4, non c\'è niente a coprire b2 dietro di esso.',
    hint: 'Contesta il pedone che l\'alfiere in f4 dovrebbe sostenere.',
    m: {
      e6: 'Comoda ma passiva. Chiude dentro il tuo miglior pezzo leggero rimasto e lascia il Bianco costruire lo schema ideale senza opposizione.',
      Bf5: 'La casa giusta per questo alfiere, ma il centro viene prima: dopo c4 il Bianco ottiene una gran partita prima che tu sia pronto.',
      Nc6: 'Non è un errore di spirito, ma il cavallo blocca il pedone di c, e il pedone di c è l\'artiglieria che fa funzionare questa posizione.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3', { label: 'Linea principale', idea: 'Il Bianco puntella d4 e tiene intatta la struttura. Vuol dire anche che b2 adesso ha soltanto la donna dietro.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6', {
    idea: 'La mossa che i giocatori di Londra temono: colpisce b2 e aggiunge un secondo attaccante su d4. Il Bianco non ha un modo comodo di difendere entrambi.',
    hint: 'Porta fuori il pezzo che attacca sia il pedone dietro l\'alfiere sia quello davanti.',
    m: {
      Nc6: 'Buona mossa ma non è quella che pone la domanda. È la donna in b6 a costringere il Bianco a una concessione.',
      cxd4: 'Sciogliere la tensione aiuta il Bianco: cxd4 o exd4 gli danno una struttura pulita e nessun b2 debole di cui preoccuparsi.',
      e6: 'Solida ma regala al Bianco una mossa libera e chiude dentro l\'alfiere. È l\'uscita di donna a far funzionare tutto il piano.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3', { label: 'Linea principale', idea: 'La risposta più comune: il Bianco offre il cambio delle donne invece di guardare b2 cadere.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4', {
    idea: 'Infilala prima del cambio. Guadagna un tempo sulla donna, fissa l\'ala di donna e fa sì che la ripresa in b6 arrivi con una struttura sana.',
    hint: 'Prima di accettare il cambio, spingi il pedone che attacca la donna bianca.',
    m: {
      Qxb3: 'Cambiare subito è giocabile ma butta via il tempo gratis. Spingi prima, e lascia prendere al Bianco.',
      Nc6: 'Adesso il Bianco è contento di giocare Dxb6 axb6 alle sue condizioni, o anche di tenere le donne. Prendi il tempo finché c\'è.',
      cxd4: 'Scioglie la tensione per niente e lascia la donna bianca comoda in b3, dove colpisce sia b6 sia d5.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6', { label: 'Linea principale', idea: 'Le donne escono. Il Bianco non ha guadagnato niente dal cambio e ha perso ogni possibilità di attaccare.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6', {
    idea: 'Sempre con il pedone di a. La colonna a semiaperta punta dritta su a2, e i pedoni doppiati in b controllano c5 e a5: case utili, non debolezze.',
    hint: 'Riprendi con il pedone che apre una colonna alla tua torre.',
    m: {
      Nbd7: 'Devi prendere la donna. Lasciarla lì perde materiale su due piedi.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Nd2', { label: 'Linea principale', idea: 'Il Bianco sviluppa e guarda le case b3 ed e5.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Nd2 Nc6', {
    idea: 'Sviluppa con uno scopo: il cavallo guarda a5 e b4, e da a5 può arrivare in b3.',
    hint: 'Sviluppa il cavallo di donna verso le case che la tua struttura di pedoni ha aperto.',
    m: {
      e6: 'Non è sbagliata, ma chiude dentro l\'alfiere che vuoi in f5. Sviluppa prima i pezzi che hanno bisogno di diagonali aperte.',
      b5: 'Troppo impegnativa. Il pedone in b6 fa un lavoro utile coprendo c5 e a5; spingerlo regala solo la casa a5 al Bianco.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Nd2 Nc6 Be2', { label: 'Linea principale', idea: 'Il Bianco sviluppa modestamente. Con le donne fuori e il centro fissato, non c\'è nessun attacco da fare.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Nd2 Nc6 Be2 Bf5', {
    idea: 'L\'alfiere prende la sua diagonale migliore prima che ...e6 lo chiuda dentro. È il pezzo che il Londra di solito soffoca.',
    hint: 'Porta fuori dalla catena il tuo ultimo pezzo problematico prima di chiuderla.',
    m: {
      e6: 'Una mossa troppo presto: seppellisce l\'alfiere campochiaro per il resto della partita. Fallo uscire prima.',
      Na5: 'Il cavallo ci andrà, ma l\'alfiere ha un solo momento per scappare ed è questo.',
    },
    end: {
      name: 'Anti-Londra, linea principale con 5...c4',
      plans: [
        'Gioca ...e6 alla mossa dopo, adesso che l\'alfiere è al sicuro fuori, poi ...Ae7 e arrocco. La tua struttura è fissata e comoda.',
        'Il piano è ...Ca5 e ...Cb3 oppure ...Ta4: l\'ala di donna è dove hai lo spazio in più e la colonna aperta.',
        'Tieni d\'occhio b2 e a2. Con la colonna a semiaperta e il tuo pedone in c4, i pedoni bianchi sull\'ala di donna restano permanentemente un po\' scoperti.',
        'Il Bianco proverà b2-b3 per rompere la morsa. Rispondi ...cxb3 e riprendi con il pedone di a o con il cavallo, tenendo la colonna aperta.',
        'Non avere fretta. Con le donne fuori e il centro chiuso non hai debolezze: migliora i pezzi e lascia che il Bianco cerchi un piano.',
      ],
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Na3', { label: 'Diretto a b5', idea: 'Il cavallo prende la strada per b5 e c7, sperando di sfruttare il buco lasciato dai tuoi pedoni.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Na3 Nc6', {
    idea: 'Sviluppa e lascia che il cavallo arrivi. Se viene Cb5, ...Ta5 lo colpisce lungo la quinta traversa e tiene la torre sulla colonna aperta: il cavallo in a3 non ha nessun posto utile dove stare.',
    hint: 'Sviluppa il cavallo di donna e lascia che sia il Bianco a mostrare a cosa serve davvero il cavallo in a3.',
    m: {
      e6: 'Sembra che copra d6 e b5, ma butta via il tempo di cui il Bianco ha bisogno per giustificare il giro di cavallo, e l\'alfiere di c8 resta chiuso dentro per niente.',
      Bf5: 'Buona nell\'altra linea, ma qui Cb5 arriva subito e, con la torre ancora in a8, la forchetta in c7 è una minaccia vera.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Na3 Nc6 Nb5', {
    label: 'A caccia di c7',
    idea: 'Il senso del giro di cavallo: da b5 minaccia Cc7+, che forchetta il re e la torre nell\'angolo.',
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qb3 c4 Qxb6 axb6 Na3 Nc6 Nb5 Ra5', {
    idea: 'Una mossa risolve tutto: la torre esce dalla forchetta, attacca il cavallo in b5 e resta sulla colonna semiaperta a cui appartiene.',
    hint: 'Cc7 forchetterebbe il tuo re e la tua torre. Sposta la torre in modo che schivi la forchetta e attacchi il cavallo allo stesso tempo.',
    m: {
      e6: 'Cc7+ arriva con scacco, forchetta il re e la torre in a8 e vince la qualità sul posto.',
      Bf5: 'La stessa forchetta: Cc7+ prende insieme re e torre, e sviluppare non è una risposta a uno scacco.',
    },
    end: {
      name: 'Anti-Londra, 7.Ca3',
      plans: [
        'Il Bianco deve spendere un\'altra mossa per il cavallo: a2-a4 per tenerlo, oppure una ritirata. In entrambi i casi il giro di cavallo è costato quattro mosse e non ha ottenuto niente.',
        'Prosegui con ...Af5 ed ...e6, portando come sempre l\'alfiere fuori dalla catena per primo, poi ...Ae7 e arrocco.',
        'La torre in a5 sta bene, non è scomoda: guarda b5, a2 e, dopo ...e6, tutta la quinta traversa.',
        'Il tuo pedone in c4 e la colonna a semiaperta sono le risorse a lungo termine. Cambia pezzi e la maggioranza sull\'ala di donna decide il finale.',
        'Attenzione a b2-b3: è l\'unica rottura del Bianco. Prendi in b3 e riprendi con il pedone a per tenere aperta la colonna.',
      ],
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qc1', { label: 'Schiva il cambio', idea: 'Il Bianco ritira la donna per tenere b2 difeso senza cambiare. È solido ma passivo.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qc1 Nc6', {
    idea: 'Sviluppo semplice. La donna bianca in c1 non fa niente, quindi porta un altro attaccante verso il centro.',
    hint: 'Il Bianco ha appena fatto una mossa puramente difensiva. Rispondi con una di sviluppo.',
    m: {
      Qxb2: 'Il pedone è difeso dalla donna in c1. Prenderlo perde semplicemente la donna.',
      cxd4: 'Sciogliere la tensione è esattamente quello di cui la donna bianca mal piazzata ha bisogno. Tieni la pressione e sviluppa.',
      c4: 'La spinta funziona quando guadagna un tempo su una donna in b3. Con la donna in c1 fissa soltanto la struttura e libera d4 da ogni pressione.',
    },
  }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qc1 Nc6 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa finalmente il cavallo di re.' }),
  l('d4 Nf6 Bf4 d5 e3 c5 c3 Qb6 Qc1 Nc6 Nf3 Bf5', {
    idea: 'Fuori prima di ...e6. Con la donna bianca chiusa in c1 non c\'è nessuna tattica su b7, quindi il momento è questo.',
    hint: 'Sviluppa il tuo pezzo peggiore mentre niente attacca b7.',
    m: {
      e6: 'Chiude dentro l\'alfiere senza compenso. In ogni linea anti-Londra l\'alfiere campochiaro esce per primo.',
      Bg4: 'Giocabile, ma con il cavallo già in f3 e h2-h3 in arrivo, l\'alfiere finisce per cambiarsi o ritirarsi. Qui f5 è la diagonale migliore.',
    },
    end: {
      name: 'Anti-Londra, 5.Dc1',
      plans: [
        'Gioca ...e6, ...Ae7 e arrocca. Hai tutti i pezzi fuori e il Bianco ha speso una mossa a tornare indietro.',
        'La pressione su d4 non se ne va. Tieni ...c5 e ...Cc6 puntati lì e aggiungi ...Tc8 o ...Da5.',
        'Se il Bianco gioca Cbd2 e Ce5, rispondi ...Cxe5 dxe5 Cd7, e il pedone in e5 è debole mentre il tuo cavallo arriva in c5.',
        'Considera ...Ch5 al momento giusto: con l\'alfiere in f4 a corto di case, la coppia degli alfieri è spesso lì da prendere.',
      ],
    },
  }),

  /* -------------------------------------------------------------- Trompowsky */
  t('d4', { label: 'Pedone di donna', idea: 'Un inizio normale.' }),
  t('d4 Nf6', {
    idea: 'Sviluppa e copri e4. È anche la mossa che invita la Trompowsky, quindi è da qui che questa difesa comincia.',
    hint: 'Sviluppa un cavallo e impedisci al Bianco di prendersi tutto il centro.',
    m: {
      d5: 'Valida, ma porta in territorio di Gambetto di Donna invece che nella Trompowsky. Questa difesa esiste per il momento in cui il Bianco gioca Ag5.',
      f5: 'L\'Olandese invita comunque 2.Ag5, ma da una struttura molto più tagliente e con molto più da sapere. Tieni le cose semplici.',
    },
  }),
  t('d4 Nf6 Bg5', { label: 'Attacco Trompowsky', idea: 'L\'alfiere attacca il cavallo e minaccia di doppiarti i pedoni prima ancora che la partita sia cominciata davvero.' }),
  t('d4 Nf6 Bg5 Ne4', {
    idea: 'La risposta di principio. Il cavallo attacca l\'alfiere, rifiuta i pedoni doppiati e costringe il Bianco a muovere due volte lo stesso pezzo.',
    hint: 'L\'alfiere sta attaccando il tuo cavallo e non è difeso da niente. Attaccalo a tua volta.',
    m: {
      d5: 'Giocabile, ma Axf6 exf6 regala al Bianco una struttura definitivamente migliore e lui non ha ceduto niente in cambio.',
      e6: 'Solida, ma permette Axf6 Dxf6 e il Bianco sviluppa con e4 e Cc3 avendo guadagnato tempo. Il salto di cavallo tiene l\'iniziativa.',
      c5: 'Tagliente, ma dopo Axf6 la scelta fra pedoni doppiati e gxf6 è sgradevole, e d4-d5 lascia al Bianco un vantaggio di spazio.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4', { label: 'Linea principale', idea: 'L\'alfiere torna su una diagonale sicura e utile. Il Bianco accetta di averci speso due mosse.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5', {
    idea: 'Prendi il centro mentre il cavallo in e4 sta bene. Niente lo può cacciare in fretta, quindi costruisci dietro di lui.',
    hint: 'Rivendica il centro con il pedone che sostiene il tuo cavallo avanzato.',
    m: {
      c5: 'Mossa ragionevole, ma il cavallo in e4 ha bisogno di un pedone in d5 dietro. Senza, f2-f3 seguito da e2-e4 arriva con un centro enorme.',
      e6: 'Troppo modesta: chiude dentro l\'alfiere di c8 prima che la posizione lo richieda e lascia il Bianco giocare f3 ed e4 in comodità.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3', { label: 'Linea principale', idea: 'Il Bianco sostiene d4 e prepara lo sviluppo. È solido, ma il pedone di c è ancora a casa.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5', {
    idea: 'Colpisci d4 mentre il Bianco non ha un pedone di c a sostenerlo. È il punto strutturale di tutta la linea.',
    hint: 'Attacca il pedone centrale che non ha nessun pedone a difenderlo.',
    m: {
      e6: 'Solida ma lenta, e chiude dentro l\'alfiere. Il pedone in d4 è il bersaglio e non resterà indifeso per sempre.',
      Bf5: 'L\'alfiere ci andrà, ma la rottura ...c5 deve arrivare mentre l\'ala di donna bianca è ancora da sviluppare.',
      Nc6: 'Naturale, ma blocca il pedone di c, e il pedone di c è la parte del piano che attacca davvero qualcosa.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 Bd3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e contesta il cavallo in e4.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 Bd3 Nc6', {
    idea: 'Aggiungi un secondo attaccante su d4 e prepara ...Db6. Il cavallo in e4 non va da nessuna parte finché è sostenuto dal pedone d5.',
    hint: 'Porta un altro pezzo a puntare il pedone che hai attaccato la mossa scorsa.',
    m: {
      Nd7: 'Il cavallo è passivo in d7 e chiude dentro l\'alfiere di c8, che è il pezzo che vuoi in f5 in questa struttura.',
      cxd4: 'Sciogliere la tensione aiuta il Bianco: exd4 gli dà una struttura pulita e improvvisamente l\'alfiere in f4 ha un lavoro.',
      e6: 'Chiude dentro l\'alfiere e non fa niente contro il pedone in d4. Sviluppa verso il bersaglio.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 Bd3 Nc6 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e difende d4 una seconda volta.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 Bd3 Nc6 Nf3 Qb6', {
    idea: 'Il consueto doppio attacco: b2 e d4 insieme. Il Bianco deve spendere una mossa per risolverlo.',
    hint: 'Porta la donna sulla casa che colpisce due pedoni nello stesso momento.',
    m: {
      Bf5: 'Buona casa, ma l\'uscita di donna è la mossa che costringe davvero a una concessione. Gioca prima la mossa forzante.',
      cxd4: 'Cambiare al centro risolve gratis l\'unico problema del Bianco e butta via la tensione che hai costruito in quattro mosse.',
      e6: 'Chiude dentro l\'alfiere proprio mentre la posizione sta per aprirsi. Non c\'è ancora nessuna fretta di giocare questo pedone.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 Bd3 Nc6 Nf3 Qb6 Qc1', { label: 'Linea principale', idea: 'Il Bianco difende b2 nell\'unico modo che non perde materiale né rovina la struttura. È passivo, e il Nero sta comodo.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 Bd3 Nc6 Nf3 Qb6 Qc1 Bf5', {
    idea: 'Adesso l\'alfiere esce. Con la donna bianca sepolta in c1 non c\'è nessuna tattica su b7, e il cambio in d3 ti conviene.',
    hint: 'Sviluppa il tuo ultimo pezzo leggero mentre la donna bianca è bloccata a difendere.',
    m: {
      Qxb2: 'La donna in c1 difende b2. Prenderlo perde semplicemente la donna.',
      e6: 'Una mossa troppo presto. L\'alfiere ha la strada libera per f5 proprio adesso, e dopo ...e6 non l\'avrà più.',
    },
    end: {
      name: 'Trompowsky, 2...Ce4 linea principale',
      plans: [
        'Gioca ...e6, ...Ae7 e arrocca. I tuoi pezzi stanno meglio di quelli bianchi e il cavallo in e4 è un ospite permanente.',
        'Tieni la tensione su d4. Gioca ...Tc8 e ...cxd4 solo quando la ripresa crea una debolezza che puoi attaccare.',
        'Se il Bianco cambia in f5, riprendi con il pedone e per aprire la colonna e e sostenere il cavallo in e4.',
        'La donna bianca in c1 è il pezzo peggiore della scacchiera. Ogni mossa che la tiene lì è una piccola vittoria.',
        'Anche il piano ...c4 seguito da ...b5 e ...b4 funziona bene qui, esattamente come contro il Londra.',
      ],
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 c3', { label: 'Puntella d4', idea: 'La risposta solida: il Bianco sostiene d4 con un pedone e tiene tutto difeso.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 c3 Nc6', {
    idea: 'Sviluppa e mantieni la pressione. Con il pedone in c3 invece di un pezzo, lo sviluppo dell\'ala di donna bianca diventa più lento.',
    hint: 'Sviluppa il cavallo che aggiunge un secondo attaccante al centro.',
    m: {
      Qb6: 'Adesso il pedone in c3 fa sì che Db3 arrivi con un comodo cambio e il Bianco non abbia più problemi. Sviluppa prima.',
      cxd4: 'cxd4 dà al Bianco esattamente la struttura per cui ha giocato c3. Tieni la tensione.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 c3 Nc6 Nd2', { label: 'Linea principale', idea: 'Il Bianco contesta il cavallo in e4 e prepara lo sviluppo dell\'ala di re.' }),
  t('d4 Nf6 Bg5 Ne4 Bf4 d5 e3 c5 c3 Nc6 Nd2 Qb6', {
    idea: 'Adesso l\'uscita di donna morde: con il cavallo in d2 invece della donna in c1, b2 è davvero scomodo da tenere.',
    hint: 'Con i pezzi bianchi impegnati al centro, colpisci il pedone dietro di loro.',
    m: {
      Nxd2: 'Cambiare il tuo pezzo migliore per un cavallo appena mosso aiuta il Bianco a completare lo sviluppo gratis.',
      e6: 'Chiude dentro l\'alfiere e dà al Bianco il tempo di giocare Cgf3 e Ad3 con una partita comoda.',
    },
    end: {
      name: 'Trompowsky, 4.c3',
      plans: [
        'La minaccia immediata è ...Cxd2 seguito da ...Dxb2. Il Bianco deve spendere una mossa in Db3 o Tb1.',
        'Dopo che il Bianco ha difeso, prosegui con ...Af5, ...e6, ...Ae7 e arrocca: una comoda struttura tipo Londra a colori invertiti, in versione leggermente migliore.',
        'Non cambiare in d2 senza motivo: il cavallo in e4 è il tuo pezzo migliore e il Bianco deve faticare per rimuoverlo.',
        'La rottura ...c4 seguita da ...b5 guadagna spazio sull\'ala di donna e lascia l\'alfiere in f4 senza niente da fare.',
      ],
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bh4', { label: 'Tiene l\'alfiere sulla diagonale', idea: 'Il Bianco conserva l\'idea dell\'inchiodatura e tiene d\'occhio d8, sperando in f2-f3 ed e2-e4 con un grande centro.' }),
  t('d4 Nf6 Bg5 Ne4 Bh4 c5', {
    idea: 'Colpisci subito d4. L\'alfiere bianco in h4 è lontanissimo dall\'ala di donna e non c\'è nessun pedone di c a tenere insieme il centro.',
    hint: 'L\'alfiere si è allontanato ancora di più dall\'ala di donna. Attacca il pedone centrale che ha abbandonato.',
    m: {
      d5: 'Solida, ma lascia il Bianco giocare f3 ed e4 in comodità con un grande centro e l\'alfiere che guarda d8.',
      g5: 'Guadagna la coppia degli alfieri ma a un prezzo terribile: dopo Ag3 Cxg3 hxg3 la tua ala di re è in rovina e la colonna h è aperta sul tuo re.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bh4 c5 f3', { label: 'Linea principale', idea: 'Il Bianco caccia il cavallo e prepara e2-e4. È il tentativo critico, e indebolisce anche la diagonale a5-e1.' }),
  t('d4 Nf6 Bg5 Ne4 Bh4 c5 f3 Qa5', {
    idea: 'Lo scacco che cambia tutto. Arriva con tempo, e se il Bianco blocca con c2-c3 il cavallo in e4 si serve gratis.',
    hint: 'Il Bianco ha appena indebolito una diagonale puntata sul re. Portaci sopra la donna con scacco.',
    m: {
      Nf6: 'Ritirarsi senza lo scacco butta via tutto il senso della linea. È lo scacco di donna a far funzionare la cosa.',
      g5: 'Sembra che vinca un pezzo, ma dopo fxe4 il pedone in g5 è in presa e la tua posizione di re è in rovina.',
      cxd4: 'Scioglie la tensione per niente e dopo fxe4 il Bianco ha un centro enorme e una partita libera.',
    },
  }),
  t('d4 Nf6 Bg5 Ne4 Bh4 c5 f3 Qa5 c3', { label: 'Linea principale', idea: 'Il blocco naturale, e quello che va dritto in ...Cxc3: è per questo che la teoria preferisce Cc3 o Cd2 qui.' }),
  t('d4 Nf6 Bg5 Ne4 Bh4 c5 f3 Qa5 c3 Nf6', {
    idea: 'Il modo sicuro di incassare il guadagno. Il Bianco ha speso mosse in Ag5-h4, f3 e c3 mentre tu facevi mosse utili, e adesso stai meglio.',
    hint: 'Hai già ottenuto tutto quello che ti serviva. Riporta il cavallo su una casa sicura con i tempi in banca.',
    m: {
      cxd4: 'Giocabile, ma lascia riprendere il Bianco e districarsi. Tenere la tensione è più forte con il Bianco così indietro nello sviluppo.',
      Nd6: 'Il cavallo sta male in d6, dove blocca il pedone di d. La casa è f6, da cui può andare in d5 o in h5.',
    },
    end: {
      name: 'Trompowsky, 3.Ah4 con 4...Da5+',
      plans: [
        'Conta le mosse: il Bianco ha giocato Ag5-h4, f2-f3 e c2-c3 senza sviluppare un pezzo. Tu hai la donna fuori con tempo e una struttura sana.',
        'Prosegui con ...cxd4 e ...d5, oppure ...Cc6 ed ...e6: in ogni caso ottieni una posizione normale con un tempo in più.',
        'Il pedone in f3 è una debolezza permanente sulla diagonale a7-g1 e sulla casa e3. Tieni la donna attiva e pensa a ...e5.',
        'Non lasciare che il Bianco consolidi gratis con e2-e4 e Cc3: apri la posizione finché sei avanti nello sviluppo.',
      ],
    },
  }),
)
