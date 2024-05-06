'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.css'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 20

const CHARS = '!@#$%^&*():{};|,.<>/?'

const EncryptButton = ({ label='Zobacz więcej' }) => {
  const intervalRef = useRef(null)

  const [text, setText] = useState('!@#$%^&*():{};|,.<>/?')

  const stopScramble = useCallback(() => {
    clearInterval(intervalRef.current || undefined)

    setText(label)
  },[label])

  const scramble = useCallback(() => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = label.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length)
          const randomChar = CHARS[randomCharIndex]

          return randomChar
        })
        .join('')

      setText(scrambled)
      pos++

      if (pos >= label.length * CYCLES_PER_LETTER) {
        stopScramble()
      }
    }, SHUFFLE_TIME)
  },[label, stopScramble])

  useEffect(() => {
    scramble()
    return () => {
      stopScramble()
    }
  }, [scramble, stopScramble])

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={styles.button}
    >
      {text}
    </motion.button>
  )
}

export default EncryptButton
