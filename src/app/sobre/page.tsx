import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import SobreMotion from '@/components/SobreMotion'
import { sobrePhases } from '@/lib/approved'
import { photos } from '@/lib/images'
import { siteDescription, siteTitle } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sobre',
  description: siteDescription,
  alternates: {
    canonical: '/sobre',
  },
  openGraph: {
    type: 'website',
    url: '/sobre',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anderson Dapper. Desenvolvedor Full Stack.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
}

export default function SobrePage() {
  return (
    <SobreMotion>
      {sobrePhases.map((phase, index) => (
        <section key={phase.lines[0]} data-scene="chapter" className={`scene scene-${phase.tone}`}>
          <div className="chapter">
            {phase.year ? (
              <p className="year-display" aria-hidden="true">
                {phase.year}
              </p>
            ) : null}
            <div className="stage" data-stage>
              {phase.lines.map((line, lineIndex) =>
                index === 0 && lineIndex === 0 ? (
                  <h1 key={line} className="reveal-line" data-line>
                    {line}
                  </h1>
                ) : (
                  <p key={line} className="reveal-line" data-line>
                    {line}
                  </p>
                ),
              )}
            </div>
          </div>
        </section>
      ))}

      <section data-scene="soltas" className="scene scene-ink soltas">
        <div className="soltas-layout">
          <h2 className="soltas-title">Algumas coisas soltas:</h2>
          <div className="soltas-track" data-track>
            <article className="soltas-panel" data-panel>
              <p className="soltas-index" aria-hidden="true">
                2019
              </p>
              <p className="soltas-copy">
                Em 2019 falei na trilha Delphi do TDC em Porto Alegre, sobre{' '}
                <a href="https://github.com/toppermitz/Linux-TDC2019" className="site-link">
                  rodar Delphi como daemon no Linux
                </a>
                .
              </p>
            </article>
            <article className="soltas-panel" data-panel>
              <div className="croche-inline">
                <div className="croche-photo">
                  <Photo
                    src={photos.croche.src}
                    alt={photos.croche.alt}
                    sizes="180px"
                    blurDataURL={photos.croche.blurDataURL}
                    className="object-cover"
                  />
                </div>
                <p className="soltas-copy">
                  Fiz o{' '}
                  <a href="https://croche-taupe.vercel.app/" className="site-link">
                    Fio a fio
                  </a>
                  , um editor visual de receitas de crochê, pra minha esposa, Renata.
                </p>
              </div>
            </article>
            <article className="soltas-panel" data-panel>
              <p className="soltas-copy">
                Hoje contribuo com um projeto open source de pentest autônomo com agentes de IA.
              </p>
            </article>
          </div>
        </div>
      </section>
    </SobreMotion>
  )
}
