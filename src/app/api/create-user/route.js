import { NextResponse } from 'next/server.js'
import { pool } from '../../../libs/mysql.js'

export async function POST (request) {
  try {
    const { username, email, password } = await request.json()
    // eslint-disable-next-line no-unused-vars
    const result = await pool.query('INSERT INTO users SET ?', {
      username, email, password
    })
    console.log('Received Data:', username, email, password)

    return NextResponse.json({ message: 'New user has been created!' }, { status: 200 }, {
      heeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
