import type de from './locales/de.json'

type Job = { title: string; company: string; description: string; bullets: string[] }
type TechItem = { label: string; value: string }

interface Translation {
  nav: typeof de['nav'] & { skills: string }
  header: typeof de['header']
  sections: typeof de['sections']
  softSkills: { title: string; items: string[] }
  languages: typeof de['languages']
  interests: typeof de['interests']
  about: typeof de['about']
  experience: Record<string, Job>
  education: typeof de['education']
  tech: TechItem[]
  skillDetail: typeof de['skillDetail']
  skillDetails: typeof de['skillDetails']
  availability: typeof de['availability']
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: Translation
    }
  }
}
