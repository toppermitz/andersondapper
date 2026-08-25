'use client'

import { useEffect, useRef } from 'react'
import { useEasterEgg } from '@/hooks/useEasterEgg'
import GlitchOverlay from './GlitchOverlay'
import SemFiltro from './SemFiltro'

export default function EasterEggWrapper() {
  const { isUnlocked, isGlitching } = useEasterEgg()
  const hasScrolled = useRef(false)

  useEffect(() => {
    if (!isUnlocked || hasScrolled.current) return

    hasScrolled.current = true
    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById('sem-filtro')
      const nav = document.querySelector('nav[aria-label="Navegação principal"]')

      if (!section) return

      const navOffset = nav?.getBoundingClientRect().bottom ?? 0
      let sectionOffset = 0
      let offsetElement: HTMLElement | null = section

      while (offsetElement) {
        sectionOffset += offsetElement.offsetTop
        offsetElement = offsetElement.offsetParent as HTMLElement | null
      }

      const top = sectionOffset - navOffset - 16
      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior

      root.style.scrollBehavior = 'auto'
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' })
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isUnlocked])

  return (
    <>
      <GlitchOverlay isActive={isGlitching} />
      <SemFiltro isVisible={isUnlocked} />
    </>
  )
}
