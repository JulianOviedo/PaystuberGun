import { pool } from '(@/libs/mysql)'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { URL } from 'url'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

export async function GET (request: NextApiRequest) {
  try {
    const result = await pool.query('SELECT * FROM employees WHERE user_id = 1')
    // TODO : CHANGE THE HARDTYPE NUMBER 1 IN USER_ID
    return NextResponse.json(result, { headers })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
export async function DELETE (request: NextApiRequest) {
  try {
    if (request.url !== undefined) {
      const dni = new URL(request.url).searchParams.get('dni')
      await pool.query('DELETE FROM employees WHERE user_id = 1 AND dni = ?', [dni])
      return NextResponse.json({ message: 'empleado borrado' }, { headers })
    } else {
      return NextResponse.json({ message: 'no se puede borrar el empleado' }, { headers })
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
