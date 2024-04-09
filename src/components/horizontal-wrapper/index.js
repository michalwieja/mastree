import styles from './styles.module.css'

const HorizontalWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default HorizontalWrapper
