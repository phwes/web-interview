import request from 'supertest'
import app from '../src/index'

describe('API endpoints', () => {
  afterAll(() => {
    app.close()
  })

  test('/', async () => {
    return request(app).get('/').expect(200)
  })
})
