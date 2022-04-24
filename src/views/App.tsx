import styles from './styles.module.scss'

import Hero from './Hero'
import About from './About'
import Skills from './Skills'

const App = () => (
  <div className={styles.app}>
    <Hero />
    <About />
    <Skills />
  </div>
)

export default App
