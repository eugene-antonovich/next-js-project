import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientFeedbackStyle6 = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="testimonials-image">
                <Image
                  src="/images/woman.jpg"
                  alt="testimonials"
                  width={720}
                  height={934}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="testimonials-content">
                <span className="sub-title">CLIENT REVIEWS</span>
                <h2>Customer Reviews About Our App</h2>
              </div>

              <Swiper
                spaceBetween={25}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="testimonials-slides"
              >
                <SwiperSlide className="content">
                  <h3>Londynn Vargas</h3>
                  <span>Spotify Developer</span>
                  <p>
                    Texap is the best digital agency in our area As a midsize
                    software developent company we combine the best of both
                    worlds. We have the focus and speed of the small it
                    outsurcing companies.
                  </p>
                </SwiperSlide>

                <SwiperSlide className="content">
                  <h3>James Andy</h3>
                  <span>PHP Developer</span>
                  <p>
                    Texap is the best digital agency in our area As a midsize
                    software developent company we combine the best of both
                    worlds. We have the focus and speed of the small it
                    outsurcing companies.
                  </p>
                </SwiperSlide>

                <SwiperSlide className="content">
                  <h3>Sarah Taylor</h3>
                  <span>JavaScript Developer</span>
                  <p>
                    Texap is the best digital agency in our area As a midsize
                    software developent company we combine the best of both
                    worlds. We have the focus and speed of the small it
                    outsurcing companies.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackStyle6;
