import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FaArrowLeft,
  FaArrowRight,
  FaCar,
  FaCheckCircle,
  FaGamepad,
} from 'react-icons/fa'
import SectionHeading from '../../components/SectionHeading'
import ThemeToggle from '../../components/ThemeToggle'
import { journey, pageDescription, sectors, workingPrinciples } from './content'

export const metadata: Metadata = {
  title: 'Sobre',
  description: pageDescription,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: '/about',
    title: 'Sobre Anderson Dapper | Do legado à plataforma',
    description: pageDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anderson Dapper - Software legado, APIs e Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Anderson Dapper | Do legado à plataforma',
    description: pageDescription,
    images: ['/og-image.png'],
  },
}

export default function AboutPage() {
  return (
    <div>
      <nav
        aria-label="Navegação da página"
        className="mb-8 flex items-center justify-between gap-4 animate-fade-in"
      >
        <Link
          href="/"
          className="pressable inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-500 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <FaArrowLeft
            aria-hidden="true"
            className="h-3.5 w-3.5"
          />
          Voltar para a página inicial
        </Link>
        <ThemeToggle />
      </nav>

      <header className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 px-5 py-10 dark:border-slate-700/70 dark:bg-slate-900/45 sm:px-8 sm:py-14 lg:px-12">
        <div className="relative z-10 max-w-3xl animate-fade-in-up">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            Sobre mim · mais de 20 anos construindo software
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Do legado à plataforma, sem perder o que faz o negócio funcionar.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Minha especialidade é conectar décadas de regras de negócio a arquiteturas,
            APIs e produtos atuais — com evolução gradual, responsabilidade operacional
            e evidência de que cada etapa funciona.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cases"
              className="pressable pressable-lift group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Ver cases
              <FaArrowRight aria-hidden="true" className="interactive-arrow h-4 w-4" />
            </Link>
            <Link
              href="/#contato"
              className="pressable pressable-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-6 py-3 font-semibold text-slate-800 hover:border-purple-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-100 dark:hover:border-purple-400"
            >
              Entrar em contato
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 right-1/4 h-52 w-52 rounded-full bg-gradient-to-br from-purple-500/15 to-transparent blur-3xl"
        />
      </header>

      <section className="mb-16 sm:mb-20" aria-labelledby="journey-title">
        <SectionHeading
          id="journey-title"
          eyebrow="Delphi → Web → Plataforma"
          title="Uma trajetória de evolução"
          subtitle="Ferramentas mudam. Responsabilidade técnica permanece."
          className="mb-8"
        />

        <ol className="grid gap-4 lg:grid-cols-3">
          {journey.map((stage, index) => {
            const Icon = stage.icon

            return (
              <li
                key={stage.title}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/65 p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/65 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 shadow-sm dark:bg-slate-900/80">
                    <Icon aria-hidden="true" className={`h-5 w-5 ${stage.iconClassName}`} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <p className="mb-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                  {stage.eyebrow}
                </p>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {stage.description}
                </p>
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${stage.gradient}`}
                />
              </li>
            )
          })}
        </ol>

        <div className="mt-5 rounded-2xl border border-cyan-200/60 bg-gradient-to-r from-cyan-50/80 to-purple-50/80 p-5 dark:border-cyan-900/60 dark:from-cyan-950/30 dark:to-purple-950/30 sm:p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            Experiência com sistemas críticos
          </p>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20" aria-labelledby="work-title">
        <SectionHeading
          id="work-title"
          eyebrow="Método"
          title="Como eu trabalho"
          subtitle="Decisões técnicas ligadas ao risco e ao resultado."
          className="mb-8"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {workingPrinciples.map((principle) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/70 dark:bg-slate-800/60 sm:p-6"
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${principle.gradient} text-white shadow-md`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {principle.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mb-16 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]" aria-labelledby="principles-title">
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/70 dark:bg-slate-800/60 sm:p-7">
          <SectionHeading
            id="principles-title"
            eyebrow="Princípios"
            title="O que orienta minhas decisões"
            className="mb-7"
          />
          <ul className="space-y-4">
            {[
              'Regra de negócio antes de modismo tecnológico.',
              'Evidência antes de suposição — no código, no deploy e na operação.',
              'Soluções simples o bastante para serem mantidas e profundas o bastante para durar.',
            ].map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                />
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-purple-200/60 bg-gradient-to-br from-purple-50/80 to-cyan-50/70 p-5 dark:border-purple-900/60 dark:from-purple-950/30 dark:to-cyan-950/20 sm:p-7">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">
            Fora do código
          </p>
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
            Curiosidade também precisa de espaço.
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Games ajudam a desacelerar e treinar decisões. Automobilismo mantém perto a
            combinação de engenharia, precisão e performance que também me atrai em
            software.
          </p>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              <FaGamepad aria-hidden="true" className="text-purple-500" />
              Games
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              <FaCar aria-hidden="true" className="text-orange-500" />
              Automobilismo
            </span>
          </div>
        </aside>
      </section>

      <section
        aria-labelledby="about-contact-title"
        className="relative overflow-hidden rounded-2xl border border-cyan-200/60 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-7 text-center dark:border-cyan-900/60 dark:from-cyan-950/35 dark:via-blue-950/30 dark:to-purple-950/35 sm:p-10"
      >
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2
            id="about-contact-title"
            className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl"
          >
            Tem um sistema importante para evoluir?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Podemos conversar sobre modernização, APIs, arquitetura ou uma entrega que
            precisa chegar à produção com segurança.
          </p>
          <Link
            href="/#contato"
            className="pressable pressable-lift group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            Vamos conversar
            <FaArrowRight aria-hidden="true" className="interactive-arrow h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
