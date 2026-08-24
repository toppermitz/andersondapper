import Header from '../components/Header'
import About from '../components/About'
import EasterEggWrapper from '../components/EasterEggWrapper'
import Stack from '../components/Stack'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { FaFileInvoice, FaLayerGroup, FaRocket } from 'react-icons/fa'

const caseStudies = [
  {
    title: 'Modernização sem ruptura',
    context: 'Legado → Web',
    description: 'Migração de sistemas Delphi e ERPs com regras críticas, evitando uma reescrita de alto risco.',
    contribution: 'Arquitetura incremental, APIs, paridade e testes entre o legado e a nova experiência.',
    result: 'Regras preservadas e evolução por etapas, com risco operacional controlado.',
    icon: FaLayerGroup,
    iconGradient: 'from-red-500 to-orange-500',
    accent: 'text-orange-600 dark:text-orange-400',
  },
  {
    title: 'Operações fiscais rastreáveis',
    context: 'Fiscal & integrações',
    description: 'Emissão e integrações em que schema, certificado, idempotência e disponibilidade formam um único contrato.',
    contribution: 'APIs resilientes, observabilidade e estados explícitos de processamento e reenvio.',
    result: 'Operações repetíveis e diagnóstico rápido entre sistema, fiscal e infraestrutura.',
    icon: FaFileInvoice,
    iconGradient: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-700 dark:text-cyan-300',
  },
  {
    title: 'Entrega que chega à produção',
    context: 'CI/CD & plataforma',
    description: 'Frontend, APIs, bancos e serviços que precisam continuar previsíveis depois que chegam à produção.',
    contribution: 'Containers, pipelines, deploy automatizado e telemetria depois da entrega.',
    result: 'Releases reproduzíveis e diagnóstico baseado em evidência, não em tentativa e erro.',
    icon: FaRocket,
    iconGradient: 'from-purple-500 to-violet-600',
    accent: 'text-purple-700 dark:text-purple-300',
  },
]

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
          const Icon = caseStudy.icon

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
