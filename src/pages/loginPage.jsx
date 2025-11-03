import React from "react";
import "../loginANDsignup.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="section loginPage">
      <span className="section-title">Login</span>
      <form className="loginForm">
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
          <input id="pswd" className="pswd-input" type="text" />
        </div>
        <div className="main-btn">
        <button>login</button>
        <span className="forget-pswd">forgot your password ?<a href="#"> reset</a></span>
        </div>
        <div className="other-choice">
        <span>dont have an account ?</span>
        <NavLink to="/signup">
          <button
          className="form-btn">
          sign up
          </button>
        </NavLink>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
