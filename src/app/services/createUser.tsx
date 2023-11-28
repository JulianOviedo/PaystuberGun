import { newUserInfo } from '(@/types.td)'
import axios from 'axios'

export const createUser = async (data: newUserInfo) => {
  try {
    const response = await axios.post('http://localhost:3000/api/create-user', data)
    return response.data
  } catch (error) {
    console.error('Error creating user:', error)
    throw error // Re-lanzamos el error para que pueda ser manejado por el componente.
  }
}
