import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="relative mb-16 overflow-hidden rounded-2xl sm:mb-20">
      <div className="absolute top-0 right-0 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex flex-col items-center px-1 pb-4 pt-3 text-center sm:px-8 sm:pb-8 sm:pt-2">
        <div className="mb-5 animate-fade-in sm:mb-7">
          <Image
            src="/newlogotipo.svg"
            alt="Logotipo Anderson Dapper"
            width={230}
            height={133}
            loading="eager"
            className="h-16 w-auto"
          />
        </div>

        <div className="flex max-w-3xl flex-col items-center animate-fade-in-up delay-100">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300 sm:text-xs">
            <span>Delphi</span>
            <span aria-hidden="true" className="text-purple-500">→</span>
            <span>APIs</span>
            <span aria-hidden="true" className="text-purple-500">→</span>
            <span>Web</span>
          </div>

          <h1 className="tracking-tight">
            <span className="gradient-text-animated block text-4xl font-black sm:text-6xl lg:text-7xl">
              Anderson Dapper
            </span>
            <span className="sr-only">. </span>
            <span className="mt-5 block text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
              Engenharia de software que atravessa décadas.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Modernizo sistemas críticos e construo APIs, produtos web e infraestrutura
            sem perder as regras que mantêm o negócio rodando.
          </p>

          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Ver cases
              <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="mailto:eu@andersondapper.com.br"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300/80 bg-white/60 px-6 py-3 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-white dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:border-purple-400 dark:hover:bg-slate-800"
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
