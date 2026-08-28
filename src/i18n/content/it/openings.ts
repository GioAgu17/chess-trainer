import type { ContentDictionary } from '../../keys'

/** Le aperture che scegli tu: nomi, riassunti e trappole. */
export const openingMeta: ContentDictionary = {
  'italian-game.name': 'Partita Italiana (Giuoco Piano)',
  'italian-game.summary':
    'Il Bianco sviluppa in fretta e punta l\'alfiere campochiaro su f7, poi sostiene il centro con c3 e d3 invece di affrettare d4. Il piano è una costruzione lenta: Cbd2-f1-g3, una torre in e1, e la rottura d4 al momento giusto, quando il Nero si è già compromesso.',
  'italian-game.trap.italian-legal.name': 'Il matto di Légal',
  'italian-game.trap.italian-legal.point':
    'La trappola più vecchia degli scacchi, e funziona ancora. Il Nero inchioda il cavallo con l\'alfiere, e il Bianco ignora l\'inchiodatura e prende comunque in e5. Se il Nero si mangia la donna, tre pezzi leggeri danno matto in d5. Se rifiuta e riprende in e5, il Bianco si ritrova semplicemente un pedone in più e una buona posizione: il sacrificio è sicuro in entrambi i casi.',
  'italian-game.trap.italian-blackburne-shilling.name': 'Lo scellino di Blackburne',
  'italian-game.trap.italian-blackburne-shilling.point':
    'Il cavallo in d4 sembra una mossa da principiante che regala un pedone, e 4.Cxe5 sembra guadagnarlo. Poi arriva la donna in g5, che attacca il cavallo e g2 nello stesso momento, e il seguito ingordo finisce con il matto in f3. La risposta è non prendere: 4.Cxd4 exd4 5.O-O lascia al Bianco un comodo tempo di vantaggio.',

  'ruy-lopez.name': 'Partita Spagnola (Difesa Morphy)',
  'ruy-lopez.summary':
    'L\'alfiere in b5 attacca il cavallo che difende e5, quindi ogni mossa del Nero deve tenere in vita quel pedone. Il Bianco costruisce con c3, d4, torre in e1 e il giro di cavallo verso g3, mentre il Nero cerca spazio sull\'ala di donna con ...a6, ...b5 e ...c5.',
  'ruy-lopez.trap.ruy-na5-bxf7.name': 'Punire il ...Ca5 prematuro',
  'ruy-lopez.trap.ruy-na5-bxf7.point':
    'Con il cavallo in a5 e il re ancora in e8, il sacrificio di alfiere in f7 funziona: il re è costretto a prendere, e il cavallo forchetta re e cavallo in a5 con scacco. Il Nero deve rispondere alla ritirata dell\'alfiere con una mossa di sviluppo; è l\'attacco all\'alfiere prima di arroccare che perde.',
  'ruy-lopez.trap.ruy-noahs-ark.name': 'L\'arca di Noè',
  'ruy-lopez.trap.ruy-noahs-ark.point':
    'La trappola in cui ogni giocatore di Spagnola cade una volta. Riprendere il pedone in d4 con la donna sembra naturale, e poi i pedoni neri di c e di b avanzano e l\'alfiere in b3 resta senza case. I pedoni in b5 e c4 costruiscono un muro da cui l\'alfiere non esce più. Riprendi con il cavallo o con il pedone di c, e controlla che l\'alfiere abbia una via d\'uscita prima di mangiare qualsiasi cosa.',

  'queens-gambit-declined.name': 'Gambetto di Donna Rifiutato (Variante di Cambio)',
  'queens-gambit-declined.summary':
    'Il Bianco cambia in d5 e poi avanza il pedone di b per attaccare il pedone c6 del Nero: è l\'attacco di minoranza, e funziona perché lo scopo non è guadagnare un pedone ma creare un bersaglio che non se ne va più. Poche linee taglienti, un piano solo, chiarissimo.',
  'queens-gambit-declined.trap.qgd-elephant.name': 'La trappola dell\'elefante',
  'queens-gambit-declined.trap.qgd-elephant.point':
    'Il cavallo in f6 sembra inchiodato, quindi prendere in d5 sembra guadagnare un pedone. Non è così: il cavallo riprende lo stesso, e dopo che le donne se ne vanno con Axd8 lo scacco in b4 recupera subito il pezzo con una posizione molto migliore per il Nero. L\'inchiodatura è reale solo se il Nero non si può permettere il cambio delle donne.',

  'london-system.name': 'Sistema Londra',
  'london-system.summary':
    'Il Bianco mette l\'alfiere in f4 prima di e3, aggiunge i pedoni in c3 e d4, i cavalli in f3 e d2 e l\'alfiere in d3, e gioca quasi le stesse dodici mosse qualunque cosa faccia il Nero. Il piano è un cavallo in e5, f4 a sostenerlo e la torre che arriva sull\'ala di re.',
  'london-system.trap.london-nb5.name': 'Il pedone avvelenato in b2',
  'london-system.trap.london-nb5.point':
    'Il pedone b2 è l\'unico punto molle del Londra, e offrirlo con Cc3 è il modo di trasformarlo in un pregio. Se il Nero prende, Cb5 intrappola la donna: arrivano Tb1 e Cc7+ e non c\'è una casa buona. Offri il pedone solo dopo aver messo il cavallo in c3.',
  'london-system.trap.london-c4-tempo.name': 'Perdere un tempo per ...c4',
  'london-system.trap.london-c4-tempo.point':
    'Offrire il cambio delle donne con Db3 sembra il modo ordinato di difendere b2. Il Nero infila prima ...c4, guadagna un tempo, fissa l\'ala di donna e poi riprende in b6 con il pedone di a e una colonna semiaperta. Rispondi a ...Db6 con Dc1 o Cc3 e tieni le donne sulla scacchiera.',

  'sicilian-najdorf.name': 'Difesa Siciliana (Najdorf)',
  'sicilian-najdorf.summary':
    'La mossa ...a6 sembra niente - toglie b5 ai pezzi bianchi e prepara ...e5 o ...b5 - ma è la base di un piano per prendersi l\'iniziativa invece che per sopravvivere. Verrai attaccato quasi ogni partita, e attaccherai a tua volta.',
  'sicilian-najdorf.trap.najdorf-bxb5.name': 'Il sacrificio in b5',
  'sicilian-najdorf.trap.najdorf-bxb5.point':
    'L\'avanzata standard sull\'ala di donna incontra il sacrificio standard: con il Bianco arroccato lungo e ogni pezzo puntato sul re nero, Axb5 apre l\'ala di donna prima che il Nero abbia arroccato. La lezione riguarda l\'ordine delle mosse più che questa posizione: metti il re al sicuro prima di spingere il pedone di b, quando il Bianco ha già scelto l\'arrocco lungo.',

  'french-defence.name': 'Difesa Francese (Classica, Steinitz)',
  'french-defence.summary':
    'Il Nero rinuncia a e5 e costruisce un muro: pedoni in e6 e d5 contro e4 e d4. Accetta un problema permanente - l\'alfiere in c8 resta chiuso dietro i suoi pedoni - in cambio di una struttura solidissima e di un piano chiaro: colpire la base della catena bianca con ...c5 e non smettere più.',
  'french-defence.trap.french-milner-barry.name': 'Il pedone del Milner-Barry',
  'french-defence.trap.french-milner-barry.point':
    'Prendere due volte in d4 guadagna un pedone e perde la partita: Ab5+ arriva con scacco, e dopo il cambio dell\'alfiere il Bianco ha un enorme vantaggio di sviluppo con il re nero bloccato al centro. Il pedone si può prendere, ma solo dopo aver tolto lo scacco.',
  'french-defence.trap.french-bd7-first.name': 'Prendere in d4 nel modo giusto',
  'french-defence.trap.french-bd7-first.point':
    'Lo stesso pedone, una mossa dopo, e adesso funziona. Con l\'alfiere già in d7 non c\'è più Ab5+, quindi prendere due volte in d4 guadagna semplicemente un pedone sano. Una tranquilla mossa di sviluppo è tutta la differenza fra un pedone vinto e una partita persa.',

  'caro-kann.name': 'Difesa Caro-Kann (Classica)',
  'caro-kann.summary':
    'Il Nero costruisce lo stesso muro della Francese ma risolve prima il suo problema: giocando ...c6 prima di ...d5 tiene aperta la diagonale dell\'alfiere di c8, che esce in f5 o g4 prima che ...e6 chiuda la porta. Costa una mossa e un po\' di ambizione; in cambio dà una struttura senza debolezze e un alfiere buono davvero.',
  'caro-kann.trap.caro-smothered.name': 'Il matto affogato alla quinta mossa',
  'caro-kann.trap.caro-smothered.point':
    'Il matto breve più famoso della Caro-Kann. Dopo ...Cd7, la naturalissima ...Cgf6 è matto in una: il cavallo arriva in d6 e ogni casa di fuga è occupata dai pezzi del Nero. La regola è semplice: appena la donna compare in e2, guarda d6 prima di sviluppare il secondo cavallo.',

  'kings-indian-defence.name': 'Difesa Est-Indiana (Classica)',
  'kings-indian-defence.summary':
    'Il Nero regala il centro apposta: fianchetta, arrocca e poi attacca, di solito con ...e5, ...f5, ...f4 e tutti i pezzi addosso al re bianco mentre il Bianco fa lo stesso sull\'altra ala. È l\'apertura più a senso unico di questo repertorio: pochissime partite tranquille, e conoscere il piano conta più che conoscere le mosse.',
  'kings-indian-defence.trap.kid-exchange-nxe4.name': 'Il colpo nella linea di cambio',
  'kings-indian-defence.trap.kid-exchange-nxe4.point':
    'Il Bianco cambia tutto e poi si mangia il pedone e5, apparentemente gratis perché le donne sono già uscite. Non è gratis: ...Cxe4 torna subito indietro, e quando la polvere si posa il Nero ha recuperato il materiale con l\'alfiere migliore in g7. Vale la pena saperlo perché la linea di cambio è il modo più comune con cui il Bianco prova a togliere gioco all\'Est-Indiana.',
}
