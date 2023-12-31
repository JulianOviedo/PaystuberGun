import Link from 'next/link'

export default function HomePage () {
  return (
    <main className='w-screen h-screen bg-5'>
      <section className='flex flex-col justify-center items-center gap-16 p-10 sm:flex-row'>
        <Link className='bg-1  rounded w-full sm:w-80 h-20 text-2xl flex items-center justify-center font-bold text-3 cursor-pointer' href='/home/payroll'>View payroll</Link>
        <Link className='bg-1  rounded w-full sm:w-80 h-20 text-2xl flex items-center justify-center font-bold text-3 cursor-pointer' href='#'>Shot Paystubs</Link>
      </section>
    </main>
  )
}
