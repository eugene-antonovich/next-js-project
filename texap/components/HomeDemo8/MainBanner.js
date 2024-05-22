import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="new-app-main-banner-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-main-banner-wrap-content">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  #Get Your 14 Days Free Trial
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Manage All Of Your Stuff Using A Texap
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>

                <ul
                  className="user-info"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <li>
                    <Image
                      src="/images/user/user1.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/user/user2.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/user/user3.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/user/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={300}
                      height={300}
                    />
                  </li>
                  <li className="title">4K+ used this App</li>
                </ul>

                <div
                  className="app-btn-box"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <a
                    href="https://www.apple.com/store"
                    className="applestore-btn"
                    target="_blank"
                  >
                    <Image
                      src="/images/apple-store.png"
                      alt="image"
                      width={34}
                      height={35}
                    />
                    Download on the
                    <span>Apple Store</span>
                  </a>

                  <a
                    href="https://play.google.com/store/apps"
                    className="playstore-btn"
                    target="_blank"
                  >
                    <Image
                      src="/images/play-store.png"
                      alt="image"
                      width={27}
                      height={30}
                    />
                    Get It On
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="new-app-main-banner-wrap-image"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <Image
                  src="/images/home-7-8-9/banner/banner-2.png"
                  alt="image"
                  width={950}
                  height={825}
                />

                <div className="wrap-image-shape-1">
                  <Image
                    src="/images/home-7-8-9/banner/shape-3.png"
                    alt="image"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="wrap-image-shape-2">
                  <Image
                    src="/images/home-7-8-9/banner/shape-4.png"
                    alt="image"
                    width={140}
                    height={62}
                  />
                </div>
                <div className="banner-circle">
                  <Image
                    src="/images/home-7-8-9/banner/banner-circle.png"
                    alt="image"
                    width={650}
                    height={650}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new-app-main-banner-wrap-shape">
          <Image
            src="/images/home-7-8-9/banner/shape-5.png"
            alt="image"
            width={584}
            height={555}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
