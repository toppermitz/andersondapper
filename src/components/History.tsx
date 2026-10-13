'use client'

import { useEffect, useState } from 'react'
import EraFrame from '@/components/EraFrame'
import type { Chapter } from '@/lib/copy'

export default function History({ chapters }: { chapters: Chapter[] }) {
  const [year, setYear] = useState(chapters[0]?.year ?? '')

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>('[data-chapter]')]

    const update = () => {
      const line = 160
      let current = nodes[0]
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) current = node
      }
      const next = current?.dataset.year
      if (next) setYear(next)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="block history" id="historia" aria-label="História">
      <div className="year-col">
        <div className="year-sticky">
          <p className="year" data-current-year={year} aria-hidden="true">
            {year}
          </p>
          <div className="ph">foto: anos-1999-2026.jpg — sutil na coluna do ano</div>
        </div>
      </div>
      <div className="chapters">
        {chapters.map((chapter, index) => (
          <article key={chapter.title} data-chapter data-year={chapter.year}>
            <EraFrame src={chapter.photo.src} alt={chapter.photo.alt} priority={index === 0}>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
              {chapter.detail ? <div className="ph">detalhe: {chapter.detail}</div> : null}
            </EraFrame>
          </article>
        ))}
      </div>
    </section>
  )
}
