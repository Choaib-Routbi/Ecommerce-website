import { useState } from "react";

const Collections = () => {
  return (
    <div className="section collections">
      <div className="collections-container">
        <span className="section-title">Shop by Category</span>
        <p className="section-subtitle">Discover gear tailored to your needs</p>
        <div className="collections-grid-container">
          <div className="oneCollection">
            <p className="oneCollection-title">Precision in Motion</p>
            <p className="oneCollection-description">
              Engineered for speed and accuracy, our mice deliver pinpoint
              control in every flick, swipe, and clutch play
            </p>
            <button className="one-collection-btn">Explore Mice</button>
          </div>
          <div className="oneCollection">
            <p className="oneCollection-title">Feel Every Stroke</p>
            <p className="oneCollection-description">
              Experience tactile feedback, rapid response, and satisfying
              keystrokes designed for competitive play and daily grind alike
            </p>
            <button className="one-collection-btn">Discover Keyboards</button>
          </div>
          <div className="oneCollection">
            <p className="oneCollection-title">Next-Level Audio</p>
            <p className="oneCollection-description">
              Immerse yourself in every battle, beat, and broadcast with rich,
              detailed sound and crystal-clear comms
            </p>
            <button className="one-collection-btn">Browse Headsets</button>
          </div>
          <div className="oneCollection">
            <p className="oneCollection-title">Control the Action</p>
            <p className="oneCollection-description">
              Whether console or PC, take full command with ergonomic,
              responsive controllers built for serious gameplay
            </p>
            <button className="one-collection-btn">View Controllers</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collections;
