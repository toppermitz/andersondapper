'use client'

import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function pinEnd(section: Element, factor: number) {
  return () => `+=${Math.round(section.clientHeight * factor)}`
}

export default function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const page = root.current
    if (!page) return

    const mm = gsap.matchMedia()

    const bind = (desktop: boolean) => {
      const hero = page.querySelector<HTMLElement>('[data-scene="hero"]')
      if (hero) {
        const zoom = hero.querySelector('[data-zoom]')
        const lines = hero.querySelectorAll('[data-line]')
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: pinEnd(hero, desktop ? 1.45 : 1.15),
            pin: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        if (zoom) {
          tl.fromTo(zoom, { scale: 1.22 }, { scale: 1, ease: 'none', duration: 1 }, 0)
        }
        if (lines.length) {
          gsap.set(lines[0], { opacity: 1, y: 0 })
          if (lines[1]) gsap.set(lines[1], { opacity: 1, y: 0 })
          const rest = [...lines].slice(2)
          if (rest.length) {
            tl.fromTo(
              rest,
              { y: desktop ? 48 : 28, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.12, duration: 0.4, ease: 'none' },
              0.08,
            )
          }
        }
      }

      page.querySelectorAll<HTMLElement>('[data-scene="stage"]').forEach((section) => {
        const lines = [...section.querySelectorAll<HTMLElement>('[data-line]')]
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * (desktop ? 0.72 : 0.55) * lines.length)}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        if (lines[0]) gsap.set(lines[0], { opacity: 1, y: 0 })
        lines.forEach((line, index) => {
          if (index === 0) {
            if (lines.length > 1) {
              tl.to(line, { opacity: 0, y: desktop ? -28 : -14, duration: 0.32, ease: 'none' }, 0.62)
            }
            return
          }
          tl.fromTo(
            line,
            { opacity: 0, y: desktop ? 36 : 18 },
            { opacity: 1, y: 0, duration: 0.38, ease: 'none' },
            index,
          )
          if (index < lines.length - 1) {
            tl.to(line, { opacity: 0, y: desktop ? -28 : -14, duration: 0.32, ease: 'none' }, index + 0.62)
          }
        })
      })

      const anos = page.querySelector<HTMLElement>('[data-scene="anos"]')
      if (anos) {
        const zoom = anos.querySelector('[data-zoom]')
        const counter = anos.querySelector<HTMLElement>('[data-counter]')
        const marks = [...anos.querySelectorAll<HTMLElement>('[data-mark]')]
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: anos,
            start: 'top top',
            end: pinEnd(anos, desktop ? 1.7 : 1.35),
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        if (zoom) {
          tl.fromTo(zoom, { scale: 1.14 }, { scale: 1, ease: 'none', duration: 1 }, 0)
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
              gsap.set(mark, { opacity: value >= at ? 1 : 0.22 })
            })
          }
          paint()
          tl.to(state, { year: 2026, duration: 1, ease: 'none', onUpdate: paint }, 0)
        }
      }

      const close = page.querySelector<HTMLElement>('[data-scene="close"]')
      if (close) {
        const ambient = close.querySelector('[data-ambient]')
        const copy = close.querySelector('.scene-copy')
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: close,
            start: 'top top',
            end: pinEnd(close, desktop ? 1.05 : 0.85),
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        if (ambient) {
          tl.fromTo(
            ambient,
            { scale: 1.16, yPercent: -7 },
            { scale: 1.02, yPercent: 7, ease: 'none', duration: 1 },
            0,
          )
        }
        if (copy) {
          tl.fromTo(copy, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.4, ease: 'none' }, 0.12)
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
