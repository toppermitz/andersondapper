import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const experienceSignals = [
  { value: '20+ anos', label: 'construindo software em contextos críticos' },
  { value: 'Legado → Web', label: 'modernização incremental, sem apagar regras' },
  { value: 'Ponta a ponta', label: 'dados, APIs, interface, entrega e operação' },
]

export default function About() {
  return (
    <section id="sobre" className="mb-16 scroll-mt-24 sm:mb-20" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        eyebrow="Experiência sem apego à ferramenta"
        title="Conhecimento antigo, ferramentas atuais"
        subtitle="O contexto muda. O compromisso com software previsível permanece."
        className="mb-7 sm:mb-8"
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            <p>
              Minha trajetória começou com Delphi e sistemas de negócio maduros. Hoje,
              conecto esse repertório a TypeScript, Next.js, Node.js, Golang e plataformas
              modernas de entrega.
            </p>
            <p>
              Atuo entre varejo, fiscal, bancário e educação, transformando comportamento
              acumulado em contratos claros, produtos web e operações que podem ser
              verificadas de ponta a ponta.
            </p>
          </div>

          <Link
            href="/about"
            className="pressable group mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl px-3 font-semibold text-cyan-700 hover:bg-cyan-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-cyan-300 dark:hover:bg-cyan-950/30 dark:hover:text-blue-300"
          >
            Conheça minha trajetória completa
            <FaArrowRight
              aria-hidden="true"
              className="interactive-arrow h-4 w-4"
            />
          </Link>
        </div>

        <dl className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
          {experienceSignals.map((signal) => (
            <div key={signal.value} className="py-4 first:pt-0 lg:first:pt-4">
              <dt className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                {signal.value}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {signal.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
