import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import SectionTitle from '../../components/SectionTitle'

const SkillsUI = ({ skills }) => (
  <section className={styles.skills}>
    <SectionTitle value='Skills' />
    <div className={styles.skillsContent}>
      <div className={styles.skillsInfoContainer}>
        <div className={styles.skillsInfoItem}>
          <FontAwesomeIcon icon={faPlay} className={styles.skillsInfoItemIcon} />
          <p>Development and deployment of web applications with efficient UX</p>
        </div>
        <div className={styles.skillsInfoItem}>
          <FontAwesomeIcon icon={faMobileScreenButton} className={styles.skillsInfoItemIcon} />
          <p>The responsive in the design user interface is a top priority</p>
        </div>
      </div>
      <div className={styles.skillsTechnologiesContainer}>
        {skills.map((skill, index) => (
          <figure key={index} className={styles.skillsTechnologieIcon}>
            <img src={skill.icon} alt={skill.name} />
          </figure>
        ))}
      </div>
      <p className={styles.skillsConstantlyLearning}>and constantly gaining new skills...</p>
    </div>
  </section>
)

export default SkillsUI
