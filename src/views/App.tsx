import styles from './styles.module.scss'

import Header from '../components/Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Footer from '../components/Footer'

const App = () => (
  <div className={styles.app}>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
)

export default App
