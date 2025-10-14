import React, { useEffect, useState } from "react";
import "./style.css";

function App() {

  // useEffect(
  //   fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => console.log(data))  
  fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
  .then(res => res.json())
  .then(data => {
     console.log(data);
      // Gaming Mice
      // Keyboards
      // Headsets
      // Controllers
     
  });

  
  return (
    <div className="app-container">
        <nav className="navbar">
          <div
            className="logo"
            style={{
              color: "var(--primary-color)",
            }}
          >
            logo
          </div>
          <div className="nav-btns-container">
            <button className="nav-btn">home</button>
            <button className="nav-btn">products</button>
            <button className="nav-btn">collections</button>
            <button className="nav-btn">popular</button>
            <button className="nav-btn">about</button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              !Font Awesome Free v7.1.0 by @fontawesome -
              https://fontawesome.com License -
              https://fontawesome.com/license/free Copyright 2025 Fonticons,
              Inc.
              <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license (Commercial License)
              Copyright 2025 Fonticons, Inc
              <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
            </svg>
          </div>
        </nav>
      <div className="section home">
        <div className="home-blury-bg"></div>
        <div className="home-container">
          <div className="home-topHalf">
          <h1>
            level up<p className="title-switched-word">Victory</p>{" "}
          </h1>
          <p className="subtitle">In a world where milliseconds decide victory, your gear is your weapon. Upgrade your arsenal with accessories designed for elite gamers who demand speed, control, and style 
          </p>
          <div className="home-CTA-container">
            <button className="shop">shop now</button>
            <button className="discover">discover collections</button>
            <div></div>
            <div></div>
          </div>
          </div>
          <div className="home-off-container">
            <div className="home-off-textHolder">
              <div>
                <p className="home-off-title">Special Offer : Up to <span className="home-off-deal">35% OFF</span></p>
                <p className="home-off-subtitle">Claim your upgrades before the clock runs out</p>
              </div>
              <div className="home-off-countdown">03:00:00 h</div>
            </div>
            <div className="home-off-grid">
              <div className="home-off-card">product</div>
              <div className="home-off-card">product</div>
              <div className="home-off-card">product</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section products">
        <div className="products-container">
          <span className="section-title">products</span>
        </div>
      </div>
      <div className="section collections">
        <div className="collections-container">
          <span className="section-title">collections</span>
        </div>
      </div>
      <div className="section topSales">
        <div className="topSales-container">
          <span className="section-title">topSales</span>
        </div>
      </div>
      <div className="section about">
        <div className="about-container">
          <span className="section-title">about</span>
        </div>
      </div>
    </div>
  );
}

export default App;
