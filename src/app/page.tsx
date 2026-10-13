import Link from 'next/link'
import HomeMotion from '@/components/HomeMotion'
import Photo from '@/components/Photo'
import ProfileLinks from '@/components/ProfileLinks'
import { heroLines, hojeLines, origemLines, vagosLines } from '@/lib/approved'
import { photos } from '@/lib/images'

const stops = [
  { at: 1999, label: 'Clipper' },
  { at: 2001, label: 'VB6' },
  { at: 2002, label: 'Delphi' },
  { at: 2004, label: 'PHP' },
  { at: 2016, label: 'NestJS · Next.js · PostgreSQL' },
]

export default function HomePage() {
  return (
    <HomeMotion>
      <section data-scene="hero" className="scene scene-photo">
        <div className="scene-media" data-zoom>
          <Photo
            src={photos.mesa.src}
            alt={photos.mesa.alt}
            sizes="100vw"
            priority
            blurDataURL={photos.mesa.blurDataURL}
            className="object-cover"
          />
        </div>
        <div className="scene-scrim" aria-hidden="true" />
        <div className="scene-copy scene-copy-end">
          <p className="hero-kicker reveal" data-line>
            {heroLines[0]}
          </p>
          <h1 className="hero-lockup">
            <span className="hero-name reveal" data-line>
              {heroLines[1]}
            </span>
            <span className="hero-name reveal" data-line>
              {heroLines[2]}
            </span>
          </h1>
          <p className="hero-sub reveal" data-line>
            {heroLines[3]}
          </p>
          <p className="hero-sub reveal" data-line>
            {heroLines[4]}
          </p>
        </div>
      </section>

      <section data-scene="stage" className="scene scene-paper">
        <div className="stage" data-stage>
          {origemLines.map((line) => (
            <p key={line} className="reveal-line" data-line>
              {line}
            </p>
          ))}
        </div>
      </section>

      <section data-scene="anos" className="scene scene-photo">
        <div className="scene-media" data-zoom>
          <Photo
            src={photos.anos.src}
            alt={photos.anos.alt}
            sizes="100vw"
            blurDataURL={photos.anos.blurDataURL}
            className="object-cover"
          />
        </div>
        <div className="scene-scrim scene-scrim-strong" aria-hidden="true" />
        <div className="anos-copy">
          <p data-counter className="year-display" aria-hidden="true">
            1999
          </p>
          <ol className="stops" aria-label="Trajetória">
            {stops.map((stop) => (
              <li key={stop.label} data-mark data-at={stop.at}>
                {stop.label}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-scene="stage" className="scene scene-ink">
        <div className="stage" data-stage>
          {hojeLines.map((line) => (
            <p key={line} className="reveal-line" data-line>
              {line}
            </p>
          ))}
        </div>
      </section>

      <section data-scene="stage" className="scene scene-paper">
        <div className="stage" data-stage>
          {vagosLines.map((line) => (
            <p key={line} className="reveal-line" data-line>
              {line}
            </p>
          ))}
        </div>
      </section>

      <section data-scene="close" className="scene scene-photo">
        <div className="scene-media" data-ambient>
          <Photo
            src={photos.serra.src}
            alt={photos.serra.alt}
            sizes="100vw"
            blurDataURL={photos.serra.blurDataURL}
            className="object-cover"
          />
        </div>
        <div className="scene-scrim" aria-hidden="true" />
        <div className="scene-copy scene-copy-end">
          <ProfileLinks className="close-links" />
          <p className="close-more">
            <Link href="/sobre" className="site-link">
              Sobre
            </Link>
          </p>
        </div>
      </section>
    </HomeMotion>
  )
}
