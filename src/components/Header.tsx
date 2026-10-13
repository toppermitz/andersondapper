import Link from 'next/link'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="Anderson Dapper, início" className="site-header-logo">
        <Logo className="h-8" />
      </Link>
      <ThemeToggle />
    </header>
  )
}
