import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import SobreMotion from '@/components/SobreMotion'
import { photoAvailable, photos } from '@/lib/images'

const description =
  'Comecei a programar em 1999, com Clipper. O primeiro trabalho pago veio em 2001, em VB6, e em 2002 passei pro Delphi num sistema de varejo.'

export const metadata: Metadata = {
  title: 'Sobre',
  description,
  alternates: {
    canonical: '/sobre',
  },
  openGraph: {
    type: 'website',
    url: '/sobre',
    title: 'Sobre',
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sou Ânderson Dapper, desenvolvedor de software em Novo Hamburgo, RS.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre',
    description,
    images: ['/og-image.png'],
  },
}

const phases = [
  {
    year: '1999',
    text: 'Comecei a programar em 1999, com Clipper. O primeiro trabalho pago veio em 2001, em VB6, e em 2002 passei pro Delphi num sistema de varejo. Nunca mais larguei.',
  },
  {
    year: '2004',
    text: 'Em 2004 migrei um sistema escolar de Delphi para PHP. Foi meu primeiro contato sério com a web.',
  },
  {
    year: '2005',
    text: 'Em 2005 abri uma loja de computadores com um colega do técnico. Computador doméstico estava em alta e parecia boa ideia. Não estava preparado: o aluguel não esperava, as vendas não eram constantes e eu não sabia separar o dinheiro da empresa do meu. O sócio saiu, as vendas caíram e as contas subiram. Fechei em 2006.',
  },
  {
    year: '',
    text: 'Voltei pro desenvolvimento. Passei por varejo de novo, sistemas contábeis e fiscais em Delphi, um período num banco trabalhando com PHP e alguns anos em sistemas para indústria.',
  },
  {
    year: '2016',
    text: 'Desde maio de 2016 estou na mesma empresa. Entrei como desenvolvedor pleno e hoje sou tech lead e analista de sistemas, o que na prática quer dizer que faço um pouco de tudo: arquitetura, código, infra e o que mais aparecer.',
  },
  {
    year: '',
    text: 'Tenho o hábito de estudar coisas que não têm nada a ver com o meu trabalho do momento. Mais de uma vez elas viraram exatamente o que eu precisava depois.',
  },
]

export default function SobrePage() {
  const croche = photoAvailable(photos.croche.src)

  return (
    <SobreMotion>
      <article className="px-6 pb-20 pt-24 md:px-16">
        <h1 className="text-sm font-medium text-[var(--muted)]">Sobre</h1>

        <div className="mt-10 flex flex-col">
          {phases.map((phase) => (
            <section key={phase.text.slice(0, 24)} className="flex min-h-[78vh] flex-col justify-center py-16">
              {phase.year ? (
                <p className="year-mask">
                  <span data-year className="year-figure">
                    {phase.year}
                  </span>
                </p>
              ) : null}
              <p className="phase-copy">{phase.text}</p>
            </section>
          ))}
        </div>

        <h2 className="mt-8 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.045em]">
          Algumas coisas soltas:
        </h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          <li data-card className="card">
            <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-semibold tracking-[-0.05em]">2019</p>
            <p>
              Em 2019 falei na trilha Delphi do TDC em Porto Alegre, sobre{' '}
              <a href="https://github.com/toppermitz/Linux-TDC2019" className="site-link">
                rodar Delphi como daemon no Linux
              </a>
              .
            </p>
          </li>
          <li data-card className="card">
            {croche ? (
              <div className="photo-frame relative mb-2 aspect-[4/3] w-full max-w-56">
                <Photo
                  src={photos.croche.src}
                  alt={photos.croche.alt}
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            ) : null}
            <p>
              Fiz o{' '}
              <a href="https://croche-taupe.vercel.app/" className="site-link">
                Fio a fio
              </a>
              , um editor visual de receitas de crochê, pra minha esposa, Renata.
            </p>
          </li>
          <li data-card className="card">
            <p>Hoje contribuo com um projeto open source de pentest autônomo com agentes de IA.</p>
          </li>
        </ul>
      </article>
    </SobreMotion>
  )
}
