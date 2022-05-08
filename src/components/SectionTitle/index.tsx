import { FC } from 'react'

import styles from './styles.module.scss'
import { SectionTitleTypes } from '../../types/components'

const SectionTitle: FC<SectionTitleTypes> = ({ value }) => (
  <div className={styles.sectionTitle}>
    <h3>{value}</h3>
  </div>
)

export default SectionTitle
