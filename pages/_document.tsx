import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag';
class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <script src="https://bshopatualizacao.s3.us-west-2.amazonaws.com/elastic-apm-rum.umd.min.js" crossorigin></script>
    <script>
      elasticApm.init({
        serviceName: 'anderson-dapper',
        serverUrl: 'https://acbb1e3ff16b40268668037b68ecf072.apm.us-west-2.aws.cloud.es.io:443',
        environment: 'production',
      })
    </script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
