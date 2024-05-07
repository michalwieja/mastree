import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import galleryConfig from '../../../galleryConfig.json'
import styles from './styles.module.css'

import ImageGallery from '@/components/image-gallery'
import HorizontalWrapper from '@/components/horizontal-wrapper'

const Bawialnie = () => {
  const data = galleryConfig.find(gallery => gallery.id === '3')

  return (
    <HorizontalWrapper>
      <div className={styles.antresole}>
        <div className={styles.header}>
          <Link className={styles.back} href={'/'}>
            <ChevronLeft height={48} width={48} />
          </Link>
          <h1>Stolarka</h1>
          <div/>
        </div>
        <ImageGallery data={data}/>
      </div>
    </HorizontalWrapper>
  )
}

export default Bawialnie
