import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const currentTheme = theme === 'light'

  const [isLight, setIsLight] = useState(currentTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setTheme(isLight ? 'light' : 'dark')
  }, [isLight, setTheme])

  const handleChange = (nextChecked: boolean): void => {
    setIsLight(nextChecked)
  }

  if (!mounted) return null

  if (isLight) {
    return (
      <MoonIcon
        className='w-10 h-10 text-gray-900'
        role='button'
        onClick={() => handleChange(false)}
      />
    )
  } else {
    return (
      <SunIcon
        className='w-10 h-10 text-yellow-500'
        role='button'
        onClick={() => handleChange(true)}
      />
    )
  }
}

export default ThemeToggle
