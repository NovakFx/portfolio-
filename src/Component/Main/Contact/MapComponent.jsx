import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[43.7, -79.42]}
      zoom={10}
      className="h-[400px] w-full ms:h-[270px] md2:h-[290px] mt-9 shadow-lg z-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[43.7, -79.42]} icon={markerIcon}>
        <Popup>Toronto</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
