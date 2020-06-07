import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Standard = ({ setBmi, bmi, setUser, user, setStep }) => {
  const handleChanges = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("Complete");
  };

  let height = Number(bmi.ft) * 12 + Number(bmi.inch);
  bmi.total = Math.ceil(
    (((703 * Number(bmi.weight)) / height) * height) / (height * height)
  );

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <input
            className="form-control form-control-sm col-md-2 my-2 ml-3 mr-1"
            type="number"
            id="Height"
            name="ft"
            placeholder="ft"
            value={bmi.ft}
            onChange={handleChanges}
            ref={register({
              required: true,
              maxLength: 1,
            })}
          />
          <input
            className="form-control form-control-sm col-md-2 my-2 mx-1"
            type="number"
            label="In"
            name="inch"
            placeholder="inch"
            value={bmi.inch}
            onChange={handleChanges}
            ref={register({ required: true, maxLength: 2 })}
          ></input>
          <input
            className="form-control form-control-sm col-md-2 my-2 mx-1"
            type="number"
            label="Your Height"
            name="weight"
            placeholder="lbs"
            value={bmi.weight}
            onChange={handleChanges}
            ref={register({ required: true, maxLength: 3 })}
          ></input>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn btn-outline-info mb-3"
          type="submit"
        >
          Submit
        </button>
        {errors.ft && (
          <small className="text-danger">{"Please add height"}</small>
        )}
        {errors.weight && (
          <small className="text-danger">{"Please add weight"}</small>
        )}
        <h5>
          Your BMI:{" "}
          <span className="text-info">
            {isNaN(bmi.total) ? "0" : bmi.total}
          </span>
        </h5>
      </form>
    </>
  );
};

export default Standard;
