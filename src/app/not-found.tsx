import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="block not-found">
      <p className="eyebrow">Erro 404</p>
      <h1>Essa página não existe.</h1>
      <p>O endereço ficou para trás. A história continua na página inicial.</p>
      <Link href="/" className="profile-link">
        Voltar ao início
      </Link>
    </section>
  )
}
