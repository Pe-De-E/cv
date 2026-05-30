import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

const mockChangeLanguage = vi.fn()

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'de', changeLanguage: mockChangeLanguage },
  }),
}))

vi.mock('react-router-dom', () => ({
  NavLink: ({ to, children, className }: { to: string; children: React.ReactNode; className: (p: { isActive: boolean }) => string }) => (
    <a href={to} className={className({ isActive: false })}>{children}</a>
  ),
}))

describe('Navbar', () => {
  it('PDF-Link zeigt DE-Version bei deutscher Sprache', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /exportPdf/i })
    expect(link).toHaveAttribute('href', expect.stringContaining('DE'))
  })

  it('Sprach-Buttons rufen changeLanguage auf', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'EN', exact: true }))
    expect(mockChangeLanguage).toHaveBeenCalledWith('en')
    fireEvent.click(screen.getByRole('button', { name: 'DE', exact: true }))
    expect(mockChangeLanguage).toHaveBeenCalledWith('de')
  })

  it('DE-Button ist aktiv bei deutscher Sprache', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'DE', exact: true })).toHaveClass('active')
    expect(screen.getByRole('button', { name: 'EN', exact: true })).not.toHaveClass('active')
  })
})
