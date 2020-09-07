import React from 'react'
import { useTranslation } from 'react-i18next'

import Header from 'components/Header'
import styles from './Home.module.scss'
import Ic_ilustra_Hero from 'assets/Img Hero/Ic_ilustra_Hero.png'
import Ic_Tecnologys from 'assets/Ic_Tecnologys.svg'
import img_woloxer from 'assets/img_woloxer.png'

import {
  Welcome,
  Woloxer,
  Benefits,
  Requirements,
} from 'components/HomeSections'
import Footer from 'components/Footer'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Welcome />
        <div id="welcomeRight" className={styles.welcomeRight}>
          <img src={Ic_ilustra_Hero} alt="hero" />
        </div>
        <div id="techLeft" className={styles.techLeft}>
          <div className={styles.techContainer}>
            <p className={styles.techText}>{t('app home search text')}</p>
          </div>
        </div>
        <div id="techRight" className={styles.techRight}>
          <img src={Ic_Tecnologys} alt="tecnologies" />
        </div>
        <div id="woloxersLeft" className={styles.woloxersLeft}>
          <img src={img_woloxer} className={styles.woloxImg} alt="woloxer" />
        </div>
        <Woloxer />
        <Benefits />
        <div id="requirementsLeft" className={styles.requirementsLeft}>
          <div className={styles.requirementsContainer}>
            <p>{t('app header requirements link')}</p>
          </div>
        </div>
        <Requirements />
      </div>
      <Footer />
    </div>
  )
}

export default Home
