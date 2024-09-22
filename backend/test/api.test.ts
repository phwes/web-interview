import request from 'supertest'
import app from '../src/index'

describe('API endpoints', () => {
  afterAll(() => {
    app.close()
  })

  test('GET /', async () => {
    return request(app).get('/').expect(200)
  })

  test('GET /todo-lists', async () => {
    const response = await request(app).get('/todo-lists')
    const todoLists = response.body

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
})
