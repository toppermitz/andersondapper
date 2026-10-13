'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function EraFrame({
  src,
  alt,
  year,
  marker,
  priority = false,
  intro = true,
  photoClassName = '',
  children,
}: {
  src: string
  alt: string
  year?: string
  marker?: string
  priority?: boolean
  intro?: boolean
  photoClassName?: string
  children: ReactNode
}) {
  const root = useRef<HTMLElement>(null)
  const [near, setNear] = useState(priority)

  useEffect(() => {
    const section = root.current
    if (!section || priority) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true)
          observer.disconnect()
        }
      },
      { rootMargin: '250% 0px' },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [priority])

  useGSAP(() => {
    const section = root.current
    if (!section) return

    const photo = section.querySelector<HTMLElement>('[data-photo]')
    const yearLayer = section.querySelector<HTMLElement>('[data-year-layer]')
    const copy = section.querySelector<HTMLElement>('[data-copy]')
    const mm = gsap.matchMedia()

    const parallax = (mobile: boolean) => {
      const photoShift = mobile ? 6 : 15
      const yearShift = mobile ? 0 : 10
      const yearDrift = mobile ? 4 : 16

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

      if (copy && intro) {
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
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 767px)', () => {
      parallax(true)
    })
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
      parallax(false)
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <section ref={root} className="era" data-era={marker ?? year ?? 'fora'}>
      <div className="era-band">
        <div className="era-media" data-photo>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            priority={priority}
            loading={priority ? undefined : near ? 'eager' : 'lazy'}
            className={`era-photo ${photoClassName}`.trim()}
          />
        </div>
        {year ? (
          <p className="era-year" data-year-layer aria-hidden="true">
            {year}
          </p>
        ) : null}
        <div className="era-scrim" aria-hidden="true" />
      </div>
      <div className="era-copy" data-copy>
        {children}
      </div>
    </section>
  )
}
