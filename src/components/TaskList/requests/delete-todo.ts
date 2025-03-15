import axios from 'axios'
import { TODOS_STORAGE_KEY } from '@src/components/TaskList/domain/constants'
import { Todo } from '@src/components/TaskList/domain/types/Todo'

type DeleteTodoRequest = {
  id: number
  isLocal?: boolean
}

export async function deleteTodo({ id, isLocal }: DeleteTodoRequest) {
  if (isLocal) {
    const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY)
    if (storedTodos) {
      const localTodos: Todo[] = JSON.parse(storedTodos)
      const filteredTodos = localTodos.filter((todo) => todo.id !== id)
      localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(filteredTodos))
    }

    return id
  }

  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return id
}
