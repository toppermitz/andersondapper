export default function About() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Sobre mim
        </h2>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-900/30">
        <div className="prose prose-lg max-w-none">
          <div className="grid gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-base sm:text-lg leading-relaxed">
                <strong className="text-gray-900 dark:text-gray-100">Desenvolvedor desde 2001</strong> atuando em Delphi e evoluindo para Node.js/NestJS.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <p className="text-base sm:text-lg leading-relaxed">
                <strong className="text-gray-900 dark:text-gray-100">Atualmente especializado</strong> em desenvolvimento moderno com Node.js, NestJS, Next.js, implementação de CI/CD e PostgreSQL.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-base sm:text-lg leading-relaxed">
                <strong className="text-gray-900 dark:text-gray-100">Apaixonado por</strong> tecnologia, games e carros - sempre buscando aprender e aplicar as melhores práticas no desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}