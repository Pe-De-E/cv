import type de from '../i18n/locales/de.json'

export type SkillKey = keyof typeof de['skillDetails']
export type SkillCategory = 'frontend' | 'backend' | 'tools'

export interface Skill {
  name: string
  key: SkillKey
  level: number
  category: SkillCategory
}

export const SKILLS: Skill[] = [
  { name: 'JavaScript', key: 'javascript', level: 90, category: 'frontend' },
  { name: 'HTML/CSS',   key: 'htmlcss',    level: 90, category: 'frontend' },
  { name: 'Vue.js',     key: 'vuejs',      level: 85, category: 'frontend' },
  { name: 'Git',        key: 'git',        level: 80, category: 'tools'    },
  { name: 'TypeScript', key: 'typescript', level: 75, category: 'frontend' },
  { name: 'React',      key: 'react',      level: 55, category: 'frontend' },
  { name: 'Node.js',    key: 'nodejs',     level: 40, category: 'backend'  },
  { name: 'PostgreSQL', key: 'postgresql', level: 35, category: 'backend'  },
  { name: 'Python',     key: 'python',     level: 25, category: 'backend'  },
  { name: 'Docker',     key: 'docker',     level: 25, category: 'tools'    },
]
