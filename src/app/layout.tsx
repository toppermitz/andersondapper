import './globals.css'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Providers } from '../context/ThemeContext'
import SiteAnalytics from '../components/SiteAnalytics'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { email, githubUrl, linkedInUrl, siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      email,
      jobTitle: 'Tech lead',
      homeLocation: {
        '@type': 'Place',
        name: 'Novo Hamburgo, RS',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Novo Hamburgo',
          addressRegion: 'RS',
          addressCountry: 'BR',
        },
      },
      sameAs: [linkedInUrl, githubUrl],
      knowsAbout: ['Delphi', 'NestJS', 'Next.js', 'PostgreSQL'],
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
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Ânderson Dapper',
    'desenvolvedor de software',
    'Novo Hamburgo',
    'Delphi',
    'NestJS',
    'Next.js',
    'PostgreSQL',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
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
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sou Ânderson Dapper, desenvolvedor de software em Novo Hamburgo, RS.',
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
    <html lang="pt-BR" className={interTight.className} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedSiteStructuredData }}
        />
        <Providers>
          <a href="#conteudo-principal" className="skip-link">
            Ir para o conteúdo
          </a>
          <Header />
          <main id="conteudo-principal" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
        <SiteAnalytics />
      </body>
    </html>
  )
}
