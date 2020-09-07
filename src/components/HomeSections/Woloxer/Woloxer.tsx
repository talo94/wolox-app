import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Woloxer.module.scss'

const Woloxer = () => {
  const { t } = useTranslation()

  return (
    <div id="woloxersRight" className={styles.woloxersRight}>
      <div className={styles.woloxersContainer}>
        <p className={styles.normalText}>{t('app home woloxers work')}</p>
        <div className={styles.textContainer}>
          <p className={styles.blueTextBold}>
            {t('app home woloxers convert')}
          </p>
          <p className={styles.greenText}>{t('app home woloxers idea')}</p>
          <p className={styles.normalText}>{t('app home woloxers in')}</p>
        </div>
        <p className={styles.normalText}>{t('app home woloxers products')}</p>
      </div>
    </div>
  )
}
export default Woloxer
