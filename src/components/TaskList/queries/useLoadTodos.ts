import { useQuery, useQueryClient } from '@tanstack/react-query'
import { loadTodos } from '@src/components/TaskList/requests/get-todos'
import { DATE_CONSTANTS } from '@src/utils/constants/date'
import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { TodoObject } from '@src/components/TaskList/domain/models/Todo'

export const TODOS_QUERY_KEY = ['todos']

export const useLoadTodos = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async ({ signal }) => {
      const { data } = await loadTodos({ signal, filters: { _limit: 5 } })
      return data
    },
    select: (data) => data.map((todo) => new TodoObject(todo.id, todo.title, todo.completed, todo.isLocal)),
    refetchInterval: DATE_CONSTANTS.TIME_IN_MILLISECONDS.MINUTE * 20,
    staleTime: DATE_CONSTANTS.TIME_IN_MILLISECONDS.MINUTE * 20,
  })

  return {
    ...query,
    cache: {
      update: (newData: Todo[]) => {
        queryClient.setQueryData(TODOS_QUERY_KEY, (oldData: Todo[] | undefined) => {
          if (!oldData) return newData
          return oldData.map((oldTodo) => {
            const newTodo = newData.find((todo) => todo.id === oldTodo.id)
            return newTodo ? { ...oldTodo, ...newTodo } : oldTodo
          })
        })
      },
      remove: (ids: number[]) => {
        queryClient.setQueryData(TODOS_QUERY_KEY, (oldData: Todo[] | undefined) => {
          if (!oldData) return oldData
          return oldData.filter((todo) => !ids.includes(todo.id))
        })
      },
      add: (newTodo: Todo) => {
        queryClient.setQueryData(TODOS_QUERY_KEY, (oldData: Todo[] | undefined) => {
          if (!oldData) return [newTodo]
          return [...oldData, newTodo]
        })
      },
    },
  }
}
