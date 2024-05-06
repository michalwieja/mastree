'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import styles from './style.module.css'

import { socials } from '@/config'

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const form = useRef()

  const sendEmail = async (e) => {
    setLoading(true)
    e.preventDefault()

    const resetForm = () => {
      form.current.reset()
    }

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_API_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAIL_API_TEMPLATE_ID || '',
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAIL_API_PUBLIC || '' },
      )
      console.log('SUCCESS!', response)
      setSuccessMessage('Email Wysłany. Skontaktujemy się z Tobą!')
    } catch (error) {
      console.error('FAILED...', error)
      setErrorMessage('Nie udało się wysłać wiadomości. Spróbuj ponownie później.')
    }
    setLoading(false)
    resetForm()

    setTimeout(() => {
      setSuccessMessage('')
      setErrorMessage('')
    }, 5000)
  }

  const phone = socials.find((social) => social.label === 'Phone')

  return (
    <div className={styles.contactForm}>
      <div className={styles.address}>
        <p>Maciej Dybula</p>
        <p>Katowice, ul. Katowicka 1</p>
        <p>
          <a href={phone.url} target='_blank'>{phone.url}</a>
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Formularz kontaktowy</h3>
        <label htmlFor="user_name" className={styles.label}>
    Imię i Nazwisko
        </label>
        <input type="text" id="user_name" name="user_name" className={styles.inputField} required />

        <label htmlFor="user_email" className={styles.label}>
    Email
        </label>
        <input type="email" id="user_email" name="user_email" className={styles.inputField} required />

        <label htmlFor="message" className={styles.label}>
    Wiadomość
        </label>
        <textarea id="message" name="message" className={styles.inputField} required />

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Wysyłanie...' : 'Wyślij'}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </button>
      </form>

    </div>
  )
}

export default ContactForm
