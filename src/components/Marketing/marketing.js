import React from "react";
import { ReactComponent as LandingImage } from "../../assets/Splash.svg";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div className="marketing">
      <section className=" ml-md-5">
        <div className="ml-5 mt-3">
          <h1 className="row-8 ml-5" style={{ fontSize: "5.5vw" }}>
            Tracking your calories <br />
            just got easier.
          </h1>
          <p className="row-8 ml-5" style={{ fontSize: "2.5vw" }}>
            Nutrivurv is an easy to use <br />
            motivating food and nutrition <br />
            tracking app.
          </p>
          <Link type="button" to="/signup">
            <button className="btn btn-primary ml-5 btn-primary">
              Sign Up
            </button>
          </Link>
        </div>
        <figure className="row px-0 mt-5 ml-5">
          <LandingImage className="lp-img" />
        </figure>
      </section>
    </div>
  );
};

export default Marketing;
