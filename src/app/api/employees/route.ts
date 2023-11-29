import { pool } from '(@/libs/mysql)'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function GET (request: NextApiRequest) {
  try {
    const result = await pool.query('SELECT * FROM employees WHERE user_id = 1')
    // TODO : CHANGE THE HARDTYPE NUMBER 1 IN USER_ID
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }

    return NextResponse.json(result, { headers })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
