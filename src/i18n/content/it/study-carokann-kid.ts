import type { ContentDictionary } from '../../keys'

/** Le guide di studio: Difesa Caro-Kann e Difesa Est-Indiana. */
export const studyCaroKannKid: ContentDictionary = {
  /* ----------------------------------------------------- Difesa Caro-Kann */
  'study.caro-kann.bigIdea':
    'La Caro-Kann costruisce lo stesso muro della Francese ma ne risolve prima il problema. Giocando ...c6 prima di ...d5, il Nero tiene aperta la diagonale dell\'alfiere di c8, così l\'alfiere arriva in f5 o g4 prima che ...e6 chiuda la porta. Il costo è una mossa e un po\' di ambizione; la ricompensa è una struttura senza debolezze e un alfiere davvero buono.',
  'study.caro-kann.feel':
    'Calma. Starai molto raramente peggio e molto raramente molto meglio. Le partite si decidono su piccoli vantaggi e sulla tecnica di finale più che sulla tattica, il che la rende una scelta eccellente se non ti piace essere attaccato e una scelta scarsa se hai bisogno di vincere ogni partita.',
  'study.caro-kann.s.0.name': 'La struttura Classica',
  'study.caro-kann.s.0.shape':
    'Pedoni neri in c6 ed e6 con l\'alfiere campochiaro già fuori, in f5 o g6; in molte linee il Bianco ha pedoni in d4 e h4-h5.',
  'study.caro-kann.s.0.you':
    'Sei solido dappertutto. Il piano è ...Cd7, ...Cgf6, arrocco - spesso lungo - e poi ...c5 per colpire d4. Cambia pezzi volentieri: i finali sono piacevoli.',
  'study.caro-kann.s.0.them':
    'Il Bianco ha più spazio e spesso un\'avanzata di pedoni sull\'ala di re. Vuole intrappolare o cambiare il tuo alfiere buono e aprire linee prima che tu finisca lo sviluppo.',
  'study.caro-kann.s.1.name': 'La struttura di cambio',
  'study.caro-kann.s.1.shape': 'Dopo cxd5 cxd5, pedoni simmetrici con una colonna c semiaperta per il Nero.',
  'study.caro-kann.s.1.you':
    'Semplice e comoda. Porta fuori l\'alfiere in f5 o g4, gioca ...e6, ...Ad6 e ...Cc6, e usa la colonna c. C\'è pochissimo che possa andare storto.',
  'study.caro-kann.s.1.them':
    'Il Bianco gioca un attacco di minoranza con b4-b5 esattamente come nella Variante di Cambio del Gambetto di Donna, oppure prova a ricavare qualcosa dallo spazio centrale in più.',
  'study.caro-kann.p.0.title': 'Porta fuori l\'alfiere per primo',
  'study.caro-kann.p.0.detail':
    'L\'idea che definisce tutta l\'apertura. ...Af5 o ...Ag4 prima di ...e6, sempre. Tutto il resto della Caro-Kann sono normali buone mosse; questa è la parte che la fa funzionare.',
  'study.caro-kann.p.1.title': '...Cd7 invece di ...Cc6',
  'study.caro-kann.p.1.detail':
    'Il cavallo di donna appartiene a d7, dove non blocca il pedone c e può riprendere in f6 con un pezzo. Tenere libero il pedone c è ciò che permette più avanti la rottura ...c5.',
  'study.caro-kann.p.2.title': 'La rottura ...c5',
  'study.caro-kann.p.2.detail':
    'Hai speso una mossa in ...c6: te la riprendi giocando più avanti ...c5 in un colpo solo, colpendo d4 quando il Bianco è meno pronto.',
  'study.caro-kann.p.3.title': 'Arroccare lungo',
  'study.caro-kann.p.3.detail':
    'Nelle linee Classiche, con i pedoni bianchi che avanzano sull\'ala di re, il re nero spesso sta più sicuro sull\'ala di donna. E in più mette subito una torre sulla colonna d.',
  'study.caro-kann.k.0.why':
    'La casa che giustifica tutta l\'apertura. Un alfiere lì vale il tempo che è costato ...c6.',
  'study.caro-kann.k.1.why': 'Il pedone centrale bianco, e il bersaglio della rottura ...c5.',
  'study.caro-kann.k.2.why': 'L\'avamposto che il Bianco vuole per un cavallo. ...Cd7 e ...Ad6 lo tengono coperto.',
  'study.caro-kann.k.3.why':
    'Dove si ritira l\'alfiere quando il Bianco gioca h4-h5. Sapere che lì è al sicuro è ciò che rende giocabile tutto lo schema.',
  'study.caro-kann.b.0.when':
    'Una volta finito lo sviluppo. È la mossa liberatoria e il motivo per cui il pedone c è stato tenuto flessibile.',
  'study.caro-kann.b.1.when':
    'Nelle linee in cui il Bianco ha impegnato il pedone d e i tuoi pezzi sono già attivi. Meno comune ma molto forte quando funziona.',
  'study.caro-kann.b.2.when':
    'Solo nella variante d\'avanzata con un pedone in e5, e solo una volta che il re è al sicuro.',
  'study.caro-kann.f.0.title': 'Giocare ...e6 prima di ...Af5',
  'study.caro-kann.f.0.detail':
    'Trasforma la Caro-Kann in una Francese peggiore: hai l\'alfiere cattivo e per averlo hai anche speso una mossa in più con ...c6. Porta fuori l\'alfiere per primo, ogni volta.',
  'study.caro-kann.f.1.title': 'Lasciare intrappolare l\'alfiere dopo h4-h5',
  'study.caro-kann.f.1.detail':
    'Nella Classica il Bianco gioca h4 e h5 per colpire l\'alfiere in g6. Giocare ...h6 al momento giusto dà all\'alfiere una via di ritirata e ferma tutta l\'idea.',
  'study.caro-kann.f.2.title': 'Non giocare mai ...c5',
  'study.caro-kann.f.2.detail':
    'Solido non vuol dire passivo. Una Caro-Kann in cui il Nero sposta pezzi e non rompe mai perde lentamente contro il vantaggio di spazio.',

  /* --------------------------------------------------- Difesa Est-Indiana */
  'study.kings-indian-defence.bigIdea':
    'L\'Est-Indiana concede al Bianco tutto il centro di proposito. Il Nero fa il fianchetto, arrocca e poi attacca, di solito con ...e5, ...f5, ...f4 e ogni pezzo lanciato contro il re bianco mentre il Bianco fa lo stesso sull\'altra ala. È l\'apertura più sbilanciata di questo repertorio: non avrai molte partite tranquille, e conoscere il piano conta molto più che conoscere le mosse.',
  'study.kings-indian-defence.feel':
    'Un duello al coltello. Attaccano entrambi, nessuno difende, e di solito decide quale attacco arriva per primo. Aspettati di perdere male qualche partita e di vincerne altre in venticinque mosse. È enormemente istruttiva su tempeste di pedoni e gioco d\'attacco.',
  'study.kings-indian-defence.s.0.name': 'La catena bloccata di Mar del Plata',
  'study.kings-indian-defence.s.0.shape':
    'Pedoni bianchi in c4, d5 ed e4; pedoni neri in c7, d6, e5 e f5 in arrivo. Il centro è completamente chiuso ed entrambi attaccano su ali opposte.',
  'study.kings-indian-defence.s.0.you':
    'Gioca ...f5, ...f4, ...g5, ...h5 e matto. Davvero: il cavallo va in f6 o h5, la torre in f7 e g7, e la posizione è una corsa in cui la strada più corta è la tua.',
  'study.kings-indian-defence.s.0.them':
    'Il Bianco gioca c4-c5 e rompe sull\'ala di donna, puntando i pedoni b7 e c7 e la colonna a. Il suo attacco di solito è oggettivamente più veloce; il tuo è puntato sul re.',
  'study.kings-indian-defence.s.1.name': 'Il centro aperto dopo dxe5',
  'study.kings-indian-defence.s.1.shape':
    'Il Bianco ha sciolto la tensione centrale prendendo in e5, quindi la colonna d è aperta e le catene di pedoni chiuse che fanno di questa apertura quello che è non compaiono mai.',
  'study.kings-indian-defence.s.1.you':
    'È la versione tranquilla. Riprendi, cambia le donne se te lo offrono, e gioca il finale: l\'alfiere in fianchetto è un buon pezzo e la struttura è simmetrica.',
  'study.kings-indian-defence.s.1.them':
    'Il Bianco vuole esattamente questo: nessun attacco per il Nero e una piccola stretta strutturale. Ammettilo con onestà e gioca bene il finale invece di forzare un attacco che non c\'è.',
  'study.kings-indian-defence.p.0.title': 'La tempesta di pedoni ...f5-f4',
  'study.kings-indian-defence.p.0.detail':
    'Tutta l\'apertura. Prima ...f5, poi ...f4 per fissare l\'ala di re e prendere e3 e g3, poi porta i pezzi. Una volta che ...f4 atterra, i pezzi bianchi non riescono facilmente a tornare a difendere.',
  'study.kings-indian-defence.p.1.title': 'Il cavallo da f6 a h5 oppure e8-f6',
  'study.kings-indian-defence.p.1.detail':
    'Il cavallo di f6 deve rimuoversi perché ...f5 sia forte. h5 lo tiene attivo e sostiene ...f4; e8 è più lento ma lo toglie di mezzo per ...f5 e ...g5.',
  'study.kings-indian-defence.p.2.title': 'Il sollevamento di torre ...Tf7-g7',
  'study.kings-indian-defence.p.2.detail':
    'Una volta che la colonna f è bloccata dal tuo stesso pedone in f4, la torre si sposta di lato. È lento ed è decisivo quando arriva la tempesta di pedoni.',
  'study.kings-indian-defence.p.3.title': 'Il controgioco con ...c6 e ...a6',
  'study.kings-indian-defence.p.3.detail':
    'L\'alternativa alla tempesta di pedoni: colpire il centro dall\'ala di donna e giocare per ...b5. Più lento, più sicuro, e una buona scelta quando l\'attacco bianco è più rapido del tuo.',
  'study.kings-indian-defence.k.0.why':
    'Il pedone che blocca il centro. Una volta fissato da d4-d5, la partita diventa una corsa e tutto il resto ne consegue.',
  'study.kings-indian-defence.k.1.why':
    'La casa a cui punta la tempesta. Un pedone lì toglie e3 e g3 ai pezzi bianchi e non si può rimuovere.',
  'study.kings-indian-defence.k.2.why':
    'Dove rompe il Bianco. La rapidità con cui riesci ad affrontarlo decide se il tuo attacco arriva per primo.',
  'study.kings-indian-defence.k.3.why':
    'La casa del tuo alfiere. Nelle posizioni chiuse sembra brutto; nel momento in cui il centro si apre è il pezzo migliore della scacchiera.',
  'study.kings-indian-defence.b.0.when':
    'Presto, per provocare d4-d5 e bloccare il centro. È la posizione che tutta l\'apertura cerca.',
  'study.kings-indian-defence.b.1.when':
    'Appena il centro è chiuso e il cavallo si è rimosso. Rimandarla regala al Bianco un tempo gratis sull\'ala di donna.',
  'study.kings-indian-defence.b.2.when':
    'Quando la rottura bianca sull\'ala di donna è più veloce della tua sull\'ala di re. È il piano sobrio e non c\'è niente di cui vergognarsi.',
  'study.kings-indian-defence.f.0.title': 'Giocare ...f5 con il cavallo ancora in f6',
  'study.kings-indian-defence.f.0.detail':
    'La mossa va preparata. Senza prima ...Ch5 o ...Ce8, ...f5 perde tempo e l\'attacco non parte mai.',
  'study.kings-indian-defence.f.1.title': 'Difendere l\'ala di donna',
  'study.kings-indian-defence.f.1.detail':
    'L\'abitudine più difficile da rompere. Mosse come ...Tb8 e ...a6 per tenere l\'ala di donna di solito fanno solo perdere la corsa. L\'Est-Indiana è una scommessa sul fatto che il tuo attacco sia più veloce: giocala così, oppure gioca altro.',
  'study.kings-indian-defence.f.2.title': 'Cambiare le donne senza accorgersene',
  'study.kings-indian-defence.f.2.detail':
    'All\'attacco serve la donna. Se il Bianco offre il cambio delle donne nelle linee di Mar del Plata, accettarlo di solito vuol dire accettare di stare leggermente peggio per il resto della partita.',
  'study.kings-indian-defence.f.3.title': 'Giocarla contro ogni schema bianco',
  'study.kings-indian-defence.f.3.detail':
    'Contro i sistemi con il Fianchetto e con i Quattro Pedoni i piani cambiano davvero. Se giochi ...e5 e ...f5 a memoria, ti ritroverai in una brutta posizione senza capire perché.',
}
