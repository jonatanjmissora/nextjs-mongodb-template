"use client"

import { useTheme } from 'next-themes'
import SunSVG from '../../_assets/SunSVG'
import MoonSVG from '../../_assets/MoonSVG'

const ThemeSwitcher = ({setShowMenu}: {setShowMenu: (value: boolean) => void}) => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
    setShowMenu(false)
  }

  return (
    <div className='flex items-center justify-end gap-4 hover:text-[var(--color-primary-hover)]' onClick={handleClick}>

      <span className='tracking-wider italic block sm:hidden pb-1 text-3xl sm:text-base 2xl:text-2xl'>tema</span>

      {
        theme === "light"

          ? <SunSVG className="size-8 sm:size-6 2xl:size-7" />
          : <MoonSVG className="size-8 sm:size-6 2xl:size-7" />
      }
    </div>
  )
}

export default ThemeSwitcher