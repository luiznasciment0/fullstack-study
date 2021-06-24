import pg from 'pg'
import { config } from './config'
import { app } from './app'

const Pool = pg.Pool

export const pool = new Pool({
  user: process.env.DB_USER, 
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
})

app.listen(config.PORT, () => {
  console.log(`App listening at http://localhost:${config.PORT}`)
})