import { nodes, tree } from '../tree'

const d = tree('vs-danish-goring')

/** Contro i Gambetti Danese e Göring: rifiuto con ...d5. */
export const vsDanishGoringTrees = nodes(
  d('e4', { label: 'Pedone di re', idea: 'L\'inizio normale.' }),
  d('e4 e5', {
    idea: 'La risposta classica, che è anche la mossa che permette il Danese.',
    hint: 'Rispondi al pedone di re con il tuo.',
    m: {
      c5: 'La Siciliana evita tutto questo, ed è una scelta pratica ragionevole, ma allora il gambetto resta un mistero quando salta fuori.',
      d5: 'La Scandinava è giocabile ma dopo exd5 Dxd5 Cc3 il Bianco guadagna un tempo, e questa difesa riguarda le partite con 1...e5.',
    },
  }),
  d('e4 e5 d4', { label: 'Gambetto Danese', idea: 'La rottura centrale immediata. Il Bianco proseguirà con c3 per aprire linee invece di riprendere con un pezzo.' }),
  d('e4 e5 d4 exd4', {
    idea: 'Prendi. Non c\'è nessun motivo di rifiutare un pedone centrale, e tenere la tensione aiuta solo il Bianco.',
    hint: 'Prendi il pedone appena offerto al centro.',
    m: {
      d6: 'Rifiutare dà al Bianco il centro perfetto con pedoni in d4 ed e4 e a te niente in cambio.',
      Nc6: 'Giocabile ma d5 arriva con tempo, e adesso il cavallo viene scacciato mentre il Bianco tiene un grande centro.',
    },
  }),
  d('e4 e5 d4 exd4 c3', { label: 'Linea principale', idea: 'Il gambetto. Il Bianco offre un secondo pedone per riprendere in d4 con un pedone e aprire entrambe le diagonali agli alfieri.' }),
  d('e4 e5 d4 exd4 c3 d5', {
    idea: 'Rifiuta contrattaccando. Restituire subito il pedone apre la posizione mentre i pezzi bianchi sono ancora a casa, cioè l\'esatto contrario di quello che un gambetto vuole.',
    hint: 'Non prendere il secondo pedone. Colpisci invece al centro con il tuo pedone.',
    m: {
      dxc3: 'Accettare è giocabile ma è esattamente la partita che il Bianco ha preparato: due alfieri che spazzano la tua ala di re con il re ancora al centro. Questo repertorio rifiuta.',
      Nc6: 'Solida, ma cxd4 dà al Bianco il centro e una partita comoda senza più nessun gambetto da confutare. Il contrattacco è molto più forte.',
      d3: 'Chiude la posizione ma restituisce il pedone per niente, e dopo Axd3 il Bianco è sviluppato con un tempo in più e un grosso vantaggio.',
    },
  }),
  d('e4 e5 d4 exd4 c3 d5 exd5', { label: 'Linea principale', idea: 'Forzata in pratica: qualsiasi altra cosa lascia il Bianco un pedone sotto senza nessun compenso.' }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5', {
    idea: 'Qui la donna al centro è del tutto sicura: il pedone c del Bianco è in c3, quindi non c\'è nessun Cc3 che possa guadagnare un tempo.',
    hint: 'Riprendi con la donna, e nota che la casa che il Bianco userebbe normalmente per cacciarla è occupata da un pedone.',
    m: {
      Nf6: 'Sviluppa ma lascia il Bianco un pedone in più con cxd4 e un centro forte. Riprendi il pedone finché la donna non può essere molestata.',
      dxc3: 'Adesso sei di nuovo nel gambetto che il Bianco voleva, e con un tempo in più per lui perché il tuo pedone d è già stato cambiato.',
    },
  }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4', { label: 'Linea principale', idea: 'Il Bianco recupera il pedone. Il materiale è pari e non c\'è nessun attacco.' }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6', {
    idea: 'Sviluppa e colpisci d4. Il pedone è l\'unica risorsa centrale del Bianco e adesso è un bersaglio, non una punta di lancia.',
    hint: 'Sviluppa un cavallo e attacca il pedone con cui il Bianco ha appena ripreso.',
    m: {
      Qxd4: 'Dxd4 perde la donna dopo Cf3, oppure - non molto meglio - cambia semplicemente le donne in una posizione in cui il Bianco ha sviluppato con tempo. Il pedone d4 è difeso.',
      Nf6: 'Va bene, ma il cavallo di donna colpisce subito d4, ed è il pedone attorno a cui ruota tutta la posizione.',
      Bb4: 'Lo scacco arriverà, ma è molto più forte una volta che hai sviluppato: adesso Cc3 o Ad2 ti guadagnano soltanto un tempo.',
    },
  }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e difende il pedone in d4.' }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4', {
    idea: 'Inchioda il difensore. Il cavallo in f3 è quello che tiene insieme d4, e inchiodarlo rende il pedone davvero debole.',
    hint: 'Inchioda il pezzo che tiene in piedi l\'unico pedone centrale del Bianco.',
    m: {
      Nf6: 'Va bene ma è più lenta: è l\'inchiodatura a impedire al Bianco di arroccare tranquillamente e a tenere d4 sotto pressione.',
      Qxd4: 'Cxd4 vince la donna. Il cavallo in f3 difende il pedone.',
      Bb4: 'Lo scacco funziona meglio quando l\'inchiodatura è già in piedi. Adesso Cc3 copre e il Bianco sta bene.',
    },
  }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4 Be2', { label: 'Linea principale', idea: 'Il Bianco sviluppa e rompe l\'inchiodatura, ma in e2 l\'alfiere è passivo.' }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4 Be2 Bb4', {
    idea: 'Adesso lo scacco morde. Il Bianco deve coprirsi con Cc3, e il cambio in c3 gli lascia l\'ala di donna rovinata per sempre.',
    hint: 'Dai lo scacco che costringe il Bianco a coprirsi con il cavallo.',
    m: {
      Bxf3: 'Cambiare adesso permette ad Axf3 di arrivare con tempo sulla tua donna e al Bianco uno sviluppo comodo. Infila prima lo scacco.',
      'O-O-O': 'Arroccare lungo finisce sotto la pressione della colonna c con donna e torre bianche puntate sul tuo re, e il pedone d4 non scappa.',
      Nf6: 'Ragionevole, ma lo scacco è forzante e strappa la concessione che vuoi prima che il Bianco possa consolidare.',
    },
  }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4 Be2 Bb4 Nc3', { label: 'Linea principale', idea: 'L\'unica parata che sviluppa un pezzo, e che attacca anche la tua donna in d5.' }),
  d('e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4 Be2 Bb4 Nc3 Bxc3', {
    idea: 'Prendilo. Risolve l\'attacco alla tua donna e lascia al Bianco i pedoni c doppiati e un d4 debole per sempre.',
    hint: 'La tua donna è attaccata e lo è anche il cavallo che para lo scacco. Risolvi entrambi i problemi con una sola cattura.',
    m: {
      Qa5: 'Salva la donna, ma O-O e Ad2 lasciano il Bianco comodamente sviluppato mentre il tuo alfiere in b4 diventa un bersaglio.',
      Qd6: 'Ritirarsi perde l\'iniziativa: il Bianco arrocca e il pedone in d4 diventa di colpo una forza invece che una debolezza.',
      Bxf3: 'Axf3 colpisce la tua donna e dopo ...Dd6 Ce4 il Bianco ha tutto il gioco. Il pezzo da prendere è il cavallo in c3.',
    },
    end: {
      name: 'Gambetto Danese rifiutato, 3...d5',
      plans: [
        'Dopo bxc3 gioca subito ...Dc4: colpisce insieme l\'alfiere in e2 e il pedone in c3 e il Bianco non ha nessuna risposta comoda.',
        'I pedoni bianchi in c3 e d4 sono bersagli scoperti su una scacchiera aperta. Accumula su di loro con ...Cge7-f5 e una torre in d8.',
        'Cambia l\'alfiere campochiaro in f3 quando ti conviene: toglie il difensore di d4 e lascia il Bianco con le case bianche deboli.',
        'Arrocca corto e porta le torri sulle colonne c e d. Non c\'è nessun attacco da temere.',
        'Ecco com\'è fatto un gambetto confutato: materiale pari, struttura bianca peggiore e niente in cambio.',
      ],
    },
  }),
  d('e4 e5 d4 exd4 Qxd4', { label: 'Partita di Centro', idea: 'Il Bianco riprende con la donna invece di offrire il gambetto. Non è più un gambetto, ma la donna esce presto.' }),
  d('e4 e5 d4 exd4 Qxd4 Nc6', {
    idea: 'Sviluppa con tempo. La donna deve rimuoversi di nuovo, e ogni volta che lo fa tu guadagni tempo.',
    hint: 'Sviluppa un pezzo che attacca la donna al centro.',
    m: {
      Nf6: 'Sviluppa ma non colpisce la donna, e dopo Cc3 e Ag5 il Bianco ottiene una partita comoda.',
      d6: 'Lenta e passiva: permette al Bianco di sviluppare con Cc3, Ae3 e O-O-O a mano libera.',
    },
  }),
  d('e4 e5 d4 exd4 Qxd4 Nc6 Qe3', { label: 'Linea principale', idea: 'La casa standard: la donna si toglie di mezzo e sostiene i futuri Cc3, Ad2 e O-O-O.' }),
  d('e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6', {
    idea: 'Sviluppa e colpisci e4. Con la donna in e3 la colonna e è ingombra e lo sviluppo bianco è scomodo.',
    hint: 'Sviluppa l\'altro cavallo e attacca il pedone a cui adesso mancano difensori.',
    m: {
      Bb4: 'Giocabile, ma il cavallo prima è più preciso: attacca e4 e costringe il Bianco a spenderci una mossa.',
      d5: 'Troppo presto: exd5 Dxe3+ oppure Cb5 danno al Bianco attività vera con il tuo re ancora in mezzo.',
      Nd4: 'Il cavallo viene scacciato da c3 o Ad3 e hai perso tempo e la buona casa in c6.',
    },
  }),
  d('e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3', { label: 'Linea principale', idea: 'Il Bianco difende e4 e sviluppa, diretto a Ad2 e O-O-O.' }),
  d('e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4', {
    idea: 'Inchioda il cavallo e preparati ad arroccare. L\'alfiere guarda anche al cambio in c3, che lascerebbe rovinata la struttura dell\'ala di donna bianca.',
    hint: 'Inchioda il cavallo che difende il pedone centrale.',
    m: {
      Nxe4: 'Perde un pezzo: Cxe4 e il cavallo viene semplicemente preso, perché la donna in e3 copre la casa.',
      d5: 'Adesso exd5 Cb5 arriva con tempo su c7, e il tuo re è ancora in e8.',
      Be7: 'Passiva. È l\'inchiodatura su c3 a rendere comoda la posizione del Nero: senza, il Bianco arrocca lungo e attacca.',
    },
    end: {
      name: 'Partita di Centro',
      plans: [
        'Arrocca corto in fretta. Il Bianco va lungo, quindi i due re saranno su ali opposte e la velocità è tutto.',
        'Il piano è ...Te8, ...d6 e ...Ce5 oppure ...Ca5, colpendo la donna e la casa c4.',
        'Cambiare in c3 di solito è buono: rovina la copertura di pedoni proprio dalla parte verso cui va il re bianco.',
        'Metti in moto i pedoni dell\'ala di donna con ...a6 e ...b5 una volta che il Bianco impegna il re in c1.',
      ],
    },
  }),
  d('e4 e5 Nf3', { label: 'Ordine di mosse del Göring', idea: 'Il Bianco sviluppa prima e offre il gambetto una mossa dopo. È la stessa idea raggiunta attraverso un ordine di mosse dall\'aria normale, da Italiana o da Scozzese.' }),
  d('e4 e5 Nf3 Nc6', {
    idea: 'Sviluppa e difendi e5, esattamente come faresti contro qualsiasi altra cosa.',
    hint: 'Difendi il pedone attaccato sviluppando un pezzo.',
    m: {
      d6: 'La Difesa Philidor è giocabile ma passiva, e ti porta del tutto fuori da questa difesa.',
      Nf6: 'La Difesa Russa è sana ma schiva del tutto la questione del gambetto invece di rispondere.',
    },
  }),
  d('e4 e5 Nf3 Nc6 d4', { label: 'Linea principale', idea: 'La rottura centrale, una mossa più tardi rispetto al Danese.' }),
  d('e4 e5 Nf3 Nc6 d4 exd4', {
    idea: 'Prendi. Rifiutare consegna al Bianco il centro perfetto.',
    hint: 'Prendi il pedone centrale.',
    m: {
      d6: 'Rifiutare dà al Bianco un grande centro con dxe5 o d5 in arrivo, e a te nessun compenso.',
      Nxd4: 'Cxd4 exd4 Dxd4 lascia la donna bianca splendidamente centralizzata e te un tempo indietro.',
    },
  }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3', { label: 'Gambetto Göring', idea: 'Arriva il gambetto. Stessa idea del Danese: aprire linee agli alfieri.' }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5', {
    idea: 'La solita risposta. Restituisci subito il pedone e apri la posizione prima che il Bianco sia sviluppato.',
    hint: 'La stessa ricetta del Danese: colpisci al centro invece di prendere un secondo pedone.',
    m: {
      dxc3: 'Accettare porta a posizioni d\'attacco taglienti che il Bianco ha preparato e tu no. Il contrattacco è molto più affidabile.',
      Nf6: 'Giocabile, ma cxd4 dà al Bianco il centro e uno sviluppo facile mentre tu non hai contestato niente.',
      d3: 'Restituisce il pedone per niente e Axd3 lascia il Bianco un tempo pieno avanti con un vantaggio di sviluppo.',
    },
  }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5', { label: 'Linea principale', idea: 'Forzata: qualsiasi altra cosa lascia il Bianco semplicemente peggio.' }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5', {
    idea: 'La donna in d5 è al sicuro perché il pedone c è in c3 e non può essere sostituito da un cavallo.',
    hint: 'Riprendi con la donna: la solita mossa di tempo Cc3 non è disponibile.',
    m: {
      Nf6: 'Lascia il Bianco un pedone in più dopo cxd4 con un centro forte. Riprendi il pedone finché la donna è al sicuro.',
      dxc3: 'Di nuovo dentro il gambetto, e adesso con un tempo perso. Tutto il punto era rifiutare.',
    },
  }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4', { label: 'Linea principale', idea: 'Il Bianco recupera il pedone con una posizione simmetrica e un pedone d leggermente allentato.' }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Bg4', {
    idea: 'Inchioda il cavallo che tiene d4. Con la donna già sviluppata e il cavallo già in c6, questo è il passo naturale successivo.',
    hint: 'Inchioda il difensore dell\'unico pedone centrale del Bianco.',
    m: {
      Qxd4: 'Cxd4 o Dxd4 vincono materiale: il pedone è difeso dal cavallo in f3.',
      Nf6: 'Va bene, ma l\'inchiodatura è più impegnativa e impedisce al Bianco di arroccare tranquillamente.',
    },
  }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Bg4 Be2', { label: 'Linea principale', idea: 'Il Bianco sviluppa e si prepara a rompere l\'inchiodatura.' }),
  d('e4 e5 Nf3 Nc6 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Bg4 Be2 Bb4', {
    idea: 'La stessa idea del Danese: lo scacco costringe Cc3 e poi ...Axc3+ rovina l\'ala di donna bianca.',
    hint: 'Dai lo scacco che costringe il cavallo a coprire.',
    m: {
      Bxf3: 'Cambiare per primo permette ad Axf3 di arrivare con tempo sulla tua donna. Infila lo scacco.',
      'O-O-O': 'Arroccare dentro la colonna c aperta con donna e torre bianche puntate da quella parte è cercarsi guai.',
    },
    end: {
      name: 'Gambetto Göring rifiutato',
      plans: [
        'Dopo Cc3, prendi in c3 e prosegui con ...Dc4 colpendo l\'alfiere in e2 e il pedone in c3: esattamente la stessa ricetta del Danese.',
        'Questa è una trasposizione diretta nelle linee del Danese. Se conosci una, conosci l\'altra.',
        'Il pedone isolato in d4 è il bersaglio. Torri in d8 e c8, cavalli verso f5 o b6, e accumula.',
        'Arrocca corto, tieni la posizione semplice e lascia che sia il Bianco a spiegare cosa ha comprato il gambetto.',
      ],
    },
  }),
)
