import { NextResponse } from 'next/server.js'
import { pool } from '../../../libs/mysql.js'
export async function GET (request) {
  const result = await pool.query('SELECT NOW()')
  const jsonResponse = JSON.stringify(result[0]['NOW()'])
  return new Response(jsonResponse)
}

export async function POST (request) {
  try {
    const { username, email, password } = await request.json()

    const result = await pool.query('INSERT INTO users SET ?', {
      username, email, password
    })

    console.log(result)
    return NextResponse.json({ message: 'New user has been created!' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
