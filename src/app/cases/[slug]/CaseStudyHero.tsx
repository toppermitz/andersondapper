import type { IconType } from 'react-icons'
import { FaFileInvoice, FaLayerGroup, FaRocket } from 'react-icons/fa'
import type {
  CaseStudyIcon,
  PublishedCaseStudy,
} from '../../../data/case-studies'

interface CaseStudyVisual {
  Icon: IconType
  badge: string
  summaryCard: string
  summaryLabel: string
  iconBackground: string
  glow: string
  noteBorder: string
  constraintIcon: string
}

export const caseStudyVisuals: Record<CaseStudyIcon, CaseStudyVisual> = {
  layers: {
    Icon: FaLayerGroup,
    badge:
      'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300',
    summaryCard:
      'border-orange-200/70 from-orange-50/90 to-red-50/70 dark:border-orange-900/60 dark:from-orange-950/30 dark:to-red-950/20',
    summaryLabel: 'text-orange-700 dark:text-orange-300',
    iconBackground: 'from-red-500 to-orange-500',
    glow: 'from-orange-400/15 to-red-500/5',
    noteBorder: 'border-orange-400',
    constraintIcon: 'text-orange-500',
  },
  invoice: {
    Icon: FaFileInvoice,
    badge:
      'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300',
    summaryCard:
      'border-cyan-200/70 from-cyan-50/90 to-blue-50/70 dark:border-cyan-900/60 dark:from-cyan-950/30 dark:to-blue-950/20',
    summaryLabel: 'text-cyan-800 dark:text-cyan-300',
    iconBackground: 'from-cyan-500 to-blue-600',
    glow: 'from-cyan-400/15 to-blue-500/5',
    noteBorder: 'border-cyan-400',
    constraintIcon: 'text-cyan-500',
  },
  rocket: {
    Icon: FaRocket,
    badge:
      'bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300',
    summaryCard:
      'border-purple-200/70 from-purple-50/90 to-violet-50/70 dark:border-purple-900/60 dark:from-purple-950/30 dark:to-violet-950/20',
    summaryLabel: 'text-purple-800 dark:text-purple-300',
    iconBackground: 'from-purple-500 to-violet-600',
    glow: 'from-purple-400/15 to-violet-500/5',
    noteBorder: 'border-purple-400',
    constraintIcon: 'text-purple-500',
  },
}

interface CaseStudyHeroProps {
  caseStudy: PublishedCaseStudy
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const { details } = caseStudy
  const visual = caseStudyVisuals[caseStudy.icon]
  const Icon = visual.Icon

  return (
    <header className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 px-5 py-8 dark:border-slate-700/70 dark:bg-slate-900/45 sm:px-8 sm:py-12 lg:px-12">
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <div className="animate-fade-in-up">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${visual.badge}`}
            >
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

        <aside
          className={`rounded-2xl border bg-gradient-to-br p-5 sm:p-6 ${visual.summaryCard}`}
        >
          <div
            className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ${visual.iconBackground}`}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          <p
            className={`mb-2 text-xs font-bold uppercase tracking-[0.14em] ${visual.summaryLabel}`}
          >
            Resultado em síntese
          </p>
          <p className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
            {caseStudy.result}
          </p>
        </aside>
      </div>

      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br blur-3xl ${visual.glow}`}
      />
    </header>
  )
}
