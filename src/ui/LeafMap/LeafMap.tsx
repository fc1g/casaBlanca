import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import './LeafMap.css';

import config from '../../utils/config';
import useGlobal from '../../hooks/useGlobal';

import homeMarker from '../../assets/images/markers/home.webp';
import marker from '../../assets/images/markers/pin.webp';

type LeafMapProps = {
  coords: [number, number];
  title: {
    en: string;
    es: string;
    pl: string;
  };
};

function LeafMap({ coords, title }: LeafMapProps) {
  const { t, currLang } = useGlobal()!;

  return (
    <div className="dark:brightness-75">
      <MapContainer
        dragging={!navigator.userAgent.includes('Mobile')}
        doubleClickZoom={false}
        center={config.HOUSE_COORDS}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker
          position={config.HOUSE_COORDS}
          icon={
            new Icon({
              iconUrl: homeMarker,
              iconSize: config.ICON_SIZE,
            })
          }
        >
          <Popup closeOnClick={false} closeOnEscapeKey={false}>
            {t('about.infoBtn.house')}
          </Popup>
        </Marker>

        <Marker
          position={coords}
          icon={
            new Icon({
              iconUrl: marker,
              iconSize: config.ICON_SIZE,
            })
          }
        >
          <Popup closeOnClick={false} closeOnEscapeKey={false}>
            {title[currLang]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafMap;
