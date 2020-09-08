import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Requirements.module.scss'
import Ic_Bullet_1 from 'assets/Ic_Bullet_1.svg'
import Ic_Bullet_2 from 'assets/Ic_Bullet_2.svg'
import Ic_Bullet_3 from 'assets/Ic_Bullet_3.svg'

const Requirements = () => {
  const { t } = useTranslation()

  return (
    <div id="requirementsRight" className={styles.requirementsRight}>
      <div className={styles.requirementsList}>
        <img src={Ic_Bullet_1} alt="requirements" />
        <p className={styles.requirementsText}>
          {t('app home requirements career')}
        </p>
      </div>
      <div className={styles.requirementsList}>
        <img src={Ic_Bullet_2} alt="requirements" />
        <p className={styles.requirementsText}>
          {t('app home requirements english')}
        </p>
      </div>
      <div className={styles.requirementsList}>
        <img src={Ic_Bullet_3} alt="requirements" />
        <p className={styles.requirementsText}>
          {t('app home requirements agile')}
        </p>
      </div>
    </div>
  )
}
export default Requirements
