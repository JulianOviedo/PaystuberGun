export default function SignUpPage () {
  return (
    <>
      <h1 className='text-4xl font-bold mt-8'>Sign up here!</h1>
      <form action='' className='mt-8 flex gap-5 flex-col w-full items-center'>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Email
          <input placeholder='mailbox@gmail.com' type='email' className=' rounded h-10 bg-5 pl-2 w-full' />
        </label>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Password
          <input placeholder='Password' type='password' className=' rounded h-10 bg-5 pl-2 w-full' />
        </label>
        <label htmlFor='' className='relative w-full text-lg font-medium'>
          Repeat Password
          <input placeholder='Password' type='password' className=' rounded h-10 bg-5 pl-2 w-full' />
        </label>
        <button className='bg-1 rounded text-5 w-full h-10 mt-10'>Create an Account</button>
      </form>
    </>
  )
}
