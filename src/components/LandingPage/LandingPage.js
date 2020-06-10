import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Badges } from "../../assets/badges.svg";
import { ReactComponent as Goals } from "../../assets/goals.svg";
import { ReactComponent as Friends } from "../../assets/friends.svg";
import Marketing from "../Marketing/marketing";

const LandingPage = () => {
  return (
    <div className="container p-0">
      <Marketing />
      <div className="mt-5 pt-5">
        <h3
          className="row justify-content-center"
          style={{ fontSize: "3.5vw" }}
        >
          You&apos;re one click away
        </h3>
        <h3
          className="row mb-2 justify-content-center"
          style={{ fontSize: "3.5vw" }}
        >
          from a healthier you
        </h3>
        <div className="pt-1 mb-2 mx-5 bg-warning"></div>
      </div>
      <h5
        className="row mt-3 justify-content-center"
        style={{ fontSize: "2vw" }}
      >
        Nutrivurv is here to help you stay motivated
      </h5>
      <h5
        className="row mb-5 justify-content-center"
        style={{ fontSize: "2vw" }}
      >
        on your journey to better health
      </h5>
      <div className="row flex-column flex-md-row align-self-center my-0 mx-5">
        <div className="col-12 col-md-4 my-5">
          <Badges className="col lp-img-btm align-items-center" />
          <h5 className="row justify-content-center pt-3">Earn badges</h5>
        </div>
        <div className="col-12 col-md-4 my-5">
          <Goals className="col align-items-center lp-img-btm" />
          <h5 className="row justify-content-center pt-3">Crush your goals</h5>
        </div>
        <div className="col-12 col-md-4 my-5">
          <Friends className="col align-items-center lp-img-btm" />
          <h5 className="row justify-content-center pt-3">
            Connect with friends
          </h5>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        <div className="row mt-5">
          <Link type="button" to="/signup">
            <button
              id="join-now"
              className="p-2 btn-primary rounded w-200 border border-secondar"
            >
              Join Now!
            </button>
          </Link>
        </div>
        <div className="row mt-2 mb-5">
          <button
            id="signIn-bttn"
            className="btn-secondary rounded p-2 w-200 border border-secondary"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
