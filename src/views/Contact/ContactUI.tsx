import styles from './styles.module.scss'
import { FC } from 'react'
import { ContactUITypes } from '../../types/views'

import SectionTitle from '../../components/SectionTitle'
import getS3Statics from '../../utils/getS3Statics'

const ContactUI: FC<ContactUITypes> = ({ formData, setFormData, handleSubmit }) => (
  <section className={styles.contact}>
    <SectionTitle value='Contact' />
    <div className={styles.contactContent}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.contactInputContainer}>
          <figure>
            <img src={getS3Statics({ groupName: 'icons', filePath: 'user.svg' })} />
          </figure>
          <input
            type='text'
            placeholder='Type your name...'
            value={formData.name}
            onChange={event => setFormData({ ...formData, name: event.target.value })}
          />
        </div>
        <div className={styles.contactInputContainer}>
          <figure>
            <img src={getS3Statics({ groupName: 'icons', filePath: 'email.svg' })} />
          </figure>
          <input
            type='email'
            placeholder='Type your email...'
            value={formData.email}
            onChange={event => setFormData({ ...formData, email: event.target.value })}
          />
        </div>
        <textarea
          placeholder='Type your message...'
          value={formData.message}
          onChange={event => setFormData({ ...formData, message: event.target.value })}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  </section>
)

export default ContactUI
