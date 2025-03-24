
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import { NavLinks } from '@/app/_lib/constants'
import MobilMenu from './MobilMenu'
import DesktopThemeSwitcher from './DesktopThemeSwitcher'
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import getUser from '@/app/_data/user/get-user'

export default async function Header() {

  const user = await getUser()

  return (
    <header className="flex justify-between items-center px-6 sm:px-24 py-8 text-[var(--white)]">

      <Link href={"/"} className="btn btn-ghost text-xl sm:text-xs 2xl:text-xl">K@to</Link>

      <nav className='sm:flex space-x-4 hidden'>
        {
          NavLinks.map((link, i) => (
            <HeaderLink key={i} href={link.href} text={link.text} />
          ))
        }
      </nav>

      {
        user
        ? (
          <LogoutLink className="btn btn-primary">Cerrar</LogoutLink>
        )
        : (
          <>
            <LoginLink className='btn btn-primary'>Ingresar</LoginLink>
            <RegisterLink className='btn btn-ghost'>Registrar</RegisterLink>
          </>
        )
      }

      <DesktopThemeSwitcher />
      <MobilMenu />

    </header>
  )
}
