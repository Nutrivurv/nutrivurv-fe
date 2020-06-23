import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import BMI from "./bmi-calc/BMI";
import DietaryPref from "./dietaryPref";
import GettingPersonal from "./GettingPersonal";
import Active from "./ActivityLevelForm";
import SignIn from "../SignIn/SignIn";
import GettingStarted from "./gettingStarted";
const OnBoarding = ({ setStep, step, nextStep, prevStep }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    selected: "",
    gender: "",
    goalWeight: "",
    activityLevel: "",
    customRadio: "",
    DietaryPref: "",
    ft: "",
    inch: "",
    weight: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleChangeKg(e) {
    setUser({
      ...user,
      [e.target.name]: Math.round(e.target.value * 0.45359237),
    });
  }

  function handleDateChange(date) {
    setUser({ ...user, selected: date });
  }

  return (
    <>
      {step === 1 ? (
        <GettingStarted nextStep={nextStep} />
      ) : step === 2 ? (
        <SignUp user={user} nextStep={nextStep} handleChange={handleChange} />
      ) : step === 3 ? (
        <GettingPersonal
          user={user}
          setStep={setStep}
          handleChange={handleChange}
          handleChangeKg={handleChangeKg}
        />
      ) : step === 4 ? (
        <Active user={user} setStep={setStep} handleChange={handleChange} />
      ) : step === 5 ? (
        <DietaryPref
          user={user}
          setStep={setStep}
          handleChange={handleChange}
        />
      ) : step === 6 ? (
        <BMI
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleChange={handleChange}
        />
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default OnBoarding;
