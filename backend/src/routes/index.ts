import express from 'express'
import todoListRoutes from './todoList'

const router = express.Router()

todoListRoutes(router)

export default router
