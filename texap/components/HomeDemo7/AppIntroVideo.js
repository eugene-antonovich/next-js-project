import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
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
          <div className="app-video-box">
            <Image
              src="/images/home-7-8-9/video/video.jpg"
              alt="video"
              width={1320}
              height={690}
            />

            <div
              onClick={() => setToggler(!toggler)}
              className="video-btn popup-youtube"
            >
              <i className="ri-play-line"></i>
            </div>

            <div className="shape">
              <Image
                className="shape-1"
                src="/images/home-7-8-9/video/shape-1.png"
                alt="shape1"
                width={104}
                height={131}
              />
              <Image
                className="shape-2"
                src="/images/home-7-8-9/video/shape-2.png"
                alt="shape2"
                width={182}
                height={179}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppIntroVideo;
