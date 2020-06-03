import React, { useState } from "react";
import Standard from "./standard";
import Metric from "./metric";
import { ReactComponent as GirlComp } from "../../../assets/GirlComptr.svg";
const BMI = () => {
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
    <section className="row flex-md-row flex-column justify-content-center align-items-center">
      <div className="col-6 col-md-4">
        <div>
          <h2>Calculate your BMI</h2>
        </div>
        <div className="mt-4">
          <h5>Enter Height & Weight</h5>
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
                bttn === false ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              Metric
            </button>
          </div>
          {bttn === true ? (
            <Standard bmi={bmi} setBmi={setBmi} />
          ) : (
            <Metric bmi={bmi} setBmi={setBmi} />
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
        <button className="btn-primary">Next</button>
      </div>
      <div className="col-6 col-md-4">
        <GirlComp width="40vw" height="60vh" />
      </div>
    </section>
  );
};

export default BMI;
