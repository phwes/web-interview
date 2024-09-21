import { Request, Response, Router } from 'express'

const todoListRoutes = (router: Router) => {
  router.get('/todo-lists', (req: Request, res: Response) => {
    res.json(req.todoLists)
  })
}

export default todoListRoutes
