import React from "react";
import BMI from "./BMI";

const Marketing = () => {

  return(
    <div>
      <section>
        <div>
          <h2>
            You're one click away <br/>
            from a healthier you.
          </h2>
          <p>
            Join Nutrivurv to track calories, earn <br/>
            badges, and crush your goals.
          </p>
          <button type="button" className="btn btn-primary">Join Now!</button>
        </div>
        <figure>
            
        </figure>
      </section>
      <BMI></BMI>
    </div>
  )
}

export default Marketing