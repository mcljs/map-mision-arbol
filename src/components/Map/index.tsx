import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import * as S from './styles'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const markerIcon = new L.Icon({
  iconUrl: '/map/img/logo2.svg',
  iconSize: [50, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
})

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
<S.MapWrapper>
    <MapContainer
      center={[8.111, -65.791]}
      zoom={7}
      style={{ height: '100%', width: '100%' }}
      minZoom={7}
      maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
    >
      <CustomTileLayer />

      {places?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            icon={markerIcon}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
          />
        )
      })}
    </MapContainer>
</S.MapWrapper>
  )
}

export default Map
