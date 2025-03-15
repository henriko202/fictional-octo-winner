import { CheckCircleOrLoading } from '@src/components/TaskList/components/CheckCircleOrLoading'
import { TodosMutations } from '@src/components/TaskList/mutations'
import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

type TaskCompletedInfoProps = {
  task: Todo
}

export const TodoCompletedInfo = ({ task }: TaskCompletedInfoProps) => {
  const { t } = useTranslation()
  const updateTodoMutation = TodosMutations.usePatchTodo()

  return (
    <span
      className="cursor-pointer"
      onClick={async () => {
        await updateTodoMutation.patchTodo({
          id: task.id,
          payload: { completed: !task.completed, isLocal: task.isLocal },
        })
        toast.success(t('task:todoUpdated'))
      }}
    >
      <CheckCircleOrLoading
        loading={updateTodoMutation.isLoading && updateTodoMutation.variables?.id === task.id}
        completed={task.completed}
      />
    </span>
  )
}
