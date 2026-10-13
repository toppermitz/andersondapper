import Link from 'next/link'
import HomeMotion from '@/components/HomeMotion'
import Logo from '@/components/Logo'
import Photo from '@/components/Photo'
import ProfileLinks from '@/components/ProfileLinks'
import SplitText from '@/components/SplitText'
import { photoAvailable, photos } from '@/lib/images'

const origem =
  'Programo desde 1999, quando comecei com Clipper aos 14 anos. De lá pra cá trabalhei com varejo, sistemas escolares, contabilidade, fiscal, banco e indústria, quase sempre em Delphi e, nos últimos anos, cada vez mais na web.'

const hoje =
  'Hoje sou tech lead numa empresa de software. Lidero a reescrita de um sistema legado grande, de Delphi para NestJS, Next.js e PostgreSQL, e acabo cuidando de boa parte da infraestrutura também.'

const vagos =
  'Nas horas vagas estudo IA e segurança e uso o que aprendo pra resolver problemas meus.'

const marks = [
  { at: 1999, label: 'Clipper', caption: '1999' },
  { at: 2001, label: 'VB6', caption: '2001' },
  { at: 2002, label: 'Delphi', caption: '2002' },
  { at: 2004, label: 'PHP', caption: '2004' },
  { at: 2016, label: 'web', caption: 'NestJS · Next.js' },
]

export default function HomePage() {
  const mesa = photoAvailable(photos.mesa.src)
  const anos = photoAvailable(photos.anos.src)
  const serra = photoAvailable(photos.serra.src)

  return (
    <HomeMotion>
      <section
        data-hero
        className="grid min-h-dvh items-center gap-10 px-6 pb-16 pt-24 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:px-16 md:pt-28"
      >
        <div>
          <Logo className="mb-8 h-16 sm:mb-10 sm:h-24" />
          <h1>
            <span className="sr-only">
              Sou Ânderson Dapper, desenvolvedor de software em Novo Hamburgo, RS.
            </span>
            <span aria-hidden="true">
              <span className="hero-kicker">Sou</span>
              <span className="hero-name">
                <span className="block">Ânderson</span>
                <span className="block">Dapper,</span>
              </span>
              <span className="hero-line">
                desenvolvedor de software em Novo Hamburgo, RS.
              </span>
            </span>
          </h1>
        </div>
        {mesa ? (
          <div className="photo-frame relative aspect-[4/3] md:aspect-[5/4]">
            <div className="absolute inset-[-6%]" data-hero-media>
              <Photo
                src={photos.mesa.src}
                alt={photos.mesa.alt}
                sizes="(max-width: 800px) 100vw, 46vw"
                priority
                blurDataURL={photos.mesa.blurDataURL}
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </section>

      <section data-pin className="flex h-dvh items-center px-6 pt-16 md:px-16">
        <p className="chapter-copy">
          <SplitText text={origem} />
        </p>
      </section>

      <section data-pin className="flex h-dvh flex-col justify-between px-6 pb-10 pt-24 md:px-16 md:pb-14">
        <p data-counter className="year-display" aria-hidden="true">
          1999
        </p>
        {anos ? (
          <div className="photo-dissolve relative mx-auto min-h-[18vh] w-full max-w-5xl flex-1" data-parallax>
            <Photo
              src={photos.anos.src}
              alt={photos.anos.alt}
              sizes="(max-width: 800px) 100vw, 80vw"
              blurDataURL={photos.anos.blurDataURL}
              className="object-contain"
            />
          </div>
        ) : null}
        <ol className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5" aria-label="Trajetória">
          {marks.map((mark) => (
            <li key={mark.label} data-mark data-at={mark.at} className="spec">
              <p className="text-[clamp(1.45rem,2.6vw,2.35rem)] font-semibold tracking-[-0.04em]">
                {mark.label}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{mark.caption}</p>
            </li>
          ))}
        </ol>
      </section>

      <section data-pin className="flex h-dvh items-center bg-[var(--elevated)] px-6 pt-16 md:px-16">
        <p className="chapter-copy">
          <SplitText text={hoje} />
        </p>
      </section>

      <section data-pin className="flex h-dvh items-center px-6 pt-16 md:px-16">
        <p className="chapter-copy">
          <SplitText text={vagos} />
        </p>
      </section>

      <section className="px-6 pb-8 pt-24 md:px-16">
        <ProfileLinks className="close-links" />
        <p className="mt-8 text-sm text-[var(--muted)]">
          <Link href="/sobre" className="site-link">
            Sobre
          </Link>
        </p>
        {serra ? (
          <div className="ambient-photo relative mt-16 aspect-[16/8] w-full">
            <div className="absolute inset-0" data-ambient>
              <Photo
                src={photos.serra.src}
                alt={photos.serra.alt}
                sizes="100vw"
                blurDataURL={photos.serra.blurDataURL}
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </section>
    </HomeMotion>
  )
}
