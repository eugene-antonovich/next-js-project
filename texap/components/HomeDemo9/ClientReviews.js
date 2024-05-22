import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientReviews = () => {
  return (
    <>
      <div className="new-feedback-wrap-area pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">CLIENT REVIEWS</span>
            <h2>Some of Our Happy Customer Reviews About Our Products</h2>
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
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="new-feedback-wrap-slides"
          >
            <SwiperSlide className="single-feedback-wrap-card">
              <div className="rating">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type."
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
            </SwiperSlide>

            <SwiperSlide className="single-feedback-wrap-card">
              <div className="rating">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type."
              </p>
              <div className="client-info">
                <Image
                  src="/images/user/user2.jpg"
                  alt="user"
                  width={300}
                  height={300}
                />
                <div className="title">
                  <h3>Deanna Hodges</h3>
                  <span>Spotify Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-feedback-wrap-card">
              <div className="rating">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type."
              </p>
              <div className="client-info">
                <Image
                  src="/images/user/user3.jpg"
                  alt="user"
                  width={300}
                  height={300}
                />
                <div className="title">
                  <h3>Deanna Hodges</h3>
                  <span>Spotify Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="single-feedback-wrap-card">
              <div className="rating">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type."
              </p>
              <div className="client-info">
                <Image
                  src="/images/user/user2.jpg"
                  alt="user"
                  width={300}
                  height={300}
                />
                <div className="title">
                  <h3>Deanna Hodges</h3>
                  <span>Spotify Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
