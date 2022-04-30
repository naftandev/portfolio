import styles from './styles.module.scss'

import Header from '../components/Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from '../components/Footer'

const App = () => (
  <div className={styles.app}>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </div>
)

export default App
