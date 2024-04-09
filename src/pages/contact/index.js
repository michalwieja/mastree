import styles from './styles.module.css'

import ContactForm from '@/components/contact-form'
import HorizontalWrapper from '@/components/horizontal-wrapper'

const Contact = () => {
  return (

    <HorizontalWrapper>
      <div className={styles.contact}>
        <div className={styles.map}>
          <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Mastree%20Ko%C5%9Bciuszki%20229%2040%20%E2%80%93%20600%20Katowice+(Mastree)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
        <ContactForm/>
      </div>
    </HorizontalWrapper>

  )
}

export default Contact
