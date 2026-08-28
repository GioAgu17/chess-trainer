import { nodes, tree } from '../tree'

const n = tree('ruy-lopez')

/** Partita Spagnola: le spiegazioni dell'allenatore. */
export const ruyLopezTree = nodes(
  n('e4', {
    idea: 'Rivendica il centro e apre le linee all\'alfiere e alla donna.',
    hint: 'Apri la partita con la mossa di pedone centrale più diretta.',
    m: {
      d4: 'Ottima prima mossa, ma questo repertorio è di pedone di re. Tutto quello che segue dà per scontato che il pedone e sia andato in e4.',
      Nf3: 'Giocabile, ma lascia scegliere l\'apertura al Nero. Prendi prima il centro e porta la partita dove la conosci.',
    },
  }),
  n('e4 e5', { label: 'Partita aperta', idea: 'Il Nero rivendica il centro in parti uguali.' }),
  n('e4 e5 Nf3', {
    idea: 'Sviluppa con tempo: il cavallo attacca e5.',
    hint: 'Sviluppa un pezzo e attacca il pedone che il Nero ha appena mosso.',
  }),
  n('e4 e5 Nf3 Nc6', { label: 'Linea principale', idea: 'Il Nero difende e5 con naturalezza.' }),
  n('e4 e5 Nf3 Nc6 Bb5', {
    idea: 'L\'alfiere spagnolo. Per ora non inchioda niente, ma attacca il difensore di e5 e pone subito una domanda al Nero.',
    hint: 'Attacca il pezzo che tiene in piedi e5.',
    m: {
      Bc4: 'Buona mossa, ma quella è la Partita Italiana. Questo repertorio è la Spagnola.',
      Nxe5: 'Restituisce il pedone dopo ...Cxe5 e, peggio, ...De7 oppure ...Cxe5 seguito da ...De7 non ti lascia niente. Il cavallo in e5 non è sostenuto.',
      d4: 'La Scozzese. Giocabile, ma cambia via quella tensione centrale che la Spagnola vuole mantenere.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6', {
    label: 'Difesa Morphy',
    idea: 'Il Nero chiede all\'alfiere di dichiararsi prima di scegliere uno schema.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4', {
    idea: 'Tieni l\'alfiere sulla diagonale lunga. Cambiare subito in c6 riparerebbe la struttura del Nero e gli regalerebbe la coppia degli alfieri.',
    hint: 'Il Nero ha fatto una domanda al tuo alfiere. Tienilo sulla diagonale puntata sull\'ala di re avversaria.',
    m: {
      Bxc6: 'La Variante di Cambio. È una linea vera, ma cede la coppia degli alfieri, e questo repertorio mantiene la tensione.',
      Bc4: 'Ritirarsi qui spreca i due tempi spesi per Ab5; l\'alfiere appartiene alla diagonale a4-e8, dove continua a premere su c6.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6', {
    label: 'Linea principale',
    idea: 'Il Nero sviluppa e attacca e4.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O', {
    idea: 'Il pedone e4 è offerto: dopo ...Cxe4 il Bianco gioca d4 e lo recupera con una forte iniziativa. Arroccare è più utile che difenderlo.',
    hint: 'Non hai ancora bisogno di difendere e4. Fai invece la cosa più utile.',
    m: {
      d3: 'Solida, ma lenta. Arroccare è più forte perché il pedone e4 è avvelenato: ...Cxe4 va a sbattere contro d2-d4.',
      Nc3: 'Passiva e blocca il pedone di c. Nella Spagnola il pedone di c vuole andare in c3 a sostenere d4.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7', {
    label: 'Spagnola Chiusa',
    idea: 'Il Nero rifiuta il pedone e punta al solido sistema Chiuso.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1', {
    idea: 'Adesso e4 è difeso sul serio, e la torre sta sulla colonna che si aprirà. Rinnova anche la pressione su e5.',
    hint: 'Difendi il pedone e con una mossa di sviluppo che metta una torre sulla colonna giusta.',
    m: {
      d4: 'Prematura: ...exd4 e ...b5 si combinano bene per il Nero, e l\'alfiere in a4 rischia di restare intrappolato dopo ...b5 e ...Ca5.',
      d3: 'Giocabile ma modesta. Te1 è la linea principale perché difende e4 e nello stesso tempo aumenta la pressione su e5.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5', {
    label: 'Linea principale',
    idea: 'Il Nero caccia l\'alfiere prima che possa combinarsi con la pressione su c6: è il senso di aver giocato ...a6.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3', {
    idea: 'L\'alfiere raggiunge la sua casa migliore, punta f7 e sostiene la futura d4.',
    hint: 'L\'alfiere è attaccato. Mettilo dove guarda f7.',
    m: {
      Bxb5: 'Questa perde semplicemente un pezzo: dopo ...axb5 non c\'è niente con cui riprendere, e la colonna a aperta peggiora le cose.',
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6', {
    label: 'Linea principale',
    idea: 'Il Nero puntella e5 e apre l\'alfiere di c8.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3', {
    idea: 'La mossa della Spagnola. Prepara d2-d4 e dà all\'alfiere la casa c2, fuori dalla portata di ...Ca5.',
    hint: 'Prepara la rottura centrale e dai all\'alfiere una casa di fuga con una mossa sola.',
    m: {
      d4: 'Senza c3 prima, ...Ag4 e la pressione su d4 danno al Nero una partita facile. Prepara la rottura.',
      a4: 'Una linea secondaria vera, ma il piano principale è c3 e d4. Giocare a4 troppo presto lascia al Nero il tempo di consolidarsi al centro.',
      Nc3: 'Qui in c3 va il pedone, non il cavallo. Il cavallo è diretto a d2, f1 e g3.',
    },
    end: {
      name: 'Spagnola Chiusa, linea principale',
      plans: [
        'Gioca h2-h3 alla mossa dopo (per fermare ...Ag4) e solo allora d2-d4: è l\'ordine di mosse classico della Spagnola.',
        'Il giro di cavallo Cb1-d2-f1-g3 (oppure e3) è il raggruppamento principale; spesso segue la torre in e1 o in d1.',
        'Metti al sicuro l\'alfiere in c2 quando arriva ...Ca5, poi gioca d4 e colpisci il centro.',
        'Attenzione alle case d5 e f5: se il Nero gioca ...exd4 e ...d5, preparati a rispondere con e4-e5 o con il cambio in d5.',
        'Sull\'ala di donna, a2-a4 al momento giusto spacca la catena in b5.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O', {
    label: 'Arrocco anticipato',
    idea: 'Il Nero arrocca prima di decidere su ...d6.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3', {
    idea: 'Il piano non cambia: prepara d4 e dai all\'alfiere la casa c2.',
    hint: 'Qui il tuo piano è lo stesso qualunque cosa faccia il Nero: prepara la rottura centrale.',
    end: {
      name: 'Spagnola Chiusa, 7...O-O',
      plans: [
        'Gioca d2-d4 alla mossa dopo: siccome il Nero non ha giocato ...d6, il pedone in e5 è allentato e d4 arriva con più forza.',
        'h2-h3 resta una mossa profilattica utile contro ...Ag4.',
        'L\'Attacco Marshall (...d5) è il tentativo critico qui: se vuoi evitarlo, infila a2-a4 prima di c3.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 d6', {
    label: 'Rimanda ...b5',
    idea: 'Il Nero sostiene prima e5 e tiene ...b5 in riserva.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 d6 c3', {
    idea: 'Stesso piano: prepara d4 e apri la ritirata in c2 per l\'alfiere.',
    hint: 'Prepara la rottura centrale e dai all\'alfiere una casa di fuga.',
    end: {
      name: 'Spagnola Chiusa, 6...d6',
      plans: [
        'Prosegui con h3 e d4 alla maniera classica della Spagnola.',
        'Siccome ...b5 non è stata giocata, tieni in riserva l\'opzione Axc6 seguito da d4.',
        'Il giro di cavallo Cbd2-f1-g3 resta il raggruppamento principale.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4', {
    label: 'Spagnola Aperta',
    idea: 'Il Nero prende il pedone. Non è una svista: conta su ...d5 per tenere il cavallo in e4.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4', {
    idea: 'È il senso dell\'arrocco. Aprire il centro mentre il Nero è ancora indietro nello sviluppo recupera il pedone o guadagna l\'iniziativa.',
    hint: 'Non inseguire il cavallo. Apri il centro contro il re non arroccato.',
    m: {
      Re1: 'Il Nero risponde ...Cc5 e l\'alfiere in a4 finisce sotto tiro; la rottura centrale immediata è molto più forte.',
      Nxe5: 'Il Nero risponde ...Cxe5 e dopo dxe5 sta benissimo: hai sciolto la tensione per niente.',
    },
    end: {
      name: 'Spagnola Aperta',
      plans: [
        'Dopo ...b5 Ab3 d5 il seguito standard è dxe5 Ae6, che raggiunge la posizione tipica della Spagnola Aperta.',
        'Punta a c3, Cbd2 e un Ac2 ben calibrato per attaccare il cavallo in e4.',
        'Il pedone in e5 è una risorsa a lungo termine che comprime il Nero: tienilo difeso.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5', {
    label: 'Caccia l\'alfiere subito',
    idea: 'Il Nero risolve la questione dell\'alfiere una mossa prima.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3', {
    idea: 'L\'alfiere raggiunge la sua diagonale migliore, puntata su f7.',
    hint: 'Ritira l\'alfiere attaccato sulla casa da cui guarda f7.',
    end: {
      name: 'Spagnola, ordine di mosse dell\'Arcangelo',
      plans: [
        'Dopo ...Ab7 o ...Ac5 la partita diventa un Arcangelo: gioca c3 e d4, oppure i flessibili Te1 e d3.',
        'a2-a4 vale sempre la pena di essere considerata contro la coppia di pedoni b5/a6.',
        'Tieni in vita l\'alfiere in b3: cambiarlo ti toglie il pezzo d\'attacco principale.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Bc5', {
    label: 'Difesa Møller',
    idea: 'Il Nero sviluppa attivamente e punta f2.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Bc5 c3', {
    idea: 'Prepara d4 con tempo contro l\'alfiere in c5.',
    hint: 'L\'alfiere in c5 sta sulla strada della tua rottura centrale. Preparala lo stesso: la rottura arriverà con tempo.',
    end: {
      name: 'Spagnola, Difesa Møller',
      plans: [
        'd2-d4 arriva alla mossa dopo, colpisce l\'alfiere e apre il centro.',
        'Occhio alle tattiche con ...Cxe4: la spinta d4 e Te1 di solito lasciano il Nero sovraesteso.',
        'Ac2 seguito da d4 è il raggruppamento standard se il Nero gioca ...b5.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5', {
    label: 'Espansione immediata sull\'ala di donna',
    idea: 'Il Nero caccia subito l\'alfiere.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5 Bb3', {
    idea: 'Ritirati sulla diagonale migliore: è lì che l\'alfiere sta in ogni Spagnola.',
    hint: 'L\'alfiere è attaccato. C\'è una sola casa che valga la pena.',
    end: {
      name: 'Spagnola, 4...b5',
      plans: [
        'Prosegui con O-O e c3, puntando a d4 come sempre.',
        'a2-a4 colpisce il pedone b5 ed è spesso forte prima che il Nero abbia giocato ...Ab7.',
        'I pedoni neri sull\'ala di donna sono un bersaglio oltre che un guadagno di spazio: non aver paura di aprire linee da quella parte.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6', {
    label: 'Difesa Steinitz Moderna',
    idea: 'Il Nero rende solido e5 e toglie il veleno alla pressione su c6.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 O-O', {
    idea: 'Arrocca per prima cosa e tieni aperte tutte le opzioni; c3 e d4 seguiranno.',
    hint: 'Non c\'è niente in presa. Metti il re al sicuro.',
    end: {
      name: 'Difesa Steinitz Moderna',
      plans: [
        'Gioca c3 e d4 come al solito: il Nero è solido ma passivo.',
        'Te1, Cbd2 e Cf1-g3 è il raggruppamento standard.',
        'Se il Nero gioca ...b5 e ...Ca5, l\'alfiere si ritira in c2 e tu prosegui con d4.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 Nf6', {
    label: 'Difesa Berlinese',
    idea: 'Il Nero colpisce subito e4 e invita al famoso finale della Berlinese dopo 4.O-O Cxe4 5.d4 Cd6.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 Nf6 d3', {
    idea: 'L\'Anti-Berlinese. Difendere e4 in silenzio evita del tutto il finale della Berlinese e tiene le donne sulla scacchiera per una Spagnola normale.',
    hint: 'Difendi il pedone e con una modesta mossa di pedone e tieni le donne in campo.',
    m: {
      'O-O': 'Questa è la linea principale, ma invita al finale della Berlinese dopo ...Cxe4 5.d4 Cd6, una posizione patta che è difficile da giocare per vincere.',
      Nc3: 'Solida ma blocca il pedone di c, e dopo ...Ab4 la partita diventa una Quattro Cavalli.',
    },
    end: {
      name: 'Difesa Berlinese, Anti-Berlinese 4.d3',
      plans: [
        'Prosegui con c3, Cbd2, O-O e Te1: una lenta costruzione spagnola.',
        'Axc6 seguito da Cbd2 e Cc4 è un\'idea frequente, che colpisce e5 quando il Nero non può riprendere comodamente.',
        'La rottura d3-d4 arriva più tardi, quando sei completamente sviluppato.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 d6', {
    label: 'Difesa Steinitz',
    idea: 'Il Nero difende e5 con un pedone ma cede spazio al centro e blocca l\'alfiere di f8.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 d6 d4', {
    idea: 'La confutazione classica dello schema passivo: apri subito il centro mentre il Nero è compresso.',
    hint: 'L\'ultima mossa del Nero è stata solida ma passiva. Prenditi subito il centro.',
    end: {
      name: 'Difesa Steinitz',
      plans: [
        'Dopo ...Ad7 gioca Cc3 e O-O con un comodo vantaggio di spazio.',
        'La pressione su e5 combinata con l\'inchiodatura in c6 è la principale fonte di tattiche.',
        'd4-d5 caccia il cavallo e ti dà un vantaggio di spazio duraturo.',
      ],
    },
  }),
  n('e4 e5 Nf3 Nc6 Bb5 Bc5', {
    label: 'Difesa Classica',
    idea: 'Il Nero sviluppa attivamente e ignora la pressione su c6.',
  }),
  n('e4 e5 Nf3 Nc6 Bb5 Bc5 c3', {
    idea: 'Prepara d4 con tempo contro l\'alfiere in c5.',
    hint: 'Prepara la rottura centrale: arriverà con tempo contro l\'alfiere.',
    end: {
      name: 'Spagnola, Difesa Classica',
      plans: [
        'Gioca d2-d4 alla mossa dopo, colpendo l\'alfiere e prendendo il centro.',
        'Seguono O-O e Te1; l\'inchiodatura in c6 ti dà risorse tattiche in più su e5.',
        'Se il Nero gioca ...f5, rispondi d4 e apri il centro prima che l\'attacco decolli.',
      ],
    },
  }),
)
