import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Script src="https://aframe.io/releases/1.6.0/aframe.min.js" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
