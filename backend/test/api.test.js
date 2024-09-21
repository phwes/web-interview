import request from 'supertest'
import app from '../src/index'

describe('API endpoints', () => {
  afterAll(() => {
    app.close()
  })

  test('/', async () => {
    return request(app).get('/').expect(200)
  })

  test('/todo-lists', async () => {
    const response = await request(app).get('/todo-lists')
    const todoLists = response.body

    expect(todoLists).toEqual({
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
    })
  })
})
