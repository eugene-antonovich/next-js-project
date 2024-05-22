import React from "react";
import Image from "next/image";

const FreeTrialStyle3 = () => {
  return (
    <>
      <div className="free-trial-area">
        <div className="container">
          <div className="free-trial-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <span className="sub-title">FREE TRIAL</span>
                  <h2>Start Your 14 Days Free Trials Today!</h2>

                  <form
                    className="free-trial-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
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

              <div className="col-lg-6 col-md-12">
                <div
                  className="image"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/app/app-img6.png"
                    alt="free-trial"
                    width={463}
                    height={427}
                  />
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="shape8">
              <Image
                src="/images/shape/shape7.png"
                alt="shape"
                width={78}
                height={47}
              />
            </div>
            <div className="shape9">
              <Image
                src="/images/shape/shape8.png"
                alt="shape"
                width={125}
                height={101}
              />
            </div>

            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrialStyle3;
