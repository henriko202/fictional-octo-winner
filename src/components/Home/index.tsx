import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('translation:title')}</title>
      </Helmet>
    </>
  )
}
