'use client'

import { useEffect, useState } from 'react'

export default function TimelineNav({ years }: { years: string[] }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = years
      .map((year) => document.getElementById(`ano-${year}`))
      .filter((section): section is HTMLElement => section !== null)
    const visible = new Set<string>()

    // Só conta a seção que cruza a linha do meio da tela.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const year = entry.target.id.replace('ano-', '')
          if (entry.isIntersecting) visible.add(year)
          else visible.delete(year)
        })
        setActive(years.find((year) => visible.has(year)) ?? null)
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [years])

  return (
    <nav className="timeline" aria-label="Linha do tempo" data-visible={active !== null}>
      <ol>
        {years.map((year) => (
          <li key={year}>
            <a
              href={`#ano-${year}`}
              aria-current={active === year ? 'true' : undefined}
              tabIndex={active === null ? -1 : undefined}
            >
              <span className="timeline-year">{year}</span>
              <span className="timeline-tick" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
