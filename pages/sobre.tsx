import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { GetStaticProps } from 'next'

export default function Portifolio({lastUpdate}) {
  return (   
    <Layout dataString={lastUpdate}>
      <div>
        <h1 className={styles.description}>Sobre</h1>
        <div>
          <p>Sou programador Delphi desde 2001.</p>
          <p>Atualmente sou desenvolvedor sênior na <Link href="https://www.serverinfo.com.br"><a>Server Softwares para Varejo</a></Link> em Novo Hamburgo/RS</p>
        </div>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </div>
    </Layout>
)}

export const getStaticProps: GetStaticProps = async () => {
  const dataString = moment(new Date()).utcOffset('-03:00').format('DD/MM/YYYY HH:mm:ss')
  return {
    props: {
      lastUpdate : dataString
    },
  }
}