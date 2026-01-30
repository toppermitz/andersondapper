'use client'

interface SocialLinkProps {
  name: string
  url: string
  icon: React.ReactNode
  gradient: string
  hoverGlow: string
  delay: string
}

function SocialLink({ name, url, icon, gradient, hoverGlow, delay }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-3 p-4 sm:p-5 rounded-2xl
        bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm
        border border-slate-200/50 dark:border-slate-700/50
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        hover:shadow-xl ${hoverGlow}
        animate-fade-in-up ${delay}
      `}
    >
      {/* Icon with gradient background */}
      <div className={`
        relative flex items-center justify-center w-14 h-14 rounded-xl
        bg-gradient-to-br ${gradient}
        shadow-lg group-hover:shadow-xl
        transition-all duration-300
        group-hover:scale-110
      `}>
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`} />
        
        <div className="relative z-10 text-white">
          {icon}
        </div>
      </div>
      
      {/* Label and description */}
      <div className="flex-1">
        <span className="block font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {name === 'Email' ? 'eu@andersondapper.com.br' : name === 'LinkedIn' ? '/andersondapper' : '/toppermitz'}
        </span>
      </div>

      {/* Arrow indicator */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-400 dark:text-slate-500 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
        <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>
    </a>
  )
}

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/andersondapper',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-700',
      hoverGlow: 'hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/toppermitz',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      gradient: 'from-slate-700 to-slate-900',
      hoverGlow: 'hover:shadow-slate-500/20 dark:hover:shadow-slate-400/30',
    },
    {
      name: 'Email',
      url: 'mailto:eu@andersondapper.com.br',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-600',
      hoverGlow: 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/30',
    }
  ]

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
            Vamos conversar?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Sempre aberto a novas oportunidades
          </p>
        </div>
      </div>

      {/* Intro text */}
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-950/30 dark:to-purple-950/30 border border-cyan-200/50 dark:border-cyan-800/30 animate-fade-in-up delay-100">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Estou sempre aberto a conversar sobre <span className="font-semibold text-cyan-600 dark:text-cyan-400">novos projetos</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">oportunidades interessantes</span> ou apenas trocar ideias sobre tecnologia.
        </p>
      </div>

      {/* Social links */}
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {socialLinks.map((link, index) => (
          <SocialLink 
            key={link.name} 
            {...link} 
            delay={`delay-${(index + 2) * 100}`}
          />
        ))}
      </div>
    </section>
  )
}
