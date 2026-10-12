import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="mb-10 flex items-center justify-between gap-6 sm:mb-14">
      <Link href="/" className="site-link text-sm text-stone-600 dark:text-stone-400">
        Ânderson Dapper
      </Link>
      <ThemeToggle />
    </header>
  )
}
