import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SkillTag from './SkillTag'
import type { Skill } from '../../data/skills'

const skill: Skill = { name: 'TypeScript', key: 'typescript', level: 75 }

describe('SkillTag', () => {
  it('renders the skill name', () => {
    render(<SkillTag skill={skill} onClick={() => {}} />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('calls onClick with the skill when clicked', () => {
    const onClick = vi.fn()
    render(<SkillTag skill={skill} onClick={onClick} />)
    fireEvent.click(screen.getByText('TypeScript'))
    expect(onClick).toHaveBeenCalledWith(skill)
  })

  it('sets --level CSS variable from skill.level', () => {
    render(<SkillTag skill={skill} onClick={() => {}} />)
    const el = screen.getByText('TypeScript')
    expect(el.style.getPropertyValue('--level')).toBe('75%')
  })
})
