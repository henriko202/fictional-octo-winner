import { Trash2 } from 'lucide-react'
import { TodosMutations } from '@src/components/TaskList/mutations'

type DeleteTodoProps = {
  id: number
}

export const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const deleteTodoMutation = TodosMutations.useDeleteTodo()

  return (
    <span className="cursor-pointer" onClick={async () => await deleteTodoMutation.deleteTodo({ id })}>
      {deleteTodoMutation.isLoading && deleteTodoMutation.variables?.id === id ? (
        <Trash2 className="h-5 w-5 animate-spin text-primary" />
      ) : (
        <Trash2 className="h-5 w-5 text-primary" />
      )}
    </span>
  )
}
