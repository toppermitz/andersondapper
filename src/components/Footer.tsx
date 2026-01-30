'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-12 mt-8">
      {/* Gradient separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

      <div className="flex flex-col items-center space-y-6">
        {/* Made with love */}
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <span className="text-sm">Feito com</span>
          <span className="relative">
            <span className="text-lg animate-pulse">❤️</span>
            <span className="absolute inset-0 text-lg animate-ping opacity-50">❤️</span>
          </span>
          <span className="text-sm">usando</span>
          
          <div className="flex items-center gap-2">
            {/* Next.js badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <span className="w-3.5 h-3.5 rounded-full bg-current flex items-center justify-center text-[8px] font-bold text-white dark:text-slate-900">N</span>
              Next.js
            </span>
            
            {/* Tailwind badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
              </svg>
              Tailwind
            </span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-sm text-slate-400 dark:text-slate-500">
          © {currentYear} <span className="font-medium text-slate-600 dark:text-slate-400">Anderson Dapper</span>. Todos os direitos reservados.
        </div>

        {/* Decorative gradient line */}
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full opacity-60" />
      </div>
    </footer>
  )
}
