import axios from 'axios'
import { GetTodosFilters } from '@src/components/TaskList/domain/types/GetTodosFilters'
import { Todo } from '@src/components/TaskList/domain/types/Todo'

export type GetTodosRequest = {
  signal: AbortSignal | undefined
  filters: GetTodosFilters
}

export function loadTodos({ signal, filters }: GetTodosRequest) {
  return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    signal,
    params: filters,
  })
}
