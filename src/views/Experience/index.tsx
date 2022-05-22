import { useEffect, useState } from 'react'
import ExperienceUI from './ExperienceUI'

const Experience = () => {
  const [jobTotalTime, setJobTotalTime] = useState({})

  const jobPositions = [
    {
      companyName: 'Nixi1',
      companyLogoPath: 'nixi1-logo_100x100.jpg',
      roles: [
        {
          name: 'Senior Frontend Developer',
          type: 'Full time',
          date: {
            startMonth: 7,
            startYear: 2021
          },
          location: 'Spain',
          description: 'React, Redux, TypeScript, REST API Request, SASS, styled-components, Bootstrap, BEM, Git, Agile.'
        }
      ]
    },
    {
      companyName: 'Freelance',
      companyLogoPath: 'nixi1-logo_100x100.jpg',
      roles: [
        {
          name: 'Frontend Developer',
          type: 'Full time',
          date: {
            startMonth: 1,
            startYear: 2018,
            endMonth: 6,
            endYear: 2021
          },
          location: 'Ecuador',
          description: 'React, Redux, TypeScript, Electron, GraphQL Request, REST API Request, Jest, SASS, styled-components, Bootstrap, BEM, Git, Webpack.'
        }
      ]
    }
  ]

  useEffect(() => {
    const jobTotalTime = {}

    jobPositions.forEach(position => {
      let positionTime = []

      position.roles.forEach(role => {
        const startDate = new Date(`${role.date.startYear}-${role.date.startMonth}`)
        const endDate = role.date.endMonth && role.date.endYear
          ? new Date(`${role.date.endYear}-${role.date.endMonth}`)
          : new Date()

        const difference = endDate.getTime() - startDate.getTime()
        positionTime.push(difference)
      })

      console.log('positionTime', positionTime)
    })
  }, [])

  return (
    <ExperienceUI
      jobPositions={jobPositions}
      jobTotalTime={jobTotalTime}
    />
  )
}

export default Experience
