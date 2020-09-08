import React, { FC } from 'react'

import styles from './TechnologySubItem.module.scss'

interface props {
  title: string
  value: string
}
const TechnologySubItem: FC<props> = ({ title, value }) => {
  return (
    <div className={styles.items}>
      <p className={styles.textTitle}>{title}</p>
      <p className={styles.text}>{value}</p>
    </div>
  )
}
export default TechnologySubItem
