import express from 'express'
import cors from 'cors'

import attachTodoLists from './middleware/attachTodoLists.js'
import todoListRoutes from './routes/todoList.js'
import routes from './routes/index.js'

const app = express()

const todoLists = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: ['First todo of first list!'],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: ['First todo of second list!'],
  },
}

app.use(cors())
app.use(express.json())
app.use(attachTodoLists(todoLists))
app.use(routes)

app.get('/', (req, res) => res.sendStatus(200))

const PORT = 3001
const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

export default server
