import styles from './styles.module.scss'
import { FC } from 'react'
import { ExperienceItemTypes } from '../../types/components'

import RoleItem from '../RoleItem'

const ExperienceItem: FC<ExperienceItemTypes> = ({ companyName, companyLogo, seniority, roles }) => (
  <div className={styles.experienceItem}>
    <div className={styles.experienceItemCompany}>
      <figure>
        <img src={companyLogo} alt={companyName} />
      </figure>
      <div className={styles.experienceItemCompanyInfo}>
        <strong>{companyName}</strong>
        <span>{seniority}</span>
      </div>
    </div>
    <div className={styles.experienceItemRoles}>
      {roles.map((role, index) => (
        <RoleItem
          key={index}
          name={role.name}
          type={role.type}
          date={role.date}
          location={role.location}
          description={role.description}
        />
      ))}
    </div>
  </div>
)

export default ExperienceItem
