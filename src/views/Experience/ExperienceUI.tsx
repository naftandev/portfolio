import styles from './styles.module.scss'
import { FC } from 'react'
import { ExperienceUITypes } from '../../types/views'

import SectionTitle from '../../components/SectionTitle'
import ExperienceItem from '../../components/ExperienceItem'

const ExperienceUI: FC<ExperienceUITypes> = ({ jobPositions }) => (
  <section className={styles.experience}>
    <SectionTitle value='Experience' />
    <div className={styles.experienceContent}>
      {jobPositions.map((position, index) => (
        <ExperienceItem
          key={index}
          companyName={position.companyName}
          companyLogoPath={position.companyLogoPath}
          roles={position.roles}
        />
      ))}
    </div>
  </section>
)

export default ExperienceUI
