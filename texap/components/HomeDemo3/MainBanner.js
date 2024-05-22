import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="banner-wrapper-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="banner-wrapper-content">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Secure Application
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Manage All of Your Stuff Using a Texap
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>

                <Link
                  href="/contact"
                  className="default-btn"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="banner-wrapper-image">
                <div className="banner-img">
                  <Image
                    src="/images/banner/banner-img1.png"
                    alt="banner-img"
                    width={456}
                    height={723}
                  />
                </div>
                <div
                  className="banner-img"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <Image
                    src="/images/banner/banner-img2.png"
                    alt="banner-img"
                    width={455}
                    height={576}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape13">
          <Image
            src="/images/shape/shape15.png"
            alt="shape"
            width={77}
            height={47}
          />
        </div>
        <div className="shape14">
          <Image
            src="/images/shape/shape17.png"
            alt="shape"
            width={46}
            height={87}
          />
        </div>
        <div className="shape15">
          <Image
            src="/images/shape/shape18.png"
            alt="shape"
            width={221}
            height={76}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
