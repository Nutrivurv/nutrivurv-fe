import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import BMI from "./bmi-calc/BMI";
import DietaryPref from "./dietaryPref";
import GettingPersonal from "./GettingPersonal";
import Active from "./ActivityLevelForm";
import SignIn from "../SignIn/SignIn";
import WeightGoals from "./WeightGoals";
import GettingStarted from "./gettingStarted";
import moment from "moment";
const OnBoarding = ({ step, nextStep, prevStep }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    gender: "",
    goalWeight: "",
    activityLevel: "",
    selected: "",
    DietaryPref: "",
    ft: "",
    inch: "",
    weight: "",
    kg: "",
    cm: "",
    weightChangeRate: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  console.log(user);
  function handleChangeKg(e) {
    setUser({
      ...user,
      [e.target.name]: Math.round(e.target.value * 0.45359237),
    });
  }

  function handleDateChange(date) {
    date = date[0];
    setUser({
      ...user,
      selected: moment(date).format("MM-DD-YYYY"),
    });
  }

  return (
    <>
      {step === 1 ? (
        <GettingStarted nextStep={nextStep} />
      ) : step === 5 ? (
        <SignUp
          user={user}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      ) : step === 2 ? (
        <GettingPersonal
          user={user}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
        />
      ) : step === 3 ? (
        <Active
          user={user}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      ) : step === "DietaryPref" ? (
        <WeightGoals
          user={user}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      ) : step === 4 ? (
        <BMI
          nextStep={nextStep}
          setUser={setUser}
          prevStep={prevStep}
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
