'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <Link href="/" aria-label="Ânderson Dapper, início" className="site-header-logo">
        <Logo className="h-8 sm:h-9" priority />
      </Link>
      <div className="flex items-center gap-1 sm:gap-3">
        <Link
          href="/sobre"
          aria-current={pathname === '/sobre' ? 'page' : undefined}
          className="nav-link"
        >
          Sobre
        </Link>
        <ThemeToggle />
      </div>
      <div id="scroll-progress" aria-hidden="true" className="scroll-progress" />
    </header>
  )
}
