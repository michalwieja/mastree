import Link from 'next/link'

import HorizontalWrapper from '../horizontal-wrapper'
import styles from './styles.module.css'
import Button from '../button'

import { socials } from '@/config'
import { useActiveId } from '@/context/active-id'

const Header = () => {
  const { setActiveId } = useActiveId()
  return (
    <header className={styles.header}>
      <HorizontalWrapper>
        <nav className={styles.wrapper}>
          <Link href={'/'} className={styles.logo} onClick={()=>setActiveId(null)}>
            <div className={styles.logo}>
              <picture>
                <img src="/logo-horizontal.png" alt="Mastree - strona główna" />
              </picture>
            </div>
          </Link>
          <Link href="/eufunds" className={styles.euLink}>
            <img src="/eu-flag.png" alt="Flaga Unii Europejskiej" className={styles.euIcon} />
            <span className={styles.euText}>Unia Europejska</span>
          </Link>
          <div className={styles.socials}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={'_blank'}
                rel={'noreferrer'}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Link href={'/contact'} className={styles.button}>
            <Button label='Skontaktuj się z nami'/>
          </Link>
        </nav>
      </HorizontalWrapper>
    </header>
  )
}

export default Header
