import { Chessboard } from 'react-chessboard'
import type { Side } from '../data/types'

/**
 * A small, non-interactive board.
 *
 * Used wherever a number needs to lead back to the position behind it - the
 * statistics page and the puzzle history. It shares no state with the trainer
 * board, which is the only place moves are actually made.
 */
export function MiniBoard({ fen, orientation }: { fen: string; orientation: Side }) {
  return (
    <div className="mini-board">
      <Chessboard
        options={{
          id: `mini-${fen}`,
          position: fen,
          boardOrientation: orientation,
          allowDragging: false,
          allowDrawingArrows: false,
          showNotation: false,
          darkSquareStyle: { backgroundColor: '#779556' },
          lightSquareStyle: { backgroundColor: '#ebecd0' },
        }}
      />
    </div>
  )
}
