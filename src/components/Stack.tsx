'use client'
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiNestjs, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiDocker, 
  SiRedis, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiGitlab, 
  SiAmazon,
  SiGo,
  SiTerraform 
} from 'react-icons/si'
import { FaServer, FaCloud } from 'react-icons/fa'
import Image from 'next/image'

interface StackItem {
  name: string
  icon: React.ComponentType<{ className?: string }> | 'custom'
  gradient: string
  shadow: string
}

export default function Stack() {
  const stacks: StackItem[] = [
    { name: 'TypeScript', icon: SiTypescript, gradient: 'from-blue-500 to-blue-700', shadow: 'group-hover:shadow-blue-500/30' },
    { name: 'Next.js', icon: SiNextdotjs, gradient: 'from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400', shadow: 'group-hover:shadow-slate-500/30' },
    { name: 'NestJS', icon: SiNestjs, gradient: 'from-red-500 to-rose-600', shadow: 'group-hover:shadow-red-500/30' },
    { name: 'Node.js', icon: SiNodedotjs, gradient: 'from-green-500 to-emerald-600', shadow: 'group-hover:shadow-green-500/30' },
    { name: 'PostgreSQL', icon: SiPostgresql, gradient: 'from-blue-600 to-indigo-700', shadow: 'group-hover:shadow-blue-500/30' },
    { name: 'Prisma', icon: SiPrisma, gradient: 'from-indigo-500 to-purple-600', shadow: 'group-hover:shadow-indigo-500/30' },
    { name: 'CI/CD', icon: FaCloud, gradient: 'from-orange-500 to-amber-600', shadow: 'group-hover:shadow-orange-500/30' },
    { name: 'Docker', icon: SiDocker, gradient: 'from-cyan-500 to-blue-600', shadow: 'group-hover:shadow-cyan-500/30' },
    { name: 'Redis', icon: SiRedis, gradient: 'from-red-600 to-red-700', shadow: 'group-hover:shadow-red-500/30' },
    { name: 'REST API', icon: FaServer, gradient: 'from-slate-600 to-slate-700', shadow: 'group-hover:shadow-slate-500/30' },
    { name: 'Tailwind', icon: SiTailwindcss, gradient: 'from-cyan-400 to-cyan-600', shadow: 'group-hover:shadow-cyan-500/30' },
    { name: 'Git', icon: SiGit, gradient: 'from-orange-500 to-red-600', shadow: 'group-hover:shadow-orange-500/30' },
    { name: 'GitHub', icon: SiGithub, gradient: 'from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-500', shadow: 'group-hover:shadow-slate-500/30' },
    { name: 'GitLab', icon: SiGitlab, gradient: 'from-orange-600 to-red-600', shadow: 'group-hover:shadow-orange-500/30' },
    { name: 'Delphi', icon: 'custom', gradient: 'from-red-500 to-red-700', shadow: 'group-hover:shadow-red-500/30' },
    { name: 'AWS', icon: SiAmazon, gradient: 'from-amber-500 to-orange-600', shadow: 'group-hover:shadow-amber-500/30' },
    { name: 'Golang', icon: SiGo, gradient: 'from-cyan-500 to-cyan-700', shadow: 'group-hover:shadow-cyan-500/30' },
    { name: 'Terraform', icon: SiTerraform, gradient: 'from-purple-500 to-violet-600', shadow: 'group-hover:shadow-purple-500/30' },
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
            Stack & Ferramentas
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tecnologias que uso no dia a dia
          </p>
        </div>
      </div>

      {/* Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {stacks.map((stack, index) => (
          <div 
            key={stack.name} 
            className={`group relative animate-fade-in-up`}
            style={{ animationDelay: `${0.1 + index * 0.05}s`, opacity: 0 }}
          >
            <div className={`
              relative flex items-center gap-3 px-4 py-4 rounded-2xl
              bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm
              border border-slate-200/50 dark:border-slate-700/50
              transition-all duration-300 ease-out
              hover:scale-[1.05] hover:-translate-y-1
              ${stack.shadow} hover:shadow-xl
            `}>
              {/* Icon container with gradient background */}
              <div className={`
                relative flex items-center justify-center w-12 h-12 rounded-xl
                bg-gradient-to-br ${stack.gradient}
                shadow-md group-hover:shadow-lg
                transition-all duration-300
                group-hover:scale-110
              `}>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stack.gradient} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300`} />
                
                {/* Icon */}
                {stack.name === 'Delphi' ? (
                  <Image 
                    src="/Delphi_Language_Logo.svg" 
                    alt="Delphi Logo" 
                    width={24} 
                    height={24} 
                    className="w-6 h-6 relative z-10 brightness-0 invert"
                  />
                ) : (
                  (() => {
                    const IconComponent = stack.icon as React.ComponentType<{ className?: string }>
                    return <IconComponent className="w-6 h-6 text-white relative z-10" />
                  })()
                )}
              </div>
              
              {/* Label */}
              <span className="font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {stack.name}
              </span>

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
