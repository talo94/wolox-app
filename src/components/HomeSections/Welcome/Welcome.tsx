import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Welcome.module.scss'

const Welcome = () => {
  const { t } = useTranslation()

  return (
    <div id="welcomeLeft" className={styles.welcomeLeft}>
      <div className={styles.welcomeContainer}>
        <p className={styles.lightText}>{t('app home welcome welcome')}</p>
        <div className={styles.textContainer}>
          <p className={styles.boldText}>{t('app home welcome interview')}</p>
          <p className={styles.lightText}>{t('app home welcome in')}</p>
        </div>
        <p className={styles.greenText}>{t('app home wolox text')}</p>
      </div>
    </div>
  )
}
export default Welcome
