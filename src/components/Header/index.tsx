import styles from './styles.module.scss'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.headerTitle}>NAFTAN</h1>
    <div className={styles.headerMenuIcon}>
      <div className={styles.headerMenuIconItem}></div>
      <div className={styles.headerMenuIconItem}></div>
      <div className={styles.headerMenuIconItem}></div>
    </div>
  </header>
)

export default Header
