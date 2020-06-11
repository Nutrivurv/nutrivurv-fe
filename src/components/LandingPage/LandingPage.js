import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Badges } from "../../assets/badges.svg";
import { ReactComponent as Goals } from "../../assets/goals.svg";
import { ReactComponent as Friends } from "../../assets/friends.svg";
import Marketing from "../Marketing/marketing";

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
      <Marketing />
      <div className="mt-5 pt-5 text-center">
        <h3 className="font-weight-bold text-responsive">
          You&apos;re one click away
        </h3>
        <h3 className="font-weight-bold text-responsive">
          from a healthier you.
        </h3>
        <div className="pt-1 mb-2 mx-5 bg-warning my-5"></div>
      </div>
      <h5 className="text-center landing-text-responsive">
        Nutrivurv is here to help you stay motivated
      </h5>
      <h5 className="text-center landing-text-responsive mb-5 pb-5">
        on your journey to better health.
      </h5>
      <div className="d-md-flex mx-5">
        <div className="text-center mt-4">
          <Badges className=" img-responsive-landing " />
          <h4 className="font-weight-bold">Earn badges</h4>
        </div>
        <div className="text-center mt-4">
          <Goals className="img-responsive-landing" />
          <h4 className="font-weight-bold">Crush your goals</h4>
        </div>
        <div className="text-center mt-4">
          <Friends className="img-responsive-landing " />
          <h4 className="font-weight-bold">Connect with friends</h4>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column my-5">
        <div className="my-4 mt-5">
          <Link type="button" to="/signup">
            <button
              id="join-now"
              className="btn-primary py-2  rounded w-200 border border-secondary"
              style={{ width: "15rem" }}
            >
              Join Now!
            </button>
          </Link>
        </div>
        <div className=" my-4 mb-5">
          <button
            id="signIn-bttn"
            className="btn-secondary py-2  rounded w-200 border border-secondary"
            style={{ width: "15rem" }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
