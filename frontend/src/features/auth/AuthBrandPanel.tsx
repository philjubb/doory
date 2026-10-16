import logoWhite from '@/assets/brand/Island-Health-Logo-Vertical-White-RGB.svg'
import styles from './AuthBrandPanel.module.css'

/** Decorative brand side of the auth screens: the white Island Health logo on Blue 25. Hidden below 960px. */
export function AuthBrandPanel() {
  return (
    <aside className={styles.panel} aria-label="About Island Health Design">
      <div className={styles.scene}>
        <img className={styles.logo} src={logoWhite} alt="Island Health" draggable={false} />
      </div>
      <div className={styles.copy}>
        <p className={styles.label}>Island Health Design</p>
        <h2 className={styles.headline}>Make posts, slides and posters in your browser. Your designs are kept on this server.</h2>
      </div>
    </aside>
  )
}
