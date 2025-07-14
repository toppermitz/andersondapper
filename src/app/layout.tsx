import './globals.css'
import { Providers } from '../context/ThemeContext'

export const metadata = {
  title: 'Anderson Dapper - Desenvolvedor Full Stack',
  description: 'Portfolio de Anderson Dapper - Desenvolvedor especializado em Node.js, Next.js, NestJS e tecnologias modernas.',
  keywords: ['Anderson Dapper', 'Desenvolvedor', 'Next.js', 'Node.js', 'NestJS', 'TypeScript'],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="bg-gray-50 dark:bg-gray-950" suppressHydrationWarning>
      <body className="font-sans bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen min-h-dvh" suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen min-h-dvh bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
            <main className="relative min-h-screen min-h-dvh">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6 sm:p-8 lg:p-12">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}