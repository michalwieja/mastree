import styles from './styles.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <p>
        &copy;
        {currentYear}
        {' '}
        MASTREE
      </p>
    </div>
  )
}

export default Footer
