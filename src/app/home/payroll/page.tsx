'use client'
import { SearchIcon } from '../../../../public/Icons'
import { EmployeeList } from '(@/app/components/EmployeeList)'

export default function PayrollPage () {
  return (
    <main className='flex flex-col items-center gap-6 bg-5 h-screen px-4 relative z-0'>
      <h1 className='text-1 mt-10'>Payroll - List of employees</h1>
      <div className='relative'>
        <div className='absolute w-5 h-5 top-2 ml-2'>
          <SearchIcon />
        </div>
        <input type='search' className='w-64 rounded p-2 pl-8 bg-3' placeholder='SEARCH BAR' />
      </div>
      <hr className='h-1 w-full' />
      <EmployeeList />
    </main>
  )
}
