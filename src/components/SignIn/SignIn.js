import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SignInImage } from "../../assets/GirlComptr.svg";

const SignIn = () => {
  return (
    <div className="row d-flex justify-content-around">
      <div>
        <h2 className= "text-center"> Sign In </h2>
        <p>Let's start crushing those goals!</p>
        <form role="form">
          <div className="form-group ">
            <label htmlFor="inputEmail" className="control-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="email@email.com"
              required
            />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group col-sm-15">
            <label htmlFor="input-password">Password</label>
            <input
              type="password"
              data-minlength="8"
              className="form-control"
              id="inputPassword"
              placeholder="8-12 Characters"
              required
            />
          </div>

          <button type="submit" className="btn-primary form-group col-sm-12">
            Sign In
          </button>
        </form>
        <p>Not a member? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div>
        <SignInImage className="col-md-15" />
      </div>
    </div>
  );
};

export default SignIn;
