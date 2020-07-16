import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../../state/slices/AuthSlice";

const Logout = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (token === null) return <Redirect to="/" />;

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
      <JournalContainer />
    </div>
  );
};

export default Logout;
