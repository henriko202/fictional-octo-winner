import { Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@src/shared/ui/alert'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { TodosMutations } from '@src/components/TaskList/mutations'
import { CheckCircleOrLoading } from '@src/components/TaskList/components/CheckCircleOrLoading'

export default function TaskList() {
  const { data, isLoading, error } = useLoadTodos()
  const updateTodoMutation = TodosMutations.usePatchTodo()

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
        <div
          key={task.id}
          className={`p-4 rounded-lg border transition-colors ${
            task.completed ? 'bg-primary/10 border-primary/20' : 'bg-background border-muted'
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className="cursor-pointer"
              onClick={async () =>
                await updateTodoMutation.patchTodo({
                  id: task.id,
                  payload: { completed: !task.completed },
                })
              }
            >
              <CheckCircleOrLoading
                loading={updateTodoMutation.isLoading && updateTodoMutation.variables?.id === task.id}
                completed={task.completed}
              />
            </span>
            <div>
              <p className={`${task.completed ? 'text-primary font-medium' : ''}`}>{task.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{task.completed ? 'Completed' : 'In progress'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
