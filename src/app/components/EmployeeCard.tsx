/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { DeleteIcon, EditIcon } from '../../../public/Icons'
import { Loader } from './Loader'

interface EmployeeCardProps {
  name: string
  lastName: string
  added: string
  dni: number
  mail: string
  handleEdit: () => void
  handleDelete: () => void
  isDeleting: boolean
}

export const EmployeeCard = ({ name, lastName, added, dni, mail, handleEdit, handleDelete, isDeleting }: EmployeeCardProps) => {
  const handleOnClickDelete = async () => {
    await handleDelete()
  }

  return (
    <div className=' text-center flex flex-row gap-2 '>
      <section className='bg-1 rounded p-4'>
        <h1 className='font-bold underline'>{lastName}, {name} - {dni}</h1>
        <p>Added: {added}</p>
        <p>Mail: {mail}</p>
      </section>
      <section className='flex flex-col gap-2 items-center justify-center'>
        <div className='ml-1 w-8 h-8 cursor-pointer' onClick={() => handleEdit()}>
          <EditIcon />
        </div>
        <div className='w-8 h-8 cursor-pointer' onClick={handleOnClickDelete}>
          {isDeleting ? <Loader /> : <DeleteIcon />}
        </div>
      </section>
    </div>
  )
}
