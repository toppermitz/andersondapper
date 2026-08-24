import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import SectionHeading from '../../../components/SectionHeading'
import ThemeToggle from '../../../components/ThemeToggle'
import { getPublishedCaseStudy, publishedCaseStudies } from '../../../data/case-studies'
import CaseStudyHero, { caseStudyVisuals } from './CaseStudyHero'

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
  const visual = caseStudyVisuals[caseStudy.icon]

  return (
    <div>
      <nav aria-label="Navegação do case" className="mb-8 flex items-center justify-between gap-4 animate-fade-in">
        <Link
          href="/cases"
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

      <CaseStudyHero caseStudy={caseStudy} />

      <section className="mb-16 sm:mb-20" aria-labelledby="challenge-title">
        <SectionHeading
          id="challenge-title"
          eyebrow="Contexto"
          title="O desafio"
          subtitle={details.sectionSubtitles.challenge}
          className="mb-8"
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/70 dark:bg-slate-800/60 sm:p-7">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              {details.challenge}
            </p>
            <p className={`mt-6 border-l-2 pl-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${visual.noteBorder}`}>
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
                  className={`mt-0.5 h-4 w-4 shrink-0 ${visual.constraintIcon}`}
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
          subtitle={details.sectionSubtitles.responsibilities}
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
          subtitle={details.sectionSubtitles.approach}
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
          {details.callToAction.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {details.callToAction.description}
        </p>
        <Link
          href="/#contato"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          {details.callToAction.label}
          <FaArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
