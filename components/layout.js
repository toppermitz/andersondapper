import Head from 'next/head'
import styles from '../styles/Home.module.css'
import md5 from 'md5'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import { Container, Row, Col, Image, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function GravatarAsFavicon(size) {
  let hashedEmail = md5('topper.mitz@gmail.com');
  return "https://www.gravatar.com/avatar/" + hashedEmail + "?s="+size;
}
export default function Layout({ children,
                                 dataString, 
                                 title= '' }) {
  return (
    <Container fluid>
    <Head>
        <title>Anderson Dapper - Delphi Developer</title>
        <link rel="icon" href={GravatarAsFavicon(16)}/>
      </Head>

      <NextSeo
        title="Anderson Dapper - Delphi Developer"
        description="Desenvolvimento em Delphi"
        canonical="https://www.andersondapper.com.br/"
        openGraph={{
          url: 'https://www.andersondapper.com.br/',
          title: 'Anderson Dapper - Delphi Developer',
          description: 'Desenvolvimento em Delphi',
          images: [
            {
              url: GravatarAsFavicon(256),
              width: 256,
              height: 256,
              alt: 'Foto de Anderson Dapper',
            }
          ],
        }}
      />
      <Row className={'pt-2 pb-2 bg-light'}>
        <Col xs={4} md={2}>
            <Image src={GravatarAsFavicon(100)} alt={'Foto de Anderson Dapper'} roundedCircle/>
        </Col>
        <Col xs={8}>
          <Row><h1></h1></Row>
          <Row><h1></h1></Row>
          <Row><h1></h1></Row>
          <Row><h4>Anderson Dapper</h4></Row>
          <Row><h6>Delphi Developer</h6></Row>
        </Col>
      </Row>
      <Row className={'pt-3'}>
        <Col>{children}</Col>
      </Row>
      <Row className={'pt-3'}>
        <Col>
          <Footer dateString={dataString}/>
        </Col>
      </Row>
    </Container>
  )
}