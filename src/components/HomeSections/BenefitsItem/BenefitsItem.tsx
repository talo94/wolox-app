import React, { FC } from 'react'
import styles from './BenefitsItem.module.scss'

interface BenefitsItemProps {
  img: string
  text: string
}
const BenefitsItem: FC<BenefitsItemProps> = ({ img, text }) => {
  return (
    <div className={styles.benefitsItems}>
      <img src={img} alt={text} />
      <p className={styles.benefitsText}>{text}</p>
    </div>
  )
}
export default BenefitsItem
