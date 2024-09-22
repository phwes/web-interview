import { v4 as uuidv4 } from 'uuid'

class Todo {
  id: string
  text: string
  isDone: boolean = false

  private isValidInput(text: string) {
    // TODO: Implement validation
    return true
  }

  constructor(text: string) {
    if (!this.isValidInput(text)) {
      throw new Error('Invalid input')
    }

    this.id = uuidv4()
    this.text = text
  }
}

export default Todo
