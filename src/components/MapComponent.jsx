import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for missing default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapComponent({ selectedProfile }) {
  const indiaCenter = [20.5937, 78.9629];
  const zoomLevel = 5;

  const profileLocation = selectedProfile
    ? [selectedProfile.latitude, selectedProfile.longitude]
    : indiaCenter;

  console.log("Selected Profile Coordinates:", {
    latitude: selectedProfile?.latitude,
    longitude: selectedProfile?.longitude,
  });

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
          <Marker position={[selectedProfile.latitude, selectedProfile.longitude]}>
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
