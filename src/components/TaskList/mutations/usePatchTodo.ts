import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { useMutation } from '@tanstack/react-query'
import { patchTodo } from '@src/components/TaskList/requests/patch-todo'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { AxiosError } from 'axios'

type PatchTodoParams = {
  id: number
  payload: Partial<Todo>
}

export const usePatchTodo = () => {
  const { cache } = useLoadTodos()

  const mutation = useMutation<Todo, AxiosError<Todo>, PatchTodoParams>({
    mutationFn: async ({ id, payload }) => {
      const { data } = await patchTodo({ id, payload })
      return data
    },
    onSuccess: async (data) => {
      cache.update([data])
    },
    onError: () => {
      console.log('error patching todo')
    },
  })

  return {
    ...mutation,
    patchTodo: mutation.mutateAsync,
  }
}
