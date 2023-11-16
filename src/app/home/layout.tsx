import Link from 'next/link'
import { BurgerMenu, Logo } from '../../../public/Icons'
import { ReactNode } from 'react'

interface HomeLayoutProps {
  children: ReactNode
}

const navLinks = [
  {
    label: 'Home',
    route: '/home'
  }
]

export default function HomeLayout ({ children }: HomeLayoutProps) {
  return (
    <>
      <header className='flex flex-row bg-1 h-12 justify-between items-center px-4 gap-8'>
        <div className='w-10 h-10'>
          <Logo />
        </div>
        <h1>UserName</h1>
        <BurgerMenu />
        {/* <nav>
          {navLinks.map(link => {
            return (
              <div key={link.label}>
                <Link href={link.route}>{link.label}</Link>
              </div>
            )
          })}
        </nav> */}
      </header>
      {children}
    </>
  )
}
