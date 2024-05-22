import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const SoftwareIntegrations = () => {
  // Software Integration API
  const [softwareIntegration, setSoftwareIntegration] = React.useState();
  React.useEffect(() => {
    const getSoftwareIntegration = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/software-integration?populate=deep`
      );
      setSoftwareIntegration(response.data);
      // console.log(response.data);
    };
    getSoftwareIntegration();
  }, []);
  // End Software Integration API

  return (
    <>
      {softwareIntegration && (
        <div className="software-integrations-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="software-integrations-content">
                  <span className="sub-title">
                    {softwareIntegration.data.attributes.subTitle}
                  </span>
                  <h2>{softwareIntegration.data.attributes.title}</h2>

                  <ReactMarkdown>
                    {softwareIntegration.data.attributes.textContent}
                  </ReactMarkdown>

                  <Link
                    href={softwareIntegration.data.attributes.btnLink}
                    className="default-btn"
                  >
                    {softwareIntegration.data.attributes.btnText}
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <div className="software-integrations-list">
                  <Image
                    src="/images/shape/bg-shape2.png"
                    alt="bg-shape"
                    width={1363}
                    height={1188}
                  />

                  <ul>
                    <li>
                      <Image
                        src="/images/software-integrations/atlassian.png"
                        className="atlassian"
                        alt="atlassian"
                        width={45}
                        height={45}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/software-integrations/skype.png"
                        className="skype"
                        alt="skype"
                        width={55}
                        height={55}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/software-integrations/gdrive.png"
                        className="gdrive"
                        alt="gdrive"
                        width={55}
                        height={49}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/software-integrations/slack.png"
                        className="slack"
                        alt="slack"
                        width={70}
                        height={70}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/software-integrations/jira.png"
                        className="jira"
                        alt="jira"
                        width={59}
                        height={59}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/software-integrations/frame.png"
                        className="frame"
                        alt="frame"
                        width={69}
                        height={73}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="shape6">
            <Image
              src="/images/shape/shape5.png"
              alt="shape"
              width={89}
              height={104}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SoftwareIntegrations;
