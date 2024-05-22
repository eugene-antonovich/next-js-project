import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";
import Image from "next/image";

const AppScreenshots = () => {
  return (
    <>
      <div className="app-screenshots-wrap-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
          </div>

          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation={true}
            modules={[EffectCube, Navigation]}
            className="screen-swiper-slides"
          >
            <SwiperSlide>
              <Image
                src="/images/home-7-8-9/screenshots/screen1.png"
                alt="screen"
                width={950}
                height={580}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/home-7-8-9/screenshots/screen2.jpg"
                alt="screen"
                width={950}
                height={580}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/home-7-8-9/screenshots/screen3.jpg"
                alt="screen"
                width={950}
                height={580}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/home-7-8-9/screenshots/screen4.jpg"
                alt="screen"
                width={950}
                height={580}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppScreenshots;
