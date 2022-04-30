import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

import SectionTitle from '../../components/SectionTitle'
import getS3Statics from '../../utils/getS3Statics'

const Skills = () => (
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
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'TypeScript',
          'React',
          'Webpack',
          'NodeJS',
          'Jest',
          'npm',
          'Git',
          'GraphQL',
          'Sass',
          'Bootstrap'
        ].map((skillIcon, index) => (
          <figure key={index} className={styles.skillsTechnologieIcon}>
            <img src={getS3Statics({ groupName: 'icons', filePath: `${skillIcon.toLowerCase()}.svg` })} alt={skillIcon} />
          </figure>
        ))}
      </div>
      <p className={styles.skillsConstantlyLearning}>and constantly gaining new skills...</p>
    </div>
  </section>
)

export default Skills
