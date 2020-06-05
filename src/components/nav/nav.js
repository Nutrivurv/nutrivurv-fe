import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <div className="navbar navbar-light bg-light flex-column flex-md-row">
      <NavLink to="/" className="navbar-brand ml-3" href="#">
        <Logo />
      </NavLink>
      <nav className="col-md-4 col-lg-3 col-xl-2 align-self-center">
        <ul className="nav flex-md-row">
          <li className="nav-item col-md-6 align-self-center">
            <NavLink to="/signin">
              <a
                id="signIn-link"
                className="nav-link d-flex justify-content-center px-0"
                href="#"
              >
                Sign In
              </a>
            </NavLink>
          </li>
          <li className="nav-item col-md-6 align-self-center">
            <NavLink to="/signup">
              <a
                id="signUp-link"
                className="nav-link d-flex justify-content-center px-0"
                href="#"
              >
                Sign Up
              </a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
