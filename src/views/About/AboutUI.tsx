import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import SectionTitle from '../../components/SectionTitle'

const AboutUI = ({ name, profilePicture, socialNetworks, description, softSkills }) => (
  <section className={styles.about}>
     <SectionTitle value='About me' />
     <div className={styles.aboutContent}>
       <div className={styles.aboutProfileContainer}>
         <figure className={styles.aboutPicture}>
           <img src={profilePicture} alt={name} />
         </figure>
         <div className={styles.aboutSocialNetworksContainer}>
           {socialNetworks.map((socialNetwork, index) => (
             <a key={index} href={socialNetwork.url} target='_blank' rel='noopener noreferrer'>
              <figure className={styles.aboutSocialNetwork}>
                <img src={socialNetwork.icon} alt={socialNetwork.name}/>
              </figure>
             </a>
           ))}
         </div>
       </div>
       <div className={styles.aboutInfoContainer}>
         <p>{description}</p>
         <div className={styles.aboutSoftSkillsContainer}>
           <strong>Soft skills</strong>
           <ul>
             {softSkills.map((softSkill, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheck} className={styles.aboutListCheck} />
                <span>{softSkill}</span>
              </li>
             ))}
           </ul>
         </div>
       </div>
     </div>
  </section>
)

export default AboutUI
