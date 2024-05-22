import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const AppIntroVideo = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="app-video-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-intro-video-box">
                <Image
                  src="/images/home-7-8-9/video/video-2.jpg"
                  alt="video-img"
                  width={750}
                  height={500}
                />

                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-youtube"
                >
                  <i className="ri-play-line"></i>
                </div>

                <div className="intro-video-shape">
                  <Image
                    src="/images/home-7-8-9/video/shape-3.png"
                    alt="image"
                    width={159}
                    height={96}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-intro-video-content">
                <span className="sub-title">INTRO VIDEO</span>
                <h2>Watch Our Most Watched Texap App Video</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began. Cloud based storage for your data
                  backup just log in with your mail account from play store and
                  using whatever you want for your business purpose orem ipsum
                  dummy text.Never missyour chance its just began.
                </p>

                <Link href="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppIntroVideo;
