import request from 'supertest'
import app from '../src/index'
import { TodoList } from '@todo-list/common'

describe('API endpoints', () => {
  let todoLists: TodoList[]

  afterAll(() => {
    app.close()
  })

  test('GET /', async () => {
    return request(app).get('/').expect(200)
  })

  test('GET /todo-lists', async () => {
    const response = await request(app).get('/todo-lists')
    todoLists = response.body

    expect(todoLists).toHaveLength(2)
    expect(todoLists[0]).toMatchObject({
      name: 'First List',
      todos: [{ text: 'First todo of first list!' }],
    })
    expect(todoLists[1]).toMatchObject({
      name: 'Second List',
      todos: [{ text: 'First todo of second list!' }],
    })
  })

  test('POST /todo-list/:listId/todo', async () => {
    const listId = todoLists[0].id

    const response = await request(app)
      .post(`/todo-list/${listId}/todo`)
      .send({ text: 'Second todo of first list!' })
      .expect(200)

    expect(response.body.todos).toHaveLength(2)
    expect(response.body.todos[1].text).toBe('Second todo of first list!')
  })
})
