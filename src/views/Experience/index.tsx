import { useContext, useEffect, useState } from 'react'

import { Context } from '../../context'
import ExperienceUI from './ExperienceUI'

const Experience = () => {
  const { state } = useContext(Context)
  const { jobs } = state
  const [jobsSeniority, setJobsSeniority] = useState({})

  useEffect(() => {
    const jobsSeniority = {}

    jobs.forEach(position => {
      let positionTime = 0

      position.roles.forEach(role => {
        const startDate = new Date(role.date.start)
        const endDate = role.date.end ? new Date(role.date.end) : new Date()

        const difference = endDate.getTime() - startDate.getTime()
        positionTime += difference
      })

      jobsSeniority[position.companyName] = positionTime
    })

    setJobsSeniority(jobsSeniority)
  }, [])

  return <ExperienceUI jobs={jobs} jobsSeniority={jobsSeniority} />
}

export default Experience
