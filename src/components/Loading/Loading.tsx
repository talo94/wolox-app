import React from 'react'

import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.main}>
      <div className={styles.woloxLoader}></div>
      <div className={styles.woloxLoader}></div>
    </div>
  )
}

export default Loading
