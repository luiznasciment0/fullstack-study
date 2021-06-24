import express from 'express'
import tools from './api/tools'

export const app = express()
const urlParser = express.urlencoded({ extended: true })
const jsonParser = express.json()

app.use(urlParser)
app.use(jsonParser)
// routes
app.use('/tools', tools)