import express, { Request, Response } from 'express'
import cors from 'cors'

import attachTodoLists from './middleware/attachTodoLists.js'
import routes from './routes/index.js'
import { Todo, TodoList } from '@todo-list/common'

const app = express()

const firstTodo = new Todo('First todo of first list!')
const secondTodo = new Todo('First todo of second list!')

const todoLists = [
  new TodoList('First List', [firstTodo]),
  new TodoList('Second List', [secondTodo]),
]

app.use(cors())
app.use(express.json())
app.use(attachTodoLists(todoLists))
app.use(routes)

app.get('/', (req: Request, res: Response) => res.sendStatus(200))

const PORT = 3001
const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

export default server
