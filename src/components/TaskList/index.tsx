import { Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@src/shared/ui/alert'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { TaskItem } from '@src/components/TaskList/components/TaskItem'

export default function TaskList() {
  const { data, isLoading, error } = useLoadTodos()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading tasks...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Failed to load tasks. Please try again later.</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      {data?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
