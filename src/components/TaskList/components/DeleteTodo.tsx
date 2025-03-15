import { Trash2 } from 'lucide-react'
import { TodosMutations } from '@src/components/TaskList/mutations'
import { cn } from '@src/utils'

type DeleteTodoProps = {
  id: number
}

export const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const deleteTodoMutation = TodosMutations.useDeleteTodo()

  return (
    <span className="cursor-pointer" onClick={async () => await deleteTodoMutation.deleteTodo({ id })}>
      <Trash2
        className={cn('h-5 w-5 text-red-700', {
          'animate-spin': deleteTodoMutation.isLoading && deleteTodoMutation.variables?.id === id,
        })}
      />
    </span>
  )
}
