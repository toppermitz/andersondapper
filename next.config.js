module.exports = {
  images: {
    domains: ['www.gravatar.com'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP']
  }
}