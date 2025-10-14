import { useState } from "react";

const Home = () =>{
    
    return(
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
    )
}
export default Home;