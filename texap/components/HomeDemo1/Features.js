import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Features = () => {
  // Top Feature API
  const [features, setFeatures] = React.useState();
  React.useEffect(() => {
    const getFeatures = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/top-feature?populate=deep`
      );
      setFeatures(response.data);
      // console.log(response.data);
    };
    getFeatures();
  }, []);
  // End Top Feature API

  return (
    <>
      {features && (
        <div className="features-area pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {features.data.attributes.feature.map((feature) => (
                <div
                  className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                  key={feature.id}
                >
                  <div className="single-features-box">
                    <div className={`icon ${feature.iconBgClass}`}>
                      <i className={feature.iconName}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.shortText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
