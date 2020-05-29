import React from "react";
import { ReactComponent as LandingImage } from "../../assets/Splash.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Tracking your calories just got easier.</h1>
      <p>Connect with friends, earn badges and crush your goals.</p>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <LandingImage />
    </div>
  );
};

export default LandingPage;
