'use client'
import { useQuery } from 'react-query'
import { getEmployees } from '../services/CRUD'
import { EmployeeCard } from './EmployeeCard'
import { Employee } from '(@/types.td)'

export const EmployeeList = ({ handleEdit }: any) => {
  const fetchEmployees = useQuery('employees', getEmployees)
  console.log(fetchEmployees)
  return (
    <ul className='flex flex-row flex-wrap gap-8'>
      {fetchEmployees.data?.map((employee: Employee) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { name, lastname, dni, added_at, email } = employee
        const dateFormated = added_at.split('T')[0]
        return (
          <li key={dni}>
            <EmployeeCard name={name} lastName={lastname} dni={dni} added={dateFormated} mail={email} handleEdit={handleEdit} />
          </li>
        )
      })}
    </ul>
  )
}
