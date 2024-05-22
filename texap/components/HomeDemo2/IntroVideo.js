import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const IntroVideo = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="video-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="intro-video-content">
                <span className="sub-title">INTRO VIDEO</span>
                <h2>Watch Our Most Watched Texap App Video</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began. Cloud based storage for your data
                  backup just log in with your mail account from play store and
                  using whatever you want for your business purpose orem ipsum
                  dummy text. Never missyour chance its just began.
                </p>

                <Link href="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="intro-video-box">
                <Image
                  src="/images/video/video-img1.jpg"
                  alt="video-img"
                  width={1100}
                  height={659}
                />

                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-youtube"
                >
                  <i className="ri-play-line"></i>
                </div>

                <div className="shape">
                  <Image
                    className="shape10"
                    src="/images/shape/shape13.png"
                    alt="image"
                    width={99}
                    height={185}
                  />
                  <Image
                    className="shape11"
                    src="/images/shape/shape14.png"
                    alt="image"
                    width={46}
                    height={87}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
