import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import styles from './styles.module.css'

import useMobile from '@/hooks/useMobile'

const ImageGallery = ({ data }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const isMobile = useMobile()

  const { photos, title } = data

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null)
  },[])

  const goToPrevious = useCallback(() => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos[isMobile ? 300 : 1600].length - 1 : prevIndex - 1,
    )
  },[photos, isMobile])

  const goToNext = useCallback(() => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos[isMobile ? 300 : 1600].length - 1 ? 0 : prevIndex + 1,
    )
  },[photos, isMobile])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      } else if (event.key === 'ArrowRight') {
        goToNext()
      } else if (event.key === 'ArrowLeft') {
        goToPrevious()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPhotoIndex, closeLightbox, goToNext, goToPrevious])

  const lightboxVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const slideVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      x: '100%',
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className={styles.gallery}>
      {photos[300].map((photo, index) => (
        <div
          key={index}
          className={styles.thumbnail}
          onClick={() => openLightbox(index)}
        >
          <picture>
            <img
              src={`/${title}/300/${photo}`}
              alt={`Photo ${index + 1}`}
              className={styles.img}
              loading='lazy'
            />
          </picture>
        </div>
      ))}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            key={photos[isMobile ? 300 : 1600][selectedPhotoIndex]}
            className={styles.lightbox}
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
          >
            <span className={styles.closeButton} onClick={closeLightbox}>
              &times;
            </span>
            <motion.img
              src={`/${title}/${isMobile ? 300 : 1600}/${photos[isMobile ? 300 : 1600][selectedPhotoIndex]}`}
              alt={`Photo ${selectedPhotoIndex + 1}`}
              className={styles.enlargedPhoto}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => {
                e.stopPropagation()
              }}
            />
            <div className={styles.infoBox}>
              <span>
                {selectedPhotoIndex + 1} / {photos[isMobile ? 300 : 1600].length}
              </span>
            </div>
            <motion.button
              className={styles.prevButton}
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft width={isMobile ? 50 : 100} height={isMobile ? 50 : 100}/>
            </motion.button>
            <motion.button
              className={styles.nextButton}
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight width={isMobile ? 50 : 100} height={isMobile ? 50 : 100}/>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageGallery
