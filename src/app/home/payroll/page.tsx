'use client'
import { useState } from 'react'
import { SearchIcon } from '../../../../public/Icons'
import { EmployeeCard } from '../../components/EmployeeCard'

export default function PayrollPage () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const mockEmployees = [
    {
      name: 'Julian',
      lastName: 'Oviedo',
      dni: 39624449,
      added: new Date(Date.now()),
      mail: 'julianovie234@gmail.com'
    }
  ]

  const handleEdit = () => {
    setIsModalOpen(true)
  }

  const CloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className='flex flex-col items-center gap-6 bg-5 h-screen px-4 relative z-0'>
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
      <h1 className='text-1 mt-10'>Payroll - List of employees</h1>
      <div className='relative'>
        <div className='absolute w-5 h-5 top-2 ml-2'>
          <SearchIcon />
        </div>
        <input type='search' className='w-64 rounded p-2 pl-8 bg-3' placeholder='SEARCH BAR' />
      </div>
      <hr className='h-1 w-full' />
      {mockEmployees.map(employee => {
        const { name, lastName, dni, added, mail } = employee
        return (
          <div key={dni}>
            <EmployeeCard name={name} lastName={lastName} dni={dni} added={added} mail={mail} handleEdit={handleEdit} />
          </div>
        )
      })}
    </main>
  )
}
