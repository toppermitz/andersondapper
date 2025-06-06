export default function Footer() {
  return (
    <footer className="text-center pt-8 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span className="text-sm">Feito com carinho usando Next.js & Tailwind CSS</span>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Anderson Dapper. Todos os direitos reservados.
        </div>
        
        <div className="w-20 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </div>
    </footer>
  )
}