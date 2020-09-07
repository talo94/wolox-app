import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { TechnologyData } from 'service/technologies'
import styles from './TechnologyItem.module.scss'
import TechnologySubItem from 'components/TechnologySubItem'

interface props {
  data: TechnologyData
}
const TechnologyItem: FC<props> = ({ data }) => {
  const { tech, year, author, license, language, type, logo } = data
  const { t } = useTranslation()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={logo} alt={tech} className={styles.logo} />
      </div>
      <p className={styles.title}>{tech}</p>
      <p className={styles.year}>{year}</p>
      <div className={styles.content}>
        <TechnologySubItem title={t('app tech author')} value={author} />
        <TechnologySubItem title={t('app tech license')} value={license} />
        <TechnologySubItem title={t('app tech language')} value={language} />
        <TechnologySubItem title={t('app tech type')} value={type} />
      </div>
    </div>
  )
}
export default TechnologyItem
