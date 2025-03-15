import axios from 'axios'
import { GetTodosFilters } from '@src/components/TaskList/domain/types/GetTodosFilters'
import { Task } from '@src/components/TaskList/domain/types/Task'

export type GetTodosRequest = {
  signal: AbortSignal | undefined
  filters: GetTodosFilters
}

export function loadTodos({ signal, filters }: GetTodosRequest) {
  return axios.get<Task[]>('https://jsonplaceholder.typicode.com/todos', {
    signal,
    params: filters,
  })
}
