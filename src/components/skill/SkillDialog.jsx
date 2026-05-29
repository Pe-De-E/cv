import { useEffect, useRef, useState } from 'react'
import './SkillDialog.css'

const DIALOG_WIDTH = 360
const GAP = -30

function calcPosition(anchorRect) {
  if (!anchorRect) return { left: '50%', transform: 'translateX(-50%)', bottom: '50%' }

  // Horizontal: centered on the anchor, clamped to viewport
  let left = anchorRect.left + anchorRect.width / 2 - DIALOG_WIDTH / 2
  left = Math.max(8, Math.min(left, window.innerWidth - DIALOG_WIDTH - 8))

  // Vertical: above the anchor element
  const bottomFromViewport = window.innerHeight - anchorRect.top + GAP

  return { left: `${left}px`, bottom: `${bottomFromViewport}px`, transform: 'none' }
}

export default function SkillDialog({ skill, anchorRect, description, onClose }) {
  const dialogRef = useRef(null)
  const [style, setStyle] = useState({})

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.showModal()
    setStyle(calcPosition(anchorRect))
    const handleCancel = () => onClose()
    dialog.addEventListener('cancel', handleCancel)
    return () => dialog.removeEventListener('cancel', handleCancel)
  }, [onClose, anchorRect])

  const handleBackdropClick = (e) => {
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
