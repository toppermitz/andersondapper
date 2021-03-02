import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home({lastUpdate}) {
  return (
    <Layout dataString={lastUpdate}>
      <Link href="/portifolio">
        <a className={styles.card}>
          <h3>Portifolio &rarr;</h3>
          <p>Conheça alguns projetos do qual participo</p>
        </a>
      </Link>
      <Link href="/sobre">
        <a className={styles.card}>
          <h3>Sobre &rarr;</h3>
          <p>Conheça um pouco mais sobre meu trabalho.</p>
        </a>
      </Link>
    </Layout>
  )
}
export async function getStaticProps(context) {
  const data = new Date()
  const dataString = data.toLocaleString()
  return {
    props: {
      lastUpdate : dataString
    }, // will be passed to the page component as props
  }
}

