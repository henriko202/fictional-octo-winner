import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@src/shared/ui/card'
import TaskList from '@src/components/TaskList'
import { useTranslation } from 'react-i18next'
import { TodoAddModal } from '@src/components/TaskList/containers/TodoAddModal'
import { RefreshData } from '@src/components/TaskList/components/RefreshData'

export const TodoContainer = () => {
  const { t } = useTranslation()

  return (
    <>
      <main className="container mx-auto py-10 px-4">
        <Card className="max-w-3xl mx-auto">
          <div className="relative">
            <RefreshData />
          </div>
          <CardHeader className=" flex items-center justify-between">
            <CardTitle className=" text-2xl">{t('task:title')}</CardTitle>
            <CardDescription>{t('task:description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <TaskList />
          </CardContent>
        </Card>
      </main>

      <TodoAddModal />
    </>
  )
}
