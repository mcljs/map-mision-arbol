import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
        <NextSeo
          title="Sitios Recuperados | Misión Árbol"
          description="Mapa de sitios que fueron recuperado por la Fundación Misión Árbol"
        canonical="https://mision-arbol.tk"
        openGraph={{
          url: 'https://mision-arbol.tk',
          title: 'Misión Árbol',
          description:
            'Mapa de sitios que fueron recuperado por la Fundación Misión Árbol',
          images: [
            {
              url: 'https://mision-arbol.netlify.app/static/682c4dfb4d5442c930e62265fc36b09a/logo.jpeg',
              width: 1280,
              height: 720,
              alt: 'Sitios Recuperados'
            }
          ],
          site_name: 'Sitios Recuperados'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
