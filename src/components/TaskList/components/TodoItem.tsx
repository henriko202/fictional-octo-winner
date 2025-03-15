import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { TodoCompletedInfo } from '@src/components/TaskList/components/TodoCompletedInfo'
import { TodoInfo } from '@src/components/TaskList/components/TodoInfo'

type TaskItemProps = {
  task: Todo
}

export const TodoItem = ({ task }: TaskItemProps) => {
  return (
    <div
      className={`p-4 rounded-lg border transition-colors ${
        task.completed ? 'bg-primary/10 border-primary/20' : 'bg-background border-muted'
      }`}
    >
      <div className="flex items-start gap-3">
        <TodoCompletedInfo task={task} />
        <TodoInfo task={task} />
      </div>
    </div>
  )
}
