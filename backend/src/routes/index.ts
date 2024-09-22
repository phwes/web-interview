import express from 'express'
import todoListRoutes from './todoList.js'

const router = express.Router()

todoListRoutes(router)

export default router
