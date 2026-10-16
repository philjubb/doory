import sprout from '@/assets/brand/liteseed-icon-reversed.svg'
import styles from './AuthBrandPanel.module.css'

/** Decorative brand side of the auth screens: the reversed sprout on Forest. Hidden below 960px. */
export function AuthBrandPanel() {
  return (
    <aside className={styles.panel} aria-label="About Liteseed Design">
      <div className={styles.scene} aria-hidden="true">
        <img className={styles.sprout} src={sprout} alt="" width={52} height={78} draggable={false} />
      </div>
      <div className={styles.copy}>
        <p className={styles.label}>Liteseed Design</p>
        <h2 className={styles.headline}>Posts, slides and posters, made in your browser and kept on this server.</h2>
      </div>
    </aside>
  )
}
