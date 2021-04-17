import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import moment from 'moment'

export default function Home({lastUpdate}) {
  return (
    <Layout dataString={lastUpdate}>
      <div className={styles.card}>
        <p>Apaixonado por tecnologia, games e carros. Desde a adolescência brinquei com programação. Meu primeiro contato com esse mundo foi com Clipper.</p>
        <p>Em 2001 comecei a trabalhar com um tal Delphi, que rapidamente se tornou a minha principal ferramenta de trabalho.</p>
        <p>Atualmente sou desenvolvedor sênior na <a href="https://serverinfo.com.br/">Server Softwares para Varejo</a>.</p>
        <br />
        <div>Contato:<br />anderson at andersondapper.com.br</div>
        </div>
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

