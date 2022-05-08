import styles from './styles.module.scss'

import SectionTitle from '../../components/SectionTitle'
import ProjectCard from '../../components/ProjectCard'

const Projects = () => {
  const projectsData = [
    {
      title: 'COVID-19 Tracker',
      description: 'This project helps track the global cases of COVID-19 disease.',
      picturePath: 'project_covid19-tracker.png',
      url: 'https://naftandev.github.io/covid19-tracker/',
      externalLinkIconTheme: 'light'
    },
    {
      title: 'Shortly',
      description: 'A responsive WebApp to shorten links quickly and safely using an API.',
      picturePath: 'project_url-shortening-api.png',
      url: 'https://naftandev.github.io/url-shortening-api/',
      externalLinkIconTheme: 'dark'
    },
    {
      title: 'Naftan Movie',
      description: 'In Naftan Movie you can download a large number of movies, as well as see a short review of each one.',
      picturePath: 'project_naftan-movie.png',
      url: 'https://naftandev.github.io/naftan-movie/',
      externalLinkIconTheme: 'dark'
    },
    {
      title: 'Rock, paper or scissors - The Game',
      description: 'Have fun playing this classic game now digitally.',
      picturePath: 'project_rock-paper-scissors.png',
      url: 'https://naftandev.github.io/rock-paper-scissors/',
      externalLinkIconTheme: 'light',
      topPosition: -235
    },
    {
      title: 'Simón Dice - The Game',
      description: 'Have fun playing this classic game now digitally.',
      picturePath: 'project_simon-dice.png',
      url: 'https://naftandev.github.io/simon-dice/',
      externalLinkIconTheme: 'light'
    }
  ]

  return (
    <section className={styles.projects}>
      <SectionTitle value='Projects' />
      <div className={styles.projectsContent}>
        {projectsData.map((projectData, index) => (
          <ProjectCard
            key={index}
            title={projectData.title}
            description={projectData.description}
            picturePath={projectData.picturePath}
            url={projectData.url}
            externalLinkIconTheme={projectData.externalLinkIconTheme}
            topPosition={projectData.topPosition}
          />
        ))}
        <a
          className={styles.projectsMoreLink}
          href='https://github.com/naftandev?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
        >
          View more projects
        </a>
      </div>
    </section>
  )
}

export default Projects
