import Head from 'next/head'
import styles from '../styles/Home.module.css'
import md5 from 'md5'
import Image from 'next/image'
import Footer from './footer'
import { NextSeo } from 'next-seo'

export const GravatarAsFavicon = (options : {size: number, email: string}) => {
  let hashedEmail = md5(options.email);
  return "https://www.gravatar.com/avatar/" + hashedEmail + "?s="+options.size.toString();
}

interface LayoutProps {
  children?: React.ReactNode;
  dataString: string;
  title?: string;
}

const Layout = ({ dataString, 
                  title = 'Anderson Dapper - Software Developer',
                  children
                }:LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href='/profile_300.jpg'/>
      </Head>

      <NextSeo
        title="Anderson Dapper"
        description="Desenvolvedor de Software"
        canonical="https://andersondapper.dev/"
        openGraph={{
          url: 'https://andersondapper.dev/',
          title: 'Anderson Dapper',
          description: 'Desenvolvedor de Software',
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
        <div className={styles.Quadro}></div>
        <div className={styles.App}>
          <Image src='/profile_300.jpg' alt={'Foto de Anderson Dapper'} width={256} height={256} className={styles.borderCircle}/>
        </div>
        <h1 className={styles.title}>
          Anderson Dapper
        </h1>
        <div className={styles.h2}>
          Software Developer
        </div>
        
        <div className={styles.grid}>
          {children}
        </div>

      </main>
      <Footer dateString={dataString}/>
      
    </div>
  )
}

export default Layout;