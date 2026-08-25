'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { href: '/cases', label: 'Cases' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'Sobre' },
]

export default function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Navegação principal"
        className="glass mx-auto flex max-w-5xl items-center gap-2 rounded-2xl p-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:shadow-black/20 sm:px-3"
      >
        <Link
          href="/"
          aria-label="Anderson Dapper — início"
          aria-current={pathname === '/' ? 'page' : undefined}
          className={`pressable flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-2 font-semibold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-100 ${
            pathname === '/'
              ? 'bg-slate-100/90 dark:bg-slate-800/90'
              : 'hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
          }`}
        >
          <Image
            src="/newlogotipo.svg"
            alt=""
            width={44}
            height={26}
            loading="eager"
            className="h-7 w-auto dark:brightness-0 dark:invert"
          />
          <span className="hidden md:inline">Anderson Dapper</span>
        </Link>

        <div className="ml-auto flex min-w-0 items-center gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`pressable inline-flex min-h-11 items-center rounded-xl px-2 text-[0.72rem] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 sm:px-3 sm:text-sm ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
