import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-slate-200/80 pt-6 dark:border-slate-800">
      <div className="flex flex-col items-center gap-3 text-center text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {currentYear}{' '}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Anderson Dapper
          </span>
        </p>

        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-end">
          <span>Construído com</span>
          <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
            <SiNextdotjs aria-hidden="true" className="h-3.5 w-3.5" />
            Next.js
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">+</span>
          <span className="inline-flex items-center gap-1 font-medium text-cyan-700 dark:text-cyan-300">
            <SiTailwindcss aria-hidden="true" className="h-3.5 w-3.5" />
            Tailwind
          </span>
        </p>
      </div>
    </footer>
  )
}
