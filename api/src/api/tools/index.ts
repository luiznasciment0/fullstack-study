import express from 'express'
import getTools from './getTools'

const router = express.Router()

router.get('/', getTools)

export default router