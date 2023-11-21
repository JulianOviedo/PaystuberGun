import Link from 'next/link'
import { LockIcon, Logo, MailBox } from '../../public/Icons'

export default function SignIn () {
  return (
    <main className='w-screen h-screen p-4 bg-5'>
      <div className='bg-3 h-full w-full rounded-md p-4 sm:px-[30%]'>
        <div className='w-full flex justify-center items-center p-4 flex-col'>
          <div className='w-[84px] h-[84px]'>
            <Logo />
          </div>
          <h1 className='text-4xl font-bold mt-8'>Welcome !</h1>
        </div>
        <div className='flex justify-center items-center flex-col mt-8 gap-4'>
          <h4>You can log in here</h4>
          <form action='' className='flex gap-5 flex-col w-full items-center'>
            <label htmlFor='' className='relative w-full'>
              <div className='absolute top-2 left-2'>
                <MailBox />
              </div>
              <input placeholder='mailbox@gmail.com' type='email' className=' rounded h-10 pl-10 bg-5 w-full' />
            </label>
            <label htmlFor='' className='relative w-full'>
              <div className='absolute top-2 left-2'>
                <LockIcon />
              </div>
              <input placeholder='Password' type='password' className=' rounded h-10 pl-10 bg-5 w-full' />
            </label>
            <a href='#' className='text-anchor '>Did you forget your password ?</a>
            <Link href='/home' className='bg-1 rounded text-5 w-full h-10 flex justify-center items-center'>Log in</Link>
          </form>
          <hr className='w-full mt-2' />
          <a href='#' className='text-anchor '>First time here ?</a>
          <button className='w-full bg-5 h-10 rounded'>Create an account</button>
        </div>
      </div>
    </main>
  )
}
