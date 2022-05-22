import styles from './styles.module.scss'
import { FC } from 'react'
import { ExperienceItemTypes } from '../../types/components'

import RoleItem from '../RoleItem'
import getS3Statics from '../../utils/getS3Statics'

const ExperienceItem: FC<ExperienceItemTypes> = ({ companyName, companyLogoPath, roles }) => (
  <div className={styles.experienceItem}>
    <div className={styles.experienceItemCompany}>
      <figure>
        <img src={getS3Statics({ groupName: 'images', filePath: companyLogoPath })} alt={companyName} />
      </figure>
      <div className={styles.experienceItemCompanyInfo}>
        <strong>{companyName}</strong>
        <span>-- months</span>
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
