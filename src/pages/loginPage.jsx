import React from "react";
import "../loginANDsignup.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="section loginPage">
      <form className="loginForm">
      
      <span className="section-title">Sign in to your account</span>
        <div className="inputANDlabel-container">
          <label htmlFor="email">email</label>
          <input
            id="email"
            className="form-btn"
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div className="inputANDlabel-container">
          <label htmlFor="pswd">password</label>
          <input 
          id="pswd" 
          className="pswd-input" 
          type="text" 
          placeholder="password"
          />
        </div>
        <div className="main-btn">
          <div className="login-options">
          <div className="keep-logged-container">
            <input type="checkbox"/>
            <span>keep me logged in</span>
          </div>
          <div className="forget-pswd">
            <NavLink to={"/home"}><span href="#" className="reset">forgot password</span></NavLink>
          </div>
          </div>

          <button>login</button>

          <span className="dont-have-account">
            dont have an account ?  
           <NavLink to="/signup">
            <span className="reset">sign up</span>
          </NavLink>
          </span>
        </div>
        
          
        <div className="with-socialmedia-container">
          <span>or continue with</span>

          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/></svg>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
