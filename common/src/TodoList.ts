import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'

class TodoList {
  id: string
  name: string
  todos: Todo[]

  private isValidInput(name: string, todos: Todo[]) {
    // TODO: Implement validation
    return true
  }

  constructor(name: string, todos: Todo[]) {
    if (!this.isValidInput(name, todos)) {
      throw new Error('Invalid input')
    }

    this.id = uuidv4()
    this.name = name
    this.todos = todos || []
  }

  addTodo = (text: string) => {
    const todo = new Todo(text)
    this.todos.push(todo)
  }

  updateTodo = (todoId: string, text: string) => {
    const todo = this.todos.find((todo) => todo.id === todoId)

    if (!todo) {
      throw new Error('Todo not found')
    }

    todo.text = text
  }
}

export default TodoList
