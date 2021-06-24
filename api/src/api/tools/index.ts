import express from 'express'
import getTools from './getTools'
import createTool from './postTools'
import deleteTool from './deleteTool'

const router = express.Router()

router.get('/', getTools)
router.post('/', createTool)
router.delete('/', deleteTool)

export default router