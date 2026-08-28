import { nodes, tree } from '../tree'

const n = tree('london-system')

/** Sistema Londra: le spiegazioni dell'allenatore. */
export const londonSystemTree = nodes(
  n('d4', { idea: 'Il Londra comincia sempre da qui.', hint: 'Comincia con il pedone di donna.' }),
  n('d4 d5', { label: 'Risposta classica', idea: 'Il Nero affronta il centro a viso aperto.' }),
  n('d4 d5 Bf4', {
    idea: 'L\'alfiere del Londra. Farlo uscire dalla catena prima di giocare e3 è tutto il senso del sistema.',
    hint: 'Sviluppa l\'alfiere prima di chiuderlo dentro con un pedone.',
    m: {
      e3: 'È l\'unico errore di ordine di mosse che rovina il Londra: l\'alfiere di c1 resta intrappolato dietro i suoi stessi pedoni, ed è esattamente il pezzo che il sistema vuole fuori.',
      c4: 'Buona mossa, e i motori la valutano sopra il Londra. Ma quello è il Gambetto di Donna: un repertorio diverso.',
      Nf3: 'Mossa perfettamente buona, e non peggiore del testo. È una preferenza di ordine di mosse: sviluppare prima il cavallo tiene aperte più trasposizioni, ma può permettere ...Af5.',
    },
  }),
  n('d4 d5 Bf4 Nf6', { label: 'Linea principale', idea: 'Il Nero sviluppa con naturalezza.' }),
  n('d4 d5 Bf4 Nf6 e3', {
    idea: 'Adesso che l\'alfiere è fuori, la catena di pedoni si può costruire. e3 apre l\'alfiere di f1 e sostiene d4.',
    hint: 'Adesso che l\'alfiere è al sicuro fuori, costruisci la catena di pedoni.',
    m: {
      Bxc7: 'Il pedone è avvelenato: ...Dxc7 vince l\'alfiere e resti un pezzo intero sotto per un pedone.',
      Nc3: 'Nel Londra il cavallo di donna appartiene a d2, dove sostiene e4 e non blocca il pedone di c.',
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6', { label: 'Linea principale', idea: 'Il Nero costruisce uno schema solido ma leggermente passivo.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3', {
    idea: 'Sviluppa e controlla e5, la casa che il cavallo del Londra vuole occupare più avanti.',
    hint: 'Sviluppa il cavallo di re sulla sua casa naturale.',
    m: {
      Bd3: 'Giocabile, ma il cavallo deve venire prima: dopo Ad3 il Nero può colpirlo con ...c5 e ...Db6.',
      c4: 'Questa traspone in un Gambetto di Donna, ma con l\'alfiere già impegnato in f4, che è una versione meno flessibile.',
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5', { label: 'Linea principale', idea: 'Il Nero contesta il pedone d4: è il modo di principio di combattere il Londra.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3', {
    idea: 'Tieni d4. Il triangolo c3-d4-e3 è la spina dorsale del Londra e dà al cavallo la casa d2.',
    hint: 'Sostieni con un pedone il pedone d4 attaccato, mantenendo intatta la struttura.',
    m: {
      dxc5: 'Scioglie la tensione per niente: il Nero riprende con ...Axc5 e ottiene gioco libero.',
      Nc3: 'Il cavallo blocca il pedone che dovrebbe stare in c3 a sostenere d4. Nel Londra quel posto è del pedone.',
      Bd3: 'Ignora l\'attacco a d4. Dopo ...cxd4 exd4 la struttura è più allentata e il Nero sta comodo.',
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6', { label: 'Linea principale', idea: 'Il Nero sviluppa e aumenta la pressione su d4.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2', {
    idea: 'La casa del cavallo nel Londra. Da d2 sostiene e4 e c4, tiene libero il pedone di c e può andare in e5.',
    hint: 'Sviluppa il cavallo di donna sulla casa che sostiene la futura rottura e4.',
    m: {
      Ne5: 'Il cavallo vuole quella casa, ma non ancora: ...Cxe5 dxe5 lascia il pedone in e5 debole e la tua struttura peggiore.',
      dxc5: 'Ancora prematura. Tieni la tensione: è il Nero a doverci spendere tempo per riprendere.',
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2 Bd6', { label: 'Linea principale', idea: 'Il Nero offre il cambio del forte alfiere del Londra.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2 Bd6 Bg3', {
    idea: 'Schiva il cambio. L\'alfiere è il tuo pezzo migliore e in g3 tiene la diagonale e sostiene la futura Ce5.',
    hint: 'Il Nero vuole cambiare il tuo pezzo migliore. Non lasciarglielo fare.',
    m: {
      Bxd6: 'Cambiare il tuo alfiere buono con il pezzo problematico del Nero è esattamente quello che il Nero spera.',
      Be5: 'Lì l\'alfiere è in presa: il Nero gioca ...Cxe5 o ...Axe5 e la tua struttura peggiora.',
      Bd3: 'L\'alfiere di f4 è attaccato. Occupatene prima.',
    },
    end: {
      name: 'Sistema Londra, linea principale',
      plans: [
        'Ad3 e O-O alla mossa dopo, poi scegli fra il piano sull\'ala di re e la rottura e3-e4.',
        'Ce5 è l\'idea classica del Londra: il cavallo è sostenuto dal pedone d4 e dall\'alfiere in g3, e f2-f4 lo rende permanente.',
        'La rottura e3-e4 è il tuo modo principale di aprire la posizione; va preparata con De2 e Tae1.',
        'Cambiare gli alfieri camposcuri in d6 va bene quando il Nero ha già arroccato e la ripresa gli rovina la struttura.',
        'Sull\'ala di donna, tieni d\'occhio ...Db6 che colpisce b2: Db3 o Dc1 sono le risposte abituali.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2 Be7', { label: 'Sviluppo modesto', idea: 'Il Nero evita il cambio degli alfieri e resta flessibile.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2 Be7 Bd3', {
    idea: 'Completa lo sviluppo sulla diagonale b1-h7; seguono O-O e Ce5.',
    hint: 'Il tuo alfiere non è attaccato. Finisci lo sviluppo sulla diagonale che guarda h7.',
    end: {
      name: 'Sistema Londra, 6...Ae7',
      plans: [
        'O-O, poi Ce5 e f2-f4 per costruire sull\'ala di re.',
        'De2 e Tae1 preparano e3-e4.',
        'Con l\'alfiere in e7 invece che in d6, la diagonale b8-h2 resta tua: Ce5 e Dh5 diventano più forti.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Qb6', { label: 'Colpisce b2', idea: 'La mossa più impegnativa: il Nero attacca b2 mentre l\'alfiere ha lasciato l\'ala di donna.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Qb6 Qb3', {
    idea: 'La risposta standard. Offrire il cambio disinnesca tutto: se il Nero prende, riprendi con il pedone di a e la colonna si apre a tuo favore.',
    hint: 'Non difendere b2 passivamente. Rispondi alla donna con la tua donna.',
    m: {
      b3: 'Passiva, e indebolisce le case scure attorno alla futura casa del tuo re; il Nero prosegue con ...Ae7 e ...O-O in tutta comodità.',
      Qc2: 'Difende b2 ma lascia la donna scomoda, e il Nero prosegue con ...Af5 guadagnando tempo.',
      dxc5: 'Salva b2 aprendo però la diagonale a7-g1, e dopo ...Axc5 il Nero sta benissimo.',
    },
    end: {
      name: 'Sistema Londra, 5...Db6',
      plans: [
        'Se il Nero cambia in b3, riprendi con il pedone di a: la tua torre ottiene la colonna a e la struttura resta sana.',
        'Se il Nero evita il cambio con ...c4, rispondi Dxb6 axb6 e gioca contro i pedoni doppiati sull\'ala di donna.',
        'Il resto del piano non cambia: Cbd2, Ae2 o Ad3, O-O e Ce5.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 cxd4', { label: 'Scioglie la tensione', idea: 'Il Nero cambia al centro, cedendo un po\' di flessibilità.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 cxd4 exd4', {
    idea: 'Riprendi verso il centro. Il pedone in d4 è sostenuto da c3 e il tuo alfiere resta fuori dalla catena.',
    hint: 'Riprendi con il pedone che tiene il tuo alfiere fuori dalla catena.',
    m: {
      cxd4: 'Questa lascia un pedone arretrato in e3 e richiude dentro il tuo alfiere. Riprendi con l\'altro pedone.',
      Nxd4: 'Il cavallo lì sta bene per un momento, ma hai rinunciato all\'idea di tenere un pedone forte in d4.',
    },
    end: {
      name: 'Sistema Londra, 5...cxd4',
      plans: [
        'Cbd2, Ad3 e O-O; il pedone in d4 è solido e ti dà la casa e5.',
        'Ce5 seguito da f2-f4 è la naturale costruzione sull\'ala di re.',
        'La colonna c è semiaperta per il Nero, quindi una torre in c1 è spesso utile.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6', { label: 'Offre subito il cambio', idea: 'Il Nero punta dritto all\'alfiere del Londra.' }),
  n('d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3', {
    idea: 'Tieni l\'alfiere. È il pezzo che dà mordente al Londra.',
    hint: 'Il Nero vuole cambiare il tuo pezzo migliore. Fatti da parte.',
    m: {
      Bxd6: 'Cambiare il tuo alfiere buono con quello peggiore del Nero è quello che il Nero spera.',
      Bg5: 'L\'alfiere in g5 qui non ha niente da fare, e ...h6 guadagna un tempo. In g3 tiene la diagonale che conta.',
    },
    end: {
      name: 'Sistema Londra, 4...Ad6',
      plans: [
        'c3, Cbd2, Ad3 e O-O: lo schema standard.',
        'Quando il Nero gioca ...Axg3, riprendi con hxg3: la colonna h si apre per la tua torre.',
        'Ce5 e f2-f4 restano il piano principale sull\'ala di re.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 c5', { label: 'Sfida centrale immediata', idea: 'Il Nero colpisce d4 prima di sviluppare l\'ala di re.' }),
  n('d4 d5 Bf4 Nf6 e3 c5 c3', {
    idea: 'Tieni il centro con il triangolo del Londra.',
    hint: 'Sostieni con un pedone il pedone d attaccato.',
    end: {
      name: 'Sistema Londra, 3...c5',
      plans: [
        'Cf3, Cbd2, Ad3 e O-O seguono in quasi qualunque ordine.',
        'Rispondi a ...Db6 con Db3, come sempre.',
        'Tieni la tensione su d4: di solito è il Nero a doverla sciogliere per primo, e questo gli costa un tempo.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 g6', { label: 'Schema est-indiano', idea: 'Il Nero fianchetta e colpirà il centro con ...c5 oppure ...d6 ed ...e5.' }),
  n('d4 d5 Bf4 Nf6 e3 g6 Nf3', {
    idea: 'Sviluppa e copri e5. Contro il fianchetto il Londra prevede h2-h3, Ae2 e una costruzione lenta.',
    hint: 'Sviluppa semplicemente il cavallo di re e mantieni lo schema.',
    end: {
      name: 'Sistema Londra contro il fianchetto',
      plans: [
        'h2-h3 è importante qui: impedisce ...Ch5 che colpisce il tuo alfiere e ...Ag4 che inchioda il cavallo.',
        'Ae2, O-O, c3 e Cbd2 completano lo schema.',
        'La rottura e3-e4, preparata da De2 e Tad1, è il modo principale di aprire la partita.',
      ],
    },
  }),
  n('d4 d5 Bf4 Nf6 e3 Bf5', { label: 'Specchio dell\'alfiere', idea: 'Anche il Nero sviluppa il suo pezzo problematico fuori dalla catena.' }),
  n('d4 d5 Bf4 Nf6 e3 Bf5 Nf3', {
    idea: 'Sviluppa e mantieni la struttura; più avanti c4 metterà alla prova l\'assenza dell\'alfiere dall\'ala di donna.',
    hint: 'Sviluppa il cavallo di re e continua a costruire.',
    end: {
      name: 'Sistema Londra, 3...Af5',
      plans: [
        'Qui c4 diventa forte: con l\'alfiere in f5 il pedone b7 e l\'ala di donna restano scoperti.',
        'Db3 che colpisce b7 è un\'idea ricorrente una volta che l\'alfiere ha lasciato l\'ala di donna.',
        'Altrimenti il normale schema con c3, Cbd2, Ae2 e O-O va benissimo.',
      ],
    },
  }),
  n('d4 d5 Bf4 c5', { label: '...c5 immediato', idea: 'Il Nero contesta subito d4.' }),
  n('d4 d5 Bf4 c5 e3', {
    idea: 'Costruisci la catena; d4 è tenuto dalla futura c3.',
    hint: 'Prosegui con lo schema standard: l\'alfiere è già fuori.',
    end: {
      name: 'Sistema Londra, 2...c5',
      plans: [
        'c3 alla mossa dopo tiene d4 e completa il triangolo.',
        'Seguono Cf3, Cbd2, Ad3 e O-O.',
        'Rispondi a ...Db6 con Db3, come sempre.',
      ],
    },
  }),
  n('d4 d5 Bf4 e6', { label: 'Schema solido', idea: 'Il Nero chiude dentro l\'alfiere di c8 ma tiene un centro solidissimo.' }),
  n('d4 d5 Bf4 e6 e3', {
    idea: 'La struttura standard del Londra.',
    hint: 'Prosegui con lo schema standard: l\'alfiere è già fuori.',
    end: {
      name: 'Sistema Londra, 2...e6',
      plans: [
        'Cf3, c3, Cbd2, Ad3 e O-O nell\'ordine consueto.',
        'L\'alfiere di c8 è il pezzo problematico del Nero: evita i cambi che lo liberano.',
        'Ce5 e la rottura e3-e4 sono i due piani principali.',
      ],
    },
  }),
  n('d4 Nf6', { label: 'Schema indiano', idea: 'Il Nero tiene aperte Est-Indiana, Nimzo e Grünfeld. Il Londra funziona contro tutte.' }),
  n('d4 Nf6 Bf4', {
    idea: 'La stessa mossa a prescindere. È proprio questa flessibilità a rendere il Londra utile da imparare.',
    hint: 'Il tuo schema non dipende da quello che gioca il Nero. Sviluppa l\'alfiere.',
    m: {
      c4: 'Quella invita Nimzo-Indiana, Grünfeld ed Est-Indiana tutte insieme: una quantità enorme di teoria. Il Londra le evita tutte.',
    },
  }),
  n('d4 Nf6 Bf4 g6', { label: 'Schema est-indiano', idea: 'Il Nero fianchetta e giocherà ...d6 ed ...e5, oppure ...d5 e ...c5.' }),
  n('d4 Nf6 Bf4 g6 e3', {
    idea: 'Costruisci la catena. Contro il fianchetto la mossa in più decisiva è h2-h3.',
    hint: 'Prosegui con lo schema del Londra.',
  }),
  n('d4 Nf6 Bf4 g6 e3 Bg7', { label: 'Linea principale', idea: 'Il Nero completa il fianchetto.' }),
  n('d4 Nf6 Bf4 g6 e3 Bg7 Nf3', {
    idea: 'Sviluppa e controlla e5, la casa che il Nero vuole per un pedone.',
    hint: 'Sviluppa il cavallo di re.',
  }),
  n('d4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O', { label: 'Linea principale', idea: 'Il Nero arrocca e prepara ...d6 ed ...e5.' }),
  n('d4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O Be2', {
    idea: 'Una casa modesta ma utile: tiene coperta h5 e prepara O-O e h2-h3.',
    hint: 'Sviluppa l\'ultimo pezzo leggero così da poter arroccare.',
    m: {
      Bd3: 'Contro un fianchetto l\'alfiere non ha bersagli su h7, e va a sbattere contro ...Ch5 che colpisce l\'alfiere di f4.',
    },
    end: {
      name: 'Sistema Londra contro l\'Est-Indiana',
      plans: [
        'O-O e h2-h3 alla mossa dopo: h3 è indispensabile per fermare ...Ch5 e ...Ag4.',
        'c3 e Cbd2 completano lo schema; poi il cavallo può andare in c4 a colpire d6.',
        'Se il Nero gioca ...d6 ed ...e5, rispondi dxe5 dxe5 e Ag5 oppure Ah2: la struttura resta comoda.',
        'La conquista di spazio con a4-a5 sull\'ala di donna è un buon piano a lungo termine quando il Nero attacca sull\'altra ala.',
      ],
    },
  }),
  n('d4 Nf6 Bf4 e6', { label: 'Flessibile', idea: 'Il Nero tiene in riserva ...d5 e ...c5.' }),
  n('d4 Nf6 Bf4 e6 e3', {
    idea: 'Lo schema è lo stesso.',
    hint: 'Prosegui con lo schema del Londra.',
    end: {
      name: 'Sistema Londra contro 2...e6',
      plans: [
        'Cf3, c3, Cbd2, Ad3 e O-O.',
        'Occhio a ...Ab4+: rispondi c3 oppure Cbd2, mai Ad2, perché vuoi che l\'alfiere resti in f4.',
        'Ce5 e la rottura e3-e4 sono le idee principali.',
      ],
    },
  }),
  n('d4 Nf6 Bf4 c5', { label: 'Sfida in stile Benoni', idea: 'Il Nero colpisce subito il centro.' }),
  n('d4 Nf6 Bf4 c5 e3', {
    idea: 'Tieni il centro con la catena; c3 sosterrà d4 alla mossa dopo.',
    hint: 'Prosegui con lo schema del Londra: c3 terrà d4.',
    end: {
      name: 'Sistema Londra contro 2...c5',
      plans: [
        'c3 alla mossa dopo; se il Nero prende in d4, riprendi con il pedone e per tenere l\'alfiere fuori dalla catena.',
        'Rispondi a ...Db6 con Db3.',
        'Cf3, Cbd2, Ad3 e O-O completano lo sviluppo.',
      ],
    },
  }),
)
