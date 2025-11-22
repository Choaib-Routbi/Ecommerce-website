import React, { useState, useEffect } from "react";

const GoogleLocationSelector = () => {
  const [location, setLocation] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.async = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: 51.505, lng: -0.09 },
          zoom: 13,
        }
      );
      setMap(mapInstance);

      mapInstance.addListener("click", (e) => {
        setLocation(e.latLng);
        // Save the selected location to your app's state or database
        console.log(e.latLng);
      });
    });
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default GoogleLocationSelector;
