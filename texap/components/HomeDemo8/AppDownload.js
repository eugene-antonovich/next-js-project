import React from "react";
import Image from "next/image";

const AppDownload = () => {
  return (
    <>
      <div className="new-app-download-wrap-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-download-content">
                <span className="sub-title">DOWNLOAD APP</span>
                <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                <p>
                  Instant free download from store Cloud based storage for your
                  data backup just log in with your mail account from play store
                  and using whatever you want for your business purpose orem
                  ipsum dummy text.
                </p>

                <div className="btn-box color-wrap">
                  <a
                    href="https://www.apple.com/store"
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
                    href="https://play.google.com/store/apps"
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

            <div className="col-lg-6 col-md-12">
              <div
                className="new-app-download-image text-end"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/home-7-8-9/app-download/download-2.png"
                  alt="app-img"
                  width={634}
                  height={615}
                />

                <div className="download-circle">
                  <Image
                    src="/images/home-7-8-9/app-download/download-circle.png"
                    alt="image"
                    width={650}
                    height={650}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-download-shape-1">
          <Image
            src="/images/home-7-8-9/app-download/shape-1.png"
            alt="image"
            width={175}
            height={62}
          />
        </div>
        <div className="app-download-shape-2">
          <Image
            src="/images/home-7-8-9/app-download/shape-2.png"
            alt="image"
            width={159}
            height={96}
          />
        </div>
      </div>
    </>
  );
};

export default AppDownload;
