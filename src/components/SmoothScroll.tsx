'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
    })

    const progress = document.getElementById('scroll-progress')
    const setProgress = progress ? gsap.quickSetter(progress, 'scaleX') : null

    lenis.on('scroll', () => {
      ScrollTrigger.update()
      if (setProgress) setProgress(lenis.progress)
    })

    const ticker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      if (progress) gsap.set(progress, { scaleX: 0 })
    }
  }, [])

  return null
}
