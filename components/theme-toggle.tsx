import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Switch from 'react-switch'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const dark = theme === 'dark'

  const [checked, setChecked] = useState(dark)
  const [mounted, setMounted] = useState(false)

  const handleChange = (nextChecked: boolean): void => {
    setChecked(nextChecked)
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light')
  }, [checked, setTheme])

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
