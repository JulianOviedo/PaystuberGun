import mysql from 'serverless-mysql'

export const pool = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: 'solvd1234',
    port: '3306',
    database: 'paystuberdb'
  }
})
