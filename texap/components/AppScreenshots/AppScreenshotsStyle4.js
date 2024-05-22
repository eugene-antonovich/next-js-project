import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";
import Image from "next/image";

const AppScreenshotsStyle4 = () => {
  return (
    <>
      <div className="screenshots-area bg-black ptb-100">
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
                src="/images/screenshots/screen2.jpg"
                alt="screen"
                width={950}
                height={578}
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <Image
                src="/images/screenshots/screen3.jpg"
                alt="screen"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen4.jpg"
                alt="screen"
                width={950}
                height={578}
              />
            </SwiperSlide>
          </Swiper>

          <div className="free-trial-btn">
            <Link href="/sign-in" className="default-btn">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppScreenshotsStyle4;
