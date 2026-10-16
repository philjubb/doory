import type { ReactNode } from 'react'
import sprout from '@/assets/brand/liteseed-icon.svg'
import styles from './PageIntro.module.css'

export interface PageIntroProps {
  /** A short label above the title. */
  eyebrow: string
  title: ReactNode
  lead: string
}

/** The top of a marketing page: mono label, display title, lead, and the Liteseed sprout. */
export function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
      <div className={styles.stage} aria-hidden="true">
        <img className={styles.sprout} src={sprout} alt="" width={52} height={78} draggable={false} />
      </div>
    </header>
  )
}

/** Words of a title set in Leaf. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className={styles.accent}>{children}</em>
}
