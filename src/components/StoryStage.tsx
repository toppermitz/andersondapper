'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Chapter } from '@/lib/copy'

// Palco fixo do desktop: a foto do capítulo que cruza o meio da tela fica
// visível, e a linha do tempo embaixo marca onde a leitura está.
export default function StoryStage({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0)
  const [reached, setReached] = useState(0)

  useEffect(() => {
    const visible = new Set<number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.chapterIndex)
          if (entry.isIntersecting) visible.add(index)
          else visible.delete(index)
        })
        if (visible.size === 0) return
        const current = Math.min(...visible)
        setActive(current)
        setReached((previous) => Math.max(previous, current))
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    chapters.forEach((chapter, index) => {
      const section = document.getElementById(`ano-${chapter.year}`)
      if (!section) return
      section.dataset.chapterIndex = String(index)
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [chapters])

  return (
    <div className="story-stage">
      <div className="story-frame">
        {chapters.map((chapter, index) =>
          // Só monta a foto atual e a próxima; as anteriores ficam para a volta.
          index <= reached + 1 ? (
            <Image
              key={chapter.year}
              src={chapter.photo.src}
              alt={chapter.photo.alt}
              fill
              sizes="(min-width: 900px) 56vw, 1px"
              loading="lazy"
              aria-hidden={index === active ? undefined : true}
              className={index === active ? 'story-photo is-active' : 'story-photo'}
            />
          ) : null,
        )}
        <p className="story-count" aria-hidden="true">
          {String(active + 1).padStart(2, '0')}
          <span> / {String(chapters.length).padStart(2, '0')}</span>
        </p>
      </div>
      <nav className="timeline" aria-label="Linha do tempo">
        <ol>
          {chapters.map((chapter, index) => (
            <li key={chapter.year} data-past={index < active || undefined}>
              <a href={`#ano-${chapter.year}`} aria-current={index === active ? 'true' : undefined}>
                {chapter.year}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
