import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { init as initApm } from '@elastic/apm-rum'

function MyApp({ Component, pageProps }) {
  const apm = initApm({
    serviceName: "anderson-dapper",
    serverUrl: "https://acbb1e3ff16b40268668037b68ecf072.apm.us-west-2.aws.cloud.es.io:443",
    environment: "production",
    active: true,
  });
  const router = useRouter()
   useEffect(() => {
     const handleRouteChange = (url) => {
       gtag.pageview(url)
     }
     router.events.on('routeChangeComplete', handleRouteChange)
     return () => {
       router.events.off('routeChangeComplete', handleRouteChange)
     }
   }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp