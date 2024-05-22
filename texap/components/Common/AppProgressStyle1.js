import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const AppProgressStyle1 = () => {
  // App Progress API
  const [appProgress, setAppProgress] = React.useState();
  React.useEffect(() => {
    const getAppProgress = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/app-progress?populate=deep`
      );
      setAppProgress(response.data);
      // console.log(response.data);
    };
    getAppProgress();
  }, []);
  // End App Progress API

  return (
    <>
      {appProgress && (
        <div className="app-progress-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <div className="app-progress-image text-center">
                  <Image
                    src={appProgress.data.attributes.image.data.attributes.url}
                    alt="app-img"
                    width={720}
                    height={583}
                  />
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="app-progress-content">
                  <span className="sub-title">
                    {appProgress.data.attributes.subTitle}
                  </span>

                  <h2>{appProgress.data.attributes.title}</h2>

                  <ReactMarkdown>
                    {appProgress.data.attributes.textContent}
                  </ReactMarkdown>

                  <Link
                    href={appProgress.data.attributes.btnLink}
                    className="default-btn"
                  >
                    {appProgress.data.attributes.btnText}
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

export default AppProgressStyle1;
