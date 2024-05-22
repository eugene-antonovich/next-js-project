import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const AppScreenshotsStyle1 = () => {
  // App Screens API
  const [appScreens, setAppScreens] = React.useState();
  React.useEffect(() => {
    const getAppScreens = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/app-screen?populate=deep`
      );
      setAppScreens(response.data);
      // console.log(response.data);
    };
    getAppScreens();
  }, []);
  // End AppScreens API

  return (
    <>
      {appScreens && (
        <div className="screenshots-area bg-color ptb-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">
                {appScreens.data.attributes.subTitle}
              </span>
              <h2>{appScreens.data.attributes.title}</h2>
            </div>

            <Swiper
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="screenshots-slides"
            >
              {appScreens.data.attributes.screens.map((screen) => (
                <SwiperSlide className="single-screenshot-item" key={screen.id}>
                  <Image
                    src={screen.image.data.attributes.url}
                    alt="screenshots"
                    width={528}
                    height={1114}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default AppScreenshotsStyle1;
