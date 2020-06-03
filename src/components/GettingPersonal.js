import React from "react";
import { ReactComponent as GettingPersonalImg } from "../assets/GirlComptr.svg";

const GettingPersonal = () => {
  return (
    <div className="row d-flex justify-content-around ml-5 pl-4">
      <div className="col-md-5 pt-5">
        <h2 className="text-center">Getting Personal</h2>
        <form role="form col-md-5">
          <div className="form-group">
            <label>How old are you?</label>
            <input
              type="text"
              pattern="[0-9]*"
              className="form-control"
              placeholder="Age"
              required
            />
          </div>
          <div className="form-group">
            <label>How do you identify?</label>
            <select className="form-control" placeholder="Gender" required>
              <option defaultValue>Gender</option>
              <option value={true}>Female</option>
              <option value={false}>Male</option>
            </select>
          </div>
          <div className="form-group">
            <label>Add your goal weight</label>
            <input
              className="form-control"
              placeholder="Enter weight"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary form-group col-md-12 rounded-sm"
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
