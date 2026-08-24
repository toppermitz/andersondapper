import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaClock } from 'react-icons/fa'
import SectionHeading from '../../../components/SectionHeading'
import ThemeToggle from '../../../components/ThemeToggle'
import { getPublishedInsight, publishedInsights } from '../../../data/insights'

interface InsightPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return publishedInsights.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params
  const insight = getPublishedInsight(slug)

  if (!insight) {
    return {}
  }

  const canonical = `/insights/${insight.slug}`

  return {
    title: insight.title,
    description: insight.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: insight.title,
      description: insight.description,
      publishedTime: insight.publishedAt,
      authors: ['https://andersondapper.com.br'],
      images: [],
    },
    twitter: {
      card: 'summary',
      title: insight.title,
      description: insight.description,
      images: [],
    },
  }
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params
  const insight = getPublishedInsight(slug)

  if (!insight) {
    notFound()
  }

  const insightUrl = `https://andersondapper.com.br/insights/${insight.slug}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${insightUrl}#article`,
        headline: insight.title,
        description: insight.description,
        url: insightUrl,
        mainEntityOfPage: insightUrl,
        datePublished: insight.publishedAt,
        dateModified: insight.publishedAt,
        articleSection: insight.category,
        keywords: insight.tags.join(', '),
        inLanguage: 'pt-BR',
        author: {
          '@id': 'https://andersondapper.com.br/#person',
        },
        publisher: {
          '@id': 'https://andersondapper.com.br/#person',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: 'https://andersondapper.com.br',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights',
            item: 'https://andersondapper.com.br/insights',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: insight.title,
            item: insightUrl,
          },
        ],
      },
    ],
  }
  const serializedStructuredData = JSON.stringify(structuredData).replace(/</g, '\\u003c')

  return (
    <div>
      <script
        id="insight-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedStructuredData }}
      />
      <nav
        aria-label="Navegação do artigo"
        className="mb-8 flex items-center justify-between gap-4 animate-fade-in"
      >
        <Link
          href="/insights"
          className="group inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-500 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-slate-400 dark:hover:text-purple-300"
        >
          <FaArrowLeft
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
          />
          Voltar aos insights
        </Link>
        <ThemeToggle />
      </nav>

      <article>
        <header className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 px-5 py-10 dark:border-slate-700/70 dark:bg-slate-900/45 sm:px-8 sm:py-14 lg:px-12">
          <div className="relative z-10 max-w-3xl animate-fade-in-up">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">
              {insight.category}
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {insight.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span>Por Anderson Dapper</span>
              <span aria-hidden="true">·</span>
              <time dateTime={insight.publishedAt}>{insight.publishedLabel}</time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <FaClock aria-hidden="true" className="h-3 w-3" />
                {insight.readTime}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-500/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 right-1/4 h-52 w-52 rounded-full bg-gradient-to-br from-cyan-500/15 to-transparent blur-3xl"
          />
        </header>

        <div className="mx-auto max-w-3xl">
          <aside className="mb-12 rounded-2xl border border-purple-200/70 bg-purple-50/65 p-5 dark:border-purple-900/60 dark:bg-purple-950/20 sm:p-7">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300">
              Em uma frase
            </p>
            <p className="text-lg font-semibold leading-relaxed text-slate-900 dark:text-slate-100 sm:text-xl">
              {insight.thesis}
            </p>
          </aside>

          <div className="mb-14 space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            {insight.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-14">
            {insight.sections.map((section, index) => (
              <section key={section.title} aria-labelledby={`insight-section-${index}`}>
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                  {section.eyebrow}
                </p>
                <h2
                  id={`insight-section-${index}`}
                  className="text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                >
                  {section.title}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.points && (
                  <ul className="mt-6 grid gap-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 rounded-xl border border-slate-200/70 bg-white/55 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/55 dark:text-slate-300"
                      >
                        <FaCheckCircle
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {section.takeaway && (
                  <p className="mt-6 border-l-2 border-purple-400 pl-4 text-sm font-medium leading-relaxed text-slate-700 dark:border-purple-500 dark:text-slate-300 sm:text-base">
                    {section.takeaway}
                  </p>
                )}
              </section>
            ))}
          </div>

          <section className="my-14" aria-labelledby="checklist-title">
            <SectionHeading
              id="checklist-title"
              eyebrow="Antes de avançar"
              title="Checklist de uma migração verificável"
              className="mb-7"
            />
            <ul className="grid gap-3">
              {insight.checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-cyan-200/60 bg-cyan-50/60 p-4 text-sm leading-relaxed text-slate-700 dark:border-cyan-900/50 dark:bg-cyan-950/20 dark:text-slate-300"
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

          <section className="mb-14" aria-labelledby="conclusion-title">
            <SectionHeading
              id="conclusion-title"
              eyebrow="Conclusão"
              title="Evoluir sem apagar"
              className="mb-7"
            />
            <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
              {insight.conclusion.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 p-6 dark:border-slate-700/70 dark:from-slate-900 dark:via-purple-950/30 dark:to-cyan-950/30 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300">
              Aplicação em contexto real
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
              {insight.relatedCase.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {insight.relatedCase.description}
            </p>
            <Link
              href={`/cases/${insight.relatedCase.slug}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Explorar o case relacionado
              <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </aside>
        </div>
      </article>
    </div>
  )
}
