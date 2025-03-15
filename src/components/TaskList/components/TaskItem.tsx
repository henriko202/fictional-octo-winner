import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { TaskCompletedInfo } from '@src/components/TaskList/components/TaskCompletedInfo'
import { TaskInfo } from '@src/components/TaskList/components/TaskInfo'

type TaskItemProps = {
  task: Todo
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div
      className={`p-4 rounded-lg border transition-colors ${
        task.completed ? 'bg-primary/10 border-primary/20' : 'bg-background border-muted'
      }`}
    >
      <div className="flex items-start gap-3">
        <TaskCompletedInfo task={task} />
        <TaskInfo task={task} />
      </div>
    </div>
  )
}
