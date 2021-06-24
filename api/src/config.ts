import dotenv from 'dotenv'

dotenv.config()

export const config = {
  DB_USER: process.env.DB_USER, 
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  PORT: process.env.PORT || 3000,
}