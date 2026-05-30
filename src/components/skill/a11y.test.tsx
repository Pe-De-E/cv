import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import SkillTag from './SkillTag'
import Skills from './Skills'

expect.extend(toHaveNoViolations)

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

const skill = { name: 'TypeScript', key: 'typescript' as const, level: 75, category: 'frontend' as const }

describe('Accessibility', () => {
  it('SkillTag has no violations', async () => {
    const { container } = render(<SkillTag skill={skill} onClick={() => {}} />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('Skills grid has no violations', async () => {
    const { container } = render(<Skills />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
