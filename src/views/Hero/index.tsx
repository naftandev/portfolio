import { useContext } from 'react'

import { Context } from '../../context'
import HeroUI from './HeroUI'

const Hero = () => {
  const { state } = useContext(Context)
  const { name, position, heroPicture } = state.about

  return (
    <HeroUI
      name={name}
      position={position}
      heroPicture={heroPicture}
    />
  )
}

export default Hero
