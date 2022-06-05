import { useContext } from 'react'

import { Context } from '../../context'
import SkillsUI from './SkillsUI'

const Skills = () => {
  const { state } = useContext(Context)
  const { skills } = state

  return <SkillsUI skills={skills} />
}

export default Skills
