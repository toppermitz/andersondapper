'use client'

import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

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
              <SiNextdotjs className="w-3.5 h-3.5" />
              Next.js
            </span>
            
            {/* Tailwind badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              <SiTailwindcss className="w-3.5 h-3.5" />
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
