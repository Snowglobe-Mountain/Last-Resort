import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Switch from 'react-switch'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const currentTheme = theme === 'light'

  const [checked, setChecked] = useState(currentTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setTheme(checked ? 'light' : 'dark')
  }, [checked, setTheme])

  const handleChange = (nextChecked: boolean): void => {
    setChecked(nextChecked)
  }

  if (!mounted) return null

  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      aria-label='Toggle light and dark themes'
      offColor='#555'
      onHandleColor='#eee'
      handleDiameter={20}
      uncheckedIcon={
        <div className='flex justify-center items-center h-full'>
          <button />
        </div>
      }
      checkedIcon={
        <div className='flex justify-center items-center h-full'>
          <button />
        </div>
      }
      height={24}
      width={48}
    />
  )
}

export default ThemeToggle
