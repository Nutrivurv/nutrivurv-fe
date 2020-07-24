import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as Placeholder } from "../../../assets/Placeholder.svg";
import { Journal } from "../../../state/slices/userinfo";
import DailyVibe from "./DailyVibe";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { journal } = useSelector((state) => state.user);
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  const date = `${year}-${month}-${day}`;
  const getJournalInfo = Journal(user.id, date);
  getJournalInfo();
  console.log(journal);
  console.log(user);
  return (
    <div>
      <nav id="sidebar" className={toggle ? "sidebar-active" : "sidebar"}>
        <div className="d-flex justify-content-center my-3 ">
          <NavLink to="/" className="navbar-brand ">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center my-5">
            <Placeholder />
            <h3 className="font-weight-bolder">
              Budgets
            </h3>
            <h4 className="font-weight-bolder">
              Calories: {user.caloric_budget_kcal} kcal
            </h4>
            <h4 className="font-weight-bolder">
              Fats: {user.fat_budget_g} kcal
            </h4>
            <h4 className="font-weight-bolder">
              Carbs: {user.carb_budget_g} kcal
            </h4>
            <h4 className="font-weight-bolder">
              Proteins: {user.protein_budget_g} kcal
            </h4>
            <div className="d-flex my-3">
              <div>
                <h3 className="mr-5">
                  {user.weight_lbs}
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    lbs
                  </span>
                </h3>
                <h5 className="pl-2 font-weight-bolder">Weight</h5>
              </div>
              <div>
                <h3>
                  {user.streak}12
                  <span className="pl-1" style={{ fontSize: "14px" }}>
                    days
                  </span>
                </h3>
                <h5 className="pl-2 font-weight-bolder">Streak</h5>
              </div>
            </div>
            <div className="mt-5 mb-3">
              <button
                id="add-journal"
                className="btn-primary rounded p-2 border border-primary"
                style={{ width: "250px" }}
                onClick={() => history.push("/dashboard/food-search")}
              >
                Add to Journal
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="side-link mb-3 pl-4">
            <NavLink to="/" id="food" className="nav-link">
              <h4 className="font-weight-bold primary-color">Food</h4>
            </NavLink>
          </li>
          <li className="side-link mb-3 pl-4">
            <NavLink to="/" id="progress" className="nav-link">
              <h4 className="font-weight-bold primary-color">Progress</h4>
            </NavLink>
          </li>
          <li className="side-link mb-5 pl-4">
            <NavLink to="/" id="community" className="nav-link">
              <h4 className="font-weight-bold primary-color">Community</h4>
            </NavLink>
          </li>
        </ul>
        <div className="mt-5 pl-4 pt-5">
          <h4 className="font-weight-bold">Daily Vibe</h4>
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
