import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";
import Image from "next/image";

const ClientFeedback = () => {
  return (
    <>
      <div className="feedback-wrap-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLIENT REVIEWS</span>
            <h2>What Our Customer Say About Us</h2>
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
            className="feedback-swiper-wrap-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-wrap-item">
                <div className="rating">
                  <h5>Theme Customization</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type. Lorem Ipsum is simply dummy
                  text of the printing and typesetting.
                </p>

                <div className="client-info">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-wrap-item">
                <div className="rating">
                  <h5>Theme Customization</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type. Lorem Ipsum is simply dummy
                  text of the printing and typesetting.
                </p>

                <div className="client-info">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-wrap-item">
                <div className="rating">
                  <h5>Theme Customization</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type. Lorem Ipsum is simply dummy
                  text of the printing and typesetting.
                </p>

                <div className="client-info">
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;
