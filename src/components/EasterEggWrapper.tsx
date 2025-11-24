'use client'

import { useEffect, useRef } from 'react'
import { useEasterEgg } from '@/hooks/useEasterEgg'
import GlitchOverlay from './GlitchOverlay'
import SemFiltro from './SemFiltro'

export default function EasterEggWrapper() {
  const { isUnlocked, isGlitching } = useEasterEgg()
  const hasScrolled = useRef(false)

  useEffect(() => {
    // Scroll pra seção quando desbloquear (só uma vez)
    if (isUnlocked && !hasScrolled.current) {
      hasScrolled.current = true

      // Pequeno delay pra dar tempo do componente renderizar
      setTimeout(() => {
        const section = document.getElementById('sem-filtro')
        if (section) {
          const yOffset = -20 // Offset pra não ficar colado no topo
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [isUnlocked])

  return (
    <>
      <GlitchOverlay isActive={isGlitching} />
      <SemFiltro isVisible={isUnlocked} />
    </>
  )
}
