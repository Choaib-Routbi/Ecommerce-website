import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";
import LocationSelector from "./locations/leaflet";
import AddressCard from "./locations/googleMaps";
import GoogleLocationSelector from "./locations/googleApi";
const Addresses = () => {
  var {
    fullname,
    setFullname,
    emaill,
    setEmaill,
    phone,
    setPhone,
    address,
    setAddress,
    displayNone,
    setdisplay,
  } = useContext(SharedData);
  [displayNone, setdisplay] = useState(false);

  const closeBox = () => {
    setdisplay((prev) => !prev);
    console.log(displayNone);
  };

  useEffect(() => {}, [displayNone]);
  return (
    <div id="addresses" className="profile-section">
      <span className="profile-section-title">Shipping Addresses</span>
      <div className="profile-addresses-card-CREATE">
        <span className="profile-addresses-card-title">
          add new shipping location to profile
        </span>
        <button onClick={closeBox}>Add Location</button>
      </div>

      <div className="profile-addresses-cards-container">
        {displayNone && (
          <div onClick={closeBox} className="close-addLocation-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc
              <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
            </svg>
          </div>
        )}
        {displayNone && (
          <div className="addLocation-container-holder">
            <div className="addLocation-container">
              <span>new shipping location</span>
              <form>
                <label htmlFor="location-name">location name</label>
                <input type="text" id="location-name" />
                <label htmlFor="location">choose location</label>
                {/* <LocationSelector /> */}
                <GoogleLocationSelector />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Addresses;
