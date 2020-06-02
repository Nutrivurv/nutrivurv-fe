import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ReactComponent as SignUpImage } from "../assets/GirlComptr.svg";

const SignUp = ({ setStep }) => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("BMI")
  };
  return (
    <div>
      <h2> Sign Up </h2>
      <h5>You&apos;re one step closer to your goals!</h5>
      <form data-toggle="validator" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group col-sm-6">
          <label>Your Name</label>
          <input
            name="username"
            placeholder="First and Last Name"
            ref={register({
              required: "Required",
              pattern: {
                value: /\b[^\d\W]+\b/g,
                message: "Invalid name entry",
              },
            })}
          />
          {errors.username && errors.username.message}
        </div>

        <div className="form-group col-sm-6">
          <label>E-mail</label>
          <input
            name="email"
            placeholder="email@email.com"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && errors.email.message}
        </div>

        <div className="form-group col-sm-6">
          <label>Password</label>
          <input
            name="password"
            placeholder="8-12 characters"
            type="password"
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              maxLength: {
                value: 12,
                message: "Password cannot have more than 12 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="form-group col-sm-6">
          <label>Confirm Password</label>
          <input
            name="password_repeat"
            placeholder="Confirm Password"
            type="password"
            ref={register({
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        </div>

        <button
          type="submit"
          className="btn-primary"
          onClick={handleSubmit(onSubmit)}
        >
          Let&apos;s Go!
        </button>
      </form>

      <div>
        <SignUpImage />
      </div>
      <Link to="/signin">Already a member?</Link>
    </div>
  );
};

export default SignUp;
