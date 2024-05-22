// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FooterStyleOne = () => {
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
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            {logo && (
              <Link href="/" className="logo">
                <Image
                  src={logo.data.attributes.footerLogo.data.attributes.url}
                  alt={
                    logo.data.attributes.footerLogo.data.attributes
                      .alternativeText
                  }
                  width={94}
                  height={104}
                />
              </Link>
            )}

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

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/privacy-policy" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faq" className="nav-link">
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <p className="copyright">
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

export default FooterStyleOne;
