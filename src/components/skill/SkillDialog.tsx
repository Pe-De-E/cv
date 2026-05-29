import { type MouseEvent, useEffect, useRef, useState } from 'react'
import { Skill } from '../../data/skills'
import { calcPosition, type Position } from './calcPosition'
import './SkillDialog.css'

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

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose()
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog ref={dialogRef} className="skill-dialog" style={style} onClick={handleBackdropClick}>
      <div className="skill-dialog__inner">
        <button className="skill-dialog__close" onClick={onClose} aria-label="Schließen">✕</button>
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
