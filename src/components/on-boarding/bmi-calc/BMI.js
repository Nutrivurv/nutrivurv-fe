import React, { useState } from "react";
import Standard from "./standard";
import Metric from "./metric";
import OnBoardingImg from "../onBoarding-img";
const BMI = ({ setUser, user, handleChange, setStep }) => {
  const [bttn, setBttn] = useState(true);
  const [bmi, setBmi] = useState({
    ft: "",
    inch: "",
    weight: "",
    age: "",
    kg: "",
    cm: "",
    total: 0,
  });

  return (
    <section
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          Enter Height & Weight
        </h2>
        <div className="mt-4">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button
              type="button"
              onClick={() => setBttn(!bttn)}
              className={`btn ${
                bttn === true ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setBttn(!bttn)}
              className={`btn ${
                bttn === false ? "btn-primary " : "btn-outline-primary"
              }`}
            >
              Metric
            </button>
          </div>
          {bttn === true ? (
            <Standard
              bmi={bmi}
              setBmi={setBmi}
              setUser={setUser}
              user={user}
              handleChange={handleChange}
              setStep={setStep}
            />
          ) : (
            <Metric
              bmi={bmi}
              setStep={setStep}
              setBmi={setBmi}
              setUser={setUser}
              user={user}
            />
          )}
        </div>
        <div className="text-muted mt-3">
          <h5>BMI Categories:</h5>
          <p>
            <small>
              Underweight = 18.5
              <br />
              Normal Weight = 18.5 - 24.9
              <br />
              Overweight = 25 - 29.9
              <br />
              Obese = BMI of 30 or greater
            </small>
          </p>
        </div>
      </div>
      <OnBoardingImg />
    </section>
  );
};

export default BMI;
