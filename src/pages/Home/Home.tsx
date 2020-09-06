import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const lenguages = ['en', 'es']
const Home = () => {
  const { t, i18n } = useTranslation()
  const onSwapLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      {t('app home followUs')}
      <Link to={'/technologies'}>TECH</Link>
      {lenguages
        .filter((lang) => lang !== (i18n.language || 'en'))
        .map((lang) => (
          <button type="button" onClick={() => onSwapLanguage(lang)}>
            {lang}
          </button>
        ))}
    </div>
  )
}

export default Home
