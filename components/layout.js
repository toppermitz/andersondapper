import Head from 'next/head'
import styles from '../styles/Home.module.css'
import md5 from 'md5'
import Image from 'next/image'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo'

function GravatarAsFavicon(size) {
  let hashedEmail = md5('topper.mitz@gmail.com');
  return "https://www.gravatar.com/avatar/" + hashedEmail + "?s="+size;
}
export default function Layout({ children,
                                 dataString, 
                                 title= '' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anderson Dapper - Delphi Developer</title>
        <link rel="icon" href='/profile_300.jpg'/>
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
              url: '/profile_300.jpg',
              width: 256,
              height: 256,
              alt: 'Foto de Anderson Dapper',
            }
          ],
        }}
      />


      <main className={styles.main}>
        <div className="App">
          <Image src='/profile_300.jpg' width={256} height={256} className={styles.borderCircle}/>
        </div>
        <h1 className={styles.title}>
          Anderson Dapper
        </h1>
        <h2 className={styles.h2}>
          Delphi Developer
        </h2>
        <div className={styles.grid}>
          {children}
        </div>

      </main>
      <Footer dateString={dataString}/>
      
    </div>
  )
}