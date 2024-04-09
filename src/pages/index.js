import clsx from 'clsx'
import { useState } from 'react'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './styles.module.css'

import { slides } from '@/config'
import EncryptButton from '@/components/encrypt-button'

export default function Home() {
  const [activeId, setActiveId] = useState(null)

  const handleClick = (id) => {
    activeId === id ? setActiveId(null) : setActiveId(id)
  }

  return (
    <div className={styles.wrapper}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={clsx(styles.slide, slide.id===activeId && styles.active)}
          onClick={()=>handleClick(slide.id)}
          style={{
            backgroundImage: `url(${slide.link})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* <img className={styles.image} src={slide.link} alt={slide.title} /> */}
          <div className={styles.content}>
            <div className={styles.title}>{slide.title}</div>
            { slide.id===activeId && (<>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'linear', delay: .25 }}
                className={styles.desc}
              >
                {slide.desc}
              </motion.div>
              <EncryptButton/>
            </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
