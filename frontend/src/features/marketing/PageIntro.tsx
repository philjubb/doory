import type { ReactNode } from 'react'
import styles from './PageIntro.module.css'

export interface PageIntroProps {
  /** A short label above the title. */
  eyebrow: string
  title: ReactNode
  lead: string
}

/** The top of a marketing page: label, title and lead, left-aligned. */
export function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </header>
  )
}

/** Part of a title. Island Health standards do not colour words for emphasis, so it renders as plain text. */
export function Accent({ children }: { children: ReactNode }) {
  return <>{children}</>
}
