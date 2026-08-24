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
  FaFileInvoice,
  FaLayerGroup,
  FaRocket,
} from 'react-icons/fa'
import { caseStudies, type CaseStudyIcon } from '../data/case-studies'

const caseStudyIcons: Record<CaseStudyIcon, typeof FaLayerGroup> = {
  layers: FaLayerGroup,
  invoice: FaFileInvoice,
  rocket: FaRocket,
}

function FeaturedWork() {
  return (
    <section id="projetos" className="mb-20 scroll-mt-6" aria-labelledby="projetos-title">
      <SectionHeading
        id="projetos-title"
        eyebrow="Problema → engenharia → resultado"
        title="Trabalho em contexto real"
        className="mb-8 sm:mb-10"
      />

      <p className="mb-7 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        Alguns projetos são privados. Estes recortes mostram problema, atuação e impacto
        sem expor código ou dados de clientes.
      </p>

      <div className="grid gap-4 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => {
          const Icon = caseStudyIcons[caseStudy.icon]

          return (
            <article
              key={caseStudy.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/65 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/65 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${caseStudy.iconGradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
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

              <dl className="mt-auto space-y-4 border-t border-slate-200/70 pt-5 dark:border-slate-700/70">
                <div>
                  <dt className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Minha atuação
                  </dt>
                  <dd className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {caseStudy.contribution}
                  </dd>
                </div>
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
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-orange-300/80 bg-orange-50/80 px-4 py-2.5 text-sm font-semibold text-orange-700 transition-all hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 dark:border-orange-800/70 dark:bg-orange-950/30 dark:text-orange-300 dark:hover:border-orange-600 dark:hover:bg-orange-950/50"
                >
                  Ver case completo
                  <FaArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              )}

              <div aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${caseStudy.iconGradient} opacity-70`} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <FeaturedWork />
      <About />
      <EasterEggWrapper />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}
