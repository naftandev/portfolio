import styles from './styles.module.scss'
import { SectionTitleTypes } from '../../types/components'
import { FC } from 'react'

const SectionTitle: FC<SectionTitleTypes> = ({ value }) => (
  <div className={styles.sectionTitle}>
    <span>{value}</span>
  </div>
)

export default SectionTitle
