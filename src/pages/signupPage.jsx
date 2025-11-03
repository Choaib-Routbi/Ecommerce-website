import React from "react";
import "../loginANDsignup.css";
import { NavLink } from "react-router-dom";
const SignupPage = () => {
  return (
    <div className="section loginPage">
      <span className="section-title">signin</span>
      <form>
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
          <input id="pswd" className="pswd-input" type="password" />
        </div>
        <button>sign up</button>
        <div className="other-choice">
          <span>already have an account ?</span>
          <NavLink to="/login">
            <button>login</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
