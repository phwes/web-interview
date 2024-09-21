import { v4 as uuidv4 } from 'uuid'

class TodoList {
  id: string
  name: string
  todos: string[]

  private isValidInput(name: string, todos: string[]) {
    // TODO: Implement validation
    return true
  }

  constructor(name: string, todos: string[]) {
    if (!this.isValidInput(name, todos)) {
      throw new Error('Invalid input')
    }
    this.id = uuidv4()
    this.name = name
    this.todos = todos
  }
}

export default TodoList
