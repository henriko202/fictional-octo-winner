import { useTranslation } from 'react-i18next'
import { DeleteTodo } from '@src/components/TaskList/components/DeleteTodo'
import { Todo } from '@src/components/TaskList/domain/types/Todo'

type TaskInfoProps = {
  task: Todo
}

export const TaskInfo = ({ task }: TaskInfoProps) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-3 justify-between w-full">
        <p className={`${task.completed ? 'text-primary font-medium' : ''}`}>{task.title}</p>
        <DeleteTodo id={task.id} />
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        {task.completed ? t('task:completed') : t('task:inProgress')}
      </p>
    </div>
  )
}
