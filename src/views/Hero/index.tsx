import styles from './styles.module.scss'
// import { useEffect, useState } from 'react'

import NavBar from '../../components/NavBar'
import DoubleArrow from '../../components/DoubleArrow'
import getS3Statics from '../../utils/getS3Statics'

const Hero = () => {
  // const [images, setImages] = useState({ hero: '' })

  /*
  useEffect(() => {
    getS3Statics({ groupName: 'images', fileName: 'hero-640x479.jpg' })
      .then(value => setImages(prevState => ({ ...prevState, hero: value })))
  }, [])
  */

  return (
    <section className={styles.hero}>
      <picture className={styles.heroPicture}>
        <source media='(max-height: 479px)' srcSet={getS3Statics({ groupName: 'images', filePath: 'hero-640x479.jpg' })} />
        <source media='(max-height: 959px)' srcSet={getS3Statics({ groupName: 'images', filePath: 'hero-1280x959.jpg' })} />
        <source media='(max-height: 1439px)' srcSet={getS3Statics({ groupName: 'images', filePath: 'hero-1920x1439.jpg' })} />
        <source media='(max-height: 2514px)' srcSet={getS3Statics({ groupName: 'images', filePath: 'hero-3353x2514.jpg' })} />
        <img src={getS3Statics({ groupName: 'images', filePath: 'hero-3353x2514.jpg' })} alt='Software developer' />
      </picture>
      <NavBar />
      <div className={styles.heroInfoContainer}>
        <h1 className={styles.heroName}>Jhean Pacheco</h1>
        <h2 className={styles.heroRole}>Frontend Developer</h2>
      </div>
      <DoubleArrow />
    </section>
  )
}

export default Hero
