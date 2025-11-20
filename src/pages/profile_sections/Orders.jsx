import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";

const Orders = () => {
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
    <div id="orders" className="profile-section">
      <span className="profile-section-title">orders</span>
    </div>
  );
};
export default Orders;
