import { Trash2 } from 'lucide-react'
import { TodosMutations } from '@src/components/TaskList/mutations'
import { cn } from '@src/utils'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

type DeleteTodoProps = {
  id: number
  isLocal?: boolean
}

export const DeleteTodo = ({ id, isLocal }: DeleteTodoProps) => {
  const { t } = useTranslation()
  const deleteTodoMutation = TodosMutations.useDeleteTodo()

  return (
    <span
      className="cursor-pointer"
      onClick={async () => {
        await deleteTodoMutation.deleteTodo({ id, isLocal })
        toast.success(t('task:todoDeleted'))
      }}
    >
      <Trash2
        className={cn('h-5 w-5 text-red-700', {
          'animate-spin': deleteTodoMutation.isLoading && deleteTodoMutation.variables?.id === id,
        })}
      />
    </span>
  )
}
