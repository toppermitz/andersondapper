const projects = [
  { 
    title: 'Login Centralizado', 
    desc: 'Sistema de autenticação centralizado com NestJS, JWT e refresh tokens para múltiplas aplicações.', 
    tech: ['NestJS', 'JWT', 'PostgreSQL'],
    status: 'Concluído',
    link: '#' 
  },
  { 
    title: 'Cashback Program', 
    desc: 'Plataforma de gestão de campanhas de cashback integrada com WhatsApp API para notificações automáticas.', 
    tech: ['Node.js', 'WhatsApp API', 'Redis'],
    status: 'Em andamento',
    link: '#' 
  },
  { 
    title: 'CI Code Review', 
    desc: 'Sistema de análise automática de merge requests utilizando IA para detecção de problemas de código.', 
    tech: ['GitLab CI', 'OpenAI API', 'Docker'],
    status: 'Planejamento',
    link: '#' 
  }
]

export default function Projects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      case 'Em andamento':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
      case 'Planejamento':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Projetos Recentes
        </h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div 
            key={project.title + index} 
            className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span 
                  key={tech} 
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link} 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:gap-3"
            >
              Ver detalhes
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}