'use client'

import { useState, useEffect, useCallback } from 'react'

const SECRET_COMMAND = 'sudo su'

export function useEasterEgg() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const [, setTypedKeys] = useState('')

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true)

    // Glitch dura 1.5 segundos, depois revela
    setTimeout(() => {
      setIsGlitching(false)
      setIsUnlocked(true)
    }, 1500)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignora se já desbloqueou ou tá glitchando
      if (isUnlocked || isGlitching) return

      // Ignora se tá digitando em input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      const key = e.key.toLowerCase()

      // Só aceita letras e espaço
      if (key.length === 1 || key === ' ') {
        setTypedKeys(prev => {
          const newTyped = (prev + key).slice(-SECRET_COMMAND.length)

          // Checa se bateu o comando
          if (newTyped === SECRET_COMMAND) {
            triggerGlitch()
            return ''
          }

          return newTyped
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isUnlocked, isGlitching, triggerGlitch])

  return { isUnlocked, isGlitching }
}
