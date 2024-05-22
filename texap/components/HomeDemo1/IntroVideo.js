import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const IntroVideo = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  // IntroVideo API
  const [introVideo, setIntroVideo] = React.useState();
  React.useEffect(() => {
    const getIntroVideo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/intro-video?populate=deep`
      );
      setIntroVideo(response.data);
      // console.log(response.data);
    };
    getIntroVideo();
  }, []);
  // End IntroVideo API

  return (
    <>
      {introVideo && (
        <>
          <FsLightbox
            toggler={toggler}
            sources={[`${introVideo.data.attributes.videoLink}`]}
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
                  src={introVideo.data.attributes.videoThumbImage.data.attributes.url}
                  alt="Video Thumb Image"
                  width={1100}
                  height={659}
                />

                <div onClick={() => setToggler(!toggler)} className="video-btn">
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
      )}
    </>
  );
};

export default IntroVideo;
