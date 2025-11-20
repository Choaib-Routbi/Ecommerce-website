import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";
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
  const closeBox = () => {
    setdisplay((prev) => !prev);
    console.log(displayNone);
  };

  const [addresses, setAddresses] = useState(["add1", "add2"]);
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
      <div className={`profile-addresses-cards-container`}></div>
    </div>
  );
};
export default Addresses;
