const todoListRoutes = (router) => {
  router.get('/todo-lists', (req, res) => {
    res.json(req.todoLists)
  })
}

export default todoListRoutes
