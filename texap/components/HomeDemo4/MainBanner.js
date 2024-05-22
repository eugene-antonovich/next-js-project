import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="content">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Get your 14 days free trail
            </span>

            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              The Revolutionary App That Makes Your Life Easier Than Others
            </h1>

            <Link
              href="/sign-in"
              className="default-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Start Free Trial
            </Link>

            <div>
              <Image
                src="/images/banner/banner-app3.png"
                alt="image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                width={1174}
                height={709}
              />
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
        <div className="banner-shape8">
          <Image
            src="/images/shape/shape11.png"
            alt="image"
            width={221}
            height={221}
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
      </div>
    </>
  );
};

export default MainBanner;
