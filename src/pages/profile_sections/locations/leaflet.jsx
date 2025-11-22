import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const LocationSelector = () => {
  const [location, setLocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState([35.505, -7.09]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setMarkerPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const handleMapClick = (e) => {
    setMarkerPosition(e.latlng);
    // Save the selected location to your app's state or database
    console.log(e.latlng);
  };

  return (
    <MapContainer
      center={markerPosition}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      onClick={handleMapClick}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} />
    </MapContainer>
  );
};

export default LocationSelector;
