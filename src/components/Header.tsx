import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="relative mb-16 overflow-hidden rounded-2xl sm:mb-20">
      <div className="absolute top-0 right-0 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex flex-col items-center px-1 pb-4 pt-2 text-center sm:px-8 sm:pb-8">
        <div className="flex max-w-4xl flex-col items-center animate-fade-in-up">
          <h1 className="gradient-text-animated text-[clamp(2.25rem,10vw,4.5rem)] font-black leading-[0.98] tracking-[-0.045em]">
            Anderson Dapper
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-bold leading-tight tracking-[-0.025em] text-slate-900 dark:text-slate-100 sm:text-3xl lg:text-4xl">
            Engenharia de software que atravessa décadas.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Modernizo sistemas críticos e construo APIs, produtos web e infraestrutura
            sem perder as regras que mantêm o negócio rodando.
          </p>

          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/cases"
              className="pressable pressable-lift group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Ver cases
              <FaArrowRight aria-hidden="true" className="interactive-arrow h-4 w-4" />
            </Link>
            <a
              href="mailto:eu@andersondapper.com.br"
              className="pressable pressable-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300/80 bg-white/60 px-6 py-3 font-semibold text-slate-800 hover:border-purple-400 hover:bg-white dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:border-purple-400 dark:hover:bg-slate-800"
            >
              Conversar por email
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-2xl" />
    </header>
  )
}
