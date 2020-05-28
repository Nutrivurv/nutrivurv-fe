import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1> Sign Up </h1>
      <form role="form" data-toggle="validator">
        <div className="form-group col-sm-6">
          <label htmlFor="input-name">Your Name</label>
          <input
            type="email"
            className="form-control"
            id="name"
            placeholder="First and Last Name"
          />
        </div>

        <div className="form-group col-sm-6">
          <label htmlFor="inputEmail" className="control-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="email@email.com"
            data-error="Bruh, that email address is invalid"
            required
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group col-sm-6">
          <label htmlFor="input-password">Password</label>
          <input
            type="password"
            data-minlength="8"
            className="form-control"
            id="inputPassword"
            placeholder="8-12 Characters"
            required
          />
          <div className="help-block"></div>
        </div>

        <div className="form-group col-sm-6">
          <label htmlFor="input-confirm-password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordConfirm"
            data-match="#inputPassword"
            data-match-error="Whoops, these don't match"
            placeholder="8-12 Characters"
            required
          />
          <div className="help-block with-errors"></div>
        </div>

        <button type="submit" className="btn-primary ">
          Let's Go!
        </button>
      </form>
      <p>Already a member?</p>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default SignUp;
