import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppProgress = () => {
  return (
    <>
      <div className="new-app-progress-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-content">
                <div className="big-text">Progress</div>
                <span className="sub-title">APP PROGRESS</span>
                <h2>Set Up The Challenges and Track Your Progress</h2>
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
                  your business purpose orem ipsum dummy backup just log in with
                  your mail account from.
                </p>

                <Link href="/app-download" className="default-btn">
                  Start Free Trial
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
              <div className="new-app-progress-image text-center">
                <Image
                  src="/images/home-7-8-9/progress/progress.png"
                  alt="app-img"
                  width={815}
                  height={588}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="new-app-progress-shape">
          <Image
            src="/images/home-7-8-9/progress/shape-1.png"
            alt="image"
            width={87}
            height={101}
          />
        </div>
      </div>
    </>
  );
};

export default AppProgress;
