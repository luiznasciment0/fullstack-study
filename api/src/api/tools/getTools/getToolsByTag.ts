import { Response } from 'express'
import { pool } from '../../../index'

type ToolsByTag = {
  res: Response
  tag: string
}

const getToolsByTag = ({ res, tag }: ToolsByTag) => {
  try {
    pool.query('SELECT * FROM toolsv3 WHERE $1 = ANY (tags)', [tag], (error, results) => {
      if (error) {
        throw error
      }
  
      res.status(200).json(results?.rows)
    })
  } catch (error) {
    res.status(404)
  }
}

export default getToolsByTag