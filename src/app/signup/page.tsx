'use client'
import { useSignUpForm } from '(@/hooks/signUpForm)'

export default function SignUpPage () {
  const api = process.env.NEXT_PUBLIC_API_URL
  const { handleSubmit, handleChange } = useSignUpForm()
  return (
    <>
      <h1 className='text-4xl font-bold mt-8'>Sign up here!</h1>
      <form onSubmit={handleSubmit} className='mt-8 flex gap-5 flex-col w-full items-center'>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Username
          <input name='username' placeholder='John Doe' type='text' className=' rounded h-10 bg-5 pl-2 w-full' onChange={handleChange} />
        </label>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Email
          <input name='email' placeholder='mailbox@gmail.com' type='email' className=' rounded h-10 bg-5 pl-2 w-full' onChange={handleChange} />
        </label>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Password
          <input name='password' placeholder='Password' type='password' className=' rounded h-10 bg-5 pl-2 w-full' onChange={handleChange} />
        </label>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Repeat Password
          <input placeholder='Repeat password' type='password' className=' rounded h-10 bg-5 pl-2 w-full' />
        </label>
        <button className='bg-1 rounded text-5 w-full h-10 mt-10'>Create an Account</button>
      </form>
    </>
  )
}
