import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Portifolio({lastUpdate}) {
  return (   
    <Layout dataString={lastUpdate}>
      <div>
        <h1 className={styles.description}>Portifolio</h1>
        <div>
          <p>Texto</p>
        </div>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </div>
    </Layout>
)}
export async function getStaticProps(context) {
  const data = new Date()
  const dataString = data.toLocaleString()
  return {
    props: {
      lastUpdate : dataString
    }, // will be passed to the page component as props
  }
}