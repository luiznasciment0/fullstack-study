import pg from 'pg'
import { config } from './config'
import { app } from './app'

const Pool = pg.Pool

export const pool = new Pool({
  user: config.DB_USER, 
  host: config.DB_HOST,
  database: config.DB_DATABASE,
  password: config.DB_PASSWORD,
  port: Number(config.DB_PORT) || 5432,
})

app.listen(config.PORT, () => {
  console.log(`App listening at http://localhost:${config.PORT}`)
})