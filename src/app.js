import express from 'express'
import { env } from './config/env.js'

const app = express()
const port = Number(env.PORT)

app.use(express.json())

app.listen(port, () => console.log('Server running'))
