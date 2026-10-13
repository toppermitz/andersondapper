import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="block not-found">
      <h1>Essa página não existe.</h1>
      <p>O endereço ficou para trás. A história continua na página inicial.</p>
      <Link href="/">Voltar ao início</Link>
    </section>
  )
}
