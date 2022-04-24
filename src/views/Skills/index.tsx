import styles from './styles.module.scss'
import SectionTitle from '../../components/SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faSass, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons'

const Skills = () => (
  <section className={styles.skills}>
    <SectionTitle value='Skills' />
    <div className={styles.skillsContent}>
      <div className={styles.skillsInfoContainer}>
        <div className={styles.skillsInfoItem}>
          <FontAwesomeIcon icon={faPlay} />
          <p>Development and deployment of web applications with efficient UX</p>
        </div>
        <div className={styles.skillsInfoItem}>
          <FontAwesomeIcon icon={faMobileScreenButton} />
          <p>The responsive in the design user interface is a top priority</p>
        </div>
      </div>
      <div className={styles.skillsTechnologiesContainer}>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNodeJs} />
        <FontAwesomeIcon icon={faSass} />
        <FontAwesomeIcon icon={faGitAlt} />
        <FontAwesomeIcon icon={faNpm} />
      </div>
    </div>
  </section>
)

export default Skills
