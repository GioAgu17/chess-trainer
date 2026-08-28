import { nodes, tree } from '../tree'

const o = tree('vs-catalan-open')
const c = tree('vs-catalan-closed')

/** Le due risposte alla Catalana: Aperta e Chiusa. */
export const vsCatalanTrees = nodes(
  /* ------------------------------------------------------------- Aperta */
  o('d4', { label: 'Pedone di donna', idea: 'Il Bianco apre con il pedone di donna. Non è ancora deciso niente.' }),
  o('d4 Nf6', {
    idea: 'La risposta più flessibile: impedisce e2-e4 e tiene aperto ogni schema per il Nero.',
    hint: 'Sviluppa un cavallo sulla casa che toglie e4 al Bianco.',
    m: {
      d5: 'Mossa perfettamente buona, ma invita al Gambetto di Donna invece che alla Catalana. Questo repertorio risponde a 1.d4 con il cavallo per scegliere la struttura una mossa più tardi.',
      f5: 'L\'Olandese è giocabile ma è un corpo di teoria a parte, e non risponde per niente alla domanda a cui serve questa difesa.',
    },
  }),
  o('d4 Nf6 c4', { label: 'Linea principale', idea: 'Il Bianco rivendica il centro con il pedone di c e tiene aperte sia la Catalana sia il Gambetto di Donna.' }),
  o('d4 Nf6 c4 e6', {
    idea: 'Sostiene la futura ...d5 e apre l\'alfiere di f8. È la mossa che invita la Catalana, ed è proprio quello che vogliamo affrontare.',
    hint: 'Prepara ...d5 con una modesta mossa di pedone che libera anche l\'alfiere camposcuro.',
    m: {
      g6: 'L\'Est-Indiana è un\'ottima apertura, ma schiva la Catalana invece di rispondergli. Se vuoi sapere cosa fare contro i sistemi con g3, devi permetterglieli.',
      e5: 'Il Gambetto Budapest. È un\'apertura vera, ma stai regalando un pedone alla seconda mossa per attività, e il giocatore di Catalana non ha nessun interesse a raccogliere la sfida: prende e sviluppa.',
    },
  }),
  o('d4 Nf6 c4 e6 g3', { label: 'Catalana', idea: 'Eccola. L\'alfiere è diretto in g2 e il Bianco punta a una lunga, silenziosa stretta sulle case bianche.' }),
  o('d4 Nf6 c4 e6 g3 d5', {
    idea: 'Rivendica il centro prima che l\'alfiere arrivi in g2. Un pedone in d5 è l\'unica cosa che blocca la grande diagonale.',
    hint: 'Metti un pedone sulla casa che l\'alfiere di g2 vorrebbe vedere vuota.',
    m: {
      'Bb4': 'Lo scacco del Bogo-Indiano è valido, ma il Bianco risponde Ad2 e hai impegnato un pezzo prima di sapere dove va il centro. Prima occupati della diagonale.',
      c5: 'Troppo presto. Dopo d4-d5 il centro si chiude alle condizioni del Bianco, l\'alfiere di g2 ottiene una diagonale libera gratis e tu non hai risolto niente.',
      b6: 'Sembra naturale, ma l\'alfiere in b7 si troverà davanti quello bianco in g2 senza niente in mezzo. Blocca prima la diagonale con un pedone.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2', { label: 'Linea principale', idea: 'L\'alfiere catalano prende posto. Ogni casa bianca da d5 ad a8 è sotto tiro.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4', {
    idea: 'La Catalana Aperta. Prendere il pedone elimina la coppia c4/d4 e, soprattutto, costringe il Bianco a spendere mosse per recuperarlo invece che per costruire.',
    hint: 'Il Bianco ha lasciato un pedone in presa sull\'ala di donna. Prenderlo qui non è ingordigia: gli costa tempo.',
    m: {
      Be7: 'Questa è la Catalana Chiusa, che è valida ed è disponibile come l\'altra metà di questa difesa. Porta a una partita molto più lenta in cui stai fermo ad aspettare.',
      c6: 'Un\'altra mossa solida che punta alla struttura della Catalana Chiusa. Questa metà del repertorio è quella che prende il pedone.',
      c5: 'Sciogliere il centro mentre il Bianco è a una mossa dall\'arrocco. Dopo cxd5 exd5 dxc5 ti resta un pedone isolato con l\'alfiere bianco puntato addosso.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e per ora ignora il pedone, fidandosi del fatto che non si può tenere per sempre.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7', {
    idea: 'Sviluppa e preparati ad arroccare. Il pedone in c4 non scappa, ed è il re al sicuro a rendere possibile tenerlo.',
    hint: 'Non provare ancora a difendere il pedone in più. Sviluppa il pezzo che ti permette di arroccare alla mossa dopo.',
    m: {
      b5: 'Molto troppo presto. Con il re al centro, a2-a4 colpisce subito la catena e dopo axb5 la colonna a aperta vale più del pedone.',
      c5: 'Aprire il centro con il re ancora in e8 e il Bianco già sviluppato sull\'ala di re è esattamente quello che il giocatore di Catalana vuole.',
      a6: 'L\'idea giusta una mossa troppo presto. Arrocca prima: ogni trucco del Bianco contro ...b5 dipende dal tuo re in mezzo.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O', { label: 'Linea principale', idea: 'Il Bianco arrocca e prepara di raccogliere il pedone c4 con Dc2 o Da4.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O', {
    idea: 'Re al sicuro. Adesso tutte le idee con ...a6 e ...b5 funzionano davvero, perché non c\'è più nessuno scacco sulla diagonale a4-e8 di cui preoccuparsi.',
    hint: 'La mossa più sicura sulla scacchiera, e quella che rende legale il tuo piano sull\'ala di donna.',
    m: {
      b5: 'Ancora prematura. a2-a4 c6, axb5 cxb5 e con il re in e8 la pressione sulla colonna a e il salto Ce5 arrivano con tempo.',
      Nc6: 'Il cavallo non ha futuro in c6 qui: il pedone d4 è difeso solidamente e il cavallo blocca la tua stessa rottura ...c5.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Qc2', { label: 'Linea principale', idea: 'La ripresa più comune: la donna va in c2, con un occhio al pedone c4 e alla grande diagonale dietro di esso.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Qc2 a6', {
    idea: 'Prepara ...b5. Se il Bianco prende in c4 rispondi ...b5 con tempo, e se non prende, tieni semplicemente il pedone.',
    hint: 'Sostieni l\'avanzata di pedone che difenderà c4 di lato.',
    m: {
      b5: 'Una mossa troppo presto: a2-a4 arriva con la donna già in c2, e dopo axb5 axb5 Txa8 il cambio in a8 ti costa comunque il pedone.',
      c5: 'Giocabile ma precoce. In questo momento il pedone in più in c4 vale più della rottura; gioca ...c5 quando l\'ala di donna è sistemata.',
      Nc6: 'Blocca proprio la rottura di pedone a cui punti e lascia il cavallo a colpire un d4 ben difeso.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Qc2 a6 Qxc4', { label: 'Linea principale', idea: 'Il Bianco recupera finalmente il pedone: quattro mosse dopo che è stato preso, ed è esattamente il punto.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Qc2 a6 Qxc4 b5', {
    idea: 'Con tempo sulla donna. I pedoni sull\'ala di donna tolgono c4 e b5 ai pezzi bianchi e l\'alfiere sta per arrivare in b7.',
    hint: 'Colpisci la donna e guadagna spazio nello stesso momento.',
    m: {
      Bd7: 'Passiva. L\'alfiere appartiene a b7, dove risponde a quello bianco in g2, e la mossa che ce lo porta caccia anche la donna.',
      c5: 'Ragionevole, ma lascia la donna in c4, dove sta bene. Cacciala prima e prenditi lo spazio gratis.',
    },
    end: {
      name: 'Catalana Aperta, linea principale con 7...a6',
      plans: [
        'Gioca ...Ab7 alla mossa dopo. Quell\'alfiere è tutto il senso della linea: risponde finalmente a quello bianco in g2 e difende la grande diagonale su cui hai passato l\'apertura a preoccuparti.',
        'Prosegui con ...Cbd7 e poi ...c5. Quando ...c5 passa, il centro si apre alle tue condizioni e l\'alfiere catalano non ha più niente da mordere.',
        'I pedoni in a6 e b5 sono spazio, non debolezza. Tolgono c4 e b5 ai cavalli bianchi e più avanti danno la casa c4 ai tuoi pezzi.',
        'Se il Bianco gioca a2-a4, rispondi ...b4 e non ...bxa4. Tenere i pedoni uniti tiene chiusa l\'ala di donna, e questo ti conviene.',
        'Occhio a Ce5 o Cg5 che colpiscono f7 quando la donna lascia d8. Di solito basta tenere una torre in f8 e il cavallo in f6.',
      ],
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Ne5', { label: 'Assalto immediato a c4', idea: 'Il tentativo più tagliente: il cavallo salta in e5 per prendere in c4 alla mossa dopo e comprimerti.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Ne5 Nc6', {
    idea: 'Contesta subito il cavallo. Se il Bianco prende in c6 il pedone di b riprende e il tuo alfiere in b7 ottiene una diagonale mostruosa; se non prende, il cavallo deve muoversi di nuovo.',
    hint: 'L\'intruso in e5 non è difeso da niente. Attaccalo con una mossa di sviluppo.',
    m: {
      c5: 'Aprire linee mentre un cavallo sta in e5 e i due alfieri bianchi guardano il tuo re è chiedere guai.',
      Nfd7: 'Passiva e ti disfa lo sviluppo. Contestare il cavallo di petto guadagna tempo; ritirarsi regala l\'iniziativa.',
      b5: 'Il pedone in c4 non è quello che conta qui. Un cavallo in e5 sostenuto dall\'alfiere di g2 è un pezzo vero, e va affrontato per primo.',
    },
    end: {
      name: 'Catalana Aperta, 7.Ce5',
      plans: [
        'Dopo Axc6 bxc6 la tua struttura sembra rotta, ma la coppia degli alfieri e la colonna b semiaperta valgono più dei pedoni doppiati.',
        'Se il Bianco riprende il pedone in c6, rispondi ...De8 o ...Dd6 per colpire il cavallo e districarti.',
        'Le case scure sono tue: punta l\'alfiere su d4 con ...Af6 o ...Ad6 e pensa a ...Tb8 sulla colonna aperta.',
        'Non spaventarti per il conto dei pedoni. In questa linea il materiale è pari e la coppia degli alfieri è la risorsa a lungo termine.',
      ],
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 Qa4', { label: 'Lo scacco prima dell\'arrocco', idea: 'Il Bianco si riprende subito il pedone, al prezzo di far uscire presto la donna.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 Qa4 Nbd7', {
    idea: 'Blocca lo scacco con il cavallo che era comunque diretto in d7. Non hai perso niente.',
    hint: 'Blocca lo scacco con un pezzo che sarebbe andato lì in ogni caso.',
    m: {
      Bd7: 'Blocca lo scacco, ma l\'alfiere in d7 sta male e ostruisce il cavallo. Usa il pezzo che voleva quella casa.',
      c6: 'Blocca, ma toglie c6 al tuo cavallo e lascia un buco permanente in d6 per i pezzi bianchi.',
      Qd7: 'Cambiare le donne per andare in un finale leggermente peggiore è esattamente quello che il giocatore di Catalana accetta volentieri, e la donna sta bene in d8 per ora.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 Qa4 Nbd7 Qxc4', { label: 'Linea principale', idea: 'Il pedone torna indietro, ma il Bianco ha speso due mosse di donna per riprenderlo.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 Qa4 Nbd7 Qxc4 a6', {
    idea: 'Lo stesso piano della linea principale: prepara ...b5, prendi spazio sull\'ala di donna e porta l\'alfiere in b7.',
    hint: 'Prepara l\'avanzata di pedone che guadagna tempo sulla donna e spazio sull\'ala.',
    m: {
      b5: 'La donna in c4 è attaccata, ma dopo Db3 o Dc2 hai lasciato un buco in c6 con l\'alfiere bianco già puntato lì.',
      c5: 'Ragionevole ma affrettata: con il re ancora in e8 in questo ordine di mosse, aprire il centro favorisce chi è più sviluppato.',
    },
    end: {
      name: 'Catalana Aperta, 6.Da4+ con ...Ae7',
      plans: [
        'Arrocca alla mossa dopo, poi segui la ricetta abituale: ...b5, ...Ab7 e ...c5.',
        'La donna bianca si è mossa tre volte per guadagnare un pedone. Usa quel tempo per completare lo sviluppo prima di aprire qualsiasi cosa.',
        'Il cavallo in d7 sta bene qui: sostiene ...c5 e copre e5, così il Bianco non ha avamposti.',
        'Se il Bianco gioca Dc2 ed e2-e4, rispondi subito ...c5 invece di restare fermo.',
      ],
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4', { label: 'Recupero immediato del pedone', idea: 'L\'approccio diretto da circolo: scacco, riprendi il pedone e avanti.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4 Nbd7', {
    idea: 'Blocca con il cavallo. Ci andava comunque, quindi lo scacco è costato un tempo al Bianco e non ha guadagnato niente.',
    hint: 'Blocca lo scacco con il pezzo che voleva già quella casa.',
    m: {
      Bd7: 'L\'alfiere blocca lo scacco ma sta sulla strada del cavallo e in d7 non fa niente. Tienilo per b7.',
      c6: 'Solida ma toglie la casa naturale al tuo cavallo e dà al Bianco mano libera sulle case scure.',
      Qd7: 'Offrire il cambio delle donne conviene al Bianco, che sarebbe felicissimo di un finale tranquillo con l\'alfiere migliore.',
    },
  }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4 Nbd7 Qxc4', { label: 'Linea principale', idea: 'Il pedone è tornato, ma la donna bianca ha fatto tre mosse e l\'ala di re è ancora da sviluppare.' }),
  o('d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4 Nbd7 Qxc4 a6', {
    idea: 'Prepara ...b5 con tempo sulla donna, poi ...Ab7 e ...c5. Il piano non cambia mai.',
    hint: 'Imposta l\'avanzata sull\'ala di donna che guadagna tempo sulla donna bianca.',
    m: {
      b5: 'Immediata, ma dopo che la donna si sposta ti resta un buco permanente in c6 con un alfiere bianco che lo guarda. Preparala per bene.',
      e5: 'Allettante, ma dxe5 Cxe5 va a sbattere contro Db3 o Dc2 con tempo e il tuo cavallo non ha una buona casa.',
    },
    end: {
      name: 'Catalana Aperta, 5.Da4+',
      plans: [
        'Prosegui con ...b5, ...Ab7, ...Ae7 e arrocco. Il tempo in più che il Bianco ha speso con la donna è esattamente quello che usi per completare lo sviluppo.',
        'La rottura ...c5 è l\'obiettivo. Quando passa, gli alfieri campochiari si cambiano o si neutralizzano e la posizione è pari.',
        'Non lasciare che la donna si sistemi in c4 o c2 indisturbata: ...b5 e più avanti ...Cb6 o ...Tc8 continuano a colpirla.',
        'Con il cavallo bianco ancora in b1 sei avanti nello sviluppo dell\'ala di re. Arrocca e pensa a ...e5 come seconda rottura.',
      ],
    },
  }),

  /* -------------------------------------------------------------- Chiusa */
  c('d4', { label: 'Pedone di donna', idea: 'L\'inizio tranquillo. È tutto ancora aperto.' }),
  c('d4 Nf6', {
    idea: 'Impedisci e2-e4 e tieni aperta ogni opzione. Il cavallo in f6 è utile in tutte le linee che seguono.',
    hint: 'Sviluppa un cavallo sulla casa che toglie e4 al Bianco.',
    m: {
      d5: 'Valida, ma porta verso un Gambetto di Donna invece che verso una Catalana. Questa difesa esiste per rispondere ai sistemi con g3, quindi lascia che il Bianco mostri prima il fianchetto.',
      e6: 'Giocabile ma impegna il pedone e prima di sapere se il Bianco punta a una Catalana o a e4, e chiude dentro l\'alfiere di c8 senza motivo.',
    },
  }),
  c('d4 Nf6 c4', { label: 'Linea principale', idea: 'Il Bianco prende il centro e tiene la Catalana come opzione.' }),
  c('d4 Nf6 c4 e6', {
    idea: 'Prepara ...d5 e apre l\'alfiere di f8. È l\'ordine di mosse che invita la Catalana, che è quello che vogliamo.',
    hint: 'Sostieni la futura ...d5 con una piccola mossa di pedone.',
    m: {
      g6: 'L\'Est-Indiana è una buona scelta, ma schiva del tutto la questione Catalana invece di risponderle.',
      c5: 'La Benoni. È un\'apertura vera, ma dopo d4-d5 sei in una partita completamente diversa con molta più teoria da sapere.',
    },
  }),
  c('d4 Nf6 c4 e6 g3', { label: 'Catalana', idea: 'La mossa della Catalana. L\'alfiere va in g2 e comincia la stretta.' }),
  c('d4 Nf6 c4 e6 g3 d5', {
    idea: 'Occupa il centro e blocca la diagonale prima ancora che l\'alfiere arrivi. In questa metà del repertorio il pedone resterà lì.',
    hint: 'Metti un pedone sull\'unica casa che spegne l\'alfiere di g2.',
    m: {
      Bb4: 'Lo scacco del Bogo-Indiano è valido ma impegna presto un pezzo e lascia irrisolta la questione delle case bianche. Costruisci prima il muro.',
      b6: 'Mettere l\'alfiere in b7 senza un pedone in d5 significa guardare dritto nell\'alfiere bianco con una diagonale vuota, e il Bianco è quello con il tempo in più.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2', { label: 'Linea principale', idea: 'L\'alfiere catalano è a casa. Il tuo pedone in d5 è l\'unica cosa che gli sta davanti, quindi non si muove.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7', {
    idea: 'Sviluppo semplice. L\'alfiere fa il suo lavoro da e7, difende il cavallo e libera la strada per arroccare.',
    hint: 'Sviluppa l\'ultimo pezzo leggero fra il tuo re e la torre.',
    m: {
      dxc4: 'Questa è la Catalana Aperta, valida e disponibile come l\'altra metà di questa difesa. Questa metà tiene il pedone in d5.',
      c6: 'L\'idea giusta nell\'ordine sbagliato. Sviluppa e arrocca prima: una mossa di pedone che si può fare dopo non è mai urgente quanto una mossa di pezzo che va fatta comunque.',
      Bb4: 'Lo scacco non ottiene niente adesso che l\'alfiere è in g2: il Bianco blocca con Ad2 o Cc3 e tu devi muovere di nuovo l\'alfiere.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3', { label: 'Linea principale', idea: 'Il Bianco completa l\'ala di re e prepara l\'arrocco.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O', {
    idea: 'Metti il re al sicuro. Nella Catalana Chiusa tutto è più facile quando non devi più controllare i trucchi sulla colonna e o sulla diagonale a4-e8.',
    hint: 'La mossa più ovviamente utile della posizione.',
    m: {
      c6: 'Non è sbagliata, ma non c\'è ragione di rimandare l\'arrocco. Sistema prima il re e tieni la mossa di pedone in riserva.',
      Nbd7: 'Il cavallo appartiene a d7, ma il re appartiene fuori da e8 per primo. La disposizione dei pezzi può aspettare una mossa; la sicurezza del re no.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O', { label: 'Linea principale', idea: 'Tutti e due i re sono al sicuro e comincia la partita vera.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6', {
    idea: 'La chiave di volta. Il pedone in c6 rende d5 permanente, dà alla donna le case a5 e b6 e prepara sia ...b6 con ...Ab7 sia ...dxc4 con ...b5.',
    hint: 'Puntella il pedone centrale con l\'unica mossa di pedone che apre anche case alla tua donna.',
    m: {
      dxc4: 'Valida: traspone verso la Catalana Aperta. Questa metà del repertorio tiene invece il muro in d5.',
      Nbd7: 'Buona casa per il cavallo, ma è il pedone in c6 a tenere insieme tutta la struttura. Costruisci prima la base.',
      c5: 'Troppo presto. Dopo cxd5 exd5 dxc5 ti resta un pedone solitario in d5 con l\'alfiere bianco puntato addosso da g2.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 Qc2', { label: 'Linea principale', idea: 'La donna prende la colonna c e sostiene una futura spinta e2-e4.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 Qc2 Nbd7', {
    idea: 'La casa giusta: da d7 il cavallo sostiene sia ...c5 sia ...e5, e tiene libero il pedone di c.',
    hint: 'Sviluppa il cavallo di donna sulla casa che non blocca il tuo stesso pedone di c.',
    m: {
      Ne4: 'Il cavallo sembra attivo ma Cxe4 dxe4 lascia il tuo pedone centrale su una casa che l\'alfiere di g2 guarda già.',
      b6: 'L\'idea giusta ma nell\'ordine sbagliato: con la donna in c2 e l\'alfiere in g2, cxd5 exd5 lascia b7 scomodamente scoperto. Sviluppa prima il cavallo.',
      dxc4: 'Con la donna già in c2 stai semplicemente restituendo il pedone con tempo: Dxc4 arriva guadagnando una mossa.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 Qc2 Nbd7 Nbd2', { label: 'Linea principale', idea: 'Il Bianco tiene libera la colonna c per la donna e prepara b2-b3 e Ab2, oppure e2-e4.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 Qc2 Nbd7 Nbd2 b6', {
    idea: 'Adesso l\'alfiere può andare in b7 senza essere colpito da cxd5, e la rottura ...c5 è la prossima.',
    hint: 'Apri una diagonale al tuo ultimo pezzo non sviluppato.',
    m: {
      e5: 'Allettante, ma con il cavallo in d2 a sostenere il centro, dxe5 Cxe5 Cxe5 lascia il tuo pedone d5 in presa su una diagonale aperta.',
      c5: 'Idea giusta, momento sbagliato: il tuo alfiere campochiaro è ancora in c8 e dopo l\'apertura del centro non avrà niente da fare.',
    },
    end: {
      name: 'Catalana Chiusa, linea principale',
      plans: [
        'Gioca ...Ab7 e poi ...c5. È tutto il piano, ed è buono: quando ...c5 passa, il tuo alfiere in b7 e quello bianco in g2 si annullano a vicenda.',
        'Tieni il pedone in d5 finché è utile. È l\'unica cosa fra l\'alfiere bianco e la tua ala di donna, e cambiarlo senza motivo gli regala la diagonale.',
        'Se il Bianco gioca e2-e4, rispondi ...dxe4 e poi ...c5: quando il centro si apre i tuoi pezzi sono su buone case e il Bianco non ha più spazio in più.',
        'La torre appartiene a c8 o a e8 a seconda della rottura che scegli. Scegli prima la rottura, poi piazza la torre.',
        'Una piccola mossa utile è ...a5, che ferma b2-b4 e dà al cavallo di d7 la strada verso c5 passando per b6.',
      ],
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 b3', { label: 'Prepara Ab2', idea: 'Uno schema più lento: il Bianco fianchetta anche il secondo alfiere e gioca per una lunga partita posizionale.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 b3 b6', {
    idea: 'Fai da specchio al Bianco. Con b2-b3 giocata, cxd5 non morde più, quindi l\'alfiere può andare subito in b7.',
    hint: 'Il Bianco si è impegnato in uno schema lento. Copiane la parte utile.',
    m: {
      dxc4: 'Il pedone in b3 è la ragione per non farlo: bxc4 dà al Bianco un grande centro di pedoni e una colonna b aperta dritta sulla tua ala di donna.',
      Nbd7: 'Va bene ma è lenta. Con b2-b3 giocata, questo è il momento di far uscire l\'alfiere campochiaro prima che il Bianco abbia idee con Aa3 o Ab2.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 b3 b6 Bb2', { label: 'Linea principale', idea: 'Il secondo alfiere prende la grande diagonale e guarda la casa e5.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 b3 b6 Bb2 Bb7', {
    idea: 'Alfieri contro alfieri. La posizione è simmetrica e per il Nero completamente comoda.',
    hint: 'Rispondi al fianchetto con il tuo.',
    m: {
      Ba6: 'La casa a6 è per le posizioni in cui il pedone c4 è scoperto. Con b3 giocata, c4 è ben difeso e l\'alfiere morde soltanto il granito.',
      c5: 'Prematura: il tuo alfiere è ancora in c8, quindi aprire il centro aiuta solo chi ha già i pezzi fuori.',
    },
    end: {
      name: 'Catalana Chiusa, doppio fianchetto',
      plans: [
        'Completa con ...Cbd7 e poi scegli fra ...c5 e ...Ce4 seguito da ...f5 in uno schema tipo Stonewall.',
        'Le posizioni simmetriche favoriscono chi ha un piano. Il tuo è ...c5 seguito dalla presa della colonna c con una torre.',
        'Attenzione a Ce5: è il senso di Ab2. Rispondi con ...Cxe5 dxe5 Cd7, che colpisce il pedone e libera la tua posizione.',
        'Se il Bianco gioca cxd5, riprendi con il pedone e (...exd5) per tenere il pedone in c6 e la posizione solida.',
      ],
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O cxd5', { label: 'Catalana di cambio', idea: 'Il Bianco scioglie subito la tensione e gioca per una lenta stretta contro una struttura simmetrica.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O cxd5 exd5', {
    idea: 'Riprendi verso il centro. Adesso l\'alfiere di c8 ha finalmente una diagonale, che è proprio la cosa che la Catalana di solito ti nega.',
    hint: 'Riprendi con il pedone che apre una diagonale al tuo pezzo peggiore.',
    m: {
      Nxd5: 'Sembra naturale, ma regala al Bianco la spinta e2-e4 gratis e lascia l\'alfiere di g2 a guardare una diagonale vuota fino ad a8.',
      Qxd5: 'La donna è un bersaglio in d5: Cc3 arriva con tempo e il Bianco sviluppa mentre tu ti ritiri.',
    },
  }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O cxd5 exd5 Nc3', { label: 'Linea principale', idea: 'Il cavallo mette pressione su d5 e prepara l\'attacco di minoranza con b2-b4.' }),
  c('d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O cxd5 exd5 Nc3 c6', {
    idea: 'Rendi solido d5 prima di ogni altra cosa. Con c6 e d5 fissati, l\'unico piano vero del Bianco è una lenta avanzata sull\'ala di donna, e tu hai tutto il tempo di affrontarla.',
    hint: 'Sostieni il pedone che il cavallo bianco sta puntando.',
    m: {
      Nc6: 'Lascia d5 difeso una volta sola mentre il Bianco può accumularci sopra con Cc3, Db3 e Af4. Quel pedone ha bisogno di un pedone dietro.',
      Bf5: 'Buona casa per l\'alfiere, ma d5 viene prima: Db3 che colpisce b7 e d5 insieme è esattamente il trucco da evitare.',
    },
    end: {
      name: 'Catalana di cambio',
      plans: [
        'Fai uscire l\'alfiere campochiaro in f5 o g4 prima di giocare ...Cbd7: quell\'alfiere è il pezzo che la Catalana di solito intrappola, e qui hai l\'occasione di liberarlo.',
        'Rispondi a un attacco di minoranza (b4-b5) con ...a6 e pezzi sulla colonna c, non con altre mosse di pedone.',
        'La colonna e semiaperta è tua. Una torre in e8 e un cavallo diretto in e4 sono lo schema standard.',
        'Questa struttura è nello spirito una Carlsbad a colori invertiti: il Bianco preme sull\'ala di donna, tu premi al centro e sull\'ala di re.',
      ],
    },
  }),
)
