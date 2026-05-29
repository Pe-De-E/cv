import type de from '../i18n/locales/de.json'

export type SkillKey = keyof typeof de['skillDetails']

export interface Skill {
  name: string
  key: SkillKey
  level: number
}

// Skill levels in % – update these as you improve
export const SKILLS: Skill[] = [
  { name: 'JavaScript', key: 'javascript', level: 90 },
  { name: 'HTML/CSS',   key: 'htmlcss',    level: 90 },
  { name: 'Vue.js',     key: 'vuejs',      level: 85 },
  { name: 'Git',        key: 'git',        level: 80 },
  { name: 'TypeScript', key: 'typescript', level: 75 },
  { name: 'React',      key: 'react',      level: 55 },
  { name: 'Node.js',    key: 'nodejs',     level: 40 },
  { name: 'PostgreSQL', key: 'postgresql', level: 35 },
  { name: 'Python',     key: 'python',     level: 25 },
  { name: 'Docker',     key: 'docker',     level: 25 },
]
