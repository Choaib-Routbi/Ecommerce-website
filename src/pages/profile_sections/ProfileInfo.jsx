import React from "react";
import { useContext, useState, useEffect } from "react";
import { SharedData } from "../../sharedData";

const ProfileInfo = () => {
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
    <>
      <div id="profile-info" className="profile-section">
        <span className="profile-section-title">Profile Info</span>
        <p className="profile-subsection-title">Information</p>
        <div className="profile-subsection Information">
          <span>
            <span className="profile-prmtr">fullname :</span> {fullname}
          </span>
          <span>
            <span className="profile-prmtr">email :</span> {emaill}
          </span>
          <span>
            <span className="profile-prmtr">phone :</span> {phone}
          </span>
          <span>
            <span className="profile-prmtr">address :</span> {address}
          </span>
        </div>
        <p className="profile-subsection-title">Account Settings</p>
        <div className="profile-subsection Account-Settings">
          <span>
            <span className="profile-prmtr">Password :</span>
          </span>
          <span>
            <span className="profile-prmtr">Two-Factor Auth :</span>
          </span>
          <span>
            <span className="profile-prmtr">Login Methods :</span>
          </span>
          <span>
            <span className="profile-prmtr">Delete account :</span>
          </span>
        </div>
        <p className="profile-subsection-title">Preferences</p>
        <div className="profile-subsection Preferences">
          <span>
            <span className="profile-prmtr">Language :</span>
          </span>
          <span>
            <span className="profile-prmtr">Currency :</span>
          </span>
          <span>
            <span className="profile-prmtr">Theme :</span>
          </span>
          <span>
            <span className="profile-prmtr">Notifications :</span>
          </span>
        </div>
        <p className="profile-subsection-title">Account Status</p>
        <div className="profile-subsection Account-Status">
          <span>
            <span className="profile-prmtr">Account Level :</span>
          </span>
          <span>
            <span className="profile-prmtr">Reward Points :</span>
          </span>
          <span>
            <span className="profile-prmtr">Order Summary :</span>
          </span>
          <span>
            <span className="profile-prmtr">Created at :</span>
          </span>
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
