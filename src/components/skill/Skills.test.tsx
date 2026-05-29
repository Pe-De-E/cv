import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Skills from './Skills'
import { SKILLS } from '../../data/skills'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

describe('Skills', () => {
  it('renders all skill tags', () => {
    render(<Skills />)
    SKILLS.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
    })
  })

  it('shows detail view when a skill is clicked', () => {
    render(<Skills />)
    fireEvent.click(screen.getByText('TypeScript'))
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('returns to grid when back button is clicked', () => {
    render(<Skills />)
    fireEvent.click(screen.getByText('JavaScript'))
    fireEvent.click(screen.getByText(/skillDetail\.back/))
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
