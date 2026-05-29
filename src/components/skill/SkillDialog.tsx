import { useEffect, useRef, useState } from 'react'
import { Skill } from '../../data/skills'
import './SkillDialog.css'

const DIALOG_WIDTH = 360
const GAP = -30

interface Position {
  left: string
  bottom: string
  transform: string
}

function calcPosition(anchorRect: DOMRect | null): Position {
  if (!anchorRect) return { left: '50%', transform: 'translateX(-50%)', bottom: '50%' }

  let left = anchorRect.left + anchorRect.width / 2 - DIALOG_WIDTH / 2
  left = Math.max(8, Math.min(left, window.innerWidth - DIALOG_WIDTH - 8))

  const bottomFromViewport = window.innerHeight - anchorRect.top + GAP

  return { left: `${left}px`, bottom: `${bottomFromViewport}px`, transform: 'none' }
}

interface Props {
  skill: Skill
  anchorRect: DOMRect | null
  description: string
  onClose: () => void
}

export default function SkillDialog({ skill, anchorRect, description, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [style, setStyle] = useState<Position>({ left: '', bottom: '', transform: '' })

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.showModal()
    setStyle(calcPosition(anchorRect))
    const handleCancel = () => onClose()
    dialog.addEventListener('cancel', handleCancel)
    return () => dialog.removeEventListener('cancel', handleCancel)
  }, [onClose, anchorRect])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose()
  }

  return (
    <dialog ref={dialogRef} className="skill-dialog" style={style} onClick={handleBackdropClick}>
      <div className="skill-dialog__inner">
        <button className="skill-dialog__close" onClick={onClose}>✕</button>
        <h3 className="skill-dialog__title">{skill.name}</h3>
        <div className="skill-dialog__bar-track">
          <div
            className="skill-dialog__bar-fill"
            style={{ width: `${skill.level}%` }}
          />
          <span className="skill-dialog__bar-label">{skill.level}%</span>
        </div>
        <p className="skill-dialog__description">{description}</p>
      </div>
    </dialog>
  )
}
