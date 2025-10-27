import { useState } from "react";

const About = () => {
  return (
    <div className="section about">
      <div className="about-container">
        <div className="about-container-content">
          <span className="section-title">
            About{" "}
            <span
              className="section-title-slice"
              style={{
                color: "var(--primary-color)",
              }}
            >
              GGStation
            </span>
          </span>
          <p>
            At <strong>GameForge Gear</strong>, we’re passionate about providing{" "}
            <strong>high-quality gaming equipment</strong> designed to enhance
            your <strong>performance, comfort,</strong> and{" "}
            <strong>immersion</strong>. Whether you’re a casual player or a
            competitive esports enthusiast, our collection of{" "}
            <strong>keyboards, mice,</strong> and <strong>headsets</strong> is
            carefully selected to deliver precision, durability, and speed. We
            believe every gamer deserves gear that not only looks incredible but
            also performs flawlessly during intense matches. That’s why we
            partner with trusted brands and test every product to ensure it
            meets our <strong>professional gaming standards</strong>. Shop
            confidently knowing that each purchase comes with{" "}
            <strong>fast shipping, easy returns,</strong> and{" "}
            <strong>dedicated customer support</strong> — because at GameForge
            Gear, we’re not just selling equipment, we’re helping you{" "}
            <strong>level up your game.</strong>
          </p>

          <span className="section-title">Our Mission</span>
          <p>
            Our mission is to deliver{" "}
            <strong>the best gaming peripherals</strong> at{" "}
            <strong>fair and competitive prices</strong>, without ever
            compromising on <strong>quality, reliability,</strong> or{" "}
            <strong>performance</strong>. Every piece of gear we offer — from{" "}
            <strong>mechanical keyboards</strong> to{" "}
            <strong>high-precision gaming mice</strong> and{" "}
            <strong>immersive headsets</strong> — is carefully selected to give
            you an edge in every battle. Each product is rigorously tested by
            our <strong>in-house gaming squad</strong> to ensure it meets the
            same <strong>high standards</strong> we hold for our own setups. We
            believe that every gamer deserves{" "}
            <strong>top-tier equipment</strong> that enhances skill, comfort,
            and confidence — because when your gear performs flawlessly,{" "}
            <strong>so do you.</strong>
          </p>

          <span className="section-title">Community & Values</span>
          <p style={{marginBottom:"20px"}}>
            We’re more than just a store — we’re an active part of the global{" "}
            <strong>gaming community</strong>. From{" "}
            <strong>sponsoring local tournaments</strong> and hosting
            competitive events to <strong>supporting streamers</strong> and
            collaborating with esports teams, we’re dedicated to helping the{" "}
            <strong>gaming world</strong> thrive and grow. Our goal is to create
            a space where <strong>gamers</strong> of all levels can connect,
            compete, and access <strong>high-quality gear</strong> that enhances
            their experience. At GameForge Gear, we believe in giving back to
            the community that inspires us every day and fostering a culture of{" "}
            <strong>passion, collaboration,</strong> and{" "}
            <strong>innovation</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
