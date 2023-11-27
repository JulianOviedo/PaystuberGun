import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryClient } from './components/ReactQueryProvider'
import { ReactHotToast } from './components/ReactHotToast'

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
        <ReactQueryClient>
          {children}
        </ReactQueryClient>
        <ReactHotToast />
      </body>
    </html>
  )
}
