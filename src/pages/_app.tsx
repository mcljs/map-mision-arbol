import {StickyNote} from 'components/StickyNote'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import GlobalStyles from 'styles/global'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta
          name="description"
          content="Sitior Recuperados por la Fundación Misión Arbol"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#29d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
<StickyNote>
        <p>
          Regresa a la pagina web  <a href="https://www.mision-arbol.ml/">Fundación Misión Árbol</a>
        </p>
      </StickyNote>
    </>
  )
}

export default App
