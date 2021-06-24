import { Request, Response } from 'express'
import { pool } from '../../../index'

const deleteTool = (req: Request, res: Response) => {
  try {
    const id = req.params.id

    pool.query('DELETE FROM toolsv3 WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
  
      res.status(204).json(results?.rows)
    })
  } catch (error) {
    res.status(500)
  }
}

export default deleteTool