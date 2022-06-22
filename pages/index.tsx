import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Tecnologia from '../components/tecnologia'

type Props = {
  lastUpdate: string;
}

const indexPage = (props: Props) => {
  return (
    <Layout dataString={props.lastUpdate}>
      <h2>Algumas tecnologias que domino:</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <Tecnologia imgUrl='amazonwebservices/amazonwebservices-original-wordmark.svg' imgAlt='Amazon Web Service' description='Utilização e configuração de cloud para deploy de aplicações.'/>
          <Tecnologia imgUrl='kubernetes/kubernetes-plain-wordmark.svg' imgAlt='Kubernetes' description='Utilização e configuração deploy de aplicações web e microserviços.'/>
          <Tecnologia imgUrl='nestjs/nestjs-plain-wordmark.svg'imgAlt='nestjs' description='Desenvolvimento de API e Backends'/>
          <Tecnologia imgUrl='react/react-original-wordmark.svg' imgAlt='' description='Criação de frontends' />
          <Tecnologia imgUrl='nextjs/nextjs-original-wordmark.svg'imgAlt='nextjs' description='Criação de frontends'/>
          <Tecnologia imgUrl='docker/docker-original-wordmark.svg' imgAlt='docker' description='Criação de imagens, deploy de containers e ambientes de desenvolvimento.'/>
          
          <Tecnologia imgUrl='typescript/typescript-original.svg' imgAlt='typescript' description='Desenvolvimento de Frontend e Backend.'/>
          <Tecnologia imgUrl='terraform/terraform-original-wordmark.svg' imgAlt='terraform' description='Provisionamento de infra estrutura dentro da Clouds.' />
          <Tecnologia imgUrl='postgresql/postgresql-original-wordmark.svg' imgAlt='postgresql' description='' />
          <Tecnologia imgUrl='mongodb/mongodb-original-wordmark.svg' imgAlt='Mongo DB' description='' /> 
          
          
          <Tecnologia imgUrl='gitlab/gitlab-original-wordmark.svg'imgAlt='gitlab' description=''/>
          
          
        </div>
      </div>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps =  async (context) => {
  return { props: { lastUpdate : moment(new Date()).utcOffset('-03:00').format('DD/MM/YYYY HH:mm:ss') } }
}

export default indexPage;