import styles from './styles.module.scss'

import SectionTitle from '../../components/SectionTitle'

const Projects = () => (
  <section className={styles.projects}>
    <SectionTitle value='Projects' />
    <div className={styles.projectsContent}></div>
  </section>
)

export default Projects
