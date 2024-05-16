import { motion } from 'framer-motion'

import styles from './styles.module.css'

const Button = ({ label='Zobacz więcej' }) => {

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      className={styles.button}
    >
      {label}
    </motion.button>
  )
}

export default Button
