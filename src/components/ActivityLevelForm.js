import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as GirlComputerImg } from "../assets/GirlComptr.svg";

const ActivityLevelForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-2">
      <div className="container mt-5">
        <div className="row">
          <h1>How active are you?</h1>
        </div>
        <div className="row justify-content-between">
          <div className="p-2 w-50">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mt-5 mb-5">
                <div className="d-flex flex-row align-items-center">
                  <input
                    type="radio"
                    name="activity-level"
                    ref={register}
                    value="0"
                  />
                  <div className="ml-4 mb-2">
                    <label className="mb-0">
                      <h4>Not Very Active</h4>
                    </label>
                    <p>Spend most of the day sitting (little to no exercise)</p>
                  </div>
                </div>
                <div className="border-bottom"></div>
                <br />
                <br />
                <div className="d-flex flex-row align-items-center">
                  <input
                    type="radio"
                    name="activity-level"
                    ref={register}
                    value="1"
                  />
                  <div className="ml-4 mb-2">
                    <label className="mb-0">
                      <h4>Lightly Active</h4>
                    </label>
                    <p>
                      Spend a good part of the day on your feet (light exercise
                      1-3 days / week)
                    </p>
                  </div>
                </div>
                <div className="border-bottom"></div>
                <br />
                <br />
                <div className="d-flex flex-row align-items-center">
                  <input
                    type="radio"
                    name="activity-level"
                    ref={register}
                    value="2"
                  />
                  <div className="ml-4 mb-2">
                    <label className="mb-0">
                      <h4>Active</h4>
                    </label>
                    <p>
                      Spend a good part of the day doing some physical activity
                      (moderate exercise 3-5 days / week)
                    </p>
                  </div>
                </div>
                <div className="border-bottom"></div>
                <br />
                <br />
                <div className="d-flex flex-row align-items-center">
                  <input
                    type="radio"
                    name="activity-level"
                    ref={register}
                    value="3"
                  />
                  <div className="ml-4 mb-2">
                    <label className="mb-0">
                      <h4>Very Active</h4>
                    </label>
                    <p>
                      Spend most of the day doing heavy physical activity (very
                      strenuous exercise, or physical job daily)
                    </p>
                  </div>
                </div>
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
          <div className="col-sm d-none d-xs-none d-sm-none d-md-block">
            <GirlComputerImg className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLevelForm;
