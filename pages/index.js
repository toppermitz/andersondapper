import Head from 'next/head'
import styles from '../styles/Home.module.css'
import md5 from 'md5'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anderson Dapper - Delphi Developer</title>
        <link rel="icon" href={GravatarAsFavicon(16)}/>
      </Head>

      <main className={styles.main}>
        <div className="App">
          <i
            style={{
              borderRadius: "50%",
              width: 128,
              height: 128,
              display: "block",
              background: 'url(' + GravatarAsFavicon(128) + ')',
              backgroundPosition: "center",
              backgroundSize: "auto"
            }}
            className="big cc visa icon"
          />
        </div>
        <h1 className={styles.title}>
          Anderson Dapper
        </h1>
        <h2 className={styles.h2}>
          Delphi Developer
        </h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
function GravatarAsFavicon(size) {
  let hashedEmail = md5('topper.mitz@gmail.com');
  return "http://www.gravatar.com/avatar/" + hashedEmail + "?s="+size;
}
