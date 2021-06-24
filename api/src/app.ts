import express from 'express'
import tools from './api/tools'

export const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// routes
app.use('/tools', tools)