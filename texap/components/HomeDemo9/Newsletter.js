import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <div className="new-free-trial-area pb-100">
        <div className="container">
          <div className="new-free-trial-inner-box wrap-with-gradient">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-9">
                <div className="new-free-trial-content">
                  <span className="sub-title">FREE TRIAL</span>
                  <h2>Start Your 14 Days Free Trials Today!</h2>
                  
                  <form className="free-trial-form">
                    <input
                      type="text"
                      className="input-newsletter"
                      placeholder="Enter Your Email Address"
                      name="email"
                    />
                    <button type="submit" className="default-btn">
                      Get Started
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="new-free-trial-image">
                  <Image
                    src="/images/home-7-8-9/free-trial/free-trial.png"
                    alt="image"
                    width={255}
                    height={260}
                  />
                </div>
              </div>
            </div>

            <div className="new-free-trial-shape">
              <Image
                src="/images/home-7-8-9/free-trial/shape.png"
                alt="image"
                width={139}
                height={129}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
