import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";

const Wishlist = () => {
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
  return (
    <div id="wishlist" className="profile-section">
      <span className="profile-section-title">wishlist</span>
    </div>
  );
};
export default Wishlist;
