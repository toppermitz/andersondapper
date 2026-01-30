'use client'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

export default function Header() {
  const skills = [
    { name: 'Delphi', color: 'from-red-500 to-orange-500' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
    { name: 'Next.js', color: 'from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500' },
    { name: 'NestJS', color: 'from-red-500 to-blue-500' },
  ]

  return (
    <header className="relative mb-16 sm:mb-20">
      {/* Theme Toggle */}
      <div className="absolute top-0 right-0 z-20">
        <ThemeToggle />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center pt-8 sm:pt-4">
        
        {/* Logo with glow effect */}
        <div className="relative mb-8 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-2xl rounded-full scale-150" />
          <div className="relative float">
            <Logo size="xl" />
          </div>
        </div>

        {/* Name with animated gradient */}
        <div className="text-center space-y-4 animate-fade-in-up delay-100">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="gradient-text-animated">
              Anderson Dapper
            </span>
          </h1>
          
          {/* Title with accent line */}
          <div className="relative inline-block">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-400 tracking-wide">
              Desenvolvedor{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Full Stack
              </span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Skills Pills with stagger animation */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 animate-fade-in-up delay-300">
          {skills.map((skill, index) => (
            <span 
              key={skill.name}
              className="group relative px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Gradient background */}
              <span className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Text */}
              <span className="relative z-10">{skill.name}</span>
            </span>
          ))}
        </div>

        {/* Subtle scroll indicator */}
        <div className="mt-12 sm:mt-16 animate-bounce-slow opacity-50 animate-fade-in delay-500">
          <svg 
            className="w-6 h-6 text-slate-400 dark:text-slate-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
    </header>
  )
}
