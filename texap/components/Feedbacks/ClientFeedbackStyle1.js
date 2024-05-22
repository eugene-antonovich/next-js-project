import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const ClientFeedbackStyle1 = () => {
  // Client Feedback API
  const [clientFeedback, setClientFeedback] = React.useState();
  React.useEffect(() => {
    const getClientFeedback = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/client-feedback?populate=deep`
      );
      setClientFeedback(response.data);
      console.log(response.data);
    };
    getClientFeedback();
  }, []);
  // End Client Feedback API

  return (
    <>
      {clientFeedback && (
        <div className="feedback-area ptb-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">{clientFeedback.subTitle}</span>
              <h2>{clientFeedback.title}</h2>
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
                  slidesPerView: 3,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="feedback-slides"
            >
              {clientFeedback.data.attributes.feedbackItems.map((feedback) => (
                <SwiperSlide className="single-feedback-box" key={feedback.id}>
                  <div className="client-info">
                    <div className="d-flex align-items-center">
                      <Image
                        src={feedback.image.data.attributes.url}
                        alt="user"
                        width={300}
                        height={300}
                      />
                      <div className="title">
                        <h3>{feedback.name}</h3>
                        <span>{feedback.designation}</span>
                      </div>
                    </div>
                  </div>

                  <ReactMarkdown>{feedback.feedbackText}</ReactMarkdown>

                  <div className="rating d-flex align-items-center justify-content-between">
                    {/* <h5>Theme Customization</h5> */}

                    <div>
                      {feedback.rating.map((rating) => (
                        <div
                          key={rating.id}
                          style={{ display: "inline-block", fontSize: "16px" }}
                        >
                          <i className={rating.iconName}></i>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientFeedbackStyle1;
