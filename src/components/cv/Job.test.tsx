import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Job from './Job'

describe('Job', () => {
  it('rendert Titel, Firma und Beschreibung', () => {
    render(<Job title="Frontend Developer" company="ACME (2022–2026)" description="Komplexe Webanwendungen." />)
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('ACME (2022–2026)')).toBeInTheDocument()
    expect(screen.getByText('Komplexe Webanwendungen.')).toBeInTheDocument()
  })

  it('rendert Bullet-Liste wenn Bullets vorhanden', () => {
    render(<Job title="Dev" company="ACME" description="Desc" bullets={['Bullet A', 'Bullet B']} />)
    expect(screen.getByText('Bullet A')).toBeInTheDocument()
    expect(screen.getByText('Bullet B')).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('rendert keine Liste bei leeren Bullets', () => {
    render(<Job title="Dev" company="ACME" description="Desc" bullets={[]} />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('rendert keine Liste ohne Bullets-Prop', () => {
    render(<Job title="Dev" company="ACME" description="Desc" />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })
})
