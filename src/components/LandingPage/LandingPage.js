import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LandingImage } from "../../assets/Splash.svg";

const LandingPage = () => {
  return (
    <div>
      <h1>Tracking your calories just got easier.</h1>
      <p>Connect with friends, earn badges and crush your goals.</p>
      <button className="btn-secondary">Sign In</button>
      <Link to="/signup" className="btn-secondary">
        Sign Up
      </Link>
      <LandingImage />
    </div>
  );
};

export default LandingPage;
