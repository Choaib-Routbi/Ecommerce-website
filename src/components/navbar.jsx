import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navtoggleARG, setNavtoggleARG] = useState(true);

  const navToggle = () => {
    setNavtoggleARG((prev) => !prev);
  };

  if (navtoggleARG) {
    console.log("show");
  } else {
    console.log("hide");
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setNavtoggleARG(true); // show menu
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">logo</div>
      <div className="nav-btns-container">
        {navtoggleARG ? (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              collections
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              products
            </NavLink>
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              popular
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              about
            </NavLink>
          </>
        ) : null}

        {/* <Link to="/products" className="nav-btn">products</Link>
        <Link to="/collections" className="nav-btn">collections</Link>
        <Link to="/popular" className="nav-btn">popular</Link>
        <Link to="/about" className="nav-btn">about</Link> */}
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <svg
          className="nav-toggle"
          onClick={navToggle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.
          <path d="M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z" />
        </svg>
        <span className="incart_Counter">
          
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.
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
  );
}

export default Navbar;
