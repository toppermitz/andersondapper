'use client'

import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function EraFrame({
  src,
  alt,
  year,
  priority = false,
  children,
}: {
  src: string
  alt: string
  year?: string
  priority?: boolean
  children: ReactNode
}) {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    const section = root.current
    if (!section) return

    const photo = section.querySelector<HTMLElement>('[data-photo]')
    const yearLayer = section.querySelector<HTMLElement>('[data-year-layer]')
    const copy = section.querySelector<HTMLElement>('[data-copy]')
    const mm = gsap.matchMedia()

    const parallax = (mobile: boolean) => {
      const photoShift = mobile ? 8 : 15
      const yearShift = mobile ? 5 : 10
      const yearDrift = mobile ? 8 : 16

      if (photo) {
        gsap.fromTo(
          photo,
          { yPercent: photoShift },
          {
            yPercent: -photoShift,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      }

      if (yearLayer) {
        gsap.fromTo(
          yearLayer,
          { yPercent: yearShift, xPercent: -yearDrift },
          {
            yPercent: -yearShift,
            xPercent: yearDrift,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      }

      if (copy) {
        gsap.fromTo(
          copy,
          { autoAlpha: 0, y: mobile ? 18 : 32 },
          {
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              end: 'top 48%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      }
    }

    mm.add('(prefers-reduced-motion: reduce)', () => {
      if (copy) gsap.set(copy, { autoAlpha: 1, y: 0 })
    })
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 799px)', () => {
      parallax(true)
    })
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 800px)', () => {
      parallax(false)
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <section ref={root} className="era" data-era={year ?? 'fora'}>
      <div className="era-media" data-photo>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className="era-photo"
        />
      </div>
      {year ? (
        <p className="era-year" data-year-layer aria-hidden="true">
          {year}
        </p>
      ) : null}
      <div className="era-scrim" aria-hidden="true" />
      <div className="era-copy" data-copy>
        {children}
      </div>
    </section>
  )
}
