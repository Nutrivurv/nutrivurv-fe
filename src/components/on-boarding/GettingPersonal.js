import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as GettingPersonalImg } from "../../assets/GirlComptr.svg";

const GettingPersonal = ({ setStep, handleChange }) => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("ActivityLevel");
  };

  return (
    <div className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5">
      <div className="mt-5 col-xl-3 pt-5">
        <h1 className="text-center pb-5 font-weight-bolder mt-5">
          Getting Personal
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="mb-0">How old are you?</label>
            <input
              type="number"
              className="rounded p-3 w-100 border border-primary"
              name="age"
              id="age"
              placeholder="Age"
              onChange={handleChange}
              ref={register({
                required: (
                  <small
                    id="passwordHelpBlock"
                    className="text-danger form-text"
                  >
                    {"required"}
                  </small>
                ),
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Use numbers only",
                },
              })}
            />
            {errors.age && (
              <small id="passwordHelpBlock" className="text-danger form-text">
                {errors.age.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <label className="mb-0">How do you identify?</label>
            <select
              type="radio"
              className="rounded p-3 w-100 border border-primary"
              id="gender"
              placeholder="Gender"
              name="gender"
              onChange={handleChange}
              required
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="form-group">
            <label className="mb-0">Add your goal weight</label>
            <input
              className="rounded p-3 w-100 border border-primary"
              name="goalWeight"
              id="goalWeight"
              placeholder="Enter weight"
              onChange={handleChange}
              ref={register({
                required: (
                  <small
                    id="passwordHelpBlock"
                    className="text-danger form-text"
                  >
                    {"required"}
                  </small>
                ),
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Use numbers only",
                },
              })}
            />
            {errors.weight && (
              <small id="passwordHelpBlock" className="text-danger form-text">
                {errors.weight.message}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary"
            onClick={handleSubmit(onSubmit)}
          >
            Continue
          </button>
        </form>
      </div>
      <div>
        <GettingPersonalImg
          className=" d-none d-xl-block col img-responsive pb-2 pt-5 "
          alt="Responsive Getting Personal image"
        />
      </div>
    </div>
  );
};

export default GettingPersonal;
