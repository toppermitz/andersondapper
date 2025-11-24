'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface GlitchOverlayProps {
  isActive: boolean
}

export default function GlitchOverlay({ isActive }: GlitchOverlayProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isActive || !mounted) return null

  const overlay = (
    <>
      {/* Overlay escuro */}
      <div
        className="bg-black/90 animate-pulse"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999
        }}
      />

      {/* Efeito de scanlines */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          opacity: 0.3,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)',
          animation: 'scanlines 0.1s linear infinite'
        }}
      />

      {/* Texto glitchado */}
      <div
        className="flex items-center justify-center"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999
        }}
      >
        <div className="text-center">
          <p
            className="text-green-500 font-mono text-2xl sm:text-4xl font-bold mb-4"
            style={{
              textShadow: '2px 0 #ff0000, -2px 0 #00ffff',
              animation: 'glitch-text 0.1s infinite'
            }}
          >
            $ sudo su
          </p>
          <p
            className="text-green-400 font-mono text-lg sm:text-xl"
            style={{ animation: 'blink 0.5s infinite' }}
          >
            root access granted_
          </p>
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-8 bg-green-500"
                style={{
                  animation: `bar-wave 0.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS das animações */}
      <style jsx global>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        @keyframes glitch-text {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes bar-wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.5); }
        }
      `}</style>
    </>
  )

  return createPortal(overlay, document.body)
}
