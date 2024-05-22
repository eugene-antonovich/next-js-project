import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent = () => {
  return (
    <>
      <div className="app-about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-about-image">
                <Image
                  src="/images/home-7-8-9/about/about.png"
                  alt="image"
                  width={745}
                  height={635}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-about-content">
                <div className="big-text">About Us</div>
                <span className="sub-title">ABOUT US</span>
                <h2>Most Probably You Are Getting Best App Ever</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began.
                </p>
                
                <ul className="list">
                  <li>
                    <div className="icon">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Trusted and Reliable</h3>
                    <p>
                      Most provabily best you can trust on it, just log in with
                      your mail account from play store and using whatever you
                      want for your business.
                    </p>
                  </li>
                  <li>
                    <div className="icon bg2">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Cloud Storage</h3>
                    <p>
                      Just log in with your mail account from play store and
                      using whatever you want for your business purpose.
                    </p>
                  </li>
                </ul>
                <div className="btn-box">
                  <Link href="/app-download" className="default-btn">
                    Start Free Trial
                  </Link>
                  <Link href="/features-1" className="link-btn">
                    See All Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="app-about-shape-1">
          <Image
            src="/images/home-7-8-9/about/shape-1.png"
            alt="image"
            width={120}
            height={151}
          />
        </div>
        <div className="app-about-shape-2">
          <Image
            src="/images/home-7-8-9/about/shape-2.png"
            alt="image"
            width={87}
            height={101}
          />
        </div>
        <div className="app-about-shape-3">
          <Image
            src="/images/home-7-8-9/about/shape-3.png"
            alt="image"
            width={77}
            height={51}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
