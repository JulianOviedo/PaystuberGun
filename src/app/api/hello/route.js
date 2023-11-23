import { pool } from '../../../libs/mysql.js'
export async function GET (request) {
  const result = await pool.query('SELECT NOW()')
  const jsonResponse = JSON.stringify(result[0]['NOW()'])
  return new Response(jsonResponse)
}
