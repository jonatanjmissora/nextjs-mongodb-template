
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import { NavLinks } from '@/app/_lib/constants'
import getUser from '@/app/_data/user/get-user'
import UserMenu from './UserMenu'
import { KindeUserType } from '@/app/_lib/types/user-type'
import DesktopThemeSwitcher from './DesktopThemeSwitcher'
import LogoSVG from '@/app/_assets/LogoSVG'

export default async function Header() {

  const user = await getUser() as KindeUserType

  return (
    <header className="flex justify-between items-center px-6 sm:px-12 py-8 text-[var(--white)]">

      <Link href={"/"} className="text-xl sm:text-xs 2xl:text-xl">
        <LogoSVG className='size-7 text-[var(--color-primary)]' />
      </Link>

      <nav className='sm:flex space-x-4 hidden'>
        {
          user && NavLinks.map((link, i) => (
            <HeaderLink key={i} href={link.href} text={link.text} />
          ))
        }
        <UserMenu user={user} />
      </nav>

      {
        !user
        && <div className='flex space-x-8'>
          <DesktopThemeSwitcher />
          <Link href={"/auth/login"} className='btn btn-primary text-xl sm:text-xs 2xl:text-xl'>Ingresar</Link>
        </div>
      }

    </header>
  )
}
