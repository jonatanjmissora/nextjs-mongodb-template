
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import { NavLinks } from '@/app/_lib/constants'
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import getUser from '@/app/_data/user/get-user'
import UserMenu from './UserMenu'
import { KindeUserType } from '@/app/_lib/types/user-type'
import DesktopThemeSwitcher from './DesktopThemeSwitcher'

export default async function Header() {

  const user = await getUser() as KindeUserType

  return (
    <header className="flex justify-between items-center px-6 sm:px-12 py-8 text-[var(--white)]">

      <Link href={"/"} className="btn btn-ghost text-xl sm:text-xs 2xl:text-xl">K@to</Link>

      <nav className='sm:flex space-x-4 hidden'>
        {
          user && NavLinks.map((link, i) => (
            <HeaderLink key={i} href={link.href} text={link.text} />
          ))
        }
      </nav>

      {
        user
        ? <UserMenu user={user}/>
        : <div className='flex space-x-8'>
            <DesktopThemeSwitcher />
            <LoginLink className='btn btn-primary text-xl sm:text-xs 2xl:text-xl'>Ingresar</LoginLink>
          </div>
      }

    </header>
  )
}
