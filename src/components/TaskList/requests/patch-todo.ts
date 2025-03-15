import axios from 'axios'
import { Todo } from '@src/components/TaskList/domain/types/Todo'

type PatchTodoRequest = {
  id: number
  payload: Partial<Todo>
}

export function patchTodo({ id, payload }: PatchTodoRequest) {
  return axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, payload)
}
