import React from "react";
import Link from "next/link";

const KeyFeatures = () => {
  return (
    <>
      <div className="key-features-area bg-transparent-with-color pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">KEY FEATURES</span>
            <h2>Most Probably Included Best Features Ever</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="key-features-card style-two">
                <div className="icon">
                  <i className="ri-eye-line"></i>
                </div>
                <h3>High Resolution</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two style-two">
                <div className="icon bg2">
                  <i className="ri-stack-line"></i>
                </div>
                <h3>Retina Ready Screen</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="key-features-card style-two">
                <div className="icon">
                  <i className="ri-leaf-line"></i>
                </div>
                <h3>Easy Editable Data</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two style-two">
                <div className="icon bg2">
                  <i className="ri-secure-payment-line"></i>
                </div>
                <h3>Fully Secured</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="key-features-card style-two">
                <div className="icon">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>Cloud Storage</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two style-two">
                <div className="icon bg2">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Responsive Ready</h3>
                <p>
                  Just log in with your mail account from play store and using
                  whatever you want for your able business purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="key-features-btn">
            <Link href="/app-download" className="default-btn">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
