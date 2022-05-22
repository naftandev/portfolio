import { Dispatch, SetStateAction, FormEventHandler } from 'react'
import { ExperienceItemTypes } from '../components'

export interface ExperienceUITypes {
  jobPositions: ExperienceItemTypes[]
}

export interface FormDataTypes {
  name: string
  email: string
  message: string
}

export interface ContactUITypes {
  formData: FormDataTypes
  setFormData: Dispatch<SetStateAction<FormDataTypes>>
  handleSubmit: FormEventHandler<HTMLFormElement>
}
