import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { init as initApm } from '@elastic/apm-rum'
import { NextWebVitalsMetric } from 'next/app'


function MyApp({ Component, pageProps }) {
  const apm = initApm({
    serviceName: "anderson-dapper",
    serverUrl: "https://a6a8f34ee40e49bb95603e82f8b5e4ce.apm.us-west-2.aws.cloud.es.io:443",
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


export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp