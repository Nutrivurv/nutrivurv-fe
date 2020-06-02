import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Badges } from "../../assets/badges.svg";
import { ReactComponent as Goals } from "../../assets/goals.svg";
import { ReactComponent as Friends } from "../../assets/friends.svg";
import Marketing from "../Marketing/marketing";

const LandingPage = () => {
  return (
    <div className="container-xl">
        <Marketing/>
      <h3 className="row justify-content-center">You're one click away from</h3>
      <h3 className="row mb-2 justify-content-center">from a healthier you</h3>
      <div className="pt-1 mb-2 bg-warning"></div>
      <h5 className="row mt-5 justify-content-center">
        Nutrivurv is here to help you stay motivated<br/>
        on your journey to better health
      </h5>
      <div className="row flex-column flex-md-row align-self-center my-0 mx-2">
        <div className="col-4">
            <Badges width="311px" height="186px"/>
            <h5 className="row justify-content-center pt-3">Connect with friends</h5>
        </div>
        <div className="col-4">
            <Goals width="311px" height="186px"/>
            <h5 className="row justify-content-center pt-3">Earn badges</h5>
        </div>
        <div className="col-4 ">
            <Friends width="311px" height="186px"/>
            <h5 className="row justify-content-center pt-3">Crush your goals</h5>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        <div className="row">
            <Link type="button" to="/signup" >
            <button className=" px-4 btn-primary">Join Now!</button>
            </Link>
        </div>
        <div className="row">
            <button className="btn-secondary">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
