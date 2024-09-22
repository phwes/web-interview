import { Request, Response, Router } from 'express'

const todoListRoutes = (router: Router) => {
  router.get('/todo-lists', (req: Request, res: Response) => {
    res.json(req.todoLists)
  })

  router.post('/todo-list/:listId/todo', (req: Request, res: Response) => {
    const { listId } = req.params
    const { text } = req.body

    const todoList = req.todoLists.find((list) => list.id === listId)

    if (!todoList) {
      return res.status(404).json({ message: 'List not found' })
    }

    todoList?.addTodo(text)

    res.json(todoList)
  })

  router.patch('/todo-list/:listId/todo/:todoId', (req: Request, res: Response) => {
    const { listId, todoId } = req.params
    const { text } = req.body

    const todoList = req.todoLists.find(({ id }) => id === listId)

    if (!todoList) {
      return res.status(404).json({ message: 'List not found' })
    }

    todoList.updateTodo(todoId, text)

    res.json(todoList)
  })
}

export default todoListRoutes
