import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo.js'

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

  updateTodo = (todoId: string, text: string, isDone: boolean) => {
    const todo = this.todos.find((todo) => todo.id === todoId)

    todo.text = text || todo.text
    if (isDone !== undefined) {
      todo.isDone = isDone
    }
  }

  deleteTodo = (todoId: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== todoId)
  }
}

export default TodoList
