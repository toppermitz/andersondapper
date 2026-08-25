import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import SectionHeading from '../../components/SectionHeading'
import ThemeToggle from '../../components/ThemeToggle'
import { publishedCaseStudies } from '../../data/case-studies'

const pageDescription =
  'Cases anonimizados de modernização de sistemas, operações fiscais e entrega contínua, com decisões, validações e resultados de engenharia.'

export const metadata: Metadata = {
  title: 'Cases',
  description: pageDescription,
  alternates: {
    canonical: '/cases',
  },
  openGraph: {
    type: 'website',
    url: '/cases',
    title: 'Cases de engenharia | Anderson Dapper',
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
    title: 'Cases de engenharia | Anderson Dapper',
    description: pageDescription,
    images: ['/og-image.png'],
  },
}

export default function CasesPage() {
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
            Portfólio · engenharia em contexto real
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Cases do legado à produção.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Três recortes anonimizados sobre problemas que não terminam no código:
            regras acumuladas, integrações externas e a responsabilidade de manter a
            entrega saudável depois do deploy.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {publishedCaseStudies.map((caseStudy) => (
              <span
                key={caseStudy.slug}
                className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {caseStudy.context}
              </span>
            ))}
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

      <section className="mb-16 sm:mb-20" aria-labelledby="cases-title">
        <SectionHeading
          id="cases-title"
          eyebrow="Trabalho em contexto real"
          title="Escolha um recorte"
          subtitle="Cada case explicita o desafio, minha atuação, a abordagem e como o resultado foi validado."
          className="mb-8"
        />

        <div className="grid gap-5">
          {publishedCaseStudies.map((caseStudy, index) => (
            <article
              key={caseStudy.slug}
              className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/60 sm:p-7"
            >
              <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                    <span className={`font-mono text-xs font-semibold uppercase tracking-[0.16em] ${caseStudy.accent}`}>
                      {caseStudy.context}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                    {caseStudy.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    {caseStudy.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {caseStudy.details.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-xl border border-slate-200/70 bg-white/65 p-4 dark:border-slate-700/70 dark:bg-slate-900/45">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      Minha contribuição
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {caseStudy.contribution}
                    </p>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-emerald-200/60 bg-emerald-50/60 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                    />
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                        Resultado
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/cases/${caseStudy.slug}`}
                    className="pressable pressable-lift group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-300/80 bg-cyan-50/80 px-4 py-2.5 text-sm font-semibold text-cyan-800 hover:border-cyan-400 hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-cyan-800/70 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:border-cyan-600 dark:hover:bg-cyan-950/50"
                  >
                    Explorar case
                    <FaArrowRight
                      aria-hidden="true"
                      className="interactive-arrow h-3.5 w-3.5"
                    />
                  </Link>
                </div>
              </div>

              <div
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${caseStudy.iconGradient}`}
              />
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="cases-contact-title"
        className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50 p-7 text-center dark:border-slate-700/70 dark:from-slate-900 dark:via-cyan-950/30 dark:to-purple-950/30 sm:p-10"
      >
        <h2
          id="cases-contact-title"
          className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl"
        >
          Tem um desafio que atravessa mais de uma dessas frentes?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Podemos conversar sobre um caminho que conecte produto, arquitetura e
          operação sem perder o contexto do negócio.
        </p>
        <Link
          href="/#contato"
          className="pressable pressable-lift group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          Conversar sobre o desafio
          <FaArrowRight aria-hidden="true" className="interactive-arrow h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
