import styles from './styles.module.css'

import ImageGallery from '@/components/image-gallery'
import HorizontalWrapper from '@/components/horizontal-wrapper'
import { anstrsole } from '@/config'

const Antresole = () => {
  return (
    <HorizontalWrapper>
      <div className={styles.antresole}>
        <h1>antresole</h1>
        <ImageGallery photos={anstrsole}/>
      </div>
    </HorizontalWrapper>
  )
}

export default Antresole
