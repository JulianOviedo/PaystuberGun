'use client'

import { DeleteIcon, EditIcon } from '../../../public/Icons'

interface EmployeeCardProps {
  name: string
  lastName: string
  added: Date
  dni: number
  mail: string
}

export const EmployeeCard = ({ name, lastName, added, dni, mail }: EmployeeCardProps) => {
  const formattedDate = added.toLocaleDateString()
  return (
    <div className=' text-center flex flex-row gap-2 '>
      <section className='bg-1 rounded p-4'>
        <h1 className='font-bold underline'>{lastName}, {name} - {dni}</h1>
        <p>Added: {formattedDate}</p>
        <p>Mail: {mail}</p>
      </section>
      <section className='flex flex-col gap-2 items-center justify-center'>
        <div className='ml-1 w-8 h-8'>
          <EditIcon />
        </div>
        <div className='w-8 h-8'>
          <DeleteIcon />
        </div>
      </section>
    </div>
  )
}
