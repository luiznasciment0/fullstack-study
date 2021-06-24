import express from 'express'
import getTools from './getTools'
import createTool from './postTools'

const router = express.Router()

router.get('/', getTools)
router.post('/', createTool)

export default router