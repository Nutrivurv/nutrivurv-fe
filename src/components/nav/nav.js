import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar navbar-light bg-light flex-column flex-md-row">
      <Link to="/landing">
        <a className="navbar-brand" href="#">
          Nutrivurv
        </a>
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
