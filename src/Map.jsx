import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ data }) => {
  const mapStyle = {
    height: "60vh",
    zIndex: "1",
  }; // Set the desired height here
  const markerPosition = [51.5, -0.09]; // Set the marker position here

  return (
    <MapContainer center={markerPosition} zoom={13} style={mapStyle} id="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © OpenStreetMap contributors"
      />
      <Marker position={markerPosition}>
        <Popup className="max-w-md">
          {data ? (
            <div className="grid gap-1.5">
              <h4 className="text-sm font-semibold"> Ip: {data.ip}</h4>
              <h4 className="text-sm font-semibold">
                {" "}
                Country: {data.location.country}
              </h4>
              <h4 className="text-sm font-semibold">
                {" "}
                Region: {data.location.region}
              </h4>
              <h4 className="text-sm font-semibold">
                {" "}
                Timezone: {data.location.timezone}
              </h4>
              <h4 className="text-sm font-semibold"> Timezone: {data.isp}</h4>
            </div>
          ) : (
            <div className="grid gap-1.5">
              <h4 className="text-sm font-semibold"> Ip: 192.212.174.101</h4>
              <h4 className="text-sm font-semibold"> Country: us</h4>
              <h4 className="text-sm font-semibold"> Region: brooklyn, NY</h4>
              <h4 className="text-sm font-semibold"> Timezone: UTC -05:00</h4>
              <h4 className="text-sm font-semibold"> Isp: Space X starlink</h4>
            </div>
          )}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
