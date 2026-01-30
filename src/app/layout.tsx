import './globals.css'
import { Providers } from '../context/ThemeContext'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

import type { Metadata } from 'next'

const siteUrl = 'https://andersondapper.com.br'
const siteName = 'Anderson Dapper'
const siteDescription = 'Desenvolvedor Full Stack com +20 anos de experiência. Especialista em Node.js, Next.js, NestJS, TypeScript e Golang. Construindo soluções robustas e escaláveis.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anderson Dapper - Desenvolvedor Full Stack',
    template: '%s | Anderson Dapper'
  },
  description: siteDescription,
  keywords: ['Anderson Dapper', 'Desenvolvedor Full Stack', 'Node.js', 'Next.js', 'NestJS', 'TypeScript', 'Golang', 'Delphi', 'Backend', 'Frontend', 'Brasil'],
  authors: [{ name: 'Anderson Dapper', url: siteUrl }],
  creator: 'Anderson Dapper',
  publisher: 'Anderson Dapper',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: siteName,
    title: 'Anderson Dapper - Desenvolvedor Full Stack',
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anderson Dapper - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anderson Dapper - Desenvolvedor Full Stack',
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@toppermitz',
  },
  verification: {
    google: 'adicione-seu-codigo-aqui',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          {/* Background - static gradient, no blur animations */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-500/15 dark:from-purple-500/10 dark:to-blue-600/10 rounded-full blur-2xl" />
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
