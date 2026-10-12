'use client'

import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SobreMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const page = root.current
    if (!page) return

    const progress = document.getElementById('scroll-progress')
    const setProgress = progress ? gsap.quickSetter(progress, 'scaleX') : null
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      page.querySelectorAll<HTMLElement>('[data-year]').forEach((year) => {
        gsap.from(year, {
          yPercent: 70,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: year,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      const cards = page.querySelectorAll<HTMLElement>('[data-card]')
      if (cards.length) {
        gsap.from(cards, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0].parentElement,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })
      }

      if (setProgress) {
        ScrollTrigger.create({
          start: 0,
          end: 'max',
          onUpdate: (self) => setProgress(self.progress),
        })
      }
    })

    const refresh = () => ScrollTrigger.refresh()
    document.fonts.ready.then(refresh)

    return () => {
      mm.revert()
      if (progress) gsap.set(progress, { scaleX: 0 })
    }
  }, { scope: root })

  return <div ref={root}>{children}</div>
}
