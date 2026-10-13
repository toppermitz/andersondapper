import Image from 'next/image'
import type { ReactNode } from 'react'

export default function EraFrame({
  src,
  alt,
  priority = false,
  children,
}: {
  src: string
  alt: string
  priority?: boolean
  children: ReactNode
}) {
  return (
    <div className="era">
      <div className="era-media">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 799px) calc(100vw - 8.5rem), 62vw"
          priority={priority}
          className="era-photo"
        />
        <div className="era-scrim" aria-hidden="true" />
      </div>
      <div className="era-copy">{children}</div>
    </div>
  )
}
