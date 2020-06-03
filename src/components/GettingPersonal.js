import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as GettingPersonalImg } from "../assets/GirlComptr.svg";

const GettingPersonal = () => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="row d-flex justify-content-around ml-5 pl-4">
      <div className="col-md-5 pt-5">
        <h2 className="text-center">Getting Personal</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>How old are you?</label>
            <input
              className="form-control"
              name="age"
              placeholder="Age"
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
            <label>How do you identify?</label>
            <select className="form-control" placeholder="Gender" required>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="form-group">
            <label>Add your goal weight</label>
            <input
              className="form-control"
              name="weight"
              placeholder="Enter weight"
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
            className="btn-primary form-group col-md-12 rounded-sm"
            onClick={handleSubmit(onSubmit)}
          >
            Continue
          </button>
        </form>
      </div>
      <div>
        <GettingPersonalImg
          className="img-responsive pb-5 ml-3 pl-5"
          alt="Responsive SignIn image"
        />
      </div>
    </div>
  );
};

export default GettingPersonal;
