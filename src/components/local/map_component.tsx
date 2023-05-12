import { MapContainer, TileLayer, Marker } from 'react-leaflet';

interface MapProps {
  latitude: number;
  longitude: number;
}

const MapComponent = ({ latitude, longitude }: MapProps) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} />
    </MapContainer>
  );
};

export default MapComponent;
