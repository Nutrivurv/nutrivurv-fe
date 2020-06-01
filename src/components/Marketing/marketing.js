import React from "react";
import { ReactComponent as LandingImage }from "../../assets/Splash.svg"

const Marketing = () => {

  return(
    <div className="marketing container-xl">
      <section className="mt-5 ml-lg-5">
        <div className="ml-5 ">
          <h2 className="row-8 ml-5">
            Tracking your calories <br/>
            just got easier.
          </h2>
          <p className="row-8 ml-5">
            Nutrivurv is an easy to use <br/>
            motivating food and nutrition <br/>
            tracking app.
          </p>
          <button type="button" className="btn btn-primary ml-5">Sign Up</button>
        </div>
        <figure className="row px-0 ml-5">
            <LandingImage width="300px"/>
        </figure>
      </section>
    </div>
  )
}

export default Marketing