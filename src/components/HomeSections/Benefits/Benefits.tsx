import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Benefits.module.scss'
import BenefitsItem from '../BenefitsItem'
import Ic_Hour from 'assets/Ic_Hour.svg'
import Ic_HomeOffice from 'assets/Ic_HomeOffice.svg'
import Ic_Workshops from 'assets/Ic_Workshops.svg'
import Ic_DrinkSnacks from 'assets/Ic_DrinkSnacks.svg'
import Ic_laptop from 'assets/Ic_laptop.svg'
import Ic_brain from 'assets/Ic_brain.svg'
const Benefits = () => {
  const { t } = useTranslation()

  return (
    <div id="benefits" className={styles.benefits}>
      <div className={styles.benefitsTitleContainer}>
        <p className={styles.benefitsTitle}>{t('app home benefits')}</p>
        <p className={styles.benefitsFace}>;)</p>
      </div>
      <div className={styles.benefitsContainer}>
        <BenefitsItem img={Ic_Hour} text={t('app home benefits flexibility')} />
        <BenefitsItem
          img={Ic_HomeOffice}
          text={t('app home benefits homeoffice')}
        />
        <BenefitsItem
          img={Ic_Workshops}
          text={t('app home benefits workshops')}
        />
        <BenefitsItem
          img={Ic_DrinkSnacks}
          text={t('app home benefits snacks')}
        />
        <BenefitsItem
          img={Ic_laptop}
          text={t('app home benefits remoteweek')}
        />
        <BenefitsItem
          img={Ic_brain}
          text={t('app home benefits latestTechnologies')}
        />
      </div>
    </div>
  )
}
export default Benefits
