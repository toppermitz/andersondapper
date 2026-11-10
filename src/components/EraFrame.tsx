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
  id,
  marker,
  hero = false,
  photoClassName = '',
  children,
}: {
  src: string
  alt: string
  id?: string
  marker: string
  hero?: boolean
  photoClassName?: string
  children: ReactNode
}) {
  const root = useRef<HTMLElement>(null)
  const [near, setNear] = useState(hero)

  useEffect(() => {
    const section = root.current
    if (!section || hero) return
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
  }, [hero])

  useGSAP(() => {
    const section = root.current
    if (!section) return

    const photo = section.querySelector<HTMLElement>('[data-photo]')
    const copy = section.querySelector<HTMLElement>('[data-copy]')
    const mm = gsap.matchMedia()

    const motion = (mobile: boolean) => {
      const photoShift = mobile ? 6 : 12

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

      // O hero entra por CSS, para não piscar antes da hidratação.
      if (copy && !hero) {
        gsap.from(copy.children, {
          autoAlpha: 0,
          y: mobile ? 16 : 26,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: {
            trigger: copy,
            start: mobile ? 'top 88%' : 'top 76%',
            once: true,
          },
        })
      }
    }

    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 899px)', () => {
      motion(true)
    })
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 900px)', () => {
      motion(false)
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <section ref={root} id={id} className={hero ? 'era era-hero' : 'era'} data-era={marker}>
      <div className="era-band">
        <div className="era-media" data-photo>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            priority={hero}
            loading={hero ? undefined : near ? 'eager' : 'lazy'}
            className={`era-photo ${photoClassName}`.trim()}
          />
        </div>
        <div className="era-scrim" aria-hidden="true" />
      </div>
      <div className="era-copy" data-copy>
        {children}
      </div>
    </section>
  )
}
