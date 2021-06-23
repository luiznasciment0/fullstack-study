import express, { Request, Response } from 'express'
import pg from 'pg'
import dotenv from 'dotenv'

const app = express()
const port = 3000
dotenv.config()

const Pool = pg.Pool

const pool = new Pool({
  user: process.env.DB_USER, 
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
})

const getTools = (_req: Request, res: Response) => {
  pool.query('SELECT * FROM toolsv3 ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log('database error', error)
      throw error
    }

    res.status(200).json(results?.rows)
  }) 
}

app.get('/', getTools)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})