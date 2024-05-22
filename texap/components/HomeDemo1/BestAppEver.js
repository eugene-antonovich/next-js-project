import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const BestAppEver = () => {
  // About App API
  const [aboutApp, setAboutApp] = React.useState();
  React.useEffect(() => {
    const getAboutApp = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/about-app?populate=deep`
      );
      setAboutApp(response.data);
      // console.log(response.data);
    };
    getAboutApp();
  }, []);
  // End About App API

  return (
    <>
      {aboutApp && (
        <div className="features-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="features-content">
                  <h2>{aboutApp.data.attributes.title}</h2>
                  <p>{aboutApp.data.attributes.shortDec}</p>

                  <ul className="features-list">
                    {aboutApp.data.attributes.features.map((feature) => (
                      <li key={feature.id}>
                        <div className={`icon ${feature.iconBgClass}`}>
                          <i className={feature.iconName}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.shortText}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="btn-box">
                    <Link
                      href={aboutApp.data.attributes.btnLink1}
                      className="default-btn"
                    >
                      {aboutApp.data.attributes.btnText1}
                    </Link>
                    <Link
                      href={aboutApp.data.attributes.btnLink2}
                      className="link-btn"
                    >
                      {aboutApp.data.attributes.btnText2}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="features-image text-center">
                  <Image
                    src={aboutApp.data.attributes.image.data.attributes.url}
                    alt="app-img"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                    width={474}
                    height={737}
                  />

                  <div className="shape">
                    <Image
                      className="shape3"
                      src="/images/shape/shape2.png"
                      alt="shape"
                      width={149}
                      height={185}
                    />
                    <Image
                      className="shape4"
                      src="/images/shape/shape3.png"
                      alt="shape"
                      width={121}
                      height={363}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-shape1">
            <Image
              src="/images/shape/bg-shape1.png"
              alt="bg-shape"
              width={1922}
              height={777}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BestAppEver;
