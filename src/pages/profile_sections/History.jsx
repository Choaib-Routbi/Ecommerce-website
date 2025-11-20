import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";

const History = () => {
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
    <div id="history" className="profile-section">
      <span className="profile-section-title">history</span>
    </div>
  );
};
export default History;
