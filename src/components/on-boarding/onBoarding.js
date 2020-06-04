import React, { useState } from "react";
import SignUp from "../SignUp";
import BMI from "./bmi-calc/BMI";
import Landing from "../LandingPage/LandingPage";
import DietaryPref from "./dietaryPref";
const OnBoarding = () => {
  const [user, setUser] = useState({});
  const [step, setStep] = useState("signUp");
  return (
    <>
      {step === "signUp" ? (
        <SignUp setStep={setStep} setUser={setUser} />
      ) : step === "DietaryPref" ? (
        <DietaryPref setStep={setStep} setUser={setUser} />
      ) : step === "BMI" ? (
        <BMI setUser={setUser} />
      ) : (
        <Landing />
      )}
    </>
  );
};

export default OnBoarding;
