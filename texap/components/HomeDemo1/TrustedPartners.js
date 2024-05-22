import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TrustedPartners = () => {
  // Partner API
  const [partner, setPartner] = React.useState();
  React.useEffect(() => {
    const getPartner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/partner?populate=deep`
      );
      setPartner(response.data);
      // console.log(response.data);
    };
    getPartner();
  }, []);
  // End Partner API

  return (
    <>
      {partner && (
        <div className="trusted-by">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-12">
              <span className="title">Trusted by:</span>
            </div>

            <div className="col-lg-10 col-md-12">
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
                    slidesPerView: 4,
                  },
                }}
                modules={[Autoplay]}
                className="trusted-by-slides"
              >
                {partner.data.attributes.partnerImg.map((partner) => (
                  <SwiperSlide className="item" key={partner.id}>
                    <Image
                      src={partner.image.data.attributes.url}
                      alt={partner.image.data.attributes.alternativeText}
                      width={175}
                      height={35}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrustedPartners;
