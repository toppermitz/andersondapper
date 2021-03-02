import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import moment from 'moment'

export default function Home({lastUpdate}) {
  return (
    <Layout dataString={lastUpdate}>
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
  const dataString = moment(new Date()).format('DD/MM/YYYY HH:mm:ss')
  return {
    props: {
      lastUpdate : dataString
    }, // will be passed to the page component as props
  }
}

