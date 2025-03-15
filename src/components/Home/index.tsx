import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { TaskContainer } from '@src/components/TaskList/containers/TaskContainer'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('translation:title')}</title>
      </Helmet>
      <div className="mt-[70px]">
        <TaskContainer />
      </div>
    </>
  )
}
