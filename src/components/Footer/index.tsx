import styles from './styles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <p dangerouslySetInnerHTML={{ __html: `Developed by Naftan | &copy; ${new Date().getFullYear()}` }}></p>
  </footer>
)

export default Footer
