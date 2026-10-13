'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { foraCards } from '@/lib/copy'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HobbyCards() {
  const root = useRef<HTMLUListElement>(null)

  useGSAP(() => {
    const list = root.current
    if (!list) return
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('.hobby', list).forEach((card) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 22,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        })
      })

      const cleanups: Array<() => void> = []
      list.querySelectorAll<HTMLElement>('.hobby-photo').forEach((photo) => {
        const card = photo.closest('.hobby')
        if (!card) return
        const enter = () => gsap.to(photo, { scale: 1.045, duration: 0.55, ease: 'power2.out' })
        const leave = () => gsap.to(photo, { scale: 1, duration: 0.55, ease: 'power2.out' })
        card.addEventListener('pointerenter', enter)
        card.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          card.removeEventListener('pointerenter', enter)
          card.removeEventListener('pointerleave', leave)
        })
      })
      return () => cleanups.forEach((fn) => fn())
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <ul className="hobbies" ref={root}>
      {foraCards.map((card) => {
        const body = (
          <>
            {'logo' in card && card.logo ? (
              <div className="hobby-media hobby-stage">
                <Image
                  className="hobby-logo hobby-logo-on-dark"
                  src="/img/hobbies/tdc-horizontal-white.png"
                  alt=""
                  width={2300}
                  height={800}
                  unoptimized
                />
                <Image
                  className="hobby-logo hobby-logo-on-light"
                  src="/img/hobbies/tdc-horizontal-black.png"
                  alt=""
                  width={2300}
                  height={800}
                  unoptimized
                />
              </div>
            ) : 'src' in card ? (
              <div className="hobby-media">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"
                  className="hobby-photo"
                />
              </div>
            ) : null}
            <div className="hobby-copy">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </>
        )
        return (
          <li className="hobby" key={card.title}>
            {'href' in card && card.href ? (
              <a href={card.href} target="_blank" rel="noreferrer">
                {body}
              </a>
            ) : (
              body
            )}
          </li>
        )
      })}
    </ul>
  )
}
