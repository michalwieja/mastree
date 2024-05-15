import Link from 'next/link'

import HorizontalWrapper from '../horizontal-wrapper'
import styles from './styles.module.css'
import EncryptButton from '../encrypt-button'

import { socials } from '@/config'

const Header = () => {
  return (
    <div className={styles.header}>
      <HorizontalWrapper>
        <div className={styles.wrapper}>
          <Link href={'/'} className={styles.logo}>
            <div className={styles.logo}>
              <picture>
                <img src="./logo-horizontal.png" alt="logo" />
              </picture>
            </div>
          </Link>
          <div className={styles.socials}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={'_blank'}
                rel={'noreferrer'}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Link href={'/contact'} className={styles.button}>
            <EncryptButton label='Skontaktuj się z nami'/>
          </Link>
        </div>
      </HorizontalWrapper>
    </div>
  )
}

export default Header
