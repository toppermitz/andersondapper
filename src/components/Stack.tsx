export default function Stack() {
  const stacks = [
    { name: 'TypeScript', color: 'blue', icon: '📘' },
    { name: 'Next.js', color: 'gray', icon: '⚡' },
    { name: 'NestJS', color: 'red', icon: '🏰' },
    { name: 'Node.js', color: 'green', icon: '🟢' },
    { name: 'PostgreSQL', color: 'blue', icon: '🐘' },
    { name: 'Prisma', color: 'indigo', icon: '🔗' },
    { name: 'CI/CD', color: 'orange', icon: '🚀' },
    { name: 'Docker', color: 'blue', icon: '🐳' }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50',
      gray: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700/50',
      red: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800/50',
      green: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800/50',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50',
      orange: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800/50'
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Stack & Ferramentas
        </h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {stacks.map(stack => (
          <div 
            key={stack.name} 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 hover:scale-105 hover:shadow-md ${getColorClasses(stack.color)}`}
          >
            <span className="text-lg">{stack.icon}</span>
            <span className="font-medium text-sm sm:text-base">{stack.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}