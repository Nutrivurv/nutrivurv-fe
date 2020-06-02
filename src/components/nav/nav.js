
import React from 'react';
import { Route, Link } from "react-router-dom";
import Logo from "../../assets/nvlogo.png";

const Nav = () => {
  return (
    <div className="navbar navbar-light bg-light flex-column flex-md-row">
      <Link to="/" className="navbar-brand ml-3" href="#">
        <img src={Logo} alt="Nutrivurv logo"></img>
      </Link>
      <nav className="col-md-4 col-lg-3 col-xl-2 align-self-center">
        <ul className="nav flex-md-row">
          <li className="nav-item col-md-6 align-self-center">
            <Link to="/signin">
              <a
                className="nav-link d-flex justify-content-center px-0"
                href="#"
              >
                Sign In
              </a>
            </Link>
          </li>
          <li className="nav-item col-md-6 align-self-center">
            <Link to="/signup">
              <a
                className="nav-link d-flex justify-content-center px-0"
                href="#"
              >
                Sign Up
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
