import React from "react";
import Link from "next/link"; 
import Image from "next/image";

const AppProgressStyle2 = () => {
  return (
    <>
      <div className="app-progress-area bg-black ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-progress-animation-image">
                <div
                  className="app-img"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="50"
                >
                  <Image
                    src="/images/app-progress/app-progress1.png"
                    alt="app-progress"
                    width={680}
                    height={319}
                  />
                </div>

                <div
                  className="app-img"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/app-progress/app-progress2.png"
                    alt="app-progress"
                    width={82}
                    height={538}
                  />
                </div>

                <div
                  className="app-img"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="150"
                >
                  <Image
                    src="/images/app-progress/app-progress3.png"
                    alt="app-progress"
                    width={295}
                    height={235}
                  />
                </div>

                <div
                  className="app-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <Image
                    src="/images/app-progress/app-progress4.png"
                    alt="app-progress"
                    width={356}
                    height={414}
                  />
                </div>

                <div className="app-img main-image">
                  <Image
                    src="/images/app-progress/progress-main.png"
                    alt="app-progress"
                    width={773}
                    height={649}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-progress-content text-white">
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

                <Link href="/sign-in" className="default-btn">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProgressStyle2;
