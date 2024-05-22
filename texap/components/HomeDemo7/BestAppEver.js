import React from "react";
import Link from "next/link";
import Image from "next/image";

const BestAppEver = () => {
  return (
    <>
      <div className="app-ever-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-ever-image">
                <Image
                  src="/images/home-7-8-9/app-ever/app-ever.png"
                  alt="image"
                  width={817}
                  height={727}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-ever-content">
                <h2>Most Probably You Are Getting Best App Ever</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began.
                </p>
                <ul className="list">
                  <li>
                    <div className="icon bg2">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Free Download App</h3>
                    <p>
                      Most provabily best you can trust on it, just log in with
                      your mail account from play store and using whatever you
                      want for your business.
                    </p>
                  </li>
                  
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
                      <i className="ri-cloud-line"></i>
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

        <div className="app-ever-shape-1">
          <Image
            src="/images/home-7-8-9/app-ever/shape-1.png"
            alt="image"
            width={94}
            height={116}
          />
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
