import { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <div className="section">
      <div className="section-title">{title}</div>
      {children}
    </div>
  )
}
