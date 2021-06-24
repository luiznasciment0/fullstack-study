import { Request, Response } from 'express'
import { pool } from '../../../index'

type ReqBody = {
  title: string
  link: string
  description: string
  tags: string[]
}

const createTool = (req: Request, res: Response) => {
  const body = req.body as ReqBody
  const hasBody = body ? Object.keys(body).length > 1 : false
  
  if (!hasBody) return

  const { title, link, description, tags } = body

  pool.query(
    'INSERT INTO toolsv3 (title, link, description, tags) VALUES ($1, $2, $3, $4)',
    [title, link, description, tags],
    (error, results) => {
      if (error) {
        throw error
      }

      res.status(201).send(results.rows)
    }
  )
}

export default createTool