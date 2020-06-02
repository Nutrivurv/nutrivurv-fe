import React from "react";
import { ReactComponent as GettingPersonalImg } from "../assets/GirlComptr.svg";

const GettingPersonal = () => {
  return (
    <div>
      <div>
        <h2>Getting Personal</h2>
        <form>
          <div className="form-group">
            <label>How old are you?</label>
          </div>
          <div className="form-group">
            <label>How do you identify?</label>
          </div>
          <div className="form-group">
            <label>Add your goal weight</label>
          </div>
          <button type="submit"></button>
        </form>
      </div>
      <div>
        <GettingPersonalImg />
      </div>
    </div>
  );
};

export default GettingPersonal;
