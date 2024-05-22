import React from "react";
import Image from "next/image";

const AppDownload = () => {
  return (
    <>
      <div className="new-app-download-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-download-content">
                <div className="big-text">Download</div>
                <span className="sub-title">DOWNLOAD APP</span>
                <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                <p>
                  Instant free download from store Cloud based storage for your
                  data backup just log in with your mail account from play store
                  and using whatever you want for your business purpose orem
                  ipsum dummy text.
                </p>

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

            <div className="col-lg-6 col-md-12">
              <div
                className="new-app-download-image text-end"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/home-7-8-9/app-download/download.png"
                  alt="app-img"
                  width={472}
                  height={502}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
