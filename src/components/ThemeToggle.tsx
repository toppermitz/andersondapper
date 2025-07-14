'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 transition-all duration-200">
        <div className="w-5 h-5 bg-gray-300 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <button
      onClick={()=> setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={resolvedTheme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
      )}
    </button>
  )
}
