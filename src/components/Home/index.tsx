import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import TaskList from '@src/components/TaskList'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@src/shared/ui/card'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('translation:title')}</title>
      </Helmet>
      <div className="mt-[70px]">
        <main className="container mx-auto py-10 px-4">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Task Manager</CardTitle>
              <CardDescription>View and manage your tasks with ease</CardDescription>
            </CardHeader>
            <CardContent>
              <TaskList />
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}
