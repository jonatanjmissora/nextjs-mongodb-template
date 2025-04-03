"use client"

import { useTheme } from 'next-themes'
import SunSVG from '../../_assets/SunSVG'
import MoonSVG from '../../_assets/MoonSVG'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className='flex items-center justify-end gap-4 hover:text-[var(--color-primary-hover)]' onClick={handleClick}>

      <span className='tracking-wider italic pb-1 2xl:text-xl'>tema</span>

      <button onClick={handleClick} className='items-center justify-end gap-4 hover:text-[var(--color-primary-hover)]'>
        <SunSVG className="size-6 sm:size-5 2xl:size-6 sun-icon" />
        <MoonSVG className="size-6 p-1 sm:size-5 2xl:size-6 moon-icon" />
      </button>

    </div>
  )
}