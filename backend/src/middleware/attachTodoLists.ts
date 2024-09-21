import { TodoList } from '@todo-list/common'
import { NextFunction, Request, Response } from 'express'

const attachTodoLists =
  (todoLists: TodoList[]) => (req: Request, res: Response, next: NextFunction) => {
    req.todoLists = todoLists
    next()
  }

export default attachTodoLists
