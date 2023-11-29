'use client'
import { useSignUpForm } from '(@/hooks/signUpForm)'
import { useMutation } from 'react-query'
import { Loader } from '../components/Loader'
import { createUser } from '../../services/CRUD'
import { newUserInfo } from '(@/types.td)'
import toast from 'react-hot-toast'

export default function SignUpPage () {
  const { handleSubmit, handleChange, userData } = useSignUpForm()

  const newUserMutation = useMutation(async (data: newUserInfo) => {
    await createUser(data)
  })

  if (newUserMutation.isSuccess) {
    toast.success('Account created successfully!')
    newUserMutation.reset()
  }

  if (newUserMutation.isError) {
    toast.error('Something went wrong... plese try again later')
    newUserMutation.reset()
  }

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
        <button onClick={() => newUserMutation.mutate(userData)} className='bg-1 rounded text-5 w-full h-10 mt-10 flex justify-center items-center'>{newUserMutation.isLoading ? <Loader /> : 'Create an Account'}</button>
      </form>
    </>
  )
}
