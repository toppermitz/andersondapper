import type { Metadata } from 'next'

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

export default function SobrePage() {
  return (
    <article className="text-[1.125rem] leading-[1.75] text-stone-800 dark:text-stone-200">
      <h1 className="text-sm font-medium text-stone-500 dark:text-stone-400">Sobre</h1>

      <p className="mt-8 text-pretty">
        Comecei a programar em 1999, com Clipper. O primeiro trabalho pago veio em 2001, em VB6, e em 2002 passei pro Delphi num sistema de varejo. Nunca mais larguei.
      </p>

      <p className="mt-6 text-pretty">
        Em 2004 migrei um sistema escolar de Delphi para PHP. Foi meu primeiro contato sério com a web.
      </p>

      <p className="mt-6 text-pretty">
        Em 2005 abri uma loja de computadores com um colega do técnico. Computador doméstico estava em alta e parecia boa ideia. Não estava preparado: o aluguel não esperava, as vendas não eram constantes e eu não sabia separar o dinheiro da empresa do meu. O sócio saiu, as vendas caíram e as contas subiram. Fechei em 2006.
      </p>

      <p className="mt-6 text-pretty">
        Voltei pro desenvolvimento. Passei por varejo de novo, sistemas contábeis e fiscais em Delphi, um período num banco trabalhando com PHP e alguns anos em sistemas para indústria.
      </p>

      <p className="mt-6 text-pretty">
        Desde maio de 2016 estou na mesma empresa. Entrei como desenvolvedor pleno e hoje sou tech lead e analista de sistemas, o que na prática quer dizer que faço um pouco de tudo: arquitetura, código, infra e o que mais aparecer.
      </p>

      <p className="mt-6 text-pretty">
        Tenho o hábito de estudar coisas que não têm nada a ver com o meu trabalho do momento. Mais de uma vez elas viraram exatamente o que eu precisava depois.
      </p>

      <p className="mt-6 text-pretty">Algumas coisas soltas:</p>

      <ul className="mt-4 list-disc space-y-3 pl-5 text-pretty">
        <li>
          Em 2019 falei na trilha Delphi do TDC em Porto Alegre, sobre{' '}
          <a
            href="https://github.com/toppermitz/Linux-TDC2019"
            className="site-link"
          >
            rodar Delphi como daemon no Linux
          </a>
          .
        </li>
        <li>
          Fiz o{' '}
          <a href="https://croche-taupe.vercel.app/" className="site-link">
            Fio a fio
          </a>
          , um editor visual de receitas de crochê, pra minha esposa, Renata.
        </li>
        <li>
          Hoje contribuo com um projeto open source de pentest autônomo com agentes de IA.
        </li>
      </ul>
    </article>
  )
}
