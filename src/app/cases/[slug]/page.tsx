import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaLayerGroup } from 'react-icons/fa'
import SectionHeading from '../../../components/SectionHeading'
import ThemeToggle from '../../../components/ThemeToggle'
import { getPublishedCaseStudy, publishedCaseStudies } from '../../../data/case-studies'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return publishedCaseStudies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getPublishedCaseStudy(slug)

  if (!caseStudy) {
    return {}
  }

  const canonical = `/cases/${caseStudy.slug}`
  const socialTitle = `${caseStudy.title} | Case de engenharia`

  return {
    title: caseStudy.title,
    description: caseStudy.details.seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: socialTitle,
      description: caseStudy.details.seoDescription,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: socialTitle,
      description: caseStudy.details.seoDescription,
      images: [],
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getPublishedCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const { details } = caseStudy

  return (
    <div>
      <nav aria-label="Navegação do case" className="mb-8 flex items-center justify-between gap-4 animate-fade-in">
        <Link
          href="/#projetos"
          className="group inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <FaArrowLeft
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
          />
          Voltar aos cases
        </Link>
        <ThemeToggle />
      </nav>

      <header className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 px-5 py-8 dark:border-slate-700/70 dark:bg-slate-900/45 sm:px-8 sm:py-12 lg:px-12">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div className="animate-fade-in-up">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-orange-100 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
                Case anonimizado
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {caseStudy.context}
              </span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {details.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {details.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-orange-200/70 bg-gradient-to-br from-orange-50/90 to-red-50/70 p-5 dark:border-orange-900/60 dark:from-orange-950/30 dark:to-red-950/20 sm:p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
              <FaLayerGroup aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-700 dark:text-orange-300">
              Resultado em síntese
            </p>
            <p className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              {caseStudy.result}
            </p>
          </aside>
        </div>

        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-orange-400/15 to-red-500/5 blur-3xl"
        />
      </header>

      <section className="mb-16 sm:mb-20" aria-labelledby="challenge-title">
        <SectionHeading
          id="challenge-title"
          eyebrow="Contexto"
          title="O desafio"
          subtitle="Modernizar sem transformar a operação em laboratório."
          className="mb-8"
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/70 dark:bg-slate-800/60 sm:p-7">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              {details.challenge}
            </p>
            <p className="mt-6 border-l-2 border-orange-400 pl-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {details.confidentialityNote}
            </p>
          </div>

          <ul className="grid gap-3">
            {details.constraints.map((constraint) => (
              <li
                key={constraint}
                className="flex gap-3 rounded-xl border border-slate-200/70 bg-white/55 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/55 dark:text-slate-300"
              >
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                />
                {constraint}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20" aria-labelledby="role-title">
        <SectionHeading
          id="role-title"
          eyebrow="Responsabilidade"
          title="Minha atuação"
          subtitle="Do entendimento do legado à comprovação em produção."
          className="mb-8"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {details.responsibilities.map((responsibility, index) => (
            <article
              key={responsibility}
              className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/70 dark:bg-slate-800/60"
            >
              <span className="font-mono text-sm font-bold text-cyan-600 dark:text-cyan-300">
                0{index + 1}
              </span>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {responsibility}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20" aria-labelledby="approach-title">
        <SectionHeading
          id="approach-title"
          eyebrow="Estratégia"
          title="A abordagem"
          subtitle="Uma sequência repetível em vez de uma grande virada."
          className="mb-8"
        />

        <ol className="grid gap-4 lg:grid-cols-4">
          {details.approach.map((step) => (
            <li
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/70 dark:bg-slate-800/60"
            >
              <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                {step.eyebrow}
              </p>
              <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              />
            </li>
          ))}
        </ol>
      </section>

      <div className="mb-16 grid gap-5 lg:grid-cols-2">
        <section
          aria-labelledby="validation-title"
          className="rounded-2xl border border-cyan-200/60 bg-cyan-50/60 p-5 dark:border-cyan-900/60 dark:bg-cyan-950/20 sm:p-7"
        >
          <SectionHeading
            id="validation-title"
            eyebrow="Evidência"
            title="Como validei"
            className="mb-7"
          />
          <ul className="space-y-4">
            {details.validation.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
              >
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="outcomes-title"
          className="rounded-2xl border border-purple-200/60 bg-purple-50/60 p-5 dark:border-purple-900/60 dark:bg-purple-950/20 sm:p-7"
        >
          <SectionHeading
            id="outcomes-title"
            eyebrow="Resultado"
            title="O que mudou"
            className="mb-7"
          />
          <ul className="space-y-4">
            {details.outcomes.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
              >
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-300"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        aria-labelledby="case-contact-title"
        className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50 p-7 text-center dark:border-slate-700/70 dark:from-slate-900 dark:via-cyan-950/30 dark:to-purple-950/30 sm:p-10"
      >
        <h2
          id="case-contact-title"
          className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl"
        >
          Precisa evoluir um sistema sem apostar tudo em uma reescrita?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Podemos conversar sobre um caminho incremental, com regras explícitas,
          entregas verificáveis e risco operacional controlado.
        </p>
        <Link
          href="/#contato"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          Conversar sobre modernização
          <FaArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
