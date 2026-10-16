import type { CSSProperties } from 'react'
import brandMark from '@/assets/brand/Island-Health-Brand-Mark-Full-Colour-RGB.svg'
import logo from '@/assets/brand/Island-Health-Logo-Horizontal-Full-Colour-RGB.svg'
import logoWhite from '@/assets/brand/Island-Health-Logo-Horizontal-White-RGB.svg'
import { cx } from '@/lib/cx'
import styles from './Logo.module.css'

/** The product name. Island Health standards: set it as editable text, never locked up with the logo. */
export const PRODUCT_NAME = 'Island Health Design'

export interface LogoProps {
  /** `mark` renders only the brand mark, for spaces too small for the horizontal logo. */
  variant?: 'full' | 'mark'
  /** `dark` uses the white logo, for dark backgrounds. */
  tone?: 'light' | 'dark'
  /** At least 16px: the horizontal logo's minimum height. */
  height?: number
  className?: string
  title?: string
}

/** The official Island Health logo files, unmodified: the horizontal logo, or the brand mark on its own. */
export function Logo({ variant = 'full', tone = 'light', height = 28, className, title = PRODUCT_NAME }: LogoProps) {
  return (
    <span className={cx(styles.logo, className)} style={{ '--logo-h': `${Math.max(16, height)}px` } as CSSProperties} role="img" aria-label={title}>
      {variant === 'full' ? (
        <img className={styles.full} src={tone === 'dark' ? logoWhite : logo} alt="" draggable={false} />
      ) : (
        <img className={styles.mark} src={brandMark} alt="" draggable={false} />
      )}
    </span>
  )
}
