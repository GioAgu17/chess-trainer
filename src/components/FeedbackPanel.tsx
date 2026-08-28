import type { MoveNode, Side } from '../data/types'
import type { Phase } from '../engine/session'
import { moveLabel, normalizeSan } from '../engine/tree'

interface FeedbackPanelProps {
  side: Side
  phase: Phase
  error: { played: string; reason: string; deliberate: boolean } | null
  revealed: boolean
  /** Every move played so far, so both halves of the last pair stay readable. */
  path: MoveNode[]
  openingSummary: string
  onTryAgain: () => void
  onShowMe: () => void
  /** Fail a move, read why it matters: the link into the study section. */
  onStudy: () => void
}

type Tone = 'good' | 'bad' | 'info' | 'warn'

export function FeedbackPanel({
  side,
  phase,
  error,
  revealed,
  path,
  openingSummary,
  onTryAgain,
  onShowMe,
  onStudy,
}: FeedbackPanelProps) {
  const isUserPly = (ply: number) => (ply % 2 === 0 ? 'white' : 'black') === side

  // The two halves of the current exchange. Keeping the user's own move on
  // screen alongside the reply is what makes the explanation readable: the
  // computer answers within a second, and a lesson you cannot finish reading
  // is not a lesson.
  let userPly = -1
  let opponentPly = -1
  path.forEach((_, ply) => {
    if (isUserPly(ply)) userPly = ply
    else opponentPly = ply
  })
  const userNode = userPly >= 0 ? path[userPly] : undefined
  const opponentNode = opponentPly >= 0 ? path[opponentPly] : undefined
  const opponentIsLatest = opponentPly > userPly

  if (error) {
    // A sound move played outside the repertoire is not an error, and saying
    // so keeps the trainer honest: the user has not blundered, they have
    // wandered off the line they are learning.
    return (
      <div className="feedback">
        {error.deliberate ? (
          <Status tone="warn" icon="~" text="Sound move, not this repertoire" />
        ) : (
          <Status tone="bad" icon="✕" text="That is not the move" />
        )}
        <div>
          <div className="feedback__move">
            {moveLabel(path.length, error.played)}
            <span className="feedback__label">
              {error.deliberate ? ' is playable, but off the line' : ' is not in the repertoire here'}
            </span>
          </div>
          <p className="feedback__text">{error.reason}</p>
        </div>
        <div className="feedback__actions">
          <button type="button" className="btn btn--primary" onClick={onTryAgain}>
            Try again
          </button>
          <button type="button" className="btn" onClick={onShowMe}>
            Show me
          </button>
          <button type="button" className="btn btn--ghost" onClick={onStudy}>
            Why?
          </button>
        </div>
      </div>
    )
  }

  if (!userNode && !opponentNode) {
    return (
      <div className="feedback">
        <Status tone="info" icon="▸" text={side === 'white' ? 'Your move' : 'Getting started'} />
        <p className="feedback__text">{openingSummary}</p>
        <p className="feedback__hint">
          {side === 'white'
            ? 'You have White. Play the first move of the repertoire.'
            : 'You have Black. The computer opens; your reply follows.'}
        </p>
      </div>
    )
  }

  // Chronological order, which differs by colour: the user leads with White,
  // the computer leads with Black.
  const blocks = [
    userNode ? { ply: userPly, node: userNode, who: 'you' as const, dim: opponentIsLatest } : null,
    opponentNode
      ? { ply: opponentPly, node: opponentNode, who: 'computer' as const, dim: !opponentIsLatest }
      : null,
  ]
    .filter((block) => block !== null)
    .sort((a, b) => a.ply - b.ply)

  const status: { tone: Tone; icon: string; text: string } = userNode
    ? revealed
      ? { tone: 'warn', icon: '!', text: 'Shown to you' }
      : { tone: 'good', icon: '✓', text: 'Correct' }
    : { tone: 'info', icon: '▸', text: 'The computer opened' }

  return (
    <div className="feedback">
      <Status {...status} />

      {blocks.map((block) => (
        <MoveBlock key={block.ply} {...block} />
      ))}

      <p className="feedback__hint">
        {phase === 'complete'
          ? 'End of the line.'
          : phase === 'opponent'
            ? 'The computer is replying...'
            : 'Your move.'}
      </p>
    </div>
  )
}

function MoveBlock({
  ply,
  node,
  who,
  dim,
}: {
  ply: number
  node: MoveNode
  who: 'you' | 'computer'
  dim: boolean
}) {
  return (
    <div className={`move-block${dim ? ' move-block--dim' : ''}`}>
      <div className="feedback__move">
        {moveLabel(ply, normalizeSan(node.san))}
        <span className="feedback__who">{who}</span>
        {node.label && <span className="feedback__label">{node.label}</span>}
      </div>
      {node.idea && <p className="feedback__text">{node.idea}</p>}
    </div>
  )
}

function Status({ tone, icon, text }: { tone: Tone; icon: string; text: string }) {
  return (
    <div className="feedback__status">
      <span className={`feedback__icon feedback__icon--${tone}`} aria-hidden="true">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  )
}
