import React, { useState } from "react";

const Standard = ({ setBmi, bmi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    calc(bmi);
  };

  const handleChanges = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
  };

  const calc = (bmi) => {
    let height = Number(bmi.ft) * 12 + Number(bmi.inch);
    const userBmi = Math.ceil(
      (((703 * Number(bmi.weight)) / height) * height) / (height * height)
    );
    return setBmi({ ...bmi, total: userBmi });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row my-3">
          <input
            className="form-control form-control-sm col-md-2 my-2 ml-3 mr-1"
            type="text"
            id="Height"
            name="ft"
            placeholder="ft"
            value={bmi.ft}
            onChange={handleChanges}
          ></input>
          <input
            className="form-control form-control-sm col-md-2 my-2 mx-1"
            type="text"
            label="In"
            name="inch"
            placeholder="inch"
            value={bmi.inch}
            onChange={handleChanges}
          ></input>
          <input
            className="form-control form-control-sm col-md-2 my-2 mx-1"
            type="text"
            label="Your Height"
            name="weight"
            placeholder="lbs"
            value={bmi.weight}
            onChange={handleChanges}
          ></input>
        </div>
        <button className="btn btn-outline-info mb-3" type="submit">
          Calculate
        </button>
        <h5>
          Your BMI: <span className="text-info">{bmi.total}</span>
        </h5>
      </form>
    </>
  );
};

export default Standard;
