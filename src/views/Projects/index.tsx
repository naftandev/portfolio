import { useContext } from 'react'

import { Context } from '../../context'
import ProjectsUI from './ProjectsUI'

const Projects = () => {
  const { state } = useContext(Context)
  const { projects } = state

  return <ProjectsUI projects={projects} />
}

export default Projects
