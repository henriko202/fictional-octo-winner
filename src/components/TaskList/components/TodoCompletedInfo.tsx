import { CheckCircleOrLoading } from '@src/components/TaskList/components/CheckCircleOrLoading'
import { TodosMutations } from '@src/components/TaskList/mutations'
import { Todo } from '@src/components/TaskList/domain/types/Todo'

type TaskCompletedInfoProps = {
  task: Todo
}

export const TodoCompletedInfo = ({ task }: TaskCompletedInfoProps) => {
  const updateTodoMutation = TodosMutations.usePatchTodo()

  return (
    <span
      className="cursor-pointer"
      onClick={async () =>
        await updateTodoMutation.patchTodo({
          id: task.id,
          payload: { completed: !task.completed, isLocal: task.isLocal },
        })
      }
    >
      <CheckCircleOrLoading
        loading={updateTodoMutation.isLoading && updateTodoMutation.variables?.id === task.id}
        completed={task.completed}
      />
    </span>
  )
}
