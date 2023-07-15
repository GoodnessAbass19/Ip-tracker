import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
  const mapStyle = { height: "50vh" }; // Set the desired height here

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={mapStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © OpenStreetMap contributors"
      />
      <Marker position={[51.5, -0.09]} />
    </MapContainer>
  );
};

export default Map;
