import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const AppScreenshotsStyle3 = () => {
  return (
    <>
      <div className="screenshots-area bg-black-color ptb-100">
        <div className="container">
          <div className="section-title color-white">
            <span className="sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
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
            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots1.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots2.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots3.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots4.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots5.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots4.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppScreenshotsStyle3;
