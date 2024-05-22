import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const TrustedPartners = () => {
  return (
    <>
      <div className="new-app-trusted-by">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-3 col-md-12">
            <span className="title">Trusted by:</span>
          </div>

          <div className="col-xl-10 col-lg-9 col-md-12">
            <Swiper
              spaceBetween={25}
              autoplay={{
                delay: 6500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                450: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay]}
              className="new-app-trusted-by-slides"
            >
              <SwiperSlide className="item">
                <Image
                  src="/images/partner/partner3.png"
                  alt="partner"
                  width={175}
                  height={35}
                />
              </SwiperSlide>

              <SwiperSlide className="item">
                <Image
                  src="/images/partner/partner1.png"
                  alt="partner"
                  width={175}
                  height={35}
                />
              </SwiperSlide>

              <SwiperSlide className="item">
                <Image
                  src="/images/partner/partner5.png"
                  alt="partner"
                  width={175}
                  height={35}
                />
              </SwiperSlide>

              <SwiperSlide className="item">
                <Image
                  src="/images/partner/partner6.png"
                  alt="partner"
                  width={175}
                  height={35}
                />
              </SwiperSlide>

              <SwiperSlide className="item">
                <Image
                  src="/images/partner/partner2.png"
                  alt="partner"
                  width={175}
                  height={35}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedPartners;
