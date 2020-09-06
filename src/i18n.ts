import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import en from 'common/en.json'
import es from 'common/es.json'
i18n.use(initReactI18next).init({
  resources: {
    en,
    es,
  },

  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
