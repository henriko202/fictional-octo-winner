import { Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@src/shared/ui/alert'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { TaskItem } from '@src/components/TaskList/components/TaskItem'
import { useTranslation } from 'react-i18next'
import { TaskAddButton } from '@src/components/TaskList/components/TaskAddButton'

export default function TaskList() {
  const { t } = useTranslation()
  const { data, isLoading, error } = useLoadTodos()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">{t('task:loading')}</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{t('task:error')}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      {data?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <TaskAddButton />
    </div>
  )
}
