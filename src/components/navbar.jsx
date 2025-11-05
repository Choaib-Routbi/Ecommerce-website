import { useState, useEffect, useContext } from "react";
import { CartCountProvider, cartContext } from "../cartContext";
import { NavLink } from "react-router-dom";
import { useAuth } from "../userContext";
function Navbar() {
  const { user, logout } = useAuth();
  const { incartCount } = useContext(cartContext);

  const [navtoggleARG, setNavtoggleARG] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavtoggleARG(false); 
      } else {
        setNavtoggleARG(true); 
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navToggle = () => {
    setNavtoggleARG((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
      >
        <div className="logo">GGStation</div>
      </NavLink>
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

      <div className="nav-icons-container">
        <svg
          className="nav-toggle-btn"
          onClick={navToggle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc
          <path d="M112 208C138.5 208 160 186.5 160 160C160 133.5 138.5 112 112 112C85.5 112 64 133.5 64 160C64 186.5 85.5 208 112 208zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM112 528C138.5 528 160 506.5 160 480C160 453.5 138.5 432 112 432C85.5 432 64 453.5 64 480C64 506.5 85.5 528 112 528zM160 320C160 293.5 138.5 272 112 272C85.5 272 64 293.5 64 320C64 346.5 85.5 368 112 368C138.5 368 160 346.5 160 320z" />
        </svg>

        {!user && (
          <NavLink to="/login">
            <button className="loginBtn">Login</button>
          </NavLink>
        )}
        {user && <>
        <CartCountProvider>
          <span className="incart_Counter">{incartCount}</span>
        </CartCountProvider>
         <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            !Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license/free Copyright 2025
            Fonticons, Inc.
            <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
          </svg>
        </NavLink>
        </>}
        {user && <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license (Commercial License)
            Copyright 2025 Fonticons, Inc
            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
          </svg>
        </NavLink>
        }
        {user && (
          <svg
            className="logoutBtn"
            onClick={logout}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license/free Copyright 2025
            Fonticons, Inc
            <path d="M569 337C578.4 327.6 578.4 312.4 569 303.1L425 159C418.1 152.1 407.8 150.1 398.8 153.8C389.8 157.5 384 166.3 384 176L384 256L272 256C245.5 256 224 277.5 224 304L224 336C224 362.5 245.5 384 272 384L384 384L384 464C384 473.7 389.8 482.5 398.8 486.2C407.8 489.9 418.1 487.9 425 481L569 337zM224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160z" />
          </svg>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
