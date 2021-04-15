import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import moment from 'moment'

export default function Home({lastUpdate}) {
  return (
    <Layout dataString={lastUpdate}>
      <div className={styles.card}><p>Desenvolvedor Sênior na <a href="https://serverinfo.com.br/">Server Softwares para Varejo</a>.</p></div>
    </Layout>
  )
}
export async function getStaticProps(context) {
  const dataString = moment(new Date()).utcOffset('-03:00').format('DD/MM/YYYY HH:mm:ss')
  return {
    props: {
      lastUpdate : dataString
    }, // will be passed to the page component as props
  }
}

