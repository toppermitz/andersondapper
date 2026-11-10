import EraFrame from '@/components/EraFrame'
import StoryStage from '@/components/StoryStage'
import type { Chapter } from '@/lib/copy'

const pad = (value: number) => String(value).padStart(2, '0')

export default function History({ chapters }: { chapters: Chapter[] }) {
  return (
    <div id="historia" className="story">
      <div className="story-chapters">
        {chapters.map((chapter, index) => (
          <EraFrame
            key={chapter.year}
            id={`ano-${chapter.year}`}
            marker={chapter.year}
            src={chapter.photo.src}
            alt={chapter.photo.alt}
            story
          >
            <p className="era-kicker" aria-hidden="true">
              <span>Capítulo {pad(index + 1)}</span>
              <span className="era-kicker-total">/ {pad(chapters.length)}</span>
            </p>
            <p className="era-year">{chapter.year}</p>
            <h2>{chapter.title}</h2>
            <div className="era-body">
              {chapter.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </EraFrame>
        ))}
      </div>
      <StoryStage chapters={chapters} />
    </div>
  )
}
