"use client"

import { NavLinks } from "@/app/_lib/constants";
import { KindeUserType } from "@/app/_lib/types/user-type";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import { ThemeSwitcher } from "./ThemeSwitcher";
import PlusSVG from "@/app/_assets/PlusSvg";

export default function UserMenu({ user }: { user: KindeUserType }) {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const pathname = usePathname()
  
    return (
      <>
        <div className="w-max sm:w-28 flex justify-end">
          <button className="p-2 sm:p-0 cursor-pointer" onClick={() => setShowMenu(prev => !prev)}>
            <img src={user.picture} alt="user" className="rounded-full size-10 sm:size-8 2xl:size-10 " />
          </button>
        </div>
        {
          showMenu &&
          <>
  
            <DesktopMenu username={user.given_name} setShowMenu={setShowMenu} pathname={pathname} />
  
          </>
        }
      </>
    )
  }
  
  const DesktopMenu = ({ username, setShowMenu, pathname }: { username: string, setShowMenu: (value: boolean) => void, pathname: string }) => {
  
    const pathnameArray = pathname.split("/")
    const currentPath = pathnameArray[pathnameArray.length - 1]
  
    return (
      <div className="modal-menu-container fixed inset-0 z-10 bg-[var(--color-primary)] rounded-l-none sm:rounded-l-xl shadow-lg">
        <div className="w-full flex justify-between items-center p-4 px-10 sm:px-8 2xl:px-10 gap-6">
          <p className="text-xl sm:text-xs 2xl:text-xl font-bold tracking-wider">Hola, {username.toUpperCase()}</p>
          <button onClick={() => setShowMenu(false)}>
            <PlusSVG className="size-9 sm:size-9 2xl:size-9 rotate-45 hover:text-[var(--color-primary-hover)]" />
          </button>
        </div>
  
        <nav className="flex flex-col gap-8 sm:gap-6 2xl:gap-8 text-center items-center p-10 py-20 sm:p-8 sm:py-32 2xl:p-10 2xl:py-32 border-b border-[#ffffff10]">
          {
            NavLinks.map(link =>
              <div key={link.text} className="w-full flex justify-end">
                <a className={`text-2xl sm:text-xl 2xl:text-2xl w-max pl-8 text-right hover:text-[var(--color-primary-hover)] ${currentPath === link.includes && "border-b border-[var(--white)]"}`} href={link.href}>{link.text}
                </a>
              </div>)
          }
        </nav>
  
        <div className="flex flex-col gap-8 sm:gap-6 2xl:gap-8 text-center items-end p-10 sm:p-8 2xl:p-10">
          <LogoutModal />
          <ThemeSwitcher />
        </div>
      </div>
    )
  }