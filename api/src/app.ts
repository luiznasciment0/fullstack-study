import express from 'express'
import getTools from './api/tools/getTools'

export const app = express()

// routes
app.get('/tools', getTools)