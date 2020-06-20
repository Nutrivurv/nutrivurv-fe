import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Placeholder } from "../../assets/Placeholder.svg";

const Navigation = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="d-flex justify-content-center my-3">
          <NavLink to="/" className="navbar-brand">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center my-5">
            <Placeholder />
            <h6 className="font-weight-bolder">Daily Intake</h6>
            <div className="d-flex my-3">
              <div>
                <h3 className="mr-5">
                  195
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    lbs
                  </span>
                </h3>
                <h5 className="pl-2 font-weight-bolder">Weight</h5>
              </div>
              <div>
                <h3>
                  12
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    days
                  </span>
                </h3>
                <h5 className="pl-2 font-weight-bolder">Streak</h5>
              </div>
            </div>
            <div className="mt-5 mb-3">
              <button
                className="btn-primary rounded p-2 border border-primary"
                style={{ width: "250px" }}
              >
                Add to Journal
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav pl-4">
          <li className="side-link mb-3">
            <NavLink to="/" className="nav-link">
              <h4 className="font-weight-bold side-link-color">Food</h4>
            </NavLink>
          </li>
          <li className="side-link mb-3">
            <NavLink to="/" className="nav-link">
              <h4 className="font-weight-bold side-link-color">Progress</h4>
            </NavLink>
          </li>
          <li className="side-link">
            <NavLink to="/" className="nav-link mb-5">
              <h4 className="font-weight-bold side-link-color">Community</h4>
            </NavLink>
          </li>
        </ul>
        <div className="mt-5 pl-4">
          <h5 className="font-weight-bold">Daily Vibe</h5>
        </div>
      </nav>

      <div id="content">
        <button type="button" id="sidebarCollapse"></button>
      </div>
    </div>
  );
};

export default Navigation;
