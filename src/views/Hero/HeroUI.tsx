import styles from './styles.module.scss'
import DoubleArrow from '../../components/DoubleArrow'

const HeroUI = ({ name, position, heroPicture }) => (
  <section className={styles.hero}>
    <picture className={styles.heroPicture}>
      <source media='(max-height: 479px)' srcSet={heroPicture.hero640x479} />
      <source media='(max-height: 959px)' srcSet={heroPicture.hero1280x959} />
      <source media='(max-height: 1439px)' srcSet={heroPicture.hero1920x1439} />
      <source media='(max-height: 2514px)' srcSet={heroPicture.hero3353x2514} />
      <img src={heroPicture.hero3353x2514} alt='Software development' />
    </picture>
    <div className={styles.heroInfoContainer}>
      <h1 className={styles.heroName}>{name}</h1>
      <h2 className={styles.heroRole}>{position}</h2>
    </div>
    <DoubleArrow />
  </section>
)

export default HeroUI
