import styles from './styles.module.css'

import ContactForm from '@/components/contact-form'
import HorizontalWrapper from '@/components/horizontal-wrapper'

const Contact = () => {
  return (

    <HorizontalWrapper>
      <div className={styles.contact}>
        <h1 className={styles.visuallyHidden}>Kontakt</h1>
        <div className={styles.photo}>
          <picture>
            <img src="/maciek.jpeg" alt="Maciej Dybula - właściciel Mastree" />
          </picture>
        </div>
        <ContactForm/>
      </div>
    </HorizontalWrapper>

  )
}

export default Contact
