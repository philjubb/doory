import { PenLine } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import sprout from '@/assets/brand/liteseed-icon.svg'
import { CreateDesignDialog } from '@/features/create/CreateDesignDialog'
import { createUrl, getPreset, QUICK_PRESET_IDS } from '@/features/presets'
import { Button, LinkButton } from '@/ui'
import { HeroCards } from './HeroCards'
import styles from './Hero.module.css'

const PERKS = ['No watermarks', 'No ads', 'Self-hosted']

export function Hero() {
  const [customOpen, setCustomOpen] = useState(false)
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img className={styles.sprout} src={sprout} alt="" width={52} height={78} draggable={false} />
      <p className={styles.eyebrow}>Liteseed Design</p>
      <h1 id="hero-title" className={styles.title}>
        Posts, slides and posters, <em className={styles.accent}>made in your browser.</em>
      </h1>
      <p className={styles.lead}>
        Start from a size or a template, edit it here, and download it as an image, PDF or video. Your designs are stored on
        this server.
      </p>

      <HeroCards />

      <div className={styles.create}>
        <LinkButton to="/create" size="lg" rightIcon={<PenLine size={18} aria-hidden="true" />}>
          Create a design
        </LinkButton>
        <ul className={styles.perks}>
          {PERKS.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </div>

      <div className={styles.sizes}>
        <p className={styles.sizesLabel} id="hero-sizes">
          Or start with a size
        </p>
        <ul className={styles.chips} aria-labelledby="hero-sizes">
          {QUICK_PRESET_IDS.map((id) => {
            const preset = getPreset(id)
            if (!preset) return null
            return (
              <li key={id}>
                <Link className={styles.chip} to={createUrl({ presetId: id })}>
                  <preset.icon size={15} aria-hidden="true" />
                  {preset.label}
                </Link>
              </li>
            )
          })}
          <li>
            <Button variant="ghost" size="sm" className={styles.customChip} onClick={() => setCustomOpen(true)}>
              Custom size…
            </Button>
          </li>
        </ul>
      </div>
      <CreateDesignDialog open={customOpen} onClose={() => setCustomOpen(false)} initialTab="custom" />
    </section>
  )
}
