import {StickyNote} from 'components/StickyNote'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sitios Recupedos | Misión Árbol</title>
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
      <GlobalStyles />
      <Component {...pageProps} />
<StickyNote>
        <p>
          Regresa a la pagina web  <a href="https://nextjs.willianjusten.com.br">Fundación Misión Árbol</a>
        </p>
      </StickyNote>
    </>
  )
}

export default App
