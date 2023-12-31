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

export const getEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/employees')
    return response.data
  } catch (error) {
    console.error('Something went wrong trying to get employees', error)
    throw error
  }
}

export const deleteEmployee = async (dni: number) => {
  try {
    console.log(dni, 'desde el CRUD')
    const response = await axios.delete(`http://localhost:3000/api/employees/?dni=${dni}`)
    return response.data
  } catch (error) {
    console.error('Error deleting employee', error)
    throw error
  }
}
