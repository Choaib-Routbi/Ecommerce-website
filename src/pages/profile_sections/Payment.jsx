import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";

const Payment = () => {
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
    <div id="payment-methods" className="profile-section">
      <span className="profile-section-title">payment-methods</span>
    </div>
  );
};
export default Payment;
