import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css';

export default function Map() {
    const customIcon = new Icon({
        iconUrl: "./assets/sport.png",
        iconSizer: [38, 38],
    })   
    const accessToken = 'gDC3fKnb6H24XNBjm2WosJpHA7gdDb85UeDa02fZ9SRb2XQW5qePkoHfUFOAvc6E'

    return (
        <div className="map">

            <MapContainer center={[37.7, -122]} zoom={9} scrollWheelZoom={false} style={{ height: '35rem', width: '30rem' }}>
            <TileLayer 
                attribution='&copy; <a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://www.flaticon.com/free-icons/rodeo" title="rodeo icons">Icon created by Leremy</a>'
                url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${accessToken}`}
            />
            <Marker position={[37.7, -122]} icon={customIcon}>
                <Popup>
                    Rowell Ranch
                </Popup>
            </Marker>
            </MapContainer>

        </div>
    );
}

// remember to attribute the rodeo guy