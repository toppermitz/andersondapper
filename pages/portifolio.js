import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Portifolio() {
  return (   
    <Layout>
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