import { useState } from "react";

const Collections = () => {
  return (
    <div className="section collections">
      <div className="collections-container">
        <span className="section-title">Shop by Category</span>
        <p className="section-subtitle">Discover gear tailored to your needs</p>
        <div className="collections-grid-container">
          <div className="oneCollection">
            <p className="oneCollection-title">mouse</p>
          </div>
          <div className="oneCollection">
            <p className="oneCollection-title">keyboard</p>
          </div>
          <div className="oneCollection">
            <p className="oneCollection-title">headphone</p>
          </div>
          <div className="oneCollection">
            <p className="oneCollection-title">controller</p>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Collections;
