import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
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

      <div
        className="video-area"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div className="container">
          <div className="video-box">
            <Image
              src="/images/video/video-img2.jpg"
              alt="video-image"
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
                className="shape1"
                src="/images/shape/shape1.png"
                alt="shape1"
                width={99}
                height={185}
              />
              <Image
                className="shape2"
                src="/images/shape/shape2.png"
                alt="shape2"
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

export default IntroVideo;
