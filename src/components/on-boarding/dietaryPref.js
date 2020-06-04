import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SignInImage } from "../../assets/GirlComptr.svg";

const DietaryPref = ({ setStep }) => {
  const customRadio = "custom-control custom-radio mb-2";
  return (
    <div className="row d-flex justify-content-around ml-5 pl-4">
      <div className="col-md-5 pt-5">
        <h2 className="text-center mb-5"> Dietary Preference </h2>
        <form
          onSubmit={() => setStep("BMI")}
          className="form-group"
          role="form col-md-5"
        >
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
              disabled=""
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
              disabled=""
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
              disabled=""
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
        <button
          onClick={() => setStep("signUp")}
          className="btn-secondary form-group col-md-6 rounded-sm mt-5"
        >
          Back
        </button>
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
