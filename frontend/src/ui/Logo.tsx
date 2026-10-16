import type { CSSProperties } from 'react'
import appIcon from '@/assets/brand/liteseed-app-icon.svg'
import wordmark from '@/assets/brand/liteseed-wordmark.svg'
import wordmarkReversed from '@/assets/brand/liteseed-wordmark-reversed.svg'
import { cx } from '@/lib/cx'
import styles from './Logo.module.css'

/** The product name shown beside the Liteseed wordmark. */
export const PRODUCT_LABEL = 'Design'

export interface LogoProps {
  /** `mark` renders only the app icon. */
  variant?: 'full' | 'mark'
  /** `dark` uses the reversed wordmark, for Forest or dark backgrounds. */
  tone?: 'light' | 'dark'
  height?: number
  className?: string
  title?: string
}

/** The Liteseed wordmark (the supplied artwork, never retyped) with the product label set in Plex Mono beside it. */
export function Logo({ variant = 'full', tone = 'light', height = 28, className, title = `Liteseed ${PRODUCT_LABEL}` }: LogoProps) {
  return (
    <span
      className={cx(styles.logo, tone === 'dark' && styles.dark, className)}
      style={{ '--logo-h': `${height}px` } as CSSProperties}
      role="img"
      aria-label={title}
    >
      {variant === 'full' ? (
        <>
          <img className={styles.word} src={tone === 'dark' ? wordmarkReversed : wordmark} alt="" height={height} draggable={false} />
          <span className={styles.label} aria-hidden="true">
            {PRODUCT_LABEL}
          </span>
        </>
      ) : (
        <img className={styles.mark} src={appIcon} alt="" width={height} height={height} draggable={false} />
      )}
    </span>
  )
}
