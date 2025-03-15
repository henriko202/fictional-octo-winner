import axios from 'axios'
import { Todo } from '@src/components/TaskList/domain/types/Todo'
import { TODOS_STORAGE_KEY } from '@src/components/TaskList/domain/constants'

type PatchTodoRequest = {
  id: number
  payload: Partial<Todo>
}

export function patchTodo({ id, payload }: PatchTodoRequest) {
  if (payload.isLocal) {
    const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY)
    const localTodos: Todo[] = storedTodos ? JSON.parse(storedTodos) : []
    let currentTodo = localTodos.find((todo) => todo.id === id)
    if (!currentTodo) return { data: payload }
    currentTodo = { ...currentTodo, ...payload }

    if (currentTodo) {
      const filteredTodos = localTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...payload }
        }
        return todo
      })
      localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(filteredTodos))
    }
    return { data: currentTodo }
  }

  return axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, payload)
}
