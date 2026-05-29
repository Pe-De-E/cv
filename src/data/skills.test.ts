import { describe, it, expect } from 'vitest'
import { SKILLS } from './skills'
import de from '../i18n/locales/de.json'

describe('SKILLS', () => {
  it('every skill key has a matching entry in skillDetails', () => {
    const validKeys = Object.keys(de.skillDetails)
    SKILLS.forEach(skill => {
      expect(validKeys).toContain(skill.key)
    })
  })

  it('all skill levels are between 1 and 100', () => {
    SKILLS.forEach(skill => {
      expect(skill.level).toBeGreaterThanOrEqual(1)
      expect(skill.level).toBeLessThanOrEqual(100)
    })
  })
})
