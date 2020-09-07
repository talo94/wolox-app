import React, { FC, useState } from 'react'

import styles from './Menu.module.scss'
import menu from 'assets/menu.svg'
import close from 'assets/close.svg'
import { Link } from 'react-router-dom'
import logo from 'assets/logo_full_color.svg'
import { selectToken } from 'store/selectors'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Menu: FC = () => {
  const { t, i18n } = useTranslation()
  const [handleOpen, setHandlerOpen] = useState(false)
  const handleClick = () => {
    setHandlerOpen(!handleOpen)
  }
  const token = useSelector(selectToken, shallowEqual)
  const lenguages = ['en', 'es']

  const onSwapLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <Link to={'/'} className={styles.linklogo}>
          <img src={logo} alt="Wolox Logo" className={styles.logo} />
        </Link>
        <div className={styles.buttonContainer}>
          <button onClick={handleClick} className={styles.button}>
            {!handleOpen ? (
              <img src={menu} className={styles.icon} alt={'twitter logo'} />
            ) : (
              <img src={close} className={styles.icon} alt={'twitter logo'} />
            )}
          </button>
        </div>
      </div>
      {handleOpen && (
        <div className={styles.panelContainer} onClick={handleClick}>
          <a href="/#welcomeLeft" className={styles.links}>
            {t('app header home link')}
          </a>
          <Link to={'/technologies'} className={styles.links}>
            {t('app header technologies link')}
          </Link>
          <a href="/#benefits" className={styles.links}>
            {t('app header benefits link')}
          </a>
          <a href="/#requirementsLeft" className={styles.links}>
            {t('app header requirements link')}
          </a>
          {!token && (
            <Link to={'/login'} className={styles.translateButton}>
              {t('app header login button')}
            </Link>
          )}
          {lenguages
            .filter((lang) => lang !== (i18n.language || 'en'))
            .map((lang) => (
              <button
                type="button"
                className={styles.translateButton}
                onClick={() => onSwapLanguage(lang)}
              >
                {`${t('app header translate button')} ${lang}`}
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export default Menu
