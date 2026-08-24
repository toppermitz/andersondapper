import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaBookOpen, FaClock } from 'react-icons/fa'
import SectionHeading from '../../components/SectionHeading'
import ThemeToggle from '../../components/ThemeToggle'
import { publishedInsights } from '../../data/insights'

const pageDescription =
  'Artigos de Anderson Dapper sobre modernização de sistemas legados, arquitetura, integrações e entrega de software em contexto real.'

export const metadata: Metadata = {
  title: 'Insights',
  description: pageDescription,
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    type: 'website',
    url: '/insights',
    title: 'Insights de engenharia | Anderson Dapper',
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
    title: 'Insights de engenharia | Anderson Dapper',
    description: pageDescription,
    images: ['/og-image.png'],
  },
}

const themes = [
  'Conhecimento preservado durante a modernização',
  'Contratos explícitos para operações críticas',
  'Evidência entre o commit e a produção',
]

export default function InsightsPage() {
  return (
    <div>
      <nav
        aria-label="Navegação da página"
        className="mb-8 flex items-center justify-between gap-4 animate-fade-in"
      >
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <FaArrowLeft
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
          />
          Voltar para a página inicial
        </Link>
        <ThemeToggle />
      </nav>

      <header className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 px-5 py-10 dark:border-slate-700/70 dark:bg-slate-900/45 sm:px-8 sm:py-14 lg:px-12">
        <div className="relative z-10 max-w-3xl animate-fade-in-up">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/20">
            <FaBookOpen aria-hidden="true" className="h-5 w-5" />
          </div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
            Engenharia explicada a partir da prática
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Ideias que sobreviveram ao código.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Notas sobre decisões que continuam importantes quando o framework muda:
            preservar regras, desenhar limites e provar que uma entrega funciona fora
            do ambiente local.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-500/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 right-1/4 h-52 w-52 rounded-full bg-gradient-to-br from-cyan-500/15 to-transparent blur-3xl"
        />
      </header>

      <section className="mb-16 sm:mb-20" aria-labelledby="insights-title">
        <SectionHeading
          id="insights-title"
          eyebrow="Autoria técnica"
          title="Textos publicados"
          subtitle="Experiência transformada em princípios que podem ser discutidos, revisados e reutilizados."
          className="mb-8"
        />

        <div className="grid gap-5">
          {publishedInsights.map((insight) => (
            <article
              key={insight.slug}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 sm:p-7"
            >
              <div className="grid gap-7 lg:grid-cols-[1fr_0.58fr] lg:items-end">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300">
                    {insight.category}
                  </p>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl">
                    {insight.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {insight.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span>{insight.publishedLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaClock aria-hidden="true" className="h-3 w-3" />
                      {insight.readTime}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-purple-300/80 bg-purple-50/80 px-4 py-2.5 text-sm font-semibold text-purple-800 transition-all hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 dark:border-purple-800/70 dark:bg-purple-950/30 dark:text-purple-300 dark:hover:border-purple-600 dark:hover:bg-purple-950/50"
                  >
                    Ler insight
                    <FaArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
              />
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="themes-title"
        className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 p-6 dark:border-slate-700/70 dark:from-slate-900 dark:via-purple-950/30 dark:to-cyan-950/30 sm:p-8"
      >
        <h2 id="themes-title" className="text-2xl font-bold text-slate-950 dark:text-white">
          Linhas de pensamento
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          Os textos partem de problemas reais e procuram explicitar o raciocínio por
          trás da implementação, sem depender de uma ferramenta específica.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {themes.map((theme, index) => (
            <li
              key={theme}
              className="rounded-xl border border-white/70 bg-white/65 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/50 dark:text-slate-300"
            >
              <span className="mb-2 block font-mono text-xs font-bold text-purple-600 dark:text-purple-300">
                0{index + 1}
              </span>
              {theme}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
