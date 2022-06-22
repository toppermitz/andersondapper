import Link from 'next/link'
import Image from 'next/image';
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
          <p>Nos últimos meses tenho estudado e trabalhado com diversas tecnologias.</p>
          <div className={styles.card}>
            <Link href="/" className={styles.link}>
              <a>Voltar</a>
            </Link>
            <div className={styles.grid}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt='docker'  width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt='vs-code' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='typescript' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg" alt='terraform' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" alt='ruby' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='postgresql' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt='php' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt='nodejs' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt='nextjs' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt='nginx' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" alt='nestjs' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongodb' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='materialui' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='jest' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt='go' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" alt='gitlab' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt='git' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" alt='eslint' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original-wordmark.svg" alt='electron' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt='aws' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg" alt='ansible' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt='bash' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg" alt='kubernetes' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" alt='redis' width={128} height={128}/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt='socketio' width={128} height={128}/>
            </div>
          </div>
        </div>
       
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