import express, { Request, Response } from 'express'
import cors from 'cors'

import attachTodoLists from './middleware/attachTodoLists'
import routes from './routes/index'
import { TodoList } from '@todo-list/common'

const app = express()

const todoLists = [
  new TodoList('First List', ['First todo of first list!']),
  new TodoList('Second List', ['First todo of second list!']),
]

app.use(cors())
app.use(express.json())
app.use(attachTodoLists(todoLists))
app.use(routes)

app.get('/', (req: Request, res: Response) => res.sendStatus(200))

const PORT = 3001
const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

export default server
