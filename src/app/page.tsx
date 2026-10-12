import Link from 'next/link'
import ProfileLinks from '@/components/ProfileLinks'

export default function HomePage() {
  return (
    <article className="text-[1.125rem] leading-[1.75] text-stone-800 dark:text-stone-200">
      <h1 className="text-pretty text-[1.65rem] font-medium leading-snug tracking-[-0.02em] text-stone-950 dark:text-stone-50 sm:text-[1.85rem]">
        Sou Ânderson Dapper, desenvolvedor de software em Novo Hamburgo, RS.
      </h1>

      <p className="mt-8 text-pretty">
        Programo desde 1999, quando comecei com Clipper aos 14 anos. De lá pra cá trabalhei com varejo, sistemas escolares, contabilidade, fiscal, banco e indústria, quase sempre em Delphi e, nos últimos anos, cada vez mais na web.
      </p>

      <p className="mt-6 text-pretty">
        Hoje sou tech lead numa empresa de software. Lidero a reescrita de um sistema legado grande, de Delphi para NestJS, Next.js e PostgreSQL, e acabo cuidando de boa parte da infraestrutura também.
      </p>

      <p className="mt-6 text-pretty">
        Nas horas vagas estudo IA e segurança e uso o que aprendo pra resolver problemas meus.
      </p>

      <ProfileLinks className="mt-10" />

      <p className="mt-8 text-sm text-stone-500 dark:text-stone-400">
        <Link href="/sobre" className="site-link">
          Sobre
        </Link>
      </p>
    </article>
  )
}
