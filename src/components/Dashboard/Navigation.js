import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Placeholder } from "../../assets/Placeholder.svg";

const Navigation = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div>
          <NavLink to="/" className="navbar-brand">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <div>
            <Placeholder />
          </div>
          <div>
            <button>Add to Journal</button>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="">
            <NavLink to="/" className="nav-link d-flex justify-content-center">
              <h5>Food</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link d-flex justify-content-center  "
            >
              <h5>Progress</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link d-flex justify-content-center ">
              <h5>Community</h5>
            </NavLink>
          </li>
        </ul>
        <div>
          <h1>Daily Vibe</h1>
        </div>
      </nav>

      <div id="content">
        <button type="button" id="sidebarCollapse"></button>
      </div>
    </div>
  );
};

export default Navigation;
