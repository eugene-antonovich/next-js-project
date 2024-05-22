import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="gradient-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="gradient-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Manage All of Your Stuff Using a Texap
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
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

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="gradient-banner-image">
                <Image
                  src="/images/banner/banner-img3.png"
                  alt="banner-img"
                  width={724}
                  height={708}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape1">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={121}
            height={362}
          />
        </div>
        <div className="banner-shape2">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={78}
            height={47}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
