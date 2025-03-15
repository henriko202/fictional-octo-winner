import { deleteTodo } from '@src/components/TaskList/requests/delete-todo'
import { useMutation } from '@tanstack/react-query'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { AxiosError } from 'axios'

type DeleteTodoParams = {
  id: number
}

export const useDeleteTodo = () => {
  const { cache } = useLoadTodos()

  const mutation = useMutation<number, AxiosError<void>, DeleteTodoParams>({
    mutationFn: async ({ id }) => {
      return await deleteTodo({ id })
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
