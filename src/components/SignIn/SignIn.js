import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SignInImage } from "../../assets/GirlComptr.svg";

const SignIn = () => {
  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-5">
        <h1 className="text-center pb-3 font-weight-bolder mt-5"> Sign In </h1>
        <h4 className="text-center pb-5">
          Let&apos;s start crushing those goals!
        </h4>
        <form>
          <div className="form-group">
            <label className="mb-0">E-mail</label>
            <input
              type="email"
              className="rounded p-3 w-100 border border-primary"
              id="inputEmail"
              placeholder="email@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0">Password</label>
            <input
              type="password"
              data-minlength="8"
              className="rounded p-3 w-100 border border-primary"
              id="inputPassword"
              placeholder="8-12 Characters"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary"
          >
            Sign In
          </button>
        </form>
        <div className="d-flex justify-content-center mt-3 p-2">
          <p className="mr-2">
            Not a member? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <div>
        <SignInImage
          className=" d-none d-xl-block col img-responsive pb-5 pt-5 "
          alt="Responsive Sign In image"
        />
      </div>
    </div>
  );
};

export default SignIn;
