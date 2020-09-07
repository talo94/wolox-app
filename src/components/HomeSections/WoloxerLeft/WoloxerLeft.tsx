import React from 'react'
import { useTranslation } from 'react-i18next'

import img_woloxer from 'assets/img_woloxer.png'
import styles from './WoloxerLeft.module.scss'
import twitter from 'assets/twitter-logo.svg'

const WoloxerLeft = () => {
  const { t } = useTranslation()

  return (
    <div id="woloxersLeft" className={styles.woloxersLeft}>
      <div className={styles.content}>
        <div className={styles.container}>
          <p className={styles.greenText}>{'300 +'}</p>
          <p className={styles.blueTextBold}>{'Woloxers'}</p>
        </div>
        <div className={styles.container}>
          <img src={twitter} className={styles.icon} alt={'twitter logo'} />
          <p className={styles.normalText}>{'@Wolox'}</p>
        </div>
        <a
          href={'https://twitter.com/wolox?lang=es'}
          className={styles.followButton}
        >
          {t('app home followUs')}
        </a>
      </div>
      <img src={img_woloxer} className={styles.woloxImg} alt="woloxer" />
    </div>
  )
}
export default WoloxerLeft
