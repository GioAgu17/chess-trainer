import type { ContentDictionary } from '../../keys'

/** Le guide di studio: contro il Trompowsky, il Colle/Zukertort e il Blackmar-Diemer. */
export const studyVsTrompColleBdg: ContentDictionary = {
  /* --------------------------------------------------- Contro il Trompowsky */
  'study.vs-trompowsky.bigIdea':
    'Il Trompowsky è un bluff travestito da apertura. Il Bianco minaccia di doppiarti i pedoni alla seconda mossa, e se lo lasci accadere alle sue condizioni passi la partita con una brutta struttura e nessun piano. Rispondere con 2...Ce4 rifiuta il cambio, guadagna un tempo sull\'alfiere e lascia il Bianco senza pedone c a sostenere il centro.',
  'study.vs-trompowsky.feel':
    'Leggermente migliore per te e leggermente strana. Nessuno dei due ha una struttura standard ed entrambi devono pensare dalla terza mossa. Il che conviene a chi ha letto questa pagina, non a chi gioca il Trompowsky per evitare la teoria.',
  'study.vs-trompowsky.s.0.name': 'La struttura di pressione d5-c5',
  'study.vs-trompowsky.s.0.shape':
    'Pedoni neri in c5 e d5 con un cavallo in e4; il Bianco ha un pedone in d4 sostenuto da e3 e, cosa decisiva, nessun pedone in c4.',
  'study.vs-trompowsky.s.0.you':
    'Il cavallo in e4 è sostenuto dal pedone di d5 e nessun pedone può cacciarlo. Aggiungi ...Cc6 e ...Db6 e il Bianco deve risolvere insieme i problemi di b2 e d4.',
  'study.vs-trompowsky.s.0.them':
    'Il Bianco vuole c2-c3 e Cbd2 per contestare il cavallo, oppure f2-f3 ed e3-e4 per costruire un centro. La seconda indebolisce la diagonale a7-g1.',
  'study.vs-trompowsky.s.1.name': 'I pedoni f doppiati, se li permetti',
  'study.vs-trompowsky.s.1.shape': 'Dopo Axf6 exf6: pedoni neri in d7, f6 e f7, con la coppia degli alfieri.',
  'study.vs-trompowsky.s.1.you':
    'Non è la linea consigliata, ma è del tutto giocabile: la colonna e semiaperta e i due alfieri sono un compenso vero. Gioca ...Ad6, ...O-O, ...Te8 e ...f5.',
  'study.vs-trompowsky.s.1.them':
    'Il Bianco ha la struttura migliore e gioca c4, Cc3 e una lenta stretta. Sulla lunga distanza i pedoni contano più degli alfieri.',
  'study.vs-trompowsky.p.0.title': '2...Ce4, subito',
  'study.vs-trompowsky.p.0.detail':
    'Rifiuta i pedoni doppiati, attacca l\'alfiere e costringe il Bianco a muovere due volte lo stesso pezzo. Tutto quello che c\'è di buono in questa linea deriva da qui.',
  'study.vs-trompowsky.p.1.title': '...d5 e ...c5',
  'study.vs-trompowsky.p.1.detail':
    'Sostieni il cavallo con ...d5, poi colpisci il centro con ...c5. Senza pedone c bianco, d4 è difeso solo da pezzi.',
  'study.vs-trompowsky.p.2.title': '...Db6 che colpisce b2 e d4',
  'study.vs-trompowsky.p.2.detail':
    'Lo stesso doppio attacco che si usa contro il Londra, e per lo stesso motivo: l\'alfiere camposcuro ha lasciato l\'ala di donna.',
  'study.vs-trompowsky.p.3.title': 'La risorsa ...Da5+ contro f2-f3',
  'study.vs-trompowsky.p.3.detail':
    'Quando il Bianco gioca f3 per scacciare il cavallo, ...Da5+ arriva con tempo. Se copre con c3, il cavallo lo prende e vince materiale. Saperlo rende ingiocabile tutto il piano con f3.',
  'study.vs-trompowsky.k.0.why':
    'Dove sta il tuo cavallo. Sostenuto da un pedone in d5, nessun pedone bianco può rimuoverlo.',
  'study.vs-trompowsky.k.1.why':
    'Il pedone centrale bianco senza pedone c alle spalle. Il bersaglio di ...c5 e ...Db6.',
  'study.vs-trompowsky.k.2.why':
    'Quello che l\'alfiere in g5 o f4 ha abbandonato. ...Db6 è la mossa che lo rende importante.',
  'study.vs-trompowsky.k.3.why':
    'Il buco che crea f2-f3. Una donna o un cavallo che ci atterrano sono difficilissimi da rimuovere.',
  'study.vs-trompowsky.b.0.when':
    'Appena ...d5 sostiene il cavallo. È la mossa che pone la domanda a d4.',
  'study.vs-trompowsky.b.1.when': 'Quando vuoi una morsa sull\'ala di donna, esattamente come contro il Londra.',
  'study.vs-trompowsky.b.2.when': 'Nelle linee con i pedoni doppiati, per aprire la posizione alla coppia degli alfieri.',
  'study.vs-trompowsky.f.0.title': 'Permettere Axf6 per niente',
  'study.vs-trompowsky.f.0.detail':
    'Se giochi 2...d5 o 2...e6 e il Bianco prende e basta, hai regalato la struttura senza ricevere tempo in cambio. Contesta prima l\'alfiere.',
  'study.vs-trompowsky.f.1.title': 'Giocare ...g5 per intrappolare l\'alfiere',
  'study.vs-trompowsky.f.1.detail':
    'Sembra che vinca un pezzo. Dopo Ag3 Cxg3 hxg3 la tua ala di re è in rovina e la colonna h è aperta sul tuo re.',
  'study.vs-trompowsky.f.2.title': 'Ritirare il cavallo senza essere provocato',
  'study.vs-trompowsky.f.2.detail':
    'Il cavallo in e4 è il pezzo migliore della scacchiera. Riportalo a casa solo quando un pedone lo attacca davvero, e prima incassa i tempi gratis.',

  /* ------------------------------------------- Contro il Colle e lo Zukertort */
  'study.vs-colle.bigIdea':
    'Il Colle e lo Zukertort sono la stessa trappola con scenografie diverse: una piramide di pedoni dall\'aria modesta, un alfiere in d3 puntato su h7 e un cavallo in arrivo su e5. Poi il Bianco rompe con e3-e4 e la posizione esplode. C\'è esattamente una mossa che disinnesca tutto quanto, ed è ...Af5 alla terza mossa.',
  'study.vs-colle.feel':
    'Perfettamente pari e del tutto sicura, che è un ottimo risultato contro un sistema progettato per produrre un attacco gratis. Le partite si decidono con il normale gioco di mediogioco, non con la preparazione d\'apertura.',
  'study.vs-colle.s.0.name': 'La piramide del Colle',
  'study.vs-colle.s.0.shape': 'Pedoni bianchi in c3, d4 ed e3, cavalli in f3 e d2, alfiere in d3.',
  'study.vs-colle.s.0.you':
    'Porta l\'alfiere in f5 prima di ...e6, poi cambialo con quello di d3. Sparito l\'alfiere d\'attacco, la piramide è solo una posizione solida senza mordente.',
  'study.vs-colle.s.0.them':
    'Il Bianco vuole Ce5, Ad3, Dc2 oppure De2, e poi e3-e4 che apre tutto con i pezzi già puntati sul tuo re.',
  'study.vs-colle.s.1.name': 'Il doppio fianchetto dello Zukertort',
  'study.vs-colle.s.1.shape': 'La stessa piramide, ma con b2-b3 e Ab2 al posto di c2-c3.',
  'study.vs-colle.s.1.you':
    'Lotta per e5 invece che per le case bianche: ...Ad6, ...Cbd7 e un pedone in d5. All\'alfiere di b2 serve la grande diagonale aperta, quindi tienila chiusa.',
  'study.vs-colle.s.1.them':
    'Il Bianco gioca Ce5, f2-f4 e un sollevamento di torre. È un sistema d\'attacco vero, se lo lasci partire.',
  'study.vs-colle.p.0.title': '3...Af5, tutto l\'antidoto',
  'study.vs-colle.p.0.detail':
    'Una mossa. Porta l\'alfiere fuori dalla catena di pedoni e lo punta su d3. Tutto il resto della linea è normale sviluppo.',
  'study.vs-colle.p.1.title': 'Cambia in d3 senza esitare',
  'study.vs-colle.p.1.detail':
    'Perdi la coppia degli alfieri e togli il pezzo puntato su h7. È un ottimo cambio contro un sistema la cui unica idea è un attacco sull\'ala di re.',
  'study.vs-colle.p.2.title': 'Lotta per e5 con ...Ad6 e ...Cbd7',
  'study.vs-colle.p.2.detail':
    'Un cavallo in e5 sostenuto dai pedoni è ciò che fa funzionare il Colle. Due difensori della casa bastano a impedirlo del tutto.',
  'study.vs-colle.p.3.title': 'Rispondere a e3-e4 con ...dxe4 e ...c5',
  'study.vs-colle.p.3.detail':
    'Quando la rottura finalmente arriva, prendi e poi colpisci il centro. Senza alfiere in d3, aprire la posizione aiuta semplicemente chi è più sviluppato, e a quel punto sei tu.',
  'study.vs-colle.k.0.why': 'La casa dell\'alfiere e tutto l\'attacco. Cambiarlo lì è il senso della difesa.',
  'study.vs-colle.k.1.why': 'Dove atterra l\'attacco. Ogni tattica del Colle è Axh7+ in qualche forma.',
  'study.vs-colle.k.2.why': 'L\'avamposto. Due difensori e al Bianco non resta nessun sistema.',
  'study.vs-colle.k.3.why': 'La casa di rottura. Essere pronto a prendere lì trasforma il piano bianco in un problema per lui.',
  'study.vs-colle.b.0.when': 'Una volta cambiato l\'alfiere e messo al sicuro il re. Contesta d4 e libera la posizione.',
  'study.vs-colle.b.1.when':
    'Nelle linee dello Zukertort, dopo ...De7 e ...Cbd7. È la mossa che trasforma la parità in un vantaggio.',
  'study.vs-colle.b.2.when': 'Nelle linee tipo Slava dopo c2-c4. Più lenta ma molto solida.',
  'study.vs-colle.f.0.title': 'Giocare ...e6 prima di ...Af5',
  'study.vs-colle.f.0.detail':
    'L\'errore di cui si nutre tutto il sistema. Seppellisce l\'alfiere e regala gratis al Bianco lo schema del dono greco.',
  'study.vs-colle.f.1.title': 'Arroccare dentro l\'attacco',
  'study.vs-colle.f.1.detail':
    'Se l\'alfiere in d3 è ancora sulla scacchiera e un cavallo è diretto in e5, arroccare corto è una decisione, non una formalità. Cambia prima l\'alfiere.',
  'study.vs-colle.f.2.title': 'Ignorare la rottura e3-e4',
  'study.vs-colle.f.2.detail':
    'Non è una minaccia da scrollarsi di dosso. O prendi in e4 quando arriva, oppure assicurati che ...Ce4 e ...f5 l\'abbiano resa impossibile.',

  /* ---------------------------------------------- Contro il Blackmar-Diemer */
  'study.vs-blackmar-diemer.bigIdea':
    'Il Blackmar-Diemer è una pura scommessa sulla velocità: il Bianco dà un pedone per aprire la colonna f e puntare ogni pezzo su f7 prima che tu abbia arroccato. Non è corretto, e ogni valutazione pubblicata lo dice. Quello che lo rende pericoloso è che il Bianco ha visto le posizioni che ne escono cento volte e tu no. La risposta è prendere il pedone, rifiutare il secondo e mettere il re al sicuro.',
  'study.vs-blackmar-diemer.feel':
    'Scomoda per otto mosse e poi completamente vinta. Il pericolo sta tutto nella prima fase. Se conosci lo schema e lo giochi senza improvvisare, alla mossa quattordici sarai un sano pedone in più con il re al sicuro.',
  'study.vs-blackmar-diemer.s.0.name': 'Lo schema Euwe',
  'study.vs-blackmar-diemer.s.0.shape':
    'Pedoni neri in e6, f7, g7 e h7 con il re arroccato corto e un pedone in più; il Bianco ha pezzi in f3, g5 e d3 e la colonna f aperta.',
  'study.vs-blackmar-diemer.s.0.you':
    'Un pedone in più senza debolezze. Cambia pezzi, tieni h7 con ...h6 e all\'occorrenza ...Cbd7-f8, e colpisci il centro con ...c5.',
  'study.vs-blackmar-diemer.s.0.them':
    'Al Bianco serve che un sacrificio funzioni. Ogni cambio lo rende meno probabile, ed è per questo che semplificare è tutto il piano del Nero.',
  'study.vs-blackmar-diemer.p.0.title': 'Prendi in e4, poi in f3',
  'study.vs-blackmar-diemer.p.0.detail':
    'Accetta tutte e due le volte. Rifiutare lascia al Bianco un grande centro e l\'iniziativa e a te niente: il peggio di entrambi i mondi.',
  'study.vs-blackmar-diemer.p.1.title': '...e6, ...Ae7, arrocco',
  'study.vs-blackmar-diemer.p.1.detail':
    'Tre mosse e il gambetto è finito. Non serve niente di sofisticato: la posizione è vinta da chi completa lo sviluppo.',
  'study.vs-blackmar-diemer.p.2.title': 'Cambia le donne ogni volta che te lo offrono',
  'study.vs-blackmar-diemer.p.2.detail':
    'Un finale con un pedone in più contro un giocatore di gambetto è il risultato ideale. Ogni pezzo che esce fa contare di più il materiale.',
  'study.vs-blackmar-diemer.p.3.title': 'Contro 3.f3 senza Cc3, gioca ...e5',
  'study.vs-blackmar-diemer.p.3.detail':
    'Il Blackmar vero e proprio è confutato di netto: dxe5 Dxd1+ Rxd1 Cc6 e il Bianco non ha diritto di arrocco, non ha attacco e sta per perdere il pedone e5.',
  'study.vs-blackmar-diemer.k.0.why':
    'Ciò a cui punta ogni pezzo bianco. Arroccare corto lo toglie dalla linea di tiro.',
  'study.vs-blackmar-diemer.k.1.why':
    'Dove va il tuo pedone. Copre d5 e f5 insieme, che è gran parte della difesa.',
  'study.vs-blackmar-diemer.k.2.why':
    'Il pedone centrale bianco, e il pedone che non devi prendere con la donna: quella è la trappola Halosar.',
  'study.vs-blackmar-diemer.k.3.why':
    'Il secondo bersaglio una volta che il Bianco porta un alfiere in d3. ...h6 sostenuto da un cavallo è la risposta standard.',
  'study.vs-blackmar-diemer.b.0.when':
    'Una volta arroccato. Colpisce d4 e apre linee ai tuoi pezzi dopo che l\'attacco si è arenato.',
  'study.vs-blackmar-diemer.b.1.when':
    'Quando il Bianco arrocca lungo. I pedoni dell\'ala di donna arrivano più in fretta di qualsiasi cosa sull\'altra ala.',
  'study.vs-blackmar-diemer.b.2.when': 'Contro 3.f3, subito: è la confutazione, non una rottura.',
  'study.vs-blackmar-diemer.f.0.title': 'Prendere in d4 con la donna',
  'study.vs-blackmar-diemer.f.0.detail':
    'La trappola Halosar. Ae3 arriva con tempo e il Bianco sviluppa con minacce mentre il tuo re resta in e8. Un pedone basta e avanza.',
  'study.vs-blackmar-diemer.f.1.title': 'Provare a tenere il pedone con ...f5',
  'study.vs-blackmar-diemer.f.1.detail':
    'Rovina le case bianche attorno al tuo re esattamente dove il Bianco vuole attaccare. Restituisci il pedone in f3 e sviluppa.',
  'study.vs-blackmar-diemer.f.2.title': 'Fare il fianchetto con ...g6',
  'study.vs-blackmar-diemer.f.2.detail':
    'Giocabile, ma invita Ah6 e h4-h5, che è l\'attacco che il gambetto è fatto per produrre. Lo schema Euwe con ...e6 non dà niente al Bianco.',
  'study.vs-blackmar-diemer.f.3.title': 'Lasciare il re al centro una mossa di troppo',
  'study.vs-blackmar-diemer.f.3.detail':
    'Ogni idea bianca dipende da questo. Una volta che l\'alfiere raggiunge d3, arroccare è più urgente di qualunque mossa di sviluppo.',
}
