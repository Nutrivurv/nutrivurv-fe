import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import BMI from "./bmi-calc/BMI";
import DietaryPref from "./dietaryPref";
import GettingPersonal from "./GettingPersonal";
import Active from "./ActivityLevelForm";
import SignIn from "../SignIn/SignIn";
import WeightGoals from "./WeightGoals";
import GettingStarted from "./gettingStarted";
const OnBoarding = () => {
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
    weightChangeRate: "",
  });
  const [step, setStep] = useState("gettingStarted");

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
      {step === "gettingStarted" ? (
        <GettingStarted setStep={setStep} />
      ) : step === "signUp" ? (
        <SignUp user={user} setStep={setStep} handleChange={handleChange} />
      ) : step === "GettingPersonal" ? (
        <GettingPersonal
          user={user}
          setStep={setStep}
          handleChange={handleChange}
          handleChangeKg={handleChangeKg}
        />
      ) : step === "ActivityLevel" ? (
        <Active user={user} setStep={setStep} handleChange={handleChange} />
      ) : step === "DietaryPref" ? (
        <WeightGoals
          user={user}
          setStep={setStep}
          handleChange={handleChange}
        />
      ) : step === "WeightGoal" ? (
        <DietaryPref
          user={user}
          setStep={setStep}
          handleChange={handleChange}
        />
      ) : step === "BMI" ? (
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
