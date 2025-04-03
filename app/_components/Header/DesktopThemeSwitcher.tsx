
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
      <button onClick={handleClick} className='flex items-center justify-end gap-4 text-[var(--foreground)] hover:text-[var(--color-primary-hover)]'>
        <SunSVG className="size-7 sm:size-5 2xl:size-7 sun-icon" />
        <MoonSVG className="size-7 p-1 sm:size-5 2xl:size-7 moon-icon" />
      </button>

    </>
  )
}

export default DesktopThemeSwitcher
