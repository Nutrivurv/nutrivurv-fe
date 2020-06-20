import React from "react";
import { addDays } from 'date-fns';
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OnBoardingImg from "../on-boarding/onBoarding-img";
const GettingPersonal = ({
  setStep,
  handleChangeKg,
  handleChange,
  handleDateChange,
  user,
}) => {
  const { register, handleSubmit, errors, reset, control } = useForm({});

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("ActivityLevel");
  };

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-5">
        <h1 className="text-center pb-5 font-weight-bolder mt-5">
          Getting Personal
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group d-block">
            <div>
              <label className="mb-0">What's your date of birth?</label>
            </div>
            <div>
              <Controller
                as={ReactDatePicker}
                control={control}
                valueName="selected"
                name="selected"
                className="datepicker-input py-3 px-2 w-100 rounded border border-primary "
                defaultValue={user.selected}
                selected={user.selected}
                onChange={handleDateChange}
                placeholderText="--/--/----"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={addDays(new Date(), -5475)}
                //earliest birth date you're able to select is 15 years before the current date
              />
            </div>
          </div>
          <div className="form-group">
            <label className="mb-0">How do you identify?</label>
            <select
              className="py-3 px-2 w-100 rounded border border-primary"
              id="gender"
              name="gender"
              onChange={handleChange}
              defaultValue={user.gender}
              ref={register({
                required: {
                  value: true,
                  message: "required",
                },
              })}
            >
              <option disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <small className="text-danger form-text">
                {errors.gender.message}
              </small>
            )}
          </div>
          <button
            data-cy="submit"
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary"
            onClick={handleSubmit(onSubmit)}
          >
            Continue
          </button>
          <button
            onClick={() => setStep("signUp")}
            className="mt-3 btn-secondary rounded p-2 w-100"
          >
            Back
          </button>
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default GettingPersonal;
