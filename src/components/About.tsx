
function BB({ children }: { children: React.ReactNode }) {
  return(<strong className="text-gray-900 dark:text-gray-100">{children}</strong>)
}
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
                <strong className="text-gray-900 dark:text-gray-100">Com mais de duas décadas</strong> atuando como desenvolvedor, deixei de trabalhar exclusivamente com <BB>Delphi</BB> em 2022 e expandi minha stack para tecnologias modernas como NodeJS, NextJS e Golang. Atualmente, concentro meu foco em desenvolvimento web e backend escaláveis, construindo aplicações robustas e eficientes.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <p className="text-base sm:text-lg leading-relaxed">
                Atualmente meu cotidiano profissional envolve fortemente o uso de <BB>NodeJS</BB> e <BB>NextJS</BB> para criação de aplicações front-end e back-end, explorando conceitos avançados como <BB>Server-side Rendering (SSR)</BB>, <BB>APIs RESTful</BB> e <BB>microserviços</BB>. Além disso, utilizo <BB>Golang</BB> para sistemas que demandam performance e alta concorrência.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <p className="text-base sm:text-lg leading-relaxed">
                Venho explorando há algum tempo <BB>Python</BB> e <BB>Rust</BB>, linguagens que estudo como complemento às minhas habilidades principais, buscando sempre entender tendências tecnológicas e ampliar minha versatilidade profissional.
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
