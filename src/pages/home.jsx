import { useState , useEffect } from "react";

const Home = () => {

      const targetDate = new Date("2025-10-17T20:59:59"); // 🎯 your countdown target

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
      seconds
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
            <button className="shop">shop now</button>
            <button className="discover">discover collections</button>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="home-off-container">
          <div className="home-off-textHolder">
            <div>
              <p className="home-off-title">
                Special Offer : Up to{" "}
                <span className="home-off-deal">35% OFF</span>
              </p>
              <p className="home-off-subtitle">
                Claim your upgrades before the clock runs out
              </p>
            </div>
            <div className="home-off-countdown"><div className="countdown">
      <span>{timeLeft.days}d </span>
      <span>{String(timeLeft.hours).padStart(2, '0')}h:</span>
      <span>{String(timeLeft.minutes).padStart(2, '0')}m:</span>
      <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
    </div></div>
          </div>
          <div className="home-off-grid">
            <div className="home-off-card">product</div>
            <div className="home-off-card">product</div>
            <div className="home-off-card">product</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
