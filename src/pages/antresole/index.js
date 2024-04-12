import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import styles from './styles.module.css'

import ImageGallery from '@/components/image-gallery'
import HorizontalWrapper from '@/components/horizontal-wrapper'
import { anstrsole } from '@/config'

const Antresole = () => {

  return (
    <HorizontalWrapper>
      <div className={styles.antresole}>
        <div className={styles.header}>
          <Link className={styles.back} href={'/'}>
            <ChevronLeft height={48} width={48} />
          </Link>
          <h1>Antresole</h1>
          <div/>
        </div>
        <ImageGallery photos={anstrsole}/>
      </div>
    </HorizontalWrapper>
  )
}

export default Antresole
