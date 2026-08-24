'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/next'
import { track } from '@vercel/analytics/react'

function classifyLink(link: HTMLAnchorElement) {
  const href = link.getAttribute('href')

  if (!href) {
    return null
  }

  if (href.startsWith('mailto:')) {
    return 'email'
  }

  const destination = new URL(href, window.location.href)

  if (destination.hostname === 'linkedin.com' || destination.hostname.endsWith('.linkedin.com')) {
    return 'linkedin'
  }

  if (destination.hostname === 'github.com' || destination.hostname.endsWith('.github.com')) {
    return 'github'
  }

  if (destination.pathname === '/cases') {
    return 'cases_hub'
  }

  if (destination.pathname.startsWith('/cases/')) {
    return 'case_detail'
  }

  if (destination.hash === '#contato') {
    return 'contact_section'
  }

  return null
}

export default function SiteAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return
      }

      const link = event.target.closest('a')

      if (!(link instanceof HTMLAnchorElement)) {
        return
      }

      const target = classifyLink(link)

      if (!target) {
        return
      }

      const label = link.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80) || 'link'

      track('CTA Click', {
        target,
        source: pathname,
        label,
      })
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return <Analytics />
}
