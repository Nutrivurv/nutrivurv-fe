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

  const formGroup = "col-sm-12 col-md-4 form-group";

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <div className={formGroup}>
            <label htmlFor="feet">Feet</label>
            <input
              className="form-control form-control-sm"
              type="number"
              id="feet"
              name="ft"
              placeholder="ft"
              value={bmi.ft}
              onChange={handleChanges}
              ref={register({
                required: true,
                maxLength: 1,
              })}
            />
            {errors.ft && (
              <small className="text-danger">
                {"Please add height in feet"}
              </small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="inches">Inches</label>
            <input
              className="form-control form-control-sm"
              type="number"
              id="inches"
              name="inch"
              placeholder="in"
              value={bmi.inch}
              onChange={handleChanges}
              ref={register({ required: true, maxLength: 2 })}
            />
            {errors.inch && (
              <small className="text-danger">{"Add inches"}</small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="pounds">Pounds</label>
            <input
              className="form-control form-control-sm"
              type="number"
              id="pounds"
              name="weight"
              placeholder="lbs"
              value={bmi.weight}
              onChange={handleChanges}
              ref={register({ required: true, maxLength: 3 })}
            />
            {errors.weight && (
              <small className="text-danger">{"Please add weight"}</small>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn-primary rounded p-2 w-100 border border-primary mt-2 mb-4"
          type="submit"
        >
          Submit
        </button>
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
