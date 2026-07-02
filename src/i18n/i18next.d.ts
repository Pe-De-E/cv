import type de from './locales/de.json'

type Job = { title: string; company: string; description: string; bullets: string[] }
type TechItem = { label: string; value: string }

type ResumeTechGroup = { label: string; core?: string[]; tool?: string[]; dev?: string[] }
type ResumeLegendItem = { variant: 'core' | 'dev' | 'tool'; swatch: string; text: string }
type ResumeCard = { title: string; text: string }
type ResumeJob = { title: string; company: string; date: string; bullets: string[] }
type ResumeProject = { title: string; stack: string; text: string }
type ResumeEduItem = { title: string; sub: string; date: string }

interface ResumeTranslation {
  role: string
  sectionLabels: {
    about: string
    highlights: string
    tech: string
    communication: string
    experience: string
    projects: string
    education: string
  }
  about: string
  highlights: { num: string; text: string }[]
  tech: {
    frontend: ResumeTechGroup
    backend: ResumeTechGroup
    toolsMethod: ResumeTechGroup
    languages: ResumeTechGroup
  }
  legend: ResumeLegendItem[]
  communication: ResumeCard[]
  experience: ResumeJob[]
  projects: ResumeProject[]
  education: ResumeEduItem[]
  banner: string[]
}

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
  resume: ResumeTranslation
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: Translation
    }
  }
}
