import "../../styles/_dashboard.scss";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import { ReactComponent as Placeholder } from "../../../../assets/Placeholder.svg";
import { NutrientEnd } from "../../../../state/slices/EdamamSlice";
import { BudgetRing } from "./BudgetRing";
import DailyVibe from "./DailyVibe";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { entries } = useSelector((state) => state.user);
  const totals = entries.dailyTotals[0];
  const green = "#CAF1E8";
  const lightGreen = "#F0FFFC";

  const yellow = "#FAF3B8";
  const lightYellow = "#FFFDED";

  const blue = "#97AFD1";
  const lightBlue = "#E8F1FF";

  const red = "#F6A4B8";
  const lightRed = "#FFEBF0";

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
            <div className="budget-rings">
              <div className="protein-budget">
                <BudgetRing
                  id="protein-budget"
                  totals={totals.total_protein_g}
                  user={user.protein_budget_g}
                  size="55"
                  pH={0.35}
                  c1={red}
                  c2={lightRed}
                />
              </div>
              <div className="carb-budget">
                <BudgetRing
                  id="carb-budget"
                  totals={totals.total_carbs_g}
                  user={user.carbs_budget_g}
                  size="95"
                  pH={0.55}
                  c1={blue}
                  c2={lightBlue}
                />
              </div>
              <div className="fat-budget">
                <BudgetRing
                  id="fat-budget"
                  totals={totals.total_fat_g}
                  user={user.fat_budget_g}
                  size="140"
                  pH={0.65}
                  c1={yellow}
                  c2={lightYellow}
                />
              </div>
              <div className="calorie-budget">
                <BudgetRing
                  id="calorie-budget"
                  totals={totals.total_calories_kcal}
                  user={user.caloric_budget_kcal}
                  size="185"
                  pH={0.75}
                  c1={green}
                  c2={lightGreen}
                />
              </div>
            </div>
            <div className="d-flex flex-column px-4 budgets">
              <div>
                <h4 className="font-weight-bold mt-4 mb-4 border-bottom">
                  Budgets
                </h4>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder" id="Cal">
                  Calories
                </h5>
                <h5 className="data font-weight-bolder">
                  {totals
                    ? user.caloric_budget_kcal - totals.total_calories_kcal
                    : user.caloric_budget_kcal}{" "}
                  kcal
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder" id="Fa">
                  Fats
                </h5>
                <h5 className="data font-weight-bolder">
                  {totals
                    ? Math.round(user.fat_budget_g - totals.total_fat_g)
                    : user.fat_budget_g}{" "}
                  g
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder" id="Car">
                  Carbs
                </h5>
                <h5 className="data font-weight-bolder">
                  {totals
                    ? Math.round(user.carb_budget_g - totals.total_carbs_g)
                    : user.carb_budget_g}{" "}
                  g
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bolder" id="Pro">
                  Protein
                </h5>
                <h5 className="data font-weight-bolder">
                  {totals
                    ? Math.round(user.protein_budget_g - totals.total_protein_g)
                    : user.protein_budget_g}{" "}
                  g
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
            <NavLink
              onClick={() => dispatch(NutrientEnd())}
              to="/dashboard"
              id="food"
              className="nav-link"
            >
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
