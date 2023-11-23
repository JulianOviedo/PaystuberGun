import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Logo } from '../../public/Icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paystuber Gun',
  description: 'Developed by Julian Oviedo'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />

      <body className={inter.className}>
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
      </body>
    </html>
  )
}
