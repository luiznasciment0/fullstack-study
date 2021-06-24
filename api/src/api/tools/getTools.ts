import { Request, Response } from 'express'
import getAllTools from './getAllTools'
import getToolsByTag from './getToolsByTag'

const getTools = (req: Request, res: Response) => {
  const tag = req.query.tag
  
  if (tag) {
    return getToolsByTag({ res, tag: tag as string })
  }

  return getAllTools(res)
}

export default getTools