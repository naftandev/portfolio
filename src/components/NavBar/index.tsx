import styles from './styles.module.scss'

const NavBar = () => (
  <nav className={styles.navBar}>
    <h1 className={styles.navBarTitle}>NAFTAN</h1>
    <div className={styles.navBarMenuIcon}>
      <div className={styles.navBarMenuIconItem}></div>
      <div className={styles.navBarMenuIconItem}></div>
      <div className={styles.navBarMenuIconItem}></div>
    </div>
  </nav>
)

export default NavBar
