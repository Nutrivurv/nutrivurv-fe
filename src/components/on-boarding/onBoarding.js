import React, { useState } from "react";
import SignUp from '../SignUp/SignUp';
import BMI from "./bmi-calc/BMI";
import Landing from "../LandingPage/LandingPage";

const OnBoarding = () => {
  const [step, setStep] = useState("signUp");
  return (
    <>
      {step === "signUp" ? (
        <SignUp setStep={setStep} />
      ) : step === "BMI" ? (
        <BMI />
      ) : (
        <Landing />
      )}
    </>
  );
};

export default OnBoarding;
