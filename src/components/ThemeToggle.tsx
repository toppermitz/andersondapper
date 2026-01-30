'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from "react-icons/fi"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
        <div className="w-5 h-5 bg-slate-300 dark:bg-slate-600 rounded animate-pulse" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={resolvedTheme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      className="group relative flex items-center justify-center w-12 h-12 rounded-xl
        bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm
        border border-slate-200/50 dark:border-slate-700/50
        hover:bg-white dark:hover:bg-slate-800
        hover:border-cyan-300 dark:hover:border-purple-500
        hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-purple-500/20
        transition-all duration-300 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
    >
      {/* Sun icon */}
      <FiSun className={`
        absolute w-5 h-5 text-amber-500
        transition-all duration-500
        ${resolvedTheme === 'dark' 
          ? 'rotate-0 scale-100 opacity-100' 
          : 'rotate-90 scale-0 opacity-0'
        }
      `} />
      
      {/* Moon icon */}
      <FiMoon className={`
        absolute w-5 h-5 text-slate-700 dark:text-slate-300
        transition-all duration-500
        ${resolvedTheme === 'dark' 
          ? '-rotate-90 scale-0 opacity-0' 
          : 'rotate-0 scale-100 opacity-100'
        }
      `} />

      {/* Glow effect on hover */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${resolvedTheme === 'dark' 
          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' 
          : 'bg-gradient-to-br from-purple-500/10 to-blue-500/10'
        }
      `} />
    </button>
  )
}
