import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { logout } from "../../../state/slices/slices";
import FoodJournal from "./FoodJournal";
const Dashboard = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // if (token === null) return <Redirect to="/" />;

  return (
    <div >
      <div className="d-flex justify-content-end px-5">
        <button
          className="btn-primary rounded px-2 py-1 border border-primary"
          onClick={() => dispatch(logout())}
        >
          Log Out
        </button>
      </div>
      <FoodJournal />
    </div>
  );
};

export default Dashboard;
