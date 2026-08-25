'use client'

import { createPortal } from 'react-dom'

interface GlitchOverlayProps {
  isActive: boolean
}

export default function GlitchOverlay({ isActive }: GlitchOverlayProps) {
  if (!isActive || typeof document === 'undefined') return null

  const status = (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-4 bottom-5 z-[60] flex justify-center sm:bottom-8"
    >
      <div className="animate-scale-in flex w-full max-w-sm items-center gap-3 rounded-2xl border border-emerald-500/40 bg-slate-950 px-4 py-3 text-left text-white shadow-2xl shadow-emerald-950/30">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 font-mono text-lg font-bold text-emerald-400"
        >
          $
        </span>
        <div className="min-w-0">
          <p className="font-mono text-sm font-bold text-emerald-400">
            sudo su
          </p>
          <p className="text-sm text-slate-300">
            Acesso liberado. Revelando o modo sem filtro…
          </p>
        </div>
      </div>
    </div>
  )

  return createPortal(status, document.body)
}
