import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientFeedbackStyle4 = () => {
  return (
    <>
      <div className="feedback-area bg-gradient-color ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="feedback-section-title">
                <span className="sub-title">CLIENT REVIEWS</span>
                <h2>What Our Customer Say About Us</h2>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
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
                    slidesPerView: 2,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="feedback-slides-two"
              >
                <SwiperSlide className="single-feedback-box">
                  <div className="client-info">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/user/user1.jpg"
                        alt="user"
                        width={300}
                        height={300}
                      />
                      <div className="title">
                        <h3>Deanna Hodges</h3>
                        <span>Spotify Developer</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type."
                  </p>

                  <div className="rating d-flex align-items-center justify-content-between">
                    <h5>Theme Customization</h5>
                    <div>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-feedback-box">
                  <div className="client-info">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/user/user2.jpg"
                        alt="user"
                        width={300}
                        height={300}
                      />
                      <div className="title">
                        <h3>Londynn Vargas</h3>
                        <span>PHP Developer</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type."
                  </p>

                  <div className="rating d-flex align-items-center justify-content-between">
                    <h5>Customer Support</h5>
                    <div>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-feedback-box">
                  <div className="client-info">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/user/user3.jpg"
                        alt="user"
                        width={300}
                        height={300}
                      />
                      <div className="title">
                        <h3>James Andy</h3>
                        <span>Moodle Developer</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type."
                  </p>

                  <div className="rating d-flex align-items-center justify-content-between">
                    <h5>Responsive Design</h5>
                    <div>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-line"></i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-feedback-box">
                  <div className="client-info">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/user/user4.jpg"
                        alt="user"
                        width={300}
                        height={300}
                      />
                      <div className="title">
                        <h3>David Warner</h3>
                        <span>Python Developer</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type."
                  </p>

                  <div className="rating d-flex align-items-center justify-content-between">
                    <h5>Design Quality</h5>
                    <div>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackStyle4;
