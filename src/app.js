import express from 'express'
import { env } from './config/env.js'
import { router } from './router/router.js'

const app = express()
const port = Number(env.PORT)

app.use(express.json())
app.use('/todos', router)

app.listen(port, () => console.log('Server running'))
