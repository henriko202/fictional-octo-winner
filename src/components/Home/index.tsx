import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { TodoContainer } from '@src/components/TaskList/containers/TodoContainer'
import { TodoListProvider } from '@src/components/TaskList/hooks/context'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('translation:title')}</title>
      </Helmet>
      <div className="mt-[70px]">
        <TodoListProvider>
          <TodoContainer />
        </TodoListProvider>
      </div>
    </>
  )
}
