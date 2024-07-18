import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import './LeafMap.css';

import T from '../../../types/T';
import config from '../../../utils/config';
import VicinityPlace from '../../../types/VcinityPlace';

import homeMarker from '../../../assets/images/home.webp';
import marker from '../../../assets/images/pin.webp';

interface LeafMapProps extends T {
  data: VicinityPlace;
}

function LeafMap({ t, data }: LeafMapProps) {
  return (
    <div className="dark:brightness-75">
      <MapContainer
        dragging={!navigator.userAgent.includes('Mobile')}
        doubleClickZoom={false}
        center={config.HOUSE_COORDS}
        zoom={
          // eslint-disable-next-line no-nested-ternary
          data.distance > 15
            ? 10
            : navigator.userAgent.includes('Mobile')
              ? 11
              : 12
        }
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
          position={data.coords}
          icon={
            new Icon({
              iconUrl: marker,
              iconSize: config.ICON_SIZE,
            })
          }
        >
          <Popup closeOnClick={false} closeOnEscapeKey={false}>
            {data.info.title.eng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafMap;
