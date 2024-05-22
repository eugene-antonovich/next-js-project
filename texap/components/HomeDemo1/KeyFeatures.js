import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const KeyFeatures = () => {
  // Key Features API
  const [keyFeatures, setKeyFeatures] = React.useState();
  React.useEffect(() => {
    const getKeyFeatures = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/key-feature?populate=deep`
      );
      setKeyFeatures(response.data);
      // console.log(response.data);
    };
    getKeyFeatures();
  }, []);
  // End Key Features API

  return (
    <>
      {keyFeatures && (
        <div className="features-area ptb-100 bg-F7F7FF">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">
                {keyFeatures.data.attributes.title}
              </span>
              <h2>{keyFeatures.data.attributes.shortText}</h2>
            </div>

            <div className="row justify-content-center">
              {keyFeatures.data.attributes.features.map((feature) => (
                <div
                  className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                  key={feature.id}
                >
                  <div className="single-features-item">
                    <div className={`icon ${feature.iconBgClass}`}>
                      <i className={feature.iconName}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.shortText}</p>
                  </div>
                </div>
              ))}

              <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                <div className="view-more-box">
                  <Link
                    href={keyFeatures.data.attributes.btnLink}
                    className="default-btn"
                  >
                    {keyFeatures.data.attributes.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyFeatures;
