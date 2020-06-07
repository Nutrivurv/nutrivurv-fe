import React from "react";
import { useForm } from "react-hook-form";

const Metric = ({ bmi, setBmi, setUser, user, setStep }) => {
  const handleChanges = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("Complete");
  };

  let meters = Number(bmi.cm) / 100;
  let height = meters * meters;
  bmi.total = Math.ceil(Number(bmi.kg) / height);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <input
            className="form-control form-control-sm col-md-2 my-2 ml-3 mr-1"
            type="number"
            label="Your Height"
            name="cm"
            placeholder="cm"
            value={bmi.cm}
            onChange={handleChanges}
            ref={register({ required: true, maxLength: 3 })}
          />
          <input
            className="form-control form-control-sm col-md-2 my-2 mx-1"
            type="number"
            label="Your Height"
            name="kg"
            placeholder="kg"
            value={bmi.kg}
            onChange={handleChanges}
            ref={register({ required: true, maxLength: 3 })}
          />
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn btn-outline-info mb-3"
          type="submit"
        >
          Submit
        </button>
        {errors.cm && (
          <small className="text-danger">{"Please add height"}</small>
        )}
        {errors.kg && (
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

export default Metric;
