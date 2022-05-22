import { useState, FormEvent } from 'react'

import ContactUI from './ContactUI'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Send!')
  }

  return (
    <ContactUI
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  )
}

export default Contact
