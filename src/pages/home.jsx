import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  data,
  NavLink,
} from "react-router-dom";
import ProductCard from "../components/product-card";


const Home = () => {
  const targetDate = new Date("2025-11-20T20:59:59"); 

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  //   countdown
  function getTimeRemaining() {
    const now = new Date();
    const total = targetDate - now;

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      if (remaining.total <= 0) {
        clearInterval(timer);
      }
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="section home">
      <div className="home-blury-bg"></div>
      <div className="home-container">
        <div className="home-topHalf">
          <h1>
            level up<p className="title-switched-word">Your Gear</p>
          </h1>
          <p className="subtitle">
            In a world where milliseconds decide victory, your gear is your
            weapon. Upgrade your arsenal with accessories designed for elite
            gamers who demand speed, control, and style
          </p>
          <div className="home-CTA-container">

            <NavLink to={"/products"} className="shop">
              shop now
            </NavLink>
            <NavLink to={"/collections"} className="discover">
              discover collections
            </NavLink>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="home-off-container">
          <div className="home-off-textHolder">
            <div>
              <p className="home-off-title">
                Special Offer : Up to{" "}
                <span className="home-off-deal">
                  {" "}
                  <br />
                  35% OFF
                </span>
              </p>
              <p className="home-off-subtitle">
                Claim your upgrades before the clock runs out
              </p>
            </div>
            <div className="home-off-countdown">
              <div className="countdown">
                <span>{timeLeft.days}d </span>
                <span>{String(timeLeft.hours).padStart(2, "0")}h:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}m:</span>
                <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
              </div>
            </div>
          </div>
          <div className="home-off-grid">
            <ProductCard
              name={"test1"}
              sales={2432}
              rating={"4"}
              category={"a devies"}
              price={10}
            />
            <ProductCard
              name={"test2"}
              sales={2222}
              rating={"5"}
              category={"a devies"}
              price={10}
            />
            <ProductCard
              name={"test3"}
              sales={1255}
              rating={"3"}
              category={"a devies"}
              price={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
