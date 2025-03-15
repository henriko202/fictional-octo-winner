import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

export const LANGUAGES = ['en']

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return import(`./locales/${language}/${namespace}.json`)
    }),
  )
  .init({
    debug: false,
    fallbackLng: {
      default: ['en'],
    },
    ns: ['translation', 'notFound'],
  })
