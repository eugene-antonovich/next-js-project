// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const NavbarStyleFour = () => {
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

  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-four">
        <div className="texap-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              {logo && (
                <Link href="/" className="navbar-brand">
                  <Image
                    src={logo.data.attributes.blackLogo.data.attributes.url}
                    alt={
                      logo.data.attributes.blackLogo.data.attributes
                        .alternativeText
                    }
                    width={138}
                    height={44}
                  />
                </Link>
              )}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="dropdown-toggle nav-link"
                    >
                      About Us
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about-simple/"
                          className={`nav-link ${
                            currentPath == "/about-simple/" && "active"
                          }`}
                        >
                          About Simple
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-modern/"
                          className={`nav-link ${
                            currentPath == "/about-modern/" && "active"
                          }`}
                        >
                          About Modern
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="dropdown-toggle nav-link"
                    >
                      Pages
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Pages I</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/team/"
                                    className={`nav-link ${
                                      currentPath == "/team/" && "active"
                                    }`}
                                  >
                                    Team 1
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/team-2/"
                                    className={`nav-link ${
                                      currentPath == "/team-2/" && "active"
                                    }`}
                                  >
                                    Team 2
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/how-it-works/"
                                    className={`nav-link ${
                                      currentPath == "/how-it-works/" &&
                                      "active"
                                    }`}
                                  >
                                    How It Works
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/gallery/"
                                    className={`nav-link ${
                                      currentPath == "/gallery/" && "active"
                                    }`}
                                  >
                                    Gallery
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/"
                                    className={`nav-link ${
                                      currentPath == "/services/" && "active"
                                    }`}
                                  >
                                    Services
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/pricing"
                                    className={`nav-link ${
                                      currentPath == "/pricing/" && "active"
                                    }`}
                                  >
                                    Pricing Plan
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages II</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/feedback/"
                                    className={`nav-link ${
                                      currentPath == "/feedback/" && "active"
                                    }`}
                                  >
                                    Reviews
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/sign-in/"
                                    className={`nav-link ${
                                      currentPath == "/sign-in/" && "active"
                                    }`}
                                  >
                                    Sign In
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/sign-up/"
                                    className={`nav-link ${
                                      currentPath == "/sign-up/" && "active"
                                    }`}
                                  >
                                    Sign Up
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/forget-password/"
                                    className={`nav-link ${
                                      currentPath == "/forget-password/" &&
                                      "active"
                                    }`}
                                  >
                                    Forget Password
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/privacy-policy/"
                                    className={`nav-link ${
                                      currentPath == "/privacy-policy/" &&
                                      "active"
                                    }`}
                                  >
                                    Privacy Policy
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/terms-conditions/"
                                    className={`nav-link ${
                                      currentPath == "/terms-conditions/" &&
                                      "active"
                                    }`}
                                  >
                                    Terms & Conditions
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages III</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/screenshots/"
                                    className={`nav-link ${
                                      currentPath == "/screenshots/" && "active"
                                    }`}
                                  >
                                    Screenshots
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/faq/"
                                    className={`nav-link ${
                                      currentPath == "/faq/" && "active"
                                    }`}
                                  >
                                    FAQ
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/coming-soon/"
                                    className={`nav-link ${
                                      currentPath == "/coming-soon/" && "active"
                                    }`}
                                  >
                                    Coming Soon
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/404/"
                                    className={`nav-link ${
                                      currentPath == "/404/" && "active"
                                    }`}
                                  >
                                    404 Error Page
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/app-download/"
                                    className={`nav-link ${
                                      currentPath == "/app-download/" &&
                                      "active"
                                    }`}
                                  >
                                    App Download
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/contact/"
                                    className={`nav-link ${
                                      currentPath == "/contact/" && "active"
                                    }`}
                                  >
                                    Contact Us
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <Image
                                  src="/images/navbar.jpg"
                                  alt="image"
                                  width={860}
                                  height={700}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="dropdown-toggle nav-link"
                    >
                      Features
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features/"
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features 1
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/features-2"
                          className={`nav-link ${
                            currentPath == "/features-2/" && "active"
                          }`}
                        >
                          Features 2
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="dropdown-toggle nav-link"
                    >
                      Blog
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/with-right-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blog/with-right-sidebar/" &&
                            "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/with-left-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blog/with-left-sidebar/" &&
                            "active"
                          }`}
                        >
                          Blog Left Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/details/"
                          className={`nav-link ${
                            currentPath == "/blog/details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                <Link href="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleFour;
