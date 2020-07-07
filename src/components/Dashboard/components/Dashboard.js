import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../../../state/slices/slices";

const Dashboard = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="d-flex justify-content-end px-5">
      <button
        className="btn-primary rounded px-2 py-1 border border-primary"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
