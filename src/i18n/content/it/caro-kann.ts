import { nodes, tree } from '../tree'

const n = tree('caro-kann')

/** Difesa Caro-Kann, Classica. */
export const caroKannTree = nodes(
  n('e4', { label: 'Apertura di pedone di re', idea: 'Il Bianco prende il centro.' }),
  n('e4 c6', {
    idea: 'La Caro-Kann. Prepara ...d5 con il sostegno di un pedone lasciando aperta la diagonale c8-h3, così l\'alfiere campochiaro esce prima che la catena si chiuda.',
    hint: 'Prepara ...d5 con una mossa di pedone che non chiuda dentro il tuo alfiere campochiaro.',
    m: {
      e6: 'Quella è la Difesa Francese: solida, ma chiude dentro l\'alfiere di c8, ed è esattamente quello che la Caro-Kann evita.',
      d5: 'Quella è la Scandinava: dopo exd5 Dxd5 Cc3 la tua donna perde tempo. La Caro-Kann sostiene d5 con un pedone.',
    },
  }),
  n('e4 c6 d4', { label: 'Linea principale', idea: 'Il Bianco costruisce il centro classico.' }),
  n('e4 c6 d4 d5', {
    idea: 'Contesta il centro adesso che è sostenuto come si deve.',
    hint: 'Contesta il centro con il pedone che hai preparato.',
    m: {
      e5: 'Il Bianco prende semplicemente con dxe5 e tu non hai una buona ripresa; il pedone c6 non aiuta.',
      Nf6: 'Il Bianco gioca e5 e guadagna tempo e spazio mentre tu non hai contestato niente al centro.',
    },
  }),
  n('e4 c6 d4 d5 Nc3', { label: 'Linea principale', idea: 'Il Bianco difende e4 e invita al cambio classico.' }),
  n('e4 c6 d4 d5 Nc3 dxe4', {
    idea: 'Prendi. Tutto il senso della struttura Caro-Kann è che dopo Cxe4 l\'alfiere campochiaro esce prima di ...e6.',
    hint: 'Cambia al centro così che il tuo alfiere campochiaro esca prima che la catena si chiuda.',
    m: {
      e6: 'Questa traspone in una Francese e chiude dentro proprio l\'alfiere che la Caro-Kann vuole liberare.',
      Nf6: 'Il Bianco gioca e5 e dopo ...Cfd7 sei in una posizione in stile francese con l\'alfiere ancora chiuso.',
      g6: 'La Gurgenidze: giocabile ma molto impegnativa, e il Bianco ottiene un forte centro.',
    },
  }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4', { label: 'Linea principale', idea: 'Il Bianco riprende con il cavallo.' }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5', {
    idea: 'La Caro-Kann Classica. L\'alfiere esce con tempo, colpendo il cavallo: è la mossa che giustifica tutta l\'apertura.',
    hint: 'Sviluppa l\'alfiere fuori dalla catena di pedoni, con tempo contro il cavallo.',
    m: {
      Nf6: 'Quelle sono la Bronstein-Larsen o la Tartakower, dove il Bianco prende in f6 e ti rovina la struttura in cambio di gioco per i pezzi.',
      Nd7: 'La Variante Karpov: perfettamente sana, ma più lenta. Tutto il senso della Caro-Kann è far uscire l\'alfiere.',
      e6: 'Questa spreca l\'unico vantaggio che la Caro-Kann ha sulla Francese: l\'alfiere resta chiuso dentro.',
      Bg4: 'L\'alfiere lì non ha bersagli e il Bianco gioca f3 o h3 guadagnando tempo.',
    },
  }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3', { label: 'Linea principale', idea: 'Il cavallo si sposta e attacca l\'alfiere.' }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6', {
    idea: 'Ritirati lungo la diagonale. L\'alfiere è al sicuro in g6 e continua a fare il suo lavoro.',
    hint: 'L\'alfiere è attaccato. Tienilo sulla stessa diagonale.',
    m: {
      Bd7: 'Passiva: annulla lo sviluppo che avevi appena ottenuto.',
      Be6: 'L\'alfiere sta peggio lì: blocca il pedone e, quindi non puoi più giocare ...e6 comodamente.',
      Bc8: 'Questa restituisce tutto il senso della variante. L\'alfiere è uscito per restare fuori.',
      e6: 'L\'alfiere in f5 è attaccato proprio adesso. Sviluppare ignorando l\'attacco lo perde.',
    },
  }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4', { label: 'Linea principale', idea: 'Il Bianco guadagna spazio e minaccia h4-h5 per intrappolare o cambiare l\'alfiere.' }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6', {
    idea: 'Indispensabile. Dà all\'alfiere la casa h7 così che h4-h5 non lo intrappoli.',
    hint: 'Il Bianco minaccia di spingere ancora il pedone h e intrappolare il tuo alfiere. Fagli una casa.',
    m: {
      h5: 'Ferma h5 ma indebolisce per sempre g5 e g6; il Bianco gioca Cf3 e Ce5 con una posizione molto comoda.',
      e6: 'Questa è la mossa che perde l\'alfiere: il Bianco gioca h5 e l\'alfiere in g6 non ha più case.',
      Nf6: 'Il Bianco gioca h5 e l\'alfiere in g6 non ha dove andare.',
    },
  }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3', { label: 'Linea principale', idea: 'Il Bianco sviluppa e prepara Ce5 e Ad3.' }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7', {
    idea: 'Sviluppa il cavallo in d7, coprendo e5 e preparando ...Cgf6 senza bloccare niente.',
    hint: 'Sviluppa il cavallo di donna sulla casa che copre e5.',
    m: {
      Nf6: 'Giocabile, ma permette Ce5 con pressione mentre e5 non è ancora coperta.',
      e6: 'Naturale, ma il cavallo deve venire prima per coprire e5, altrimenti Ce5 arriva con forza.',
    },
    end: {
      name: 'Caro-Kann, Variante Classica linea principale',
      plans: [
        'Completa lo sviluppo con ...Cgf6, ...e6, ...Ad6 e ...Dc7: uno schema che si ripete in quasi tutte le linee.',
        'Arrocca lungo nelle linee più taglienti: con il Bianco che ha spinto h4, il re nero sta spesso meglio sull\'ala di donna.',
        'La rottura ...c5 è il tuo modo principale di aprire la posizione e recuperare la mossa spesa su ...c6.',
        'La tua struttura non ha debolezze, quindi puoi cambiare pezzi con leggerezza: i finali sono comodi.',
        'Tieni d\'occhio la casa e5: se il Bianco ci mette un cavallo sostenuto, cambialo con ...Cxe5 o ...Ad6.',
      ],
    },
  }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 h5', { label: 'Spinge comunque', idea: 'Il Bianco spinge lo stesso, costringendo l\'alfiere a tornare indietro.' }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 h5 Bh7', {
    idea: 'In h7 l\'alfiere è perfettamente al sicuro: è esattamente per questo che ...h6 era necessaria.',
    hint: 'La tua mossa precedente ha creato una casa per questo pezzo. Usala.',
    end: {
      name: 'Caro-Kann Classica, 7.h5',
      plans: [
        'Sviluppa con ...Cd7, ...Cgf6, ...e6 e ...Ad6, poi arrocca dalla parte più sicura.',
        'Il pedone in h5 è una debolezza a lungo termine: nei finali diventa un bersaglio.',
        'La rottura ...c5 resta il modo di aprire la posizione.',
      ],
    },
  }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3', { label: 'Sviluppo tranquillo', idea: 'Il Bianco rinuncia all\'avanzata del pedone h e sviluppa.' }),
  n('e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3 Nd7', {
    idea: 'Sviluppa e copri e5 prima che il Bianco possa usarla.',
    hint: 'Sviluppa il cavallo di donna sulla casa che copre e5.',
    end: {
      name: 'Caro-Kann Classica, 6.Cf3',
      plans: [
        '...Cgf6, ...e6, ...Ad6 e ...Dc7 completano lo sviluppo.',
        'Senza h4-h5 il tuo alfiere in g6 è completamente al sicuro: è la versione più comoda della variante.',
        'La rottura ...c5 libera la posizione al momento giusto.',
      ],
    },
  }),
  n('e4 c6 d4 d5 e5', { label: 'Variante di Avanzata', idea: 'Il Bianco chiude il centro e prende spazio: oggi è il tentativo più diffuso.' }),
  n('e4 c6 d4 d5 e5 Bf5', {
    idea: 'La ragione per giocare la Caro-Kann invece della Francese: l\'alfiere esce prima che ...e6 lo chiuda dentro.',
    hint: 'Prima di giocare ...e6, fai uscire l\'alfiere.',
    m: {
      e6: 'Questa trasforma la posizione in una Francese con l\'alfiere cattivo, l\'unica cosa che la Caro-Kann esiste per evitare.',
      c5: 'La rottura è un\'idea francese. Qui hai già speso una mossa su ...c6, quindi prima fai uscire l\'alfiere.',
    },
    end: {
      name: 'Caro-Kann, Variante di Avanzata',
      plans: [
        'Prosegui con ...e6, ...Cd7, ...Ce7 e ...c5, colpendo la base della catena.',
        'Se il Bianco gioca Cf3 e Ae2 con Ch4 che colpisce il tuo alfiere, preparati a rispondere ...Ag6 o ...Ae4.',
        'La rottura ...c5 e la pressione su d4 sono i piani principali, esattamente come nella Francese, ma con l\'alfiere buono.',
        'Evita ...h5 se non è forzata: indebolisce g5 per sempre.',
      ],
    },
  }),
  n('e4 c6 d4 d5 exd5', { label: 'Variante di Cambio', idea: 'Il Bianco semplifica e gioca per un piccolo vantaggio strutturale.' }),
  n('e4 c6 d4 d5 exd5 cxd5', {
    idea: 'Riprendi verso il centro. La posizione somiglia a un Gambetto di Donna di cambio con i colori invertiti.',
    hint: 'Riprendi con il pedone che tiene un pedone in d5.',
    m: {
      Qxd5: 'La donna esce presto e il Bianco guadagna tempo con Cc3. Riprendi con il pedone.',
    },
    end: {
      name: 'Caro-Kann, Variante di Cambio',
      plans: [
        'Sviluppa con ...Cc6, ...Cf6, ...Af5 oppure ...Ag4 ed ...e6.',
        'Se il Bianco gioca il Panov con c4, rispondi con ...Cf6 ed ...e6 oppure ...Cc6 e ...Ag4.',
        'Occhio all\'attacco di minoranza con b4-b5: rispondi con ...a6 e pezzi sulla colonna c.',
      ],
    },
  }),
  n('e4 c6 d4 d5 f3', { label: 'Variante Fantasy', idea: 'Il Bianco puntella e4 con il pedone f, puntando a un grande centro al prezzo della sicurezza del re.' }),
  n('e4 c6 d4 d5 f3 e6', {
    idea: 'La risposta più sicura. Tiene solido il centro e fa sì che la diagonale e1-h4 indebolita resti un problema del Bianco.',
    hint: 'Tieni solido il centro invece di aprirlo mentre il Bianco ha un pedone centrale in più.',
    m: {
      dxe4: 'Dopo fxe4 il Bianco ha il grande centro che era tutto lo scopo di f3, e tu non hai niente in cambio.',
    },
    end: {
      name: 'Caro-Kann, Variante Fantasy',
      plans: [
        'Prosegui con ...Cf6, ...Ad6 oppure ...Ae7, arrocco e la rottura ...c5.',
        'Il pedone in f3 indebolisce le diagonali g1-a7 ed e1-h4: ...Db6 e ...Dh4+ sono idee ricorrenti.',
        'Non aprire il centro finché non sei completamente sviluppato.',
      ],
    },
  }),
  n('e4 c6 d4 d5 Nd2', { label: 'Ordine di mosse moderno', idea: 'Il Bianco difende e4 con l\'altro cavallo, tenendo libero il pedone di c.' }),
  n('e4 c6 d4 d5 Nd2 dxe4', {
    idea: 'Cambia come al solito: dopo Cxe4 la partita traspone direttamente nella Classica.',
    hint: 'Fai lo stesso cambio della linea principale; la partita traspone.',
    end: {
      name: 'Caro-Kann, 3.Cd2',
      plans: [
        'Dopo Cxe4 gioca ...Af5 e sei nella linea principale della Classica.',
        'Valgono tutti i piani abituali: ...Cd7, ...Cgf6, ...e6, ...Ad6 e la rottura ...c5.',
        'Il cavallo in d2 invece che in c3 significa che il Bianco non può attaccare facilmente d5 con c4.',
      ],
    },
  }),
  n('e4 c6 Nf3', { label: 'Sviluppo flessibile', idea: 'Il Bianco sviluppa per primo, tenendo disponibili sia d4 sia d3.' }),
  n('e4 c6 Nf3 d5', {
    idea: 'Gioca comunque la mossa della Caro-Kann: la partita di solito traspone dopo d4.',
    hint: 'Gioca la tua mossa standard; la partita trasporrà.',
    end: {
      name: 'Caro-Kann, 2.Cf3',
      plans: [
        'Se il Bianco gioca d4 sei nelle linee principali.',
        'Se il Bianco gioca e5, rispondi ...Af5 come nella Variante di Avanzata.',
        'Se il Bianco gioca exd5 cxd5 hai una partita comoda e simmetrica.',
      ],
    },
  }),
  n('e4 c6 Nc3', { label: 'Variante dei Due Cavalli', idea: 'Il Bianco sviluppa in modo flessibile e spesso prosegue con Cge2 o Cf3.' }),
  n('e4 c6 Nc3 d5', {
    idea: 'La sfida standard al centro.',
    hint: 'Gioca la tua mossa standard e contesta il centro.',
    end: {
      name: 'Caro-Kann, Variante dei Due Cavalli',
      plans: [
        'Dopo Cf3 la risposta principale è ...Ag4, che inchioda il cavallo e risolve il problema dell\'alfiere.',
        'Se il Bianco prende in d5, riprendi con il pedone di c.',
        'Prosegui con ...e6, ...Cf6, ...Ae7 e una partita solida e facile.',
      ],
    },
  }),
  n('e4 c6 c4', { label: 'Panov accelerato', idea: 'Il Bianco prende spazio sull\'ala di donna e punta alle strutture Panov.' }),
  n('e4 c6 c4 d5', {
    idea: 'Colpisci il centro. Con i pedoni in e4 e c4 il Bianco è allentato, e la tensione ti conviene.',
    hint: 'Contesta subito il centro mentre il Bianco ha due pedoni scoperti lì.',
    end: {
      name: 'Caro-Kann, 2.c4',
      plans: [
        'Dopo exd5 cxd5 ottieni spesso una posizione con pedone isolato, ma stavolta l\'isolato è del Bianco.',
        'Sviluppa con ...Cf6, ...Cc6, ...e6 e ...Ae7.',
        'La casa d4 è un avamposto naturale per i tuoi pezzi.',
      ],
    },
  }),
)
