import React from "react";
import Image from "next/image";

const AppDownloadStyle3 = () => {
  return (
    <>
      <div className="app-download-area pb-100">
        <div className="container">
          <div className="app-download-inner bg-gradient-color">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="app-download-content">
                  <span className="sub-title">DOWNLOAD APP</span>
                  <h2>Let's Get Your Free Copy From Apple and Play Store</h2>

                  <div className="btn-box">
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
                    <a
                      href="https://www.apple.com/app-store/"
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
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <div className="app-download-image">
                  <Image
                    src="/images/app/app-img5.png"
                    alt="app-img"
                    width={730}
                    height={562}
                  />
                </div>
              </div>
            </div>

            <div className="shape5">
              <Image
                src="/images/shape/shape4.png"
                alt="shape4"
                width={121}
                height={363}
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

export default AppDownloadStyle3;
