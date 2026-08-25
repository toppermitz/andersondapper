import Link from 'next/link'
import Header from '../components/Header'
import About from '../components/About'
import EasterEggWrapper from '../components/EasterEggWrapper'
import Stack from '../components/Stack'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import {
  FaArrowRight,
  FaBookOpen,
  FaClock,
  FaFileInvoice,
  FaLayerGroup,
  FaRocket,
} from 'react-icons/fa'
import { caseStudies, type CaseStudyIcon } from '../data/case-studies'
import { publishedInsights } from '../data/insights'

const caseStudyIcons: Record<CaseStudyIcon, typeof FaLayerGroup> = {
  layers: FaLayerGroup,
  invoice: FaFileInvoice,
  rocket: FaRocket,
}

function FeaturedWork() {
  return (
    <section id="projetos" className="mb-16 scroll-mt-24 sm:mb-20" aria-labelledby="projetos-title">
      <SectionHeading
        id="projetos-title"
        eyebrow="Problema → engenharia → resultado"
        title="Trabalho em contexto real"
        className="mb-7 sm:mb-8"
      />

      <p className="mb-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        Alguns projetos são privados. Estes recortes mostram problema, atuação e impacto
        sem expor código ou dados de clientes.
      </p>

      <div className="grid gap-4 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => {
          const Icon = caseStudyIcons[caseStudy.icon]

          return (
            <article
              key={caseStudy.title}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/65 p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/65 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${caseStudy.iconGradient} text-white shadow-sm`}>
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </div>
                <span className={`rounded-full bg-slate-100 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-wider dark:bg-slate-900/70 ${caseStudy.accent}`}>
                  {caseStudy.context}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {caseStudy.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {caseStudy.description}
              </p>

              <div className="mt-auto pt-1">
                <dl className="border-t border-slate-200/70 pt-4 dark:border-slate-700/70">
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Resultado
                    </dt>
                    <dd className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                      {caseStudy.result}
                    </dd>
                  </div>
                </dl>

                {caseStudy.details && (
                  <Link
                    href={`/cases/${caseStudy.slug}`}
                    aria-label={`Ver case completo: ${caseStudy.title}`}
                    className="pressable pressable-lift group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-orange-300/80 bg-orange-50/80 px-4 py-2.5 text-sm font-semibold text-orange-700 hover:border-orange-400 hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 dark:border-orange-800/70 dark:bg-orange-950/30 dark:text-orange-300 dark:hover:border-orange-600 dark:hover:bg-orange-950/50"
                  >
                    Ver case completo
                    <FaArrowRight
                      aria-hidden="true"
                      className="interactive-arrow h-3.5 w-3.5"
                    />
                  </Link>
                )}
              </div>

              <div aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${caseStudy.iconGradient} opacity-70`} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

function FeaturedInsights() {
  const insight = publishedInsights[0]

  return (
    <section className="mb-16 sm:mb-20" aria-labelledby="insights-title">
      <SectionHeading
        id="insights-title"
        eyebrow="Experiência transformada em princípio"
        title="Ideias que orientam meu trabalho"
        subtitle="Textos sobre decisões técnicas que continuam relevantes quando a ferramenta muda."
        className="mb-8"
      />

      <article className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/65 p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/65 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-sm">
            <FaBookOpen aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300">
              {insight.category}
            </p>
            <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <FaClock aria-hidden="true" className="h-3 w-3" />
              {insight.readTime}
            </div>
          </div>
        </div>

        <h3 className="mt-5 max-w-3xl text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl">
          {insight.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {insight.description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/insights/${insight.slug}`}
            className="pressable pressable-lift group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            Ler insight
            <FaArrowRight aria-hidden="true" className="interactive-arrow h-3.5 w-3.5" />
          </Link>
          <Link
            href="/insights"
            className="pressable pressable-lift inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300/80 bg-white/60 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-purple-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-purple-500 dark:hover:bg-slate-900/70"
          >
            Ver todos os textos
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
        />
      </article>
    </section>
  )
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <FeaturedWork />
      <FeaturedInsights />
      <About />
      <EasterEggWrapper />
      <Stack />
      <div className="min-w-0 [&_a]:min-w-0">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
