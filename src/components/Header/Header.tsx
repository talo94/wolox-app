import React from 'react'
import { useTranslation } from 'react-i18next'

import logo from 'assets/logo_full_color.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const lenguages = ['en', 'es']

const Header = () => {
  const { t, i18n } = useTranslation()
  const onSwapLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <div className={styles['header-container']}>
      <Link to={'/'} className={styles.links}>
        <img src={logo} alt="Wolox Logo" className={styles.logo} />
      </Link>
      <a href="/#welcomeLeft" className={styles.links}>
        {t('app header home link')}
      </a>
      <Link to={'/technologies'} className={styles.links}>
        {t('app header technologies link')}
      </Link>
      <a href="/#benefits" className={styles.links}>
        {t('app header benefits link')}
      </a>

      <a href="/#requirementsLeft" className={styles.links}>
        {t('app header requirements link')}
      </a>
      <Link to={'/login'} className={styles.loginButton}>
        {t('app header login button')}
      </Link>
      {lenguages
        .filter((lang) => lang !== (i18n.language || 'en'))
        .map((lang) => (
          <button
            type="button"
            className={styles.translateButton}
            onClick={() => onSwapLanguage(lang)}
          >
            {`${t('app header translate button')} ${lang}`}
          </button>
        ))}
    </div>
  )
}
export default Header
