import { FC } from 'react'

import styles from './styles.module.scss'
import { ProjectCardTypes } from '../../types/components'
import getS3Statics from '../../utils/getS3Statics'

const ProjectCard: FC<ProjectCardTypes> = ({ title, description, picturePath, url, externalLinkIconTheme, topPosition }) => (
  <div className={styles.projectCard}>
    <a className={styles.projectCardExternalLinkIcon} href={url} target='_blank' rel='noopener noreferrer'>
      <figure>
        <img
          src={getS3Statics({ groupName: 'icons', filePath: `external-link-${externalLinkIconTheme}.svg` })}
          alt='Link'
        />
      </figure>
    </a>
    <figure className={styles.projectCardPicture}>
      <img
        src={getS3Statics({ groupName: 'images', filePath: picturePath })}
        alt={title}
        style={{
          top: `${topPosition ? topPosition : -175}px`
        }}
      />
    </figure>
    <div className={styles.projectCardInfo}>
      <strong className={styles.projectCardInfoTitle}>{title}</strong>
      <p className={styles.projectCardInfoContent}>{description}</p>
    </div>
  </div>
)

export default ProjectCard
