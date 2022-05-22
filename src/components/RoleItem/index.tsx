import styles from './styles.module.scss'
import { FC } from 'react'
import { RoleItemTypes } from '../../types/components'

const RoleItem: FC<RoleItemTypes> = ({ name, type, date, location, description }) => (
  <div className={styles.roleItem}>
    <div className={styles.roleItemPath}>
      <div className={styles.roleItemPathNode}></div>
      <div className={styles.roleItemPathLine}></div>
    </div>
    <div className={styles.roleItemDetail}>
      <strong className={styles.roleItemName}>{name}</strong>
      <span className={styles.roleItemType}>{type}</span>
      <p className={styles.roleItemDate}>
        {`${date.startMonth} ${date.startYear} - ${date.endMonth && date.endYear ? `${date.endMonth} ${date.endYear}` : 'Present'}`}
      </p>
      <span className={styles.roleItemLocation}>{location}</span>
      <p className={styles.roleItemDescription}>{description}</p>
    </div>
  </div>
)

export default RoleItem
