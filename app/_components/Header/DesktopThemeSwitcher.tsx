
"use client"

import { useTheme } from 'next-themes'
import SunSVG from '../../_assets/SunSVG'
import MoonSVG from '../../_assets/MoonSVG'

const DesktopThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
    <button onClick={handleClick} className='hidden sm:flex items-center justify-end gap-4 hover:text-[var(--color-primary-hover)]'>
      <SunSVG className="size-8 sm:size-6 2xl:size-8 sun-icon text-[var(--foreground)]" />
      <MoonSVG className="size-8 sm:size-6 2xl:size-8 moon-icon text-[var(--foreground)]" />
    </button>
     
    </>
  )
}

export default DesktopThemeSwitcher
