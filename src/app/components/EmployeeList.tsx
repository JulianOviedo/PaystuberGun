'use client'
import { useMutation, useQuery } from 'react-query'
import { deleteEmployee, getEmployees } from '../../services/CRUD'
import { EmployeeCard } from './EmployeeCard'
import { Employee } from '(@/types.td)'
import { useState } from 'react'

export const EmployeeList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = () => {
    setIsModalOpen(true)
  }

  const CloseModal = () => {
    setIsModalOpen(false)
  }

  const fetchEmployees = useQuery('employees', getEmployees)
  const deleteMutation = useMutation(async (dni: number) => {
    await deleteEmployee(dni)
  }, {
    onSuccess: async () => {
      await fetchEmployees.refetch() // Refetch the employees after successful deletion
    }
  })

  return (
    <>
      {isModalOpen &&
        <div className='z-10 absolute w-full h-full bg-black bg-opacity-90 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-dark'>
          <div className='w-screen h-screen flex justify-center items-center'>
            <form action='' className='flex flex-col gap-8 w-80 h-50 bg-1 rounded-xl items-start p-8 justify-center'>
              <label htmlFor=''>
                Name -  <input className='rounded-sm pl-2' type='text' />
              </label>
              <label htmlFor=''>
                Dni -   <input className='rounded-sm pl-2' type='text' />
              </label>
              <label htmlFor=''>
                Mail -   <input className='rounded-sm pl-2' type='text' />
              </label>
              <button className='w-72 bg-3 self-center rounded-lg h-10' onClick={CloseModal}>Save</button>
            </form>
          </div>
        </div>}
      <ul className='flex flex-wrap gap-8'>
        {fetchEmployees.data?.map((employee: Employee) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
          const { name, lastname, dni, added_at, email } = employee
          const dateFormated = added_at.split('T')[0]
          return (
            <li key={dni} className='flex-shrink-1'>
              <EmployeeCard name={name} lastName={lastname} dni={dni} added={dateFormated} mail={email} handleEdit={handleEdit} handleDelete={() => deleteMutation.mutate(dni)} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
