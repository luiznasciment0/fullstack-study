import express from 'express'
import tools from './api/tools'

export const app = express()

// routes
app.use('/tools', tools)