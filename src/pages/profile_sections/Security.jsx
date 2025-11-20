import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";

const Security = () => {
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
    <div id="security" className="profile-section">
      <span className="profile-section-title">security</span>
    </div>
  );
};
export default Security;
