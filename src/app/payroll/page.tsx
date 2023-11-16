import { EmployeeCard } from '../components/EmployeeCard'

export default function PayrollPage () {
  const mockEmployees = [
    {
      name: 'Julian',
      lastName: 'Oviedo',
      dni: 39624449,
      added: new Date(Date.now()),
      mail: 'julianovie234@gmail.com'
    }
  ]

  return (
    <main className='flex flex-col items-center gap-6 bg-5 h-screen px-4'>
      <h1 className='text-1 mt-10'>Payroll</h1>
      <p className='text-1'>List of employees</p>
      <hr className='h-1 w-full' />
      {mockEmployees.map(employee => {
        const { name, lastName, dni, added, mail } = employee
        return (
          <div key={dni}>
            <EmployeeCard name={name} lastName={lastName} dni={dni} added={added} mail={mail} />
          </div>
        )
      })}
    </main>
  )
}
