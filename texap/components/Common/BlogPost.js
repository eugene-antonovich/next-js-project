import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">BLOG POST</span>
            <h2>Latest Article From Our Blog</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog1.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>

                  <Link href="/blog" className="tag">
                    Branding
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Branding involves developing strategy to create a point of
                      differentiation
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog2.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Agency
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 13, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(4) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Design is a plan or specification for the construction of
                      an object
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog3.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Marketing
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 12, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(2) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Branding involves developing strategy to create a point
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
