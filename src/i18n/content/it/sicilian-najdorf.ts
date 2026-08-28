import { nodes, tree } from '../tree'

const n = tree('sicilian-najdorf')

/** Difesa Siciliana, Variante Najdorf. */
export const najdorfTree = nodes(
  n('e4', { label: 'Apertura di pedone di re', idea: 'Il Bianco prende il centro.' }),
  n('e4 c5', {
    idea: 'La Siciliana. Il Nero rifiuta la simmetria di ...e5 e lotta per il centro di lato, puntando a una partita sbilanciata.',
    hint: 'Affronta il pedone di re in modo asimmetrico, con un pedone laterale che colpisce d4.',
    m: {
      e5: 'Mossa perfettamente buona, ma quella è la partita aperta, non la Siciliana. Questo repertorio lotta in modo asimmetrico.',
      e6: 'Quella è la Difesa Francese. Anch\'essa valida, ma è un repertorio diverso.',
    },
  }),
  n('e4 c5 Nf3', { label: 'Siciliana Aperta', idea: 'Il Bianco sviluppa e prepara d4.' }),
  n('e4 c5 Nf3 d6', {
    idea: 'L\'ordine di mosse della Najdorf. Il pedone copre e5, tiene libero l\'alfiere di c8 e prepara ...Cf6 senza permettere e4-e5.',
    hint: 'Prepara ...Cf6 coprendo prima la casa e5.',
    m: {
      Nf6: 'Il Bianco gioca semplicemente e5 e il cavallo deve muoversi di nuovo mentre il Bianco guadagna tempo e spazio.',
      Nc6: 'Buona mossa, ma porta alla Sveshnikov, alla Classica o al Drago Accelerato invece che alla Najdorf.',
      e6: 'Giocabile, e può trasporre, ma impegna presto il pedone e chiude dentro l\'alfiere di c8.',
    },
  }),
  n('e4 c5 Nf3 d6 d4', { label: 'Linea principale', idea: 'Il Bianco apre il centro.' }),
  n('e4 c5 Nf3 d6 d4 cxd4', {
    idea: 'Prendi. È il cambio su cui si regge tutta la Siciliana: un pedone di c per un pedone di d, e una colonna semiaperta che ti serve per il resto della partita.',
    hint: 'Fai il cambio attorno a cui è costruita tutta l\'apertura.',
    m: {
      Nf6: 'Il Bianco gioca dxc5 oppure e5 e stai semplicemente peggio. Prendi prima in d4.',
      e5: 'Questa blocca la posizione e lascia un buco in d5 mentre i tuoi pezzi sono ancora a casa.',
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4', { label: 'Linea principale', idea: 'Il Bianco riprende con il cavallo e si arriva alla Siciliana Aperta.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6', {
    idea: 'Sviluppa con tempo: il cavallo attacca e4 e costringe il Bianco a difenderlo.',
    hint: 'Sviluppa un pezzo in modo che attacchi il pedone e.',
    m: {
      a6: 'L\'idea giusta ma nell\'ordine sbagliato. Gioca prima ...Cf6, così il Bianco deve difendere e4 e non può prendersi il centro gratis.',
      Nc6: 'Giocabile, ma porta alla Siciliana Classica. La Najdorf sviluppa prima il cavallo di re.',
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3', { label: 'Linea principale', idea: 'Il Bianco difende e4 con la mossa di sviluppo naturale.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6', {
    idea: 'La mossa della Najdorf. Sembra lenta, ma toglie b5 ai pezzi bianchi per sempre e prepara ...e5 oppure ...b5.',
    hint: 'Gioca la mossa di pedone tranquilla che toglie definitivamente al Bianco la casa b5.',
    m: {
      e5: 'Troppo presto. Senza ...a6 il Bianco gioca Ab5+ e sei già in difficoltà.',
      g6: 'Quello è il Drago, un\'ottima apertura ma completamente diversa.',
      Nc6: 'Quella traspone nella Siciliana Classica. La Najdorf gioca prima ...a6.',
      e6: 'Quella è la Scheveningen, e permette il pericoloso Attacco Keres con g4.',
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3', { label: 'Attacco Inglese', idea: 'Il Bianco prepara f3, Dd2 e O-O-O con una tempesta di pedoni sull\'ala di re.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5', {
    idea: 'La risposta critica. Colpisce il cavallo e prende il centro prima che il Bianco riesca a organizzare l\'attacco.',
    hint: 'L\'alfiere in e3 non copre più il centro. Caccia il cavallo e prenditi lo spazio.',
    m: {
      e6: 'Solida e giocabile, ma invita l\'Attacco Inglese completo con f3, Dd2, O-O-O e g4.',
      Ng4: 'Il Bianco risponde Ag5 e dopo ...h6 Ah4 il cavallo in g4 è fuori posizione e tu hai perso tempo.',
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3', { label: 'Linea principale', idea: 'Il cavallo si ritira e tiene d\'occhio a5 e c5.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be7', {
    idea: 'Sviluppa e prepara l\'arrocco. L\'alfiere sta bene in e7, dove non blocca niente e copre d8.',
    hint: 'Sviluppa l\'ultimo pezzo dell\'ala di re così da poter arroccare.',
    m: {
      Be6: 'Una linea principale a pieno titolo, ma con il Bianco pronto a f3 e g4 il re va messo al sicuro per primo.',
      b5: 'Naturale, ma prematura: il Bianco gioca a4 e dopo ...b4 Cd5 la casa d5 diventa un problema serio.',
    },
    end: {
      name: 'Najdorf, Attacco Inglese linea principale',
      plans: [
        'Arrocca corto, poi gioca ...Ae6, ...Cbd7 e ...Dc7: ogni pezzo copre d5 o sostiene ...b5.',
        'La spinta ...b5-b4 caccia il cavallo di c3 e toglie al Bianco il controllo di d5: è la tua idea principale.',
        'Se il Bianco arrocca lungo e attacca con g4-g5, non difenderti: corri sull\'ala di donna. Chi arriva primo vince.',
        'La rottura ...d5 è la mossa liberatoria ideale; quando riesce a passare, di solito stai già meglio.',
        'Tieni l\'alfiere campochiaro: dopo ...Ae6 è il pezzo che contende d5 e non va cambiato a cuor leggero.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nf3', { label: 'Ritirata moderna', idea: 'Il cavallo va in f3, dove colpisce e5 e tiene la posizione più flessibile.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nf3 Be7', {
    idea: 'Sviluppa e arrocca; il pedone in e5 è difeso a sufficienza.',
    hint: 'Sviluppa l\'alfiere e preparati ad arroccare.',
    end: {
      name: 'Najdorf, 7.Cf3',
      plans: [
        'Arrocca corto, poi ...Dc7, ...Ae6 e ...Cbd7 con il solito schema.',
        'L\'avanzata ...b5 e ...b4 resta la fonte principale di controgioco.',
        'Tieni aperta l\'opzione ...d5: con il cavallo in f3 invece che in b3 la rottura arriva più facilmente.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2', { label: 'Classica / Opocensky', idea: 'Uno schema tranquillo e solido: il Bianco arrocca corto e gioca per un piccolo vantaggio.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5', {
    idea: 'Prenditi il centro con tempo. Contro il modesto Ae2 non c\'è nessuna ragione di essere timidi.',
    hint: 'Il Bianco ha sviluppato in modo tranquillo. Colpisci il cavallo e prendi il centro.',
    m: {
      e6: 'Perfettamente valida, ma dà al Bianco la comoda Scheveningen con Ae2, mentre ...e5 pone subito una domanda.',
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3', { label: 'Linea principale', idea: 'Il cavallo si ritira in b3.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7', {
    idea: 'Sviluppa e arrocca; seguono ...O-O, ...Ae6 e ...Cbd7.',
    hint: 'Sviluppa l\'ultimo pezzo dell\'ala di re.',
    end: {
      name: 'Najdorf, Variante Classica',
      plans: [
        'Arrocca corto, poi ...Ae6, ...Cbd7, ...Dc7 e ...Tfc8 o ...Tfd8.',
        'Il percorso ...Cb6-c4 oppure ...Cf6-d7-c5 porta un cavallo su una casa forte.',
        'La casa d5 è l\'obiettivo del Bianco: contendila con i pezzi e non permettere che ci si installi un cavallo intoccabile.',
        'Sull\'ala di donna, ...b5-b4 guadagna spazio e caccia il cavallo di c3.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5', { label: 'Linea principale (6.Ag5)', idea: 'Il tentativo classico più tagliente: il Bianco inchioda il cavallo e prepara f4, Df3 e O-O-O.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6', {
    idea: 'Con l\'alfiere in g5 che inchioda il cavallo di f6, ...e5 sarebbe un errore: il pedone e6 è la mossa che tiene tutto insieme.',
    hint: 'Il cavallo in f6 è inchiodato. Non indebolire d5: scegli la mossa di pedone modesta.',
    m: {
      e5: 'Errore grave qui: con il cavallo inchiodato dall\'alfiere in g5, la casa d5 diventa un buco che non puoi difendere.',
      h6: 'Invita Axf6, e dopo ...gxf6 o ...Dxf6 la tua struttura o la tua posizione peggiorano senza compenso.',
    },
    end: {
      name: 'Najdorf, 6.Ag5 linea principale',
      plans: [
        'I seguiti principali sono 7.f4 Ae7 (oppure il tagliente pedone avvelenato con ...Db6) e 7.f4 Cbd7.',
        'Il controgioco viene da ...b5, ...Ab7 e dalla pressione sulla colonna c contro c3 e c2.',
        'La rottura ...d5 è la mossa liberatoria: quando passa, di solito la posizione si equilibra o meglio.',
        'Se il Bianco arrocca lungo, corri sull\'ala di donna con ...b5, ...b4 e ...a5 e non spendere mosse a difendere.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bc4', { label: 'Attacco Fischer-Sozin', idea: 'L\'alfiere punta f7 e la diagonale a2-g8.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bc4 e6', {
    idea: 'La risposta standard: il pedone smorza la diagonale dell\'alfiere e prepara ...b5 con tempo.',
    hint: 'Blocca la diagonale che l\'alfiere ha appena preso.',
    m: {
      e5: 'Lascia d5 debole mentre l\'alfiere in c4 guarda già quella casa: la combinazione peggiore possibile.',
      b5: 'L\'idea giusta una mossa troppo presto: il Bianco ha Ad5 oppure Axb5 con complicazioni a suo favore.',
    },
    end: {
      name: 'Najdorf, Attacco Fischer-Sozin',
      plans: [
        'Prosegui con ...b5, che colpisce l\'alfiere e guadagna spazio sull\'ala di donna.',
        '...Ae7, ...O-O e ...Ab7 completano lo sviluppo; la colonna c è il tuo terreno.',
        'Occhio a f4-f5 e Ab3 con attacco sull\'ala di re: rispondi al centro con ...d5 o ...e5 al momento giusto.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 f4', { label: 'Variante Amsterdam', idea: 'Il Bianco prende spazio e prepara e4-e5 o una costruzione sull\'ala di re.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 f4 e5', {
    idea: 'Colpisci subito al centro, prima che il Bianco consolidi.',
    hint: 'Il Bianco ha impegnato un pedone dell\'ala di re. Colpisci al centro prima che possa costruirci sopra.',
    end: {
      name: 'Najdorf, 6.f4 e5',
      plans: [
        'Dopo fxe5 dxe5 il cavallo deve muoversi e tu hai preso il centro con tempo.',
        'Il pedone in e5 è un po\' allentato: sostienilo con ...Ae7 e ...O-O prima di aprire altro.',
        '...b5, ...Ab7 e la pressione su e4 sono i seguiti abituali.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 d4 cxd4 Qxd4', { label: 'Riprende con la donna', idea: 'Il Bianco riprende con la donna, che esce presto.' }),
  n('e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6', {
    idea: 'Sviluppa con tempo: il cavallo attacca la donna e il Bianco deve muoverla di nuovo.',
    hint: 'La donna bianca è su una casa aperta. Sviluppa un pezzo che la attacchi.',
    m: {
      Nf6: 'Mossa perfettamente buona, le due sono più o meno equivalenti. Questo repertorio sviluppa con tempo sulla donna.',
    },
    end: {
      name: 'Siciliana, 4.Dxd4',
      plans: [
        'Dopo Ab5 Ad7 sviluppi comodamente; il cambio in c6 ti dà la coppia degli alfieri.',
        '...Cf6, ...g6 oppure ...e6 e ...Ae7 completano lo sviluppo.',
        'La colonna c semiaperta resta la tua risorsa principale.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 Bb5', { label: 'Variante Mosca', idea: 'Il Bianco evita del tutto la Siciliana Aperta e offre il cambio degli alfieri.' }),
  n('e4 c5 Nf3 d6 Bb5 Bd7', {
    idea: 'Blocca con l\'alfiere. Il cambio in d7 ti conviene: riprendi con la donna o con il cavallo e sviluppi.',
    hint: 'Blocca lo scacco con il pezzo che sei contento di cambiare.',
    m: {
      Nd7: 'Giocabile ma passiva: il cavallo blocca l\'alfiere e dopo O-O il Bianco mantiene la pressione.',
      Nc6: 'Questa va dritta nell\'inchiodatura e, peggio, permette il cambio in c6 che rovina la tua struttura sull\'ala di donna.',
    },
    end: {
      name: 'Siciliana, Variante Mosca',
      plans: [
        'Dopo Axd7+ riprendi con la donna o con il cavallo e prosegui con ...Cf6, ...g6 o ...e6 e l\'arrocco.',
        'Hai la colonna c semiaperta e una struttura sana: la posizione è più o meno pari.',
        'La rottura ...d5 o ...e5 libera la posizione una volta completato lo sviluppo.',
      ],
    },
  }),
  n('e4 c5 Nf3 d6 c3', { label: 'Alapin ritardata', idea: 'Il Bianco costruisce un grande centro con d4 sostenuto dal pedone di c.' }),
  n('e4 c5 Nf3 d6 c3 Nf6', {
    idea: 'Colpisci subito e4. Con il pedone in c3 il Bianco non può difenderlo con Cc3, quindi deve spingere o difendere in modo goffo.',
    hint: 'Il Bianco ha bloccato la casa naturale del cavallo di donna. Attacca il pedone e.',
    end: {
      name: 'Siciliana, 3.c3',
      plans: [
        'Dopo Ae2 o Ad3 prosegui con ...Cc6, ...g6 oppure ...e6 e colpisci il centro con ...cxd4 e ...d5.',
        'Il grande centro bianco si può minare con ...d5 al momento giusto.',
        'Non lasciare che il Bianco giochi d4 ed e5 senza opposizione.',
      ],
    },
  }),
  n('e4 c5 c3', { label: 'Variante Alapin', idea: 'Il Bianco prepara d4 con il sostegno di un pedone invece di giocare la Siciliana Aperta.' }),
  n('e4 c5 c3 Nf6', {
    idea: 'Attacca subito e4. Il Bianco deve spingere in e5, e a quel punto quel pedone diventa un bersaglio per ...d6 e ...Cc6.',
    hint: 'Il pedone in c3 toglie al cavallo la casa da cui difenderebbe. Attacca il pedone e.',
    m: {
      d5: 'Anche questa è una linea principale e va benissimo, ma ...Cf6 è il tentativo più tagliente e costringe il Bianco a spingere.',
      e5: 'Questa rinuncia alla struttura siciliana e lascia un buco in d5 mentre il Bianco sviluppa con comodità.',
    },
    end: {
      name: 'Variante Alapin',
      plans: [
        'Dopo 3.e5 Cd5 il cavallo sta bene e il pedone bianco in e5 ha bisogno di difesa costante.',
        'Mina il centro con ...d6 e ...Cc6, e contesta d4 con ...cxd4.',
        'Il finale di solito favorisce leggermente il Nero, perché i pedoni bianchi avanzati diventano deboli.',
      ],
    },
  }),
  n('e4 c5 Nc3', { label: 'Chiusa / Aperta ritardata', idea: 'Il Bianco sviluppa in modo flessibile, tenendo in riserva sia la Siciliana Chiusa sia un d4 più tardi.' }),
  n('e4 c5 Nc3 d6', {
    idea: 'Mantieni la struttura Najdorf. Se il Bianco gioca Cf3 e d4 trasponi direttamente nella tua linea.',
    hint: 'Resta nel tuo sistema: gioca la mossa che verrebbe dopo nella linea principale.',
    end: {
      name: 'Siciliana, 2.Cc3',
      plans: [
        'Se il Bianco gioca Cf3 e d4, la partita traspone nella Siciliana Aperta e valgono i tuoi piani normali.',
        'Contro lo schema della Siciliana Chiusa (g3, Ag2, f4) rispondi con ...Cc6, ...g6 e ...Ag7.',
        'La colonna c semiaperta e l\'espansione sull\'ala di donna restano le tue fonti di gioco.',
      ],
    },
  }),
  n('e4 c5 f4', { label: 'Attacco Grand Prix', idea: 'Il Bianco prevede Cc3, Ac4 o Ab5 e un attacco diretto sull\'ala di re.' }),
  n('e4 c5 f4 d5', {
    idea: 'La risposta più impegnativa: colpisci subito al centro, prima che il Bianco sviluppi i pezzi d\'attacco.',
    hint: 'Il Bianco ha giocato una mossa di fianchetto. Puniscila colpendo subito al centro.',
    m: {
      Nc6: 'Giocabile, ma permette Ab5 e tutto lo schema d\'attacco del Grand Prix. Colpire il centro è più incisivo.',
    },
    end: {
      name: 'Attacco Grand Prix, 2...d5',
      plans: [
        'Dopo exd5 Cf6 recuperi il pedone con una buona partita.',
        'Il pedone in f4 ha indebolito la diagonale verso il re bianco: ...Db6 ed ...e6 sono mosse utili.',
        'Sviluppa in fretta e apri il centro prima che il Bianco possa attaccare sull\'ala di re.',
      ],
    },
  }),
)
