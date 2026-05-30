import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SkillDialog from './SkillDialog'

const skill = { name: 'TypeScript', key: 'typescript' as const, level: 75, category: 'frontend' as const }

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn().mockImplementation(function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  })
})

describe('SkillDialog', () => {
  it('rendert Skill-Name und Beschreibung', () => {
    render(<SkillDialog skill={skill} anchorRect={null} description="Täglich eingesetzt." onClose={() => {}} />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Täglich eingesetzt.')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('ruft showModal beim Mounten auf', () => {
    render(<SkillDialog skill={skill} anchorRect={null} description="Desc" onClose={() => {}} />)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
  })

  it('Schließen-Button ruft onClose auf', () => {
    const onClose = vi.fn()
    render(<SkillDialog skill={skill} anchorRect={null} description="Desc" onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: 'Schließen' }))
    expect(onClose).toHaveBeenCalled()
  })

  it('Cancel-Event (Escape) ruft onClose auf', () => {
    const onClose = vi.fn()
    const { container } = render(<SkillDialog skill={skill} anchorRect={null} description="Desc" onClose={onClose} />)
    const dialog = container.querySelector('dialog')!
    fireEvent(dialog, new Event('cancel'))
    expect(onClose).toHaveBeenCalled()
  })
})
