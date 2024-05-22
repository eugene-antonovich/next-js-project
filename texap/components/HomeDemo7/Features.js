import React from "react";

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-smartphone-line"></i>
                  <div className="number">1</div>
                </div>
                <h3>User Friendly</h3>
                <p>
                  Most Provably best dashboard design for your business you can.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-award-line"></i>
                  <div className="number">2</div>
                </div>
                <h3>Award-Winning App</h3>
                <p>
                  Most Provably best dashboard design for your business you can.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-fingerprint-line"></i>
                  <div className="number">3</div>
                </div>
                <h3>Privacy Protected</h3>
                <p>
                  Most Provably best dashboard design for your business you can.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-vip-diamond-line"></i>
                  <div className="number">4</div>
                </div>
                <h3>Lifetime Update</h3>
                <p>
                  Most Provably best dashboard design for your business you can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
