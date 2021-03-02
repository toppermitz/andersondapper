import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { Card, Container, Row, Col, CardDeck } from 'react-bootstrap'

export default function Home({lastUpdate}) {
  return (
    <Layout dataString={lastUpdate}>
      <CardDeck>
        <Card >
          <Card.Title>
            <Link href="/sobre">
              <a className={styles.card}>
                <h5>Sobre &rarr;</h5>
              </a>
            </Link>
          </Card.Title>
          <Card.Body>
            <p>Conheça um pouco mais sobre meu trabalho.</p>
          </Card.Body>
        </Card>
      </CardDeck>
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

