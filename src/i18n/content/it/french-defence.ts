import { nodes, tree } from '../tree'

const n = tree('french-defence')

/** Difesa Francese, Classica e Steinitz. */
export const frenchTree = nodes(
  n('e4', { label: 'Apertura di pedone di re', idea: 'Il Bianco prende il centro.' }),
  n('e4 e6', {
    idea: 'L\'ordine di mosse della Francese. Prepara ...d5 con il sostegno di un pedone, così il Bianco non può semplicemente cambiare e guadagnare tempo sulla tua donna.',
    hint: 'Prepara ...d5 con una modesta mossa di pedone.',
    m: {
      d5: 'Quella è la Scandinava: dopo exd5 Dxd5 Cc3 la tua donna viene cacciata in giro. La Francese sostiene d5 con un pedone.',
      e5: 'Buona mossa, ma quella è la partita aperta, non la Francese.',
      c6: 'Mossa perfettamente buona - il motore la preferisce anche di un soffio - ma quella è la Caro-Kann, un repertorio diverso.',
    },
  }),
  n('e4 e6 d4', { label: 'Linea principale', idea: 'Il Bianco costruisce il grande centro.' }),
  n('e4 e6 d4 d5', {
    idea: 'Il senso di ...e6. Adesso il Bianco deve decidere cosa fare del centro, e ogni scelta gli costa qualcosa.',
    hint: 'Adesso contesta il centro con il pedone che hai preparato.',
    m: {
      c5: 'Troppo presto: il Bianco gioca d5 e guadagna un grande vantaggio di spazio mentre la tua posizione resta chiusa.',
      Nf6: 'Il Bianco gioca e5 e il cavallo viene cacciato subito, senza che tu abbia guadagnato niente.',
    },
  }),
  n('e4 e6 d4 d5 Nc3', { label: 'Classica / Winawer', idea: 'Il Bianco difende e4 con la mossa di sviluppo più naturale.' }),
  n('e4 e6 d4 d5 Nc3 Nf6', {
    idea: 'La Francese Classica. Attaccare e4 costringe il Bianco a risolvere il centro, e ogni soluzione ti dà qualcosa contro cui giocare.',
    hint: 'Attacca il pedone e e costringi il Bianco a scoprirsi.',
    m: {
      Bb4: 'Quella è la Winawer, un\'apertura splendida, ma molto più tagliente; questo repertorio sceglie la Classica.',
      dxe4: 'La Rubinstein. È solida ma molto passiva: regali il centro al Bianco e giochi per pareggiare.',
      c5: 'Prematura. Il Bianco non si è ancora impegnato al centro, ed exd5 seguito da dxc5 gli dà una partita comoda.',
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5', { label: 'Variante Steinitz', idea: 'Il Bianco guadagna spazio e chiude la posizione: il tentativo più impegnativo e più frequente.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7', {
    idea: 'Il cavallo torna in d7, dove sostiene la futura rottura ...c5 e non intralcia niente.',
    hint: 'Il cavallo è attaccato. Ritiralo sulla casa da cui sosterrà la rottura al centro.',
    m: {
      Ne4: 'Il cavallo lì non ha sostegno e il Bianco gioca Cxe4 dxe4 con un forte centro e un pedone nero debole.',
      Ng8: 'Annulla completamente il tuo sviluppo. Il cavallo appartiene a d7, dove serve a qualcosa.',
      Nbd7: 'Cavallo sbagliato. Quello di b8 appartiene a c6, dove colpisce d4; è quello di f6 a dover ritirarsi.',
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4', { label: 'Steinitz linea principale', idea: 'Il Bianco puntella e5 con un pedone e guadagna altro spazio.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5', {
    idea: 'La rottura della Francese. La catena bianca va da d4 a e5, quindi d4 è la sua base: si attacca la base.',
    hint: 'Attacca la base della catena di pedoni bianca.',
    m: {
      f6: 'Anche questa è una rottura francese, ma con il pedone in f4 a sostenere e5 arriva troppo presto e apre linee verso il tuo re.',
      b6: 'Risolvere il problema dell\'alfiere cattivo è una vera idea francese, ma è molto troppo lenta finché il centro non è contestato.',
      Nc6: 'Naturale, ma il pedone deve venire prima: ...c5 attacca d4 con un pedone, che vale molto più di un pezzo.',
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e difende d4 una seconda volta.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3 Nc6', {
    idea: 'Accumula su d4. In questo sistema ogni pezzo nero punta a quel pedone.',
    hint: 'Aggiungi un altro attaccante al pedone che tiene insieme la catena bianca.',
    m: {
      cxd4: 'Sciogli la tensione troppo presto: dopo Cxd4 il Bianco sta comodo e tu hai perso la pressione.',
      Qb6: 'Buona mossa in molte posizioni francesi, ma qui il cavallo deve venire prima, altrimenti Ca4 caccia la donna con tempo.',
    },
    end: {
      name: 'Difesa Francese, Variante Steinitz linea principale',
      plans: [
        'Continua ad accumulare su d4: ...Db6 e ...cxd4 al momento giusto, con ...Ab4 o ...Cb4 come rincalzo.',
        'La rottura ...f6 arriva più tardi, quando il Bianco si è impegnato sull\'ala di re e il pedone e5 non è più sostenuto.',
        'Il tuo alfiere campochiaro è il pezzo problematico: liberalo con ...b6 e ...Aa6, oppure con ...Ad7-b5.',
        'Attenzione alla costruzione bianca con Ae3, Dd2, Ad3 e O-O-O: se il re va lungo, apri l\'ala di donna.',
        'La colonna c è semiaperta per te: una torre in c8 combinata con ...Da5 dà una pressione permanente.',
      ],
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 dxc5', { label: 'Scioglie la tensione', idea: 'Il Bianco prende il pedone ma rinuncia alla forte catena.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 dxc5 Nc6', {
    idea: 'Sviluppa e prepara il recupero del pedone con ...Axc5 al momento giusto.',
    hint: 'Non inseguire ancora il pedone. Sviluppa il pezzo che ti servirà comunque.',
    m: {
      Bxc5: 'Troppo in fretta: il Bianco gioca Dg4 colpendo g7 e devi indebolirti per difenderlo.',
      Qc7: 'La donna sta male lì e il Bianco consolida con Ad3 e O-O tenendosi il pedone.',
    },
    end: {
      name: 'Francese Steinitz, 6.dxc5',
      plans: [
        'Recupera il pedone con ...Axc5 una volta che il Bianco ha speso tempo altrove.',
        'La casa d4 è adesso un magnifico avamposto per un cavallo nero.',
        'Il pedone in e5 è allentato senza il sostegno di d4: attaccalo con ...Db6 e ...f6.',
      ],
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 Nf3', { label: 'Sviluppo tranquillo', idea: 'Il Bianco sviluppa senza impegnare il pedone f.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 Nf3 c5', {
    idea: 'La rottura è ancora migliore qui, perché e5 è difeso una volta sola.',
    hint: 'Attacca la base della catena di pedoni.',
    end: {
      name: 'Francese Classica, 5.Cf3',
      plans: [
        '...Cc6 e ...Db6 accumulano su d4.',
        'La rottura ...f6 è forte qui, perché il pedone e5 non ha il sostegno di f4.',
        'Cambia l\'alfiere cattivo con ...b6 e ...Aa6 quando ne hai il tempo.',
      ],
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 Nce2', { label: 'Rinforza d4', idea: 'Il Bianco sostiene d4 e tiene libero il pedone di c per c3.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 Nce2 c5', {
    idea: 'Colpisci d4 prima che il Bianco consolidi con c3.',
    hint: 'Attacca la base della catena prima che il Bianco la rinforzi.',
    end: {
      name: 'Francese Classica, 5.Cce2',
      plans: [
        'Prosegui con ...Cc6 e ...Db6; il cavallo in e2 è passivo e non contesta niente.',
        'La rottura ...f6 funziona bene qui.',
        'Siccome il cavallo ha lasciato c3, ...cxd4 seguito da ...Cb4 o ...Ab4+ diventa fastidioso.',
      ],
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 Bg5', { label: 'Classica, 4.Ag5', idea: 'Il Bianco inchioda il cavallo e aumenta la pressione su d5.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7', {
    idea: 'Rompi l\'inchiodatura. Adesso e4-e5 si può affrontare con ...Cfd7 avendo l\'alfiere già sviluppato.',
    hint: 'Il cavallo è inchiodato. Sblocca l\'inchiodatura con una mossa di sviluppo.',
    m: {
      dxe4: 'La Variante Burn: giocabile, ma regala il centro al Bianco. La Classica mantiene la tensione.',
      h6: 'Invita Axf6, e dopo ...Dxf6 o ...gxf6 perdi tempo o peggiori la struttura.',
      Bb4: 'L\'alfiere in b4 non fa niente con il cavallo già inchiodato in g5; è la Winawer nell\'ordine sbagliato.',
    },
    end: {
      name: 'Francese Classica, 4.Ag5 Ae7',
      plans: [
        'Dopo 5.e5 Cfd7 6.Axe7 Dxe7 hai cambiato l\'alfiere cattivo: è un vero risultato in una Francese.',
        'Segue la rottura ...c5, che colpisce d4 come sempre.',
        'La colonna c semiaperta e la pressione su d4 sono le tue fonti di gioco abituali.',
      ],
    },
  }),
  n('e4 e6 d4 d5 Nc3 Nf6 exd5', { label: 'Variante di Cambio', idea: 'Il Bianco scioglie la tensione e punta a una posizione simmetrica.' }),
  n('e4 e6 d4 d5 Nc3 Nf6 exd5 exd5', {
    idea: 'Riprendi e nota il lato buono: il tuo alfiere campochiaro, di solito il pezzo problematico della Francese, adesso è libero.',
    hint: 'Riprendi verso il centro e libera il tuo alfiere cattivo.',
    end: {
      name: 'Francese, Variante di Cambio',
      plans: [
        'Sviluppa attivamente: ...Ad6, ...O-O, ...Ag4 oppure ...Af5, ...c6 e ...Cbd7.',
        'La posizione è simmetrica, quindi gioca per un piccolo vantaggio invece che per un attacco.',
        'La rottura ...c5 resta disponibile più avanti e ti dà la posizione più attiva.',
      ],
    },
  }),
  n('e4 e6 d4 d5 Nd2', { label: 'Variante Tarrasch', idea: 'Il Bianco difende e4 senza bloccare il pedone di c, evitando l\'inchiodatura della Winawer.' }),
  n('e4 e6 d4 d5 Nd2 c5', {
    idea: 'Il cavallo in d2 blocca l\'alfiere bianco e non controlla bene d4: colpisci subito.',
    hint: 'Il cavallo in d2 è passivo. Puniscilo colpendo immediatamente al centro.',
    m: {
      Nf6: 'Perfettamente giocabile, ma il cavallo in d2 è passivo proprio adesso e la rottura immediata è più incisiva.',
      dxe4: 'Libera i pezzi bianchi per niente. Tieni la tensione e colpisci d4.',
    },
    end: {
      name: 'Francese Tarrasch, 3...c5',
      plans: [
        'Dopo exd5 Dxd5 la donna è al sicuro perché il Bianco non ha Cc3 per guadagnare tempo.',
        'Sviluppa con ...Cc6, ...Cf6, ...Ad6 oppure ...cxd4 e gioca contro il pedone isolato.',
        'Il cavallo in d2 è il pezzo peggiore del Bianco: tienilo lì evitando cambi precoci al centro.',
      ],
    },
  }),
  n('e4 e6 d4 d5 e5', { label: 'Variante di Avanzata', idea: 'Il Bianco guadagna subito spazio e chiude il centro.' }),
  n('e4 e6 d4 d5 e5 c5', {
    idea: 'La base della catena è d4. Attaccala subito: è tutto il piano della Francese in una mossa.',
    hint: 'Attacca la base della nuova catena di pedoni bianca.',
    m: {
      f6: 'Questa rottura è per più avanti, quando il Bianco si è impegnato. Adesso apre soltanto linee verso il tuo re.',
      Nc6: 'La rottura di pedone deve venire prima: ...c5 attacca d4 con un pedone, che è molto più forte.',
    },
    end: {
      name: 'Francese, Variante di Avanzata',
      plans: [
        '...Cc6 e ...Db6 accumulano su d4; il pedone b2 è spesso un bersaglio in omaggio.',
        '...Ad7-b5 cambia l\'alfiere campochiaro cattivo.',
        'La rottura ...f6 arriva più tardi e colpisce la testa della catena.',
        'Il Bianco proverà Cf3, Ae2, O-O e un attacco sull\'ala di re: rispondi al centro invece di difendere passivamente.',
      ],
    },
  }),
  n('e4 e6 d4 d5 exd5', { label: 'Variante di Cambio', idea: 'Il Bianco semplifica subito.' }),
  n('e4 e6 d4 d5 exd5 exd5', {
    idea: 'Riprendi verso il centro. Il tuo alfiere problematico adesso è un buon alfiere.',
    hint: 'Riprendi con il pedone che libera il tuo alfiere campochiaro.',
    end: {
      name: 'Francese, Variante di Cambio',
      plans: [
        'Sviluppa attivamente con ...Cf6, ...Ad6, ...O-O e ...Ag4 oppure ...Af5.',
        'Evita i cambi meccanici: la posizione è simmetrica, quindi decide l\'attività.',
        '...c5 più avanti dà vita alla posizione e può lasciare al Bianco un pedone isolato.',
      ],
    },
  }),
  n('e4 e6 d3', { label: 'Attacco Indiano di Re', idea: 'Il Bianco gioca un sistema a colori invertiti con Cd2, Cgf3, g3 e Ag2.' }),
  n('e4 e6 d3 d5', {
    idea: 'Prendi il centro mentre il Bianco gioca modestamente.',
    hint: 'Il Bianco ha fatto una mossa di pedone modesta. Occupa il centro.',
    end: {
      name: 'Attacco Indiano di Re contro la Francese',
      plans: [
        'Gioca ...c5, ...Cc6, ...Cge7 o ...Cf6 e ...Ae7 con una partita comoda.',
        'Il Bianco giocherà e4-e5 e attaccherà sull\'ala di re: espandi sull\'ala di donna con ...b5 e ...a5.',
        'Una torre in c8 e la spinta ...c4 o ...d4 ti danno l\'attacco più veloce.',
      ],
    },
  }),
  n('e4 e6 Nf3', { label: 'Sviluppo flessibile', idea: 'Il Bianco sviluppa prima e tiene d4 in riserva.' }),
  n('e4 e6 Nf3 d5', {
    idea: 'Gioca comunque la mossa francese: dopo d4 la partita traspone nella tua linea principale.',
    hint: 'Gioca la tua mossa francese standard; la partita trasporrà.',
    end: {
      name: 'Francese, 2.Cf3 d5',
      plans: [
        'Se il Bianco gioca d4 sei nella tua Francese normale con tutti i piani abituali.',
        'Se il Bianco gioca exd5, riprendi con il pedone e il tuo alfiere cattivo è libero.',
        'Se il Bianco gioca e5, colpisci la catena con ...c5 come sempre.',
      ],
    },
  }),
  n('e4 e6 Nc3', { label: 'Due Cavalli contro la Francese', idea: 'Il Bianco sviluppa e tiene d4 per dopo.' }),
  n('e4 e6 Nc3 d5', {
    idea: 'La mossa francese standard. Il cavallo in c3 verrà colpito più avanti da ...d4 o da ...Ab4.',
    hint: 'Gioca la tua mossa francese standard.',
    end: {
      name: 'Francese, 2.Cc3 d5',
      plans: [
        'Se il Bianco gioca d4 la partita traspone nella Classica o nella Winawer.',
        'Dopo exd5 exd5 hai sviluppo facile e un alfiere libero.',
        '...Cf6 e ...Ab4 sviluppano con tempo contro il cavallo di c3.',
      ],
    },
  }),
)
