import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent({ selectedProfile }) {
  const indiaCenter = [20.5937, 78.9629];
  const zoomLevel = 5;

  const profileLocation = selectedProfile
    ? [selectedProfile.latitude, selectedProfile.longitude]
    : indiaCenter;

  return (
    <MapContainer
      center={profileLocation}
      zoom={selectedProfile ? 10 : zoomLevel}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {selectedProfile &&
        selectedProfile.latitude &&
        selectedProfile.longitude && (
          <Marker
            position={[selectedProfile.latitude, selectedProfile.longitude]}
          >
            <Popup>
              <strong>{selectedProfile.name}</strong> <br />
              {selectedProfile.address}
            </Popup>
          </Marker>
        )}
    </MapContainer>
  );
}

export default MapComponent;
