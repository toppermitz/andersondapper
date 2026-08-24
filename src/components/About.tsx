interface TimelineItemProps {
  icon: string
  color: string
  glowColor: string
  children: React.ReactNode
  delay: string
}

function TimelineItem({ icon, color, glowColor, children, delay }: TimelineItemProps) {
  return (
    <div className={`group relative flex gap-0 animate-fade-in-up sm:gap-6 ${delay}`}>
      <div className="hidden flex-col items-center sm:flex">
        <div className={`relative flex items-center justify-center w-12 h-12 rounded-2xl ${color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
          <span aria-hidden="true" className="text-xl">{icon}</span>
          <div className={`absolute inset-0 rounded-2xl ${glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700 mt-4" />
      </div>

      <div className="min-w-0 flex-1 pb-5 sm:pb-10">
        <div className="glass-card rounded-2xl p-5 sm:p-6 group-hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
          <div className={`relative mb-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-md sm:hidden ${color}`}>
            <span aria-hidden="true" className="text-lg">{icon}</span>
            <div className={`absolute inset-0 rounded-xl ${glowColor} opacity-20 blur-lg`} />
          </div>
          <div className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
      {children}
    </span>
  )
}

function Tech({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-purple-600 dark:text-purple-400">
      {children}
    </span>
  )
}

export default function About() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="flex items-center gap-4 mb-7 animate-fade-in sm:mb-10">
        <div className="relative">
          <div className="w-2 h-12 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-full" />
          <div className="absolute inset-0 w-2 h-12 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-sm opacity-50" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Sobre mim
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            +20 anos construindo soluções
          </p>
        </div>
      </div>

      <div className="relative sm:ml-6">
        <TimelineItem 
          icon="🚀" 
          color="bg-gradient-to-br from-blue-500 to-cyan-500" 
          glowColor="bg-cyan-500"
          delay="delay-100"
        >
          <Highlight>Mais de 20 anos de experiência</Highlight> em desenvolvimento de software, com atuação em projetos de alta complexidade nos setores de varejo, fiscal/contábil, bancário e educacional. Iniciei minha carreira com <Tech>Delphi</Tech> e, em 2022, ampliei minha expertise para incluir <Tech>Node.js</Tech>, <Tech>Next.js</Tech> e <Tech>Golang</Tech>, mantendo-me alinhado às demandas do mercado.
        </TimelineItem>

        <TimelineItem 
          icon="⚡" 
          color="bg-gradient-to-br from-purple-500 to-blue-500" 
          glowColor="bg-purple-500"
          delay="delay-200"
        >
          Atuo em <Highlight>todas as camadas do desenvolvimento</Highlight>: desde a modelagem de banco de dados até interfaces de usuário. Minha rotina envolve construção de <Tech>APIs RESTful</Tech>, aplicações <Tech>Next.js</Tech> com SSR, backends escaláveis em <Tech>NestJS</Tech> e sistemas de alta performance em <Tech>Golang</Tech>.
        </TimelineItem>

        <TimelineItem 
          icon="🔬" 
          color="bg-gradient-to-br from-amber-500 to-orange-500" 
          glowColor="bg-orange-500"
          delay="delay-300"
        >
          <Highlight>Aprendizado contínuo</Highlight> como filosofia profissional. Atualmente expandindo conhecimentos em <Tech>Python</Tech> para automação e análise de dados, e <Tech>Rust</Tech> para aplicações de alta performance. Acompanhar a evolução tecnológica é parte essencial do meu trabalho.
        </TimelineItem>

        <TimelineItem 
          icon="🎯" 
          color="bg-gradient-to-br from-emerald-500 to-teal-500" 
          glowColor="bg-emerald-500"
          delay="delay-400"
        >
          <Highlight>Foco em resultados</Highlight> e comprometimento com a qualidade. Experiência tanto em manutenção de sistemas legados quanto em arquitetura de novas soluções. Interesse genuíno por tecnologia, complementado por hobbies em games e automobilismo.
        </TimelineItem>
      </div>
    </section>
  )
}
