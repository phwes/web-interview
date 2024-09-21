import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.sendStatus(200))

const PORT = 3001
const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

export default server
