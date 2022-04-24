import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import SectionTitle from '../../components/SectionTitle'
import getS3Statics from '../../utils/getS3Statics'

const About = () => (
 <section className={styles.about}>
    <SectionTitle value='About me' />
    <div className={styles.aboutContent}>
      <div className={styles.aboutProfileContainer}>
        <figure className={styles.aboutPicture}>
          <img src={getS3Statics({ groupName: 'images', filePath: 'me.png' })} alt='Avatar' />
        </figure>
        <div className={styles.aboutSocialNetworksContainer}>
          <FontAwesomeIcon icon={faGithub} className={styles.aboutSocialNetwork} />
          <FontAwesomeIcon icon={faTwitter} className={styles.aboutSocialNetwork} />
        </div>
      </div>
      <div className={styles.aboutInfoContainer}>
        <p>Greetings, my name is Jhean Pacheco, I'm a Frontend Developer and I have collaborated actively for more than 5 years in the tech industry.</p>
        <p>My goal as web aplications developer is making creative designs and technologically advanced. I'm a proactive and dynamic person, used to solve problems and unforeseen events autonomously, without the need for a permanent supervision.</p>
        <p>I'm constantly training and updating myself with the use of new technologies that facilitate and optimize the web applications development.</p>
        <div className={styles.aboutSoftSkillsContainer}>
          <strong>Soft skills</strong>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.aboutListCheck} />
              <span>Autodidact</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.aboutListCheck} />
              <span>Teamwork</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.aboutListCheck} />
              <span>Time management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
 </section>
)

export default About
