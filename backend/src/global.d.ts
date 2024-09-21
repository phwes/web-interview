import { TodoList } from '@todo-list/common'
import { Request } from 'express'

declare global {
  namespace Express {
    interface Request {
      todoLists: TodoList[]
    }
  }
}
