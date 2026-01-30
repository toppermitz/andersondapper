'use client'

interface TimelineItemProps {
  icon: string
  color: string
  glowColor: string
  children: React.ReactNode
  delay: string
}

function TimelineItem({ icon, color, glowColor, children, delay }: TimelineItemProps) {
  return (
    <div className={`group relative flex gap-6 animate-fade-in-up ${delay}`}>
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className={`relative flex items-center justify-center w-12 h-12 rounded-2xl ${color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
          <span className="text-xl">{icon}</span>
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-2xl ${glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
        </div>
        {/* Connector line */}
        <div className="w-0.5 h-full bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700 mt-4" />
      </div>
      
      {/* Content card */}
      <div className="flex-1 pb-10">
        <div className="glass-card rounded-2xl p-5 sm:p-6 group-hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
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
    <code className="px-2 py-0.5 mx-0.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400 rounded-md">
      {children}
    </code>
  )
}

export default function About() {
  return (
    <section className="mb-20">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10 animate-fade-in">
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

      {/* Timeline */}
      <div className="relative ml-2 sm:ml-6">
        <TimelineItem 
          icon="🚀" 
          color="bg-gradient-to-br from-blue-500 to-cyan-500" 
          glowColor="bg-cyan-500"
          delay="delay-100"
        >
          <Highlight>Com mais de duas décadas</Highlight> atuando como desenvolvedor, deixei de trabalhar exclusivamente com <Tech>Delphi</Tech> em 2022 e expandi minha stack para tecnologias modernas como <Tech>NodeJS</Tech>, <Tech>NextJS</Tech> e <Tech>Golang</Tech>. Atualmente, concentro meu foco em desenvolvimento web e backend escaláveis.
        </TimelineItem>

        <TimelineItem 
          icon="⚡" 
          color="bg-gradient-to-br from-purple-500 to-blue-500" 
          glowColor="bg-purple-500"
          delay="delay-200"
        >
          Meu cotidiano profissional envolve fortemente <Tech>NodeJS</Tech> e <Tech>NextJS</Tech> para criação de aplicações front-end e back-end, explorando conceitos avançados como <Highlight>Server-side Rendering</Highlight>, <Highlight>APIs RESTful</Highlight> e <Highlight>microserviços</Highlight>. Utilizo <Tech>Golang</Tech> para sistemas que demandam alta performance e concorrência.
        </TimelineItem>

        <TimelineItem 
          icon="🔬" 
          color="bg-gradient-to-br from-amber-500 to-orange-500" 
          glowColor="bg-orange-500"
          delay="delay-300"
        >
          Venho explorando <Tech>Python</Tech> e <Tech>Rust</Tech>, linguagens que estudo como complemento às minhas habilidades principais, buscando sempre entender tendências tecnológicas e ampliar minha versatilidade profissional.
        </TimelineItem>

        <TimelineItem 
          icon="🎮" 
          color="bg-gradient-to-br from-emerald-500 to-teal-500" 
          glowColor="bg-emerald-500"
          delay="delay-400"
        >
          <Highlight>Apaixonado por</Highlight> tecnologia, games e carros — sempre buscando aprender e aplicar as melhores práticas no desenvolvimento.
        </TimelineItem>
      </div>
    </section>
  )
}
