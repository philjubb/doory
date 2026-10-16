import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { Accent, PageIntro } from '@/features/marketing/PageIntro'
import { usePageMeta } from '@/lib/usePageMeta'
import styles from './FaqPage.module.css'

export interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  { question: 'Do I need an account to design?', answer: 'No. Press “Start designing” and you’re in the editor straight away. Your design is saved in this browser as you work. An account is only needed to keep designs in the cloud, share them, or use brand kits.' },
  { question: 'Does it cost anything?', answer: 'No. There are no plans, paywalls or ads. Every feature is available to everyone.' },
  { question: 'Where are my designs stored?', answer: 'Guest designs and the images you upload live in your browser’s own storage on this device. Signed-in designs are stored in your account on this server, so you can open them anywhere.' },
  { question: 'What happens to my guest design when I sign up?', answer: 'We upload the images it uses, create the design in your account, and only then remove the local copy. If anything goes wrong along the way, your original stays untouched and you can try again.' },
  { question: 'Can I download my designs?', answer: 'Yes. Export as PNG, JPG, SVG or PDF. Exporting happens in your browser, so it works for guests too.' },
  { question: 'What is it built on?', answer: 'Island Health Design runs Doory, an open-source design platform. The code and setup notes are on GitHub.' },
]

export default function FaqPage() {
  usePageMeta({
    title: 'FAQ',
    description: 'Answers to common questions about Island Health Design: accounts, cost, where designs are stored and exporting.',
    canonical: '/faq',
  })
  return (
    <div className={styles.page}>
      <PageIntro
        eyebrow="FAQ"
        title={
          <>
            Common <Accent>questions</Accent>
          </>
        }
        lead="Short answers to what people ask most. If yours isn’t here, get in touch."
      />
      <FaqList items={FAQ_ITEMS} />
      <p className={styles.more}>
        <span className={styles.hand}>Another question?</span>{' '}
        <Link to="/contact" className={styles.moreLink}>
          Get in touch
        </Link>
      </p>
    </div>
  )
}

/** One answer open at a time; the first starts open. */
function FaqList({ items }: { items: FaqItem[] }) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const expanded = open === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        return (
          <div key={item.question} className={styles.item} data-open={expanded || undefined}>
            <h2 className={styles.question}>
              <button id={buttonId} type="button" className={styles.trigger} aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? null : index)}>
                <span>{item.question}</span>
                <svg className={styles.sign} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h2>
            <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.answer} hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
