import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

const AppScreenshotsStyle2 = () => {
  return (
    <>
      <div className="screenshots-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
          </div>

          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            parallax={true}
            slidesPerView={"auto"}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="screenshots-swiper-slides"
          >
            <SwiperSlide>
              <Image
                src="/images/screenshots/screen1.png"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen2.jpg"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen3.jpg"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen4.jpg"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen5.jpg"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen6.jpg"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/screenshots/screen7.jpg"
                alt="screenshots"
                width={950}
                height={578}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppScreenshotsStyle2;
