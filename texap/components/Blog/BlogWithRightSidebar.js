import React from "react";
import Link from "next/link";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import Image from "next/image";

const BlogWithRightSidebar = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-6">
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
                          <i className="ri-time-line"></i> April 14, 2023
                        </li>
                        <li>
                          <i className="ri-message-2-line"></i>
                          <Link href="/blog/details">(0) Comment</Link>
                        </li>
                      </ul>
                      <h3>
                        <Link href="/blog/details">
                          Branding involves developing strategy to create a
                          point of differentiation
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
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
                          Design is a plan or specification for the construction
                          of an object
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
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
                          The new minimum is a digital magazine with a header
                          featuring a thin
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-blog-post">
                    <div className="image">
                      <Link href="/blog/details" className="d-block">
                        <Image
                          src="/images/blog/blog4.jpg"
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
                          WordPress is open source software you can use to
                          create a beautiful
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-blog-post">
                    <div className="image">
                      <Link href="/blog/details" className="d-block">
                        <Image
                          src="/images/blog/blog5.jpg"
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
                          Bootstrap 5 is open source software you can use to
                          create a beautiful
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <div className="nav-links">
                      <Link href="#" className="page-numbers current">
                        1
                      </Link>
                      <Link href="#" className="page-numbers">
                        2
                      </Link>
                      <Link href="#" className="page-numbers">
                        3
                      </Link>
                      <Link
                        href="#"
                        className="next page-numbers"
                        title="Next Page"
                      >
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithRightSidebar;
