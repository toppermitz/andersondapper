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
  year,
  hero = false,
  story = false,
  photoClassName = '',
  children,
}: {
  src: string
  alt: string
  id?: string
  marker: string
  year?: string
  hero?: boolean
  story?: boolean
  photoClassName?: string
  children: ReactNode
}) {
  const root = useRef<HTMLElement>(null)
  const [near, setNear] = useState(hero)

  useEffect(() => {
    const section = root.current
    if (!section || hero || story) return
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
  }, [hero, story])

  useGSAP(() => {
    const section = root.current
    if (!section) return

    const photo = section.querySelector<HTMLElement>('[data-photo]')
    const yearLayer = section.querySelector<HTMLElement>('[data-year-layer]')
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

      // O ano é pano de fundo: desliza devagar atrás do conteúdo.
      if (yearLayer) {
        const yearShift = mobile ? 0 : 14
        const yearDrift = mobile ? 4 : 5
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

      // O hero entra por CSS, para não piscar antes da hidratação.
      if (copy && !hero) {
        gsap.from(copy.querySelectorAll(':scope > :not([data-year-layer])'), {
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
    <section ref={root} id={id} className={hero ? 'era era-hero' : story ? 'era era-story' : 'era'} data-era={marker}>
      <div className="era-band">
        <div className="era-media" data-photo>
          <Image
            src={src}
            alt={alt}
            fill
            // No desktop a foto dos capítulos vem do palco fixo; esta fica oculta.
            // No celular a foto de tela cheia é recortada em retrato, então pede mais largura.
            sizes={story ? '(min-width: 900px) 1px, 100vw' : '(max-width: 899px) 250vw, 100vw'}
            priority={hero}
            loading={hero ? undefined : near ? 'eager' : 'lazy'}
            className={`era-photo ${photoClassName}`.trim()}
          />
        </div>
        <div className="era-scrim" aria-hidden="true" />
      </div>
      <div className="era-copy" data-copy>
        {year ? (
          <p className="era-ghost" data-year-layer aria-hidden="true">
            {year}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
