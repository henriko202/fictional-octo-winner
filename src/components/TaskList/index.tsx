import { CheckCircle2, Circle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '@src/shared/ui/alert'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'

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
        <div
          key={task.id}
          className={`p-4 rounded-lg border transition-colors ${
            task.completed ? 'bg-primary/10 border-primary/20' : 'bg-background border-muted'
          }`}
        >
          <div className="flex items-start gap-3">
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            )}
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
