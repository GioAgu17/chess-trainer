import type { MoveNode, Side } from '../data/types'
import { normalizeSan } from '../engine/tree'
import { useI18n } from '../i18n'

interface MoveListProps {
  path: MoveNode[]
  side: Side
}

/** The scoresheet. The user's own moves are picked out in a stronger colour. */
export function MoveList({ path, side }: MoveListProps) {
  const { t } = useI18n()
  if (path.length === 0) {
    return (
      <div className="moves">
        <span className="moves__empty">{t('trainer.noMovesYet')}</span>
      </div>
    )
  }

  const pairs: Array<{ number: number; white?: string; black?: string }> = []
  path.forEach((node, ply) => {
    const number = Math.floor(ply / 2) + 1
    const san = normalizeSan(node.san)
    if (ply % 2 === 0) pairs.push({ number, white: san })
    else pairs[pairs.length - 1].black = san
  })

  const lastPly = path.length - 1

  const sanClass = (ply: number) => {
    const isUser = (ply % 2 === 0 ? 'white' : 'black') === side
    return [
      'moves__san',
      isUser ? 'moves__san--user' : '',
      ply === lastPly ? 'moves__san--last' : '',
    ]
      .filter(Boolean)
      .join(' ')
  }

  return (
    <div className="moves">
      {pairs.map((pair, index) => (
        <span className="moves__pair" key={pair.number}>
          <span className="moves__no">{pair.number}.</span>
          {pair.white && <span className={sanClass(index * 2)}>{pair.white}</span>}
          {pair.black && <span className={sanClass(index * 2 + 1)}>{pair.black}</span>}
        </span>
      ))}
    </div>
  )
}
