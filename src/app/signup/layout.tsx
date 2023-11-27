import { Logo } from '../../../public/Icons'
import { ReactNode } from 'react'

interface SignUpLayoutProps {
  children: ReactNode
}

export default function SignUpLayOut ({ children }: SignUpLayoutProps) {
  return (
    <main className='w-screen h-screen p-4 bg-5'>
      <div className='bg-3 h-full w-full rounded-md p-4 sm:px-[30%]'>
        <div className='w-full flex justify-center items-center p-4 flex-col'>
          <div className='w-[84px] h-[84px]'>
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
