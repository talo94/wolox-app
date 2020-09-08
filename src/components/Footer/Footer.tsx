import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Footer.module.scss'
import Ic_Wolox_Footer from 'assets/Ic_Wolox_Footer.svg'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.footer}>
      <div className={styles.footerTextContainer}>
        <p className={styles.normalText}>{t('app home thanks thanks')}</p>
        <p className={styles.blueText}>{t('app home thanks tocomplete')}</p>
      </div>
      <p className={styles.footerText}>{t('app home thanks more')}</p>

      <a href={'https://www.wolox.com.ar/'} className={styles.footerButton}>
        {t('app home thanks moreinfo')}
      </a>
      <img
        className={styles.footerLogo}
        src={Ic_Wolox_Footer}
        alt="wolox logo"
      />
    </div>
  )
}
export default Footer
