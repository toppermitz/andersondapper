import './globals.css'
import { Providers } from '../context/ThemeContext'
import SiteAnalytics from '../components/SiteAnalytics'
import SiteNav from '../components/SiteNav'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

import type { Metadata } from 'next'

const siteUrl = 'https://andersondapper.com.br'
const siteName = 'Anderson Dapper'
const siteTitle = 'Anderson Dapper | Software legado, APIs e Web'
const siteDescription = 'Modernização de sistemas críticos, APIs e produtos web com mais de 20 anos de experiência. Do legado à plataforma, sem perder as regras do negócio.'
const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      sameAs: [
        'https://linkedin.com/in/andersondapper',
        'https://github.com/toppermitz',
      ],
      knowsAbout: [
        'Modernização de sistemas legados',
        'APIs',
        'Produtos web',
        'Delphi',
        'TypeScript',
        'PostgreSQL',
        'CI/CD',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: 'pt-BR',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
}
const serializedSiteStructuredData = JSON.stringify(siteStructuredData).replace(
  /</g,
  '\\u003c',
)

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Anderson Dapper'
  },
  description: siteDescription,
  keywords: ['Anderson Dapper', 'Modernização de sistemas legados', 'Desenvolvedor Full Stack', 'APIs REST', 'Node.js', 'Next.js', 'NestJS', 'TypeScript', 'Golang', 'Delphi', 'PostgreSQL', 'Brasil'],
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
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anderson Dapper - Software legado, APIs e Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@toppermitz',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={inter.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedSiteStructuredData }}
        />
        <Providers>
          <a
            href="#conteudo-principal"
            className="pressable fixed left-4 top-4 z-[100] -translate-y-20 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-xl focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white dark:text-slate-950"
          >
            Ir para o conteúdo
          </a>

          {/* Background - static gradient, no blur animations */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-500/15 dark:from-purple-500/10 dark:to-blue-600/10 rounded-full blur-2xl" />
          </div>

          <div className="relative min-h-screen">
            <SiteNav />
            <main
              id="conteudo-principal"
              tabIndex={-1}
              className="relative z-10 focus:outline-none"
            >
              <div className="mx-auto max-w-5xl px-4 pb-8 pt-4 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </Providers>
        <SiteAnalytics />
      </body>
    </html>
  )
}
