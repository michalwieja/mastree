import styles from './styles.module.css'

import ContactForm from '@/components/contact-form'
import HorizontalWrapper from '@/components/horizontal-wrapper'

const Contact = () => {
  return (

    <HorizontalWrapper>
      <div className={styles.contact}>
        <div className={styles.photo}>
          <picture>
            <img src="/maciek.jpeg" alt="maciek" />
          </picture>
        </div>
        <ContactForm/>
      </div>
    </HorizontalWrapper>

  )
}

export default Contact
