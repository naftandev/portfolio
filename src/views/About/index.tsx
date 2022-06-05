import { useContext } from 'react'

import { Context } from '../../context'
import AboutUI from "./AboutUI"

const About = () => {
  const { state } = useContext(Context)
  const { name, profilePicture, socialNetworks, description, softSkills } = state.about

  return (
    <AboutUI
      name={name}
      profilePicture={profilePicture}
      socialNetworks={socialNetworks}
      description={description}
      softSkills={softSkills}
    />
  )
}

export default About
