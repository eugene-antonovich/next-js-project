import React from "react";
import Link from "next/link";
import Image from "next/image";

const SoftwareIntegrations = () => {
  return (
    <>
      <div className="new-software-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="new-software-list">
                <Image
                  src="/images/home-7-8-9/software/border.png"
                  alt="bg-shape"
                  width={490}
                  height={414}
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

            <div className="col-lg-6 col-md-12">
              <div className="new-software-content">
                <div className="big-text">Software</div>

                <span className="sub-title">SOFTWARE INTEGRATIONS</span>

                <h2>
                  Easy & Perfect Solution With Latest Software Integrations
                </h2>

                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. never missyour
                  chance its just began. backup just log in with your mail
                  account from.
                </p>
                <p>
                  Most provabily best for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy.
                </p>

                <Link href="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareIntegrations;
