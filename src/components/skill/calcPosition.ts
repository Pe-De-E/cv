export const DIALOG_WIDTH = 360
export const GAP = -30

export interface Position {
  left: string
  bottom: string
  transform: string
}

export function calcPosition(anchorRect: DOMRect | null): Position {
  if (!anchorRect) return { left: '50%', transform: 'translateX(-50%)', bottom: '50%' }

  let left = anchorRect.left + anchorRect.width / 2 - DIALOG_WIDTH / 2
  left = Math.max(8, Math.min(left, window.innerWidth - DIALOG_WIDTH - 8))

  const bottomFromViewport = window.innerHeight - anchorRect.top + GAP

  return { left: `${left}px`, bottom: `${bottomFromViewport}px`, transform: 'none' }
}
