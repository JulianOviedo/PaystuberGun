import { pool } from '(@/libs/mysql)'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function GET (request: NextApiRequest) {
  try {
    const result = await pool.query('SELECT * FROM employees')
    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
