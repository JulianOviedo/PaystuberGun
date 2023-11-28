import { newUserInfo } from '(@/types.td)'
import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const apiURL = process.env.NEXT_PUBLIC_API_URL!

export const createUser = async (data: newUserInfo) => {
  try {
    const response = await axios.post(`${apiURL}create-user`, data)
    return response.data
  } catch (error) {
    console.error('Error creating user:', error)
    throw error // Re-lanzamos el error para que pueda ser manejado por el componente.
  }
}
