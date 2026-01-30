import './globals.css'
import { Providers } from '../context/ThemeContext'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Anderson Dapper - Desenvolvedor Full Stack',
  description: 'Portfolio de Anderson Dapper - Desenvolvedor especializado em Node.js, Next.js, NestJS e tecnologias modernas.',
  keywords: ['Anderson Dapper', 'Desenvolvedor', 'Next.js', 'Node.js', 'NestJS', 'TypeScript'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          {/* Background with animated gradient blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Primary gradient blob */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-full blur-3xl blob" />
            {/* Secondary gradient blob */}
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/25 to-blue-500/25 dark:from-purple-500/15 dark:to-blue-600/15 rounded-full blur-3xl blob float-delayed" />
            {/* Tertiary accent blob */}
            <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-600/10 rounded-full blur-3xl float" />
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative min-h-screen">
            <main className="relative z-10">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
                <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-14">
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
