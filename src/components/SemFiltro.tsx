'use client'

import { FaSkull, FaGamepad, FaCar, FaBug, FaCode, FaCoffee, FaExclamationTriangle, FaHandshake } from 'react-icons/fa'

const items = [
  {
    icon: FaSkull,
    color: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    text: 'Duas décadas de Delphi. Não, não é typo. Duas. Décadas. Enquanto o mundo descobria JavaScript, eu estava no Object Pascal resolvendo pepino de cliente que achava que ERP era mágica.'
  },
  {
    icon: FaExclamationTriangle,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'Em 2022 cansei de ser dinossauro e migrei pra stack moderna. Node, Next, Go. Não foi transição suave - foi cirurgia de peito aberto sem anestesia.'
  },
  {
    icon: FaCode,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'Sou o cara que reclama de tudo. Do código porco que herdei, da arquitetura que "foi assim que deu", do prazo que alguém inventou sem me perguntar. Mas no fim do dia, a merda funciona. Sempre funciona.'
  },
  {
    icon: FaCoffee,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'Reunião que poderia ser email me dá urticária. Jira com 47 campos obrigatórios também.'
  },
  {
    icon: FaGamepad,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'Games são meu detox. Carros são o hobby que o salário de dev não paga.'
  },
  {
    icon: FaBug,
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    text: 'Minha filosofia de código: se não roda, não existe. "Deveria funcionar" não paga boleto.'
  },
  {
    icon: FaCar,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
    text: 'Zero paciência pra politicagem de escritório. Paciência infinita pra debugar às 3 da manhã aquele bug filho da puta que ninguém consegue reproduzir.'
  },
  {
    icon: FaHandshake,
    color: 'text-pink-500',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'Se você chegou até aqui, provavelmente a gente se daria bem. Ou você me odiaria. Não tem meio termo.'
  }
]

interface SemFiltroProps {
  isVisible: boolean
}

export default function SemFiltro({ isVisible }: SemFiltroProps) {
  if (!isVisible) return null

  return (
    <section
      id="sem-filtro"
      className="mb-16 animate-fade-in"
      style={{
        animation: 'fade-in-up 0.8s ease-out forwards'
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-2 h-12 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-full" />
          <div className="absolute inset-0 w-2 h-12 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-sm opacity-50" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
          O que NÃO está no LinkedIn
        </h2>
        <span className="ml-2 px-2 py-1 text-xs font-mono bg-green-900 text-green-400 rounded border border-green-700">
          root
        </span>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-950/30 dark:to-purple-950/30 rounded-2xl p-6 sm:p-8 border border-cyan-200/50 dark:border-cyan-800/30">
        <div className="grid gap-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-200"
                style={{
                  animation: `fade-in-up 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`flex-shrink-0 p-2 rounded-lg ${item.bgColor}`}>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
