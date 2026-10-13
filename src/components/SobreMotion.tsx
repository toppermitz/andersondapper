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

    const mm = gsap.matchMedia()

    const bind = (desktop: boolean) => {
      page.querySelectorAll<HTMLElement>('[data-scene="chapter"]').forEach((section) => {
        const lines = [...section.querySelectorAll<HTMLElement>('[data-line]')]
        const year = section.querySelector('.year-display')
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * (desktop ? 0.62 : 0.48) * Math.max(lines.length, 1))}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        if (year) {
          tl.fromTo(year, { yPercent: 18, opacity: 0.35 }, { yPercent: 0, opacity: 1, duration: 0.4, ease: 'none' }, 0)
        }
        if (lines[0]) gsap.set(lines[0], { opacity: 1, y: 0 })
        lines.forEach((line, index) => {
          if (index === 0) {
            if (lines.length > 1) {
              tl.to(line, { opacity: 0, y: desktop ? -24 : -12, duration: 0.3, ease: 'none' }, 0.58)
            }
            return
          }
          tl.fromTo(
            line,
            { opacity: 0, y: desktop ? 32 : 16 },
            { opacity: 1, y: 0, duration: 0.36, ease: 'none' },
            index,
          )
          if (index < lines.length - 1) {
            tl.to(line, { opacity: 0, y: desktop ? -24 : -12, duration: 0.3, ease: 'none' }, index + 0.58)
          }
        })
      })

      const soltas = page.querySelector<HTMLElement>('[data-scene="soltas"]')
      const track = soltas?.querySelector<HTMLElement>('[data-track]')
      if (soltas && track) {
        const panels = track.querySelectorAll('[data-panel]')
        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + (desktop ? 80 : 28))
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: soltas,
            start: 'top top',
            end: () => `+=${Math.max(window.innerHeight, travel())}`,
            pin: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        tl.to(track, { x: () => -travel(), ease: 'none', duration: 1 }, 0)
        if (panels.length) {
          tl.fromTo(
            panels,
            { y: desktop ? 28 : 16 },
            { y: 0, stagger: 0.1, duration: 0.28, ease: 'none' },
            0,
          )
        }
      }
    }

    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 800px)', () => {
      bind(true)
    })
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 799px)', () => {
      bind(false)
    })

    const refresh = () => ScrollTrigger.refresh()
    document.fonts.ready.then(refresh)
    const frame = requestAnimationFrame(refresh)

    return () => {
      cancelAnimationFrame(frame)
      mm.revert()
    }
  }, { scope: root })

  return <div ref={root}>{children}</div>
}
