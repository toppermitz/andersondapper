import EraFrame from '@/components/EraFrame'
import type { Chapter } from '@/lib/copy'

export default function History({ chapters }: { chapters: Chapter[] }) {
  return (
    <div id="historia">
      {chapters.map((chapter, index) => (
        <EraFrame
          key={chapter.title}
          src={chapter.photo.src}
          alt={chapter.photo.alt}
          year={chapter.year}
          priority={index === 0}
        >
          <h2>{chapter.title}</h2>
          <p>{chapter.body}</p>
        </EraFrame>
      ))}
    </div>
  )
}
