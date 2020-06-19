import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Navigation = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <NavLink to="/" className="navbar-brand">
            <Logo className="logo" />
          </NavLink>
        </div>
      </nav>

      <div id="content">
        <button type="button" id="sidebarCollapse"></button>
      </div>
    </div>
  );
};

export default Navigation;
