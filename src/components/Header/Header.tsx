import React from 'react'

import logo from 'assets/logo_full_color.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <img src={logo} alt="Wolox Logo" className={styles.logo} />
    </div>
  )
}
export default Header
