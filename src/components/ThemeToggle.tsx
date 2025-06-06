'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

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
        <svg 
          className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.5C14.485 17.5 16.5 15.485 16.5 13C16.5 10.515 14.485 8.5 12 8.5C9.515 8.5 7.5 10.515 7.5 13C7.5 15.485 9.515 17.5 12 17.5ZM12 7C12.552 7 13 6.552 13 6V3C13 2.448 12.552 2 12 2C11.448 2 11 2.448 11 3V6C11 6.552 11.448 7 12 7ZM12 19C11.448 19 11 19.448 11 20V23C11 23.552 11.448 24 12 24C12.552 24 13 23.552 13 23V20C13 19.448 12.552 19 12 19ZM7 12C7 11.448 6.552 11 6 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H6C6.552 13 7 12.552 7 12ZM21 11H18C17.448 11 17 11.448 17 12C17 12.552 17.448 13 18 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM5.99 6.05C6.262 6.322 6.696 6.322 6.968 6.05C7.24 5.778 7.24 5.344 6.968 5.072L5.039 3.143C4.767 2.871 4.333 2.871 4.061 3.143C3.789 3.415 3.789 3.849 4.061 4.121L5.99 6.05ZM19.939 20.857C19.667 20.585 19.233 20.585 18.961 20.857C18.689 21.129 18.689 21.563 18.961 21.835L20.89 23.764C21.162 24.036 21.596 24.036 21.868 23.764C22.14 23.492 22.14 23.058 21.868 22.786L19.939 20.857ZM19.939 3.143C19.667 2.871 19.233 2.871 18.961 3.143C18.689 3.415 18.689 3.849 18.961 4.121L20.89 6.05C21.162 6.322 21.596 6.322 21.868 6.05C22.14 5.778 22.14 5.344 21.868 5.072L19.939 3.143ZM5.99 17.95C5.718 17.678 5.284 17.678 5.012 17.95C4.74 18.222 4.74 18.656 5.012 18.928L6.941 20.857C7.213 21.129 7.647 21.129 7.919 20.857C8.191 20.585 8.191 20.151 7.919 19.879L5.99 17.95Z"/>
        </svg>
      ) : (
        <svg 
          className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
        </svg>
      )}
    </button>
  )
}
