import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PricingPlanStyle1 = () => {
  // Pricing plan API
  const [pricingPlan, setPricingPlan] = React.useState();
  React.useEffect(() => {
    const getPricingPlan = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/pricing-plan?populate=deep`
      );
      setPricingPlan(response.data);
      // console.log(response.data);
    };
    getPricingPlan();
  }, []);
  // End Pricing plan API

  return (
    <>
      {pricingPlan && (
        <div className="pricing-area bg-gradient-color pt-100 pb-75">
          <div className="container">
            <div className="pricing-tabs">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                  <div className="pricing-section-title">
                    <span className="sub-title">
                      {pricingPlan.data.attributes.subTitle}
                    </span>
                    <h2>{pricingPlan.data.attributes.title}</h2>
                    <p>{pricingPlan.data.attributes.shortText}</p>
                  </div>
                </div>

                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    {pricingPlan.data.attributes.pricingPlan.map((pricing) => (
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        data-aos-once="true"
                        key={pricing.id}
                      >
                        <div className="single-pricing-table">
                          <div className="title">
                            <h3>{pricing.title}</h3>
                            <p>{pricing.subTitle}</p>
                          </div>
                          <span className="popular">{pricing.popularTag}</span>
                          <div className="price">
                            {pricing.price} <span>{pricing.duration}</span>
                          </div>

                          <Link href={pricing.btnLink} className="default-btn">
                            {pricing.btnText}
                          </Link>

                          <ul className="features-list">
                            {pricing.featuresList.map((feature) => (
                              <li key={feature.id}>
                                <i className={feature.iconName}></i>{" "}
                                {feature.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="shape7">
            <Image
              src="/images/shape/shape6.png"
              alt="shape"
              width={221}
              height={125}
            />
          </div>
          <div className="shape8">
            <Image
              src="/images/shape/shape7.png"
              alt="shape"
              width={78}
              height={47}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PricingPlanStyle1;
