import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { TODOS_STORAGE_KEY } from '@src/components/TaskList/domain/constants'
import { useLoadTodos } from '../queries/useLoadTodos'

type CreateTodoParams = {
  title: string
  completed?: boolean
}

export const useCreateTodo = () => {
  const { cache } = useLoadTodos()

  const mutation = useMutation<Todo, AxiosError<Todo>, CreateTodoParams>({
    mutationFn: async (payload) => {
      const newTodo: Todo = {
        id: Date.now(),
        ...payload,
        completed: false,
        isLocal: true,
      }

      const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY)
      const localTodos: Todo[] = storedTodos ? JSON.parse(storedTodos) : []
      const updatedTodos = [...localTodos, newTodo]
      localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(updatedTodos))

      return newTodo
    },
    onSuccess: async (data) => {
      cache.add(data)
    },
    onError: (error) => {
      console.error('Error creating todo:', error)
    },
  })

  return {
    ...mutation,
    createTodo: mutation.mutateAsync,
  }
}
