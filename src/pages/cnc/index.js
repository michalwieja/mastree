import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import galleryConfig from '../../../galleryConfig.json'
import styles from './styles.module.css'

import ImageGallery from '@/components/image-gallery'
import HorizontalWrapper from '@/components/horizontal-wrapper'

const LaserCNC = () => {
  const data = galleryConfig.find(gallery => gallery.id === '4')

  return (
    <HorizontalWrapper>
      <div className={styles.cnc}>
        <div className={styles.header}>
          <Link className={styles.back} href={'/'}>
            <ChevronLeft height={48} width={48} />
          </Link>
          <h1>LaserCNC</h1>
          <div/>
        </div>
        <ImageGallery data={data}/>
      </div>
    </HorizontalWrapper>
  )
}

export default LaserCNC
