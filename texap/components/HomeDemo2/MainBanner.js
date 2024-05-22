import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="banner-area">
        <div className="container-fluid">
          <div className="row align-items-center m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Get your 14 days free trail
                </span>

                <h1
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  The Revolutionary App That Makes Your Life Easier Than Others
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>

                <Link
                  href="/sign-in"
                  className="default-btn"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 p-0"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="banner-image">
                <Image
                  src="/images/banner/banner-app2.png"
                  alt="image"
                  width={1080}
                  height={1012}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape3">
          <Image
            src="/images/shape/shape2.png"
            alt="image"
            width={149}
            height={185}
          />
        </div>
        <div className="shape13">
          <Image
            src="/images/shape/shape15.png"
            alt="shape"
            width={77}
            height={47}
          />
        </div>
        <div className="banner-shape6">
          <Image
            src="/images/shape/shape16.png"
            alt="image"
            width={104}
            height={104}
          />
        </div>
        <div className="banner-shape7">
          <Image
            src="/images/shape/shape11.png"
            alt="image"
            width={221}
            height={221}
          />
        </div>
        <div className="banner-shape8">
          <Image
            src="/images/shape/shape11.png"
            alt="image"
            width={221}
            height={221}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
