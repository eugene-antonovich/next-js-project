import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingPlanStyle4 = () => {
  return (
    <>
      <div className="pricing-area pb-75">
        <div className="container">
          <div className="pricing-tabs">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="pricing-section-title black-color">
                  <span className="sub-title">PRICING TABLE</span>
                  <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div 
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                  >
                    <div className="single-pricing-table with-border">
                      <div className="title">
                        <h3>Small Team</h3>
                        <p>Powerful & awesome elements</p>
                      </div>
                      <span className="popular">Most Popular</span>
                      <div className="price">
                        $49 <span>/Month</span>
                      </div>

                      <Link href="/sign-in" className="default-btn">
                        Purchase Plan
                      </Link>

                      <ul className="features-list">
                        <li>
                          <i className="ri-check-line"></i> Up to 10 Website
                        </li>
                        <li>
                          <i className="ri-check-line"></i> Lifetime free
                          Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 10 GB Dedicated
                          Hosting free
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 24/7 Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> SEO Optimized
                        </li>
                        <li>
                          <i className="ri-close-line"></i> Live Support
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                  >
                    <div className="single-pricing-table with-border">
                      <div className="title">
                        <h3>Business</h3>
                        <p>Powerful & awesome elements</p>
                      </div>
                      <div className="price">
                        $69 <span>/Month</span>
                      </div>

                      <Link href="/sign-in" className="default-btn">
                        Purchase Plan
                      </Link>

                      <ul className="features-list">
                        <li>
                          <i className="ri-check-line"></i> Up to 100 Website
                        </li>
                        <li>
                          <i className="ri-check-line"></i> Lifetime free
                          Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 100 GB Dedicated
                          Hosting free
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 24/7 Live Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> SEO Optimized
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape7">
          <Image
            src="/images/shape/shape6.png"
            alt="shape"
            width={221}
            height={125}
          />
        </div>
        <div className="shape8">
          <Image
            src="/images/shape/shape7.png"
            alt="shape"
            width={78}
            height={47}
          />
        </div>
      </div>
    </>
  );
};

export default PricingPlanStyle4;
