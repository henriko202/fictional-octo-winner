import axios from 'axios'

type DeleteTodoRequest = {
  id: number
}

export async function deleteTodo({ id }: DeleteTodoRequest) {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return id
}
