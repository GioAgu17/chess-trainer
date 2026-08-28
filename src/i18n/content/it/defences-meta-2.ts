import type { ContentDictionary } from '../../keys'

/** Le difese contro 1.e4 e contro le aperture di fianchetto. */
export const defenceMeta2: ContentDictionary = {
  /* ------------------------------------------------------ Gambetto di Re */
  'vs-kings-gambit.name': 'Gambetto di Re',
  'vs-kings-gambit.system': 'Gambetto di Re',
  'vs-kings-gambit.summary':
    'Rifiuta il Gambetto di Re con 2...Ac5. L\'alfiere prende la diagonale che 2.f4 ha appena aperto, il Bianco non può mai prendere in e5 per via di ...Dh4+, e uno sviluppo semplice con ...d6, ...Cf6 e ...Ag4 ti lascia la struttura migliore.',
  'vs-kings-gambit.tell':
    'Il pedone f esce alla seconda mossa. Il Bianco offre un pedone per aprire la colonna f e costruire un grande centro con d4.',
  'vs-kings-gambit.theirPlan':
    'Il Bianco regala il pedone f per il centro e per la colonna f. Se prendi, il Bianco gioca Cf3 per fermare lo scacco in h4, poi d4, Ac4 e O-O, e all\'improvviso c\'è una torre in f1 puntata su f7 con il tuo re ancora in e8. Il gambetto ha una fama temibile e in parte se la merita, ma solo quando il Nero accetta e poi difende male. Il costo nascosto di 2.f4 è che la diagonale da a7 a g1 è adesso spalancata, con il re seduto in fondo.',
  'vs-kings-gambit.recipe.0':
    'Rifiuta con 2...Ac5. L\'alfiere occupa la diagonale appena aperta e, cosa decisiva, il Bianco non può più arroccare comodamente corto né mangiare in e5.',
  'vs-kings-gambit.recipe.1':
    'Ricordati perché 3.fxe5 è impossibile: ...Dh4+ vince sul colpo. È quella singola tattica a far funzionare tutta la linea.',
  'vs-kings-gambit.recipe.2':
    'Prosegui con ...d6, ...Cf6, ...Cc6 e ...Ag4. Sviluppo semplice, zero teoria, e i problemi li deve risolvere il Bianco.',
  'vs-kings-gambit.recipe.3':
    'Cambia in f3 quando il Bianco gioca h3. Togliere il cavallo lascia la casa d4 morbida per sempre e l\'ala di re bianca un po\' allentata.',
  'vs-kings-gambit.recipe.4':
    'Il cavallo appartiene a d4. Da lì colpisce c2 e f3 e nessun pedone può più cacciarlo.',
  'vs-kings-gambit.recipe.5':
    'Non aprire il centro finché i pezzi bianchi sono più attivi dei tuoi. Tieni il pedone in e5, tieni la tensione, e lascia che il pedone f4 indebolito diventi un problema a lungo termine.',
  'vs-kings-gambit.trap.kg-qh4.name': 'Perché fxe5 perde',
  'vs-kings-gambit.trap.kg-qh4.point':
    'Dopo 2...Ac5 il pedone e5 è intoccabile. 3.fxe5?? Dh4+ e il Bianco deve bloccare con g3, quando ...Dxe4+ raccoglie il pedone e poi la torre in h1. È tutta la ragione per cui l\'alfiere va in c5 e non altrove, e vale la pena saperla a memoria: i giocatori di circolo si mangiano quel pedone in continuazione.',
  'vs-kings-gambit.trap.kg-early-check.name': 'Lo scacco sbagliato',
  'vs-kings-gambit.trap.kg-early-check.point':
    'Se hai accettato il gambetto, il naturalissimo ...Dh4+ è un errore: il Bianco gioca semplicemente Rf1 e, pur avendo perso l\'arrocco, il re bianco sta benissimo mentre la donna nera diventa un bersaglio per Cf3, g2-g3 e Tg1, un tempo dopo l\'altro. Gli scacchi sono buoni solo quando ottengono qualcosa.',

  /* ------------------------------------------------------------ Scozzese */
  'vs-scotch.name': 'Partita Scozzese',
  'vs-scotch.system': 'Scozzese',
  'vs-scotch.summary':
    'Affronta la Scozzese con 4...Ac5 e lo schema classico ...Df6, ...Cge7, ...Ce5 e ...Dg6. Il Nero tiene sotto controllo il pedone centrale in più, sviluppa con tempo a ogni mossa e arriva a un mediogioco perfettamente equilibrato.',
  'vs-scotch.tell':
    'Il Bianco rompe al centro alla terza mossa invece di giocare Ab5 o Ac4. La tensione si scioglie subito e la partita si apre immediatamente.',
  'vs-scotch.theirPlan':
    'Il Bianco cambia il pedone d contro il tuo pedone e per aprire il centro prima che tu abbia sviluppato un solo pezzo leggero oltre al cavallo. Il cavallo in d4 sta in mezzo alla scacchiera, la colonna e può aprirsi, e il Bianco vuole Cxc6 seguito da e4-e5 per guadagnare spazio e ricacciare indietro il tuo cavallo. È un\'apertura rispettabilissima e con denti veri: il punto è che è anche completamente pari se sai dove vanno i tuoi pezzi.',
  'vs-scotch.recipe.0':
    'Rispondi a 4.Cxd4 con ...Ac5, che colpisce il cavallo e prende la diagonale a7-g1 prima che il Bianco possa giocare Ae3 in comodità.',
  'vs-scotch.recipe.1':
    'Prosegui con ...Df6. È insolito far uscire la donna così presto, ma qui colpisce d4 una seconda volta e preme su f2, ed è la linea principale per un motivo.',
  'vs-scotch.recipe.2':
    'Sviluppa il cavallo di re in e7 e non in f6. Da e7 sostiene la donna, non blocca niente e punta a g6 o a c6.',
  'vs-scotch.recipe.3':
    'La manovra ...Cc6-e5 colpisce c4 e l\'alfiere bianco. È la mossa che fa funzionare tutto lo schema.',
  'vs-scotch.recipe.4':
    'Chiudi con ...Dg6, che attacca e4 e g2 insieme. Il Bianco deve fare una concessione e la posizione è in equilibrio.',
  'vs-scotch.recipe.5':
    'Contro il Gambetto Scozzese (4.Ac4), rispondi ...Ac5 e ...Cf6, e quando il Bianco spinge e4-e5 colpisci subito con ...d5.',
  'vs-scotch.trap.scotch-gambit-d5.name': 'Punire la spinta del Gambetto Scozzese',
  'vs-scotch.trap.scotch-gambit-d5.point':
    'Nel Gambetto Scozzese, il naturalissimo 5.e5 che attacca il cavallo incontra ...d5! Il pedone non forchetta niente ma colpisce l\'alfiere in c4 e blocca l\'attacco nello stesso momento; dopo exf6 dxc4 il Nero esce con un pedone in più e una posizione sana. Ricordalo come la risposta standard a qualsiasi spinta e4-e5 che attacchi un cavallo in f6 mentre un alfiere sta in c4.',
  'vs-scotch.trap.scotch-qh4.name': 'L\'uscita prematura della donna',
  'vs-scotch.trap.scotch-qh4.point':
    'Attaccare e4 con la donna sembra allettante perché il cavallo bianco ha lasciato l\'ala di donna. Non lo è: il Bianco ha più di una buona risposta, e la più diretta è Cb5, quando Cxc7+ è in arrivo e ...Dxe4+ Ae3 lascia il re nero bloccato in d8 mentre ogni pezzo bianco sviluppa con tempo. Qualunque mossa scelga il Bianco, la donna è un cattivo attaccante alla quarta mossa.',

  /* ------------------------------------------------------------ Viennese */
  'vs-vienna.name': 'Partita Viennese',
  'vs-vienna.system': 'Viennese',
  'vs-vienna.summary':
    'Rispondi alla Viennese con 2...Cf6 e, quando arriva il gambetto con 3.f4, colpisci al centro con ...d5 invece di prendere. Il cavallo si piazza in e4 e l\'attacco bianco non parte mai.',
  'vs-vienna.tell':
    'Il cavallo di donna esce prima di quello di re. Il Bianco tiene libero il pedone f in modo che f2-f4 arrivi con il centro già difeso.',
  'vs-vienna.theirPlan':
    'La Viennese è un Gambetto di Re con la sicura inserita. Giocando prima Cc3 il Bianco difende e4 e può poi giocare f2-f4 senza concedere ...Dh4+. Se il Nero risponde con il pilota automatico ...Cc6 e ...Ac5, il Bianco ottiene f4, fxe5 e un centro forte con l\'attacco in regalo. C\'è anche una linea sgradevole con l\'alfiere - 3.Ac4 - costruita interamente sul trucco 3...Cxe4 4.Dh5!, che guadagna materiale in un modo che prende in castagna quasi tutti una volta.',
  'vs-vienna.recipe.0':
    'Gioca 2...Cf6. Sviluppa, attacca e4 e fa sì che f2-f4 possa sempre essere affrontato con il contraccolpo al centro.',
  'vs-vienna.recipe.1':
    'Quando il Bianco gioca 3.f4, rispondi ...d5! e non ...exf4: è la rottura centrale a confutare il gambetto, non l\'accettazione.',
  'vs-vienna.recipe.2':
    'Dopo fxe5 Cxe4 il tuo cavallo sta magnificamente in e4 e il Bianco non ha un modo semplice di spostarlo.',
  'vs-vienna.recipe.3':
    'Prosegui con ...Ae7, arrocco e poi ...f5: prendere en passant va benissimo per te, e se il Bianco rifiuta, il cavallo in e4 resta un ospite permanente.',
  'vs-vienna.recipe.4':
    'Contro 3.Ac4 NON prendere in e4. Gioca ...Cc6 e poi ...Ca5 per cambiare quell\'alfiere, che è il pezzo su cui si regge tutta la linea.',
  'vs-vienna.recipe.5':
    'Contro 3.g3, gioca ...d5 subito. Il Bianco ha speso una mossa sul fianchetto e non si può permettere di lasciare stare il centro.',
  'vs-vienna.trap.vienna-frankenstein.name': 'La trappola Frankenstein-Dracula',
  'vs-vienna.trap.vienna-frankenstein.point':
    'Prendere il pedone in e4 sembra una mossa gratis perché il cavallo in c3 è inchiodato a niente, ma arriva Dh5! che colpisce f7 e il cavallo insieme. Il Nero deve giocare ...Cd6 e dopo Ab3 il Bianco ha un vantaggio di sviluppo e un\'iniziativa mostruosa, oppure il Nero perde materiale sul colpo. Contro 3.Ac4 il piano corretto è ...Cc6 e ...Ca5, cambiando l\'alfiere pericoloso invece di raccogliere un pedone.',
  'vs-vienna.trap.vienna-d5-break.name': 'La confutazione con ...d5',
  'vs-vienna.trap.vienna-d5-break.point':
    'Il Gambetto Viennese funziona solo se il Nero prende in f4. Rispondere a 3.f4 con ...d5! ribalta il tavolo: il pedone e4 è attaccato due volte, e dopo fxe5 Cxe4 il Nero ha un cavallo in mezzo alla scacchiera, una struttura sana e nessun attacco da difendere. Imparalo come un riflesso: al colpo sull\'ala si risponde al centro.',

  /* ------------------------------------------------------ Danese/Göring */
  'vs-danish-goring.name': 'Gambetti Danese e Göring',
  'vs-danish-goring.system': 'Gambetto Danese / Göring',
  'vs-danish-goring.summary':
    'Non prendere il secondo pedone. Rispondi a 3.c3 con ...d5, restituisci subito il pedone e sviluppa con ...Cc6, ...Ag4 e ...Ab4+. Il Bianco si ritrova una posizione simmetrica con un pedone debole invece dell\'attacco che aveva pagato.',
  'vs-danish-goring.tell':
    'Il Bianco offre il pedone di c per riprendere in d4 con un pedone invece che con un pezzo. Se prendi due volte, il Bianco finisce con due alfieri che spazzano c4 e b2 e nessun pedone al centro.',
  'vs-danish-goring.theirPlan':
    'Il Danese è uno dei gambetti d\'attacco più antichi che esistano. Il Bianco regala un pedone, spesso due, per avere gli alfieri in c4 e b2 puntati su f7 e g7 con il tuo re ancora in e8. Ogni giocatore di Danese conosce a memoria gli schemi d\'attacco che ne escono; quasi nessuno di quelli che lo affrontano li conosce. Quello che il Bianco non ha è un centro: dopo due catture in c3 e b2 non c\'è più un solo pedone bianco vicino al centro, ed è quella la chiave di tutto.',
  'vs-danish-goring.recipe.0':
    'Rifiuta. Rispondi a 3.c3 con ...d5!, restituendo subito il pedone per aprire la posizione mentre il Bianco non è pronto.',
  'vs-danish-goring.recipe.1':
    'Dopo exd5 Dxd5 la donna sta al centro ed è al sicuro: non c\'è nessun Cc3 a scacciarla, perché il pedone di c è andato in c3.',
  'vs-danish-goring.recipe.2':
    'Lascia che il Bianco riprenda il pedone in d4: va benissimo. Tu hai sviluppo e nessuna debolezza, e il Bianco non ha più nessun gambetto.',
  'vs-danish-goring.recipe.3':
    'Sviluppa con ...Cc6 e ...Ag4, inchiodando il cavallo che tiene insieme d4.',
  'vs-danish-goring.recipe.4':
    'Lo scacco in b4 è il punto di tutta la linea: costringe Cc3, e poi ...Axc3+ lascia il Bianco con i pedoni doppiati e un d4 debole.',
  'vs-danish-goring.recipe.5':
    'Se mai accetti il gambetto, ricordati la Difesa Schlechter: restituisci il materiale con ...d5 nel momento in cui il Bianco sviluppa un alfiere.',
  'vs-danish-goring.trap.danish-schlechter.name': 'La Difesa Schlechter',
  'vs-danish-goring.trap.danish-schlechter.point':
    'Se prendi entrambi i pedoni, questa è la via d\'uscita. ...d5! restituisce un pedone per bloccare l\'alfiere in c4 e aprire la tua posizione. Dopo Axd5 Cf6 sviluppi con tempo, arrocchi, e il Bianco resta con due alfieri e niente da attaccare. Prendere materiale contro un gambetto va benissimo, purché tu conosca la mossa che lo restituisce.',
  'vs-danish-goring.trap.danish-greedy.name': 'Un pedone di troppo',
  'vs-danish-goring.trap.danish-greedy.point':
    'Due pedoni in più e una naturale mossa di sviluppo sembrano un ottimo risultato. Non lo sono: e4-e5 colpisce il cavallo, e dopo ...Cd5 o ...De7 il Bianco gioca O-O e Te1 con ogni pezzo puntato sul re nero. Il problema non è il materiale: è sviluppare verso l\'attacco bianco invece che lontano da esso.',

  /* -------------------------------------------------------------- Inglese */
  'vs-english.name': 'Apertura Inglese',
  'vs-english.system': 'Inglese',
  'vs-english.summary':
    'Affronta l\'Inglese con ...e5, trattandola come una Siciliana con un tempo in meno per il Bianco. Sviluppa con ...Cf6 e ...Cc6, rompi con ...d5, e ritira il cavallo in b6: un pedone centrale sano e nessuna debolezza bastano e avanzano.',
  'vs-english.tell':
    'Un pedone di fianchetto alla prima mossa. Il Bianco non rivendica il centro con i pedoni: il piano è controllare d5 di lato con c4, Cc3 e un alfiere in g2.',
  'vs-english.theirPlan':
    'L\'Inglese è una Siciliana con una mossa in più. Il Bianco lotta per d5 dall\'ala, fianchetta in g2 e aspetta che sia tu a scoprirti. Chi la gioca si trova a suo agio nelle posizioni lente di manovra ed è contentissimo di trasporre in un Gambetto di Donna o in una Catalana appena gliene dai l\'occasione. L\'unica cosa che il Bianco non ha fatto è mettere un pedone al centro, ed è esattamente lì che devi guardare.',
  'vs-english.recipe.0':
    'Rispondi a 1.c4 con ...e5. È la Siciliana a colori invertiti, ed essere quello con il pedone in più al centro vale più del tempo in più che ha il Bianco.',
  'vs-english.recipe.1':
    'Sviluppa con ...Cf6 e ...Cc6, e poi rompi con ...d5 al primo momento buono. Riuscire a giocare ...d5 è tutta la partita.',
  'vs-english.recipe.2':
    'Dopo cxd5 Cxd5, ritira il cavallo in b6 invece di cambiare in c3. Da b6 controlla c4 e d5 e sostiene l\'ala di donna.',
  'vs-english.recipe.3':
    'Completa con ...Ae7 e arrocco. Niente di speciale: la tua struttura è la più sana e non hai debolezze.',
  'vs-english.recipe.4':
    'Se il Bianco gioca 2.Cf3 attaccando il pedone e, spingi oltre con ...e4. Il cavallo deve andare in d4 o g5 e tu guadagni tempo.',
  'vs-english.recipe.5':
    'Non lasciare che il Bianco ottenga d2-d4 gratis. Rispondi con ...exd4 e poi ...Ab4, inchiodando il cavallo che ha ripreso.',
  'vs-english.trap.english-e4-fork.name': 'Il ...e4 prematuro',
  'vs-english.trap.english-e4-fork.point':
    'Spingere ...e4 per guadagnare spazio incontra Cg5, quando il pedone è attaccato due volte e difeso da niente. Se poi il Nero si spaventa con ...Dxg5, Axe4 forchetta il cavallo in c6 e la torre in a8. La lezione è più generale della trappola: appena la grande diagonale si apre, un alfiere in g2 vede a8, e ogni pezzo scoperto sull\'ala di donna diventa una tattica.',
  'vs-english.trap.english-nb6.name': 'Ritirati in b6, non cambiare',
  'vs-english.trap.english-nb6.point':
    'Non è una tattica, ma è la mossa che decide tutta l\'apertura. Cambiare in c3 apre la colonna b e regala all\'alfiere bianco la grande diagonale. Ritirarsi in b6 tiene la posizione chiusa sulle case bianche, difende c4 e d5, e lascia il Bianco con un cavallo in c3 che non ha niente da fare.',

  /* ----------------------------------------------------------------- Réti */
  'vs-reti.name': 'Apertura Réti',
  'vs-reti.system': 'Réti',
  'vs-reti.summary':
    'Rispondi alla Réti con ...d5 ed ...e6, tenendo il centro e rifiutando il pedone del gambetto. Poi ...Cf6, ...Ae7, arrocco e ...c5 danno una struttura solidissima contro cui ogni trasposizione della Réti va a sbattere.',
  'vs-reti.tell':
    'Il cavallo esce per primo e poi il pedone di c attacca il tuo centro di lato. Il Bianco fianchetterà in g2 e giocherà contro il tuo pedone d5 da lontano.',
  'vs-reti.theirPlan':
    'La Réti è una partita di attesa. Il Bianco sviluppa in modo flessibile, tiene aperte tutte le trasposizioni e attacca il tuo centro con i pezzi invece che con i pedoni. L\'alfiere in g2, il pedone in c4 e più tardi b2-b3 con Ab2 puntano tutti alla stessa cosa: il tuo pedone in d5 e la grande diagonale che ci sta dietro. Chi gioca la Réti è felice di trasporre in una Catalana, in un\'Inglese o in un Gambetto di Donna a seconda di quello che fai, quindi il problema pratico è scegliere uno schema che sia buono contro tutte e tre.',
  'vs-reti.recipe.0':
    'Sostieni d5 con ...e6. Non è la mossa più ambiziosa, ma rende il centro permanente e tiene sana ogni struttura.',
  'vs-reti.recipe.1':
    'Non prendere il pedone in c4. A differenza della Catalana il Bianco non ha impegnato il pedone d, quindi ...dxc4 seguito da ...b5 finisce dritto contro a4 e b3.',
  'vs-reti.recipe.2':
    'Sviluppa con naturalezza: ...Cf6, ...Ae7, arrocco. Non c\'è niente da temere e niente da imparare a memoria.',
  'vs-reti.recipe.3':
    'Poi prenditi spazio con ...c5. Con pedoni in c5, d5 ed e6 i pezzi bianchi non hanno più niente da attaccare e il centro più solido è il tuo.',
  'vs-reti.recipe.4':
    'Chiudi con ...Cc6 e ...b6, e la posizione è una comoda Indiana di Donna con un pizzico di solidità in più.',
  'vs-reti.recipe.5':
    'Se il Bianco gioca l\'Attacco Indiano di Re con 2.g3, colpisci il centro con ...c6 e ...Ag4: una volta che l\'alfiere campochiaro è fuori dalla catena non hai più nessun problema.',
  'vs-reti.trap.reti-gambit-b5.name': 'La trappola del Gambetto Réti',
  'vs-reti.trap.reti-gambit-b5.point':
    'Prendere il pedone in c4 e provare a tenerlo con ...b5 è il modo classico di perdere una partita contro la Réti. a4! colpisce la catena, e dopo axb5 cxb5 b3! la struttura crolla: Axb5+ raccoglie un pezzo, la colonna a è aperta contro la tua torre e il Bianco vince entro la settima mossa. È esattamente per questo che la ricetta dice ...e6 e non ...dxc4.',
  'vs-reti.trap.reti-c5-break.name': 'La conquista di spazio con ...c5',
  'vs-reti.trap.reti-c5-break.point':
    'Non è una tattica, è un\'abitudine da costruire. Una volta arroccato, ...c5 è la mossa che trasforma uno schema passivo in uno buono. Toglie d4 ai pezzi bianchi, dà alla tua donna le case c7 e b6, e fa sì che l\'alfiere in g2 guardi un muro di pedoni per il resto della partita.',
}
