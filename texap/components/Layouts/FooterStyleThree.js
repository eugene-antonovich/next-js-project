// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FooterStyleThree = () => {
  const currentYear = new Date().getFullYear();

  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/site-logo?populate=*`
      );
      setLogo(response.data);
      // console.log(response.data);
    };
    getLogo();
  }, []);
  // End Logo API

  return (
    <>
      <div className="footer-area footer-style-two bg-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                {logo && (
                  <Link href="/" className="logo">
                    <Image
                      src={logo.data.attributes.whiteLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.whiteLogo.data.attributes
                          .alternativeText
                      }
                      width={138}
                      height={44}
                    />
                  </Link>
                )}

                <p>
                  Best solution for your it startup business,
                  consecteturadipiscing elit. Scelerisque amet odio velit,
                  auctor nam elit nulla.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.messenger.com/" target="_blank">
                      <i className="ri-messenger-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <i className="ri-github-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-2">
                <h3>Company</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/about-simple">About Us</Link>
                  </li>
                  <li>
                    <Link href="/features">Core Services</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/feedback">Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Useful Links</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Return Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How It Works?</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>
                <p>
                  Best solution for your it startup business,
                  consecteturadipiscing elit.
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">
                    <i className="ri-send-plane-2-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright &copy; {currentYear} <strong>Texap</strong>. All Rights
              Reserved by{" "}
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStyleThree;
