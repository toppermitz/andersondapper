'use client'

import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const page = root.current
    if (!page) return

    const progress = document.getElementById('scroll-progress')
    const setProgress = progress ? gsap.quickSetter(progress, 'scaleX') : null
    const mm = gsap.matchMedia()

    const setup = (desktop: boolean) => {
      const endFactor = desktop ? 1.2 : 0.85
      const short = window.innerHeight < 640

      const hero = page.querySelector<HTMLElement>('[data-hero]')
      const heroMedia = page.querySelector<HTMLElement>('[data-hero-media]')
      if (hero && heroMedia && desktop) {
        gsap.fromTo(
          heroMedia,
          { y: 24, scale: 1.04 },
          { y: 0, scale: 1, duration: 1.15, ease: 'power3.out' },
        )
      }
      if (hero && heroMedia) {
        gsap.to(heroMedia, {
          yPercent: desktop ? 8 : 4,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      page.querySelectorAll<HTMLElement>('[data-pin]').forEach((section) => {
        const words = section.querySelectorAll<HTMLElement>('[data-word]')
        const media = section.querySelector<HTMLElement>('[data-parallax]')
        const counter = section.querySelector<HTMLElement>('[data-counter]')
        const marks = [...section.querySelectorAll<HTMLElement>('[data-mark]')]

        if (short) {
          if (words.length) {
            gsap.fromTo(words, { opacity: 0.2 }, {
              opacity: 1,
              stagger: 0.012,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 78%',
                end: 'top 38%',
                scrub: true,
              },
            })
          }
          return
        }

        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * (counter ? endFactor + 0.25 : endFactor))}`,
            pin: true,
            scrub: 0.45,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        })

        if (words.length) {
          timeline.fromTo(
            words,
            { y: desktop ? 22 : 12, opacity: 0.16 },
            { y: 0, opacity: 1, stagger: 0.028, duration: 1 },
            0,
          )
          timeline.to({}, { duration: 0.2 })
        }

        if (media) {
          timeline.fromTo(
            media,
            { scale: 1.06, yPercent: -2 },
            { scale: 1, yPercent: 3, duration: 1.2 },
            0,
          )
        }

        if (counter && marks.length) {
          const state = { year: 1999 }
          let shown = -1
          const paint = () => {
            const value = Math.round(state.year)
            if (value === shown) return
            shown = value
            counter.textContent = String(value)
            marks.forEach((mark) => {
              const at = Number(mark.dataset.at)
              gsap.set(mark, { opacity: value >= at ? 1 : 0.28 })
            })
          }
          paint()
          timeline.to(state, { year: 2026, duration: 1, onUpdate: paint }, 0)
        }
      })

      const ambient = page.querySelector<HTMLElement>('[data-ambient]')
      if (ambient) {
        gsap.to(ambient, {
          yPercent: desktop ? 6 : 3,
          ease: 'none',
          scrollTrigger: {
            trigger: ambient,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
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
    }

    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 800px)', () => {
      setup(true)
    })
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 799px)', () => {
      setup(false)
    })

    const refresh = () => ScrollTrigger.refresh()
    document.fonts.ready.then(refresh)
    const frame = requestAnimationFrame(refresh)

    return () => {
      cancelAnimationFrame(frame)
      mm.revert()
      if (progress) gsap.set(progress, { scaleX: 0 })
    }
  }, { scope: root })

  return <div ref={root}>{children}</div>
}
