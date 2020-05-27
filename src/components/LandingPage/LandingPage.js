import React from "react";
import { ReactComponent as LandingImage }from "../../assets/Splash.svg"

const LandingPage = () => {
    return (
        <div>
            <h1>Tracking your calories just got easier.</h1>
            <p>Connect with friends, earn badges and crush your goals</p>
            <button>Sign Up</button>
            <button>Sign In</button>
            <LandingImage />

        </div>
    );

};

export default LandingPage;