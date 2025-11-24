'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const SECRET_COMMAND = 'sudo su'
const SHAKE_THRESHOLD = 15 // Sensibilidade do shake
const SHAKE_COUNT_THRESHOLD = 3 // Quantos shakes pra ativar

export function useEasterEgg() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const [, setTypedKeys] = useState('')

  // Refs pro shake detection
  const lastX = useRef(0)
  const lastY = useRef(0)
  const lastZ = useRef(0)
  const shakeCount = useRef(0)
  const lastShakeTime = useRef(0)

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true)

    // Glitch dura 1.5 segundos, depois revela
    setTimeout(() => {
      setIsGlitching(false)
      setIsUnlocked(true)
    }, 1500)
  }, [])

  // Keyboard detection (desktop)
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

  // Shake detection (mobile)
  useEffect(() => {
    const handleMotion = (e: DeviceMotionEvent) => {
      // Ignora se já desbloqueou ou tá glitchando
      if (isUnlocked || isGlitching) return

      const acceleration = e.accelerationIncludingGravity
      if (!acceleration) return

      const x = acceleration.x || 0
      const y = acceleration.y || 0
      const z = acceleration.z || 0

      const deltaX = Math.abs(x - lastX.current)
      const deltaY = Math.abs(y - lastY.current)
      const deltaZ = Math.abs(z - lastZ.current)

      // Detecta shake se movimento for maior que threshold
      if (deltaX + deltaY + deltaZ > SHAKE_THRESHOLD) {
        const now = Date.now()

        // Reset contador se passou mais de 1 segundo desde último shake
        if (now - lastShakeTime.current > 1000) {
          shakeCount.current = 0
        }

        shakeCount.current++
        lastShakeTime.current = now

        // Ativa se atingiu o número de shakes necessários
        if (shakeCount.current >= SHAKE_COUNT_THRESHOLD) {
          shakeCount.current = 0
          triggerGlitch()
        }
      }

      lastX.current = x
      lastY.current = y
      lastZ.current = z
    }

    // Só adiciona listener se DeviceMotionEvent existir (mobile)
    if (typeof DeviceMotionEvent !== 'undefined') {
      window.addEventListener('devicemotion', handleMotion)
    }

    return () => {
      if (typeof DeviceMotionEvent !== 'undefined') {
        window.removeEventListener('devicemotion', handleMotion)
      }
    }
  }, [isUnlocked, isGlitching, triggerGlitch])

  return { isUnlocked, isGlitching }
}
