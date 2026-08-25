'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const SECRET_COMMAND = 'sudo su'
const FEEDBACK_DURATION_MS = 450

export function useEasterEgg() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const typedKeys = useRef('')
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const finishUnlock = useCallback(() => {
    if (unlockTimer.current) {
      clearTimeout(unlockTimer.current)
      unlockTimer.current = null
    }

    setIsGlitching(false)
    setIsUnlocked(true)
  }, [])

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true)
    unlockTimer.current = setTimeout(finishUnlock, FEEDBACK_DURATION_MS)
  }, [finishUnlock])

  useEffect(() => {
    return () => {
      if (unlockTimer.current) clearTimeout(unlockTimer.current)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isUnlocked) return

      if (isGlitching) {
        if (event.key === 'Escape') {
          event.preventDefault()
          finishUnlock()
        }
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return

      const target = event.target
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement &&
          (target.isContentEditable || Boolean(target.closest('[contenteditable="true"]'))))
      ) {
        return
      }

      const key = event.key.toLowerCase()
      if (key.length !== 1) return

      typedKeys.current = (typedKeys.current + key).slice(-SECRET_COMMAND.length)

      if (typedKeys.current === SECRET_COMMAND) {
        typedKeys.current = ''
        triggerGlitch()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [finishUnlock, isGlitching, isUnlocked, triggerGlitch])

  return { isUnlocked, isGlitching }
}
