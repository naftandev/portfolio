import types from './types'

const updateJobSeniority = (timestamp: number) => ({
  type: types.EXPERIENCE_UPDATE_JOB_SENIORITY,
  timestamp
})

export {
  updateJobSeniority
}
