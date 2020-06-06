import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <div className="navbar navbarposition navbar-expand-md navbar-light bg-light ">
      <div>
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <nav
        className="collapse navbar-collapse align-items-end flex-column "
        id="navbarColor03"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link d-flex justify-content-center">
              <h5>Home</h5> <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link d-flex justify-content-center ml-5 "
            >
              <h5>About Us</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signin"
              className="nav-link d-flex justify-content-center ml-5"
            >
              <h5>Sign In</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signup"
              className="nav-link d-flex justify-content-center ml-5 mr-4"
            >
              <h5>Sign Up</h5>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
