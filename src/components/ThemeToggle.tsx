'use client'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { FiSun, FiMoon } from "react-icons/fi"

const subscribe = () => () => undefined
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  )

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/50 bg-white/60 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/60"
      >
        <div className="h-5 w-5 rounded bg-slate-300 dark:bg-slate-600" />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={resolvedTheme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      className="pressable pressable-lift group relative flex h-12 w-12 items-center justify-center rounded-xl
        bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm
        border border-slate-200/50 dark:border-slate-700/50
        hover:bg-white dark:hover:bg-slate-800
        hover:border-cyan-300 dark:hover:border-purple-500
        hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-purple-500/20
        focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
    >
      <FiSun
        aria-hidden="true"
        className={`theme-icon absolute h-5 w-5 text-amber-500
        ${resolvedTheme === 'dark' 
          ? 'rotate-0 scale-100 opacity-100' 
          : 'rotate-45 scale-90 opacity-0 blur-[2px]'
        }
      `}
      />
      
      <FiMoon
        aria-hidden="true"
        className={`theme-icon absolute h-5 w-5 text-slate-700 dark:text-slate-300
        ${resolvedTheme === 'dark' 
          ? '-rotate-45 scale-90 opacity-0 blur-[2px]'
          : 'rotate-0 scale-100 opacity-100'
        }
      `}
      />

      <div className={`
        hover-reveal pointer-events-none absolute inset-0 rounded-xl
        ${resolvedTheme === 'dark' 
          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' 
          : 'bg-gradient-to-br from-purple-500/10 to-blue-500/10'
        }
      `} />
    </button>
  )
}
