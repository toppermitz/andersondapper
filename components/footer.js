import styles from '../styles/Home.module.css'


export default function Footer({dateString}){
  return (<footer className={styles.footer}>
            <div><p>Última atualização {dateString}</p></div>
            {/*<div><a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by{' '}
                  <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </div> */}
          </footer>
  )}
  