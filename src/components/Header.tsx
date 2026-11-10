import Link from 'next/link'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/#historia', label: 'História' },
  { href: '/#fora', label: 'Fora do trabalho' },
  { href: '/#contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="Anderson Dapper, início" className="site-header-logo">
        <Logo className="h-8" />
      </Link>
      <nav className="site-nav" aria-label="Seções">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
      <span className="scroll-progress" aria-hidden="true" />
    </header>
  )
}
