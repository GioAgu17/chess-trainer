import { nodes, tree } from '../tree'

const n = tree('queens-gambit-declined')

/** Gambetto di Donna Rifiutato, Variante di Cambio. */
export const qgdTree = nodes(
  n('d4', { idea: 'Prendi il centro e apri l\'alfiere di c1.', hint: 'Comincia con il pedone di donna.' }),
  n('d4 d5', { label: 'Risposta classica', idea: 'Il Nero affronta il centro a viso aperto.' }),
  n('d4 d5 c4', {
    idea: 'Il Gambetto di Donna. Non è un vero gambetto: il pedone si può sempre recuperare, e lo scopo è deviare il pedone d5 e prendersi il centro.',
    hint: 'Contesta il pedone d5 di lato.',
    m: {
      Nf3: 'Ottima mossa, ma questo repertorio gioca prima c4 così il Nero non può rispondere con un comodo ...Af5.',
      Bf4: 'Quello è il Sistema Londra, un repertorio diverso. Qui giochiamo il Gambetto di Donna.',
      e3: 'Troppo modesta. Chiude dentro l\'alfiere di c1 prima ancora di contestare il centro.',
    },
  }),
  n('d4 d5 c4 e6', {
    label: 'Gambetto di Donna Rifiutato',
    idea: 'Il Nero sostiene d5 con un pedone, accettando che l\'alfiere di c8 resti per ora passivo.',
  }),
  n('d4 d5 c4 e6 Nc3', {
    idea: 'Sviluppa e aggiunge un terzo attaccante su d5. Il Nero deve decidere come tenere il centro.',
    hint: 'Sviluppa un cavallo in modo che prema su d5.',
    m: {
      cxd5: 'Troppo presto. Il Nero riprende con ...exd5 e l\'alfiere di c8 è improvvisamente libero; la Variante di Cambio funziona solo quando il cavallo è già in f6.',
      e3: 'Giocabile, ma chiude dentro l\'alfiere di c1 prima del necessario. Sviluppa prima il cavallo.',
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6', { label: 'Linea principale', idea: 'Il Nero sviluppa e difende d5 per la terza volta.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5', {
    idea: 'La Variante di Cambio. Adesso è il momento: con il cavallo in f6 il Nero deve riprendere con il pedone e, e la struttura si fissa a tuo favore.',
    hint: 'Un solo cambio adesso fissa la struttura a tuo favore, perché il Nero non può riprendere comodamente con un pezzo.',
    m: {
      Bg5: 'Mossa splendida e linea principale ortodossa, ma questo repertorio sceglie la Variante di Cambio: un piano solo, chiarissimo.',
      Nf3: 'Giocabile, ma lascia al Nero la possibilità di liberarsi con ...dxc4 o ...c5. Prendi in d5 finché il momento è quello giusto.',
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5', {
    label: 'Linea principale',
    idea: 'Forzata nello spirito: riprendere con il cavallo darebbe al Bianco mano libera al centro con e4.',
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5', {
    idea: 'Inchioda il cavallo che difende d5. È il seguito standard e rende ...Ce4 scomodo.',
    hint: 'Inchioda il pezzo che difende il pedone d5.',
    m: {
      Bf4: 'Giocabile, ma l\'alfiere è molto più fastidioso in g5, dove inchioda il cavallo di f6.',
      e4: 'Perde un pedone: dopo ...dxe4 il pedone è semplicemente andato e il tuo centro crolla.',
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7', { label: 'Linea principale', idea: 'Il Nero rompe l\'inchiodatura e prepara l\'arrocco.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3', {
    idea: 'Apre l\'alfiere di f1 e dà una casa sicura al re. Il pedone in e3 è modesto ma è quello che tiene insieme lo schema.',
    hint: 'Apri una strada all\'alfiere campochiaro.',
    m: {
      e4: 'Perde un pedone: d5 è difeso tre volte e dopo ...dxe4 non hai niente in cambio.',
      Bxf6: 'Cambiare qui regala al Nero la coppia degli alfieri. Tieni l\'inchiodatura: è la tua risorsa principale.',
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 c6', {
    label: 'Linea principale',
    idea: 'Il Nero puntella d5 e prepara ...Af5 o ...Cbd7. È esattamente il pedone che il tuo attacco di minoranza vuole prendere di mira.',
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 c6 Bd3', {
    idea: 'L\'alfiere prende la diagonale b1-h7, guarda h7 e controlla f5, togliendo all\'alfiere nero la casa che vorrebbe.',
    hint: 'Sviluppa l\'ultimo pezzo leggero sulla diagonale che impedisce ...Af5.',
    m: {
      Nf3: 'Naturale, ma l\'alfiere deve uscire per primo: dopo Cf3 il Nero gioca ...Af5 e risolve il suo unico problema.',
      b4: 'L\'idea giusta, ma troppo presto: non sei sviluppato e la torre non è ancora in b1.',
    },
    end: {
      name: 'Gambetto di Donna Rifiutato, Variante di Cambio',
      plans: [
        'L\'attacco di minoranza: gioca Tb1, b2-b4 e b4-b5. Dopo bxc6 il pedone c6 del Nero resta arretrato su una colonna semiaperta per sempre.',
        'Completa lo sviluppo con Cge2 (non Cf3), così il pedone f resta libero e il cavallo può andare in g3 a coprire e4 e f5.',
        'Cambia gli alfieri camposcuri con Axe7 solo quando ti conviene: di solito quando il Nero ha appena speso un tempo su ...h6.',
        'Attenzione a ...Ce4: rispondi Axe7 e poi Cxe4 oppure f3, e la casa e4 resta tua.',
        'Se il Nero attacca sull\'ala di re con ...Ce4 e ...f5, difendi con Cg3 e Ae2 e prosegui l\'attacco sull\'altra ala: chi arriva primo vince la corsa.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 O-O', { label: 'Arrocco anticipato', idea: 'Il Nero arrocca prima di decidere dove mettere i pedoni.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 O-O Bd3', {
    idea: 'Stesso piano: prendi la diagonale b1-h7 e impedisci ...Af5.',
    hint: 'Prendi la diagonale che tiene chiuso dentro l\'alfiere di c8.',
    end: {
      name: 'GDR Cambio, 6...O-O',
      plans: [
        'Cge2, O-O, Tb1 e poi l\'attacco di minoranza con b4-b5.',
        'Siccome il Nero non ha ancora giocato ...c6, l\'immediato Cge2 e b4 può arrivare ancora più in fretta.',
        'Tieni l\'alfiere in g5 finché inchioda il cavallo di f6.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 Nbd7', { label: 'Sviluppa il cavallo', idea: 'Il Nero sviluppa e tiene ...c6 in riserva.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 Nbd7 Bd3', {
    idea: 'Sviluppa e controlla f5: il piano non cambia.',
    hint: 'Prendi la diagonale che tiene chiuso dentro l\'alfiere di c8.',
    end: {
      name: 'GDR Cambio, 6...Cbd7',
      plans: [
        'Cge2, O-O, Tb1 e l\'attacco di minoranza.',
        'Con il cavallo in d7 invece del pedone in c6, tieni d\'occhio ...Cb6 e ...Af5: la diagonale va chiusa in tempo.',
        'La rottura e3-e4 diventa forte se il Nero allenta mai il controllo di quella casa.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6', { label: 'Prima sostiene d5', idea: 'Il Nero rinforza il centro prima di rompere l\'inchiodatura.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6 e3', {
    idea: 'Apri l\'alfiere e prepara l\'arrocco; la partita di solito traspone.',
    hint: 'Apri una strada all\'alfiere campochiaro.',
    end: {
      name: 'GDR Cambio, 5...c6',
      plans: [
        'Ad3, Cge2, O-O e l\'attacco di minoranza con Tb1 e b4-b5.',
        'Dc2 è una casa utile, aggiunge pressione su h7 e su c6.',
        'Siccome il Nero non ha giocato ...Ae7, tieni d\'occhio ...Ad6 che colpisce h2.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 h6', { label: 'Interroga l\'alfiere', idea: 'Il Nero chiede all\'alfiere di dichiararsi.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 h6 Bh4', {
    idea: 'Mantieni l\'inchiodatura. Cambiare in f6 darebbe al Nero la coppia degli alfieri e riparerebbe i suoi problemi.',
    hint: 'Mantieni l\'inchiodatura sul cavallo di f6 invece di cambiarlo.',
    m: {
      Bxf6: 'Un\'alternativa vera, e i motori la valutano un filo meglio. Non è un errore, ma cede la coppia degli alfieri e questo repertorio mantiene la tensione.',
      Bf4: 'Questa ritirata rinuncia all\'inchiodatura per niente; l\'alfiere in f4 non ha futuro con la struttura fissata.',
    },
    end: {
      name: 'GDR Cambio, 5...h6',
      plans: [
        'Prosegui con e3, Ad3, Cge2 e O-O.',
        'Il pedone in h6 è una piccola debolezza: più avanti Dc2 e Ag3 allineano la batteria sulla diagonale.',
        'L\'attacco di minoranza con Tb1 e b4-b5 resta il piano principale.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 Nxd5', { label: 'Riprende con il cavallo', idea: 'Il Nero evita la struttura fissa, ma il cavallo in d5 si può attaccare.' }),
  n('d4 d5 c4 e6 Nc3 Nf6 cxd5 Nxd5 e4', {
    idea: 'Prenditi tutto il centro con tempo. Il Nero deve muovere di nuovo il cavallo e il Bianco costruisce il centro classico.',
    hint: 'Il Nero ha messo un cavallo davanti al tuo pedone e. Colpiscilo e prendi il centro.',
    end: {
      name: 'GDR, 4...Cxd5',
      plans: [
        'Dopo ...Cxc3 bxc3 hai il grande centro classico con i pedoni in d4 ed e4.',
        'Gioca Cf3, Ad3 e O-O, poi spingi con e4-e5 o d4-d5 al momento giusto.',
        'La colonna b semiaperta dà alla tua torre un bersaglio in b7.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 c6', { label: 'Triangolo / schema Semi-Slavo', idea: 'Il Nero tiene aperte tutte le opzioni e punta alle strutture Semi-Slave.' }),
  n('d4 d5 c4 e6 Nc3 c6 Nf3', {
    idea: 'Sviluppa con naturalezza. Questo tiene la partita nei binari normali del Semi-Slavo ed evita le taglienti linee del Botvinnik.',
    hint: 'Sviluppa semplicemente l\'altro cavallo sulla sua casa migliore.',
    end: {
      name: 'Semi-Slavo, schema del triangolo',
      plans: [
        'e3, Ad3 e O-O danno una solida posizione in stile Meran.',
        'Occhio a ...dxc4 seguito da ...b5: rispondi con a2-a4 oppure con le linee principali del Meran.',
        'Se il Nero non prende mai in c4, la rottura e3-e4 è il tuo modo principale di aprire la posizione.',
      ],
    },
  }),
  n('d4 d5 c4 e6 Nc3 c5', { label: 'Difesa Tarrasch', idea: 'Il Nero accetta un pedone isolato di donna in cambio di gioco libero per i pezzi.' }),
  n('d4 d5 c4 e6 Nc3 c5 cxd5', {
    idea: 'Prendi per primo. Il Nero deve riprendere con il pedone e, e dopo ...exd5 il pedone d5 resta isolato.',
    hint: 'Cambia al centro così che al Nero resti un pedone solo in d5.',
    m: {
      dxc5: 'Questo scioglie la tensione nella direzione sbagliata: il Nero gioca ...d4 e ottiene un forte cuneo con gioco libero.',
      Nf3: 'Giocabile, ma prendere prima in d5 è la linea principale e lascia al Nero il pedone isolato senza compenso.',
    },
    end: {
      name: 'Difesa Tarrasch',
      plans: [
        'La linea principale è Cf3, g3 e Ag2: il fianchetto mette la massima pressione sul pedone isolato.',
        'Blocca d4 con un cavallo e cambia pezzi: in finale il pedone isolato è semplicemente debole.',
        'Non lasciare che il Nero giochi ...d4 gratis: quella spinta scioglie la debolezza e libera la posizione.',
      ],
    },
  }),
  n('d4 d5 c4 c6', { label: 'Difesa Slava', idea: 'Il Nero sostiene d5 con il pedone di c, tenendo libero l\'alfiere di c8.' }),
  n('d4 d5 c4 c6 Nf3', {
    idea: 'Sviluppa e copri e5, la casa che l\'alfiere di c8 vuole sostenere con ...Af5.',
    hint: 'Sviluppa il cavallo di re e controlla e5 prima che il Nero giochi ...Af5.',
    end: {
      name: 'Difesa Slava',
      plans: [
        'Cc3 alla mossa dopo; poi o e3 (solido) o le taglienti linee con a4 contro ...dxc4 e ...b5.',
        'Se il Nero gioca ...Af5, la risposta standard è Cc3 seguito da e3 e più avanti Ch4 che colpisce l\'alfiere.',
        'La rottura e3-e4 è il modo principale di aprire la posizione una volta sviluppato.',
      ],
    },
  }),
  n('d4 d5 c4 dxc4', { label: 'Gambetto di Donna Accettato', idea: 'Il Nero prende il pedone, contando di restituirlo per sviluppare o di tenerlo con ...b5.' }),
  n('d4 d5 c4 dxc4 Nf3', {
    idea: 'Non correre a riprendere. Cf3 impedisce ...e5, e il pedone in c4 non si può tenere: e3 e Axc4 arrivano comunque.',
    hint: 'Impedisci al Nero di liberarsi con ...e5. Il pedone non scappa.',
    m: {
      e3: 'Questa permette ...b5 che tiene il pedone in più per ora, e dopo ...Ab7 il Nero sta bene. Cf3 per primo è più preciso.',
      Qa4: 'Recupera il pedone, ma la donna esce presto e il Nero guadagna tempo con ...Cc6 e ...Ad7.',
      e4: 'Ambiziosa, ma il Nero contrattacca con ...e5 o ...Cf6 e il tuo centro resta allentato. Cf3 prima è più solida.',
    },
    end: {
      name: 'Gambetto di Donna Accettato',
      plans: [
        'Gioca e3 e Axc4 alla mossa dopo, arrivando a una comoda posizione senza pedoni deboli e con un vantaggio di sviluppo.',
        'La rottura e3-e4 ti dà un grande centro una volta che l\'alfiere ha ripreso in c4.',
        'Se il Nero prova ...b5, la risposta standard è a2-a4 che mina la catena.',
      ],
    },
  }),
  n('d4 d5 c4 e5', { label: 'Controgambetto Albin', idea: 'Il Nero regala un pedone per guadagnare spazio, sperando nel cuneo ...d4 e nei trucchi sulla colonna e.' }),
  n('d4 d5 c4 e5 dxe5', {
    idea: 'Prendi il pedone: rifiutarlo lascia il Nero pari gratis.',
    hint: 'Accetta il gambetto; l\'alternativa dà al Nero esattamente quello che vuole.',
    m: {
      cxd5: 'Il Nero risponde ...exd4 e ottiene un forte pedone in d4 con gioco libero. Prendi prima in e5.',
      e3: 'Il Nero risponde ...exd4 e dopo exd4 la posizione è simmetrica e pari: hai rifiutato il gambetto per niente.',
    },
  }),
  n('d4 d5 c4 e5 dxe5 d4', { label: 'Linea principale', idea: 'Il senso del gambetto: il pedone in d4 comprime il Bianco e guarda c3 ed e3.' }),
  n('d4 d5 c4 e5 dxe5 d4 Nf3', {
    idea: 'Sviluppa e impedisce che le idee ...Ab4+ e ...De7 diventino pericolose. Evita di toccare il pedone e.',
    hint: 'Sviluppa un pezzo. Non toccare il pedone e: lì c\'è una trappola famosa.',
    m: {
      e3: 'La trappola classica: dopo ...Ab4+ Ad2 dxe3! Axb4 exf2+ il Nero vince materiale o l\'iniziativa.',
      e4: 'Allentante. Il Nero gioca ...Cc6 e ...Ag4 con forte pressione sul tuo centro indebolito.',
    },
    end: {
      name: 'Controgambetto Albin',
      plans: [
        'Gioca g3 e Ag2 alla mossa dopo: il fianchetto è lo schema più sicuro e più forte contro il cuneo in d4.',
        'Una volta arroccato e giocato Cbd2, il pedone in d4 diventa debole invece che forte.',
        'Tieni il pedone in più in e5: comprime il Nero ed è difficile da riconquistare.',
      ],
    },
  }),
)
