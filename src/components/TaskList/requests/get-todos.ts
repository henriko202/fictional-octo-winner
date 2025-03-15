import axios from 'axios'
import { GetTodosFilters } from '@src/components/TaskList/domain/types/GetTodosFilters'
import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { TODOS_STORAGE_KEY } from '@src/components/TaskList/domain/constants'

export type GetTodosRequest = {
  signal: AbortSignal | undefined
  filters: GetTodosFilters
}

export async function loadTodos({ signal, filters }: GetTodosRequest) {
  const { data: apiTodos } = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    signal,
    params: filters,
  })

  const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY)
  const localTodos: Todo[] = storedTodos ? JSON.parse(storedTodos) : []

  const todos = [...apiTodos, ...localTodos]

  return { data: todos }
}
