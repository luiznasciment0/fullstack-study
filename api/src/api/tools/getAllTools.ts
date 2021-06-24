import { Response } from 'express'
import { pool } from '../../index'

const getAllTools = (res: Response) => {
  try {
    pool.query('SELECT * FROM toolsv3 ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
  
      res.status(200).json(results?.rows)
    }) 
  } catch (error) {
    res.status(404)
  }
}

export default getAllTools