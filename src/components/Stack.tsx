import { 
  SiTypescript, 
  SiNextdotjs, 
  SiNestjs, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiDocker, 
  SiRedis, 
  // SiGraphql, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiGitlab, 
  SiAmazon 
} from 'react-icons/si'
import { FaServer, FaCloud } from 'react-icons/fa'
import Image from 'next/image'

export default function Stack() {
  const stacks = [
    { name: 'TypeScript', color: 'blue', icon: SiTypescript },
    { name: 'Next.js', color: 'gray', icon: SiNextdotjs },
    { name: 'NestJS', color: 'red', icon: SiNestjs },
    { name: 'Node.js', color: 'green', icon: SiNodedotjs },
    { name: 'PostgreSQL', color: 'blue', icon: SiPostgresql },
    { name: 'Prisma', color: 'indigo', icon: SiPrisma },
    { name: 'CI/CD', color: 'orange', icon: FaCloud },
    { name: 'Docker', color: 'blue', icon: SiDocker },
    { name: 'Redis', color: 'red', icon: SiRedis },
    // { name: 'GraphQL', color: 'purple', icon: SiGraphql },
    { name: 'REST API', color: 'gray', icon: FaServer },
    { name: 'Tailwind CSS', color: 'indigo', icon: SiTailwindcss },
    { name: 'Git', color: 'orange', icon: SiGit },
    { name: 'GitHub', color: 'blue', icon: SiGithub },
    { name: 'GitLab', color: 'red', icon: SiGitlab },
    { name: 'Delphi', color: 'red', icon: 'custom' },
    { name: 'AWS', color: 'orange', icon: SiAmazon },
    
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50',
      gray: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700/50',
      red: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800/50',
      green: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800/50',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50',
      orange: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800/50',
      purple: 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800/50'
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Stack & Ferramentas
        </h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {stacks.map(stack => {
          return (
            <div 
              key={stack.name} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 hover:scale-105 hover:shadow-md ${getColorClasses(stack.color)}`}
            >
              {stack.name === 'Delphi' ? (
              <Image 
                src="/Delphi_Language_Logo.svg" 
                alt="Delphi Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
              ) : (
              (() => {
                const IconComponent = stack.icon;
                return <IconComponent className="w-8 h-8" />
              })()
              )}
              <span className="font-medium text-sm sm:text-base">{stack.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}