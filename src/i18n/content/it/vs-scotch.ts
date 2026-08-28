import { nodes, tree } from '../tree'

const s = tree('vs-scotch')

/** Contro la Partita Scozzese: schema classico con 4...Ac5 e ...Df6. */
export const vsScotchTrees = nodes(
  s('e4', { label: 'Pedone di re', idea: 'La mossa d\'apertura standard.' }),
  s('e4 e5', {
    idea: 'La risposta classica, e quella che permette la Scozzese.',
    hint: 'Rispondi al pedone di re con il tuo.',
    m: {
      c5: 'La Siciliana evita del tutto la Scozzese, ed è un\'ottima scelta, ma questa difesa serve a sapere cosa fare quando la Scozzese arriva.',
      e6: 'La Francese è solida e schiva le linee di Scozzese dopo 3.d4, ma non puoi imparare a rispondere a un\'apertura che non permetti mai.',
    },
  }),
  s('e4 e5 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e attacca e5.' }),
  s('e4 e5 Nf3 Nc6', {
    idea: 'Difendi il pedone con la mossa di sviluppo naturale.',
    hint: 'Difendi il pedone attaccato sviluppando un pezzo.',
    m: {
      Nf6: 'La Difesa Russa è del tutto solida, ma porta la partita da tutt\'altra parte invece di rispondere alla Scozzese.',
      d6: 'La Difesa Philidor è giocabile ma passiva: chiude dentro l\'alfiere di f8 e dà al Bianco mano libera al centro con d4.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4', { label: 'Partita Scozzese', idea: 'La Scozzese. Il Bianco apre subito il centro invece di costruire dietro di esso.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4', {
    idea: 'Prendi. Rifiutare lascia al Bianco un centro ideale e a te niente in cambio.',
    hint: 'Il pedone centrale è attaccato e difeso una volta. Prendilo.',
    m: {
      d6: 'Rifiutare consegna al Bianco il centro perfetto: dxe5 e tutto crolla, oppure d4-d5 e il tuo cavallo viene scacciato con tempo.',
      Nxd4: 'Cambia un cavallo sviluppato per un pedone, ma dopo Cxd4 exd4 Dxd4 la donna bianca è splendidamente centralizzata e tu hai perso mosse.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4', { label: 'Linea principale', idea: 'La Scozzese vera e propria. Il cavallo prende il centro e il Bianco punta a Cxc6 seguito da e4-e5.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5', {
    idea: 'La Scozzese Classica. L\'alfiere colpisce il cavallo in d4 e prende la diagonale verso f2 prima che il Bianco possa giocare Ae3 con comodo.',
    hint: 'Sviluppa un alfiere sulla diagonale che attacca il cavallo al centro.',
    m: {
      Nf6: 'La Variante Schmidt è del tutto sana ed è una linea principale, ma finisce nelle enormi linee teoriche di Mieses dopo Cxc6 bxc6 e5. Questo repertorio sceglie lo schema classico, più tranquillo.',
      Qh4: 'Cb5 arriva con la minaccia di Cxc7+ e la sortita di donna si ritorce contro: la donna diventa un bersaglio e il tuo re resta bloccato al centro.',
      Nxd4: 'Cambiare subito dà al Bianco la donna centralizzata dopo Dxd4 e consegna l\'iniziativa per niente.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3', { label: 'Linea principale', idea: 'Il Bianco difende il cavallo con una mossa di sviluppo e offre il cambio in d4.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6', {
    idea: 'La linea principale, e sembra più strana di quanto sia: la donna aggiunge un secondo attaccante su d4 e guarda f2, così il Bianco non può semplicemente sviluppare.',
    hint: 'Attacca una seconda volta il cavallo al centro con il pezzo che guarda anche f2.',
    m: {
      Bxd4: 'Cambiare in d4 dà al Bianco la coppia degli alfieri e un tempo gratis dopo Axd4, con partita facile e centro forte.',
      Nf6: 'Naturale, ma dopo Cxc6 bxc6 ed e4-e5 il cavallo viene scacciato e la tua struttura è rovinata. La mossa di donna impedisce tutto questo.',
      d6: 'Solida, ma lenta: permette al Bianco Cc3, Dd2 e O-O-O con una comoda partita d\'attacco mentre tu non hai creato nessuna minaccia.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3', { label: 'Linea principale', idea: 'Il Bianco puntella il cavallo e si prepara a sviluppare l\'ala di donna.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7', {
    idea: 'La casa giusta. Da e7 il cavallo sostiene la donna, tiene libera la casa f6 e punta a g6 o al ritorno in c6.',
    hint: 'Sviluppa l\'ultimo cavallo sulla casa che sostiene la donna invece di bloccarla.',
    m: {
      Nh6: 'Il cavallo sta male sul bordo e Axh6 ti distrugge la struttura dell\'ala di re per niente.',
      Bxd4: 'Sempre il cambio sbagliato: cxd4 dà al Bianco un ampio centro di pedoni e la coppia degli alfieri per niente.',
      d6: 'Giocabile, ma il cavallo ha una sola buona casa e conviene prendersela prima che il Bianco infili Ac4 e Dd2.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bc4', { label: 'Linea principale', idea: 'L\'alfiere punta f7 e aggiunge un difensore al centro.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bc4 Ne5', {
    idea: 'La manovra chiave. Il cavallo attacca l\'alfiere in c4, libera c6 per il pedone c e punta a g6 o alla stessa casa c4.',
    hint: 'Uno dei tuoi cavalli può saltare su una casa centrale dove attacca l\'alfiere appena mosso.',
    m: {
      'O-O': 'Sicura ma lenta. Il salto di cavallo guadagna un tempo sull\'alfiere ed è la mossa che dà senso a tutto lo schema.',
      Nxd4: 'Cambia, ma dopo cxd4 il Bianco ha un grande centro e la coppia degli alfieri, cioè esattamente quello che stavi evitando.',
      d6: 'Ragionevole, ma permette al Bianco di arroccare e consolidare. Gioca la mossa che lo costringe a reagire.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bc4 Ne5 Be2', { label: 'Linea principale', idea: 'L\'alfiere fa un passo indietro. Il Bianco è stato spinto in giro e il Nero è pienamente in parità.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bc4 Ne5 Be2 Qg6', {
    idea: 'La donna scivola di lato e colpisce e4 e g2 insieme. Il Bianco deve spendere un\'altra mossa in difesa e il Nero completa lo sviluppo con comodo.',
    hint: 'Sposta la donna lungo la sesta traversa per attaccare due cose in una volta.',
    m: {
      d6: 'Solida, ma lo spostamento di donna è la mossa che tiene l\'iniziativa e impedisce al Bianco di arroccare tranquillamente.',
      Bxd4: 'Lo stesso cambio sbagliato, e adesso con la donna in f6 butta via anche la pressione costruita in cinque mosse.',
      'O-O': 'Sicura, ma lo spostamento di donna è quello che tiene occupato il Bianco. Arroccare tranquillamente gli permette di consolidare con O-O e f2-f4 che colpisce il tuo cavallo.',
    },
    end: {
      name: 'Scozzese, linea principale classica',
      plans: [
        'Prosegui con ...d6 e ...O-O, oppure arrocca lungo giocando prima ...d5 se il Bianco impegna il re sull\'ala di re.',
        'Il cavallo in e5 è il tuo pezzo migliore. Guarda c4, d3 e g4, e il Bianco non ha nessun pedone che possa cacciarlo.',
        'Nella maggior parte delle linee gioca ...d6 e non ...d5: sostiene il cavallo e tiene solida la posizione.',
        'Se il Bianco arrocca corto, il piano ...h5-h4 con la donna in g6 è un tentativo d\'attacco vero.',
        'Qui è tutto pari, ma la posizione è molto più facile da giocare con il Nero: ogni pezzo bianco difende, ogni pezzo nero ha un compito.',
      ],
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6', { label: 'Cambio immediato', idea: 'Il Bianco scioglie subito la tensione e gioca per e4-e5 con vantaggio di spazio.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6', {
    idea: 'Prima di riprendere, colpisci f2 e il cavallo. Questo piccolo trucco di ordine di mosse è ciò che impedisce al Bianco di infilare e4-e5 gratis.',
    hint: 'Non riprendere ancora. C\'è una mossa che attacca due cose e costringe il Bianco a occuparsene prima.',
    m: {
      bxc6: 'Riprendere subito permette e4-e5 con tempo e ti lascia l\'ala di donna rovinata per niente.',
      dxc6: 'Giocabile, ma regala al Bianco il cambio gratis Dxd8+ e un finale leggermente migliore. La mossa di donna prima è molto più forte.',
      Bxf2: 'Vince un pedone, ma dopo Rxf2 il cavallo in c6 è ancora in presa e il Bianco esce nettamente in vantaggio.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6 Qd2', { label: 'Linea principale', idea: 'Il Bianco difende f2 indirettamente e si prepara a sviluppare l\'ala di donna.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6 Qd2 dxc6', {
    idea: 'Adesso riprendi, e con il pedone d: apre l\'alfiere di c8 e tiene sana la struttura di pedoni.',
    hint: 'Riprendi con il pedone che apre una diagonale al tuo alfiere non sviluppato.',
    m: {
      bxc6: 'Tiene una maggioranza di pedoni al centro ma lascia l\'alfiere di c8 chiuso dentro e i pedoni dell\'ala di donna doppiati.',
      Qxf2: 'Perde la donna dopo Dxf2 Axf2+ Rxf2: hai dato donna e alfiere per donna e pedone.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6 Qd2 dxc6 Nc3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e si prepara ad arroccare lungo.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6 Qd2 dxc6 Nc3 Be6', {
    idea: 'Sviluppa l\'alfiere su una buona casa e prepara ...O-O-O con una posizione del tutto sana.',
    hint: 'Sviluppa l\'alfiere che la ripresa ha appena liberato.',
    m: {
      Qxf2: 'Perde ancora la donna per Dxf2 Axf2+ Rxf2: il pedone f2 è difeso da quando la donna bianca è andata in d2.',
      Bd4: 'L\'alfiere in d4 è un bersaglio e dopo Ca4 o Ad3 devi rimuoverlo di nuovo senza aver ottenuto niente.',
    },
    end: {
      name: 'Scozzese, 5.Cxc6',
      plans: [
        'Arrocca lungo e gioca contro il pedone e4 con ...Tde8 e ...Dg6 oppure ...Ad5.',
        'La coppia degli alfieri è tua e la posizione è abbastanza simmetrica da renderla una risorsa a lungo termine senza niente da temere.',
        'I pedoni c doppiati controllano d5 e b5: case utili, non debolezze, finché non apri la colonna c al Bianco.',
        'Se anche il Bianco arrocca lungo la posizione è equilibrata e il piano è semplicemente migliorare i pezzi; se arrocca corto, metti in moto i pedoni dell\'ala di donna.',
      ],
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3', { label: 'Scacciare l\'alfiere', idea: 'Il Bianco si toglie dall\'inchiodatura e chiede all\'alfiere dove vuole andare a vivere.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb6', {
    idea: 'La ritirata naturale. L\'alfiere tiene la diagonale, non può essere colpito di nuovo e sostiene un futuro ...d6 e ...Cf6.',
    hint: 'Porta l\'alfiere attaccato su una casa dove nessun pedone potrà mai cacciarlo.',
    m: {
      Be7: 'Passiva: tutto il senso di mettere l\'alfiere in c5 era la diagonale a7-g1, e questa mossa la abbandona.',
      Bd6: 'Blocca il tuo pedone d, che ti serve per ...d6 e ...d5. L\'alfiere appartiene a b6.',
      Bxf2: 'Vince un pedone ma Rxf2 lascia al Bianco la coppia degli alfieri, un pezzo in più nell\'attacco e il tuo re ancora in e8.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb6 Nc3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e prepara Ae3 o Ag5.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb6 Nc3 Nf6', {
    idea: 'Con il cavallo via da d4 non c\'è nessun trucco Cxc6, quindi la casa naturale va benissimo e colpisce e4.',
    hint: 'Sviluppa l\'ultimo cavallo: con il cavallo bianco in b3, la solita obiezione non vale più.',
    m: {
      Qf6: 'La sortita di donna è forte solo quando colpisce un cavallo in d4. Qui blocca soltanto la casa naturale del tuo cavallo.',
      d6: 'Va bene ma è lenta. Sviluppa il cavallo mentre colpisce e4 e il Bianco deve reagire.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb6 Nc3 Nf6 Qe2', { label: 'Linea principale', idea: 'Il Bianco difende e4 e si prepara ad arroccare lungo.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb6 Nc3 Nf6 Qe2 d6', {
    idea: 'Consolida e apri l\'alfiere campochiaro. Il Nero ha una comoda posizione di Scozzese senza nessuna debolezza.',
    hint: 'Apri la diagonale al tuo ultimo pezzo leggero e prendi il controllo della casa e5.',
    m: {
      Nxe4: 'Perde un pezzo: dopo Cxe4 il cavallo viene semplicemente preso e non c\'è nessun seguito.',
      'O-O': 'Giocabile, ma con il Bianco che punta a O-O-O e a una tempesta di pedoni sull\'ala di re, conviene tenere il re flessibile per un\'altra mossa.',
    },
    end: {
      name: 'Scozzese, 5.Cb3',
      plans: [
        'Arrocca corto o lungo a seconda di dove va il re bianco: con l\'alfiere in b6 e un pedone in d6 sei pronto per entrambe.',
        'La diagonale a7-g1 è la tua risorsa a lungo termine. Tieni l\'alfiere in b6 e aggiungi ...Ae6 e ...Dd7.',
        'Il cavallo in b3 è fuori gioco. Gioca ...a5-a4 per guadagnare tempo su di lui e prendere spazio sull\'ala di donna.',
        'Se il Bianco gioca Ag5, rispondi con ...h6 e ...Ae6: non c\'è nessuna inchiodatura di cui preoccuparsi una volta che la tua donna ha una casa di fuga.',
      ],
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Bc4', { label: 'Gambetto Scozzese', idea: 'Il Bianco ignora il pedone in d4 e sviluppa con tempo, puntando f7.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5', {
    idea: 'Sviluppa con una minaccia tua: l\'alfiere colpisce f2 e per ora tiene il pedone in più.',
    hint: 'Rispondi all\'alfiere in c4 con il tuo alfiere sulla casa speculare.',
    m: {
      Nf6: 'L\'impostazione tipo Due Cavalli è sana ma invita le taglienti linee con e4-e5. La mossa di alfiere tiene tutto più semplice.',
      d6: 'Passiva: restituisce l\'iniziativa e il Bianco ottiene O-O e Cxd4 con una partita comoda e un tempo in più.',
      Bb4: 'Lo scacco non ottiene niente: c2-c3 copre con tempo e il Bianco costruisce il centro mentre il tuo alfiere si ritira.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 c3', { label: 'Linea principale', idea: 'Il Bianco offre un secondo pedone per aprire linee: è il Gambetto Göring dentro la Scozzese.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 c3 Nf6', {
    idea: 'Sviluppa e colpisci e4 invece di prendere altro materiale. Contro un gambetto, lo sviluppo batte l\'ingordigia.',
    hint: 'Sviluppa il cavallo e attacca il pedone al centro invece di prendere un secondo pedone.',
    m: {
      dxc3: 'Prendere il secondo pedone è giocabile ma apre esattamente le linee che il Bianco sta pagando, con il tuo re ancora al centro.',
      d6: 'Troppo lenta. cxd4 arriva con un grande centro e tu non hai creato nessuna minaccia.',
      d3: 'Chiude la posizione ma restituisce subito il pedone mentre il Bianco sviluppa con Axd3 e un grosso vantaggio.',
    },
  }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 c3 Nf6 e5', { label: 'Linea principale', idea: 'La spinta dall\'aria naturale, che colpisce il cavallo, ed è la mossa che finisce nella confutazione standard.' }),
  s('e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 c3 Nf6 e5 d5', {
    idea: 'Il contraccolpo. Il pedone colpisce l\'alfiere in c4 e allo stesso tempo para l\'attacco al cavallo.',
    hint: 'Una mossa di pedone che colpisce l\'alfiere e chiude la linea in una volta sola, non la ritirata del cavallo.',
    m: {
      Ng8: 'Ritirarsi disfa il tuo sviluppo e consegna al Bianco un centro libero e un enorme vantaggio di sviluppo.',
      Ne4: 'Il cavallo in e4 non ha sostegno e dopo De2 o Ad5 è semplicemente perso.',
      Ng4: 'Il cavallo è fuori gioco e dopo Axf7+ o h3 deve scappare di nuovo mentre il Bianco consolida il centro.',
    },
    end: {
      name: 'Gambetto Scozzese, 5.e5 d5',
      plans: [
        'Dopo exf6 dxc4 sei un pedone netto in più con la coppia degli alfieri e nessuna debolezza. Riprendi il pedone f6 con la donna o con il pedone g, come preferisci.',
        'Se il Bianco gioca Ab5 invece di prendere, rispondi ...Ce4 e prosegui con ...Ad7: adesso il cavallo in e4 è sostenuto.',
        'Arrocca appena puoi. Le posizioni di gambetto puniscono i re al centro e premiano quelli che se ne sono già andati.',
        'Quando la polvere si posa sei un pedone in più in una posizione aperta. Cambia i pezzi, non i pedoni.',
      ],
    },
  }),
)
