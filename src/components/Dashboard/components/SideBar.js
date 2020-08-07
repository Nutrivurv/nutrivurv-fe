import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as Placeholder } from "../../../assets/Placeholder.svg";
import DailyVibe from "./DailyVibe";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { entries } = useSelector((state) => state.user);
  console.log(user.id);
  console.log(entries);
  console.log(user);
  return (
    <div>
      <nav id="sidebar" className={toggle ? "sidebar-active" : "sidebar"}>
        <div className="d-flex justify-content-center exit">
          <h5 className="exit" onClick={() => setToggle(!toggle)}>
            X
          </h5>
        </div>
        <div className="d-flex justify-content-center my-3 ">
          <NavLink to="/" className="navbar-brand ">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center my-2">
            {/* <Placeholder /> */}
            <div className="d-flex flex-column px-4 budgets">
              <div>
                <h4 className="font-weight-bold mt-4 mb-4 border-bottom">
                  Budgets
                </h4>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder">Calories</h5>
                <h5 id="calories" className="data font-weight-bolder">
                  {user.caloric_budget_kcal} kcal
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder">Fats</h5>
                <h5 id="fats" className="data font-weight-bolder">
                  {user.fat_budget_g} g
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder">Carbs</h5>
                <h5 id="carbs" className="data font-weight-bolder">
                  {user.carb_budget_g} g
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder">Proteins</h5>
                <h5 id="protein" className="data font-weight-bolder">
                  {user.protein_budget_g} g
                </h5>
              </div>
            </div>
            <div className="d-flex my-3">
              <div>
                <h4 className="mr-5">
                  {user.weight_lbs}
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    lbs
                  </span>
                </h4>
                <p className="pl-2 font-weight-bolder">Weight</p>
              </div>
              <div>
                <h4>
                  {user.streak}12
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    days
                  </span>
                </h4>
                <p className="pl-2 font-weight-bolder">Streak</p>
              </div>
            </div>
            <div className="mb-1">
              <NavLink to="/dashboard/food-search" className="nav-link">
                <button
                  id="add-journal"
                  className=" journalBttn rounded p-2 btn-secondary"
                  style={{ width: "150px" }}
                >
                  Add to Journal
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="side-link mb-1 pl-4">
            <NavLink to="/dashboard" id="food" className="nav-link">
              <h4 className="font-weight-bold">Food Journal</h4>
            </NavLink>
          </li>
          <li className="side-link mb-1 pl-4">
            <NavLink to="/" id="progress" className="nav-link">
              <h4 className="font-weight-bold">Progress</h4>
            </NavLink>
          </li>
          <li className="side-link mb-1 pl-4">
            <NavLink to="/" id="community" className="nav-link">
              <h4 className="font-weight-bold">Community</h4>
            </NavLink>
          </li>
        </ul>
        <div className="mt-1 pl-4">
          <h5 className="font-weight-bold">Daily Vibe</h5>
          <DailyVibe />
        </div>
      </nav>
      <div>
        <button type="button" className="navbar-light bg-light navbar-toggler">
          <span
            className="navbar-toggler-icon"
            onClick={() => setToggle(!toggle)}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
