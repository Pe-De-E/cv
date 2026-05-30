import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SkillsPage from './SkillsPage'
import { SKILLS } from '../../data/skills'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

const frontendSkills = SKILLS.filter(s => s.category === 'frontend')
const backendSkills  = SKILLS.filter(s => s.category === 'backend')
const toolSkills     = SKILLS.filter(s => s.category === 'tools')

describe('SkillsPage', () => {
  it('zeigt standardmäßig alle Skills', () => {
    render(<SkillsPage />)
    SKILLS.forEach(skill => {
      expect(screen.getByRole('button', { name: skill.name, exact: true })).toBeInTheDocument()
    })
  })

  it('Frontend-Filter zeigt nur Frontend-Skills', () => {
    render(<SkillsPage />)
    fireEvent.click(screen.getByRole('button', { name: 'Frontend', exact: true }))
    frontendSkills.forEach(s => expect(screen.getByRole('button', { name: s.name, exact: true })).toBeInTheDocument())
    backendSkills.forEach(s => expect(screen.queryByRole('button', { name: s.name, exact: true })).not.toBeInTheDocument())
  })

  it('Backend-Filter zeigt nur Backend-Skills', () => {
    render(<SkillsPage />)
    fireEvent.click(screen.getByRole('button', { name: 'Backend', exact: true }))
    backendSkills.forEach(s => expect(screen.getByRole('button', { name: s.name, exact: true })).toBeInTheDocument())
    toolSkills.forEach(s => expect(screen.queryByRole('button', { name: s.name, exact: true })).not.toBeInTheDocument())
  })

  it('Alle-Filter setzt Filterung zurück', () => {
    render(<SkillsPage />)
    fireEvent.click(screen.getByRole('button', { name: 'Frontend', exact: true }))
    fireEvent.click(screen.getByRole('button', { name: 'Alle', exact: true }))
    SKILLS.forEach(skill => {
      expect(screen.getByRole('button', { name: skill.name, exact: true })).toBeInTheDocument()
    })
  })

  it('Klick auf Skill zeigt Detail-Ansicht', () => {
    render(<SkillsPage />)
    fireEvent.click(screen.getByRole('button', { name: 'TypeScript', exact: true }))
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('Schließen-Button versteckt Detail-Ansicht', () => {
    render(<SkillsPage />)
    fireEvent.click(screen.getByRole('button', { name: 'TypeScript', exact: true }))
    fireEvent.click(screen.getByRole('button', { name: '✕' }))
    expect(screen.queryByText('75%')).not.toBeInTheDocument()
  })

  it('Filterwechsel schließt offene Detail-Ansicht', () => {
    render(<SkillsPage />)
    fireEvent.click(screen.getByRole('button', { name: 'TypeScript', exact: true }))
    fireEvent.click(screen.getByRole('button', { name: 'Backend', exact: true }))
    expect(screen.queryByText('75%')).not.toBeInTheDocument()
  })
})
