import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as SignInImage } from "../../assets/GirlComptr.svg";

const DietaryPref = ({ setStep, handleChange }) => {
  const customRadio = "custom-control custom-radio mb-2";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setStep("BMI");
  };
  return (
    <div className="row d-flex justify-content-around ml-5 pl-4">
      <div className="col-md-5 pt-5">
        <h2 className="text-center mb-5"> Dietary Preference </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-group"
          role="form col-md-5"
        >
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
              value="0"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              Keto
            </label>
          </div>
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              className="custom-control-input"
              value="1"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              Paleo
            </label>
          </div>
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio3"
              name="customRadio"
              className="custom-control-input"
              value="2"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio3">
              US. Gov. Nutrition Guidlines
            </label>
          </div>
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio4"
              name="customRadio"
              className="custom-control-input"
              value="3"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio4">
              None
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary form-group col-md-6 rounded-sm mt-5"
          >
            Next
          </button>
        </form>
      </div>
      <div>
        <SignInImage
          className="img-responsive pb-5 ml-3 pl-5"
          alt="Responsive SignIn image"
        />
      </div>
    </div>
  );
};

export default DietaryPref;
