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
  SiGo,
  SiTerraform,
  SiLinux,
  SiRabbitmq,
  SiJest,
  SiSwagger,
  SiPython,
  SiTraefikproxy,
  SiDelphi
} from 'react-icons/si'
import { FaAws, FaServer, FaCloud } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

interface StackItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

export default function Stack() {
  const stacks: StackItem[] = [
    { name: 'TypeScript', icon: SiTypescript, gradient: 'from-blue-500 to-blue-700' },
    { name: 'Next.js', icon: SiNextdotjs, gradient: 'from-slate-700 to-slate-900' },
    { name: 'NestJS', icon: SiNestjs, gradient: 'from-red-500 to-rose-600' },
    { name: 'Node.js', icon: SiNodedotjs, gradient: 'from-green-500 to-emerald-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, gradient: 'from-blue-600 to-indigo-700' },
    { name: 'Prisma', icon: SiPrisma, gradient: 'from-indigo-500 to-purple-600' },
    { name: 'CI/CD', icon: FaCloud, gradient: 'from-orange-500 to-amber-600' },
    { name: 'Docker', icon: SiDocker, gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Redis', icon: SiRedis, gradient: 'from-red-600 to-red-700' },
    { name: 'REST API', icon: FaServer, gradient: 'from-slate-600 to-slate-700' },
    { name: 'Tailwind', icon: SiTailwindcss, gradient: 'from-cyan-400 to-cyan-600' },
    { name: 'Git', icon: SiGit, gradient: 'from-orange-500 to-red-600' },
    { name: 'GitHub', icon: SiGithub, gradient: 'from-slate-700 to-slate-900' },
    { name: 'GitLab', icon: SiGitlab, gradient: 'from-orange-600 to-red-600' },
    { name: 'Delphi', icon: SiDelphi, gradient: 'from-red-500 to-red-700' },
    { name: 'AWS', icon: FaAws, gradient: 'from-amber-500 to-orange-600' },
    { name: 'Golang', icon: SiGo, gradient: 'from-cyan-500 to-cyan-700' },
    { name: 'Terraform', icon: SiTerraform, gradient: 'from-purple-500 to-violet-600' },
    { name: 'Linux', icon: SiLinux, gradient: 'from-amber-500 to-yellow-600' },
    { name: 'RabbitMQ', icon: SiRabbitmq, gradient: 'from-orange-500 to-orange-600' },
    { name: 'Jest', icon: SiJest, gradient: 'from-red-400 to-rose-500' },
    { name: 'Swagger', icon: SiSwagger, gradient: 'from-green-500 to-emerald-600' },
    { name: 'Python', icon: SiPython, gradient: 'from-blue-500 to-yellow-500' },
    { name: 'Traefik', icon: SiTraefikproxy, gradient: 'from-cyan-400 to-blue-500' },
  ]

  return (
    <section className="mb-20" aria-labelledby="stack-title">
      <SectionHeading
        id="stack-title"
        title="Stack & Ferramentas"
        subtitle="Tecnologias que uso no dia a dia"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {stacks.map((stack) => {
          const Icon = stack.icon

          return (
            <div
              key={stack.name}
              className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-3 dark:border-slate-700/70 dark:bg-slate-800/70"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${stack.gradient} shadow-sm`}>
                <Icon aria-hidden="true" className="h-5 w-5 text-white" />
              </div>

              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 sm:text-base">
                {stack.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
