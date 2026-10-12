'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const subscribe = () => () => undefined
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)

  if (!mounted) {
    return <div aria-hidden="true" className="h-9 w-9" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200/80 hover:text-stone-950 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
    >
      {isDark ? (
        <FiSun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <FiMoon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  )
}
