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
  const formGroup = "col-sm-12 col-md-4 form-group";
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row my-3">
          <div className={formGroup}>
            <label htmlFor="centimeters">Centimeters</label>
            <input
              className="form-control form-control-sm"
              type="number"
              id="centimeters"
              name="cm"
              placeholder="cm"
              defaultValue={bmi.cm}
              onChange={handleChanges}
              ref={register({ required: true, maxLength: 3 })}
            />
            {errors.cm && (
              <small className="text-danger">
                {"Please add height in Centimeters"}
              </small>
            )}
          </div>
          <div className={formGroup}>
            <label htmlFor="kilograms">kilograms</label>
            <input
              className="form-control form-control-sm"
              type="number"
              id="kilograms"
              name="kg"
              placeholder="kg"
              defaultValue={bmi.kg}
              onChange={handleChanges}
              ref={register({ required: true, maxLength: 3 })}
            />
            {errors.kg && (
              <small className="text-danger">
                {"Please add weight in Kilograms"}
              </small>
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

export default Metric;
