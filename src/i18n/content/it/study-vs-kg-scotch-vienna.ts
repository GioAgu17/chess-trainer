import type { ContentDictionary } from '../../keys'

/** Le guide di studio: contro il Gambetto di Re, la Scozzese e la Viennese. */
export const studyVsKgScotchVienna: ContentDictionary = {
  /* ------------------------------------------------ Contro il Gambetto di Re */
  'study.vs-kings-gambit.bigIdea':
    'Duecento anni di teoria dicono che accettare il Gambetto di Re è giocabile, e duecento anni di pratica dicono che vince chi lo ha studiato. Rifiutare con 2...Ac5 schiva tutto quanto: l\'alfiere prende la diagonale che 2.f4 ha appena aperto, il Bianco non può mai prendere in e5 per via di ...Dh4+, e tu ottieni una partita normale in cui il Bianco ha l\'ala di re indebolita e tu non hai memorizzato niente.',
  'study.vs-kings-gambit.feel':
    'Normale, che è esattamente il punto. Il tuo avversario voleva una partita d\'attacco selvaggia e ne ha ottenuta una tranquilla in cui il suo pedone f è un problema a lungo termine. Pochissimo da memorizzare e pochissimo che possa andare storto.',
  'study.vs-kings-gambit.s.0.name': 'La tensione irrisolta',
  'study.vs-kings-gambit.s.0.shape':
    'Pedoni bianchi in e4 ed f4, pedoni neri in d6 ed e5. Nessuno ha preso e nessuno ha voglia di farlo.',
  'study.vs-kings-gambit.s.0.you':
    'Tieni il pedone in e5. Finché resta lì, il pedone f4 è fissato e le case e3, g3 e d4 sono molli per sempre. Sviluppa e lascia che sia il Bianco a preoccuparsene.',
  'study.vs-kings-gambit.s.0.them':
    'Il Bianco vuole giocare d4 e costruire un centro, oppure fxe5 in un momento in cui la ripresa ti costa qualcosa. Nessuna delle due è facile con l\'alfiere in c5 puntato su g1.',
  'study.vs-kings-gambit.s.1.name': 'Dopo fxe5 dxe5',
  'study.vs-kings-gambit.s.1.shape': 'Una colonna f semiaperta per il Bianco e una colonna d aperta per te.',
  'study.vs-kings-gambit.s.1.you':
    'La tua struttura è sana e la colonna d punta la donna bianca. Gioca ...Cf6, ...Cc6 e porta un cavallo in d4.',
  'study.vs-kings-gambit.s.1.them':
    'La colonna f è il compenso del Bianco, ma solo se riesce ad arroccare per primo, cosa che l\'alfiere in c5 rende scomoda.',
  'study.vs-kings-gambit.p.0.title': '2...Ac5 e ricordati perché',
  'study.vs-kings-gambit.p.0.detail':
    'L\'alfiere rende intoccabile il pedone in e5. Se il Bianco lo prende, la donna arriva in h4 con scacco, il Bianco deve coprirsi sulla terza traversa, e la donna raccoglie il pedone e con scacco e poi la torre nell\'angolo. I giocatori di club prendono quel pedone di continuo.',
  'study.vs-kings-gambit.p.1.title': '...d6, ...Cf6, ...Cc6, ...Ag4',
  'study.vs-kings-gambit.p.1.detail':
    'Quattro normalissime mosse di sviluppo e hai una buona posizione. Quella con i denti è l\'inchiodatura su f3: attacca il pezzo che tiene insieme il centro.',
  'study.vs-kings-gambit.p.2.title': 'Cambia in f3 quando arriva h3',
  'study.vs-kings-gambit.p.2.detail':
    'Togliere il cavallo lascia d4 ed e5 senza guardia e il Bianco con l\'ala di re un po\' allentata. Cedere la coppia degli alfieri per questo è un buon affare.',
  'study.vs-kings-gambit.p.3.title': 'Il cavallo in d4',
  'study.vs-kings-gambit.p.3.detail':
    'Una volta sparito il cavallo di f3, ...Cd4 atterra su una casa che nessun pedone può attaccare, colpendo c2 e quello che c\'è in f3. Di solito è il pezzo migliore della scacchiera.',
  'study.vs-kings-gambit.k.0.why':
    'La fine della diagonale che 2.f4 ha aperto. L\'alfiere in c5 la punta per tutta la partita.',
  'study.vs-kings-gambit.k.1.why':
    'Dove atterra lo scacco di donna se il Bianco prende mai in e5. Conoscere questa singola tattica è gran parte dell\'apertura.',
  'study.vs-kings-gambit.k.2.why':
    'L\'avamposto che compare una volta cambiato il cavallo di f3. Nessun pedone bianco potrà mai cacciare un cavallo da lì.',
  'study.vs-kings-gambit.k.3.why': 'Il pedone che fissa f4. Tienilo difeso e la struttura bianca resta debole.',
  'study.vs-kings-gambit.b.0.when':
    'Quasi mai in questo repertorio. Solo se il Bianco ha impegnato male l\'alfiere e tu vinci qualcosa di concreto.',
  'study.vs-kings-gambit.b.1.when':
    'Quando il Bianco ha arroccato e il centro è stabile. Apre la posizione alla tua struttura migliore.',
  'study.vs-kings-gambit.b.2.when': 'Dopo il cambio in f3. Consideralo la "rottura" principale della linea.',
  'study.vs-kings-gambit.f.0.title': 'Prendere in f4 per abitudine',
  'study.vs-kings-gambit.f.0.detail':
    'Tutto il repertorio si regge sul non prendere. Una volta che l\'alfiere è in c5, prendere regala al Bianco d4 con tempo e tutto quello che il gambetto voleva.',
  'study.vs-kings-gambit.f.1.title': 'Giocare ...Dh4+ quando non è vincente',
  'study.vs-kings-gambit.f.1.detail':
    'Lo scacco funziona solo dopo che il Bianco ha preso in e5. Nelle altre posizioni g2-g3 caccia la donna e tu perdi due tempi.',
  'study.vs-kings-gambit.f.2.title': 'Arroccare corto troppo presto',
  'study.vs-kings-gambit.f.2.detail':
    'La colonna f si aprirà. Sviluppa prima, guarda dove va il re bianco, e arrocca quando la posizione è chiara.',

  /* ---------------------------------------------------- Contro la Scozzese */
  'study.vs-scotch.bigIdea':
    'La Scozzese apre il centro alla terza mossa, prima che qualcuno abbia sviluppato. È il suo pregio ed è il suo problema: con i pezzi che escono in fretta, chi sa dove vanno è messo molto meglio. La risposta classica - ...Ac5, ...Df6, ...Cge7, ...Ce5, ...Dg6 - sviluppa ogni pezzo con una minaccia e raggiunge la parità completa entro l\'ottava mossa.',
  'study.vs-scotch.feel':
    'Aperta, veloce e del tutto equilibrata. Le partite sono corte e le decide la tattica, non la struttura. Lo schema è facile da ricordare perché ogni mossa ha un motivo che si vede sulla scacchiera.',
  'study.vs-scotch.s.0.name': 'Il centro aperto',
  'study.vs-scotch.s.0.shape':
    'Un pedone bianco in e4 contro un pedone nero in d6 o d7, con tutti i pezzi leggeri fuori e le colonne d ed e aperte o semiaperte.',
  'study.vs-scotch.s.0.you':
    'Sviluppo rapido e pressione su e4. Il cavallo in e5 e la donna in g6 colpiscono insieme c4, d3, e4 e g2, ed è per questo che il Bianco non trova mai il tempo di consolidare.',
  'study.vs-scotch.s.0.them':
    'Il Bianco vuole e4-e5 per prendere spazio, oppure un grande centro con c3 ed f4. A entrambe serve una mossa che tu non concedi mai.',
  'study.vs-scotch.s.1.name': 'I pedoni c doppiati dopo Cxc6',
  'study.vs-scotch.s.1.shape': 'Pedoni neri in c6 e c7 dopo ...dxc6, con la coppia degli alfieri.',
  'study.vs-scotch.s.1.you':
    'I pedoni doppiati controllano d5 e b5 e non sono deboli finché la colonna c resta chiusa. Le risorse vere sono la coppia degli alfieri e un rapido ...O-O-O.',
  'study.vs-scotch.s.1.them':
    'Il Bianco gioca per un finale in cui conti la struttura. Evitare un cambio di donne a condizioni sfavorevoli vale un tempo.',
  'study.vs-scotch.p.0.title': '4...Ac5 che colpisce il cavallo',
  'study.vs-scotch.p.0.detail':
    'L\'alfiere prende la diagonale verso f2 e attacca il cavallo al centro. È la mossa che impedisce al Bianco di infilare comodamente Cxc6 ed e4-e5.',
  'study.vs-scotch.p.1.title': '...Df6, insolita e corretta',
  'study.vs-scotch.p.1.detail':
    'La donna aggiunge un secondo attaccante su d4 e guarda f2. Sembra una mossa da principiante ed è la linea principale, perché in una posizione aperta con il cavallo bianco allentato funziona davvero.',
  'study.vs-scotch.p.2.title': '...Cge7 invece di ...Cf6',
  'study.vs-scotch.p.2.detail':
    'La casa f6 è occupata dalla donna, e da e7 il cavallo la sostiene, tiene libere le linee e punta a g6 o c6.',
  'study.vs-scotch.p.3.title': '...Ce5 e ...Dg6',
  'study.vs-scotch.p.3.detail':
    'Il cavallo colpisce l\'alfiere di c4 e la donna scivola a colpire e4 e g2. Due mosse, due minacce, e il Bianco deve spendere entrambe le risposte in difesa.',
  'study.vs-scotch.k.0.why':
    'Dove sta il cavallo bianco. Ognuna delle tue prime quattro mosse attacca lui o i pezzi che lo difendono.',
  'study.vs-scotch.k.1.why':
    'La casa molle in una posizione bianca non arroccata. L\'alfiere in c5 e la donna in f6 la puntano entrambi.',
  'study.vs-scotch.k.2.why':
    'L\'avamposto del tuo cavallo. Da lì colpisce c4 e d3 e nessun pedone può cacciarlo.',
  'study.vs-scotch.k.3.why':
    'Quello che attacca la donna in g6. È il motivo per cui il Bianco deve giocare g3 o Af3 e perdere tempo.',
  'study.vs-scotch.b.0.when': 'Il seguito standard: solida, apre l\'alfiere di c8 e copre e5.',
  'study.vs-scotch.b.1.when':
    'Quando il Bianco ha arroccato e il centro è stabile: libera tutto in una mossa sola.',
  'study.vs-scotch.b.2.when':
    'Subito dopo che e4-e5 attacca il tuo cavallo. Colpisce l\'alfiere in c4 e vince materiale.',
  'study.vs-scotch.f.0.title': 'Cambiare in d4 con l\'alfiere',
  'study.vs-scotch.f.0.detail':
    'Axd4 dà al Bianco la coppia degli alfieri e un tempo gratis. Tieni la tensione: il cavallo al centro è un problema suo, non tuo.',
  'study.vs-scotch.f.1.title': '4...Dh4 a caccia di e4',
  'study.vs-scotch.f.1.detail':
    'Cb5 arriva con la minaccia di Cxc7+, la donna finisce inseguita e il tuo re resta bloccato in d8. È una delle trappole più antiche dell\'apertura.',
  'study.vs-scotch.f.2.title': 'Riprendere in c6 con il pedone b',
  'study.vs-scotch.f.2.detail':
    'Sembra che costruisca un centro. Chiude dentro l\'alfiere di c8 e lascia deboli i pedoni dell\'ala di donna. Prendi con il pedone d.',
  'study.vs-scotch.f.3.title': 'Affrontare il Gambetto Scozzese a caccia di pedoni',
  'study.vs-scotch.f.3.detail':
    'Contro 4.Ac4 la risposta è lo sviluppo, non il materiale. ...Ac5 e ...Cf6 e il contraccolpo ...d5 battono qualsiasi tentativo di tenere due pedoni in più.',

  /* ---------------------------------------------------- Contro la Viennese */
  'study.vs-vienna.bigIdea':
    'La Viennese è un Gambetto di Re con la sicura inserita: giocando prima Cc3 il Bianco difende e4 e può poi giocare f2-f4 senza che ...Dh4+ rovini tutto. La risposta è una regola che puoi applicare ovunque: a un attacco sull\'ala si risponde con un colpo al centro. Contro 3.f4, ...d5 rovescia tutto il gambetto.',
  'study.vs-vienna.feel':
    'Tagliente per quattro mosse e poi comoda. Il Gambetto Viennese sembra spaventoso e si affloscia su una sola mossa di pedone precisa. Il grosso del pericolo sta nelle linee con 3.Ac4, dove tutta la partita si riduce a non prendere un pedone gratis.',
  'study.vs-vienna.s.0.name': 'Il cavallo in e4',
  'study.vs-vienna.s.0.shape':
    'Un cavallo nero in e4 sostenuto da ...f5, contro un pedone bianco in e5 e pedoni in d4 e c2.',
  'study.vs-vienna.s.0.you':
    'Il cavallo è un ospite fisso. Sostienilo con ...f5, sviluppa con ...Ae7, ...O-O e ...Cc6, e mina il pedone in e5.',
  'study.vs-vienna.s.0.them':
    'Il Bianco vuole Ad3 per cambiare il cavallo, oppure d4-d5 per prendere spazio. Nessuna delle due funziona una volta che il cavallo ha un pedone alle spalle.',
  'study.vs-vienna.s.1.name': 'I pedoni c doppiati dopo ...Cxc3 bxc3',
  'study.vs-vienna.s.1.shape': 'Pedoni bianchi in c2 e c3 dopo il cambio in c3, nelle linee con il fianchetto.',
  'study.vs-vienna.s.1.you':
    'Un bersaglio strutturale permanente. Fissalo con ...c5 oppure ...b6 e ...Aa6, tieni e5 e gioca la partita lunga.',
  'study.vs-vienna.s.1.them':
    'In cambio il Bianco ottiene una colonna b semiaperta e un centro ampio. Gli conviene solo se la posizione si apre.',
  'study.vs-vienna.p.0.title': 'Prima 2...Cf6',
  'study.vs-vienna.p.0.detail':
    'Sviluppa, colpisce e4 e fa sì che f2-f4 si possa sempre affrontare al centro. Nient\'altro tiene aperta quell\'opzione.',
  'study.vs-vienna.p.1.title': 'A 3.f4 si risponde ...d5',
  'study.vs-vienna.p.1.detail':
    'La confutazione. Non ...exf4. Dopo fxe5 Cxe4 hai un cavallo in mezzo alla scacchiera, una struttura sana e nessun attacco da parare.',
  'study.vs-vienna.p.2.title': 'Contro 3.Ac4, ...Cc6 e ...Ca5',
  'study.vs-vienna.p.2.detail':
    'Non prendere in e4. Sviluppa, poi cambia l\'alfiere che rende pericolosa tutta la linea. Un cavallo sul bordo è un ottimo prezzo per il pezzo migliore del Bianco.',
  'study.vs-vienna.p.3.title': 'Contro 3.g3, colpisci il centro con ...d5',
  'study.vs-vienna.p.3.detail':
    'Lo stesso principio applicato a una mossa lenta. Il Bianco ha speso un tempo sull\'ala: prenditi il mezzo.',
  'study.vs-vienna.k.0.why':
    'La casa del cavallo nelle linee di gambetto, e il pedone bianco nelle altre. Chi la controlla controlla la partita.',
  'study.vs-vienna.k.1.why': 'La casa di rottura. Ogni buona risposta alla Viennese passa di lì.',
  'study.vs-vienna.k.2.why': 'Ciò a cui punta l\'alfiere di c4. È il motivo per cui prendere in e4 perde per Dh5.',
  'study.vs-vienna.k.3.why':
    'La casa dell\'alfiere. Cambiarlo con ...Ca5 toglie al Bianco il suo unico pezzo d\'attacco.',
  'study.vs-vienna.b.0.when': 'Contro 3.f4 e 3.g3, subito. È la risposta a quasi tutto.',
  'study.vs-vienna.b.1.when': 'Una volta che il cavallo è in e4 e il re è arroccato. Rende permanente l\'avamposto.',
  'study.vs-vienna.b.2.when':
    'Più avanti, per minare un pedone bianco in d4 o e5 una volta finito lo sviluppo.',
  'study.vs-vienna.f.0.title': 'Prendere in e4 contro 3.Ac4',
  'study.vs-vienna.f.0.detail':
    'Dh5! colpisce f7 e il cavallo insieme. È la trappola Frankenstein-Dracula e prende tutti almeno una volta.',
  'study.vs-vienna.f.1.title': 'Prendere in f4',
  'study.vs-vienna.f.1.detail':
    'Accettare il Gambetto Viennese regala al Bianco e4-e5 con tempo sul tuo cavallo e un grande centro. Rispondi invece al centro.',
  'study.vs-vienna.f.2.title': 'Cambiare il cavallo di e4',
  'study.vs-vienna.f.2.detail':
    '...Cxc3 consegna al Bianco un centro ampio e una colonna b aperta. Tieni il cavallo dov\'è e costringi il Bianco a faticare per rimuoverlo.',
}
