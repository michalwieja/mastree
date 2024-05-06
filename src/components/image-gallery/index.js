import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import styles from './styles.module.css'

const ImageGallery = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhotoIndex(null)
  }

  const goToPrevious = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
    )
  }

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
      {photos.map((photo, index) => (
        <div
          key={index}
          className={styles.thumbnail}
          onClick={() => openLightbox(index)}
        >
          <picture>
            <img
              src={photo.src}
              alt={`Photo ${index + 1}`}
              className={styles.img}
            />
          </picture>
        </div>
      ))}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
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
              key={photos[selectedPhotoIndex].src}
              src={photos[selectedPhotoIndex].src}
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
                {selectedPhotoIndex + 1} / {photos.length}
              </span>
            </div>
            <motion.button
              className={styles.prevButton}
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft width={100} height={100}/>
            </motion.button>
            <motion.button
              className={styles.nextButton}
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight width={100} height={100}/>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageGallery
