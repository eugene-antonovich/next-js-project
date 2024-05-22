import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="gradient-main-banner">
        <div className="container-fluid">
          <div className="gradient-main-banner-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <span
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    #Get your 14 days free trail
                  </span>

                  <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    The Revolutionary App That Makes Your Life Easier Than
                    Others App
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
                    href="/sign-in"
                    className="default-btn"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <Image
                    src="/images/banner/banner-img4.png"
                    alt="banner-img"
                    width={680}
                    height={707}
                  />
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="banner-shape2">
              <Image
                src="/images/shape/shape7.png"
                alt="image"
                width={78}
                height={47}
              />
            </div>
            <div className="banner-shape9">
              <Image
                src="/images/shape/shape21.png"
                alt="image"
                width={175}
                height={60}
              />
            </div>
            <div className="banner-shape10">
              <Image
                src="/images/shape/shape21.png"
                alt="image"
                width={175}
                height={60}
              />
            </div>
            <div className="banner-shape11">
              <Image
                src="/images/shape/shape22.png"
                alt="image"
                width={362}
                height={121}
              />
            </div>
            <div className="banner-shape3">
              <Image
                src="/images/shape/shape2.png"
                alt="image"
                width={149}
                height={185}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
