import styles from './styles.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>
        &copy;
        {currentYear}
        {' '}
        MASTREE
      </p>
    </footer>
  )
}

export default Footer
