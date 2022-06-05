import styles from './styles.module.scss'
import { FC } from 'react'
import { ExperienceUITypes } from '../../types/views'

import SectionTitle from '../../components/SectionTitle'
import ExperienceItem from '../../components/ExperienceItem'

const ExperienceUI: FC<ExperienceUITypes> = ({ jobs, jobsSeniority }) => (
  <section className={styles.experience}>
    <SectionTitle value='Experience' />
    <div className={styles.experienceContent}>
      {jobs.map((position, index) => (
        <ExperienceItem
          key={index}
          companyName={position.companyName}
          companyLogo={position.companyLogo}
          seniority={jobsSeniority[position.companyName]}
          roles={position.roles}
        />
      ))}
    </div>
  </section>
)

export default ExperienceUI
