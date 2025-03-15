import { deleteTodo } from '@src/components/TaskList/requests/delete-todo'
import { useMutation } from '@tanstack/react-query'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { AxiosError } from 'axios'

type DeleteTodoParams = {
  id: number
  isLocal?: boolean
}

export const useDeleteTodo = () => {
  const { cache } = useLoadTodos()

  const mutation = useMutation<number, AxiosError<void>, DeleteTodoParams>({
    mutationFn: async ({ id, isLocal }) => {
      return await deleteTodo({ id, isLocal })
    },
    onSuccess: async (data) => {
      cache.remove([data])
    },
    onError: () => {
      console.log('error deleting todo')
    },
  })

  return {
    ...mutation,
    deleteTodo: mutation.mutateAsync,
  }
}
