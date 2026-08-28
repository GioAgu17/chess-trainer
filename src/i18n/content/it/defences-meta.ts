import type { ContentDictionary } from '../../keys'

/** Le difese: nomi, sistemi, come riconoscerli, il piano avversario e la ricetta. */
export const defenceMeta: ContentDictionary = {
  /* ---------------------------------------------------------- Catalana */
  'vs-catalan-open.name': 'Catalana: prendi il pedone (Aperta)',
  'vs-catalan-open.system': 'Catalana',
  'vs-catalan-open.summary':
    'La Catalana Aperta: il Nero prende in c4 e costringe il Bianco a perdere tempo per riprendersi il pedone, poi usa quei tempi per ...a6, ...b5 e ...Ab7. L\'alfiere in b7 risponde finalmente a quello in g2, e poi arriva la rottura ...c5.',
  'vs-catalan-open.tell':
    'Il Bianco gioca g2-g3 prima di sviluppare il cavallo in f3. L\'alfiere sta andando in g2 e da lì guarderà la tua ala di donna lungo la grande diagonale per tutta la partita.',
  'vs-catalan-open.theirPlan':
    'La Catalana è un\'apertura di donna con un fianchetto al posto di uno scontro. Il Bianco mette l\'alfiere in g2, arrocca e poi stringe: l\'alfiere batte su d5, c6, b7 e a8 tutta la partita, i pedoni c e d ti tolgono aria, e in cambio il Bianco non ha una debolezza da attaccare. Quasi nessun giocatore di Catalana sacrifica qualcosa: aspetta solo che tu finisca le mosse utili e poi rompe con e2-e4 o apre la colonna c. Il male è lento, ed è proprio per questo che è difficile da affrontare a orecchio.',
  'vs-catalan-open.recipe.0':
    'Prendi il pedone in c4 con 4...dxc4 e tienilo per qualche mossa. Non è ingordigia: costa tempo al Bianco riprenderselo, e ogni tempo speso su quel pedone è un tempo non speso a stringerti.',
  'vs-catalan-open.recipe.1':
    'Prosegui con ...Ae7 e arrocca. Non correre a difendere il pedone con ...b5 prima di aver messo il re al sicuro: tutti i trucchi con a4 e Ce5 hanno bisogno di un re al centro per funzionare.',
  'vs-catalan-open.recipe.2':
    'Quando il Bianco recupera il pedone con Dxc4, gioca ...b5 e ...Ab7. Adesso il tuo alfiere guarda indietro lungo la stessa diagonale di quello bianco e la posizione è in equilibrio.',
  'vs-catalan-open.recipe.3':
    'I pedoni in a6 e b5 non sono debolezze: sono spazio sull\'ala di donna e tolgono c4 e b5 ai pezzi bianchi.',
  'vs-catalan-open.recipe.4':
    'Punta alla rottura liberatoria ...c5. Quando arriva, l\'alfiere catalano morde sul granito e tu stai semplicemente pari.',
  'vs-catalan-open.temperament.name': 'Aperta',
  'vs-catalan-open.temperament.blurb':
    'Prendi il pedone e lo restituisci alle tue condizioni. Concreta, un po\' tagliente, e toglie al Bianco la stretta gratuita.',
  'vs-catalan-open.trap.catalan-hold-b5.name': 'Tenere il pedone una mossa di troppo',
  'vs-catalan-open.trap.catalan-hold-b5.point':
    'Dopo 5...b5 la catena sembra solida, ma a2-a4 la colpisce prima che il Nero abbia sviluppato un solo pezzo. Il Nero deve rispondere ...c6, e dopo axb5 cxb5 la colonna a è aperta, la torre in a8 guarda dritta quella bianca e Ce5 arriva su un buco. Prendi il pedone, ma restituiscilo quando il Bianco lo ha pagato.',

  'vs-catalan-closed.name': 'Catalana: tieni chiuso (Chiusa)',
  'vs-catalan-closed.system': 'Catalana',
  'vs-catalan-closed.summary':
    'La Catalana Chiusa: il Nero lascia il pedone in d5 come muro permanente sulla grande diagonale, sviluppa con ...Ae7, ...O-O, ...c6 e ...Cbd7, e solo dopo sceglie fra le rotture ...c5 ed ...e5. Solida, poca teoria e difficile da perdere in fretta.',
  'vs-catalan-closed.tell':
    'Lo stesso segnale della Catalana Aperta: g2-g3 prima di Cf3. Quello che cambia è la tua risposta: lasci il pedone in d5 invece di prendere in c4.',
  'vs-catalan-closed.theirPlan':
    'Identico alla Catalana Aperta: alfiere in g2, arrocco, e stretta sulle case bianche da a8 a d5 per tutta la partita. La differenza è quello che il Bianco può fare quando tu non prendi in c4. Con la tensione mantenuta, proverà a costruire con Dc2, Cbd2 ed e2-e4, oppure a cambiare in d5 e giocare contro un centro un po\' allentato. Non c\'è niente di forzato, ed è proprio per questo che senza un piano è così difficile da giocare.',
  'vs-catalan-closed.recipe.0':
    'Tieni il pedone in d5 e rifiuta di sciogliere la tensione. Un pedone in d5 è un muro davanti all\'alfiere di g2, e il muro è tutto il punto.',
  'vs-catalan-closed.recipe.1':
    'Sviluppa semplice: ...Ae7, arrocco, poi ...c6. Il pedone in c6 sostiene d5 per sempre e dà alla tua donna le case a5 e b6.',
  'vs-catalan-closed.recipe.2':
    'Gioca ...Cbd7 e non ...Cc6. Da d7 il cavallo sostiene sia ...c5 sia ...e5, e non blocca il tuo stesso pedone di c.',
  'vs-catalan-closed.recipe.3':
    'Poi scegli una rottura. ...b6 con ...Ab7 seguito da ...c5 è il piano paziente; ...dxc4 seguito da ...b5 è quello tagliente, se il Bianco lascia mai il pedone c4 senza custodia.',
  'vs-catalan-closed.recipe.4':
    'L\'unica cosa che non devi fare è andare alla deriva. Scegli una rottura, preparala e giocala: una Catalana Chiusa in cui il Nero non rompe mai è una Catalana Chiusa che il Nero perde lentamente.',
  'vs-catalan-closed.temperament.name': 'Chiusa',
  'vs-catalan-closed.temperament.blurb':
    'Costruisci un muro in d5 e prenditi tempo. Poca teoria e pochissimi modi di perdere in fretta, ma devi essere disposto a difendere e ad aspettare la tua rottura.',
  'vs-catalan-closed.trap.catalan-closed-passive.name': 'La stretta della Catalana di cambio',
  'vs-catalan-closed.trap.catalan-closed-passive.point':
    'Dopo cxd5 exd5 la posizione sembra innocua, ma se il Nero gioca con il pilota automatico il Bianco arriva a Db3 che colpisce b7 e d5 insieme, con Af4, Tc1 e l\'attacco di minoranza a seguire. Rispondere al cambio prima con ...c6, e far uscire l\'alfiere in f5 o g4 prima di giocare ...Cbd7, è quello che tiene la posizione comoda.',

  /* ------------------------------------------------------ Sistema Londra */
  'vs-london.name': 'Sistema Londra',
  'vs-london.system': 'Sistema Londra',
  'vs-london.summary':
    'Affronta il Londra con ...c5 e ...Db6, colpendo le due case che l\'alfiere in f4 si è lasciato alle spalle. Quando il Bianco offre il cambio delle donne con Db3, infila prima ...c4, riprendi in b6 con il pedone di a e gioca contro l\'ala di donna.',
  'vs-london.tell':
    'L\'alfiere esce in f4 prima che sia deciso qualsiasi altra cosa. Il Bianco giocherà e3, c3, Ad3, Cbd2, Cf3 e h3 quasi a prescindere da quello che fai tu.',
  'vs-london.theirPlan':
    'Il Londra è un sistema, non un\'apertura: il Bianco gioca le stesse sei mosse contro tutto, quindi chi lo gioca lo ha già fatto trecento volte e tu no. Lo schema è davvero buono: l\'alfiere è fuori dalla catena prima che e3 lo chiuda dentro, la struttura è solida, e il Bianco sogna Ce5, Ad3 e un attacco sull\'ala di re con Df3 e Tf1-f3. Non è pericoloso se prendi il centro sul serio. È pericolosissimo se ti limiti a spostare pezzi.',
  'vs-london.recipe.0':
    'Colpisci il centro subito con ...c5. L\'alfiere camposcuro del Londra ha lasciato l\'ala di donna, quindi d4 e b2 sono le due case che il Bianco ha indebolito in silenzio.',
  'vs-london.recipe.1':
    'Gioca ...Db6 per attaccare b2 e d4 nello stesso momento. È la mossa che i giocatori di Londra amano di meno, perché non c\'è un modo comodo di difendere b2.',
  'vs-london.recipe.2':
    'Se il Bianco risponde Db3 offrendo il cambio, gioca prima ...c4! Guadagnare il tempo prima che le donne se ne vadano è quello che trasforma una posizione pari in una piacevole.',
  'vs-london.recipe.3':
    'Dopo il cambio delle donne in b6, riprendi con il pedone di a. La colonna a semiaperta e la maggioranza sull\'ala di donna sono le tue risorse a lungo termine.',
  'vs-london.recipe.4':
    'Fai uscire l\'alfiere campochiaro in f5 prima che ...e6 lo chiuda dentro. Il giocatore di Londra vuole cambiarlo con Ad3: fagli spendere un tempo per farlo.',
  'vs-london.recipe.5':
    'Non prendere mai in b2 con la donna quando il Bianco ha giocato Cc3. Il pedone è avvelenato e Cb5 vince.',
  'vs-london.trap.london-poisoned-b2.name': 'Il pedone avvelenato in b2',
  'vs-london.trap.london-poisoned-b2.point':
    'Il pedone b2 sembra gratis dopo ...Db6, e contro quasi tutti gli ordini di mosse del Londra lo è quasi. Ma se il Bianco ha giocato Cc3 e ti lascia prendere, Cb5 intrappola la donna: le minacce di Tb1 e Cc7+ arrivano insieme e il Nero perde la donna o viene mattato sull\'ala di donna. Attacca b2, ma prendilo solo quando il Bianco è costretto a difenderlo.',
  'vs-london.trap.london-nh5.name': 'Vincere la coppia degli alfieri con ...Ch5',
  'vs-london.trap.london-nh5.point':
    'Una volta che il Bianco ha impegnato il cavallo in d2, l\'alfiere in f4 ha una casa sola. ...Ch5 costringe Ag3, e prendere in g3 ti regala la coppia degli alfieri senza rovinare niente di tuo. Vale la pena saperlo proprio perché tutto il Londra dipende da quell\'alfiere.',

  /* --------------------------------------------------------- Trompowsky */
  'vs-trompowsky.name': 'Attacco Trompowsky',
  'vs-trompowsky.system': 'Trompowsky',
  'vs-trompowsky.summary':
    'Affronta la Trompowsky con 2...Ce4, rifiutando i pedoni doppiati e guadagnando tempo sull\'alfiere. Poi prendi il centro con ...d5 e ...c5 e premi su d4 e b2, le case che il Bianco ha lasciato senza sostegno di pedoni.',
  'vs-trompowsky.tell':
    'L\'alfiere non inchioda niente e attacca il tuo cavallo alla seconda mossa. Il Bianco vuole prendere in f6 e darti pedoni doppiati prima che tu abbia deciso che apertura giocare.',
  'vs-trompowsky.theirPlan':
    'La Trompowsky è un bluff travestito da apertura. Il Bianco minaccia di doppiarti i pedoni alla seconda mossa, e se glielo lasci fare alle sue condizioni passi la partita con una struttura brutta e nessun piano. Rispondere con 2...Ce4 rifiuta il cambio, guadagna un tempo sull\'alfiere e lascia il Bianco senza il pedone di c a sostenere il centro.',
  'vs-trompowsky.recipe.0':
    'Gioca 2...Ce4 subito. Attacca l\'alfiere, rifiuta i pedoni doppiati e chiede al Bianco di giustificare la seconda mossa.',
  'vs-trompowsky.recipe.1':
    'Dopo che l\'alfiere si ritira in f4, prendi il centro con ...d5 e poi colpisci d4 con ...c5. Il Bianco non ha un pedone di c che lo sostenga.',
  'vs-trompowsky.recipe.2':
    'Prosegui con ...Cc6 e ...Db6. La donna in b6 colpisce b2 e d4 nello stesso momento, esattamente come contro il Londra.',
  'vs-trompowsky.recipe.3':
    'Porta l\'alfiere campochiaro in f5 prima di giocare ...e6. Nella Trompowsky si decide tutto su chi ha i pezzi leggeri migliori.',
  'vs-trompowsky.recipe.4':
    'Se il Bianco gioca f2-f3 per cacciare il cavallo, ricordati prima la risorsa ...Da5+: lo scacco guadagna tempo e può raccogliere materiale se il Bianco blocca distrattamente con c2-c3.',
  'vs-trompowsky.trap.tromp-qa5-nxc3.name': 'Il colpo ...Da5+ e ...Cxc3',
  'vs-trompowsky.trap.tromp-qa5-nxc3.point':
    'Se il Bianco gioca f2-f3 per cacciare il cavallo, ...Da5+ arriva con tempo e c2-c3 è il blocco naturale, ma appende tutto. ...Cxc3! guadagna materiale, perché il cavallo è difeso dalla donna lungo la diagonale a5-e1 e prenderlo lascia cadere il pedone b2 e il pedone d4 con scacco. È la singola tattica più utile da conoscere nella Trompowsky.',
  'vs-trompowsky.trap.tromp-bxf6.name': 'Pedoni doppiati regalati',
  'vs-trompowsky.trap.tromp-bxf6.point':
    'Rispondere a 2.Ag5 con 2...d5 non perde, ma lascia che il Bianco prenda in f6 gratis. Il Nero ottiene la coppia degli alfieri, il Bianco una struttura definitivamente migliore e mano libera con c2-c4. La morale: contesta l\'alfiere prima che possa cambiarsi alle sue condizioni.',

  /* ----------------------------------------------------- Colle/Zukertort */
  'vs-colle.name': 'Colle e Zukertort',
  'vs-colle.system': 'Colle / Zukertort',
  'vs-colle.summary':
    'Sia il Colle sia lo Zukertort dipendono da un alfiere in d3 puntato su h7. Fai uscire il tuo alfiere in f5 alla terza mossa, cambialo, e l\'attacco non arriva mai: poi ...e6, ...Ad6 e ...c5 danno una posizione comodissima.',
  'vs-colle.tell':
    'Il Bianco gioca e2-e3 prima di sviluppare l\'alfiere camposcuro. Quell\'alfiere adesso è chiuso dietro i suoi pedoni, e il Bianco ha annunciato in silenzio uno schema lento invece di una lotta per il centro.',
  'vs-colle.theirPlan':
    'I due sistemi costruiscono la stessa piramide - pedoni in d4 ed e3, cavalli in f3 e d2, alfiere in d3 - e poi la fanno saltare con e3-e4 nel momento in cui ti fa meno comodo. Il Colle gioca c2-c3 e tiene l\'alfiere camposcuro per dopo; lo Zukertort gioca b2-b3 e Ab2, puntando il secondo alfiere su e5 e sul tuo re. In entrambi i casi l\'attacco è vero: l\'alfiere in d3 più un cavallo in e5 è lo schema classico del dono greco, e i giocatori di circolo ci perdono ogni giorno. Quello che tiene insieme tutto è quell\'alfiere campochiaro.',
  'vs-colle.recipe.0':
    'Gioca ...Af5 alla terza mossa, prima di ...e6. È la mossa più importante di tutta la linea: l\'alfiere bianco in d3 è l\'attaccante, e il tuo in f5 è l\'unico pezzo che può neutralizzarlo.',
  'vs-colle.recipe.1':
    'Cambia volentieri in d3. Perdere la coppia degli alfieri non conta niente quando il pezzo che togli è quello puntato su h7.',
  'vs-colle.recipe.2':
    'Solo dopo che l\'alfiere è uscito (o è stato cambiato) gioca ...e6. Poi ...Ad6, ...c6 e arrocco, e hai una posizione perfettamente sana senza debolezze.',
  'vs-colle.recipe.3':
    'Lotta per la casa e5. Un cavallo bianco in e5 sostenuto dai pedoni è tutto l\'attacco; un alfiere nero in d6 e un cavallo che arriva in d7 gliela tolgono.',
  'vs-colle.recipe.4':
    'Quando il Bianco gioca finalmente e3-e4, rispondi ...dxe4 e poi colpisci il centro con ...c5. La piramide viene giù e i tuoi pezzi sono quelli messi meglio.',
  'vs-colle.trap.colle-greek-gift.name': 'Il dono greco del Colle',
  'vs-colle.trap.colle-greek-gift.point':
    'Questa è la partita che il Colle è fatto per produrre, ed è il motivo per cui ...e6 prima di ...Af5 è un\'idea così cattiva. Quando un alfiere arriva sulla diagonale b1-h7 con un cavallo pronto per g5 e una donna per h5, il dono greco è sulla scacchiera: l\'alfiere prende in h7, il re prende, e il cavallo arriva con scacco. Se in una posizione precisa vinca davvero è un conto da fare - il punto è che il Nero non dovrebbe mai trovarsi a doverlo fare. Far uscire presto l\'alfiere campochiaro toglie di mezzo tutto lo schema.',
  'vs-colle.trap.colle-trade-on-d3.name': 'Uccidere l\'attacco alla quarta mossa',
  'vs-colle.trap.colle-trade-on-d3.point':
    'Non è una tattica, ma vale la pena allenarla finché non diventa automatica. Nel momento in cui il Bianco mette l\'alfiere in d3, tu lo prendi. Il Bianco riprende con la donna, l\'intero schema d\'attacco sull\'ala di re svanisce, e la posizione che resta è perfettamente pari con un buon gioco per il Nero.',

  /* ------------------------------------------------------ Blackmar-Diemer */
  'vs-blackmar-diemer.name': 'Gambetto Blackmar-Diemer',
  'vs-blackmar-diemer.system': 'Blackmar-Diemer e i gambetti di donna precoci',
  'vs-blackmar-diemer.summary':
    'Prendi il pedone, sviluppa con ...Cf6 e non restituire altro. Lo schema Euwe con ...e6, ...Ae7 e arrocco rapido lascia il Bianco con un pedone in meno e nessun attacco, che è esattamente la partita che un giocatore di gambetto non vuole.',
  'vs-blackmar-diemer.tell':
    'Un secondo pedone centrale offerto alla seconda mossa. Se lo prendi, il Bianco giocherà Cc3 e f3 per aprire linee invece di riprenderselo.',
  'vs-blackmar-diemer.theirPlan':
    'Il Bianco regala un pedone per spalancare la colonna f e la colonna e prima che tu abbia arroccato. Tutto il gambetto vive di velocità: Cc3, f3, Cxf3, Ad3 o Ac4, De2 e O-O-O, e poi tutto punta su f7 e h7 mentre il tuo re sta ancora decidendo dove andare ad abitare. Chi gioca il Blackmar-Diemer conosce i suoi schemi d\'attacco a memoria e conta sul fatto che tu difenda a orecchio. Il gambetto non è corretto: è solo veloce.',
  'vs-blackmar-diemer.recipe.0':
    'Prendi il pedone in e4. Rifiutare regala al Bianco un centro libero e l\'iniziativa lo stesso: tanto vale difendersi con un pedone in più.',
  'vs-blackmar-diemer.recipe.1':
    'Rispondi a 3.Cc3 con ...Cf6. Sviluppa, copre d5 e ferma sul nascere i trucchi sulla colonna e.',
  'vs-blackmar-diemer.recipe.2':
    'Quando il Bianco gioca f3, prendi in f3 e lascia riprendere al cavallo. Non provare a tenere un secondo pedone: uno basta e avanza.',
  'vs-blackmar-diemer.recipe.3':
    'Poi lo schema Euwe: ...e6, ...Ae7 e arrocco. Qui solido batte furbo; quando il re è al sicuro, il pedone in più si vince da solo.',
  'vs-blackmar-diemer.recipe.4':
    'Non prendere il pedone d4 con la donna. La trappola Halosar punisce esattamente quello, e non ce n\'è nessun bisogno quando sei già in vantaggio di un pedone.',
  'vs-blackmar-diemer.recipe.5':
    'Se il Bianco gioca 3.f3 senza Cc3, rispondi ...e5! Il centro si apre mentre è il re bianco quello rimasto in mezzo.',
  'vs-blackmar-diemer.trap.bdg-halosar.name': 'La trappola Halosar',
  'vs-blackmar-diemer.trap.bdg-halosar.point':
    'L\'ingordo 5...Dxd4 sembra vincente: un secondo pedone e la donna bianca fuori posizione. Poi arriva Ae3! con tempo, la donna deve scappare in g4, e dopo Df2, Cb5 e Td1 il Bianco attacca con tutti i pezzi mentre il re nero è ancora in e8. Sei già in vantaggio di un pedone dopo il gambetto: prenderne un secondo costa la partita.',
  'vs-blackmar-diemer.trap.bdg-blackmar-e5.name': 'Punire il 3.f3 immediato',
  'vs-blackmar-diemer.trap.bdg-blackmar-e5.point':
    'Contro il Gambetto Blackmar vero e proprio (3.f3 senza Cc3), ...e5! è la risposta più convincente. Prendere il secondo pedone va bene lo stesso, ma il colpo al centro è quello che chiude la partita come contesa: dopo dxe5 Dxd1+ Rxd1 Cc6 le donne sono fuori, il Bianco ha perso l\'arrocco e il pedone in e5 cade alla mossa dopo. Un gambetto senza attacco e senza pedone è semplicemente una partita persa.',
}
