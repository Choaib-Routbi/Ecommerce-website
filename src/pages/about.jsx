import { useState } from "react";

const About = () => {
  return (
    <div className="section about">
      <div className="about-container">
        <div className="about-container-content">
          <span className="section-title">About <span className="section-title-slice" style={{
            color:"var(--primary-color)"
          }}>GGStation</span></span>
          <p>At GGStation , we live and breathe <strong>gaming</strong> . Founded by a team of competitive gamers, we know the difference the right gear can make — whether it’s a mechanical keyboard with lightning-fast response or a headset that immerses you in every battle</p>
          <span className="section-title">Our Mission</span>
          <p>Our mission is to bring you <strong>the best</strong> gaming peripherals at fair prices, without compromising on <strong>quality</strong> or <strong>performance</strong>. Each product we stock is tested by our in-house gaming squad to ensure it meets the <strong>high standards</strong> we’d expect ourselves.</p>
          <span className="section-title">Community & Values</span>
          <p>We’re more than a store — we’re part of the gaming <strong>community</strong>. From sponsoring local tournaments to supporting streamers, we’re committed to helping the gaming world grow.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
