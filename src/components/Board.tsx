import { useMemo, useState, type CSSProperties } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import type { Side } from '../data/types'

export interface BoardMove {
  san: string
  from: string
  to: string
}

interface BoardProps {
  fen: string
  orientation: Side
  /** False while the computer is replying or the line is over. */
  interactive: boolean
  lastMove: { from: string; to: string } | null
  /** Square the last rejected move came from, flashed in red. */
  errorSquare: string | null
  /** Return true if the move was accepted, so the piece stays where it landed. */
  onMove: (move: BoardMove) => boolean
}

const LAST_MOVE: CSSProperties = { backgroundColor: 'rgba(255, 211, 60, 0.42)' }
const SELECTED: CSSProperties = { backgroundColor: 'rgba(104, 166, 255, 0.48)' }
const WRONG: CSSProperties = { backgroundColor: 'rgba(232, 96, 84, 0.55)' }
const QUIET_TARGET: CSSProperties = {
  background: 'radial-gradient(circle, rgba(15, 20, 15, 0.22) 19%, transparent 20%)',
}
const CAPTURE_TARGET: CSSProperties = {
  background: 'radial-gradient(circle, transparent 56%, rgba(15, 20, 15, 0.22) 57%)',
}

export function Board({
  fen,
  orientation,
  interactive,
  lastMove,
  errorSquare,
  onMove,
}: BoardProps) {
  const chess = useMemo(() => new Chess(fen), [fen])

  // A selection belongs to one position on a live board. Tying it to that key
  // rather than clearing it in an effect means a new position, or a board that
  // has gone quiet, can never show a stale highlight even for one frame.
  const selectionKey = `${fen}|${interactive}`
  const [selection, setSelection] = useState({ key: selectionKey, square: null as string | null })
  const selected = selection.key === selectionKey ? selection.square : null
  const setSelected = (square: string | null) => setSelection({ key: selectionKey, square })

  const legalTargets = useMemo(() => {
    if (!selected) return new Map<string, boolean>()
    const targets = new Map<string, boolean>()
    for (const move of chess.moves({ square: selected as never, verbose: true })) {
      targets.set(move.to, Boolean(move.captured))
    }
    return targets
  }, [chess, selected])

  const squareStyles = useMemo(() => {
    const styles: Record<string, CSSProperties> = {}
    if (lastMove) {
      styles[lastMove.from] = { ...LAST_MOVE }
      styles[lastMove.to] = { ...LAST_MOVE }
    }
    if (selected) styles[selected] = { ...styles[selected], ...SELECTED }
    for (const [square, isCapture] of legalTargets) {
      styles[square] = { ...styles[square], ...(isCapture ? CAPTURE_TARGET : QUIET_TARGET) }
    }
    if (errorSquare) styles[errorSquare] = { ...styles[errorSquare], ...WRONG }
    return styles
  }, [errorSquare, lastMove, legalTargets, selected])

  /** Turn a from/to pair into SAN without disturbing the live position. */
  const attempt = (from: string, to: string): boolean => {
    const probe = new Chess(fen)
    let san: string
    try {
      san = probe.move({ from, to, promotion: 'q' }).san
    } catch {
      return false
    }
    return onMove({ san, from, to })
  }

  const ownPieceOn = (square: string): boolean => {
    const piece = chess.get(square as never)
    return piece?.color === chess.turn()
  }

  const handleSquareClick = ({ square }: { square: string }) => {
    if (!interactive) return
    if (selected && legalTargets.has(square)) {
      attempt(selected, square)
      setSelected(null)
      return
    }
    if (square === selected) {
      setSelected(null)
      return
    }
    setSelected(ownPieceOn(square) ? square : null)
  }

  return (
    <div className="board-frame">
      <div className="board-frame__inner">
        <Chessboard
          options={{
            id: 'trainer-board',
            position: fen,
            boardOrientation: orientation,
            allowDragging: interactive,
            allowDrawingArrows: false,
            animationDurationInMs: 190,
            showNotation: true,
            darkSquareStyle: { backgroundColor: '#779556' },
            lightSquareStyle: { backgroundColor: '#ebecd0' },
            darkSquareNotationStyle: { color: '#ebecd0', opacity: 0.85 },
            lightSquareNotationStyle: { color: '#779556' },
            alphaNotationStyle: {
              position: 'absolute',
              bottom: '2px',
              right: '3px',
              fontSize: 'clamp(9px, 1.4vw, 12px)',
              fontWeight: 600,
              userSelect: 'none',
              pointerEvents: 'none',
            },
            numericNotationStyle: {
              position: 'absolute',
              top: '2px',
              left: '3px',
              fontSize: 'clamp(9px, 1.4vw, 12px)',
              fontWeight: 600,
              userSelect: 'none',
              pointerEvents: 'none',
            },
            dropSquareStyle: { boxShadow: 'inset 0 0 0 3px rgba(255, 255, 255, 0.55)' },
            squareStyles,
            canDragPiece: ({ square }) => interactive && Boolean(square) && ownPieceOn(square!),
            onSquareClick: handleSquareClick,
            onPieceDrop: ({ sourceSquare, targetSquare }) => {
              if (!interactive || !targetSquare) return false
              const accepted = attempt(sourceSquare, targetSquare)
              setSelected(null)
              return accepted
            },
          }}
        />
      </div>
    </div>
  )
}
