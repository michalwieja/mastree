import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

import { slides } from '@/config'
import Button from '@/components/button'
import { useActiveId } from '@/context/active-id'

export default function Home() {
  const { activeId, setActiveId } = useActiveId()

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
            backgroundImage: `url(${slide.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              {slide.id===activeId ? slide.title: slide.shortTitle}
            </div>
            { slide.id===activeId && (<>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'linear', delay: .25 }}
                className={styles.desc}
              >
                {slide.desc}
              </motion.div>
              <Link href={slide.link}>
                <Button/>
              </Link>
            </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
