import styles from './styles.module.scss'
import SectionTitle from '../../components/SectionTitle'
import ProjectCard from '../../components/ProjectCard'

const ProjectsUI = ({ projects }) => (
  <section className={styles.projects}>
    <SectionTitle value='Projects' />
    <div className={styles.projectsContent}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          picture={project.picture}
          description={project.description}
          url={project.url}
          theme={project.theme}
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

export default ProjectsUI
